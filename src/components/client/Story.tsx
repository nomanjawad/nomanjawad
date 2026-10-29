'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './story.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-pinned story: a client brief becomes a site, the site is exploded into
 * layers, cut open to show its measurements, then shipped.
 *
 * One GSAP timeline (six beats, one unit each) is scrubbed by ScrollTrigger over
 * the 600vh wrapper. Each beat is staged: cards snap into a grid with overshoot,
 * the spec frame draws itself, the window assembles piece by piece, layers
 * explode with a stagger, measurements pop in behind the scanner, and the
 * deploy badge lands with pulse rings.
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
  { kicker: 'brief, understood', title: 'Read it', body: 'Pages, integrations, launch date and a performance budget, written down before the first line of code.' },
  { kicker: 'design, built', title: 'Get a real site', body: 'Pixel-perfect from the Figma handoff, responsive by default, on Next.js or Laravel depending on the job.' },
  { kicker: 'layers, sorted', title: 'See every layer', body: 'Components, API, database, pipeline and edge. Every layer is deliberate, and every one is yours.' },
  { kicker: 'inside, checked', title: 'Cut it open', body: 'Performance, accessibility, security headers and SEO are measured against the budget before launch.', note: 'Prototype numbers. Replace with one named case study.' },
  { kicker: 'keys, handed over', title: 'Ship it', body: 'Deployed through CI, documented, and ready for your team to run without me.' },
];

