import type { Testimonials as TestimonialsType } from '@/lib/types';
import { TESTIMONIALS } from '@/lib/homeCopy';

export function Testimonials({ testimonials }: { testimonials: TestimonialsType }) {
  const [lead, ...rest] = testimonials.quotes;
  if (!lead) return null;
  return (
    <section id="testimonials" className="sec">
      <div className="sec-inner">
        <div className="tm">
          <div className="tm-vis reveal" aria-hidden="true">
            <div className="orb-mini"><div className="orb-glow" /><div className="orb-core" /></div>
            {TESTIMONIALS.aside.map((a, i) => <span key={a} className={`tm-note n${i + 1}`}>{a}</span>)}
          </div>
          <div>
            <p className="kick reveal">{TESTIMONIALS.kicker}</p>
            <blockquote className="tm-lead reveal">
              <p>“{lead.quote}”</p>
              <footer><b>{lead.name}</b><span className="lbl">{lead.title} · {lead.meta}</span></footer>
            </blockquote>
            <div className="tm-small">
              {rest.slice(0, 2).map((q, i) => (
                <blockquote key={q.name} className="reveal" style={{ '--rd': `${(i + 1) * 100}ms` } as React.CSSProperties}>
                  <p>“{q.quote}”</p>
                  <footer className="lbl">{q.name} · {q.title}</footer>
                </blockquote>
              ))}
            </div>
            <p className="lbl reveal" style={{ marginTop: 18 }}>{testimonials.sectionMeta}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
