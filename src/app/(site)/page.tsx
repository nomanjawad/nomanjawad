import { getContent } from '@/lib/content';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/client/Marquee';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export const revalidate = 3600;

export default async function HomePage() {
  const c = await getContent();
  return (
    <>
      <Hero hero={c.hero} identity={c.identity} />
      <Marquee items={c.marquee} />
      <About about={c.about} identity={c.identity} />
      <Work work={c.work} projects={c.projects} identity={c.identity} />
      <Skills skills={c.skills} />
      <Experience experience={c.experience} />
      <Contact contact={c.contact} identity={c.identity} social={c.social} />
    </>
  );
}
