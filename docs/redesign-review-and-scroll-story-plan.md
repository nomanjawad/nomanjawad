# Redesign review and scroll-story plan

Date: 2026-10-29
Branch: `redesign/home-ai-glow` (uncommitted working tree)

This document records three things:

1. A review of the redesign work currently on the branch.
2. A walkthrough of the reference site at https://authentic-badger-999405.framer.app/ (an Orthelle Framer template demo).
3. A plan to rebuild the home hero as a scroll-pinned story: client brief → built site → dissected site → shipped.

---

## 1. Redesign review

### 1.1 Verification

| Check | Result |
|---|---|
| `tsc --noEmit` | Passes |
| `next build` | Passes, 19 routes prerendered (home, /work, 6 case studies, OG images, sitemap, robots) |
| Console errors (home, /work, case study) | None |
| Horizontal overflow at 375px | None |
| Nav anchors from home and from /work | Land on the right section |
| Reveal animations on load and on client navigation | Fire correctly |
| Reduced motion / pause toggle | Wired for orb, About shapes, marquee |
| `/opengraph-image` | Renders kicker, name, host line |

### 1.2 What the redesign replaces

Removed: IDE-themed shell (Sidebar, Topbar, HeroTyping, ThemeToggle, Marquee, BackgroundField, ExperienceTimeline, ActiveSectionTracker) and `public/legacy/`.

Added:

- Floating pill nav with motion toggle and command palette trigger (`src/components/layout/Nav.tsx`)
- Hero with a CSS-only pointer-tilting orb (`src/components/client/Orb.tsx`)
- Scroll-driven two-row marquee (`ScrollMarquee.tsx`)
- Sticky stacking case-study cards (`StackScale.tsx`, `sections/Work.tsx`)
- Character-reveal About paragraph (`ScrollText.tsx`)
- White "Stack" section that peels over the dark page (`sections/Skills.tsx`)
- Contact block with a mailto form (`ContactForm.tsx`)
- `/work` index page and rebuilt case-study page with outcome highlights at the top
- OpenGraph images for every route (`src/lib/og.tsx`, `opengraph-image.tsx` files)
- JSON-LD on home, /work and case studies; canonical URLs through one `SITE_URL` (`src/lib/site.ts`)
- Lenis smooth scrolling (`SmoothScroll.tsx`, `src/lib/smoothScroll.ts`)
- All six projects anonymised under NDA in `content/content.json` and README

### 1.3 Issues found, ranked

1. **Lead capture is mailto-only.** The form opens the visitor's mail app and sends nothing from the page. The SEO/leads research report names this as the first thing to fix. It is still the largest business gap.
2. **Dead theme code.** `ThemeScript` still runs, light-theme variables remain in `src/app/globals.css`, and `viewport.themeColor` in `src/app/layout.tsx` still advertises a light colour (`#F5F2EC`). The site is dark-only, so browser chrome tints light for light-scheme users.
3. **Unused components.** `sections/Testimonials.tsx` and `client/QuoteCarousel.tsx` are not rendered anywhere; their CSS still ships in `globals.css`.
4. **Admin / content drift.** The admin still edits fields the site no longer reads: `hero.command`, `headlineBefore/After`, `subtitle`, `sidecard`, `about.meta`, `about.stats`, `about.body[1]`, `work.sectionNum/sectionTitle/footNote`, `testimonials`, `footer.colophon`.
5. **Sitemap has no `lastModified` dates.**
6. **Untracked research at the repo root.** `reports/` and `research_notes/` are not ignored and will be committed with the branch unless that is intended.
7. **NDA note.** Real client names and live URLs remain in git history and in README on `main`. Anonymising the working tree does not remove them from GitHub.

---

## 2. Reference site walkthrough

Site: https://authentic-badger-999405.framer.app/
What it is: a Framer landing-page template with demo content for a fictional product, Orthelle, an AI tool that turns pencil sketches into CAD models. It is a SaaS marketing page, not a portfolio.

### 2.1 Design system

