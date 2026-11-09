# Content architecture and content management for a Next.js 16 portfolio on Vercel (as of 5 Oct 2026)

Research notes. Scope: how to store, edit and publish site data, blog posts, case studies and media for a solo developer on Next.js 16 App Router / React 19 / pnpm / Vercel.

Reading guide:
- "Cited Findings" are facts checked against a primary source during this research (vendor docs, pricing pages, npm registry) unless marked "(aggregator)".
- "Inferences" are my reasoning or general engineering knowledge that was NOT verified against a source in this session. Treat them as recommendations, not facts.
- Local repo facts come from reading the repo directly (`package.json`, `next.config.ts`, `content/content.json`, `src/`), not from the web.

Local repo state observed (context for every section):
- `next` 16.2.9, `react`/`react-dom` pinned to exactly 19.0.0, no MDX, no CMS, no image/video libraries; only other dependency is `@vercel/analytics`.
- `content/content.json` top-level keys: `identity, hero, marquee, about, work, projects (6 items), skills, experience, testimonials, contact, social, footer`. Each project carries both card fields (`name, label, description, stack, year, client, liveUrl, thumbnail`) and case-study fields (`kicker, summary, duration, problem, approach, solution, outcome`) as short plain strings (roughly 120-180 characters each). `thumbnail` is `null` on the first project.
- Routes: `src/app/(site)/page.tsx`, `src/app/(site)/work/[slug]/page.tsx`, `src/app/admin/*`, `src/app/api/content/route.ts`, plus `sitemap.ts`, `robots.ts`, `proxy.ts`.
- `public/` is 540 KB total: 2 jpeg, 1 pdf, 2 html, 1 js. No video or 3D assets exist yet.
- `next.config.ts` already sets `images.formats: ['image/avif','image/webp']`. `vercel.json` only sets the pnpm install command.

---

## 1. Comparison of content-management approaches

### Takeaway
Every category has at least one option that is actively released and declares Next.js 16 / React 19 support; the real differentiators for a solo developer are where the content lives (git vs. external service), whether an admin UI exists, and what free-tier cap can break the site. Contentlayer is dead; Content Collections, Velite and Fumadocs MDX are the live successors, and Keystatic is the only git-based CMS that runs as a route inside the Next.js app itself with a free tier that covers a solo user.

### Cited Findings

#### Version and maintenance status (npm registry, checked 5 Oct 2026)

| Package | Latest | Published | Declared peers relevant here |
|---|---|---|---|
| `@next/mdx` | 16.3.8 | 2026-09-30 | versioned with Next |
| `next-mdx-remote` | 6.0.0 | 2026-02-12 | react >=16 |
| `next-mdx-remote-client` | 2.1.12 | 2026-08-11 | react >= 19.1.0 |
| `@content-collections/core` | 0.15.3 | 2026-09-21 | - |
| `@content-collections/next` | 0.2.11 | 2026-02-14 | next ^12 to ^16 |
| `velite` | 0.4.0 | 2026-06-17 | - |
| `fumadocs-mdx` | 15.4.6 | 2026-10-02 | next ^15.3 or ^16, react ^19.2.0 |
| `fumadocs-core` | 16.16.1 | 2026-10-04 | next 16.x, react ^19.2.0, zod 4.x |
| `contentlayer` | 0.3.4 | 2023-06-29 | - |
| `contentlayer2` (community fork) | 0.5.8 | 2025-05-03 | - |
| `@keystatic/core` | 0.6.9 | 2026-08-26 | react ^18.2 or ^19 |
| `@keystatic/next` | 5.0.5 | 2026-08-18 | next >=14, react ^18.2 or ^19 |
| `tinacms` | 3.14.2 | 2026-10-01 | react >=16.14 |
| `decap-cms` | 3.16.3 | 2026-09-22 | - |
| `payload` / `@payloadcms/next` | 3.90.2 | 2026-09-23 | next >=15.2.9 <15.3, >=15.3.9 <15.4, >=15.4.11 <15.5, or >=16.3.3 <17 |
| `@payloadcms/storage-vercel-blob` | 3.90.2 | 2026-09-23 | payload 3.90.2 |
| `sanity` | 6.17.0 | 2026-09-29 | react ^19.2.2 |
| `next-sanity` | 13.3.4 | 2026-09-01 | next ^16, react ^19.2.3 |
| `@strapi/strapi` | 5.56.0 | 2026-09-30 | react ^18 (its own admin) |
| `directus` | 12.4.1 | 2026-09-23 | - |

