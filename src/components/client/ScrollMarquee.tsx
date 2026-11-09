'use client';
import { useRef } from 'react';
import { useScrollFrame } from '@/lib/useScrollFrame';

const VARIANTS = ['', 'outline', '', 'hot', 'outline', ''];

export function ScrollMarquee({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el || !row1.current || !row2.current) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const offset = (window.scrollY - top + window.innerHeight) * 0.3 - 200;
    row1.current.style.transform = `translate3d(calc(-33.333% + ${offset.toFixed(1)}px), 0, 0)`;
    row2.current.style.transform = `translate3d(calc(-33.333% - ${offset.toFixed(1)}px), 0, 0)`;
  });

  const half = Math.ceil(items.length / 2);
  const tiles = (row: string[], shift: number) =>
    [...row, ...row, ...row].map((t, i) => (
      <span key={i} className={`smq-tile ${VARIANTS[(i + shift) % VARIANTS.length]}`}>{t}</span>
    ));

  return (
    <div className="smq" ref={ref} aria-hidden="true">
      <div className="smq-row" ref={row1}>{tiles(items.slice(0, half), 0)}</div>
      <div className="smq-row" ref={row2}>{tiles(items.slice(half), 2)}</div>
    </div>
  );
}
