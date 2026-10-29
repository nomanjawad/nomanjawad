'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useScrollFrame } from '@/lib/useScrollFrame';
import './story.css';

/**
 * Scroll-pinned story: a client brief becomes a site, the site is exploded into
 * layers, cut open to show its measurements, then shipped.
 *
 * Copy and the step-4 numbers are PLACEHOLDERS; move them to content.json once settled.
 */

type Beat = { kicker: string; title: string; body: string; note?: string };

const BEATS: Beat[] = [
  {
    kicker: 'Full-stack web developer · Next.js · React · Laravel',
    title: 'From client brief to production site',
    body: 'You send what you have: a Figma file, a Loom, a Slack thread, a deadline. Scroll to see what happens to it.',
  },
  {
    kicker: 'brief, understood',
    title: 'Read it',
    body: 'Pages, integrations, launch date and a performance budget, written down before the first line of code.',
  },
  {
    kicker: 'design, built',
    title: 'Get a real site',
    body: 'Pixel-perfect from the Figma handoff, responsive by default, on Next.js or Laravel depending on the job.',
  },
  {
    kicker: 'layers, sorted',
    title: 'See every layer',
    body: 'Components, API, database, pipeline and edge. Every layer is deliberate, and every one is yours.',
  },
  {
    kicker: 'inside, checked',
    title: 'Cut it open',
    body: 'Performance, accessibility, security headers and SEO are measured against the budget before launch.',
    note: 'Prototype numbers. Replace with one named case study.',
  },
  {
    kicker: 'keys, handed over',
    title: 'Ship it',
    body: 'Deployed through CI, documented, and ready for your team to run without me.',
  },
];

/** PLACEHOLDER metrics for the dissection beat. `t` is when the scanner reaches it (0–1). */
const CALLOUTS = [
  { v: '100', k: 'Lighthouse performance', t: 0.06, side: 'l' },
  { v: '1.1s', k: 'Largest contentful paint', t: 0.18, side: 'l' },
  { v: '48ms', k: 'Interaction to next paint', t: 0.3, side: 'l' },
  { v: '0.00', k: 'Cumulative layout shift', t: 0.62, side: 'r' },
  { v: 'A+', k: 'Security headers', t: 0.74, side: 'r' },
  { v: 'AA', k: 'WCAG 2.2 audit', t: 0.86, side: 'r' },
] as const;

/** Bottom to top. The last one is the browser window. */
const LAYERS = ['CDN & edge', 'CI/CD & hosting', 'Database', 'API', 'Components', 'UI'];

/** Scattered brief (x0,y0,r0) → tidy spec grid (x1,y1). Stage units, centre origin. */
const PILE = [
  { c: 'figma', t: 'Figma · Home v3', x0: -190, y0: -80, r0: -9, x1: -130, y1: -62 },
  { c: 'loom', t: 'Loom · 4:12 walkthrough', x0: 130, y0: -120, r0: 7, x1: 130, y1: -62 },
  { c: 'slack', t: '“Launch before the 15th?”', x0: 40, y0: 20, r0: -3, x1: -130, y1: 0 },
  { c: 'note', t: 'Must work on phones', x0: -160, y0: 110, r0: 12, x1: 130, y1: 0 },
  { c: 'note', t: 'Stripe + HubSpot', x0: 190, y0: 100, r0: -11, x1: -130, y1: 62 },
  { c: 'mail', t: 'brand-assets.zip', x0: -30, y0: -150, r0: 4, x1: 130, y1: 62 },
];

type Vars = Record<string, number>;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (v: number) => { const t = clamp01(v); return t * t * (3 - 2 * t); };
const seg = (p: number, a: number, b: number) => smooth((p - a) / (b - a));

/** Animation state at scroll progress p. Beat k's change runs just before its text lands. */
function varsAt(p: number): Vars {
  const b = (k: number) => seg(p, k / 6 - 0.05, k / 6 + 0.1);
  const b1 = b(1), b2 = b(2), b3 = b(3), b5 = b(5);
  return {
    tidy: b1,
    pileOp: 1 - b2,
    winIn: b2,
    sep: b3 * (1 - b5),
    tilt: b3 * (1 - b5),
    scan: seg(p, 4 / 6 - 0.04, 5 / 6 - 0.09),
    callOp: 1 - b5,
    ship: b5,
  };
}

