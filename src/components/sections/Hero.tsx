import type { Hero as HeroType, Identity } from '@/lib/types';
import { HeroTyping } from '@/components/client/HeroTyping';

export function Hero({ hero, identity }: { hero: HeroType; identity: Identity }) {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-chrome reveal">
          <span className="lights"><i /><i /><i /></span>
          <span className="path">
            ~/ <b>noman-jawad</b> /apps/<b>portfolio</b> /<b>hero.tsx</b>
          </span>
        </div>
        <HeroTyping
          command={hero.command}
          before={hero.headlineBefore}
          after={hero.headlineAfter}
        />
        <div className="hero-grid">
          <div>
            <p className="hero-sub reveal" dangerouslySetInnerHTML={{ __html: hero.subtitle }} />
            <div className="reveal" style={{ marginTop: 22 }}>
              {identity.availableNow && (
                <span className="status-pill">
                  <span className="status-dot" />
                  {identity.availability}
                </span>
              )}
            </div>
            <div className="hero-ctas reveal">
              <a href={hero.primaryCta.href} className="btn primary">
                {hero.primaryCta.label} <span className="arrow">{hero.primaryCta.arrow ?? '↓'}</span>
              </a>
              <a href={hero.secondaryCta.href} className="btn">
                {hero.secondaryCta.label} <span className="arrow">{hero.secondaryCta.arrow ?? '↗'}</span>
              </a>
            </div>
          </div>
          <div className="hero-side reveal">
            <dl>
              {hero.sidecard.map((r) => (
                <div key={r.k} style={{ display: 'contents' }}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <div
              style={{
                marginTop: 22,
                borderTop: '1px solid var(--line)',
                paddingTop: 14,
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--fg-fade)',
              }}
            >
              Press <span className="kbd">⌘K</span> to jump
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
