import Link from 'next/link';
import type { Project, Work as WorkType } from '@/lib/types';
import { WORK } from '@/lib/homeCopy';
import { WorkCard } from '@/components/ui/WorkCard';

const SHOWN = 6;

export function Work({ work, projects }: { work: WorkType; projects: Project[] }) {
  return (
    <section id="work" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <div>
            <p className="kick reveal">{WORK.kicker}</p>
            <h2 className="h2 reveal">{WORK.title}</h2>
            <p className="lead reveal">{work.sectionMeta}</p>
          </div>
          <Link href="/work" className="btn-ghost reveal">All case studies</Link>
        </div>
        <div className="wk-grid cols3">
          {projects.slice(0, SHOWN).map((p, i) => <WorkCard key={p.id} p={p} i={i} delay={(i % 3) * 90} />)}
        </div>
      </div>
    </section>
  );
}
