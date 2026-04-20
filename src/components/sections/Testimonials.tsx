import type { Testimonials as TestimonialsType } from '@/lib/types';
import { QuoteCarousel } from '@/components/client/QuoteCarousel';

export function Testimonials({ testimonials }: { testimonials: TestimonialsType }) {
  if (!testimonials.quotes?.length) return null;
  return (
    <section id="testimonials">
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <div className="sec-num">{testimonials.sectionNum}</div>
            <h2
              className="sec-title"
              dangerouslySetInnerHTML={{ __html: testimonials.sectionTitle }}
            />
          </div>
          <div className="sec-meta">{testimonials.sectionMeta}</div>
        </header>
        <QuoteCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
