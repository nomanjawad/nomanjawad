import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getContent } from '@/lib/content';
import { SITE_URL, jsonLd } from '@/lib/site';
import { Mesh, NDA_NOTE } from '@/components/ui/Mesh';

export const revalidate = 3600;

const DESCRIPTION =
  'Case studies of web builds across logistics, healthcare, e-commerce and professional services: the problem, my role, the stack and the outcome.';

export const metadata: Metadata = {
  title: 'Case studies',
  description: DESCRIPTION,
  alternates: { canonical: '/work' },
  openGraph: { title: 'Case studies', description: DESCRIPTION, type: 'website', url: '/work' },
  twitter: { card: 'summary_large_image', title: 'Case studies', description: DESCRIPTION },
};

export default async function WorkIndexPage() {
  const { projects, work } = await getContent();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case studies',
    url: `${SITE_URL}/work`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}/work/${p.slug}`,
      })),
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <section className="page-hero wk-hero">
        <div className="hero-aurora" aria-hidden="true" />
        <h1 className="giant sec-giant reveal" style={{ '--ry': '40px' } as React.CSSProperties}>Case studies</h1>
        <p className="sec-lede reveal">{work.sectionMeta}</p>
        <span className="avail reveal"><i aria-hidden="true" />{projects.length} projects · {NDA_NOTE}</span>
      </section>
      <div className="wk-grid">
        {projects.map((p, i) => (
          <Link key={p.id} href={`/work/${p.slug}`} className="wk-card reveal" style={{ '--rd': `${(i % 2) * 120}ms` } as React.CSSProperties}>
            <span className="wk-visual">
              {p.thumbnail ? (
                <Image src={p.thumbnail} alt="" fill sizes="(max-width: 900px) 92vw, 46vw" style={{ objectFit: 'cover' }} />
              ) : (
                <Mesh project={p} index={i} />
              )}
            </span>
            <span className="wk-body">
              <span className="pcard-label">{p.sector ?? p.label} · {p.year} · {p.duration}</span>
              <h2 className="wk-name">{p.name}</h2>
              <span className="wk-desc">{p.description}</span>
              <span className="tags">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </span>
              <span className="wk-more">Read case study <i aria-hidden="true">→</i></span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
