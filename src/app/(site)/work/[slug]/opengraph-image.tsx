import { getContent } from '@/lib/content';
import { OG_SIZE, ogImage } from '@/lib/og';

export const alt = 'Case study by Noman E Jawad';
export const size = OG_SIZE;
export const contentType = 'image/png';

export async function generateStaticParams() {
  const { projects } = await getContent();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { projects, identity } = await getContent();
  const p = projects.find((x) => x.slug === slug);
  return ogImage({
    kicker: 'Case study',
    title: p?.name ?? identity.shortName,
    footer: p ? `${p.stack.slice(0, 4).join(' · ')} · by ${identity.shortName}` : identity.shortName,
  });
}