/** State used for each panel of the static (reduced-motion) version. */
const frozen = (k: number): Vars => (k === 4 ? { ...varsAt(4 / 6 + 0.05), scan: 0.999 } : varsAt(k / 6 + 0.12));

function toStyle(v: Vars): React.CSSProperties {
  const s: Record<string, string> = {};
  for (const key in v) s[`--${key}`] = v[key].toFixed(4);
  return s as React.CSSProperties;
}

function Scene({ vars }: { vars?: Vars }) {
  return (
    <div className="st-stagewrap">
      <div className="st-stage" style={vars ? toStyle(vars) : undefined} aria-hidden="true">
        <div className="st-spec"><span>Spec · 6 pages · 2 integrations · launch 15 Nov</span></div>
        {PILE.map((c, i) => (
          <div
            key={i}
            className={`st-card ${c.c}`}
            style={{
              '--x0': `${c.x0}px`, '--y0': `${c.y0}px`, '--r0': `${c.r0}deg`,
              '--x1': `${c.x1}px`, '--y1': `${c.y1}px`,
            } as React.CSSProperties}
          >
            <i />{c.t}
          </div>
        ))}

        <div className="st-stackwrap">
          <div className="st-stack">
            {LAYERS.map((name, z) => {
              const isWin = z === LAYERS.length - 1;
              return (
                <div key={name} className={`st-layer${isWin ? ' st-win' : ''}`} style={{ '--z': z } as React.CSSProperties}>
                  {isWin ? (
                    <div className="st-site">
                      <div className="st-site-bar"><i /><i /><i /><span>yourclient.com</span></div>
                      <div className="st-site-nav"><b /><span /><span /><span /><em /></div>
                      <div className="st-site-hero"><b /><b className="w2" /><em /></div>
                      <div className="st-site-cards"><span /><span /><span /></div>
                    </div>
                  ) : (
                    <div className="st-plate"><span>{name}</span><b /><b /><b /></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="st-scanfill" />
        <div className="st-scan" />
        {CALLOUTS.map((c, i) => (
          <div key={c.k} className={`st-call ${c.side}`} style={{ '--k': c.t, top: `${28 + (i % 3) * 112}px` } as React.CSSProperties}>
            <b>{c.v}</b><span>{c.k}</span>
          </div>
        ))}
        <div className="st-read">
          <b>Section A–A</b>
          <span>LCP 1.1 s · INP 48 ms · CLS 0.00</span>
          <span>headers A+ · WCAG AA · scroll to move the cut</span>
        </div>

        <div className="st-ship"><i /> Deployed to production · all checks green</div>
      </div>
    </div>
  );
}

/** Headline whose letters rise in one by one. Full text stays available to screen readers. */
function RisingTitle({ text }: { text: string }) {
  let i = 0;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((w, wi) => (
          <span key={wi}>
            <span className="st-w">
              {Array.from(w).map((ch, ci) => (
                <span key={ci} className="st-ch" style={{ '--i': i++ } as React.CSSProperties}>{ch}</span>
              ))}
            </span>{' '}
          </span>
        ))}
      </span>
    </>
  );
}

function BeatText({ beat, k, on, ready = true }: { beat: Beat; k: number; on: boolean; ready?: boolean }) {
  const Title = k === 0 ? 'h1' : 'h2';
  const side = sideOf(k);
  return (
    <div className={`st-beat ${side}${on ? ' on' : ''}`}>
      <p className="st-kicker">
        {k > 0 && <i className="st-n">{k}</i>}
        <span>{beat.kicker}</span>
      </p>
      <Title className={`giant st-title${k === 0 ? ' st-title-hero' : ''}${ready ? ' st-ready' : ''}`}>
        {k === 0 ? <RisingTitle text={beat.title} /> : beat.title}
      </Title>
      <p className="st-body">{beat.body}</p>
      {beat.note && <p className="st-note">{beat.note}</p>}
      {k === 0 && (
        <div className="st-ctas" inert={!on || undefined}>
          <a href="#work" className="btn-hot">See work</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      )}
      {k === BEATS.length - 1 && (
        <div className="st-ctas" inert={!on || undefined}>
          <Link href="/work" className="btn-hot">See case studies</Link>
          <Link href="/#contact" className="btn-ghost">Get in touch</Link>
        </div>
      )}
    </div>
  );
}

const TEXT_W = 420;   // step text column
const PAD = 40;       // panel side padding at desktop
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const sideOf = (k: number) => (k === 0 ? 'hero' : k % 2 ? 'r' : 'l');

export function Story() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stageColRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isStatic, setStatic] = useState(false);
  // Letters of the hero headline rise once the client has mounted (a class-toggled transition, not a load animation).
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  // Stacked, non-animated version for reduced motion or the site's pause toggle.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const check = () => setStatic(mq.matches || document.documentElement.dataset.motion === 'off');
    check();
    mq.addEventListener('change', check);
    const mo = new MutationObserver(check);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });
    return () => { mq.removeEventListener('change', check); mo.disconnect(); };
  }, []);

  // Scale each stage (authored at 620×420) to the room beside the text column, and
  // tell the panel how far to shift the stage away from whichever side the text is on.
  useEffect(() => {
    const fit = () => {
      document.querySelectorAll<HTMLElement>('.st-stagewrap').forEach((el) => {
        const col = el.parentElement as HTMLElement;
        const panel = col.closest<HTMLElement>('.story-panel');
        const inner = col.closest<HTMLElement>('.story-inner');
        let s: number;
        if (panel && inner && window.innerWidth > 1100) {
          const W = inner.clientWidth, H = inner.clientHeight;
          const heroW = Math.min(680, W * 0.46);
          s = clamp(Math.min((W - heroW - 3 * PAD) / 620, (H - 190) / 420), 0.5, 1.4);
          panel.style.setProperty('--shift-hero', `${((heroW + PAD) / 2).toFixed(1)}px`);
          panel.style.setProperty('--shift-l', `${((TEXT_W + PAD) / 2).toFixed(1)}px`);
          panel.style.setProperty('--shift-r', `${(-(TEXT_W + PAD) / 2).toFixed(1)}px`);
        } else {
          s = clamp(col.clientWidth / 620, 0.5, 1.4);
        }
        el.style.setProperty('--s', s.toFixed(4));
      });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [isStatic]);

  useScrollFrame(() => {
    const wrap = wrapRef.current;
    const stage = stageColRef.current?.querySelector<HTMLElement>('.st-stage');
    if (!wrap || !stage) return;
    const r = wrap.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    const p = total > 0 ? clamp01(-r.top / total) : 0;
    const v = varsAt(p);
    for (const key in v) stage.style.setProperty(`--${key}`, v[key].toFixed(4));
    const k = Math.min(BEATS.length - 1, Math.floor(p * 6));
    const panel = panelRef.current;
    if (panel && panel.dataset.side !== sideOf(k)) panel.dataset.side = sideOf(k);
    setActive((cur) => (cur === k ? cur : k));
  });

  if (isStatic) {
    return (
      <section className="story story-static" aria-label="How a project goes from brief to launch">
        {BEATS.map((b, k) => (
          <div key={k} className="st-static-row">
            <BeatText beat={b} k={k} on />
            <Scene vars={frozen(k)} />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="story" aria-label="How a project goes from brief to launch">
      <div className="story-wrap" ref={wrapRef}>
        <div className="story-panel" ref={panelRef} data-side="hero" style={{ '--tw': `${TEXT_W}px` } as React.CSSProperties}>
          <div className="hero-aurora" aria-hidden="true" />
          <div className="story-inner">
            <div ref={stageColRef} className="st-stagecol">
              <Scene />
            </div>
            <div className="st-text">
              {BEATS.map((b, k) => <BeatText key={k} beat={b} k={k} on={k === active} ready={ready} />)}
            </div>
            <ol className="st-rail" aria-hidden="true">
              {BEATS.map((_, k) => (
                <li key={k} className={k === active ? 'on' : undefined}>{String(k).padStart(2, '0')}</li>
              ))}
            </ol>
            <p className={`st-hint${active === 0 ? ' on' : ''}`} aria-hidden="true">Scroll ↓</p>
          </div>
        </div>
      </div>
    </section>
  );
}
