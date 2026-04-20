'use client';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const t = (document.documentElement.dataset.theme as Theme) || 'dark';
    setTheme(t);
  }, []);
  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('noman.theme', next);
    setTheme(next);
  };
  return (
    <button type="button" className="theme-toggle" aria-label="Toggle theme" onClick={toggle}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {theme === 'light' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M3 12h1M20 12h1M4.22 19.78l.71-.71M19.07 4.93l.71-.71" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        )}
      </svg>
    </button>
  );
}
