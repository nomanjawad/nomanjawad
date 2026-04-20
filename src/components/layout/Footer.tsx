import type { Footer as FooterType, Identity, Social } from '@/lib/types';

export function Footer({
  footer,
  identity,
  social,
}: {
  footer: FooterType;
  identity: Identity;
  social: Social[];
}) {
  const parts = identity.shortName.split(' ');
  const phoneHref = identity.phone.replace(/[^+\d]/g, '');
  return (
    <footer>
      <div className="wrap">
        <h3 className="footer-name reveal">
          {parts[0]} <em>{parts.slice(1).join(' ')}.</em>
        </h3>
        <div className="footer-cols reveal">
          <div>
            <h5>Sitemap</h5>
            <a href="/#hero">Index</a>
            <a href="/#about">About</a>
            <a href="/#work">Work</a>
            <a href="/#skills">Stack</a>
            <a href="/#contact">Contact</a>
          </div>
          <div>
            <h5>Elsewhere</h5>
            {social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
          <div>
            <h5>Reach out</h5>
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
            <a href={`tel:${phoneHref}`}>{identity.phone}</a>
            <a>{identity.location}</a>
          </div>
          <div>
            <h5>Colophon</h5>
            {footer.colophon.map((x) => (
              <a key={x}>{x}</a>
            ))}
          </div>
        </div>
        <div className="footer-bot">
          <span>{footer.copyright}</span>
          <span>{footer.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
