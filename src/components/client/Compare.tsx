'use client';
import { useCallback, useRef, useState } from 'react';
import { COMPARE } from '@/lib/homeCopy';
import { SiteMock } from '@/components/ui/SiteMock';

/** Drag comparison: the Figma frame on the left, the shipped build on the right. */
export function Compare() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(42);
  const dragging = useRef(false);

  const setFrom = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFrom(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => { if (dragging.current) setFrom(e.clientX); };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={ref}
      className="cmp"
      style={{ '--pos': `${pos}%` } as React.CSSProperties}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div className="cmp-layer cmp-build"><SiteMock cols={3} label={COMPARE.right} /></div>
      <div className="cmp-layer cmp-figma"><SiteMock cols={3} wire label={COMPARE.left} /></div>
      <div className="cmp-line" aria-hidden="true" />
      <input
        type="range"
        className="cmp-range"
        min={2}
        max={98}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare the Figma frame with the shipped build"
      />
      <span className="cmp-handle" aria-hidden="true">‹ ›</span>
      <span className="cmp-tag l">{COMPARE.left}</span>
      <span className="cmp-tag r">{COMPARE.right}</span>
    </div>
  );
}
