import type { Experience as ExperienceType, Identity } from '@/lib/types';

export function Experience({ experience, identity }: { experience: ExperienceType; identity: Identity }) {
  return (
    <section id="experience" className="xp">
      <h2 className="giant sec-giant reveal" style={{ '--ry': '40px' } as React.CSSProperties}>Experience</h2>
      <div className="xp-list">
        {experience.rows.map((r, i) => (
          <div key={i} className={`xp-row reveal${r.current ? ' current' : ''}`}>
            <div className="xp-date">{r.date}</div>
            <div>
              <h3 className="xp-role">{r.role}</h3>
              <p className="xp-org">{r.org}</p>
            </div>
            <p className="xp-desc">{r.desc}</p>
          </div>
        ))}
      </div>
      <div className="xp-foot reveal">
        <a href={identity.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download full CV</a>
      </div>
    </section>
  );
}
