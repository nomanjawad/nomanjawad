import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getContent, getContentModified } from '@/lib/content';
import { OG_BASE, SHOW_WORK, SITE_NAME, SITE_URL, jsonLd } from '@/lib/site';
import { Mesh, NDA_NOTE } from '@/components/ui/Mesh';

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
  const title = `${p.name} case study`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/work/${p.slug}` },
    robots: SHOW_WORK ? undefined : { index: false, follow: false },
    openGraph: {
      ...OG_BASE,
      title,
      description: p.description,
      type: 'article',
      url: `/work/${p.slug}`,
      authors: [SITE_URL],
    },
    twitter: { card: 'summary_large_image', title, description: p.description },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [{ projects, identity }, modified] = await Promise.all([getContent(), getContentModified()]);
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const specs: [string, string][] = [
    ['My role', p.role],
    ['Client', p.client],
    ['Timeline', `${p.duration ?? 'n/a'} · ${p.year}`],
    ['Stack', p.stack.join(' · ')],
  ];
  const story: [string, string][] = [
    ['The problem', p.problem],
    ['My approach', p.approach],
    ['What I built', p.solution],
    ['The outcome', p.outcome],
  ];
  const url = `${SITE_URL}/work/${p.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // Article is the type Google still surfaces; CreativeWork has no search feature.
        '@type': 'Article',
        '@id': `${url}#case-study`,
        headline: `${p.name} case study`,
        name: p.name,
        description: p.description,
        url,
        mainEntityOfPage: url,
        dateModified: modified.toISOString(),
        keywords: p.stack.join(', '),
        about: p.sector ?? p.label,
        author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${SITE_URL}/work` },
          { '@type': 'ListItem', position: 3, name: p.name, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <section className="page-hero cs-hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="page-inner">
          <Link href="/work" className="cs-back reveal">← All case studies</Link>
          <p className="cs-kicker reveal">{p.sector ?? p.label} · {p.year}</p>
          <h1 className="giant cs-title reveal" style={{ '--ry': '40px', '--rd': '100ms' } as React.CSSProperties}>{p.name}</h1>
          <p className="cs-summary reveal" style={{ '--rd': '200ms' } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: p.summary || p.description }} />
          {p.confidential && (
            <span className="avail reveal" style={{ '--rd': '260ms' } as React.CSSProperties}><i aria-hidden="true" />{NDA_NOTE}</span>
          )}
          {p.highlights && p.highlights.length > 0 && (
            <>
              <dl className="cs-results">
                {p.highlights.map((h, i) => (
                  <div key={h.k} className="cs-result reveal" style={{ '--rd': `${300 + i * 90}ms` } as React.CSSProperties}>
                    <dd>{h.v}</dd>
                    <dt>{h.k}</dt>
                  </div>
                ))}
              </dl>
              <p className="cs-foot reveal">Figures describe this build as recorded at handover in {p.year}. They are the client's results, not a promise for yours.</p>
            </>
          )}
          <div className="cs-visual reveal">
            {p.thumbnail ? (
              <Image src={p.thumbnail} alt={p.name} fill sizes="(max-width: 1320px) 100vw, 1280px" priority style={{ objectFit: 'cover' }} />
            ) : (
              <Mesh project={p} index={idx} />
            )}
          </div>
          <dl className="cs-specs reveal">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="caps cs-story">
        <ol className="caps-list">
          {story.map(([title, body], i) => (
            <li key={title} className="cap reveal">
              <span className="cap-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="cap-name">{title}</h2>
                <p className="cap-desc" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="cs-end">
        <div className="page-inner">
          <div className="cs-cta">
            <h2 className="giant reveal">Planning something similar?</h2>
            <p className="reveal">Tell me what you are building and when you need it. I reply within one working day.</p>
            <div className="about-ctas reveal">
              <Link href="/#contact" className="btn-hot">Contact me</Link>
              <Link href="/work" className="btn-ghost">All case studies</Link>
            </div>
          </div>
          <Link href={`/work/${next.slug}`} className="cs-next reveal">
            <span>
              <small>Next case study · {next.sector ?? next.label}</small>
              <b>{next.name}</b>
            </span>
            <i aria-hidden="true">→</i>
          </Link>
        </div>
      </section>
    </>
  );
}
