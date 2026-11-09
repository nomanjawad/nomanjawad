# Case study plan

As of 2026-11-10. Owner: Noman E Jawad.

Case studies replace the "works" section. Client sites are under NDA, so the portfolio sells how Noman solves problems, not what finished client pages look like. Each case study is a product or system Noman built and can talk about freely: the problem, the decision that cracked it, the numbers, and what shipped.

A buyer should finish one in under three minutes knowing three things: the hard part of the problem, the design decision, and one honest result. Visuals are Noman's own artefacts (architecture, dashboards, code, metrics), never a client's brand.

The site is already wired for this. Case studies live at `/work/[slug]`, hidden behind `SHOW_WORK` in `src/lib/site.ts` until the first two are written.

## The four case studies

Order is by how much is already in hand. Sitecommand and the template have public repos and documentation; Splidr and KidzCRM need their repos located and their numbers pulled first.

| # | Case study | Angle in one line | Source material | What can be shown | Target reader |
| --- | --- | --- | --- | --- | --- |
| 1 | Sitecommand | One dashboard where an AI client manages a fleet of websites: hub, WordPress plugin, Node connector, signed requests only | [sitecommand](https://github.com/nomanjawad/sitecommand), [sitecommand-hub](https://github.com/nomanjawad/sitecommand-hub), [sitecommand-node](https://github.com/nomanjawad/sitecommand-node) (public, MIT), [plugin releases](https://github.com/nomanjawad/siteconnector-releases) | Architecture diagram, the HMAC + OAuth flow, the 18 MCP tools, guard rules, dashboard screenshots | Agencies and devs running many sites; teams evaluating AI tooling |
| 2 | Laravel + Vue template | Six service sites in six days from one modular backend: toggleable modules, atoms-to-pages components, generic admin, custom frontend per client | [vue-laravel-boilerplate](https://github.com/nomanjawad/vue-laravel-boilerplate) (public), the six SkyTech sites built on it | Module system diagram, day-by-day timeline, admin panel screenshots with sample data, delivery time before vs after | Agencies and founders who need many sites fast |
| 3 | Splidr ads algorithm | How to measure an ad impression properly and bill for exactly that: viewability rules, dedupe, billing reconciliation | `splidr-dashboard` repo (not found under nomanjawad or skytech-global; see open questions), [splidrwebsite](https://github.com/skytech-global/splidrwebsite) | Impression lifecycle diagram, dashboard screenshots with sample data, the billing formula | Ad-tech and marketplace founders; anyone billing on usage |
| 4 | KidzCRM | A CRM product for one vertical: what was built, the data model, and the decisions that kept it simple | Repo not found yet (see open questions) | Data model, key screens, one workflow end to end | Founders buying a product build |

Each one is a product or internal system, so no client identity is exposed. Where a client appears at all it is as a sector, the same rule the Proof section already follows.

## One template for all four

Every case study page reads like the home page: one pinned, scroll-driven story with a few big beats, each beat one headline, one short paragraph and one artefact. Five beats, in this order.

1. **The problem.** What was broken, who it hurt, and what it cost in time or money. Three sentences, one number. The artefact is the "before": a messy spreadsheet, a slow dashboard, a support thread, redrawn with sample data.
2. **What I did.** The solution as built: the architecture, the key decision, the stack. One diagram or screenshot per study, Noman's own. The step-by-step sits here as a short numbered list, not prose.
3. **Why build it when the market already has tools.** The honest comparison: what the existing tools do well, where they failed for this case, and the one thing this product does differently. A three-column table (existing tools, the gap, this product) does the work. This beat is what makes the study credible rather than promotional.
4. **Product insights.** Four to six key notes a buyer would want: what it handles, what it deliberately does not, the numbers measured so far (with dates), what surprised Noman in real use, and what is next. Short mono-labelled cards, the same grammar as the credentials expander.
5. **Try it.** A brief form at the end of every study: name, email, what they are building, which product they want to try, a free-text brief. It submits to Noman and shows the "Email copied!"-style confirmation. The existing contact form is reused with the product pre-filled, so there is one inbox and one code path.

Rules that keep them credible:

- Two or three metrics in the hero of each study, each with a unit and a date. The honesty footnote stays under them.
- Artefacts are Noman's own: architecture diagrams, admin screenshots with sample data, code snippets, terminal output. No client logos, names or copy.
- 600 to 900 words per page, split across the five beats.
- Title pattern for search: `<Product>: <problem solved> case study`. Example: "Sitecommand: managing a fleet of WordPress sites from one AI dashboard".
- First person, declarative, numbers over adjectives. Same voice as the home page.

## How they plug into the site

The routes, schema and index already exist. Publishing is content plus one flag.

- **Content.** Each study is one entry in `content/content.json` under `projects`, editable from `/admin`. Existing fields: `problem`, `approach`, `solution`, `outcome`, `highlights`, `stack`, `sector`, `year`. New fields are listed under Fields below.
- **Replace, not append.** The six NDA client entries now in `projects` come out and the four case studies go in. The Proof section's sector list keeps working from whatever is there.
- **Pages.** `/work` stays the dated table with hover preview. `/work/[slug]` is rebuilt as a scroll story like the home page: five pinned beats (problem, what I did, why build it, insights, try it) driven by the same GSAP + ScrollTrigger setup, with the static stacked fallback for reduced motion. The row preview should use a real screenshot instead of the generated mesh.
- **Fields.** The current `problem`, `approach`, `solution`, `outcome` map to beats 1 and 2. New fields on `Project`: `market` (rows of existing tool, gap, this product), `insights` (label and note pairs), `artefacts` (image, alt, caption per beat) and `links` (repo, docs, live).
- **Brief form.** Beat 5 reuses `ContactForm` with a hidden `product` field so every submission names the case study it came from. One inbox, one code path.
- **Search.** Article schema, breadcrumbs, canonical and share image are generated per page already. Each page needs its own title and description written to the pattern above.
- **Publish.** Set `SHOW_WORK` to true. That restores the Work section, nav and footer links, palette entries and sitemap rows, and lifts noindex from the work routes.
- **Home story.** Once a study has real artefacts, the stage in the scroll story swaps its abstractions for them. That is the part parked earlier as track B.

## Order of work and what Noman supplies

| Step | What happens | Noman supplies | Effort |
| --- | --- | --- | --- |
| 0 | Case page rebuilt as the five-beat scroll story, new fields, brief form wired | Approval of the beat layout on one sample study | One day |
| 1 | Sitecommand case study written and wired, `SHOW_WORK` stays off | Three dashboard screenshots with sample data, the numbers (sites connected, tools, requests signed, build weeks), the market comparison in plain words | Half a day |
| 2 | Laravel + Vue template case study | The six-day timeline (which site shipped which day), admin screenshots, time per site before the template | Half a day |
| 3 | Publish: flip `SHOW_WORK`, submit updated sitemap, request indexing for both pages | Review and approve copy | One hour |
| 4 | Splidr ads algorithm case study | Repo access, the impression and billing rules in plain words, dashboard screenshots with sample data | Half a day after material arrives |
| 5 | KidzCRM case study | Repo access, data model, three key screens, the one workflow worth telling | Half a day after material arrives |
| 6 | Home story artefacts (track B): real screenshots replace the abstract stage per step | Approval of which study feeds the hero | One day |

Open questions:

- [ ] Where do `splidr-dashboard` and `kidzcrm` live? Neither is under `nomanjawad` or `skytech-global` on GitHub. Different org, different name, or local only?
- [ ] Are the six template-built sites the SkyTech ones (skyfinsquad, skyfreightsquad, skyhealthpro, skylightbee, skyreva, skylightglobal, all updated 2026-11-05/06)? If so, "six sites in six days" can be dated from the commit history.
- [ ] Can Sitecommand's live dashboard be shown with a demo account, or screenshots only?
- [ ] Which metrics does Noman already have measured, versus which need to be measured before writing?
