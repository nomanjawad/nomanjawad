import fs from 'node:fs/promises';
import type { MetadataRoute } from 'next';
import { CONTENT_FILE, getContent } from '@/lib/content';
import { SHOW_WORK, SITE_URL } from '@/lib/site';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getContent();
  const lastModified = await fs.stat(CONTENT_FILE).then((st) => st.mtime).catch(() => new Date());
  return [
    { url: `${SITE_URL}/`, lastModified },
    ...(SHOW_WORK ? [{ url: `${SITE_URL}/work`, lastModified }, ...projects.map((p) => ({ url: `${SITE_URL}/work/${p.slug}`, lastModified }))] : []),
  ];
}
