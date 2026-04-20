'use client';
import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const check = () => {
      const iH = window.innerHeight;
      const pad = 40;
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < iH - pad && r.bottom > pad) el.classList.add('in');
      });
    };
    let raf: number | null = null;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = null; check(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    requestAnimationFrame(check);
    const t1 = setTimeout(check, 100);
    const t2 = setTimeout(check, 400);
    const t3 = setTimeout(check, 900);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, []);
  return null;
}
