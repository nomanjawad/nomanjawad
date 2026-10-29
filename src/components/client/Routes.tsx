'use client';
import { useEffect, useRef, useState } from 'react';
import { ROUTES } from '@/lib/homeCopy';

type Path = { id: string; d: string };

/** Inputs → one codebase → outputs. Hovering or focusing a tool lights its route. */
export function Routes() {
  const ref = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Path[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hot, setHot] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const draw = () => {
      const r = el.getBoundingClientRect();
      const centre = el.querySelector<HTMLElement>('.rt-centre');
      if (!centre || r.width < 760) { setPaths([]); return; }
      const c = centre.getBoundingClientRect();
      const cy = c.top + c.height / 2 - r.top;
      const next: Path[] = [];
      el.querySelectorAll<HTMLElement>('.rt-item').forEach((item) => {
        const b = item.getBoundingClientRect();
        const y = b.top + b.height / 2 - r.top;
        const isIn = item.dataset.side === 'in';
        const x1 = isIn ? b.right - r.left : b.left - r.left;
        const x2 = isIn ? c.left - r.left : c.right - r.left;
        const mx = (x1 + x2) / 2;
        next.push({ id: item.dataset.id!, d: `M ${x1} ${y} C ${mx} ${y}, ${mx} ${cy}, ${x2} ${cy}` });
      });
      setPaths(next);
      setSize({ w: r.width, h: r.height });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const item = (label: string, side: 'in' | 'out', i: number) => {
    const id = `${side}-${i}`;
    return (
      <li key={id}>
        <button
          type="button"
          className={`rt-item${hot === id ? ' on' : ''}`}
          data-id={id}
          data-side={side}
          onPointerEnter={() => setHot(id)}
          onPointerLeave={() => setHot(null)}
          onFocus={() => setHot(id)}
          onBlur={() => setHot(null)}
        >
          {label}
        </button>
      </li>
    );
  };

  return (
    <div className="rt" ref={ref}>
      <svg className="rt-svg" width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} aria-hidden="true">
        {paths.map((p) => <path key={p.id} d={p.d} className={hot === p.id ? 'on' : undefined} />)}
      </svg>
      <ul className="rt-col rt-in" aria-label="What you can start with">
        {ROUTES.inputs.map((l, i) => item(l, 'in', i))}
      </ul>
      <div className="rt-centre">
        <span className="rt-mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <b>{ROUTES.center.title}</b>
        <span className="lbl">{ROUTES.center.sub}</span>
      </div>
      <ul className="rt-col rt-out" aria-label="What it ships to">
        {ROUTES.outputs.map((l, i) => item(l, 'out', i))}
      </ul>
    </div>
  );
}
