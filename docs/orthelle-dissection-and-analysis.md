# Orthelle landing page: dissection and analysis against nomanjawad.com

Date: 2026-10-29
Reference: https://authentic-badger-999405.framer.app/ (Framer template demo, fictional product "Orthelle": sketches to CAD)
Measured at 1440×900 and 375×812 in the built-in browser.

The concept this analysis serves: **the site must show how Noman works, and prove that the work is done properly, not the sloppy AI-generated output other developers ship.** Every section below is judged by one question: does it prove something, or only claim it?

---

## Part 1. Dissection

### 1.1 The argument of the page

Orthelle's page is not a list of features. It is a sales argument in twelve moves, each answering a buyer's doubt:

| # | Section | Top (px) | Doubt it answers | How it proves it |
|---|---|---|---|---|
| 0 | Hero | 0 | What is this? | One sentence, one illustration, a handwritten note: "not a render, a real CAD file" |
| 1 | Pinned 5-step sequence | 0–4680 | Does it actually work? | Shows the process happening to one object, step by step |
| 2 | Social proof + 3 stats | 4861 | Does anyone use it? | Logo row, "212 studios", three numbers with mono captions |
| 3 | One model, every view | 5595 | Is the output consistent? | Four views from one model, a drawing-sheet title block |
| 4 | Your lines stay yours | 6777 | Will it ruin my input? | Drag slider: your sketch vs the model, same camera |
| 5 | Three steps | 7982 | How much effort for me? | Three cards, numbered, one sentence each |
| 6 | Models grid | 8995 | What has it made? | Seven cards: sector, year, name, one line, studio |
| 7 | Fits your stack | 10016 | Will it work with my tools? | Input/output route diagram, hover traces a path |
| 8 | Testimonials | ~11000 | Do peers trust it? | One big quote with a 3D render, two small quotes |
| 9 | Open letter | 11988 | What do they believe? | Plain prose from the founders, handwritten signature |
| 10 | Pricing | 12948 | What does it cost? | Three plans, monthly/yearly toggle |
| 11 | FAQ | 14142 | My remaining objections | Six plain questions, accordion, sticky left column |
| 12 | Final CTA | 14933 | What now? | "You sketch. Orthelle models." Two buttons, roadmap chips, blueprint canvas |
| 13 | Footer | 15919 | Who are they? | Giant wordmark, three link columns, colophon "drawn on a 12px grid" |

Page height: 16,511px desktop, 20,091px phone.

### 1.2 Design tokens (measured)

**Colour**

| Role | Value |
|---|---|
| Page background | `#E4E7E1` with a faint 12px grid |
| Panel / card background | `#FBFBF8`, `#F4F5F0` |
| Ink (headings, primary text) | `#1B211E` |
| Body copy | `#5E6862` |
| Brand green (panels, footer, hero 3D) | `#0F6B52`; deep green `#0C2A22` |
| Accent (buttons, annotations, handle, routes) | `#FF5B26` |
| Translucent nav / badge backgrounds | `rgba(251,251,248,0.9–0.94)` |

One accent only. Green is structural (big panels), orange is for action and annotation. Nothing glows, nothing is a gradient.

**Type**

| Element | Font | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| H1 hero, final CTA | Funnel Display | 118px / 108.56px (0.92) | 500 | -4.13px (-3.5%) |
| H2 section | Funnel Display | 76px / 71.44px (0.94) | 500 | -2.66px |
| H2 inside pinned steps | Funnel Display | 70.56px / 66.33px | 500 | -2.47px |
| H3 card titles | Funnel Display | 32px / 33.6px | 500 | -0.64px |
| Lead paragraph | Funnel Sans | 20px / 27px | 400 | 0 |
| Body | Funnel Sans | 16px / 23.2px | 400 | 0 |
| Labels, buttons, spec readouts | Geist Mono | 11px / 15.4px | 400–500 | uppercase, loose |
| Kickers, annotations, signatures | Architects Daughter | ~18px | 400 | handwritten |

Headings are **sentence case, weight 500, tight negative tracking**. Nothing is uppercase except mono labels. Nothing is heavier than 500.

**Shape**

