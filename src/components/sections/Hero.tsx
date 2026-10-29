import type { Hero as HeroType, Identity } from '@/lib/types';
import { Orb } from '@/components/client/Orb';

const delay = (ms: number, y = 30) => ({ '--rd': `${ms}ms`, '--ry': `${y}px` }) as React.CSSProperties;

export function Hero({ hero, identity }: { hero: HeroType; identity: Identity }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-aurora" aria-hidden="true" />
      <h1 className="hero-h1 reveal" style={delay(150, 40)}>
        <span className="hero-kicker">{hero.kicker ?? identity.role}</span>{' '}
        <span className="giant hero-name">{identity.shortName}</span>
      </h1>
      <div className="hero-orb-wrap">
        <div className="reveal" style={delay(600)}>
          <Orb />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="reveal" style={delay(350, 20)}>
          {identity.availableNow && (
            <span className="avail"><i aria-hidden="true" />{identity.availability}</span>
          )}
          {hero.tagline && <p className="hero-tagline">{hero.tagline}</p>}
        </div>
        <div className="hero-ctas reveal" style={delay(500, 20)}>
          <a href={hero.primaryCta.href} className="btn-hot">{hero.primaryCta.label}</a>
          <a href={hero.secondaryCta.href} className="btn-ghost">{hero.secondaryCta.label}</a>
        </div>
      </div>
    </section>
  );
}
