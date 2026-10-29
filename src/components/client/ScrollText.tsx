'use client';
import { Fragment, useRef } from 'react';
import { useScrollFrame } from '@/lib/useScrollFrame';

/** Paragraph whose characters brighten one by one as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, (vh * 0.8 - r.top) / (r.height + vh * 0.6)));
    el.style.setProperty('--p', (p * 1.1).toFixed(3));
  });

  const total = text.length;
  let idx = 0;
  return (
    <p className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, wi) => (
          <Fragment key={wi}>
            <span className="st-w">
              {Array.from(word).map((ch, ci) => (
                <span key={ci} className="st-c" style={{ '--i': (idx++ / total).toFixed(3) } as React.CSSProperties}>{ch}</span>
              ))}
            </span>
            {(idx++, ' ')}
          </Fragment>
        ))}
      </span>
    </p>
  );
}
