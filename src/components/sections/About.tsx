import type { About as AboutType, Contact, Experience, Identity, Skills } from '@/lib/types';
import { LETTER } from '@/lib/homeCopy';

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
const stripSlashes = (s: string) => s.replace(/^\/\/\s*/, '');

/** Fact sheet behind a toggle: years, roles, education, stack, hours. Every line comes from content.json. */
function Credentials({ about, identity, experience, skills, contact }: { about: AboutType; identity: Identity; experience: Experience; skills: Skills; contact: Contact }) {
  const current = experience.rows.find((r) => r.current);
  const previous = experience.rows.filter((r) => !r.current);
  const facts = about.meta.map(stripSlashes).join(' · ').split(' · ').map((f) => f.trim()).filter((f) => /\b(B\.?S|M\.?S|IEEE|npm|BSc|MSc)\b/i.test(f));
  const rows: [string, string][] = [
    ...about.stats.map((st) => [st.l, `${st.n.replace(/^0/, '')}${st.suffix ?? ''}`] as [string, string]),
    ...(current ? [['Currently', `${current.role}, ${current.org} (${current.date.toLowerCase()})`] as [string, string]] : []),
    ...previous.map((r) => ['Previously', `${r.role}, ${r.org} (${r.date})`] as [string, string]),
    ...(facts.length ? [['Education & more', facts.join(' · ')] as [string, string]] : []),
    ['Stack', skills.rows.slice(0, 2).flatMap((r) => r.items).join(' · ')],
    ['Hours', `${contact.hours} · ${identity.location} (${identity.timezone})`],
    ['Reply time', 'One working day'],
  ];
  return (
    <details className="creds reveal">
      <summary><span>Credentials</span><i aria-hidden="true" /></summary>
      <dl className="creds-list">
        {rows.map(([k, v]) => (
          <div key={k + v}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
    </details>
  );
}

/** The open letter: who is building it and how. */
export function About({ about, identity, experience, skills, contact }: { about: AboutType; identity: Identity; experience: Experience; skills: Skills; contact: Contact }) {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <div className="sec-head center">
          <div>
            <p className="kick reveal">{LETTER.kicker}</p>
            <h2 className="h2 reveal">{LETTER.title}</h2>
          </div>
        </div>
        <div className="letter reveal">
          <p className="letter-salute">{LETTER.kicker.replace(/,$/, '')},</p>
          <p className="letter-intro">{LETTER.intro}</p>
          {about.body.map((p, i) => <p key={i}>{stripTags(p)}</p>)}
          <p className="letter-close">Make more things.</p>
          <p className="letter-sign">{identity.name}</p>
          <div className="about-meta">
            {about.meta.map((m) => <span key={m} className="lbl">{stripSlashes(m)}</span>)}
          </div>
          <div className="about-ctas">
            <a href="#contact" className="btn-hot">Contact me</a>
            <a href={identity.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download CV</a>
          </div>
        </div>
        <Credentials about={about} identity={identity} experience={experience} skills={skills} contact={contact} />
      </div>
    </section>
  );
}
