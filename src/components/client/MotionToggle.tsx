'use client';
import { useEffect, useState } from 'react';

export function MotionToggle() {
  const [off, setOff] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem('noman.motion') === 'off') {
        document.documentElement.dataset.motion = 'off';
        setOff(true);
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next = !off;
    document.documentElement.dataset.motion = next ? 'off' : 'on';
    try { localStorage.setItem('noman.motion', next ? 'off' : 'on'); } catch {}
    setOff(next);
  };

  return (
    <button type="button" className="nav-icon" aria-pressed={off} aria-label="Pause animations" title={off ? 'Play animations' : 'Pause animations'} onClick={toggle}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {off ? <path d="M7 4v16l13-8z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
      </svg>
    </button>
  );
}
