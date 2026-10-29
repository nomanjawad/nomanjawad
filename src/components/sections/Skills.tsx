import type { Skills as SkillsType } from '@/lib/types';

export function Skills({ skills }: { skills: SkillsType }) {
  return (
    <section id="skills" className="caps">
      <h2 className="caps-title reveal">Stack</h2>
      <ol className="caps-list">
        {skills.rows.map((r, i) => (
          <li key={r.n} className="cap reveal" style={{ '--rd': `${i * 80}ms` } as React.CSSProperties}>
            <span className="cap-num" aria-hidden="true">{r.n}</span>
            <div>
              <h3 className="cap-name">{r.items.join(' · ')}</h3>
              <p className="cap-desc">{r.context}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
