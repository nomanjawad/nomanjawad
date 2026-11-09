import type { Metadata } from 'next';
import { getContent } from '@/lib/content';
import { OG_BASE, SHOW_WORK, SITE_URL, jsonLd } from '@/lib/site';
import { NDA_NOTE } from '@/components/ui/Mesh';
import { WorkIndex } from '@/components/client/WorkIndex';

export const revalidate = 3600;

const TITLE = 'Web development case studies';
const DESCRIPTION =
  'Case studies of Next.js, Vue, Laravel and WordPress builds for logistics, healthcare, e-commerce and professional services: the problem, my role, the stack and the outcome.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work' },
  robots: SHOW_WORK ? undefined : { index: false, follow: false },
  openGraph: { ...OG_BASE, title: TITLE, description: DESCRIPTION, type: 'website', url: '/work' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default async function WorkIndexPage() {
  const { projects, work } = await getContent();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESCRIPTION,
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
      <div className="wk-index-wrap reveal">
        <WorkIndex projects={projects} />
      </div>
    </>
  );
}
