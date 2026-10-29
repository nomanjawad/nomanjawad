import type { Metadata } from 'next';
import { getContent } from '@/lib/content';
import { SITE_NAME, SITE_URL, jsonLd, liveLinks } from '@/lib/site';
import { Hero } from '@/components/sections/Hero';
import { ScrollMarquee } from '@/components/client/ScrollMarquee';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export const revalidate = 3600;

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default async function HomePage() {
  const c = await getContent();
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: SITE_URL,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: c.identity.name,
        alternateName: c.identity.shortName,
        jobTitle: 'Full-Stack Web Developer',
        description: c.hero.tagline,
        url: SITE_URL,
        image: `${SITE_URL}${c.identity.photo}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
        knowsAbout: c.skills.rows.flatMap((r) => r.items),
        sameAs: liveLinks(c.social).map((s) => s.url),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <Hero hero={c.hero} identity={c.identity} />
      <ScrollMarquee items={c.marquee} />
      <Work work={c.work} projects={c.projects} />
      <About about={c.about} identity={c.identity} />
      <Skills skills={c.skills} />
      <Experience experience={c.experience} identity={c.identity} />
      <Contact contact={c.contact} identity={c.identity} social={liveLinks(c.social)} />
    </>
  );
}
