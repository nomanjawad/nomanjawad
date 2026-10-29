import Image from 'next/image';
import Link from 'next/link';
import type { Project, Work as WorkType } from '@/lib/types';
import { StackScale } from '@/components/client/StackScale';
import { Mesh } from '@/components/ui/Mesh';

const FEATURED = 3;

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <div className="stack-item" style={{ '--i': i } as React.CSSProperties}>
      <article className="pcard">
        <div className="pcard-top">
          <span className="giant pcard-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <span className="pcard-label">{p.sector ?? p.label} · {p.year}</span>
            <h3 className="pcard-name">{p.name}</h3>
          </div>
          <div className="pcard-actions">
            <Link href={`/work/${p.slug}`} className="btn-ghost btn-sm">Read case study</Link>
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">Live site ↗</a>
            )}
          </div>
        </div>
        <div className="pcard-grid">
          <div className="pcard-info">
            <p className="pcard-desc">{p.description}</p>
            <dl className="pcard-meta">
              <dt>Role</dt><dd>{p.role}</dd>
              <dt>Client</dt><dd>{p.client}</dd>
            </dl>
            <div className="tags">
              {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <Link href={`/work/${p.slug}`} className="pcard-visual" aria-label={`Read the ${p.name} case study`}>
            {p.thumbnail ? (
              <Image src={p.thumbnail} alt="" fill sizes="(max-width: 900px) 90vw, 55vw" />
            ) : (
              <Mesh project={p} index={i} />
            )}
          </Link>
        </div>
      </article>
    </div>
  );
}

export function Work({ work, projects }: { work: WorkType; projects: Project[] }) {
  const featured = projects.slice(0, FEATURED);
  const rest = projects.slice(FEATURED);
  return (
    <section id="work" className="work">
      <h2 className="giant sec-giant reveal" style={{ '--ry': '40px' } as React.CSSProperties}>Case studies</h2>
      <p className="sec-lede reveal">{work.sectionMeta}</p>
      <StackScale>
        {featured.map((p, i) => <Card key={p.id} p={p} i={i} />)}
      </StackScale>
      {rest.length > 0 && (
        <div className="more">
          <h3 className="more-title">More case studies</h3>
          {rest.map((p) => (
            <Link key={p.id} href={`/work/${p.slug}`} className="more-row reveal">
              <b>{p.name}</b>
              <span>{p.stack.slice(0, 3).join(' · ')}</span>
              <span>{p.year} →</span>
            </Link>
          ))}
        </div>
      )}
      <div className="work-all reveal">
        <Link href="/work" className="btn-hot">All case studies</Link>
      </div>
    </section>
  );
}
