import { getContent } from '@/lib/content';
import { OG_SIZE, ogImage } from '@/lib/og';
import { SITE_URL } from '@/lib/site';

export const alt = 'Noman E Jawad, full-stack web developer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  const { identity, hero } = await getContent();
  return ogImage({
    kicker: hero.kicker ?? identity.role,
    title: identity.shortName,
    footer: `${new URL(SITE_URL).host} · ${identity.location}`,
  });
}
