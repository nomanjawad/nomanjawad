import Link from 'next/link';
import { SCREENS } from '@/lib/homeCopy';
import { SiteMock } from '@/components/ui/SiteMock';

/** "One build, every screen": the same page at four sizes, with a drawing-sheet title block. */
export function Screens() {
  const cols: (1 | 2 | 3)[] = [1, 2, 3, 2];
  return (
    <section id="screens" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <div>
            <p className="kick reveal">{SCREENS.kicker}</p>
            <h2 className="h2 reveal">{SCREENS.title}</h2>
            <p className="lead reveal">{SCREENS.lead}</p>
          </div>
          <Link href="/work" className="btn-ghost reveal">See the work</Link>
        </div>
        <div className="sheet reveal">
          <div className="views">
            {SCREENS.views.map((v, i) => (
              <figure key={v.n} className={`view v${i + 1}`}>
                <div className="view-frame"><SiteMock cols={cols[i]} /></div>
                <figcaption><b>{v.n} {v.name}</b><span>{v.note}</span></figcaption>
              </figure>
            ))}
          </div>
          <dl className="tblock" aria-label="Sheet details">
            {SCREENS.block.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <p className="sheet-note">Phone · tablet · desktop · print · same components, no redraw</p>
        </div>
      </div>
    </section>
  );
}
