'use client';
import { useEffect, useRef, useState } from 'react';
import type { Testimonials } from '@/lib/types';

type Quote = Testimonials['quotes'][number];

/** The lead quote cycles through every testimonial. Pauses on hover, focus, off-screen and reduced motion. */
export function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [cur, setCur] = useState(0);
  const [fade, setFade] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const visible = useRef(true);

  useEffect(() => {
    if (quotes.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    const io = el && new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; });
    if (el && io) io.observe(el);
    const t = setInterval(() => {
      if (paused.current || !visible.current || document.documentElement.dataset.motion === 'off') return;
      setFade(true);
      setTimeout(() => { setCur((c) => (c + 1) % quotes.length); setFade(false); }, 380);
    }, 7000);
    return () => { clearInterval(t); io?.disconnect(); };
  }, [quotes.length]);

  const q = quotes[cur];
  return (
    <div
      ref={ref}
      className="tm-rot"
      onPointerEnter={() => { paused.current = true; }}
      onPointerLeave={() => { paused.current = false; }}
      onFocus={() => { paused.current = true; }}
      onBlur={() => { paused.current = false; }}
    >
      <blockquote className={`tm-lead${fade ? ' fade' : ''}`} aria-live="polite">
        <p>“{q.quote}”</p>
        <footer><b>{q.name}</b><span className="lbl">{q.title} · {q.meta}</span></footer>
      </blockquote>
      {quotes.length > 1 && (
        <div className="tm-dots" role="tablist" aria-label="Testimonials">
          {quotes.map((x, i) => (
            <button
              key={x.name}
              type="button"
              role="tab"
              aria-selected={i === cur}
              aria-label={`Quote from ${x.name}`}
              className={i === cur ? 'on' : undefined}
              onClick={() => { setCur(i); setFade(false); }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