/** PLACEHOLDER metrics for the dissection beat. `t` is when the scanner reaches it (0–1). */
const CALLOUTS = [
  { v: '100', k: 'Lighthouse performance', t: 0.06, side: 'l' },
  { v: '1.1s', k: 'Largest contentful paint', t: 0.2, side: 'l' },
  { v: '48ms', k: 'Interaction to next paint', t: 0.34, side: 'l' },
  { v: '0.00', k: 'Cumulative layout shift', t: 0.6, side: 'r' },
  { v: 'A+', k: 'Security headers', t: 0.74, side: 'r' },
  { v: 'AA', k: 'WCAG 2.2 audit', t: 0.88, side: 'r' },
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

const TEXT_W = 460;   // step text column
const PAD = 48;       // panel side padding at desktop
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const sideOf = (k: number) => (k === 0 ? 'hero' : k % 2 ? 'r' : 'l');
const sideClass = (k: number) => `s-${sideOf(k)}`;

/** Builds the six-beat timeline for one scene root. Paused; the caller scrubs or freezes it. */
function buildTimeline(root: HTMLElement) {
  const q = gsap.utils.selector(root);
  const cards = q('.st-card');
  const spec = q('.st-spec')[0];
  const specRect = root.querySelector<SVGRectElement>('.st-spec-rect') ?? undefined;
  const stackwrap = q('.st-stackwrap')[0];
  const stack = q('.st-stack')[0];
  const layers = q('.st-layer');
  const plates = q('.st-plate');
  const win = q('.st-site')[0];
  const winNav = q('.st-site-nav')[0];
  const winBars = q('.st-site-hero > *');
  const winCards = q('.st-site-cards > span');
  const scan = q('.st-scan')[0];
  const fill = q('.st-scanfill')[0];
  const calls = q('.st-call');
  const read = q('.st-read')[0];
  const ship = q('.st-ship')[0];
  const rings = q('.st-ring');

  const len = specRect ? Math.ceil(specRect.getTotalLength()) : 1600;

  gsap.set(cards, { xPercent: -50, yPercent: -50, x: (i) => PILE[i].x0, y: (i) => PILE[i].y0, rotation: (i) => PILE[i].r0, scale: 1, autoAlpha: 1 });
  gsap.set(spec, { autoAlpha: 0, scale: 0.94 });
  if (specRect) gsap.set(specRect, { strokeDasharray: len, strokeDashoffset: len });
  gsap.set(stackwrap, { autoAlpha: 0 });
  gsap.set(stack, { scale: 0.7, rotateX: 0, rotateZ: 0 });
  gsap.set(layers, { z: 0 });
  gsap.set(plates, { autoAlpha: 0 });
  gsap.set(winNav, { yPercent: -140, autoAlpha: 0 });
  gsap.set(winBars, { scaleX: 0, transformOrigin: '50% 50%' });
  gsap.set(winCards, { scale: 0.6, y: 16, autoAlpha: 0 });
  gsap.set(scan, { x: 0, autoAlpha: 0 });
  gsap.set(fill, { clipPath: 'inset(0 100% 0 0)', autoAlpha: 0 });
  gsap.set(calls, { autoAlpha: 0, scale: 0.8, y: 14 });
  gsap.set(read, { autoAlpha: 0, y: 8 });
  gsap.set(ship, { autoAlpha: 0, y: 16 });
  gsap.set(rings, { scale: 0.7, autoAlpha: 0 });
  gsap.set(win, { '--ship': 0 } as gsap.TweenVars);

  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } });

  // Beat 1: the pile snaps into a spec grid and the frame draws itself.
  tl.addLabel('tidy', 0.95)
    .to(cards, { x: (i) => PILE[i].x1, y: (i) => PILE[i].y1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)', stagger: { each: 0.05, from: 'random' } }, 'tidy')
    .to(spec, { autoAlpha: 1, scale: 1, duration: 0.3 }, 'tidy+=0.12');
  if (specRect) tl.to(specRect, { strokeDashoffset: 0, duration: 0.5, ease: 'power1.inOut' }, 'tidy+=0.12');

  // Beat 2: the cards fold into the window; the page assembles piece by piece.
  tl.addLabel('build', 1.95)
    .to(spec, { autoAlpha: 0, scale: 0.96, duration: 0.2 }, 'build')
    .to(cards, { x: 0, y: 0, scale: 0.35, rotation: (i) => (i % 2 ? 14 : -14), autoAlpha: 0, duration: 0.35, ease: 'power3.in', stagger: 0.04 }, 'build')
    .to(stackwrap, { autoAlpha: 1, duration: 0.12 }, 'build+=0.28')
    .to(stack, { scale: 1, duration: 0.45, ease: 'back.out(1.4)' }, 'build+=0.28')
    .to(winNav, { yPercent: 0, autoAlpha: 1, duration: 0.2, ease: 'power3.out' }, 'build+=0.42')
    .to(winBars, { scaleX: 1, duration: 0.3, stagger: 0.07, ease: 'power3.out' }, 'build+=0.48')
    .to(winCards, { scale: 1, y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(2.2)' }, 'build+=0.58');

  // Beat 3: the window tilts back and the layers underneath fan out.
  tl.addLabel('explode', 2.95)
    .to(stack, { rotateX: 56, rotateZ: -32, scale: 0.8, duration: 0.6 }, 'explode')
    .to(plates, { autoAlpha: 1, duration: 0.25, stagger: { each: 0.06, from: 'end' } }, 'explode+=0.12')
    .to(layers, { z: (i) => (i - 2.5) * 52, duration: 0.55, ease: 'back.out(1.2)', stagger: { each: 0.05, from: 'end' } }, 'explode+=0.12');

  // Beat 4: the scanner sweeps through the stack; each measurement pops in as it passes.
  tl.addLabel('scan', 3.95)
    .to([scan, fill], { autoAlpha: 1, duration: 0.05 }, 'scan')
    .to(scan, { x: 620, duration: 0.8, ease: 'none' }, 'scan')
    .to(fill, { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'none' }, 'scan')
    .to(scan, { autoAlpha: 0, duration: 0.06 }, 'scan+=0.8')
    .to(read, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'power3.out' }, 'scan+=0.05');
  calls.forEach((c, i) => {
    tl.to(c, { autoAlpha: 1, scale: 1, y: 0, duration: 0.22, ease: 'back.out(2.4)' }, `scan+=${(0.04 + CALLOUTS[i].t * 0.72).toFixed(3)}`);
  });

  // Beat 5: everything folds back into one shipped site, with a green pulse.
  tl.addLabel('ship', 4.95)
    .to(calls, { autoAlpha: 0, scale: 0.9, duration: 0.2, stagger: 0.02 }, 'ship')
    .to([read, fill], { autoAlpha: 0, duration: 0.15 }, 'ship')
    .to(layers, { z: 0, duration: 0.45, ease: 'power3.inOut', stagger: 0.04 }, 'ship+=0.05')
    .to(plates, { autoAlpha: 0, duration: 0.2 }, 'ship+=0.32')
    .to(stack, { rotateX: 0, rotateZ: 0, scale: 1, duration: 0.5, ease: 'back.out(1.3)' }, 'ship+=0.12')
    .to(win, { '--ship': 1, duration: 0.2 } as gsap.TweenVars, 'ship+=0.52')
    .to(ship, { autoAlpha: 1, y: 0, duration: 0.25, ease: 'back.out(2)' }, 'ship+=0.52')
    .fromTo(rings, { scale: 0.75, autoAlpha: 0.9 }, { scale: 1.5, autoAlpha: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }, 'ship+=0.5');

  // Pad to exactly six beats so label k sits at progress k / 6.
  tl.set({}, {}, 6);
  return tl;
}

/** Progress used for each frozen panel of the static (reduced-motion) version. */
const frozenProgress = (k: number) => (k === 4 ? 4.85 / 6 : (k + 0.75) / 6);

function Scene() {
  return (
    <div className="st-stagewrap">
      <div className="st-stage" aria-hidden="true">
        <div className="st-spec">
          <svg className="st-spec-svg" viewBox="0 0 540 250" preserveAspectRatio="none"><rect className="st-spec-rect" x="1" y="1" width="538" height="248" rx="22" /></svg>
          <span>Spec · 6 pages · 2 integrations · launch 15 Nov</span>
        </div>
        {PILE.map((c, i) => (
          <div key={i} className={`st-card ${c.c}`}><span className="st-card-in"><i />{c.t}</span></div>
        ))}

        <div className="st-stackwrap">
          <div className="st-rings"><i className="st-ring" /><i className="st-ring" /></div>
          <div className="st-stack">
            {LAYERS.map((name, z) => {
              const isWin = z === LAYERS.length - 1;
              return (
                <div key={name} className={`st-layer${isWin ? ' st-win' : ''}`}>
                  {isWin ? (
                    <div className="st-site">
                      <div className="st-site-bar"><i /><i /><i /><span>yourclient.com</span></div>
                      <div className="st-site-nav"><b /><span /><span /><span /><em /></div>
                      <div className="st-site-hero"><b /><b className="w2" /><em /></div>
                      <div className="st-site-cards"><span /><span /><span /></div>
                    </div>
                  ) : (
                    <div className="st-plate" style={{ '--z': z } as React.CSSProperties}><span>{name}</span><b /><b /><b /></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="st-scanfill" />
        <div className="st-scan" />
        {CALLOUTS.map((c, i) => (
          <div key={c.k} className={`st-call ${c.side}`} style={{ top: `${28 + (i % 3) * 112}px` }}>
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
  return (
    <div className={`st-beat ${sideClass(k)}${on ? ' on' : ''}`}>
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

export function Story() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stageColRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isStatic, setStatic] = useState(false);
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

  // Scale each stage (authored at 620×420) to the room beside the text column and the viewport height.
  useEffect(() => {
    const fit = () => {
      document.querySelectorAll<HTMLElement>('.st-stagewrap').forEach((el) => {
        const col = el.parentElement as HTMLElement;
        const panel = col.closest<HTMLElement>('.story-panel');
        const inner = col.closest<HTMLElement>('.story-inner');
        let s: number;
        if (panel && inner && window.innerWidth > 1100) {
          const W = inner.clientWidth, H = inner.clientHeight;
          const heroW = Math.min(720, W * 0.42);
          s = clamp(Math.min((W - heroW - 3 * PAD) / 620, (H - 200) / 420), 0.5, 1.8);
          panel.style.setProperty('--shift-hero', `${((heroW + PAD) / 2).toFixed(1)}px`);
          panel.style.setProperty('--shift-l', `${((TEXT_W + PAD) / 2).toFixed(1)}px`);
          panel.style.setProperty('--shift-r', `${(-(TEXT_W + PAD) / 2).toFixed(1)}px`);
        } else {
          s = clamp(col.clientWidth / 620, 0.5, 1.8);
        }
        el.style.setProperty('--s', s.toFixed(4));
      });
      ScrollTrigger.refresh();
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [isStatic]);

  // Scroll-scrubbed timeline, plus a gentle idle float on the brief cards.
  useEffect(() => {
    if (isStatic) return;
    const wrap = wrapRef.current;
    const stage = stageColRef.current?.querySelector<HTMLElement>('.st-stage');
    if (!wrap || !stage) return;
    const ctx = gsap.context(() => {
      const tl = buildTimeline(stage);
      ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        animation: tl,
        onUpdate: (self) => {
          const k = Math.min(BEATS.length - 1, Math.floor(self.progress * 6));
          const panel = panelRef.current;
          if (panel && panel.dataset.side !== sideOf(k)) panel.dataset.side = sideOf(k);
          setActive((cur) => (cur === k ? cur : k));
        },
      });
      gsap.to(stage.querySelectorAll('.st-card-in'), {
        y: 7, rotation: 1.6, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1,
        stagger: { each: 0.35, from: 'random' },
      });
    }, stage);
    return () => ctx.revert();
  }, [isStatic]);

  // Frozen frames for the static version.
  useEffect(() => {
    if (!isStatic) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('.story-static .st-stage').forEach((stage, k) => {
        buildTimeline(stage).progress(frozenProgress(k));
      });
    });
    return () => ctx.revert();
  }, [isStatic]);

  if (isStatic) {
    return (
      <section className="story story-static" aria-label="How a project goes from brief to launch">
        {BEATS.map((b, k) => (
          <div key={k} className="st-static-row">
            <BeatText beat={b} k={k} on />
            <Scene />
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