- **Palette.** Paper off-white backgrounds (`#E4E7E1`, `#FBFBF8`) with a faint 12px grid, forest green (`#0F6B52`) and charcoal (`#1B211E`) panels, grey body copy (`#5E6862`), hot orange accent (`#FF5B26`).
- **Type.** Funnel Display (headings), Funnel Sans (body), Geist Mono (uppercase labels, spec readouts), Architects Daughter (handwritten kickers with drawn arrows).
- **Layout.** Generous whitespace, thin-bordered cards on the grid, numbered step lists, giant wordmark in the footer. Mobile collapses to a hamburger, stacks cleanly, no overflow.
- **Length.** About 16,500px on desktop, 20,000px on a phone.

### 2.2 Section order

1. Nav with pill CTA; fixed X/Y millimetre cursor readout in the corner.
2. Hero: huge two-line headline revealed letter by letter, handwritten kicker, large illustrated desk scene.
3. **Scroll-pinned five-step product sequence** (see 2.3).
4. Logo marquee and three count-up stat tiles.
5. "One model, every view" feature with a four-view spec table.
6. Drag comparison slider: sketch vs model.
7. Three-step cards, then a seven-card models grid (sector, year, name, client, one line).
8. Integrations diagram; hovering a tool traces its route to the centre.
9. Testimonials beside a 3D render; plain-text open letter.
10. Pricing with monthly/yearly toggle; FAQ accordion with sticky left column; final CTA over a second WebGL canvas; footer.

Accessibility notes: the letter-split headline duplicates every character in the DOM, so screen readers hear it twice. A reduced-motion stylesheet is present.

### 2.3 How the pinned sequence works (measured)

- The hero and the five steps are one unit. A wrapper about **5.2 viewports tall** (4680px at 900px viewport height) holds a single **sticky full-viewport panel**.
- Inside the panel: **one WebGL canvas** (1440×900) and **five text blocks** (heading + paragraph + "Watch the demo" button). No images, no video.
- Scroll progress through the wrapper scrubs the 3D scene (sketch → solid → exploded parts → section cut → finish) and cross-fades the text blocks in turn.
- The hero headline is frame zero of the same scene.
- The only heavy part is the WebGL render. The choreography is sticky + scroll progress, which the portfolio already does in `StackScale.tsx` and `useScrollFrame.ts`.

### 2.4 Blocks that map onto the redesign

Already present in the redesign: numbered step list (Stack section), case-study grid (`/work` cards match field for field), giant footer name.

Worth borrowing:

- **Before/after drag slider**: Figma file vs shipped build. Matches the "Figma to pixel-perfect" pitch directly.
- **Count-up stat tiles**: years, projects, turnaround. Data exists in `about.stats` but is no longer rendered.
- **FAQ accordion**: plain answers on pricing, timelines, process. The UX report dropped priced pages but kept the case for answering objections.
- **Handwritten kickers and mono spec readouts** as low-cost personality.

Not transferable without a full rework: the light paper-and-green aesthetic, which is the opposite of the current dark purple/orange glow.

---

## 3. Plan: scroll-pinned story for the home hero

### 3.1 Concept

One object, a website, is built up from a client brief and then opened up to prove what is inside it. Six frames, one sticky panel, scroll-scrubbed.

| # | Beat | Visual | Copy direction |
|---|---|---|---|
| 0 | The brief arrives (hero) | Loose pile of what clients send: Figma frame, Loom thumbnail, Slack thread, sticky notes | "From client brief to production site" + kicker |
| 1 | Brief, understood | Pile tidies into a structured spec: sitemap, pages, integrations, deadline | Short heading + 2 lines |
| 2 | Design, built | Figma frame slides over and becomes a live browser window of the site, pixel for pixel. Use a real case-study screen | Core pitch beat |
| 3 | Layers, exploded | Browser window separates into stacked 3D layers: UI, components, API, database, CDN, deploy pipeline. Each layer labelled | |
| 4 | Cut open, checked | Scanner line sweeps the stack; callouts with real numbers: Lighthouse scores, response times, security headers, accessibility, Core Web Vitals | Proof, not claim |
| 5 | Shipped | Layers snap back together, green deploy tick, CTAs: See case studies / Get in touch | |

### 3.2 Placement

Replace the current orb hero and `ScrollMarquee` at the top of the home page. Case studies follow directly after the story. Everything below (About, Stack, Experience, Contact) stays as is.

### 3.3 Technical approach

**No WebGL.** The site-as-object is real DOM:

- A browser-window frame containing a real screenshot or a miniature of a case study.
- Each layer (UI, components, API, DB, CDN, deploy) is its own element inside a CSS `perspective` / `transform-style: preserve-3d` container.
- Wrapper height around 500–600vh; inner panel `position: sticky; top: 0; height: 100svh`.
- Scroll progress `p` (0–1 across the wrapper) is computed with the existing `useScrollFrame` hook and written to CSS custom properties on the panel (`--p`, plus per-beat eased values). Only `transform`, `opacity` and `clip-path` change per frame.
- Per-layer separation: `translateZ` / `translateY` as functions of `p` within beat 3; scanner line via `clip-path: inset(...)` within beat 4; labels fade on thresholds.
- Text for each beat is always in the DOM (real headings and paragraphs), cross-faded by opacity. Screen readers and crawlers get all six beats.
- First frame is plain DOM/SVG so LCP is fast. No canvas on the critical path.
- Reduced motion and the existing `data-motion="off"` toggle collapse the story into six static stacked panels (no sticky, no scrub).
- Mobile: same sticky approach at `100svh`, with the scene scaled down; keep each beat's text readable at 375px; verify no horizontal overflow.

Files expected:

- `src/components/client/Story.tsx` (new, client): sticky panel, progress math, layer transforms.
- `src/components/sections/Hero.tsx`: replace orb markup with `<Story />` and the frame-zero copy.
- `src/app/(site)/site.css`: `.story*` rules; retire `.orb*`, `.hero-aurora` adjustments as needed.
- `content/content.json` + `src/lib/types.ts`: a `story` block with six beats (kicker, heading, body) and the metrics for beat 4.
- Remove `ScrollMarquee` from `src/app/(site)/page.tsx` (keep the component until the story is signed off).

### 3.4 Prerequisites

1. **Real metrics for beat 4.** Pick one named case study and collect actual numbers (Lighthouse performance/accessibility/SEO/best-practices, LCP/INP/CLS, response time, security headers). Without real numbers the dissection reads as decoration.
2. **A screenshot or miniature of that case study** for beat 2, respecting the NDA (blurred client name, or the generated `Mesh` artwork if no visuals can be shown).
3. **Six lines of copy** for the beats (kicker + heading + one or two sentences each).

### 3.5 Budget and checks

- LCP under 2.5s, INP under 200ms, CLS under 0.1 on a throttled mid-range phone.
- No layout work per scroll frame (transforms/opacity/clip-path only).
- Keyboard: nothing in the story needs focus except the two CTAs in beat 5.
- Verify in Search Console URL Inspection that rendered HTML contains the H1, all six beats' text and the CTAs.

### 3.6 Open questions

- ~~Prototype on a standalone route first, or build directly into `Hero.tsx`.~~ Decided: prototype first (see 3.7).
- Whether to keep the orb anywhere (e.g. About) or retire it with the hero.

### 3.7 Prototype status (2026-10-29)

Built at `/story` (noindex, not linked, not in the sitemap):

- `src/components/client/Story.tsx`: six beats, scroll progress written to CSS variables on the stage, active beat drives the text cross-fade. Copy, spec card text and the six beat-4 metrics are placeholders at the top of the file.
- `src/components/client/story.css`: the stage (authored at 620×420, scaled to its column), brief cards, spec frame, layer stack, scanner, callouts, ship badge, static fallback, mobile layout.
- `src/app/(site)/story/page.tsx`: story, a one-line prototype note, then the existing case studies section.

Verified: type check and production build pass; all six beats render at 1440×900 and 375×812 with no console errors and no horizontal overflow; the pause toggle swaps in six stacked static panels and back.

Known gaps before promoting it to the home hero:

- Placeholder metrics and copy; move them into a `story` block in `content.json`.
- On phones the stage scales to about 55%, so callout text is small.
- The browser window shows a generic mock, not a real case-study screen.
- Not yet measured on a throttled mid-range phone against the budget in 3.5.

---

## 4. Housekeeping from this review

- `.claude/launch.json` was added (gitignored) so the dev server can be previewed from the app: `pnpm dev --port 3000`.
- The fixes in section 1.3 (items 2–5) are small and can be done in one pass; item 1 needs a form backend decision; items 6–7 are the owner's call.