- Card radius: **3–4px**. Almost square.
- Card border: 1px `rgba(27,33,30,0.14)`; or no border and a lighter fill.
- Buttons: 11px Geist Mono, radius 3px, padding `5px 12px 5px 5px`, a small coloured square icon on the left, 1px border `rgba(27,33,30,0.2)`; primary = orange fill, white text.
- Nav: fixed, 64px tall, 16px from the top, a floating pill with logo, four links, an orange "Try Orthelle" button. Does not change on scroll.
- Body max width ~400px for paragraphs beside visuals, 700–980px for standalone leads.

**Voice markers**

- Every section has a handwritten kicker ending in an exclamation mark: "lines, understood!", "parts, sorted!", "fits your stack!", "need help?"
- Mono readouts everywhere a number lives: `SECTION A–A`, `offset 70.0 mm`, `wall 3.2 mm · clearance 1.8 mm`, drawing-sheet title block `PART / VIEW / SCALE / SHEET 2 / 4`.
- A fixed cursor readout in the corner: `X 0190.51 mm / Y 3743.83 mm` (X = pointer x, Y = page y). Product-themed, cheap, memorable.
- Honesty lines: "Anything it guessed is marked in orange for you to accept or change." "Nothing here replaces your judgement." "Demo content for a Framer template."

### 1.3 Motion and interaction inventory

| Piece | What happens | How it is built |
|---|---|---|
| Hero headline | Letters rise in one by one on load | Each character duplicated in the DOM (one visible, one offset), so screen readers hear the heading twice. Avoid this. |
| Pinned sequence | Hero + 5 steps in one unit. Wrapper 4680px desktop / 4222px phone. Inner panel `position: sticky; top: 0; height: 100vh`. One 1440×900 WebGL canvas scrubs the 3D desk scene with scroll. Five text blocks sit in the panel at the same vertical position, **alternating left and right** (x ≈ 16px or ≈ 1006px); the active one slides in 24px. Each has a numbered circle, handwritten kicker, H2, one paragraph, a "Watch the demo" button. | Scroll progress → canvas state + text cross-fade. Same mechanism on phone: canvas on top, text at the bottom. |
| Step 4 "Cut it open" | A section-cut plane with a mono readout; "drag across the model to move the cut" | Pointer-draggable inside the canvas |
| Stats | 41,200 / 6.2 days / 93% | **Static**. No count-up. |
| One model, every view | Four view cards 01–04 with mono captions, drawing title block | Static layout over the 3D render |
| Your lines stay yours | Orange handle; drag reveals the pencil sketch on the left, the model on the right; "Drag or use arrow keys" | DOM clip comparison, keyboard accessible. Not WebGL. |
| Fits your stack | Five inputs (left) → "One editable model" (centre) → seven outputs (right), drawn with bezier connectors; hovering a tool turns its route orange and inverts its tile | SVG paths + hover state |
| Testimonials | Big quote beside a 3D headphone render; two small quotes below | Static |
| Pricing | Monthly / Yearly −20% radio toggle; $39 → $31, $89 → $71 | State toggle |
| FAQ | Accordion; first item open by default; left column sticky | Standard disclosure |
| Final CTA | H1-size "You sketch. Orthelle models.", two buttons, five roadmap chips, second WebGL canvas (blueprint lines) 560px tall | Decorative |
| Cursor readout | Fixed top-left X/Y "mm" | `pointermove` → text |
| Reduced motion | A reduced-motion stylesheet exists | `prefers-reduced-motion` media rules |

### 1.4 Phone (375px)

- Hamburger opens a full-screen menu: handwritten "where to?", five large links numbered 01–05 in mono, "Start free" button.
- Pinned sequence keeps the sticky mechanism: visual on top (~55% of the viewport), numbered kicker + H2 + paragraph + button at the bottom.
- Comparison slider still draggable with the orange handle.
- All grids collapse to one column. No horizontal overflow.

### 1.5 What makes it read as "serious engineering"

1. **Sharp corners and a grid.** 3–4px radii and a 12px background grid say drawing sheet, not app chrome.
2. **Mono numbers with units.** Every claim has a measurement next to it, formatted like an instrument.
3. **Restraint in type.** One weight, sentence case, tight tracking. Loud through size, not through weight or colour.
4. **One accent, used for action and annotation only.**
5. **Honesty in the copy.** Guesses are marked, limits are stated, demo content is labelled.
6. **Process shown on one object**, not a feature list.
7. **Hand-drawn notes** next to machine-precise readouts: a human checked this.

---

## Part 2. Analysis against nomanjawad.com (branch `redesign/home-ai-glow`)

### 2.1 Section-by-section

