'use client';
import { useEffect, useState } from 'react';
import { track, locationOf } from '@/lib/track';

/** "Copy email" → "Email copied!" with a mailto fallback when the clipboard is unavailable. */
export function CopyEmail({ email, className = 'btn-ghost' }: { email: string; className?: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 2200);
    return () => clearTimeout(t);
  }, [done]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      track('email_copy', { location: locationOf(document.activeElement) });
      setDone(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className={`copy-email ${className}${done ? ' done' : ''}`} onClick={copy} aria-live="polite">
      <span className="copy-email-idle">Copy email</span>
      <span className="copy-email-done">Email copied!</span>
    </button>
  );
}
