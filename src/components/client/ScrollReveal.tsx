'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Adds `.in` to `.reveal` elements as they enter the viewport.
 * Uses an IntersectionObserver so scrolling never triggers layout reads.
 */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '-40px 0px -40px 0px', threshold: 0 },
    );
    const observeAll = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        // One synchronous check so content already on screen reveals at first paint.
        const r = el.getBoundingClientRect();
        if (r.top < vh - 40 && r.bottom > 40) el.classList.add('in');
        else io.observe(el);
      });
    };
    observeAll();
    // Elements rendered a moment after navigation (fonts, client components) get picked up too.
    const t = setTimeout(observeAll, 400);
    // Safety net: once scrolling settles, reveal anything on screen the observer has not reported yet.
    window.addEventListener('scrollend', observeAll);
    return () => { clearTimeout(t); window.removeEventListener('scrollend', observeAll); io.disconnect(); };
  }, [pathname]);
  return null;
}
