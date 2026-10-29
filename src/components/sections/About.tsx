import type { About as AboutType, Identity } from '@/lib/types';
import { ScrollText } from '@/components/client/ScrollText';

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
const from = (x: number, ms: number) => ({ '--rx': `${x}px`, '--ry': '0px', '--rd': `${ms}ms` }) as React.CSSProperties;

export function About({ about, identity }: { about: AboutType; identity: Identity }) {
  return (
    <section id="about" className="about">
      <div className="shape shape-sphere reveal" style={from(-80, 100)} aria-hidden="true"><i /></div>
      <div className="shape shape-torus" aria-hidden="true"><i /></div>
      <div className="shape shape-cube reveal" style={from(80, 150)} aria-hidden="true"><i /></div>
      <div className="shape shape-pill reveal" style={from(80, 300)} aria-hidden="true"><i /></div>
      <h2 className="giant sec-giant reveal" style={{ '--ry': '40px' } as React.CSSProperties}>About me</h2>
      <ScrollText className="about-text" text={stripTags(about.body[0] ?? '')} />
      <div className="about-ctas reveal">
        <a href="#contact" className="btn-hot">Contact me</a>
        <a href={identity.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download CV</a>
      </div>
    </section>
  );
}
