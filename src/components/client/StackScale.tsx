'use client';
import { useRef } from 'react';
import { useScrollFrame } from '@/lib/useScrollFrame';

/** Scales each sticky `.stack-item` down slightly as later cards slide over it. */
export function StackScale({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('.stack-item'));
    if (!items.length) return;
    const sticky = getComputedStyle(items[0]).position === 'sticky';
    const r = el.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    const progress = total > 0 ? Math.max(0, Math.min(1, -r.top / total)) : 0;
    const n = items.length;
    items.forEach((item, i) => {
      if (!sticky) { item.style.transform = ''; return; }
      const target = 1 - (n - 1 - i) * 0.03;
      const start = i / n;
      const t = Math.max(0, Math.min(1, (progress - start) / (1 - start)));
      item.style.transform = `scale(${(1 + (target - 1) * t).toFixed(4)})`;
    });
  });

  return <div className="stack" ref={ref}>{children}</div>;
}
