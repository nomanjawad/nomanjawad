/* ============================================================
   CONTENT SCHEMA — shared between portfolio and admin
   Stored in localStorage under key `noman.content.v1`
   ============================================================ */
(function(global){
  const STORAGE_KEY = 'noman.content.v1';

  const DEFAULT_CONTENT = {
    // identity
    identity: {
      name: "Noman E Jawad",
      shortName: "Noman Jawad",
      role: "Web Developer",
      location: "Dhaka, Bangladesh",
      timezone: "UTC+6",
      email: "nomanzawad@gmail.com",
      phone: "+880 1713-289142",
      cv: "https://drive.google.com/file/d/1o_Lzd95CZgJFvsqXuC1bd3RCsmSHyc2P/view?usp=sharing",
      availability: "Available for freelance · April 2026",
      availableNow: true,
      photo: "assets/noman.jpeg", // can be base64 dataURL after upload
    },

    // hero
    hero: {
      command: "whoami --verbose",
      headlineBefore: "Noman ",
      headlineAfter: "E Jawad",
      subtitle: "<span class='hl'>Web developer</span> building <span class='hl'>fast, thoughtful</span> sites out of Dhaka. Three-plus years of React, Next.js, and the web platform done properly — typographic, accessible, production-grade.",
      primaryCta: { label: "See work", href: "#work", arrow: "↓" },
      secondaryCta: { label: "Get in touch", href: "#contact", arrow: "↗" },
      sidecard: [
        { k: "role", v: "Web Developer" },
        { k: "based", v: "Dhaka, BD (UTC+6)" },
        { k: "stack", v: "React · Next · TS" },
        { k: "status", v: "Freelance + FT" },
        { k: "since", v: "2023" },
      ],
    },

    // marquee
    marquee: ["React","Next.js","TypeScript","Tailwind","Three.js","GSAP","Framer Motion","WordPress","Webflow","Node"],

    // about
    about: {
      sectionNum: "§01 — About",
      sectionTitle: "Who, <em>what,</em> where.",
      sectionMeta: "<b>Dhaka, Bangladesh.</b> Building for clients across three continents. Writing code as if I'll have to read it in five years.",
      body: [
        "Hi — I'm <em>Noman</em>. I build fast, accessible web products from Dhaka, mostly in React and Next.js.",
        "I care about the things that survive the quarterly redesign: type hierarchy, focus states, the feel of a page under the thumb at 3G.",
        "When a spec is thin, I prototype. When the spec is fat, I prune it. Either way the ship date holds.",
      ],
      meta: [
        "// Currently booking engagements through Q3 2026. Happy to scope: landing pages, design-led marketing sites, migrations from no-code, and front-end builds against existing design systems.",
        "// Outside of work: black coffee, long walks through Dhanmondi, and the ongoing project of reading every RFC worth reading.",
      ],
      stats: [
        { n: "03", suffix: "+", l: "Years shipping" },
        { n: "20", suffix: "+", l: "Projects delivered" },
        { n: "12", suffix: "",  l: "Happy clients" },
        { n: "100", suffix: "%", l: "On-time rate" },
      ],
    },

    // work / projects
    work: {
      sectionNum: "§02 — Recent Work",
      sectionTitle: "Selected <em>builds.</em>",
      sectionMeta: "A short list, by design. Full case studies open inline.",
      footNote: "More on request — <span style='color:var(--fg)'>email for full portfolio</span> →",
    },
    projects: [
      {
        id: "aurora",
        slug: "aurora-commerce.mdx",
        name: "Aurora Commerce",
        label: "01 / Aurora",
        description: "A headless storefront for a small batch furniture studio. Custom checkout, mobile-first merchandising, ~94 LCP on 4G.",
        role: "Lead front-end",
        year: "2025 — 2026",
        client: "Independent studio",
        stack: ["Next.js","TypeScript","Shopify Hydrogen","Tailwind","Sanity"],
        liveUrl: "#",
        thumbnail: null, // optional base64
        kicker: "Project 01 / E-commerce",
        summary: "A headless storefront that respects the product. <em>Built for a small-batch furniture studio</em> who wanted their site to feel like their showroom — quiet, deliberate, easy to move through.",
        duration: "11 weeks",
        problem: "The studio had moved off a no-code builder that was costing them conversions and looking nothing like their print catalog. The brand had a voice; the site did not.",
        approach: "I started by matching the catalog's typographic discipline — one serif, one mono, generous margins. Then I rebuilt checkout from the card up. Image detail pages were made touchable: swatch swaps, spec drawers, and a cart that slides rather than page-jumps.",
        solution: "Headless Shopify on Next.js App Router with a Sanity editorial layer. All media served AVIF with responsive art direction. Edge-cached product pages, incremental revalidation on stock change. ~94 mobile Lighthouse.",
        outcome: "Conversion up <em>41%</em> on the first month, mobile LCP halved, returns down because the product pages finally showed dimension and material. The studio now edits copy without calling me — which is the correct outcome.",
      },
      {
        id: "helios",
        slug: "helios-dashboard.mdx",
        name: "Helios Dashboard",
        label: "02 / Helios",
        description: "An analytics surface for a solar-fleet operator. Dense data, interactive charts, keyboard-first navigation across six operator roles.",
        role: "Front-end + UX",
        year: "2025",
        client: "Energy client (NDA)",
        stack: ["React","TypeScript","D3","Tanstack Query","Vite"],
        liveUrl: "#",
        thumbnail: null,
        kicker: "Project 02 / Internal tool",
        summary: "An operator dashboard for a solar fleet. <em>Keyboard-first, dense, readable at 3am</em> when it needs to be.",
        duration: "16 weeks",
        problem: "Operators were bouncing between four vendor portals to triage a single incident. Every click was a tax during outages.",
        approach: "I ran a week of ride-alongs with dispatchers. Built the entire nav around their muscle memory — single-key jumps, a command palette for site search, a quiet visual language so alerts could cut through.",
        solution: "A React + Vite app backed by a thin BFF. Charts hand-written in D3 — no library. Six role-specific layouts sharing one permission schema. Everything reachable without a mouse.",
        outcome: "Triage time down from <em>~8 minutes to under 90 seconds</em> on the most common incident class. A dashboard people actually want to open.",
      },
      {
        id: "meridian",
        slug: "meridian-studio.mdx",
        name: "Meridian Studio",
        label: "03 / Meridian",
        description: "An editorial-leaning marketing site for a 5-person design studio. MDX-driven, CMS-light, reads like a magazine — loads like a text file.",
        role: "Design + Build",
        year: "2024",
        client: "Meridian",
        stack: ["Next.js","MDX","GSAP","Vercel"],
        liveUrl: "#",
        thumbnail: null,
        kicker: "Project 03 / Marketing",
        summary: "A marketing site that reads like a magazine and loads like a text file. <em>For a 5-person design studio</em> who wanted a home for their journal as much as their work.",
        duration: "5 weeks",
        problem: "Their old site buried the best thing they had: writing. It was a portfolio grid pretending to be a brand.",
        approach: "Reversed the hierarchy. Put the essays up front. Case studies became long-form, scroll-driven pieces. Navigation is a single page index — there are only nine pages, because you don't need more.",
        solution: "MDX content collections with a tiny Sanity layer for updates. GSAP for the one scroll sequence that earned it. Everything else is plain CSS. Typography is Instrument Serif and a stencil mono.",
        outcome: "Dwell time up <em>3.4×</em>. Two inbound leads in week one from the journal, not the work. The studio started writing more — the site changed their practice.",
      },
    ],

    // skills
    skills: {
      sectionNum: "§03 — Stack",
      sectionTitle: "Tools, <em>opinionated.</em>",
      sectionMeta: "Biased toward the web platform. I reach for a framework when it earns its weight.",
      rows: [
        { n: "01", items: ["React","Next.js","TypeScript","JavaScript"], context: "Core day-to-day. Three+ years, production-scale." },
        { n: "02", items: ["Tailwind","CSS","Framer Motion","GSAP"], context: "Styling & motion. I hand-write CSS more often than is fashionable." },
        { n: "03", items: ["Three.js","R3F","WebGL shaders"], context: "For moments that earn the GPU tax — not for every hero section." },
        { n: "04", items: ["WordPress","Webflow","Sanity","Contentful"], context: "When content velocity matters more than bleeding-edge." },
        { n: "05", items: ["Node","Vercel","Cloudflare","Postgres"], context: "Enough backend to keep the front-end honest." },
      ],
    },

    // experience
    experience: {
      sectionNum: "§04 — Experience",
      sectionTitle: "Where <em>I've been.</em>",
      sectionMeta: "A short resume. Full CV available on request.",
      rows: [
        { current: true, date: "2024 — PRESENT", role: "Independent Developer", org: "Freelance · Remote", desc: "Client work across e-commerce, dashboards, and editorial marketing sites. Booking Q3 2026.", tag: "CURRENT" },
        { current: false, date: "2023 — 2024", role: "Front-End Developer", org: "Digital agency · Dhaka", desc: "Shipped 8+ client sites on Next.js and WordPress. Owned the frontend from Figma to prod.", tag: "FULL-TIME" },
        { current: false, date: "2022 — 2023", role: "Junior Developer", org: "Agency · Dhaka", desc: "Started here. Learned the discipline of pixel-matching a comp, then learned when not to.", tag: "CONTRACT" },
      ],
    },

    // testimonials
    testimonials: {
      sectionNum: "§05 — Kind Words",
      sectionTitle: "Client <em>notes.</em>",
      sectionMeta: "Edited lightly for length. Real names on request.",
      quotes: [
        { quote: "Noman shipped the redesign on time and two points under Lighthouse budget. He pushes back when he should and defers when it doesn't matter — rare combination.", name: "A. Rahman", title: "Founder, independent e-commerce studio", meta: "Aurora Commerce · 2025" },
        { quote: "Fastest turnaround on a marketing site I've worked with. He reads the brief, asks one round of sharp questions, then disappears and delivers.", name: "S. Chen", title: "Creative Director", meta: "Meridian · 2024" },
        { quote: "We hired him to polish a dashboard and he ended up rearchitecting the state layer. The handoff was immaculate.", name: "M. Karim", title: "Engineering Lead", meta: "Helios · 2025" },
      ],
    },

    // contact
    contact: {
      sectionNum: "§06 — Contact",
      headline: "Let's build<br><em>something worth shipping.</em>",
      leadCopy: "Best for project inquiries. Expect a reply within one working day (Dhaka hours).",
      hours: "Sun–Thu · 10:00 — 19:00 BST",
    },

    // social links
    social: [
      { label: "GitHub", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Read.cv", url: "#" },
      { label: "Dribbble", url: "#" },
    ],

    // footer
    footer: {
      copyright: "© 2026 Noman Jawad — All rights reserved",
      lastUpdated: "Last updated · Apr 2026",
      colophon: ["Instrument Serif + JetBrains Mono","Next.js · Vercel · Tailwind","Hand-built, 2026"],
    },
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_CONTENT);
      const parsed = JSON.parse(raw);
      // shallow merge top-level defaults so new fields appear if schema evolves
      const merged = structuredClone(DEFAULT_CONTENT);
      for (const k in parsed) merged[k] = parsed[k];
      return merged;
    } catch(e) {
      console.warn('content load failed, using defaults', e);
      return structuredClone(DEFAULT_CONTENT);
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    // broadcast to open tabs
    try {
      window.dispatchEvent(new CustomEvent('noman:content-updated'));
    } catch(e){}
  }

  function reset() { localStorage.removeItem(STORAGE_KEY); }

  global.NomanContent = {
    STORAGE_KEY,
    DEFAULT: DEFAULT_CONTENT,
    load,
    save,
    reset,
  };
})(window);
