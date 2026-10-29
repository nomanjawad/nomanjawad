import { COMPARE } from '@/lib/homeCopy';
import { Compare } from '@/components/client/Compare';

export function CompareSection() {
  return (
    <section id="compare" className="sec">
      <div className="sec-inner">
        <div className="sec-head center">
          <div>
            <p className="kick reveal">{COMPARE.kicker}</p>
            <h2 className="h2 reveal">{COMPARE.title}</h2>
            <p className="lead reveal">{COMPARE.lead}</p>
          </div>
        </div>
        <div className="reveal">
          <Compare />
        </div>
        <ul className="notes reveal">
          {COMPARE.notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </section>
  );
}
