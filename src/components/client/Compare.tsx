'use client';
import { useCallback, useEffect, useRef } from 'react';
import { COMPARE } from '@/lib/homeCopy';
import { SiteMock } from '@/components/ui/SiteMock';

/**
 * Drag comparison: the Figma frame on the left, the shipped build on the right.
 * The handle position is written straight to a CSS variable, so dragging never
 * re-renders React. Until someone touches it, it sweeps slowly on its own.
 */
export function Compare() {
  const ref = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const pos = useRef(42);
  const dragging = useRef(false);

  const apply = useCallback((p: number) => {
    pos.current = Math.max(2, Math.min(98, p));
    const el = ref.current;
    if (!el) return;
    el.classList.remove('idle');
    el.style.setProperty('--pos', `${pos.current.toFixed(2)}%`);
    if (rangeRef.current) rangeRef.current.value = String(Math.round(pos.current));
  }, []);

  const fromX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    apply(((clientX - r.left) / r.width) * 100);
  }, [apply]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const down = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      dragging.current = true;
      el.setPointerCapture(e.pointerId);
      fromX(e.clientX);
    };
    const move = (e: PointerEvent) => { if (dragging.current) fromX(e.clientX); };
    const up = () => { dragging.current = false; };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
    };
  }, [fromX]);

  return (
    <div ref={ref} className="cmp idle">
      <div className="cmp-layer cmp-build"><SiteMock cols={3} /></div>
      <div className="cmp-layer cmp-figma"><SiteMock cols={3} wire /></div>
      <div className="cmp-line" aria-hidden="true" />
      <span className="cmp-handle" aria-hidden="true"><i /></span>
      <span className="cmp-tag l">{COMPARE.left}</span>
      <span className="cmp-tag r">{COMPARE.right}</span>
      <input
        ref={rangeRef}
        type="range"
        className="cmp-range"
        min={2}
        max={98}
        defaultValue={42}
        onChange={(e) => apply(Number(e.target.value))}
        onFocus={() => ref.current?.classList.remove('idle')}
        aria-label="Compare the Figma frame with the shipped build"
      />
    </div>
  );
}
