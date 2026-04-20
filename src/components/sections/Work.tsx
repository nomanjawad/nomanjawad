import Image from 'next/image';
import Link from 'next/link';
import type { Identity, Project, Work as WorkType } from '@/lib/types';

function MockSvg({ title }: { title: string }) {
  return (
    <div className="mock-ph">
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
        <rect x="8" y="8" width="184" height="104" fill="none" stroke="rgba(237,234,228,0.14)" />
        <line x1="8" y1="28" x2="192" y2="28" stroke="rgba(237,234,228,0.1)" />
        <circle cx="18" cy="18" r="2" fill="rgba(237,234,228,0.3)" />
        <circle cx="26" cy="18" r="2" fill="rgba(237,234,228,0.2)" />
        <circle cx="34" cy="18" r="2" fill="rgba(237,234,228,0.15)" />
        <text x="100" y="76" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(237,234,228,0.4)" letterSpacing="2">
          {title.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

export function Work({
  work,
  projects,
  identity,
}: {
  work: WorkType;
  projects: Project[];
  identity: Identity;
}) {
  return (
    <section id="work">
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <div className="sec-num">{work.sectionNum}</div>
            <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: work.sectionTitle }} />
          </div>
          <div className="sec-meta">{work.sectionMeta}</div>
        </header>
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          const visual = (
            <Link href={`/work/${p.slug}`} className="p-visual" aria-label={`View ${p.name} case study`}>
              <div className="mock">
                {p.thumbnail ? (
                  <Image src={p.thumbnail} alt={`${p.name} thumbnail`} fill sizes="(max-width: 1060px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                ) : (
                  <MockSvg title={p.name} />
                )}
              </div>
              <div className="overlay" />
              <span className="label">{p.label}</span>
              <span className="view-badge">View case →</span>
            </Link>
          );
          const body = (
            <div className="p-body">
              <div className="p-index">
                PROJECT {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
              <h3>{p.name}</h3>
              <p className="p-desc">{p.description}</p>
              <dl className="p-meta">
                <dt>role</dt><dd>{p.role}</dd>
                <dt>year</dt><dd>{p.year}</dd>
                <dt>for</dt><dd>{p.client}</dd>
              </dl>
              <div className="pills">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
              <div className="p-links">
                <a href={p.liveUrl || '#'} target="_blank" rel="noopener noreferrer">Live site ↗</a>
                <Link href={`/work/${p.slug}`} className="secondary">Case study →</Link>
              </div>
            </div>
          );
          return (
            <article key={p.id} className={`project${flip ? ' flip' : ''} reveal`}>
              {flip ? body : visual}
              {flip ? visual : body}
            </article>
          );
        })}
        <div
          className="reveal"
          style={{
            padding: '40px 0 80px',
            textAlign: 'center',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <a
            href={`mailto:${identity.email}`}
            style={{
              color: 'var(--fg-dim)',
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--line-strong)',
              paddingBottom: 4,
            }}
            dangerouslySetInnerHTML={{ __html: work.footNote }}
          />
        </div>
      </div>
    </section>
  );
}
