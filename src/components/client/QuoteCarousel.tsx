'use client';
import { useEffect, useRef, useState } from 'react';
import type { Testimonials } from '@/lib/types';

export function QuoteCarousel({ testimonials }: { testimonials: Testimonials }) {
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const total = testimonials.quotes.length;

  const start = () => {
    stop();
    if (total <= 1) return;
    timerRef.current = setInterval(() => setCur((c) => (c + 1) % total), 6000);
  };
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', start);
    return () => {
      stop();
      wrap.removeEventListener('mouseenter', stop);
      wrap.removeEventListener('mouseleave', start);
    };
  }, [total]);

  return (
    <div className="quotes reveal" ref={wrapRef}>
      {testimonials.quotes.map((q, i) => (
        <div key={i} className={`quote-slide${i === cur ? ' on' : ''}`}>
          <blockquote>{q.quote}</blockquote>
          <div className="quote-who">
            <b>{q.name}</b>
            {q.title}
            <br />
            <span style={{ color: 'var(--fg-fade)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {q.meta}
            </span>
          </div>
        </div>
      ))}
      <div className="quote-nav">
        {testimonials.quotes.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === cur ? 'on' : ''}
            aria-label={`Quote ${i + 1}`}
            onClick={() => { setCur(i); start(); }}
          />
        ))}
      </div>
    </div>
  );
}
