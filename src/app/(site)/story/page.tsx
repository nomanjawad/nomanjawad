import type { Metadata } from 'next';
import { getContent } from '@/lib/content';
import { Story } from '@/components/client/Story';
import { Work } from '@/components/sections/Work';

/** Prototype of the scroll-pinned hero. Not linked from the site and not indexed. */
export const metadata: Metadata = {
  title: 'Story prototype',
  robots: { index: false, follow: false },
};

export default async function StoryPrototypePage() {
  const c = await getContent();
  return (
    <>
      <Story />
      <div className="story-after">
        <p>Prototype. The story would replace the current hero and marquee, with case studies directly after it.</p>
      </div>
      <Work work={c.work} projects={c.projects} />
    </>
  );
}
