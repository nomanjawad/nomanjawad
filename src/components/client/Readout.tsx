'use client';
import { useEffect, useState } from 'react';

/**
 * Corner instrument readout: pointer position on the page, plus the page's own
 * largest contentful paint and cumulative layout shift, measured live.
 */
export function Readout() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [lcp, setLcp] = useState<number | null>(null);
  const [cls, setCls] = useState(0);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0;
    let x = 0, y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY + window.scrollY;
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; setPos({ x, y }); });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (typeof PerformanceObserver === 'undefined') return;
    const obs: PerformanceObserver[] = [];
    try {
      const lcpObs = new PerformanceObserver((list) => {
        const last = list.getEntries().at(-1);
        if (last) setLcp(last.startTime);
      });
      lcpObs.observe({ type: 'largest-contentful-paint', buffered: true });
      obs.push(lcpObs);
    } catch {}
    try {
      let total = 0;
      const clsObs = new PerformanceObserver((list) => {
        for (const e of list.getEntries() as (PerformanceEntry & { hadRecentInput?: boolean; value?: number })[]) {
          if (!e.hadRecentInput && e.value) total += e.value;
        }
        setCls(total);
      });
      clsObs.observe({ type: 'layout-shift', buffered: true });
      obs.push(clsObs);
    } catch {}
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const pad = (n: number) => String(Math.max(0, Math.round(n))).padStart(4, '0');

  return (
    <div className="readout" aria-hidden="true">
      <span>X <b>{pad(pos.x)}</b> <span className="u">px</span></span>
      <span>Y <b>{pad(pos.y)}</b> <span className="u">px</span></span>
      <span className="live">LCP <b>{lcp === null ? '—' : (lcp / 1000).toFixed(2)}</b> <span className="u">s</span></span>
      <span className="live">CLS <b>{cls.toFixed(3)}</b></span>
    </div>
  );
}
