import Link from 'next/link';
import type { Footer as FooterType, Identity, Social } from '@/lib/types';
import { SHOW_WORK } from '@/lib/site';

export function Footer({
  footer,
  identity,
  social,
}: {
  footer: FooterType;
  identity: Identity;
  social: Social[];
}) {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-top">
          <div>
            <p className="foot-tag">Websites built properly, from the brief to the handover.</p>
            <p className="foot-loc">{identity.shortName} · {identity.location} · {identity.timezone}</p>
          </div>
          <div className="foot-links">
            <div>
              <h3>Site</h3>
              {SHOW_WORK && <Link href="/work">Case studies</Link>}
              <Link href="/#process">Process</Link>
              <Link href="/#about">About</Link>
              <Link href="/#faq">Questions</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div>
              <h3>Elsewhere</h3>
              {social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>
              ))}
            </div>
            <div>
              <h3>Reach out</h3>
              <a href={`mailto:${identity.email}`}>{identity.email}</a>
              <a href={identity.cv} target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
        <p className="giant foot-name" aria-hidden="true">{identity.shortName}</p>
        <div className="foot-bot">
          <span>{footer.copyright}</span>
          <span className="foot-colophon">{footer.colophon.join(' · ')} · {footer.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
