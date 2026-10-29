'use client';
import { useEffect, useRef, useState } from 'react';

/** PLACEHOLDER lines: what happens after a brief lands. Replace with the real pipeline. */
const LINES = [
  { t: '09:14', s: '$', m: 'brief received · figma file, loom, deadline' },
  { t: '09:52', s: '→', m: 'scope + timeline sent · fixed quote, 2 working days', ok: true },
  { t: 'wk 1', s: '→', m: 'build · weekly preview on a live URL' },
  { t: 'wk 2', s: '→', m: 'typed · tested · every generated line read by hand', ok: true },
  { t: 'wk 3', s: '→', m: 'checks · lighthouse 100 · headers A+ · WCAG AA', ok: true },
  { t: 'wk 3', s: '→', m: 'deployed to production · handover docs · keys yours', ok: true },
];

/** A terminal that replays the project pipeline. Loops while on screen; static under reduced motion. */
export function DeployLog() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(LINES.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    let live = false;
    let n = 0;
    let timer = 0;
    const step = () => {
      if (!live || document.documentElement.dataset.motion === 'off') { timer = window.setTimeout(step, 600); return; }
      n = n >= LINES.length ? 0 : n + 1;
      setShown(n);
      timer = window.setTimeout(step, n === LINES.length ? 3200 : n === 0 ? 500 : 850);
    };
    const io = new IntersectionObserver(([e]) => { live = e.isIntersecting; });
    io.observe(el);
    setShown(0);
    timer = window.setTimeout(step, 600);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, []);

  return (
    <div className="dlog" ref={ref} aria-label="Project pipeline">
      <div className="dlog-bar"><i /><i /><i /><span>noman@studio · project.log</span></div>
      <ol className="dlog-lines">
        {LINES.map((l, i) => (
          <li key={i} className={i < shown ? 'on' : undefined}>
            <span className="dlog-t">{l.t}</span>
            <span className="dlog-s">{l.s}</span>
            <span className="dlog-m">{l.m}</span>
            {l.ok && <span className="dlog-ok">✓</span>}
          </li>
        ))}
        <li className={`dlog-cursor${shown >= LINES.length ? ' done' : ''}`} aria-hidden="true">
          <span className="dlog-t" /><span className="dlog-s">$</span><span className="dlog-m"><i /></span>
        </li>
      </ol>
    </div>
  );
}
