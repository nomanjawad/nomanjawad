import type { Testimonials as TestimonialsType } from '@/lib/types';
import { TESTIMONIALS } from '@/lib/homeCopy';
import { Orb } from '@/components/client/Orb';
import { QuoteRotator } from '@/components/client/QuoteRotator';

export function Testimonials({ testimonials }: { testimonials: TestimonialsType }) {
  const { quotes } = testimonials;
  if (!quotes.length) return null;
  return (
    <section id="testimonials" className="sec">
      <div className="sec-inner">
        <div className="tm">
          <div className="tm-vis reveal" aria-hidden="true">
            <div className="orb-mini"><Orb /></div>
            {TESTIMONIALS.aside.map((a, i) => <span key={a} className={`tm-note n${i + 1}`}>{a}</span>)}
          </div>
          <div>
            <p className="kick reveal">{TESTIMONIALS.kicker}</p>
            <div className="reveal"><QuoteRotator quotes={quotes} /></div>
            <div className="tm-small">
              {quotes.slice(1, 3).map((q, i) => (
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
