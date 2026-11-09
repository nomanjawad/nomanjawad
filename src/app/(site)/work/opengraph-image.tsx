import { getContent } from '@/lib/content';
import { OG_SIZE, ogImage } from '@/lib/og';

export const alt = 'Web development case studies by Noman E Jawad';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  const { identity, projects } = await getContent();
  return ogImage({
    kicker: `${projects.length} case studies`,
    title: 'Case studies',
    footer: `Next.js · React · Vue · Laravel · WordPress · by ${identity.shortName}`,
  });
}
