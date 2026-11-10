'use client';
import { useEffect, useRef, useState } from 'react';
import { ROUTES } from '@/lib/homeCopy';
import { track } from '@/lib/track';

type Path = { id: string; d: string; side: 'in' | 'out' };

/** Inputs → one codebase → outputs. Connectors flow while on screen; hovering a tool lights its route. */
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
        const side = item.dataset.side as 'in' | 'out';
        // Every route is drawn from the tool toward the core, so both sides flow into the middle.
        const ax = side === 'in' ? b.right - r.left : b.left - r.left;
        const ay = y;
        const bx = side === 'in' ? c.left - r.left : c.right - r.left;
        const by = cy;
        const mx = (ax + bx) / 2;
        next.push({ id: item.dataset.id!, side, d: `M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}` });
      });
      setPaths(next);
      setSize({ w: r.width, h: r.height });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-live', e.isIntersecting), { rootMargin: '80px' });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
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
          onPointerEnter={() => { setHot(id); track('route_hover', { tool: label, side }); }}
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
        {paths.map((p) => <path key={p.id} d={p.d} className={`${p.side}${hot === p.id ? ' on' : ''}`} />)}
      </svg>
      <div className="rt-side rt-in">
        <span className="rt-lbl">{ROUTES.inLabel} <i aria-hidden="true">→</i></span>
        <ul className="rt-col" aria-label="What you can start with">
          {ROUTES.inputs.map((l, i) => item(l, 'in', i))}
        </ul>
      </div>
      <div className="rt-centre">
        <span className="rt-mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <b>{ROUTES.center.title}</b>
        <span className="lbl">{ROUTES.center.sub}</span>
      </div>
      <div className="rt-side rt-out">
        <span className="rt-lbl"><i aria-hidden="true">←</i> {ROUTES.outLabel}</span>
        <ul className="rt-col" aria-label="What it ships to">
          {ROUTES.outputs.map((l, i) => item(l, 'out', i))}
        </ul>
      </div>
    </div>
  );
}
