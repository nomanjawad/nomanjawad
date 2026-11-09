# 3D / Motion-Driven Hero and UI for a Developer Portfolio (Next.js 16, React 19) — notes as of October 2026

Reading notes on evidence quality:
- "(fetched)" = I opened the page and read it. "(search snippet)" = the claim comes from a search-result summary and the page itself was not opened; treat as lower confidence and attribution to the exact URL as approximate.
- Several sources are vendor pages, SEO blogs or AI-skill listings rather than primary docs. They are flagged where used.

## 1. What exactly is on the reference page (motionsites.ai 3d-jack-portfolio-hero)? Visual recipe and tech

### Takeaway
The reference is a paid "prompt" product, not a WebGL scene: a dark, full-viewport hero with a gradient-text headline and a pre-rendered "3D" portrait image that tilts/follows the cursor ("magnetic hover"), followed by scroll-linked marquee, character-by-character text reveal, and sticky stacking project cards, built with React + Tailwind + Motion (Framer Motion). I could not see the page visually or read the prompt text (the page is client-rendered and the prompt is gated), so the description is reconstructed from third-party write-ups.

### Cited Findings
- MotionSites describes itself as "Beautiful Website Prompts for Lovable, Bolt, Cursor, and Claude" to "Build Stunning 3d Websites With AI"; it is a copy-paste prompt library with a "Go Unlimited" paid tier. The fetched HTML did not expose the Jack prompt text, fonts, colours or assets (fetched; page is JS-rendered) — [motionsites.ai](https://motionsites.ai/?prompt=3d-jack-portfolio-hero)
- A freelancer who built the "3D Jack Portfolio" premium prompt end-to-end in Lovable lists its features as: a "magnetic-hover 3D portrait that tracks the cursor in real time"; a dual-row image marquee with rows moving in opposite directions tied to scroll position; scroll-triggered character-by-character text reveal in the About section; sticky stacking Projects cards that scale down 3% as the next card slides over; and rounded "peel" transitions between dark and light sections (fetched) — [Contra, Sahil Undhad](https://contra.com/p/PvgFOMNO-tested-one-of-motion-sites-premium)
- The same build used React, Motion for React (Framer Motion) and Lovable; the author calls it "a well-engineered prompt paired with Lovable's build loop" rather than hand-written timelines (fetched) — [Contra](https://contra.com/p/PvgFOMNO-tested-one-of-motion-sites-premium)
- A second listing ("3D Creator Portfolio — Jack") describes: a dark, premium landing page; full-viewport hero with gradient-text headline and mouse-following magnetic 3D portrait; scroll-driven horizontal image marquee; About section with corner 3D decorations and character-by-character scroll-reveal text; a white Services list; sticky-stacking project cards (search snippet; the page returned 404 when fetched directly) — [open-design.ai](https://open-design.ai/plugins/example-3d-creator-portfolio/)
- A public GitHub mirror of MotionSites prompts (65 prompts) states they are "optimized for React, Tailwind CSS, Framer Motion, and HLS.js" (i.e. motion + streamed background video, not Three.js). It contains other portfolio prompts (Bold Portfolio Hero, Dark Portfolio Hero, Viktor Portfolio, xPortfolio Hero, Portfolio Cosmic) with .mp4 previews, but not the Jack prompt (fetched repo page + file tree listing) — [GitHub TheSatyam-Singh/motionsites.ai](https://github.com/TheSatyam-Singh/motionsites.ai)
- A July 2026 walkthrough of the adjacent "AI 3D animated portfolio" workflow shows how the "3D" look is typically produced in this genre: a stylised 3D character generated with an AI image model (GPT Image 2 / Nano Banana Pro), animated into a single ~10 s loop with Seedance 2.0 at 4K, and placed as a looping, control-less background video with text and CTA overlaid; the site code was generated with Claude. No file sizes or performance numbers are given (fetched) — [mejba.me](https://www.mejba.me/blog/3d-animated-portfolio-ai-claude-seedance)

### Inferences
- The "3D" in the reference is almost certainly a pre-rendered asset (3D-styled portrait image/cut-out and decorative 3D renders) moved with pointer-driven transforms, not real-time 3D. Evidence: every description names React + Motion only, the vendor's stack is "React, Tailwind, Framer Motion, HLS.js", and no source mentions Three.js, R3F or Spline. This matters: the look can be reproduced with roughly zero 3D runtime cost.
- Recipe to reproduce in Next.js 16: server-rendered H1 with CSS gradient text (`background-clip: text`); portrait as `next/image` with `priority` (it will be the LCP element); pointer-move handler feeding Motion `useMotionValue`/`useSpring` to drive `rotateX/rotateY/translate` on a `perspective` wrapper; marquee rows driven by `useScroll` + `useTransform`; per-character opacity reveal mapped to scroll progress; project cards with `position: sticky` plus scale transform; section "peel" via large `border-radius` on the overlapping section.
- The reference is a design-prompt product aimed at AI builders (Lovable/Bolt); output quality is "template-grade". A portfolio that must rank and convert should borrow the motion vocabulary but own the content, copy and IA.

### Gaps
- Exact typography (font families), hex colours, headline copy, layout proportions, asset URLs, and the verbatim prompt: not retrievable. The page is client-rendered, the prompt is behind the paid tier, and I had no browser rendering. A human should open the URL and screenshot it, or the coordinator should use a browser tool.
- Whether the portrait is a still PNG/WebP, a transparent video, or layered parallax images is not confirmed by any source.
- MotionSites pricing: not visible in fetched content.

## 2. Implementation options and trade-offs (R3F + drei, Spline, plain Three.js, pre-rendered video/image sequence, Rive/Lottie, CSS 3D, WebGPU)

### Takeaway
For this specific style, pre-rendered image/video plus CSS 3D transforms is the cheapest route and matches what the reference actually does; React Three Fiber v9 is the right choice only if real-time 3D is a genuine requirement, and Spline is the fastest to author but the riskiest for performance unless lazy-loaded.

### Cited Findings
React Three Fiber / drei / Three.js
- R3F v9 is the React 19 compatibility release; R3F v8 is not compatible with React 19 or Next 15+ (search snippet of official guide) — [R3F v9 migration guide](https://r3f.docs.pmnd.rs/tutorials/v9-migration-guide)
- Stated pairing: R3F v9.x with React 19.x, drei v9.x+ (sic, per the source) and three r171+; WebGPU works in v9 by passing an async factory to the `gl` prop that constructs and `init()`s `WebGPURenderer`; "R3F v10 and Drei v11 are currently in alpha for WebGPU support" as of early 2026 (search snippet; third-party blog, not pmndrs) — [Utsubo WebGPU migration guide](https://www.utsubo.com/blog/webgpu-threejs-migration-guide)
- Three.js core is "approximately 600 KB minified"; a full scene with models and textures "exceeds 3 MB"; shader compilation costs 50–300 ms per shader (fetched; agency blog, figures not independently measured) — [Utsubo SEO guide](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)
- Three.js gzipped size cited around 140–150 KB in forum discussion (search snippet; older threads, treat as order-of-magnitude) — [three.js forum](https://discourse.threejs.org/t/three-js-file-size-when-importing-via-npm-and-bundling-with-webpack/8904)

Spline
- Measured case (Webflow site, Nov 2025): Spline embeds loaded eagerly gave Lighthouse 30, LCP 5.7 s, TTI 5.3 s, load 6.5 s; after IntersectionObserver lazy-loading with static thumbnail placeholders: Lighthouse 90, LCP 0.6 s, TTI 0.8 s, load 1.2 s. Cause: Spline executing before interactivity and blocking the main thread "for hundreds of milliseconds" (fetched; single self-reported case) — [dev.to, T. Abolarin](https://dev.to/tolumen/optimizing-web-performance-how-lazy-loading-spline-assets-took-our-build-from-30-to-90-in-4ne2)
- Spline pricing in 2026 is reported inconsistently by trackers: "Starter $15/month … up to $25/month"; a new plan added 7 Sept 2026 with a $0–$70/month range; "Hobby $15/month with 2,000 credits, Pro $30/month with 3,000 credits" (search snippets; third-party price trackers that conflict with each other) — [CostBench Spline](https://costbench.com/software/ai-3d-generation/spline/); [CostBench changelog Sept 2026](https://costbench.com/changelog/spline-plan-added-2026-09/)

Pre-rendered video
- The AI-portfolio workflow uses one 10 s looping 4K video as the hero, with restrained motion because video models handle simple movement best (fetched) — [mejba.me](https://www.mejba.me/blog/3d-animated-portfolio-ai-claude-seedance)
- MotionSites prompts are built around HLS.js-streamed video backgrounds (fetched) — [GitHub mirror](https://github.com/TheSatyam-Singh/motionsites.ai)

WebGPU
- Bruno Simon's 2025 portfolio rebuild uses Three.js with both WebGL and WebGPU and won Awwwards Developer Award / Site of the Month (Dec 2025–Jan 2026); code and Blender files are MIT on GitHub (search snippet) — [Awwwards](https://www.awwwards.com/sites/brunos-portfolio)

### Inferences
- Decision table (my synthesis; sizes are indicative only):

| Option | Runtime JS cost | Authoring effort | React 19 / Next 16 | Licence / cost | Fit for this hero |
|---|---|---|---|---|---|
| Pre-rendered image + CSS 3D tilt (Motion) | ~0 beyond motion lib | Low | Native | Free | Best match to reference; LCP is a plain image |
| Pre-rendered looping video / image sequence | ~0 JS; heavy bytes (MBs) | Low–medium | Native | Free (asset licence applies) | Good; needs poster, mobile and data-saver handling |
| R3F v9 + drei | Three.js (~150 KB gz order) + R3F + drei + model | High | Yes (v9) | MIT | Only if interactivity needs real 3D |
| Plain Three.js | Same Three.js cost, no React reconciler | High, more imperative | Framework-agnostic (client component) | MIT | Fine for one isolated canvas |
| Spline (@splinetool/react-spline) | Large runtime + .splinecode scene | Lowest for 3D | Client-only; lazy-load | Free tier with limits; paid tiers | Fast to make, heaviest to ship |
| Rive / Lottie | Small–medium runtime | Medium (design tool) | Client component | Free runtimes | 2D/vector motion, not this look |
| WebGPU (three WebGPURenderer / TSL) | Larger; needs WebGL fallback | Highest | Via R3F `gl` factory | MIT | Overkill for a hero |

- All canvas-based options must be client components loaded with `next/dynamic` and `ssr: false`. In Next 15+/16, `ssr: false` is only permitted inside a Client Component, so the dynamic import must live in a small `'use client'` wrapper (from my knowledge of Next.js behaviour; not re-verified in this session).
- The drei version quoted by the third-party source ("v9.x+") looks wrong; drei v10 is the line that pairs with R3F v9. Verify against the drei changelog before installing.

### Gaps
- No verified bundlephobia numbers for `@splinetool/runtime`, `@splinetool/react-spline`, `@react-three/fiber`, `@react-three/drei`, `three`, `motion`, `@rive-app/react-canvas` or `lottie-web`; searches returned nothing reliable. Measure with `next build` plus bundle analyser in the actual project.
- No source confirmed R3F/drei/Spline against Next.js 16 specifically (only React 19). Next 16 with Turbopack as default bundler is untested in my sources.
- Current stable status of R3F v10 / drei v11 in October 2026 not confirmed.
- Spline's current official pricing and free-tier limits (watermark, export rights) not confirmed from spline.design.
- No measured comparison of image-sequence canvas scrubbing versus video for hero use.

## 3. Motion libraries: Motion, GSAP, Lenis, CSS scroll-driven animations, View Transitions

### Takeaway
Motion (MIT, declarative, React-native) is the sensible default for a React portfolio and is what the reference uses; add GSAP ScrollTrigger/SplitText only for pinned, scrubbed, multi-step sequences; use CSS scroll-driven animations as progressive enhancement; treat Lenis as optional polish; View Transitions now work in the Next.js 16 App Router without configuration.

### Cited Findings
GSAP
- GSAP is "100% FREE including ALL of the bonus plugins like SplitText, MorphSVG" following the Webflow acquisition, including commercial use; all plugins ship in the public `gsap` npm package and `gsap-trial` is deprecated (search snippets of package README) — [gsap README](https://cdn.jsdelivr.net/npm/gsap@3.15.0/README.md); [gsap-trial deprecation](https://cdn.jsdelivr.net/npm/gsap-trial@3.13.0/README.md)
- GSAP's licence is not MIT: it prohibits use "in any tool that competes with Webflow" and "Webflow can terminate it at its discretion" (fetched; this is Motion's vendor-authored characterisation, read the licence itself) — [motion.dev GSAP vs Motion](https://motion.dev/docs/gsap-vs-motion); licence text at [gsap.com standard licence](https://gsap.com/community/standard-license/)
- ScrollTrigger is described as the most capable scroll engine: pinning, scrubbing a timeline to scroll progress, snapping, precise start/end (search snippet; independent blog) — [hontran.dev GSAP vs Framer Motion](https://www.hontran.dev/blog/gsap-vs-framer-motion)

Motion (formerly Framer Motion)
- Vendor-stated sizes: mini `animate()` 2.6 kb, full hybrid `animate()` 18 kb, GSAP 23 kb; Motion is tree-shakable whereas importing GSAP includes the core (fetched; vendor comparison, and note these are the vanilla `animate` figures, not the React `motion` component, which is larger) — [motion.dev](https://motion.dev/docs/gsap-vs-motion)
- Motion claims hardware-accelerated animation of opacity, transform, filter and clipPath off the main thread, and hardware-accelerated scroll animations (via native scroll timelines), which GSAP lacks per the vendor table (fetched; vendor claim) — [motion.dev](https://motion.dev/docs/gsap-vs-motion)
- Motion is MIT and "fully independent" (fetched; vendor) — [motion.dev](https://motion.dev/docs/gsap-vs-motion)
- Rule of thumb from an independent comparison: state-driven appear/disappear/move favours Motion on ergonomics; a 12-step overlapping sequence favours GSAP on control (search snippet) — [hontran.dev](https://www.hontran.dev/blog/gsap-vs-framer-motion)

Lenis
- Lenis is about 3.6 KB gzipped, wraps native scroll (keeps native scrollbar, find-in-page, `position: sticky`), and automatically honours `prefers-reduced-motion` by disabling smoothing (search snippets of README and skill listings; verify the reduced-motion behaviour for the installed version) — [Lenis README](https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@1.3.26/README.md)
- Running Lenis, GSAP's ticker and a Three.js loop as separate requestAnimationFrame loops causes lag/jitter; drive them from one loop (search snippet + fetched) — [hontran.dev Lenis guide](https://www.hontran.dev/blog/nextjs-smooth-scroll-gsap-lenis); [hontran.dev CWV](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)
- Guidance not to use Lenis on simple text-focused or accessibility/SEO-sensitive content with no animation requirement (search snippet; AI-skill listing, low authority) — [skills.sh lenis](https://www.skills.sh/avnehsbhatia/ultraui/lenis-smooth-scroll)

CSS scroll-driven animations
- `animation-timeline` (scroll()/view()) is supported in Chrome/Edge 115+ (July 2023) and Safari 26.0+ (September 2025) (search snippet) — [ics.media](https://ics.media/en/entry/230718/); [Chrome docs](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- Firefox: as of Firefox 152 (June 2026) still behind `layout.css.scroll-driven-animations.enabled` in stable; it is an Interop 2026 priority; global support quoted at 82.58% (search snippet; SEO blog) — [buildmvpfast.com](https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026)

View Transitions in Next.js
- Next.js docs v16.3.8 (updated 2026-08-25): "View transitions work in the App Router with no configuration"; import `ViewTransition` from `react`; the App Router bundles React canary so no `react@canary` install is needed; route navigations are transitions so animations activate automatically (fetched) — [Next.js view transitions guide](https://nextjs.org/docs/app/guides/view-transitions)
- Requires Chromium 125+ and recent Safari/Firefox for transition types and `view-transition-class`; unsupported browsers simply do not animate (fetched) — [Next.js guide](https://nextjs.org/docs/app/guides/view-transitions)
- `<Link transitionTypes={['nav-forward']}>` and `router.push` accept transition types; wrap content in `page.tsx`, not layouts (layouts persist so enter/exit never fire); add `::view-transition { pointer-events: none }` so clicks are not swallowed; documented timings are 150 ms exit, 210 ms enter, 400 ms move (fetched) — [Next.js guide](https://nextjs.org/docs/app/guides/view-transitions)
- Conflict: older reference pages still describe a `viewTransition: true` config flag as "experimental … not recommended for production" (search snippet of the config reference, including a Next 15 version) — [viewTransition config](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition). The 16.3.8 guide says no configuration is needed. Check the installed Next version; the repo was on 16.2.9 at last commit, and the unpkg copy of the 16.2.7 docs still lists the flag — [unpkg next@16.2.7 docs](https://app.unpkg.com/next@16.2.7/files/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/viewTransition.md)

### Inferences
- Recommended stack for this portfolio: Motion for component and scroll-linked motion (`useScroll`, `useTransform`, `useSpring`, `whileInView`); CSS for hover and simple reveals; native View Transitions for project-list to case-study morphs; no Lenis unless testing shows the scroll-linked sections feel rough; GSAP only if a pinned, scrubbed storytelling section is designed.
- Do not ship both Motion and GSAP for overlapping jobs; each adds tens of KB and two mental models.
- The reference's sticky stacking cards and marquee do not need ScrollTrigger pinning: CSS `position: sticky` plus a scroll-progress transform is enough.
- GSAP's licence restriction is irrelevant to a personal portfolio (it is not a Webflow competitor), but it is not open source in the MIT sense.
- For Firefox, scroll-driven CSS must degrade to a static end state; Motion's JS fallback covers this automatically if Motion is used for those effects.

### Gaps
- No independent, current bundle measurement for `motion/react` (the React component import) or for GSAP + ScrollTrigger + SplitText combined.
- Whether Firefox shipped scroll-driven animations in stable between June and October 2026 was not confirmed.
- Did not open the official Lenis README directly to confirm the automatic reduced-motion behaviour and current size.
- Exact Next.js version at which View Transitions stopped needing the experimental flag was not pinned down.

## 4. Performance: effect of WebGL/3D heroes on Core Web Vitals and how to keep them fast

### Takeaway
A 3D hero does not have to hurt Core Web Vitals if the LCP element is server-rendered HTML or an image and the 3D bundle is loaded afterwards; loaded eagerly, it can be catastrophic (one measured case: LCP 5.7 s vs 0.6 s after lazy-loading).

### Cited Findings
Measured numbers
- Spline eager vs lazy (Nov 2025): Lighthouse 30 to 90; LCP 5.7 s to 0.6 s; TTI 5.3 s to 0.8 s; first paint 3.4 s to 0.7 s; load 6.5 s to 1.2 s (fetched; one site, self-reported) — [dev.to](https://dev.to/tolumen/optimizing-web-performance-how-lazy-loading-spline-assets-took-our-build-from-30-to-90-in-4ne2)
- Pausing render loops for off-screen canvases via IntersectionObserver "dropped idle main-thread work by roughly two-thirds" (fetched; author's own project, no methodology given) — [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)
- Thresholds: LCP under 2.5 s, INP under 200 ms, CLS under 0.1 (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)

LCP
- "Three.js sites fail all three Core Web Vitals metrics by default"; on a Three.js hero the LCP element is often the canvas, so an empty canvas for 3 s means a 3 s LCP; make the LCP a real image or headline rendered before any 3D (search snippet + fetched; agency blog) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)
- "Render the LCP element in HTML/CSS, hydrate motion after"; dynamic-import WebGL/Three.js; `next/script strategy="lazyOnload"` for non-critical JS; defer analytics and secondary timelines with `requestIdleCallback` (fetched) — [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)
- Defer the 3D bundle until after the `load` event; render meaningful content as server HTML first (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)

INP
- Animate only `transform` and `opacity`; batch DOM reads before writes; gate canvas rendering with IntersectionObserver; test on a mid-range Android profile with 4x CPU throttling; monitor field INP with the `web-vitals` library rather than Lighthouse alone (fetched) — [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)
- Use `OffscreenCanvas` with a Web Worker to move shader compilation, geometry parsing and texture decoding off the main thread; supported in Chrome, Edge, Firefox and Safari 16.4+ (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)

CLS
- Reserve canvas space with explicit width/height and `aspect-ratio`; set dimensions on all media; use `min-height` for entrance animations instead of animating height; `font-display: optional` or `swap` with metric-matched fallbacks; apply `will-change` just-in-time and remove after (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide); [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)

R3F runtime practices (official docs, fetched)
- `frameloop="demand"` renders only when needed and saves battery; call `invalidate()` for non-React mutations such as controls — [R3F scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance)
- drei `<PerformanceMonitor>` averages FPS and fires `onIncline`/`onDecline` to adapt quality; `performance.regress()` plus `performance.current` can scale `dpr` under load — [R3F scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance)
- Reuse geometries/materials; `useLoader`/`useGLTF` cache assets; use instancing (keep individual meshes under about 1000 draw calls); drei `<Detailed>` for LOD; nested Suspense to show a low-res asset first; `startTransition` for expensive updates — [R3F scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance)

Model compression
- Draco often cuts geometry size 90–95% and decodes in a Web Worker (search snippet) — [A-Frame gltf-model docs](https://aframe.io/docs/1.7.0/components/gltf-model.html)
- Meshopt: typically 30–60% reduction vs Draco's 50–80%, but 5–10x faster decode; also compresses morph targets and animation; with gzip on top its ratio approaches Draco (search snippet; note the Draco range here conflicts with the 90–95% figure above, which reflects different baselines) — [svilenkovic.com meshopt](https://svilenkovic.com/3d/meshopt-compression)
- KTX2/Basis textures are 3–5x smaller than JPG/PNG (search snippet) — [svilenkovic.com GLB optimisation](https://www.svilenkovic.com/3d/glb-optimization)
- Compression does not improve frame rate; triangle count and draw calls do. For 1–3 hero models Draco is preferred for download size; for 50+ small meshes meshopt avoids the decode bottleneck (search snippet) — [svilenkovic.com](https://www.svilenkovic.com/3d/glb-optimization)
- gltf-transform is the Node CLI used for meshopt, Draco and KTX2 passes (search snippet) — [skills.sh asset-pipeline-3d](https://skills.sh/anthemflynn/ccmp/asset-pipeline-3d)

SEO
- Put headline, summary and CTA in real DOM (and `<noscript>` inside canvas wrappers); verify with Search Console URL Inspection that rendered HTML contains the H1, copy and links (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)

### Inferences
- Loading sequence for a real-3D variant: (1) server-render H1, sub-copy, CTA and a poster `next/image` with `priority` in a box with fixed `aspect-ratio`; (2) after hydration and idle/`load`, and only if the capability check passes, dynamically import the canvas component (`ssr: false`); (3) cross-fade the canvas over the poster once the first frame is drawn; (4) pause when off-screen or the tab is hidden. LCP is then the poster/headline, and the 3D cost moves out of the critical path.
- Typical R3F settings for a hero (standard community practice, not from a fetched source): `dpr={[1, 1.5]}` or `[1, 2]`, `frameloop="demand"` when motion is pointer-driven, `gl={{ antialias: false, powerPreference: 'high-performance' }}` on mobile.
- For the reference's actual technique (image + pointer tilt), the main risks are different: a large hero image hurting LCP (serve AVIF/WebP at correct `sizes`), a pointer-move handler causing re-renders (use motion values, not React state), and per-character text splitting inflating DOM size and hurting INP (split by word where possible; keep the real text accessible).
- Late hydration means the tilt effect is inert for the first moments; that is acceptable and invisible to users.

### Gaps
- No large-sample or CrUX-based study of WebGL heroes versus static heroes was found; the measured evidence is one Spline case study and one anecdotal figure. No web.dev/Chrome article specific to WebGL and Core Web Vitals was located in this session.
- No measured numbers for R3F specifically (bundle, TBT, INP) on Next.js 16.
- No verified size/CPU comparison for a looping hero video versus WebGL on mobile.
- gltf-transform, Draco and KTX2 figures come from secondary sources; the official gltf-transform docs were not opened.

## 5. Mobile and low-end fallbacks; prefers-reduced-motion; accessibility of canvas content; battery/data

### Takeaway
Treat 3D and heavy motion as progressive enhancement: static poster on small/low-power/reduced-motion/data-saver clients, real DOM text for everything meaningful, and a pause mechanism for anything that loops for more than a few seconds.

### Cited Findings
- Replace animations with static images on mobile breakpoints; older Safari without OffscreenCanvas needs static image fallbacks (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)
- Implement `prefers-reduced-motion` globally; this also improves field INP for that cohort (fetched) — [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites)
- Reduced motion should be graceful degradation, not a kill switch: replace movement with a short opacity fade (200 ms or less); keep fades, colour transitions, focus rings and loading indicators (search snippet) — [OpenReplay](https://blog.openreplay.com/prefers-reduced-motion-accessible-animation/)
- `prefers-reduced-motion` does not satisfy WCAG 2.2.2 (Pause, Stop, Hide) for autoplaying or looping content, which still needs an explicit pause control (search snippet) — [A11y Collective](https://www.a11y-collective.com/blog/wcag-animation/)
- One result calls respecting reduced motion "a WCAG 2.1 AA requirement (SC 2.3.3)" (search snippet) — [Verdigris design guide](https://design.verdigris.co/categories/animation/reduced-motion). This appears incorrect: SC 2.3.3 Animation from Interactions is Level AAA in WCAG; SC 2.2.2 is the Level A criterion. Flagged as a source error.
- Next.js docs: for view transitions, zero out animation durations under `prefers-reduced-motion: reduce`; directional slides are the commonest motion-sensitivity trigger, while morphs and crossfades carry less risk (fetched) — [Next.js guide](https://nextjs.org/docs/app/guides/view-transitions)
- Lenis disables smoothing automatically under reduced motion (search snippet) — [Lenis README](https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@1.3.26/README.md)
- `frameloop="demand"` is recommended explicitly to save battery and avoid fan noise (fetched) — [R3F docs](https://r3f.docs.pmnd.rs/advanced/scaling-performance)
- Provide visible alternative text and fallback content for canvas; reserve dimensions (fetched) — [Utsubo](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)

### Inferences
- Capability gate before importing any 3D (standard web platform checks, not from a fetched source): `matchMedia('(prefers-reduced-motion: reduce)')`, `navigator.connection?.saveData` and `effectiveType`, `navigator.hardwareConcurrency` / `deviceMemory` (Chromium only), `matchMedia('(pointer: fine)')` for cursor-follow effects, viewport width, and a WebGL context probe. Fail closed to the poster.
- Cursor-tracking "magnetic" portraits have no input on touch devices; on mobile either leave the portrait static, use a slow idle float (CSS, paused under reduced motion), or tie a subtle tilt to scroll. Device-orientation tilt needs a permission prompt on iOS and is not worth it.
- A decorative canvas or portrait should be `aria-hidden="true"` (or have empty alt) with the name and role conveyed by the H1; if the portrait is content (a photo of the developer), give it real alt text. Never put the name, role or CTA only inside canvas or as text baked into an image.
- Character-by-character reveals: keep the full sentence available to assistive tech (`aria-label` on the wrapper with `aria-hidden` on the spans, or split visually only), otherwise screen readers may read letters individually.
- Marquees and looping video that run longer than 5 seconds need a pause control or must stop under reduced motion to meet WCAG 2.2.2.
- Hero video on mobile: `muted playsinline loop preload="none"` with a poster, and skip it on Save-Data.

### Gaps
- No authoritative source (W3C/WAI, web.dev) was fetched for canvas accessibility patterns or for WCAG criterion levels; the level correction above is from my own knowledge and should be verified at w3.org.
- No data found on battery or data consumption of WebGL heroes on phones.
- No source on how common reduced-motion or Save-Data settings are among visitors.

## 6. Current (2025–2026) portfolio design trends and reference portfolios

### Takeaway
The 2026 trend lists converge on bento grids, kinetic/oversized typography, dark-by-default, scroll storytelling, micro-interactions and selective 3D, but the sources are low-authority trend blogs; the one well-documented award-winning developer portfolio found is Bruno Simon's Three.js/WebGPU site, which is a showcase piece rather than a lead-generation model.

### Cited Findings
- One 2026 trend list: bento grid layouts, kinetic typography, scroll storytelling, dark mode as default, AI-generated UI elements, micro-interactions, immersive 3D with WebGL, adaptive colour palettes, voice UI, performance-first design, sustainable web design, accessible design (WCAG 2.2). It also claims sites using these trends get "23% more scroll depth and up to 40% longer session durations" (search snippet; agency blog, no methodology visible, treat the statistic as unverified marketing) — [studiomeyer.io](https://studiomeyer.io/en/blog/webdesign-trends-2026)
- Bento grids, popularised by Apple, are described as a default pattern for feature sections, with a "sweet spot of 6 to 9 tiles"; key metrics in large type suit bento tiles (search snippet; blogs) — [line25](https://line25.com/articles/web-design-trends-2026/); [pravinkumar.co](https://www.pravinkumar.co/blog/bento-box-hero-sections-webflow-design-2026)
- Kinetic typography (text as the main moving visual) is listed as a 2026 trend (search snippet) — [b12.io](https://www.b12.io/resource-center/website-design/web-design-guide-bento-grids-and-kinetic-typography/)
- Bruno Simon's portfolio (drive a car around a 3D world to discover projects; achievements, secrets, visitor messages) won Awwwards Developer Award and Site of the Month around Dec 2025–Jan 2026; built with Three.js on WebGL and WebGPU; code and Blender files MIT-licensed, music CC0 (search snippet) — [Awwwards: Bruno's Portfolio](https://www.awwwards.com/sites/brunos-portfolio)
- His earlier version reportedly drew more than 400,000 visitors and won Site of the Month; in 2019 it won Awwwards Developer of the Year / Site of the Year Users' Choice (search snippet) — [Pastel blog](https://usepastel.com/blog/how-a-design-portfolio-got-the-attention-of-400-000-visitors)
- Awwwards maintains a browsable "developer" inspiration collection for current winners (search snippet; names returned by the search engine were not verified) — [Awwwards developer inspiration](https://www.awwwards.com/inspiration_search/developer/)
- The reference itself embodies several of these trends: dark premium base, gradient display type, scroll-tied marquee, character reveal, sticky stacked cards, dark/light section alternation (fetched) — [Contra](https://contra.com/p/PvgFOMNO-tested-one-of-motion-sites-premium)

### Inferences
- For a portfolio that must rank and convert, the reference's vocabulary (one strong hero moment, then scroll-paced proof sections) is a better model than a fully immersive WebGL world: immersive sites win awards and links but bury text, case studies and CTAs.
- A bento grid suits the "proof" block (stack, years, metrics, testimonials, availability) and is cheap: pure CSS grid, server-rendered, indexable.
- Award galleries select for novelty, not conversion or Core Web Vitals; use them for motion and typography ideas, not information architecture.

### Gaps
- No verified list of 2025–2026 award-winning developer portfolios beyond Bruno Simon; Awwwards and Godly pages were not opened, and names surfaced in search summaries could not be confirmed. Godly was not searched successfully at all.
- No credible data linking these visual trends to lead conversion; the 23%/40% engagement figures are unsourced.
- No Codrops or Awwwards case study on a portfolio's build was retrieved.

## 7. Where to get or make 3D assets, and licensing

### Takeaway
For this style the practical asset is a stylised 3D portrait render (AI-generated or Blender/Spline-rendered to image/video), not a runtime model; if a GLB is needed, AI generators' free tiers and most free libraries require attribution (CC BY), so either credit visibly or pay.

### Cited Findings
- Tripo free tier outputs are CC BY 4.0: commercial use allowed with attribution to Tripo; paid tiers remove the attribution requirement (search snippet; vendor blog) — [Tripo blog](https://www.tripo3d.ai/blog/commercial-use-ai-3d-models)
- Meshy free plan outputs are CC BY 4.0 with credit to Meshy required; commercial use without attribution needs Pro or above (search snippet; third-party tracker) — [CostBench Meshy](https://costbench.com/software/ai-3d-generation/meshy/)
- Sketchfab models carry creator-chosen Creative Commons licences: CC BY by default with optional NC, ND, SA; CC0 exists mainly for cultural-heritage institutions (search snippet) — [Sketchfab CC introduction](https://sketchfab.com/blogs/community/an-introduction-to-creative-commons-licenses)
- AI character route: generate a stylised (not photoreal) 3D-look character with an image model, then animate a short loop with a video model such as Seedance 2.0; stylisation avoids uncanny-valley problems (fetched) — [mejba.me](https://www.mejba.me/blog/3d-animated-portfolio-ai-claude-seedance)
- Bruno Simon's portfolio source and Blender files are MIT-licensed and public, useful as a learning reference for a Blender-to-Three.js pipeline (search snippet) — [Awwwards](https://www.awwwards.com/sites/brunos-portfolio)
- Spline is a browser 3D design tool with paid plans reported from about $15/month and credit-based AI features (search snippet; trackers conflict) — [CostBench Spline](https://costbench.com/software/ai-3d-generation/spline/)

### Inferences
- Cheapest faithful route to the reference look: produce one high-quality stylised 3D portrait of the developer (AI image model from a photo, or a Blender/Spline render), export as transparent WebP/AVIF at 2x, optionally as 2–3 depth layers for parallax. No runtime 3D licence or bundle issues.
- NC-licensed Sketchfab models are unsuitable: a portfolio that solicits paid work is commercial use. ND blocks the edits needed for optimisation (decimation, re-texturing) in a strict reading.
- If attribution is required, a credits line in the footer or an /credits page satisfies CC BY; keep a record of source URL, author and licence per asset.
- A likeness of the developer generated by AI raises no third-party licence issue, but check the image/video tool's terms for commercial output rights on the plan used.

### Gaps
- poly.pizza licensing was not confirmed (search returned nothing useful); it is commonly described as hosting CC0 and CC BY low-poly models, which needs checking per model.
- Official current pricing/terms pages for Meshy, Tripo and Spline were not opened; figures above are from third parties and a vendor blog.
- Copyright status of purely AI-generated assets (ownership, registrability) by jurisdiction was not researched.
- No information gathered on Blender-to-web export workflow specifics or on Spline export options (video, image sequence, GLB, code export) and their plan restrictions.
