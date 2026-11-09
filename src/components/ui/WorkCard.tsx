import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Mesh } from '@/components/ui/Mesh';

export function WorkCard({ p, i, delay = 0 }: { p: Project; i: number; delay?: number }) {
  return (
    <Link href={`/work/${p.slug}`} className="wk-card reveal" style={{ '--rd': `${delay}ms` } as React.CSSProperties}>
      <span className="wk-visual">
        {p.thumbnail ? (
          <Image src={p.thumbnail} alt="" fill sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw" style={{ objectFit: 'cover' }} />
        ) : (
          <Mesh project={p} index={i} />
        )}
      </span>
      <span className="wk-body">
        <span className="wk-meta"><span>{p.sector ?? p.label}</span><span>{p.year}</span></span>
        <span className="wk-name">{p.name}</span>
        <span className="wk-desc">{p.description}</span>
        <span className="wk-client">{p.client}</span>
      </span>
    </Link>
  );
}
