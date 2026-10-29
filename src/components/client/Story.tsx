'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './story.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-pinned story of a project, in Noman's six steps:
 * hero → discovery call → organise & analyse → prototype → client feedback → optimise → hand over.
 *
 * One GSAP timeline (seven beats, one unit each) is scrubbed by ScrollTrigger over
 * the 700vh wrapper. Copy and the metrics are PLACEHOLDERS; move them to content.json once settled.
 */

type Beat = { kicker: string; title: string; body: string; note?: string };

const BEATS: Beat[] = [
  {
    kicker: 'Full-stack web developer · Next.js · React · Laravel',
    title: 'From client brief to production site',
    body: 'You send what you have: a Figma file, a Loom, a Slack thread, a deadline. Scroll to see what happens to it.',
  },
  { kicker: 'discovery call', title: 'We talk first', body: 'A thirty-minute call to hear what you need, who it is for and when it has to be live. No forms, no pitch.' },
  { kicker: 'requirements, organised', title: 'I organise and analyse', body: 'Everything from the call becomes a written scope: pages, integrations, risks and a performance budget.' },
  { kicker: 'prototype, built', title: 'You get a prototype', body: 'A clickable build on a live URL, made to your requirements, so you react to something real instead of a mock-up.' },
  { kicker: 'feedback, in', title: 'You review, I revise', body: 'Comment anywhere on the prototype. Every round of feedback goes in before we move on.' },
  { kicker: 'optimised', title: 'Then it gets fast', body: 'Performance, accessibility, security headers and SEO are measured against the budget before launch.', note: 'Prototype numbers. Replace with one named case study.' },
  { kicker: 'handed over', title: 'Your shiny new site', body: 'Deployed through CI, documented, and yours to run. Keys handed over.' },
];
const N = BEATS.length;

/** PLACEHOLDER metrics for the optimisation beat. `t` is when the scanner reaches it (0–1). */
const METRICS = [
  { v: '100', k: 'Lighthouse performance', t: 0.06, side: 'l' },
  { v: '1.1s', k: 'Largest contentful paint', t: 0.2, side: 'l' },
  { v: '48ms', k: 'Interaction to next paint', t: 0.34, side: 'l' },
  { v: '0.00', k: 'Cumulative layout shift', t: 0.6, side: 'r' },
  { v: 'A+', k: 'Security headers', t: 0.74, side: 'r' },
  { v: 'AA', k: 'WCAG 2.2 audit', t: 0.88, side: 'r' },
] as const;

/** Bottom to top. The last one is the browser window. */
const LAYERS = ['CDN & edge', 'CI/CD & hosting', 'Database', 'API', 'Components', 'UI'];

/** Brief cards: scattered (x0,y0,r0) → notes beside the call (xc,yc) → spec grid (x1,y1). Stage units, centre origin. */
const PILE = [
  { c: 'figma', t: 'Figma · Home v3', x0: -190, y0: -80, r0: -9, x1: -130, y1: -62 },
  { c: 'loom', t: 'Loom · 4:12 walkthrough', x0: 130, y0: -120, r0: 7, x1: 130, y1: -62 },
  { c: 'slack', t: '“Launch before the 15th?”', x0: 40, y0: 20, r0: -3, x1: -130, y1: 0 },
  { c: 'note', t: 'Must work on phones', x0: -160, y0: 110, r0: 12, x1: 130, y1: 0 },
  { c: 'note', t: 'Stripe + HubSpot', x0: 190, y0: 100, r0: -11, x1: -130, y1: 62 },
  { c: 'mail', t: 'brand-assets.zip', x0: -30, y0: -150, r0: 4, x1: 130, y1: 62 },
];
const NOTE_X = 165;
const noteY = (i: number) => -115 + i * 46;

/** Client feedback pins on the prototype (window coordinates, 420×280). */
const PINS = [
  { x: 330, y: 52, t: 'Make the CTA bigger' },
  { x: 70, y: 178, t: 'Swap this photo' },
  { x: 300, y: 215, t: 'Add Stripe here' },
];

const ANALYSIS = ['6 pages', '2 integrations', '1 risk flagged', 'LCP budget 1.5 s'];

const TEXT_W = 460;   // step text column
const PAD = 48;       // panel side padding at desktop
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const sideOf = (k: number) => (k === 0 ? 'hero' : k % 2 ? 'r' : 'l');
const sideClass = (k: number) => `s-${sideOf(k)}`;

