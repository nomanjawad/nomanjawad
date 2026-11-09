import { WAYS } from '@/lib/homeCopy';

/** Three ways to work together. No prices: scope first, quote after. */
export function Ways() {
  return (
    <section id="ways" className="sec">
      <div className="sec-inner">
        <div className="sec-head center">
          <div>
            <p className="kick reveal">{WAYS.kicker}</p>
            <h2 className="h2 reveal">{WAYS.title}</h2>
            <p className="lead reveal">{WAYS.lead}</p>
          </div>
        </div>
        <div className="plans">
          {WAYS.items.map((w, i) => (
            <article key={w.name} className={`plan reveal${w.hot ? ' hot' : ''}`} style={{ '--rd': `${i * 100}ms` } as React.CSSProperties}>
              <span className="lbl plan-tag">{w.tag}</span>
              <h3 className="plan-name">{w.name}</h3>
              <p className="plan-who">{w.who}</p>
              <ul className="plan-list">
                {w.points.map((p) => <li key={p}><i aria-hidden="true">+</i>{p}</li>)}
              </ul>
              <a href="#contact" className={w.hot ? 'btn-hot' : 'btn-ghost'}>{w.cta}</a>
            </article>
          ))}
        </div>
        <p className="lbl center-text reveal" style={{ marginTop: 20 }}>{WAYS.note}</p>
      </div>
    </section>
  );
}
