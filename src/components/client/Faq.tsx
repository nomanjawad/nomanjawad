'use client';
import { useState } from 'react';
import { FAQ } from '@/lib/homeCopy';
import { CopyEmail } from './CopyEmail';

export function Faq({ email }: { email: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="sec">
      <div className="sec-inner faq">
        <div className="faq-side">
          <p className="kick reveal">{FAQ.kicker}</p>
          <h2 className="h2 reveal">{FAQ.title}</h2>
          <div className="faq-mail reveal">
            <a href={`mailto:${email}`}>{email}</a>
            <CopyEmail email={email} />
          </div>
        </div>
        <div className="faq-list">
          {FAQ.items.map((it, i) => {
            const on = open === i;
            return (
              <div key={it.q} className={`faq-item reveal${on ? ' on' : ''}`} style={{ '--rd': `${i * 60}ms` } as React.CSSProperties}>
                <h3>
                  <button type="button" aria-expanded={on} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    <span>{it.q}</span>
                    <i aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-a" hidden={!on}>
                  <p>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
