import type { About as AboutType, Identity } from '@/lib/types';
import { LETTER } from '@/lib/homeCopy';

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
const stripSlashes = (s: string) => s.replace(/^\/\/\s*/, '');

/** The open letter: who is building it and how. */
export function About({ about, identity }: { about: AboutType; identity: Identity }) {
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
      </div>
    </section>
  );
}
