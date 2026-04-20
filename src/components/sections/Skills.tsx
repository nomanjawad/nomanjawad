import { Fragment } from 'react';
import type { Skills as SkillsType } from '@/lib/types';

export function Skills({ skills }: { skills: SkillsType }) {
  return (
    <section id="skills">
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <div className="sec-num">{skills.sectionNum}</div>
            <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: skills.sectionTitle }} />
          </div>
          <div className="sec-meta">{skills.sectionMeta}</div>
        </header>
        <div className="stack-list">
          {skills.rows.map((r) => (
            <div key={r.n} className="stack-row reveal">
              <span className="n">{r.n} —</span>
              <div className="items">
                {r.items.map((x, i) => (
                  <Fragment key={x}>
                    <span>{x}</span>
                    {i < r.items.length - 1 && <span className="sep">·</span>}
                  </Fragment>
                ))}
              </div>
              <div className="context">{r.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