| Orthelle move | nomanjawad today | Proves or claims? |
|---|---|---|
| Hero: one sentence + object + handwritten honesty note | Name in 900-weight gradient caps, a purple orb, availability pill, two buttons | Claims. The orb proves nothing about how the work is done. |
| Pinned process sequence | None on the home page (prototype exists at `/story`) | Missing. This is the single most important gap for the concept. |
| Social proof + stats | Marquee of technology names; stats exist in content but are not rendered | Claims. A list of tech is not evidence. |
| One model, every view | None | Missing. A responsive proof (one component, every screen) is directly relevant. |
| Your lines stay yours (drag compare) | None | Missing. Figma-vs-build is literally the pitch and has no demonstration. |
| Three steps | Stack section (numbered, white) lists technologies with context | Half. The format is right; the content is a tool list, not a process. |
| Models grid | Case studies: three stacked cards + "more" rows; `/work` grid; case-study pages with highlights | Proves, partly. Highlights have numbers. Problem/approach/solution/outcome is prose. |
| Fits your stack | Marquee | Claims. |
| Testimonials | Exist in content, not rendered | Missing. |
| Open letter | About paragraph with character reveal | Half. It is a bio, not a position on how the work is done. |
| Pricing | None (UX report dropped priced pages; keep it that way) | n/a |
| FAQ | None | Missing. |
| Final CTA | Contact section with mailto form | Half. Form sends nothing. |
| Footer colophon | Copyright + last updated | Missing the proof line. |

### 2.2 The aesthetic problem

The current branch is called `home-ai-glow`, and that is what it looks like: dark page, purple-to-orange gradient, glowing orb, glassy pills, 900-weight gradient uppercase headings, 40–60px radii. This is the default look of AI-generated developer portfolios in 2025–26. A client who has seen ten of them will file this one with the others before reading a word.

The concept is "I do this properly, unlike the AI-slop developers." The visual language has to carry that message before the copy does. Orthelle's language does: drawing sheet, grid, mono measurements, one weight, one accent, sharp corners, hand annotations. It reads as a workshop, not a demo reel.

Conclusion: **follow the landing page fully means changing the visual system, not only borrowing sections.** The sticky cards, Lenis, OG images, SEO plumbing, `/work` routes and content model all carry over. The skin does not.

### 2.3 What the portfolio already has that Orthelle needs

- Real case studies with role, client, duration, stack, highlights.
- A content model (`content/content.json`) and admin.
- Working SEO: metadata, canonical, JSON-LD, sitemap, OG images.
- `useScrollFrame` + sticky pattern, already proven in `StackScale` and the `/story` prototype.
- Kanit (900) and JetBrains Mono are loaded. Kanit at 900 is the wrong voice for this direction; JetBrains Mono is the right one for readouts.

---

## Part 3. The page Noman should build

Same twelve moves, same proof mechanisms, mapped to "brief in, properly built site out".

| # | Section | Headline direction | Handwritten kicker | Proof mechanism |
|---|---|---|---|---|
| 0 | Hero | "From client brief to production site" | "not a template, a real codebase" | One sentence, the brief-pile illustration (frame 0 of the sequence) |
| 1 | Pinned sequence (5 steps) | Read it · Build it · See every layer · Cut it open · Hand it over | "brief, understood!" · "design, built!" · "layers, sorted!" · "inside, checked!" · "keys, handed over!" | Scroll-scrubbed scene (see `/story`), text alternating left/right, numbered circles. Step 4 gets a draggable scan line with a mono readout: `LCP 1.1 s · INP 48 ms · CLS 0.00` |
| 2 | Social proof + stats | "N businesses run on sites I built." | "who's running on it!" | Client sector row (NDA-safe), three real numbers: projects shipped, median brief-to-launch, share of launches at Lighthouse ≥ 90 |
| 3 | One codebase, every screen | "Build one component. Get every screen." | "one build, every screen!" | Phone / tablet / desktop / print of one real page, title block `PAGE · VIEWPORT · SCALE · SHEET` |
| 4 | Your design stays yours | "Your Figma stays your Figma." | "pixels, kept!" | Drag compare: Figma frame vs shipped build, same viewport, "Drag or use arrow keys" |
| 5 | Three steps | "From brief to launch in weeks, not quarters." | "three steps, no surprises!" | Discover / Build / Launch, each with what the client receives that week |
| 6 | Case studies grid | "Built for every kind of business." | "shipped!" | Existing `/work` cards (sector, year, name, one line, client type) |
| 7 | Fits your stack | "Starts in Figma. Ends in tools your team already runs." | "fits your stack!" | Inputs (Figma, brief, WordPress site, Shopify store, spreadsheet) → "One production codebase" → outputs (Next.js, Laravel, WordPress, Stripe, HubSpot, Supabase, Vercel, GitHub Actions); hover traces the route |
| 8 | Testimonials | One big quote, two small | "they said!" | Real quotes from `content.testimonials` |
| 9 | Open letter: how I use AI | "To the people who hire developers," | "an honest note," | The position: AI drafts, I review; everything typed, tested and measured; nothing ships unread; what is generated is marked, like Orthelle's orange guesses |
| 10 | Ways to work together | Project · Retainer · Audit | "pick a lane!" | No prices (per UX report). What each includes, who it suits, one button each |
| 11 | FAQ | "Questions, answered plainly." | "need help?" | Do you use AI? Who owns the code? What happens after launch? How do you price? Can you take over an existing site? What do you need from me? |
| 12 | Final CTA | "You brief. I build." | "booking now: next month!" | Two buttons: book a 20-minute call, email. Chips: what's coming (blog, audits) |
| 13 | Footer | Giant "noman jawad" | | Colophon: "Built on a 12px grid · Lighthouse 100/100/100/100 · source on GitHub" |

