import Image from 'next/image';
import type { About as AboutType, Identity } from '@/lib/types';

export function About({ about, identity }: { about: AboutType; identity: Identity }) {
  const photo = identity.photo || '/assets/noman.jpeg';
  return (
    <section id="about">
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <div className="sec-num">{about.sectionNum}</div>
            <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: about.sectionTitle }} />
          </div>
          <div className="sec-meta" dangerouslySetInnerHTML={{ __html: about.sectionMeta }} />
        </header>
        <div className="cols">
          <div className="photo-wrap reveal">
            <Image
              src={photo}
              alt={`Portrait of ${identity.name}`}
              fill
              sizes="(max-width: 1060px) 90vw, 38vw"
              priority={true}
              loading="eager"
              style={{ objectFit: 'cover' }}
            />
            <div className="caption">
              <span>NEJ · 2026</span>
              <span>DHK · BD</span>
            </div>
          </div>
          <div className="reveal">
            <h3 className="about-heading">Senior Full Stack Developer.<br />Available for Remote Hire.</h3>
            <div className="about-body">
              {about.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="about-meta">
              {about.meta.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <dl className="stats reveal">
          {about.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="n">
                {s.n}
                {s.suffix && <em>{s.suffix}</em>}
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
