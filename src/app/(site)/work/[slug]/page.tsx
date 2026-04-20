import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getContent } from '@/lib/content';

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  const { projects } = await getContent();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await getContent();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: 'Case study not found' };
  return {
    title: `${p.name} — Case study`,
    description: p.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { projects } = await getContent();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const specs: [string, string][] = [
    ['Role', p.role],
    ['Stack', p.stack.join(' · ')],
    ['Duration', p.duration ?? '—'],
    ['Year', p.year],
  ];
  return (
    <>
      <div className="case-topbar">
        <span className="crumbs">
          ~ / case-studies / <b>{p.slug}.mdx</b>
        </span>
        <Link className="close-case" href="/#work">
          Close · <span className="kbd">esc</span>
        </Link>
      </div>
      <div className="case-body">
        <div className="case-kicker">{p.kicker || 'Project'}</div>
        <h1 className="case-title">{p.name}</h1>
        <p
          className="case-summary"
          dangerouslySetInnerHTML={{ __html: p.summary || '' }}
        />
        <div className="case-hero-img">
          {p.thumbnail ? (
            <Image src={p.thumbnail} alt={p.name} fill sizes="(max-width: 1100px) 100vw, 1100px" priority style={{ objectFit: 'cover' }} />
          ) : (
            <div className="mock-ph">
              <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
                <rect x="8" y="8" width="184" height="104" fill="none" stroke="rgba(237,234,228,0.14)" />
                <line x1="8" y1="28" x2="192" y2="28" stroke="rgba(237,234,228,0.1)" />
                <text x="100" y="76" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(237,234,228,0.4)" letterSpacing="2">
                  {p.name.toUpperCase()}
                </text>
              </svg>
            </div>
          )}
        </div>
        <dl className="case-specs">
          {specs.map(([k, v]) => (
            <div key={k} className="s">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="case-section">
          <h3>Problem</h3>
          <div className="body"><p>{p.problem}</p></div>
        </div>
        <div className="case-section">
          <h3>Approach</h3>
          <div className="body"><p>{p.approach}</p></div>
        </div>
        <div className="case-section">
          <h3>Solution</h3>
          <div className="body"><p>{p.solution}</p></div>
        </div>
        <div className="case-section">
          <h3>Outcome</h3>
          <div className="body"><p dangerouslySetInnerHTML={{ __html: p.outcome }} /></div>
        </div>
        <div className="case-next">
          <div>
            <div className="label">Next project</div>
            <Link href={`/work/${next.slug}`}>
              {next.name}{' '}
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6em', color: 'var(--fg-dim)' }}>→</span>
            </Link>
          </div>
          <Link href="/#work" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--fg-dim)' }}>
            Back to work index ↩
          </Link>
        </div>
      </div>
    </>
  );
}
