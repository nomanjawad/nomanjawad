import { STEPS } from '@/lib/homeCopy';
import { SiteMock } from '@/components/ui/SiteMock';

export function Steps() {
  return (
    <section id="process" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <div>
            <p className="kick reveal">{STEPS.kicker}</p>
            <h2 className="h2 reveal">{STEPS.title}</h2>
          </div>
        </div>
        <div className="steps">
          {STEPS.items.map((s, i) => (
            <article key={s.n} className={`step reveal s${i + 1}`} style={{ '--rd': `${i * 100}ms` } as React.CSSProperties}>
              <header><span className="lbl">{s.n}</span><i aria-hidden="true" /></header>
              <div className="step-vis" aria-hidden="true">
                {i === 0 && (
                  <div className="step-pile">
                    <span className="st-card figma"><i />Figma · Home v3</span>
                    <span className="st-card note">Launch 15 Nov</span>
                    <span className="st-card slack"><i />“Can we add Stripe?”</span>
                  </div>
                )}
                {i === 1 && <SiteMock cols={3} wire label="Preview · week 2" />}
                {i === 2 && (
                  <div className="step-ship">
                    <SiteMock cols={3} />
                    <span className="avail"><i aria-hidden="true" />Deployed · all checks green</span>
                  </div>
                )}
              </div>
              <h3 className="h3">{s.title}</h3>
              <p className="body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
