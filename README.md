<div align="center">

# Noman E Jawad

**Freelance Next.js & full-stack developer · Dhaka, Bangladesh · remote worldwide**

Your idea, in any form, built into one production codebase: typed, tested, documented.

[**nomanjawad.com →**](https://www.nomanjawad.com)

<br />

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

This repository is the source for my portfolio site. It is a small Next.js app with no CMS and no database: the content lives in one JSON file, the copy lives in one TypeScript file, and a password-protected admin page edits the JSON in place.

## What's on the site

The home page is a scroll story rather than a stack of sections. Each beat answers one question a client has before they get in touch.

| Beat | What it shows |
|---|---|
| **Story** | A pinned hero that walks from brief to launched site to shipped code, with an orb that follows the pointer |
| **Proof** | Logos and counts of the businesses running on sites I built |
| **Screens** | One component rendered at phone, tablet, desktop and print widths |
| **Compare** | A drag slider between the idea you bring and the page it became |
| **Process** | The steps a project goes through, from first call to hand-off |
| **Routes** | An interactive diagram: your idea on the left, your preferred stack on the right, one codebase in the middle. Hover a tool to trace its route |
| **Testimonials, About, Experience, Ways to work, FAQ** | The usual, kept short |
| **Contact** | A fill-in-the-blanks brief that opens in your mail app. Nothing is posted to a server |

Also: a command palette (⌘K), a motion toggle that honours `prefers-reduced-motion`, Open Graph images generated per page, JSON-LD structured data, and a sitemap.

Case studies exist in the content file but are hidden behind a flag until the write-ups are ready.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router, React 19 | Static pages with ISR, server components for content loading |
| Language | TypeScript, strict | The content file is typed end to end, so a shape change shows up at build time |
| Styling | Plain CSS with custom properties | Two stylesheets, no build step, easy to theme |
| Motion | GSAP + Lenis | Pinned scroll story and smooth scrolling; both pause for reduced motion |
| Fonts | Kanit and JetBrains Mono via `next/font` | Self-hosted, no layout shift |
| Analytics | Vercel Analytics, Speed Insights, Google Tag Manager | All production-only |
| Hosting | Vercel Hobby | Custom domain, preview deploys per branch |

## Project structure

```
content/
  content.json           Everything the admin edits: identity, hero, projects, skills, experience, contact
docs/                    Design reviews and the scroll-story plan
public/
  assets/                Photos and images
  new_cv.pdf             Downloadable CV
src/
  app/
    layout.tsx           Root metadata, fonts, analytics and GTM
    (site)/              Public pages: home, /work, /work/[slug], 404
    admin/               Content editor, behind HTTP basic auth
    api/content/         Reads and writes content.json for the admin
    opengraph-image.tsx  Share image, also per work page
    robots.ts, sitemap.ts
  components/
    client/              Interactive pieces: Story, Routes, Compare, CommandPalette, ContactForm, Tracking
    sections/            Server-rendered home sections
    layout/              Nav and Footer
    ui/                  Mesh backgrounds, mock screens, work cards
  lib/
    content.ts           Loads and writes content.json
    homeCopy.ts          Headlines and body copy for each home section
    site.ts              Site URL, feature flags, production check
    track.ts             dataLayer helper used by Tracking.tsx
    types.ts             The Content type
  proxy.ts               Basic-auth guard for /admin and the content API
```

## Editing content

**Structured content** (name, role, availability, projects, skills, experience, testimonials, social links) is in `content/content.json`. Edit it by hand or through the admin page at `/admin`, which writes the file back and revalidates the affected pages. Commit the result so the change survives the next deploy.

**Section copy** (headlines, leads, FAQ questions, the routes diagram labels) is in `src/lib/homeCopy.ts`. It's plain strings, so a wording change is a one-line diff.

**Feature flags** are in `src/lib/site.ts`. The one you'll touch is `SHOW_WORK`, which turns the case study section, the `/work` pages and their sitemap entries on together.

## Running locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The admin page needs the two credentials below; without them it returns 503 rather than opening up.

```bash
pnpm build && pnpm start   # production build, what Vercel runs
npx tsc --noEmit           # type-check only
```

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `ADMIN_USER` | Vercel + local | Username for `/admin` basic auth |
| `ADMIN_PASSWORD` | Vercel + local | Password for `/admin` basic auth |
| `NEXT_PUBLIC_SITE_URL` | Vercel | Public origin for canonical URLs, sitemap and share images. Set to `https://www.nomanjawad.com` |
| `VERCEL_ENV` | Set by Vercel | Marks the production deployment. Previews are not indexed and send no analytics |

## Analytics and events

Analytics only load when `VERCEL_ENV` is `production`, so local work and preview deploys never pollute the numbers.

Custom events are pushed to the Tag Manager `dataLayer` from `src/components/client/Tracking.tsx`, one delegated listener plus `data-track` attributes on buttons. Tag Manager forwards them to GA4.

| Event | Fires when |
|---|---|
| `brief_sent`, `brief_copied` | The contact brief is sent to the mail app or copied |
| `email_click`, `email_copy`, `phone_click` | Any contact channel is used, with the section it happened in |
| `cta_click` | A hero or story button is clicked, with its label |
| `case_study_open` | A case study is opened, with its slug |
| `route_hover` | A tool in the routes diagram is traced |
| `faq_open` | A question is expanded |
| `palette_open` | The command palette opens, by button or keyboard |
| `section_seen` | Each home section first scrolls into view |

The first five are the ones that count as leads.

## Deployment

Pushes to `main` deploy to production on Vercel. Every other branch gets a preview URL. The install command is pinned in `vercel.json` so the build uses pnpm 10.

---

## About me

Full-stack developer with five-plus years shipping production web apps. React and Next.js on the front, Laravel and Node on the back, WordPress and WooCommerce when they're the right tool. Projects start from whatever you have, a brief, a sketch or a design file, and end as a pixel-accurate build your team can run.

Currently leading a small team at SkyTech Solutions: architecture, code review, mentoring and end-to-end delivery. Introduced AI-assisted workflows that cut typical delivery from about a month to about ten days.

**Frontend** `React` `Next.js` `Vue 3` `TypeScript` `Tailwind CSS`
**Backend** `Laravel` `Node.js` `Express` `GraphQL` `PHP`
**Data** `MySQL` `PostgreSQL` `Supabase`
**Commerce & CMS** `WooCommerce` `WordPress` `Shopify` `Webflow`
**Delivery** `GitHub Actions` `Vercel` `Stripe` `HubSpot`

### Open source

- [create-atomictemplate](https://www.npmjs.com/package/create-atomictemplate), a Next.js + React project starter on npm
- [vue-laravel-boilerplate](https://github.com/nomanjawad/vue-laravel-boilerplate), Vue 3 + Laravel API architecture for client builds
- [wordpress-node](https://github.com/nomanjawad/wordpress-node), React + headless WordPress over GraphQL

### Publication

IoT-Based Solar Automated Irrigation System, IEEE Xplore. [DOI: 10.1109/10653615](https://doi.org/10.1109/10653615)

### Contact

- **Site:** [nomanjawad.com](https://www.nomanjawad.com)
- **Email:** nomanzawad@gmail.com
- **LinkedIn:** [linkedin.com/in/nomanjawad](https://www.linkedin.com/in/nomanjawad/)

<sub>Client names in case studies are withheld under NDA.</sub>