Sources: [@next/mdx](https://www.npmjs.com/package/@next/mdx), [next-mdx-remote](https://www.npmjs.com/package/next-mdx-remote), [next-mdx-remote-client](https://www.npmjs.com/package/next-mdx-remote-client), [@content-collections/core](https://www.npmjs.com/package/@content-collections/core), [@content-collections/next](https://www.npmjs.com/package/@content-collections/next), [velite](https://www.npmjs.com/package/velite), [fumadocs-mdx](https://www.npmjs.com/package/fumadocs-mdx), [fumadocs-core](https://www.npmjs.com/package/fumadocs-core), [contentlayer](https://www.npmjs.com/package/contentlayer), [contentlayer2](https://www.npmjs.com/package/contentlayer2), [@keystatic/core](https://www.npmjs.com/package/@keystatic/core), [@keystatic/next](https://www.npmjs.com/package/@keystatic/next), [tinacms](https://www.npmjs.com/package/tinacms), [decap-cms](https://www.npmjs.com/package/decap-cms), [payload](https://www.npmjs.com/package/payload), [@payloadcms/next](https://www.npmjs.com/package/@payloadcms/next), [@payloadcms/storage-vercel-blob](https://www.npmjs.com/package/@payloadcms/storage-vercel-blob), [sanity](https://www.npmjs.com/package/sanity), [next-sanity](https://www.npmjs.com/package/next-sanity), [@strapi/strapi](https://www.npmjs.com/package/@strapi/strapi), [directus](https://www.npmjs.com/package/directus)

#### MDX in the repo
- `@next/mdx` sources local files only, requires an `mdx-components.tsx` file at the project root for App Router ("will not work without it"), and does not support frontmatter by default; the docs point to `remark-frontmatter`, `remark-mdx-frontmatter` or `gray-matter`, or to `export const metadata = {...}` inside the MDX file. — [Next.js MDX guide (v16.3.8, updated 2026-08-25)](https://nextjs.org/docs/app/guides/mdx)
- The documented pattern for a content folder is `app/blog/[slug]/page.tsx` doing `await import(\`@/content/${slug}.mdx\`)` with `generateStaticParams` and `export const dynamicParams = false` so unknown slugs 404. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- With Turbopack, remark/rehype plugins must be given as strings (`'remark-gfm'`, `['rehype-katex', {...}]`), and "plugins without serializable options cannot be used yet with Turbopack, because JavaScript functions can't be passed to Rust". — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Turbopack is the default bundler for production builds in Next.js 16 (released 21 Oct 2025). — [Lucky Media Next.js 16 summary (secondary)](https://www.luckymedia.dev/blog/nextjs-16-an-early-look-and-release-date)
- The Rust MDX compiler (`experimental.mdxRs`) "is still experimental and is not recommended for production use". — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Next.js docs point to Vercel's Portfolio Starter Kit template as the complete working MDX blog example. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Contentlayer's repo carries the notice "Unfortunately Contentlayer is no longer maintained due to lack of funding" and points to a fork; the repo is not archived. Last npm release of the original is 0.3.4 (June 2023); the fork `contentlayer2` last released May 2025. — [contentlayerdev/contentlayer](https://github.com/contentlayerdev/contentlayer), [contentlayer on npm](https://www.npmjs.com/package/contentlayer), [contentlayer2 on npm](https://www.npmjs.com/package/contentlayer2)
- Velite describes itself as Contentlayer-inspired, uses Zod schemas, and claims 1000+ documents with 2000 assets in under 8 s cold start and under 60 ms hot rebuild. (aggregator summary of Velite's own docs) — [Wisp: Contentlayer alternatives](https://www.wisp.blog/blog/contentlayer-has-been-abandoned-what-are-the-alternatives), [Velite introduction](https://velite.js.org/guide/introduction)
- Content Collections was created by Sebastian Sdorra as a Contentlayer replacement that addresses App Router incompatibility. (aggregator) — [Wisp: Contentlayer alternatives](https://www.wisp.blog/blog/contentlayer-has-been-abandoned-what-are-the-alternatives)

#### Git-based CMSs
- Keystatic GitHub mode: set `storage: { kind: 'github', repo: { owner, name } }`, visit `/keystatic`, and a guided flow creates a GitHub App; users with write access to the repo log in via GitHub OAuth and edits are committed to the repo. It generates `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`; a `branchPrefix` option scopes which branches it manages. — [Keystatic GitHub mode docs](https://keystatic.com/docs/github-mode)
- Keystatic Cloud is free for up to 3 users per team with unlimited projects; Pro is $10/month plus $5/user beyond 3 and unlocks multiplayer editing and Cloud Images (hosted image storage/optimisation). Config is `storage: { kind: 'cloud' }` plus `cloud: { project: 'team/project' }`; it removes the need to create your own GitHub App. — [Keystatic Cloud docs](https://keystatic.com/docs/cloud)
- The Thinkmill/keystatic GitHub "Releases" page is empty; releases are visible only on npm (latest `@keystatic/core` 0.6.9, 26 Aug 2026). — [Keystatic releases page](https://github.com/Thinkmill/keystatic/releases), [@keystatic/core on npm](https://www.npmjs.com/package/@keystatic/core)
- TinaCMS (TinaCloud) Free: $0, 2 users, unlimited projects, 2 roles, community support. Team is $24/project/month ($290/yr), Team Plus $41/project/month and is the first tier with "Editorial Workflow"; Business $249/project/month. — [Tina pricing](https://tina.io/pricing)
- Pages CMS: MIT-licensed, 4.1k stars, 50 open issues; hosted at app.pagescms.org with no setup, or self-hosted (needs PostgreSQL, a GitHub App, Node). Edits content and media directly in a GitHub repo, supports MDX/rich text and inviting collaborators by email. — [pages-cms/pages-cms on GitHub](https://github.com/pages-cms/pages-cms)
- Pages CMS states it is "100% free" for the hosted version, a Vercel deploy, or self-hosting. (aggregator quoting the project) — [search result for pagescms.org](https://pagescms.org)
- Decap CMS: commentary describes it as in "maintenance mode" after Netlify handed it to the community in 2023, with a dated editing UI and no TypeScript-native schema. — [gautamkhorana.com comparison](https://gautamkhorana.com/headless-cms/compare/tinacms-vs-decap-cms/), [Lucky Media Decap vs Keystatic](https://www.luckymedia.dev/compare/decap-cms-vs-keystatic); partly contradicted by the npm registry, which shows `decap-cms` 3.16.3 published 22 Sep 2026, i.e. it is still being released — [decap-cms on npm](https://www.npmjs.com/package/decap-cms)
- One 2026 agency comparison calls Keystatic "the best Git-based CMS available for Astro and Next.js projects today". This is opinion from an agency blog, not a benchmark. — [Lucky Media Decap vs Keystatic](https://www.luckymedia.dev/compare/decap-cms-vs-keystatic)

#### Headless CMSs
- Sanity Free: 20 seats, 2 datasets (public only), 10,000 documents, 1M API CDN requests/month, 250k API requests/month, 100 GB bandwidth/month, 100 GB assets, 2,000 unique attributes per dataset. No overage is available on Free; you must upgrade. Growth is $15/seat/month. — [Sanity pricing](https://www.sanity.io/pricing)
- Sanity feature gating: scheduled drafts, comments, private datasets and AI Assist are NOT on Free (Growth and up); content releases are Enterprise only. — [Sanity pricing](https://www.sanity.io/pricing)
- Payload 3 requirements: Node 20.9.0+, pnpm/npm/yarn 2+, MongoDB, Postgres or SQLite, and only specific Next.js ranges: 15.2.9-15.2.x, 15.3.9-15.3.x, 15.4.11-15.4.x, 16.2.6+. "Not all Next.js 15/16 releases are compatible". — [Payload installation docs](https://payloadcms.com/docs/getting-started/installation); the npm peer range of `@payloadcms/next` 3.90.2 is stricter for v16 (`>=16.3.3 <17`) — [@payloadcms/next on npm](https://www.npmjs.com/package/@payloadcms/next). The two sources conflict on the minimum 16.x version.
- Payload has an official Vercel Blob storage adapter package, version-locked to the Payload release. — [@payloadcms/storage-vercel-blob on npm](https://www.npmjs.com/package/@payloadcms/storage-vercel-blob)
- Hygraph free tier: 3 users, 1K entries, 500K API calls; Hygraph Growth $199/month. Contentful's free tier is said to need an upgrade at 100K API calls/month. Strapi Cloud Essential from $15/month; Payload Cloud Standard $35/month; Directus Team $499/month. All from one aggregator, not vendor pages. — [futurepicker.com comparison (aggregator)](https://futurepicker.com/?p=2173)

#### Database-backed options
- Neon Free: 100 projects, 1 GB storage per project (20 GB total), 100 CU-hours per project per month, autoscaling to 2 CU, suspends after 5 minutes of inactivity, 10 branches per project, 5 GB egress per project; permanent, no card. Launch plan is pay-as-you-go at $0.106/CU-hour with no monthly minimum. — [Neon pricing](https://neon.com/pricing)
- Supabase Free: 500 MB database, 1 GB file storage, 5 GB egress, 50,000 MAU, max 2 active projects, and "Free projects are paused after 1 week of inactivity". Pro is $25/month. — [Supabase pricing](https://supabase.com/pricing)
- Vercel Blob on Hobby: 1 GB storage, 10,000 simple operations, 2,000 advanced operations, 10 GB blob data transfer per month. Exceeding the limits is not billed, but "you will not be able to access Vercel Blob" and must wait 30 days. Dashboard browsing/uploads count as advanced operations. Max file 5 TB; blobs over 512 MB are never cached. — [Vercel Blob pricing](https://vercel.com/docs/vercel-blob/usage-and-pricing)
- Edge Config has been renamed Global Config (store unchanged). Hobby includes the first 100,000 reads and first 100 writes. Vercel positions it for "data that is accessed frequently and updated infrequently": feature flags, A/B tests, critical redirects, IP blocking. — [Vercel Global Config](https://vercel.com/docs/global-config), [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- The Hobby plan comparison table lists "Blob" as the storage product; databases are described as "Marketplace databases" in Vercel's storage overview link text. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby), [Vercel Blob pricing (related links)](https://vercel.com/docs/vercel-blob/usage-and-pricing)

#### How each option behaves on Vercel (sourced parts)
- Hobby: 100 deployments/day, 2 build vCPUs / 8 GB, 300 s max function duration, 1 hour of runtime logs. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- Deploy hooks: 5 per project, triggerable up to 60 times per hour. — [Vercel limits](https://vercel.com/docs/limits)

### Inferences
(Unverified in this session; based on general knowledge of these tools.)

Summary matrix for a solo developer. "Compat" reflects the npm peer ranges above.

| Option | Cost floor | Editing UX | Next 16 / React 19 | Preview/drafts | Type safety | Lock-in | Setup effort | On Vercel |
|---|---|---|---|---|---|---|---|---|
| Plain MDX + `@next/mdx` or `next-mdx-remote-client` + own Zod loader | $0 | Editor/IDE only | Yes (first-party) | `draft: true` flag + Vercel preview deploys | Whatever you write | None | Low | Fully static, rebuild per change |
| Content Collections | $0 | IDE only | Yes (peer ^16) | Same as above | Strong (Zod, generated types) | Very low (plain files) | Low | Static |
| Velite | $0 | IDE only | No peer constraint; still 0.x, slower release cadence | Same | Strong (Zod) | Very low | Low | Static |
| Fumadocs MDX | $0 | IDE only | Yes, but needs React ^19.2 | Same | Strong | Low; docs-oriented conventions | Low-medium | Static |
| Contentlayer | - | - | Unmaintained | - | - | - | Do not adopt | - |
| Keystatic (GitHub mode or Cloud free) | $0 | Good form-based admin at `/keystatic`, writes MDX/YAML/JSON to repo | Yes (peer next >=14, react 19) | Branch-based; each commit triggers a Vercel build | Good (typed reader API) | Very low: output is plain files | Low-medium | Admin route runs as a function; content changes arrive as commits |
| TinaCMS | $0 for 2 users | Visual/inline editing | Releases weekly; App Router supported | Draft via branches; editorial workflow is paid | Generated GraphQL types | Medium (TinaCloud + GraphQL layer) | Medium-high | Needs TinaCloud or self-hosted backend |
| Decap | $0 | Dated | Framework-agnostic SPA | Editorial workflow via PRs | None native | Low | Medium (OAuth proxy needed off Netlify) | Static admin page |
| Pages CMS | $0 | Clean hosted UI, no code in your app | N/A (external app) | No preview of its own | None (YAML config) | Very low | Very low (`.pages.yml`) | Commits trigger builds |
| Sanity | $0 within caps | Best-in-class studio, live preview | Yes, needs React ^19.2.3 | Excellent (draft mode, visual editing); scheduling is paid | Good (TypeGen) | High (hosted content lake, GROQ, Portable Text) | Medium | Webhook to `revalidateTag` |
| Payload 3 | $0 software + DB | Full admin inside the app | Only specific Next versions; site's 16.2.9 is borderline | Built-in drafts/versions/live preview | Excellent (generated types) | Medium (your own Postgres, portable) | High | Needs Postgres (Neon) + Blob; cold starts and larger function bundle |
| Strapi / Directus | Needs a separate server | Good | N/A (separate service) | Yes | Partial | Medium | High | Cannot run on Vercel; second host required |
| Contentful / Hygraph | Free tiers with entry/API caps | Good | N/A (API) | Yes | Codegen | High | Medium | Webhook revalidation |
| Supabase / Neon + own admin | $0 | Whatever you build | Yes | Whatever you build | Drizzle/Prisma/generated types | Low-medium | High (you are building a CMS) | Supabase free pauses after a week idle |
| Blob / Global Config as content store | $0 | None | Yes | None | None | Low | Medium | Global Config's 100 writes on Hobby and its flags/redirects purpose make it unsuitable as a content DB |

- The site pins `react` to exactly 19.0.0. Adopting Fumadocs (needs ^19.2.0), next-sanity (^19.2.3), Sanity Studio (^19.2.2) or next-mdx-remote-client (>=19.1.0) would first require bumping React. Keystatic, Content Collections and `@next/mdx` do not force that.
- The site is on `next` 16.2.9. Payload's npm peer range requires 16.3.3+, so Payload would force a Next upgrade and thereafter constrains which Next versions the site may use. That coupling is a recurring maintenance cost for a portfolio.
- Because Turbopack cannot take non-serialisable plugin options in `@next/mdx`, toolchains that compile MDX outside the bundler (Content Collections, Velite, Fumadocs MDX, next-mdx-remote-client) avoid that restriction and are the safer choice when you want rehype-pretty-code with custom transformers.
- Supabase's one-week inactivity pause is a real risk for a low-traffic portfolio whose pages are statically cached and therefore rarely hit the database.
- Sanity's free caps (10k documents, 100 GB bandwidth) are far beyond what a personal blog needs; the risk is lock-in and the absence of scheduling on Free, not quota.

### Gaps
- Strapi Cloud, Directus Cloud, Contentful and Hygraph free-tier numbers come from a single aggregator and were not confirmed on vendor pricing pages. Contentful's exact free limits were not found.
- Did not verify Keystatic's own documentation for Next.js 16 specifics (only the npm peer range `next >=14`), nor any known issues with Turbopack or React Compiler. Keystatic is still 0.x.
- Could not fetch the Content Collections Next.js quickstart (HTTP 403), so its exact setup steps and Turbopack behaviour are unverified.
- Velite and Fumadocs feature details (asset co-location handling, collection APIs) were not read from primary docs.
- TinaCMS self-hosted backend requirements and Decap's GitHub auth requirements off Netlify were not verified.
- Vercel Marketplace Postgres (the successor arrangement to "Vercel Postgres") terms were not checked; only Neon's own pricing page was.
- No independent benchmark of build times across these tools was found.

---

## 2. Which is best for a developer who writes often, wants an admin UI or fast authoring, and wants zero/low cost: ranking

### Takeaway
My ranking: (1) MDX files in the repo with a typed content layer (Content Collections) plus Keystatic as the optional admin UI over the same files; (2) the same typed MDX layer with Pages CMS or no UI at all; (3) Sanity free tier; (4) Payload 3 on Neon + Blob; (5) TinaCMS; then everything else. The ranking is my judgement built on the sourced facts in section 1, not a published benchmark.

### Cited Findings
- Keystatic costs $0 in GitHub mode and $0 on Keystatic Cloud for up to 3 users; it commits content to the repository. — [Keystatic GitHub mode](https://keystatic.com/docs/github-mode), [Keystatic Cloud](https://keystatic.com/docs/cloud)
- `@content-collections/next` declares Next 16 support and the core package was released 21 Sep 2026. — [@content-collections/next on npm](https://www.npmjs.com/package/@content-collections/next), [@content-collections/core on npm](https://www.npmjs.com/package/@content-collections/core)
- Pages CMS is free, hosted, and needs no code in the site. — [pages-cms on GitHub](https://github.com/pages-cms/pages-cms)
- Sanity's free plan has no scheduled drafts and hard caps with no overage. — [Sanity pricing](https://www.sanity.io/pricing)
- Payload requires a database and only supports specific Next.js version ranges. — [Payload installation docs](https://payloadcms.com/docs/getting-started/installation)
- TinaCloud free allows 2 users; editorial workflow starts at $41/project/month. — [Tina pricing](https://tina.io/pricing)
- Supabase free projects pause after one week of inactivity. — [Supabase pricing](https://supabase.com/pricing)
- Hobby is limited to 100 deployments per day. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- Vercel defines commercial use (not allowed on Hobby) to include "Advertising the sale of a product or service" and "Any method of requesting or processing payment from visitors of the site"; donations are exempt. — [Vercel fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines)

### Inferences
Ranking and reasoning:

1. **MDX in repo + Content Collections (typed, Zod-validated) + Keystatic admin on top.** Content stays as plain `.mdx`/`.yaml` files, so there is nothing to migrate away from, no quota, no external runtime dependency, and pages are fully static (best for speed and SEO). The developer can write in the IDE (fastest, works with AI coding assistants directly on files) or in the browser at `/keystatic` from any device. Build-time schema validation is what protects SEO: a post with a missing description or cover alt fails the build instead of shipping. Costs: one rebuild (roughly a minute or two) per published change, and two schema definitions to keep in sync (Keystatic config and the Zod schema), unless Keystatic's reader API is used as the only content layer.
   - Simpler variant: use Keystatic's reader API alone and skip Content Collections. Fewer moving parts; weaker MDX pipeline control.
2. **Typed MDX with Pages CMS, or with no UI.** Same benefits, even less code. Pages CMS is an external hosted app, so it adds no dependency to the site, but offers no live preview and is one more third party with repo write access. "No UI" is perfectly viable for a developer; a `pnpm new:post` scaffold script gives most of the speed.
3. **Sanity (free).** Best editing and preview experience and instant publishing without rebuilds via webhook revalidation. Loses on lock-in (content leaves the repo, Portable Text instead of MDX makes interactive demos in posts harder), a second system to maintain, and no scheduling on Free.
4. **Payload 3 + Neon + Vercel Blob.** Strongest "real CMS" with full type safety and it is free software, but it is the heaviest option: database, migrations, auth, Next-version coupling, cold starts. Justified if the portfolio is also meant to be a showcase of Payload skills or will grow into client-facing features.
5. **TinaCMS.** Visual editing is appealing but it adds TinaCloud and a GraphQL layer for content that would be simpler as files.
6. **Custom admin on Postgres (Neon/Supabase).** Maximum effort; you rebuild drafts, previews, media and validation yourself.
7. **Decap, Strapi, Directus, Contentful, Hygraph.** Either dated, need a second server, or have tight free tiers with high lock-in for no benefit at this scale.
8. **Contentlayer.** Unmaintained; exclude.

Other points:
- "Writes often" favours git-based: 100 deployments/day on Hobby is far more than a solo writer needs, so rebuild-per-publish is not a constraint.
- A portfolio that advertises paid services and collects leads plausibly falls under Vercel's commercial-use definition, which would require Pro regardless of the CMS choice. This affects budget planning more than architecture. The owner should read the definition and decide; I am not giving a legal reading.

### Gaps
- No rigorous 2025-2026 head-to-head by an independent developer was found; available comparison posts are agency/aggregator content of uneven quality.
- I did not test Keystatic + Content Collections together on Next.js 16.2.9 with Turbopack; compatibility is inferred from peer ranges only.
- Whether Vercel would treat this specific site as commercial is not something a source can answer; only Vercel support can.

---

## 3. Replacing the fs.writeFile admin

### Takeaway
On Vercel the durable replacement for writing to the filesystem is to write to the Git repository (so the change becomes a commit and a new deployment) or to an external store followed by on-demand revalidation. For this site, replacing `/admin` + `PUT /api/content` with Keystatic in GitHub mode (or Keystatic Cloud) is the least custom code; a hand-rolled GitHub Contents API commit is the fallback if the existing admin UI must be kept.

### Cited Findings
- Keystatic GitHub mode commits edits to the repo through a GitHub App, with OAuth restricted to users who have write access. — [Keystatic GitHub mode](https://keystatic.com/docs/github-mode)
- `revalidateTag(tag, profile)` can be called from Server Functions and Route Handlers (not Client Components or Proxy). In Next.js 16 the single-argument form is deprecated; `'max'` is the recommended profile and gives stale-while-revalidate. — [Next.js revalidateTag (v16.3.8)](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- For webhooks: "When the invalidation comes from outside a Server Action, for example a webhook or another service calling a Route Handler, `updateTag` is not available. Pass `{ expire: 0 }` to expire the data immediately". — [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- "A revalidation is triggered by a request, not by the `revalidateTag` call, so pages using the tag revalidate as they are visited rather than all at once." — [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- Tags are attached with `fetch(url, { next: { tags: [...] } })` or with `cacheTag()` inside a `'use cache'` function; tags are case-sensitive and limited to 256 characters. — [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- Next.js 16 introduced Cache Components (`cacheComponents: true`) with `'use cache'`, `cacheLife`, `cacheTag`, `updateTag`; `unstable_cache` is superseded by `'use cache'`. (secondary source) — [Noqta Next.js 16 cache guide](https://noqta.tn/en/tutorials/nextjs-16-cache-components-use-cache-guide-2026)
- Draft Mode: a Route Handler validates a shared secret, calls `(await draftMode()).enable()`, which sets the `__prerender_bypass` cookie; while set, `fetch` cache, `'use cache'` and `unstable_cache` are bypassed and the page is served `Cache-Control: private, no-cache, no-store`. The docs say to redirect to the slug from the fetched record, not from the query string, to avoid open redirects. — [Next.js Draft Mode guide](https://nextjs.org/docs/app/guides/draft-mode)
- Deploy hooks: 5 per project, 60 triggers per hour. — [Vercel limits](https://vercel.com/docs/limits)
- Global Config (ex Edge Config) on Hobby includes only the first 100 writes. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)

### Inferences
Options, in order of preference for this site:

1. **Keystatic replaces `/admin` entirely.** Delete `src/app/admin/*` and `src/app/api/content/route.ts`; add `keystatic.config.ts` with singletons for the current `content.json` sections (identity, hero, about, contact, footer...) and collections for projects, posts, services, testimonials. Local mode in development (writes to disk), GitHub mode in production (commits). Each save is a commit, Vercel rebuilds, the site stays fully static. No revalidation code is needed because the deployment is the invalidation.
2. **Keep the custom admin, swap the write.** Replace `fs.writeFile` with a call to the GitHub REST "create or update file contents" endpoint (`PUT /repos/{owner}/{repo}/contents/{path}` with the file's current `sha`), authenticated by a fine-grained token stored as a Vercel env var scoped to this one repo with contents read/write. The commit triggers a deployment. Must add: real authentication on `/admin` and the API route, optimistic-concurrency handling for the `sha`, and a "deploying..." state because the change is not live for a minute or two.
3. **External store + on-demand revalidation.** Move content to Sanity/Payload/Postgres, read it through `'use cache'` functions tagged with `cacheTag('posts')`, `cacheTag(\`post:${slug}\`)`, and expose `POST /api/revalidate` that verifies a secret/signature and calls `revalidateTag(tag, 'max')` (or `{ expire: 0 }` for immediate). Gives instant publishing without a rebuild, at the cost of the external system.
4. **JSON in Vercel Blob.** Technically works (`put()` with overwrite, then `revalidateTag`), but loses git history, review and type-checked builds; only sensible for tiny, frequently toggled values such as an "available for work" flag.
5. **Global Config for site content.** Not recommended: 100 included writes on Hobby and designed for flags/redirects.

Security note that applies to all variants: the current `PUT /api/content` should be treated as unauthenticated until proven otherwise, and removed or locked down as part of the migration.

A small hybrid worth considering: keep everything in git, but put the single "availability" status in Global Config or Blob so it can be flipped from a phone without a rebuild.

### Gaps
- I did not read `src/app/api/content/route.ts` or `src/proxy.ts` in detail, so I cannot state what authentication currently protects the admin route.
- GitHub REST API specifics (endpoint, token scopes) are from memory and not re-verified against GitHub docs in this session.
- The official Next.js `updateTag` and Cache Components pages were not fetched directly; only `revalidateTag` and Draft Mode were. Details of `updateTag` semantics rely on the `revalidateTag` page's cross-references and a secondary tutorial.
- Whether Keystatic's GitHub mode has any Vercel-specific deployment caveats is not covered by the page I read ("the process of deploying Keystatic can vary").

---

## 4. Content modelling

### Takeaway
Split the single JSON into typed collections (posts, case studies/projects, services, testimonials, technologies, tags, author) plus a few singletons for page copy, and relate them by slug references that are validated at build time. I found no authoritative external standard for portfolio frontmatter; the schemas below are my recommendation.

### Cited Findings
- `@next/mdx` has no built-in frontmatter; use `gray-matter`/`remark-frontmatter`, or a content layer that parses and validates it. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Velite and Content Collections both use Zod schemas for validation and support computed fields. (aggregator) — [Wisp: Contentlayer alternatives](https://www.wisp.blog/blog/contentlayer-has-been-abandoned-what-are-the-alternatives)
- `reading-time` on npm is at 1.5.0, last published September 2021 (stable but not actively developed). — [reading-time on npm](https://www.npmjs.com/package/reading-time)
- Static image imports get `blurDataURL` generated automatically; remote/dynamic images need `width`, `height` and `blurDataURL` supplied by you. — [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image)
- Local repo: today each project in `content.json` mixes card data and case-study narrative as short strings, and `thumbnail` can be `null`. — local file `content/content.json`

### Inferences
Recommended collections and fields (all my proposal):

**posts** (`content/blog/<slug>/index.mdx`)
```yaml
title: string            # 50-60 chars target
description: string      # 120-160 chars, used for meta description and cards
publishedAt: date        # ISO; future date = scheduled
updatedAt: date?         # set only on substantive edits; drives dateModified + sitemap lastmod
draft: boolean           # default false
cover: { src: ./cover.jpg, alt: string }   # alt required by schema
tags: [tag-slug]         # validated against tags collection
category: enum?          # optional single category; keep the set tiny
projects: [project-slug] # related case studies
technologies: [tech-slug]
series: { slug, order }? # optional multi-part posts
canonicalUrl: url?       # only when the original lives elsewhere
seo: { title?, description?, ogImage?, noindex? }  # overrides only
featured: boolean?
# computed, never hand-written: slug (from folder), readingTime, wordCount, headings (TOC), url
```

**projects / case studies** (`content/work/<slug>/index.mdx`), merging the current card + narrative fields
```yaml
title, client, role, year, duration
summary: string          # card text + meta description
kicker: string?
status: enum(live, archived, concept)
liveUrl, repoUrl?
cover: { src, alt }
gallery: [{ src, alt, caption? }]
video: { provider: mux|youtube|file, id|src, poster }?
model3d: { src, poster, alt }?
technologies: [tech-slug]
services: [service-slug]         # which offering this proves
testimonial: testimonial-slug?
outcomes: [{ label, value }]     # measurable results, rendered as stat row
featured: boolean, order: number
publishedAt, updatedAt, draft
seo: {...}
# body MDX holds Problem / Approach / Solution / Outcome as real sections instead of 140-char strings
```

**services** (`content/services/<slug>.mdx`): `title, summary, icon, deliverables[], process[], priceFrom?, faqs[{q,a}], technologies[], order, seo`. Related projects are derived by reverse lookup, not stored twice.

**testimonials** (`content/testimonials/<slug>.yaml`): `quote, author, role, company, avatar{src,alt}, project?, source url?, date, featured`.

**technologies / skills** (`content/technologies.yaml` or one file each): `slug, name, category (frontend|backend|...), level?, icon?, url?`. This is the hub entity: post <-> technology <-> project.

**tags** (`content/tags.yaml`): `slug, label, description`. A description gives tag pages unique text; requiring registration prevents `nextjs` / `next-js` / `Next.js` duplicates.

**author** (singleton `content/author.yaml`, or collection if guests are ever expected): `name, role, bio, avatar, email, location, sameAs[]` feeding Person JSON-LD.

**singletons** (`content/site/*.yaml`): identity, hero, about, contact, navigation, footer, i.e. the non-list parts of today's `content.json`.

Relation rules:
- Store each relation on one side only (post lists `projects`; project page computes "related writing" by filtering). Validate every referenced slug in the schema transform so a typo fails the build.
- Slug comes from the folder name, never from frontmatter, so URL and file cannot drift. Renames require a redirect entry (keep a `redirects` list).
- Draft logic in one helper: published = `!draft && publishedAt <= now`; show drafts when `NODE_ENV !== 'production'` or `VERCEL_ENV === 'preview'`. Exclude unpublished items from sitemap, RSS, tag counts and `generateStaticParams`.
- `updatedAt` should be a deliberate field, not git mtime, because formatting-only commits would otherwise change `lastmod`.
- Reading time: computing `Math.ceil(words / 200-230)` in the collection transform avoids a dependency.
- SEO fields default from `title`/`description`/`cover`; the `seo` object is for overrides only, which keeps authoring fast.

Category vs tags: with a low post count, a single flat tag taxonomy is enough; add categories only when there are clearly separate audiences (e.g. "Engineering" vs "Freelancing").

### Gaps
- No authoritative source prescribes these schemas; they are a design recommendation. Structured-data requirements (Article/BlogPosting, Person, FAQ) and their current Google eligibility were out of my assigned scope and not researched here.
- Did not verify how Keystatic's `fields.relationship` and image fields serialise to frontmatter, which affects whether co-located images and slug references look exactly as sketched.

---

## 5. URL and folder structure

### Takeaway
Keep `/work/[slug]`, add `/blog`, `/blog/[slug]`, `/blog/tag/[tag]`, `/services/[slug]` and feed routes, and store each entry as a folder with its assets beside it under `content/`. The Next.js mechanics are documented; the specific layout is my recommendation.

### Cited Findings
- Dynamic MDX routes should use `generateStaticParams` and `dynamicParams = false` so undefined slugs return 404. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- In Next.js 16 `params` is a Promise and must be awaited (`const { slug } = await params`). — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- MDX files placed under `app/` as `page.mdx` become routes and can export metadata; MDX imported from a separate directory is the alternative. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- The `feed` npm package (RSS 2.0 / Atom / JSON Feed generator) is at 6.0.0, published 5 Jul 2026. — [feed on npm](https://www.npmjs.com/package/feed)
- Local repo already has `src/app/sitemap.ts` and `src/app/robots.ts`, and uses a `(site)` route group. — local repo

### Inferences
Routes:
```
/                               home
/work                           index of case studies (currently only a home section)
/work/[slug]                    keep existing URLs unchanged
/blog                           page 1
/blog/page/[n]                  page 2+ (static; avoid ?page= query params)
/blog/[slug]
/blog/tag/[tag]                 only for tags with enough posts; otherwise noindex or do not generate
/services, /services/[slug]
/about, /contact                optional standalone pages
/rss.xml (or /blog/rss.xml)     Route Handler; also /feed.json if wanted
/sitemap.xml, /robots.txt       existing
/keystatic                      admin (noindex, disallow)
```
- Flat `/blog/[slug]` with no dates or categories in the path, so reclassifying or updating a post never changes its URL.
- Pagination can wait: a single `/blog` page is fine until there are a few dozen posts. When added, page 1 must be `/blog` only (redirect `/blog/page/1`), and each page self-canonicalises.
- Tag pages are thin-content risks. Generate them from the registered tag list, give each a description, and skip or noindex tags below a minimum post count.
- Use route segment names `page` and `tag` as reserved slugs in the post schema to avoid collisions with `/blog/[slug]`.

Repo layout:
```
content/
  site/            identity.yaml hero.yaml about.yaml contact.yaml nav.yaml
  author.yaml
  tags.yaml
  technologies.yaml
  blog/
    2026-10-my-post-slug/        # optional date prefix for sorting; strip it when deriving slug
      index.mdx
      cover.jpg
      diagram.png
  work/
    project-slug/
      index.mdx
      cover.jpg
      gallery-01.jpg
      demo-poster.jpg
  services/
    web-apps.mdx
  testimonials/
    client-name.yaml
src/
  app/(site)/blog/page.tsx, blog/[slug]/page.tsx, blog/tag/[tag]/page.tsx, blog/page/[n]/page.tsx
  app/(site)/work/..., services/...
  app/rss.xml/route.ts
  app/keystatic/..., app/api/keystatic/[...params]/route.ts
  components/mdx/        Callout, Figure, Video, CodeTabs, Demo wrappers
  lib/content/           typed queries: getPosts(), getPost(slug), getRelated(), isPublished()
content-collections.ts   schemas
keystatic.config.ts
mdx-components.tsx       only if using @next/mdx
public/
  og/ fonts/ models/ video/      only truly global or non-image static files
```
- Co-locating images with the entry keeps authoring fast (drag a file next to the post, reference `./cover.jpg`), makes deletion clean, and lets the content layer import them statically so width/height/blur come for free. This needs the content layer or a remark plugin to turn relative paths into static imports; if Keystatic is the editor, configure its image fields with a `directory`/`publicPath` that matches.
- Keep the whole data-access surface in `src/lib/content/` so the storage choice can change later without touching pages.
- Migration: split `content.json` with a one-off script; keep every existing `/work/[slug]` slug identical.

### Gaps
- SEO specifics (canonical/pagination handling, tag-page indexation thresholds) are general practice stated from experience, not sourced here; another researcher likely covers SEO.
- Not verified: exact file paths Keystatic requires for its Next.js App Router integration.
- Not verified: how Content Collections resolves co-located relative image paths in MDX under Turbopack.

---

## 6. Asset handling

### Takeaway
On Hobby the binding constraint is 5,000 image transformations per month, after which new images fail with HTTP 402 (no charge, but broken images). For this site, which today has 540 KB of assets, local statically imported images with a restrained `sizes`/`qualities` config are enough; video should go to a video host or YouTube rather than `/public`, and `.glb` files belong in `/public` or object storage with long cache lifetimes.

### Cited Findings

#### next/image in Next.js 16
- v16.0.0 changes: `qualities` default became `[75]` and the field is "required starting with Next.js 16"; a requested quality outside the list is coerced to the nearest allowed value. `preload` prop added and `priority` deprecated ("In most cases, you should use `loading="eager"` or `fetchPriority="high"` instead of `preload`"). `dangerouslyAllowLocalIP` and `maximumRedirects` configs added. — [Next.js Image component (v16.3.8)](https://nextjs.org/docs/app/api-reference/components/image)
- Default `formats` is `['image/webp']`; AVIF is opt-in via `['image/avif', 'image/webp']`. "AVIF generally takes 50% longer to encode but it compresses 20% smaller compared to WebP", and each format is cached separately. — [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image)
- Defaults: `deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]`, `imageSizes: [32, 48, 64, 96, 128, 256, 384]`; `minimumCacheTTL` example default 14400 s (4 hours), with 2678400 (31 days) shown as the longer option. There is no cache invalidation mechanism other than changing `src`. — [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image)
- Static imports of jpg/png/webp/avif get automatic `blurDataURL` (unless animated) and are content-hashed and cached immutably; remote images need explicit `width`, `height`, and optional `blurDataURL`. `localPatterns` and `remotePatterns` allowlist what may be optimised. — [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image)
- The `alt` prop is required by the component. — [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image)
- Local repo: `next.config.ts` already enables AVIF + WebP. — local file `next.config.ts`

#### Vercel image optimisation, Hobby
- Included per month: 5,000 transformations, 300,000 cache reads, 100,000 cache writes. On-demand (paid plans): $0.05-$0.0812 per 1K transformations, $0.40-$0.64 per 1M cache reads, $4.00-$6.40 per 1M cache writes, by region. — [Vercel image optimisation limits and pricing (updated 2026-08-11)](https://vercel.com/docs/image-optimization/limits-and-pricing)
- A transformation is billed on every cache MISS and STALE; cache reads/writes are measured in 8 KB units. — [Vercel image optimisation limits and pricing](https://vercel.com/docs/image-optimization/limits-and-pricing)
- When Hobby limits are exceeded: "New images will fail to optimize and instead return a runtime error response with 402 status code", showing the `alt` text; already-optimised images keep working; you are not charged. — [Vercel image optimisation limits and pricing](https://vercel.com/docs/image-optimization/limits-and-pricing)
- Limits: transformed image max 10 MB; source max 8192 x 8192 px; only jpeg, png, webp, avif sources are optimised, other formats are served as-is. — [Vercel image optimisation limits and pricing](https://vercel.com/docs/image-optimization/limits-and-pricing)
- Hobby also includes 100 GB Fast Data Transfer, 10 GB Fast Origin Transfer, 1,000,000 CDN requests, 1,000,000 function invocations, 4 CPU-hours. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- CLI deployments are limited to 100 MB of source files on Hobby (1 GB on Pro) and 15,000 files. — [Vercel limits](https://vercel.com/docs/limits)

#### Third-party image/asset hosts
- Cloudinary Free: 25 credits/month; 1 credit = 1,000 transformations or 1 GB storage or 1 GB bandwidth; 3 users. Next plan (Plus) is $99/month ($89 billed yearly). — [Cloudinary pricing](https://cloudinary.com/pricing)
- ImageKit Free: 20 GB bandwidth/month, 3 GB DAM storage, 500 video units, 650 extension units, 2 users. Lite is $9/month (40 GB bandwidth, 10 GB storage). — [ImageKit plans](https://imagekit.io/plans/)
- Cloudflare R2 free tier: 10 GB-month storage, 1M Class A and 10M Class B operations per month, egress free; beyond that $0.015/GB-month. — [Cloudflare R2 pricing](https://developers.cloudflare.com/r2/pricing/)
- Vercel Blob Hobby: 1 GB storage, 10 GB transfer, 10k simple / 2k advanced operations; access is cut off for 30 days if exceeded. Blob data transfer is described as about 3x cheaper than Fast Data Transfer on paid plans. — [Vercel Blob pricing](https://vercel.com/docs/vercel-blob/usage-and-pricing)
- `next-cloudinary` 6.19.3 (Sep 2026) declares Next 16 and React 19 support. `uploadthing` latest is 7.7.4, published Aug 2025, i.e. no release in over a year. — [next-cloudinary on npm](https://www.npmjs.com/package/next-cloudinary), [uploadthing on npm](https://www.npmjs.com/package/uploadthing)
- Keystatic Cloud Images (hosted image storage + transforms) is a Pro ($10/month) feature. — [Keystatic Cloud](https://keystatic.com/docs/cloud)

#### Video
- Mux: 100,000 delivery minutes free every month; storage for 1080p "basic" is $0.003/min/month and delivery $0.001/min after the free minutes; input (encoding) free for basic. A free-plan storage allowance is not stated on the pricing page. — [Mux pricing](https://www.mux.com/pricing)
- Cloudflare Stream: $5 per 1,000 minutes stored (prepaid), $1 per 1,000 minutes delivered; encoding and ingress free; no free tier is listed. — [Cloudflare Stream pricing](https://developers.cloudflare.com/stream/pricing/)
- `next-video` 2.8.2 (Oct 2026) and `@mux/mux-player-react` 3.13.4 (Sep 2026) both declare React 19 support. — [next-video on npm](https://www.npmjs.com/package/next-video), [@mux/mux-player-react on npm](https://www.npmjs.com/package/@mux/mux-player-react)

#### OG images
- `@vercel/og` is at 1.0.3, published 22 Sep 2026. — [@vercel/og on npm](https://www.npmjs.com/package/@vercel/og)

### Inferences
Images:
- A transformation is one (source, width, quality, format) combination. With the default 8 device sizes plus 2 formats, one image can in the worst case generate up to 16 variants as different devices request it. 5,000/month therefore covers on the order of a few hundred distinct images per month at full spread, more in practice because not every width is requested. A portfolio with tens of images is comfortably inside; a gallery-heavy site with frequent re-deploys of remote images is where it bites.
- Ways to stay inside the Hobby quota: prefer static imports (immutable, hashed); trim `deviceSizes` to about 4-5 values; keep `qualities` at one or two values; raise `minimumCacheTTL` to 31 days; always pass an accurate `sizes`; consider WebP-only if the count gets close (AVIF doubles variants); pre-size source images to at most about 2400 px wide and under roughly 500 KB before committing; use `unoptimized` for SVGs, tiny icons and animated GIFs.
- Escape hatch if the quota is ever exceeded: a custom `loader` pointing at Cloudinary or ImageKit moves all transformations off Vercel. ImageKit's free tier (20 GB bandwidth, 3 GB storage) is the more generous fit for a portfolio; Cloudinary's 25 shared credits are consumed by transformations, storage and bandwidth together. Do not adopt either pre-emptively; it adds lock-in in image URLs.
- Storage choice by asset type: images under a few hundred KB each, co-located in the repo; anything large or binary that changes independently of code (video masters, large `.glb`, downloadable files) in R2 (free egress, 10 GB) or Vercel Blob (1 GB, simplest integration). Blob's 30-day lockout on overage makes R2 the safer free choice for anything traffic-sensitive.
- Uploadthing's lack of releases for over a year is a reason to skip it for a new build in late 2026.

Video:
- Self-hosting mp4/webm in `/public` is acceptable only for short, muted, looping UI clips of a few MB (encode both webm/AV1 or VP9 and mp4/H.264, add `poster`, `preload="none"` or `metadata`, `playsInline`). It has no adaptive bitrate and consumes the 100 GB transfer allowance and the 100 MB CLI upload limit.
- Case-study walkthroughs: Mux (100k free delivery minutes, adaptive streaming, `next-video` integration) for a polished player without third-party branding, or YouTube via a facade/lite embed (zero cost, discovery benefit, but branding and heavier third-party scripts unless lazy-loaded behind a poster).
- Cloudflare Stream has no free tier, so it only makes sense if already paying Cloudflare.

3D (.glb):
- Compress before shipping (Draco or Meshopt geometry compression, KTX2/Basis textures, via `gltf-transform` or `gltfjsx --transform`); aim for under 1-2 MB per model.
- Host small models in `/public/models/` with content-hashed filenames (`chair.3f9a2c.glb`) and add a long immutable `Cache-Control` header via `headers()` in `next.config.ts` or `vercel.json`; host large ones on R2/Blob.
- Lazy-load the viewer (`next/dynamic` with `ssr: false` inside a client component), render a static poster image first, and only fetch the model when the element is near the viewport or on interaction, so the 3D never affects LCP.

OG images:
- Use the file convention `opengraph-image.tsx` per route segment with `ImageResponse` (`next/og`), generating at build time from frontmatter title/tag/cover for `/blog/[slug]` and `/work/[slug]`; fall back to a static `opengraph-image.png` at the root. Allow a per-entry `seo.ogImage` override. 1200 x 630.

Naming and alt text:
- Lowercase kebab-case, descriptive, no spaces or camera names: `checkout-redesign-mobile-cart.jpg`. Stable names for co-located files; hashed names only for long-cached public binaries.
- Make `alt` a required schema field for cover and gallery images (empty string permitted only with an explicit `decorative: true`). Alt describes content/function, not "image of"; captions are separate.
- Source formats: JPEG for photos/screenshots with gradients, PNG for UI with flat colour or transparency, SVG for logos/diagrams. Let `next/image` emit AVIF/WebP; do not hand-commit AVIF sources unless bypassing the optimiser.

### Gaps
- Uploadthing's current pricing/free tier was not checked (only its npm release date).
- Mux's free-plan storage limit and whether the free plan has watermark/branding restrictions are not stated on the pricing page I read.
- I did not find/verify Vercel's exact default `Cache-Control` for files in `/public`, so the claim that `.glb` files need an explicit long-cache header is from general knowledge.
- No sourced benchmark for `.glb` compression ratios or for YouTube-embed performance cost was collected.
- Cloudinary free-tier maximum file sizes are not on the pricing page.
- `next/og` / `opengraph-image` documentation was not fetched in this session; the OG approach is from prior knowledge of the Next.js file conventions.
- The Vercel "how to reduce image optimisation costs" guide exists ([link](https://vercel.com/kb/guide/reduce-image-optimization-costs-on-vercel)) but was not read; the tuning list above is my own.

---

## 7. Code blocks and rich content in posts

### Takeaway
Shiki-based build-time highlighting via rehype-pretty-code is current and maintained, and the main Next.js 16 wrinkle is that `@next/mdx` under Turbopack only accepts plugins with serialisable options. Rich elements (TOC, callouts, embeds, live demos) are best delivered as a small, fixed set of MDX components.

### Cited Findings
- `shiki` is at 4.5.0 (1 Oct 2026); `rehype-pretty-code` is at 0.14.5 (25 Jul 2026). — [shiki on npm](https://www.npmjs.com/package/shiki), [rehype-pretty-code on npm](https://www.npmjs.com/package/rehype-pretty-code)
- Next.js docs name rehype-pretty-code for syntax highlighting, `rehype-autolink-headings` for heading links and `remark-toc` for a table of contents. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Turbopack + `@next/mdx`: plugins are referenced by string name and options must be serialisable; function-valued options are not supported yet. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- Global element overrides go in `mdx-components.tsx` (e.g. mapping `img` to `next/image`); per-page overrides can be passed as a `components` prop; `@tailwindcss/typography`'s `prose` classes are the documented styling shortcut. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- MDX files can import and render React components directly. — [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
- `next-mdx-remote-client` 2.1.12 requires React >= 19.1.0; `next-mdx-remote` 6.0.0 was published Feb 2026. — [next-mdx-remote-client on npm](https://www.npmjs.com/package/next-mdx-remote-client), [next-mdx-remote on npm](https://www.npmjs.com/package/next-mdx-remote)

### Inferences
- Highlighting at build time (Shiki) ships zero client JS and is the right default for SEO and speed. Useful rehype-pretty-code features: dual light/dark themes through CSS variables, line and word highlighting, titles/captions (` ```ts title="app/page.tsx" {3-5} `), inline code highlighting. A small client "copy" button is the only JS needed.
- Because rehype-pretty-code setups often pass function options (custom transformers, `onVisitLine`), compile MDX in the content layer (Content Collections / Velite / Fumadocs) or with `next-mdx-remote-client` in an RSC rather than through `@next/mdx`, or keep to JSON-only options.
- Suggested plugin chain: `remark-gfm`, `remark-frontmatter` (if needed), `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code`. Add `remark-math` + `rehype-katex` only if writing maths.
- Table of contents: extract h2/h3 headings during the collection transform into a `headings` array (slug, text, depth) and render a sticky TOC component with an IntersectionObserver for the active section; this avoids injecting a TOC into the body and gives data for "on this page" links.
- Component vocabulary to register once: `Callout`, `Figure` (wraps `next/image` with caption and required alt), `Video` (Mux/YouTube/file), `CodeTabs`, `Steps`, `Tweet`/`YouTube` facades that render static HTML and load the iframe on click, `Demo` (wrapper that lazy-loads a client component with `next/dynamic` and reserves height to avoid layout shift), `ModelViewer`.
- Interactive demos: keep the post a Server Component and import small `'use client'` islands; for editable sandboxes use a lazily loaded Sandpack or link out to StackBlitz/CodeSandbox, since in-page sandboxes are heavy.
- If Keystatic edits the MDX, only components declared in its config are insertable from the UI; arbitrary imports inside MDX may not round-trip through its editor. Keeping a fixed registered component set solves both.
- MDX from the repo is trusted code. Never run MDX from untrusted sources (comments, external CMS without review) through the same pipeline.

### Gaps
- rehype-pretty-code and Shiki docs were not read directly; feature descriptions are from prior knowledge and should be checked against current docs (Shiki is now on a 4.x major).
- Not verified: Keystatic's current MDX field behaviour (`fields.mdx`) with custom components and how it preserves unknown JSX.
- No source consulted on Sandpack maintenance status or bundle cost in 2026.
- Fumadocs' built-in code block/TOC components could cover much of this, but its docs were not reviewed.

---

## 8. Authoring workflow

### Takeaway
With content in git, the workflow is: branch or `draft: true`, preview on a Vercel preview deployment, merge to publish; scheduled publishing needs either a daily cron-triggered rebuild/revalidation or a manual merge, because Hobby cron jobs run at most once per day with up to 59 minutes of drift.

### Cited Findings
- Hobby cron: up to 100 cron jobs per project, minimum interval once per day, per-hour precision (a `0 1 * * *` job fires anywhere between 1:00 and 1:59); more frequent expressions fail at deployment. Pro allows once per minute. — [Vercel cron usage and pricing](https://vercel.com/docs/cron-jobs/usage-and-pricing)
- Hobby deployment protection includes Vercel Authentication for preview and production deployments and shareable links; password protection is a Pro add-on at $20/month per protected project. Comments on previews are available on Hobby. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- Hobby: 100 deployments per day; deploy hooks 5 per project and 60 triggers/hour. — [Vercel Hobby plan](https://vercel.com/docs/plans/hobby), [Vercel limits](https://vercel.com/docs/limits)
- Draft Mode bypasses all caches for the browser holding the `__prerender_bypass` cookie and is designed for CMS preview URLs of the form `/api/draft?secret=...&slug=...`. — [Next.js Draft Mode guide](https://nextjs.org/docs/app/guides/draft-mode)
- `revalidateTag(tag, 'max')` in a Route Handler is the documented way to refresh cached content from an external trigger. — [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- Keystatic supports working on branches (`branchPrefix`). — [Keystatic GitHub mode](https://keystatic.com/docs/github-mode)
- Sanity's scheduled drafts and AI Assist require the Growth plan ($15/seat/month); TinaCloud lists "AI Features (Coming Soon)" from Team Plus. — [Sanity pricing](https://www.sanity.io/pricing), [Tina pricing](https://tina.io/pricing)

### Inferences
Drafts:
- Two complementary mechanisms: `draft: true` in frontmatter (file can live on `main` without being public) and feature branches (`post/<slug>`) for larger pieces. Show drafts when `VERCEL_ENV === 'preview'` or in development; never in production. Next.js Draft Mode is unnecessary for git-based content because preview deployments already serve that role; it matters only with an external CMS.

Previews:
- Every push to a branch gets a Vercel preview URL; keep previews non-indexable (Vercel Authentication on previews, plus `noindex` when `VERCEL_ENV !== 'production'`). Use a shareable link to send a draft to a client or reviewer.

Scheduled publishing on Hobby, options:
1. Content filter `publishedAt <= now` plus a daily Vercel cron hitting a route that triggers a deploy hook (or calls `revalidateTag('posts', 'max')` if listings are cached with a tag). Granularity: one day, up to about an hour late.
2. A scheduled GitHub Actions workflow calling the deploy hook at the exact time needed (not limited by Vercel's Hobby cron rules).
3. Time-based revalidation (`cacheLife`/`revalidate` of an hour) on listing pages so future-dated posts appear without any trigger; simplest, but post pages must also be generated on demand rather than only at build.
4. Just merge the PR when you want it live. For a solo writer this is often enough.

Speed aids:
- `pnpm new:post "Title"` script that scaffolds the folder, frontmatter and cover placeholder.
- CI checks on PRs: build (schema validation), link check, image alt lint, optional spell check. The schema is what stops SEO regressions (missing description, duplicate slug, unknown tag).
- Keep a `content/README` style guide inside the repo only if wanted; not required.

AI assistance:
- Files in the repo are the best substrate for AI help: an AI coding assistant can draft outlines, tighten prose, generate alt text and meta descriptions, propose internal links and check frontmatter against the schema directly on the MDX files, with changes reviewed as diffs. This is a concrete advantage of git-based content over a hosted CMS whose AI features are paywalled.
- Keep first-hand detail (numbers, decisions, screenshots from real projects) human-written; use AI for editing, summarising and metadata. Consider adding an `/llms.txt` and clean markdown feeds if AI-search visibility is a goal (covered by SEO research, not here).

Cross-posting:
- Publish on the site first; when syndicating to Dev.to, Hashnode or Medium set their canonical URL field to the original post so the portfolio keeps the ranking signal. LinkedIn has no canonical field: post a summary with a link instead of the full text. Dev.to and Hashnode have APIs/RSS import that can be driven from a small script or GitHub Action on merge. RSS at `/rss.xml` also feeds newsletter tools.

### Gaps
- Cross-posting platform behaviour (canonical support, APIs, RSS import) was not verified against Dev.to/Hashnode/Medium documentation in this session.
- GitHub Actions schedule reliability/latency was not sourced.
- Did not verify whether Keystatic exposes a native "draft" or scheduled-publish concept beyond branches; assumed not.
- No sourced data on how often solo developers actually need scheduling; recommendation 4 is opinion.

---

## Overall recommendation (synthesis for the report writer)

### Takeaway
Adopt git-based MDX with a typed, Zod-validated content layer and Keystatic as the admin UI; this fixes the non-persistent admin, costs nothing, keeps the site fully static, and has the least lock-in.

### Cited Findings
- All supporting facts are cited in sections 1-8; the key ones: Keystatic free and commit-based ([docs](https://keystatic.com/docs/github-mode), [cloud](https://keystatic.com/docs/cloud)); Content Collections supports Next 16 ([npm](https://www.npmjs.com/package/@content-collections/next)); Contentlayer unmaintained ([repo](https://github.com/contentlayerdev/contentlayer)); Hobby image quota 5,000 transformations with 402 on overage ([Vercel](https://vercel.com/docs/image-optimization/limits-and-pricing)); Hobby cron once per day ([Vercel](https://vercel.com/docs/cron-jobs/usage-and-pricing)); Hobby is non-commercial only ([Vercel](https://vercel.com/docs/limits/fair-use-guidelines)).

### Inferences
Suggested migration order:
1. Lock down or remove `PUT /api/content` and `/admin`.
2. Split `content/content.json` into `content/site/*.yaml` singletons and `content/work/<slug>/index.mdx` entries; keep slugs.
3. Add the content layer with schemas from section 4 and move pages to typed queries in `src/lib/content/`.
4. Add `/blog`, `/blog/[slug]`, tag pages, RSS, per-post OG images; extend `sitemap.ts`.
5. Add Keystatic (`/keystatic`) in local mode, then GitHub mode in production.
6. Add the MDX component set and code highlighting.
7. Only if needed later: image CDN loader, Mux, R2.

Decision points for the owner:
- Whether the site counts as commercial under Vercel's definition (services + lead capture suggest it may), which decides Hobby vs Pro.
- Whether an in-browser admin is actually wanted; if not, skip Keystatic and write MDX in the editor.
- Whether instant publish without rebuild matters; if yes, Sanity is the alternative path.

### Gaps
- None of the recommended stack was installed or built against this repo in this research; compatibility rests on declared peer ranges and documentation.
