import type { About, Project } from '@/lib/types';
import { PROOF } from '@/lib/homeCopy';

/** Social proof row and stats. Client names are under NDA, so sectors stand in for logos. */
export function Proof({ about, projects }: { about: About; projects: Project[] }) {
  const sectors = [...new Set(projects.map((p) => p.sector ?? p.label))];
  return (
    <section id="proof" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <div>
            <p className="kick reveal">{PROOF.kicker}</p>
            <h2 className="h2 reveal">{PROOF.title}</h2>
          </div>
          <p className="lead reveal">{PROOF.lead}</p>
        </div>
        <ul className="logos reveal" aria-label="Sectors served">
          {sectors.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="stats">
          {about.stats.map((s, i) => (
            <div key={s.l} className="stat reveal" style={{ '--rd': `${i * 80}ms` } as React.CSSProperties}>
              <b>{s.n}<small>{s.suffix}</small></b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