/** Builds the seven-beat timeline for one scene root. Paused; the caller scrubs or freezes it. */
function buildTimeline(root: HTMLElement) {
  const q = gsap.utils.selector(root);
  const cards = q('.st-card');
  const callui = q('.st-callui')[0];
  const bars = q('.st-wave i');
  const spec = q('.st-spec')[0];
  const specRect = root.querySelector<SVGRectElement>('.st-spec-rect') ?? undefined;
  const chips = q('.st-chip');
  const stackwrap = q('.st-stackwrap')[0];
  const stack = q('.st-stack')[0];
  const stackIn = q('.st-stack-in')[0];
  const layers = q('.st-layer');
  const plates = q('.st-plate');
  const win = q('.st-site')[0];
  const winNav = q('.st-site-nav')[0];
  const winBars = q('.st-site-hero > *');
  const winCards = q('.st-site-cards > span');
  const urlProto = q('.st-url.proto')[0];
  const urlLive = q('.st-url.live')[0];
  const pins = q('.st-pin');
  const bubbles = q('.st-bubble');
  const scan = q('.st-scan')[0];
  const fill = q('.st-scanfill')[0];
  const metrics = q('.st-metric');
  const read = q('.st-read')[0];
  const ship = q('.st-ship')[0];
  const rings = q('.st-ring');
  const sparks = q('.st-spark');

  const len = specRect ? Math.ceil(specRect.getTotalLength()) : 1600;

  gsap.set(cards, { xPercent: -50, yPercent: -50, x: (i) => PILE[i].x0, y: (i) => PILE[i].y0, rotation: (i) => PILE[i].r0, scale: 1, autoAlpha: 1 });
  gsap.set(callui, { autoAlpha: 0, scale: 0.9, y: 10 });
  gsap.set(spec, { autoAlpha: 0, scale: 0.94 });
  if (specRect) gsap.set(specRect, { strokeDasharray: len, strokeDashoffset: len });
  gsap.set(chips, { autoAlpha: 0, y: 10 });
  gsap.set(stackwrap, { autoAlpha: 0 });
  gsap.set(stack, { scale: 0.7, rotateX: 0 });
  gsap.set(stackIn, { rotation: 0 });
  gsap.set(layers, { z: 0 });
  gsap.set(plates, { autoAlpha: 0 });
  gsap.set(winNav, { yPercent: -140, autoAlpha: 0 });
  gsap.set(winBars, { scaleX: 0, transformOrigin: '50% 50%' });
  gsap.set(winCards, { scale: 0.6, y: 16, autoAlpha: 0 });
  gsap.set(urlProto, { autoAlpha: 1 });
  gsap.set(urlLive, { autoAlpha: 0 });
  gsap.set(pins, { autoAlpha: 0, scale: 0.4 });
  gsap.set(bubbles, { autoAlpha: 0, x: -6 });
  gsap.set(scan, { x: 0, autoAlpha: 0 });
  gsap.set(fill, { clipPath: 'inset(0 100% 0 0)', autoAlpha: 0 });
  gsap.set(metrics, { autoAlpha: 0, scale: 0.8, y: 14 });
  gsap.set(read, { autoAlpha: 0, y: 8 });
  gsap.set(ship, { autoAlpha: 0, y: 16 });
  gsap.set(rings, { scale: 0.75, autoAlpha: 0 });
  gsap.set(sparks, { x: 0, y: 0, scale: 0, autoAlpha: 0 });
  gsap.set(win, { '--ship': 0 } as gsap.TweenVars);

  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } });

  // Beat 1: the discovery call. The call panel appears and the scattered inputs line up as notes beside it.
  tl.addLabel('call', 0.95)
    .to(callui, { autoAlpha: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.6)' }, 'call')
    .to(cards, { x: NOTE_X, y: (i) => noteY(i), rotation: 0, scale: 0.78, duration: 0.5, ease: 'back.out(1.5)', stagger: 0.05 }, 'call+=0.08');

  // Beat 2: organise and analyse. The call ends; notes snap into the spec grid, the frame draws itself, analysis chips land.
  tl.addLabel('organise', 1.95)
    .to(callui, { autoAlpha: 0, scale: 0.92, y: -8, duration: 0.25 }, 'organise')
    .to(cards, { x: (i) => PILE[i].x1, y: (i) => PILE[i].y1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: { each: 0.05, from: 'random' } }, 'organise+=0.05')
    .to(spec, { autoAlpha: 1, scale: 1, duration: 0.3 }, 'organise+=0.18');
  if (specRect) tl.to(specRect, { strokeDashoffset: 0, duration: 0.5, ease: 'power1.inOut' }, 'organise+=0.18');
  tl.to(chips, { autoAlpha: 1, y: 0, duration: 0.25, stagger: 0.07, ease: 'back.out(2)' }, 'organise+=0.5');

  // Beat 3: the prototype. Cards fold into the window; the page assembles piece by piece.
  tl.addLabel('proto', 2.95)
    .to([spec, chips], { autoAlpha: 0, duration: 0.2 }, 'proto')
    .to(cards, { x: 0, y: 0, scale: 0.35, rotation: (i) => (i % 2 ? 14 : -14), autoAlpha: 0, duration: 0.35, ease: 'power3.in', stagger: 0.04 }, 'proto')
    .to(stackwrap, { autoAlpha: 1, duration: 0.12 }, 'proto+=0.28')
    .to(stack, { scale: 1, duration: 0.45, ease: 'back.out(1.4)' }, 'proto+=0.28')
    .to(winNav, { yPercent: 0, autoAlpha: 1, duration: 0.2, ease: 'power3.out' }, 'proto+=0.42')
    .to(winBars, { scaleX: 1, duration: 0.3, stagger: 0.07, ease: 'power3.out' }, 'proto+=0.48')
    .to(winCards, { scale: 1, y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(2.2)' }, 'proto+=0.58');

  // Beat 4: client feedback. Pins pop onto the prototype with comments, then resolve to green ticks.
  tl.addLabel('review', 3.95);
  pins.forEach((pin, i) => {
    tl.to(pin, { autoAlpha: 1, scale: 1, duration: 0.22, ease: 'back.out(3)' }, `review+=${(0.05 + i * 0.16).toFixed(2)}`)
      .to(bubbles[i], { autoAlpha: 1, x: 0, duration: 0.2, ease: 'power3.out' }, `review+=${(0.14 + i * 0.16).toFixed(2)}`);
  });
  tl.to(pins, { backgroundColor: '#6FCF6B', color: '#0C0C0C', duration: 0.18, stagger: 0.08 }, 'review+=0.62')
    .to(bubbles, { autoAlpha: 0, x: 6, duration: 0.18, stagger: 0.08 }, 'review+=0.62');

  // Beat 5: optimisation. Pins clear, the layers fan out, the scanner sweeps and each measurement pops in.
  tl.addLabel('optimise', 4.95)
    .to(pins, { autoAlpha: 0, scale: 0.4, duration: 0.15, stagger: 0.03 }, 'optimise')
    .to(stack, { rotateX: 56, scale: 0.8, duration: 0.45 }, 'optimise+=0.05')
    .to(stackIn, { rotation: -32, duration: 0.45 }, 'optimise+=0.05')
    .to(plates, { autoAlpha: 1, duration: 0.2, stagger: { each: 0.04, from: 'end' } }, 'optimise+=0.12')
    .to(layers, { z: (i) => (i - 2.5) * 52, duration: 0.4, ease: 'back.out(1.2)', stagger: { each: 0.04, from: 'end' } }, 'optimise+=0.12')
    .to([scan, fill], { autoAlpha: 1, duration: 0.04 }, 'optimise+=0.42')
    .to(scan, { x: 620, duration: 0.5, ease: 'none' }, 'optimise+=0.42')
    .to(fill, { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'none' }, 'optimise+=0.42')
    .to(scan, { autoAlpha: 0, duration: 0.05 }, 'optimise+=0.92')
    .to(read, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'power3.out' }, 'optimise+=0.46');
  metrics.forEach((m, i) => {
    tl.to(m, { autoAlpha: 1, scale: 1, y: 0, duration: 0.2, ease: 'back.out(2.4)' }, `optimise+=${(0.44 + METRICS[i].t * 0.46).toFixed(3)}`);
  });

  // Beat 6: hand over. Everything folds back into one shipped site; the URL goes live; rings and sparks.
  tl.addLabel('ship', 5.95)
    .to(metrics, { autoAlpha: 0, scale: 0.9, duration: 0.18, stagger: 0.02 }, 'ship')
    .to([read, fill], { autoAlpha: 0, duration: 0.15 }, 'ship')
    .to(layers, { z: 0, duration: 0.4, ease: 'power3.inOut', stagger: 0.035 }, 'ship+=0.04')
    .to(plates, { autoAlpha: 0, duration: 0.2 }, 'ship+=0.3')
    .to(stack, { rotateX: 0, scale: 1, duration: 0.45, ease: 'back.out(1.3)' }, 'ship+=0.1')
    .to(stackIn, { rotation: 0, duration: 0.45, ease: 'back.out(1.3)' }, 'ship+=0.1')
    .to(urlProto, { autoAlpha: 0, duration: 0.1 }, 'ship+=0.5')
    .to(urlLive, { autoAlpha: 1, duration: 0.1 }, 'ship+=0.55')
    .to(win, { '--ship': 1, duration: 0.2 } as gsap.TweenVars, 'ship+=0.5')
    .to(ship, { autoAlpha: 1, y: 0, duration: 0.25, ease: 'back.out(2)' }, 'ship+=0.5')
    .fromTo(rings, { scale: 0.75, autoAlpha: 0.9 }, { scale: 1.5, autoAlpha: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', immediateRender: false }, 'ship+=0.5')
    .fromTo(sparks, { x: 0, y: 0, scale: 0, autoAlpha: 1 }, {
      x: (i) => Math.cos((i / sparks.length) * Math.PI * 2) * 260,
      y: (i) => Math.sin((i / sparks.length) * Math.PI * 2) * 180,
      scale: 1, autoAlpha: 0, duration: 0.4, ease: 'power2.out', stagger: 0.008, immediateRender: false,
    }, 'ship+=0.5');

  // Pad to exactly N beats so label k sits at progress k / N.
  tl.set({}, {}, N);
  return tl;
}

/** Progress used for each frozen panel of the static (reduced-motion) version. */
const frozenProgress = (k: number) => (k === 5 ? 5.9 / N : k === 4 ? 4.5 / N : (k + 0.8) / N);

function Scene() {
  return (
    <div className="st-stagewrap">
      <div className="st-stage" aria-hidden="true">
        <div className="st-callui">
          <div className="st-avatars"><i /><i /></div>
          <div className="st-wave">{Array.from({ length: 14 }).map((_, i) => <i key={i} />)}</div>
          <span className="st-callmeta">Discovery call · 30 min · recording</span>
        </div>
        <div className="st-spec">
          <svg className="st-spec-svg" viewBox="0 0 540 250" preserveAspectRatio="none"><rect className="st-spec-rect" x="1" y="1" width="538" height="248" rx="16" /></svg>
          <span>Scope · written after the call</span>
        </div>
        <div className="st-chips">
          {ANALYSIS.map((a) => <span key={a} className="st-chip"><i />{a}</span>)}
        </div>
        {PILE.map((c, i) => (
          <div key={i} className={`st-card ${c.c}`}><span className="st-card-in"><i />{c.t}</span></div>
        ))}

        <div className="st-stackwrap">
          <div className="st-rings"><i className="st-ring" /><i className="st-ring" /></div>
          <div className="st-sparks">{Array.from({ length: 10 }).map((_, i) => <i key={i} className="st-spark" />)}</div>
          <div className="st-stack">
            <div className="st-stack-in">
              {LAYERS.map((name, z) => {
                const isWin = z === LAYERS.length - 1;
                return (
                  <div key={name} className={`st-layer${isWin ? ' st-win' : ''}`}>
                    {isWin ? (
                      <div className="st-site">
                        <div className="st-site-bar"><i /><i /><i /><span className="st-url proto">prototype-v1.vercel.app</span><span className="st-url live">yourclient.com</span></div>
                        <div className="st-site-nav"><b /><span /><span /><span /><em /></div>
                        <div className="st-site-hero"><b /><b className="w2" /><em /></div>
                        <div className="st-site-cards"><span /><span /><span /></div>
                        {PINS.map((p, i) => (
                          <div key={i} className="st-pinwrap" style={{ left: p.x, top: p.y }}>
                            <i className="st-pin">{i + 1}</i>
                            <span className="st-bubble">{p.t}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="st-plate" style={{ '--z': z } as React.CSSProperties}><span>{name}</span><b /><b /><b /></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="st-scanfill" />
        <div className="st-scan" />
        {METRICS.map((m, i) => (
          <div key={m.k} className={`st-metric ${m.side}`} style={{ top: `${28 + (i % 3) * 112}px` }}>
            <b>{m.v}</b><span>{m.k}</span>
          </div>
        ))}
        <div className="st-read">
          <b>Section A–A</b>
          <span>LCP 1.1 s · INP 48 ms · CLS 0.00</span>
          <span>headers A+ · WCAG AA</span>
        </div>

        <div className="st-ship"><i /> Live · all checks green · keys handed over</div>
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
      {k === N - 1 && (
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

  // Scroll-scrubbed timeline, plus idle loops: brief cards float, the call waveform breathes.
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
          const k = Math.min(N - 1, Math.floor(self.progress * N));
          const panel = panelRef.current;
          if (panel && panel.dataset.side !== sideOf(k)) panel.dataset.side = sideOf(k);
          setActive((cur) => (cur === k ? cur : k));
        },
      });
      gsap.to(stage.querySelectorAll('.st-card-in'), {
        y: 7, rotation: 1.6, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1,
        stagger: { each: 0.35, from: 'random' },
      });
      gsap.to(stage.querySelectorAll('.st-wave i'), {
        scaleY: () => gsap.utils.random(0.25, 1), duration: 0.45, ease: 'sine.inOut', yoyo: true, repeat: -1,
        repeatRefresh: true, stagger: { each: 0.06, from: 'random' },
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
      <div className="story-wrap" ref={wrapRef} style={{ height: `${N * 100}vh` }}>
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