### 3.1 Visual system to adopt

- **Palette:** paper `#E4E7E1` + 12px grid; panels `#FBFBF8`; ink `#1B211E`; body `#5E6862`; one structural colour (keep green `#0F6B52`, or pick a navy/ink blue to avoid looking like a clone); one accent orange `#FF5B26` for buttons and annotations. No gradients, no glow.
- **Type:** a display sans at weight 500 with tight tracking (Funnel Display is free on Google Fonts; alternatives: Instrument Sans, Geist). Body: Funnel Sans or Geist. Readouts: JetBrains Mono (already loaded) at 11px uppercase. Kickers: Architects Daughter or Caveat.
- **Shape:** radius 3–4px everywhere. 1px borders at 14% ink. Buttons 11px mono with a coloured square icon.
- **Nav:** floating pill, 64px, logo + Work / Process / About / Contact + orange "Book a call".
- **Signature detail:** a fixed corner readout. Instead of millimetres: `X 0412 px · Y 3812 px · 12 px grid`, or the live Core Web Vitals of the page itself (`LCP 0.9 s · CLS 0.00`) measured with the web-vitals library. The second is on-concept: the site measures itself in front of the client.

### 3.2 What to keep from the current branch

- Routing, content model, admin, SEO plumbing, OG image pipeline (restyle the OG card).
- `useScrollFrame`, Lenis, sticky patterns, the `/story` prototype logic (reskin it).
- Case-study page structure (problem / approach / solution / outcome + highlights).
- `MotionToggle`, skip link, focus styles, reduced-motion handling.

### 3.3 What to retire

- Orb, aurora gradients, `.giant` gradient text, `ScrollMarquee` tiles, the About floating shapes, `ScrollText` character reveal, 40–60px radii, Kanit 900.

### 3.4 Prerequisites that need Noman

1. Real numbers for the stats row and the step-4 readout, from named or NDA-described projects.
2. One case study that can be shown as Figma frame + built screen for the drag compare (blur the brand if needed).
3. Two or three real testimonials with name and role (or role-only under NDA).
4. The open letter, in Noman's words. The whole concept rests on this paragraph being specific and true.
5. A decision on the structural colour (green as on Orthelle, or a blue/ink of his own).

### 3.5 Build order

1. Tokens and base: fonts, palette, grid background, radii, buttons, nav, footer. Reskin `site.css` into a new `sheet.css`.
2. Reskin the `/story` prototype to the new tokens; add alternating left/right text and the step-4 scan readout. Promote to the home hero.
3. Stats row, three steps, case-study grid restyle.
4. Drag compare and "every screen" sections (needs prerequisite 2).
5. Fits-your-stack diagram.
6. Open letter, testimonials, ways to work, FAQ, final CTA.
7. Corner readout with live web vitals; colophon.
8. Restyle OG images; re-run build, Lighthouse on a throttled phone, Search Console check.

Related: `docs/redesign-review-and-scroll-story-plan.md` (the earlier review and the `/story` prototype status).
