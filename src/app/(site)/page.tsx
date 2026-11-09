import type { Metadata } from 'next';
import { getContent, getContentModified } from '@/lib/content';
import { BRAND, SHOW_WORK, SITE_NAME, SITE_URL, jsonLd, liveLinks } from '@/lib/site';
import { Story } from '@/components/client/Story';
import { Proof } from '@/components/sections/Proof';
import { Screens } from '@/components/sections/Screens';
import { CompareSection } from '@/components/sections/CompareSection';
import { Steps } from '@/components/sections/Steps';
import { Work } from '@/components/sections/Work';
import { Stack } from '@/components/sections/Stack';
import { Testimonials } from '@/components/sections/Testimonials';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Ways } from '@/components/sections/Ways';
import { Faq } from '@/components/client/Faq';
import { Contact } from '@/components/sections/Contact';

export const revalidate = 3600;

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default async function HomePage() {
  const [c, modified] = await Promise.all([getContent(), getContentModified()]);
  const current = c.experience.rows.find((r) => r.current);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: BRAND,
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: SITE_URL,
        dateModified: modified.toISOString(),
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: c.identity.name,
        alternateName: c.identity.shortName,
        jobTitle: 'Freelance Full-Stack Web Developer',
        description: c.hero.tagline,
        url: SITE_URL,
        image: `${SITE_URL}${c.identity.photo}`,
        email: `mailto:${c.identity.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
        knowsAbout: c.skills.rows.flatMap((r) => r.items),
        sameAs: liveLinks(c.social).map((s) => s.url),
        ...(current && { worksFor: { '@type': 'Organization', name: current.org.split(' · ')[0] } }),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <Story identity={c.identity} />
      <Proof about={c.about} projects={c.projects} />
      <Screens />
      <CompareSection />
      <Steps />
      {SHOW_WORK && <Work work={c.work} projects={c.projects} />}
      <Stack />
      <Testimonials testimonials={c.testimonials} />
      <About about={c.about} identity={c.identity} experience={c.experience} skills={c.skills} contact={c.contact} />
      <Experience experience={c.experience} identity={c.identity} />
      <Ways />
      <Faq email={c.identity.email} />
      <Contact contact={c.contact} identity={c.identity} social={liveLinks(c.social)} />
    </>
  );
}
