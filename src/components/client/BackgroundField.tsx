'use client';
import { useEffect, useRef } from 'react';

export function BackgroundField() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const field = ref.current;
    if (!field) return;
    let activated = false;
    const onMove = (e: MouseEvent) => {
      if (!activated) {
        field.classList.add('live');
        activated = true;
      }
      field.style.setProperty('--mx', (e.clientX / window.innerWidth) * 100 + '%');
      field.style.setProperty('--my', (e.clientY / window.innerHeight) * 100 + '%');
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return <div ref={ref} className="bg-field" aria-hidden="true" />;
}
