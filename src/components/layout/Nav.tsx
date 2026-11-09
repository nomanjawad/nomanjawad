import Link from 'next/link';
import type { Identity } from '@/lib/types';
import { SHOW_WORK } from '@/lib/site';
import { MotionToggle } from '@/components/client/MotionToggle';
import { NavStatus } from '@/components/client/NavStatus';

const LINKS = [
  ...(SHOW_WORK ? [{ label: 'Work', href: '/work' }] : []),
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
          <NavStatus availableNow={identity.availableNow} city={identity.location.split(',')[0]} />
          <MotionToggle />
          <Link href="/#contact" className="btn-hot btn-sm nav-book">Book a call</Link>
        </nav>
      </header>
    </>
  );
}
