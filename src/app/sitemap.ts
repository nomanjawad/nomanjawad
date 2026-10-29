import type { MetadataRoute } from 'next';
import { getContent } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getContent();
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/work` },
    ...projects.map((p) => ({ url: `${SITE_URL}/work/${p.slug}` })),
  ];
}
