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
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => io.observe(el));
    };
    observeAll();
    // Elements rendered a moment after navigation (fonts, client components) get picked up too.
    const t = setTimeout(observeAll, 400);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);
  return null;
}
