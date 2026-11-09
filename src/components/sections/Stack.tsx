import { ROUTES } from '@/lib/homeCopy';
import { Routes } from '@/components/client/Routes';

export function Stack() {
  return (
    <section id="skills" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <div>
            <p className="kick reveal">{ROUTES.kicker}</p>
            <h2 className="h2 reveal">{ROUTES.title}</h2>
          </div>
          <p className="lbl reveal">{ROUTES.hint}</p>
        </div>
        <div className="reveal">
          <Routes />
        </div>
      </div>
    </section>
  );
}
