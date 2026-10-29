'use client';
import { useEffect, useRef } from 'react';

export function Orb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => el.classList.toggle('paused', !e.isIntersecting));
    io.observe(el);

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return () => io.disconnect();

    let raf = 0;
    let x = 0, y = 0;
    const apply = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const dx = Math.max(-0.5, Math.min(0.5, (x - (r.left + r.width / 2)) / window.innerWidth));
      const dy = Math.max(-0.5, Math.min(0.5, (y - (r.top + r.height / 2)) / window.innerHeight));
      el.style.setProperty('--tx', `${(dx * 70).toFixed(1)}px`);
      el.style.setProperty('--ty', `${(dy * 50).toFixed(1)}px`);
      el.style.setProperty('--ry', `${(dx * 30).toFixed(1)}deg`);
      el.style.setProperty('--rx', `${(-dy * 30).toFixed(1)}deg`);
      el.style.setProperty('--hx', `${(34 + dx * 70).toFixed(1)}%`);
      el.style.setProperty('--hy', `${(28 + dy * 70).toFixed(1)}%`);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (!raf && !el.classList.contains('paused')) raf = requestAnimationFrame(apply);
    };
    const reset = () => {
      ['--tx', '--ty', '--rx', '--ry', '--hx', '--hy'].forEach((p) => el.style.removeProperty(p));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    return () => {
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="orb" ref={ref} aria-hidden="true">
      <div className="orb-glow" />
      <div className="orb-3d">
        <div className="orb-core"><div className="orb-flow" /></div>
        <div className="orb-ring r1" />
        <div className="orb-ring r2" />
      </div>
    </div>
  );
}
