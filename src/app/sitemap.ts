import type { MetadataRoute } from 'next';
import { getContent } from '@/lib/content';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getContent();
  const base = 'https://nomanjawad.vercel.app';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
