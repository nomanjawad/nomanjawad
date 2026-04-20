'use client';
import { useEffect, useRef } from 'react';
import type { Experience } from '@/lib/types';

export function ExperienceTimeline({ experience }: { experience: Experience }) {
  const xpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xp = xpRef.current;
    if (!xp) return;
    const rows = xp.querySelectorAll<HTMLDivElement>('.xp-row');
    const checkRows = () => {
      const iH = window.innerHeight;
      rows.forEach((r) => {
        if (r.classList.contains('in')) return;
        const rect = r.getBoundingClientRect();
        if (rect.top < iH * 0.85 && rect.bottom > 0) r.classList.add('in');
      });
    };
    let raf: number | null = null;
    const update = () => {
      raf = null;
      const rect = xp.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const end = vh * 0.2;
      const total = rect.height + (start - end);
      const scrolled = start - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      xp.style.setProperty('--xp-progress', p.toFixed(3));
    };
    const onScroll = () => {
      checkRows();
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    checkRows();
    update();
    const t = setTimeout(checkRows, 200);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="xp" ref={xpRef}>
      {experience.rows.map((r, i) => (
        <div key={i} className={`xp-row${r.current ? ' current' : ''}`}>
          <div className="dot" />
          <div className="date">{r.date}</div>
          <div>
            <div className="role">{r.role}</div>
            <div className="org">{r.org}</div>
          </div>
          <div className="desc">{r.desc}</div>
          <div className="tag">{r.tag}</div>
        </div>
      ))}
    </div>
  );
}
