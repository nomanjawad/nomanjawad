'use client';
import { useEffect, useRef } from 'react';

/**
 * Corner instrument readout: pointer position on the page, plus the page's own
 * largest contentful paint and cumulative layout shift, measured live.
 * Writes straight to the DOM so pointer movement never re-renders React.
 */
export function Readout() {
  const xRef = useRef<HTMLElement>(null);
  const yRef = useRef<HTMLElement>(null);
  const lcpRef = useRef<HTMLElement>(null);
  const clsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const pad = (n: number) => String(Math.max(0, Math.round(n))).padStart(4, '0');
    let raf = 0;
    let x = 0, y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY + window.scrollY;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        if (xRef.current) xRef.current.textContent = pad(x);
        if (yRef.current) yRef.current.textContent = pad(y);
      });
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
        if (last && lcpRef.current) lcpRef.current.textContent = (last.startTime / 1000).toFixed(2);
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
        if (clsRef.current) clsRef.current.textContent = total.toFixed(3);
      });
      clsObs.observe({ type: 'layout-shift', buffered: true });
      obs.push(clsObs);
    } catch {}
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="readout" aria-hidden="true">
      <span>X <b ref={xRef}>0000</b> <span className="u">px</span></span>
      <span>Y <b ref={yRef}>0000</b> <span className="u">px</span></span>
      <span className="live">LCP <b ref={lcpRef}>—</b> <span className="u">s</span></span>
      <span className="live">CLS <b ref={clsRef}>0.000</b></span>
    </div>
  );
}
