import Link from 'next/link';
import type { Identity } from '@/lib/types';
import { MotionToggle } from '@/components/client/MotionToggle';

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Nav({ identity }: { identity: Identity }) {
  const initials = identity.shortName.split(' ').map((w) => w[0]).join('');
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="nav">
        <nav className="nav-inner" aria-label="Primary">
          <Link href="/" className="nav-brand" aria-label={`${identity.shortName}, home`}>
            <span className="full">{identity.shortName}</span>
            <span className="short">{initials}</span>
          </Link>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
          <MotionToggle />
          <button id="cmdTrigger" type="button" className="nav-cmd" aria-label="Open command palette">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <span className="hint">Search</span>
            <span className="kbd">⌘K</span>
          </button>
          <Link href="/#contact" className="btn-hot btn-sm nav-book">Book a call</Link>
        </nav>
      </header>
    </>
  );
}
