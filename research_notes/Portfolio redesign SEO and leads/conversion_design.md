# Conversion-focused design for a freelance / for-hire developer portfolio (as of October 2026)

Reader's note on evidence quality. Almost no controlled research exists on developer portfolio sites specifically. The hard data below comes from (a) general web-usability research (NN/g, Microsoft Research), (b) landing-page and lead-gen datasets (Unbounce, Portent, Google/Deloitte, HubSpot), and (c) small practitioner surveys and single-site A/B tests. Each finding is tagged:

- **[DATA]** large dataset or controlled study
- **[SURVEY]** survey or small sample
- **[CASE]** single-site A/B test or anecdote (direction only, do not generalise the size of the effect)
- **[OPINION]** practitioner advice with no data shown
- **[SNIPPET]** I only saw this in a search-result summary and could not open the primary page; treat as unverified

Studies older than 2023 are dated explicitly.

---

## 1. What do clients and recruiters actually look at on a portfolio, and for how long?

### Takeaway
The first screen has roughly 10 seconds to say what the developer does and for whom; hiring reviewers spend seconds to a few minutes in a first pass and care about real projects far more than site polish. There is no eye-tracking study of developer portfolios; the best direct evidence is one 60-person hiring-manager survey.

### Cited Findings
- **[DATA, 2011]** Average page visit lasts a little under a minute; the first 10 seconds decide whether a visitor stays. Leave rate falls sharply after ~30 seconds, and people who get past that often stay 2+ minutes. Based on Microsoft Research analysis of 205,873 pages and 2+ billion dwell times. Nielsen's conclusion: "To gain several minutes of user attention, you must clearly communicate your value proposition within 10 seconds." — [NN/g, How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- **[DATA, 2011]** Users have time to read only about a quarter of the text on pages they visit. — [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- **[SURVEY]** Profy.dev survey of 60+ hiring managers: 93% would look at a portfolio site if a candidate provided one, but 51% said a candidate's chances would not be lower without one. The survey's own headline is "don't waste your time on a React portfolio website". — reported in [Scrimba, 26 Mar 2026](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/); original at [dev.to/profydev](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- **[OPINION, citing the Profy survey]** Hiring managers spend "seconds, not minutes" on an initial portfolio review; strong project work counts, flashy animation does not. A clean GitHub profile with good READMEs already works as a portfolio. — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **[SURVEY, SNIPPET]** For design (not developer) portfolios: 54% of design managers spend 5–10 minutes on a candidate's portfolio and 11% more than 10 minutes, while recruiters do not read whole case studies. — [UX Collective](https://uxdesign.cc/ever-wonder-how-recruiters-look-at-your-design-portfolio-cc8dd1ecb698) (page returned 403; numbers from search summary only)
- **[SURVEY, older]** 84.1% of CEOs, CTOs and founders said they look at an applicant's GitHub project work as an important indicator of on-the-job skill, ranked above years of experience. — [ITPro Today](https://itprotoday.com/it-management/developers-show-your-github-project-to-attract-job-offers) (date and sample not verified; SNIPPET)
- **[OPINION]** Reviewers look for three signals: evidence of real work (not tutorial clones), ability to explain what was built and why, and technical judgement. — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **[OPINION, employer side]** Index.dev's June 2025 guide for employers on evaluating a freelance developer's portfolio exists and is worth reading as the buyer's checklist. — [Index.dev](https://www.index.dev/blog/evaluate-freelance-developer-portfolio) (not opened; content not verified)

### Inferences
- Two audiences read differently. Recruiters and non-technical clients skim the hero, project titles and outcomes. Technical hiring managers go deeper on one or two projects and the code. The page should work for a 10-second skim and a 5-minute read.
- The six case-study pages are the developer's strongest asset; the home page's job is to get the right visitor to one of them or to the contact action within one screen.
- Because 51% of hiring managers say the absence of a portfolio does not hurt, the site's value for job-seeking is as a tie-breaker and proof store, while for freelance clients it is the main sales page. Design for the client first.

### Gaps
- No eye-tracking or session-recording study of developer portfolios was found.
- A search summary claimed "80% of recruiters spend under three minutes reviewing portfolios" and "under 30 seconds" but I could not tie it to a specific source. Do not cite it.
- A claim that "73% of hiring managers consider a strong portfolio more important than a perfect resume (Stack Overflow Developer Survey 2024)" appeared in a search summary. The Stack Overflow survey polls developers, not hiring managers, so this attribution is very likely wrong. Do not use it.
- No data on how freelance clients (as opposed to employers) read developer sites.

---

## 2. Hero / above the fold

### Takeaway
Plain, specific, low-reading-level copy that states who you help and what result they get is the best-supported choice; a real photo helps trust; heavy animation and 3D have no positive conversion evidence and a clear speed cost.

### Cited Findings
- **[DATA, 2024 report]** Unbounce Conversion Benchmark Report (41,000+ landing pages, 464M visitors, 57M conversions): pages written at a 5th–7th grade reading level convert at 11.1%, 56% higher than 8th–9th grade copy and about double professional-level copy (5.3%). — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[DATA, 2024 report]** Same dataset: conversion correlates negatively with difficult (3+ syllable) words (-24.3%), word count (-18.6%) and reading time (-19.4%). — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[DATA, 2011]** A clear value proposition within 10 seconds is what earns longer attention. — [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- **[DATA, qualitative, older]** NN/g found auto-forwarding carousels are ignored and read as ads (banner blindness), and movement pulls attention away from key content. — summarised by [Yale Usability](https://usability.yale.edu/usability-best-practices/hero-imagescarousels) and [SmashBrand](https://www.smashbrand.com/articles/5-web-design-trends-you-should-ditch-right-now/)
- **[DATA, eye-tracking, older, SNIPPET]** NN/g eye-tracking: visitors look closely at photos of real people and skip generic stock images. — secondary report at [CountingWorks](https://www.countingworkspro.com/blog/why-real-photos-not-stock-shots-make-your-firm-instantly-more-trustworthy)
- **[DATA, older infographic, SNIPPET]** In an analysis of 18,639 landing pages, pages with one link/CTA averaged 13.5% conversion versus 11.9% with two and 10.5% with three. — [MarketingProfs, 2018](https://www.marketingprofs.com/charts/2018/33935/what-converts-web-landing-page-benchmarks-and-trends-infographic) (page 403; who ran the study not verified)
- **[OPINION]** "CTA fatigue" is not a blanket rule; a secondary CTA is fine when it serves a different intent, but home pages should focus on one main action. — [Foundry CRO, 2026](https://foundrycro.com/blog/cta-button-conversion-rate-benchmarks-2026/)
- **[OPINION, vendor]** 3D/animation vendors claim longer time on page and "higher perceived value" from 3D heroes; none published controlled conversion data. — [Mindactive](https://mindactive.com/?p=14347)
- **[DATA]** Speed cost is real: see section 7 (0.1 s faster mobile load gave +21.6% form submissions on lead-gen sites; 1 s vs 5 s load is a 3x conversion gap on B2B lead-gen sites). — [web.dev](https://web.dev/case-studies/milliseconds-make-millions), [Portent](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm)

### Inferences
- A workable headline formula from the evidence: [what you build] for [who] + [outcome or proof], in short words. Example shape: "I build fast Next.js and WooCommerce sites for growing businesses. 6 shipped projects. Replies within 24 hours." (Example wording is mine, not tested.)
- One primary CTA (start a project / book a call) and one lower-commitment secondary CTA (see work) matches the single-goal evidence while serving both the ready and the browsing visitor.
- An availability badge ("Available for new projects from November", "Open to remote full-time roles") is cheap, specific, and answers a question both audiences have. No test data found; it is an inference from the value-proposition research.
- 3D and AI work are selling points for this developer. The safe pattern is to show 3D as a project or a lazy-loaded, click-to-run demo below the fold, with a static poster image in the hero, so the first paint stays fast and `prefers-reduced-motion` is respected.
- A real headshot is supported by the trust evidence, and matters more for an offshore freelancer because it answers "is this a real person?".

### Gaps
- No controlled test of photo vs no photo on freelancer sites found.
- No controlled test of availability badges found.
- No independent study measuring bounce or conversion of WebGL/3D heroes found; only vendor claims.

---

## 3. CTA design and placement; contact channel; form length

### Takeaway
A non-working contact form is the single biggest leak on the current site. The evidence supports a short form (about 3 fields plus one message box), a visible email fallback, an optional booking link, and a fast reply; reply speed is one of the best-documented levers in lead conversion.

### Cited Findings
- **[DATA, HubSpot, older]** HubSpot analysis of 40,000+ landing pages: conversion falls only slightly as single-line text fields increase, but multiple textareas and multiple dropdowns are linked to clearly lower conversion. — [HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx)
- **[DATA, aggregated secondary, dates unclear]** Conversion by field count: 1 field 25.5%, 3 fields 25%, 4 fields 23%, 5 fields 20%, 6 fields 15%, 7 fields 12%. Attributed to HubSpot/Quicksprout/WPForms. — [Foundry CRO, 2026](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **[DATA, aggregated secondary]** Field-level drop-off: required phone field 5–15%, CAPTCHA 3.2%; about 55% of people who start a form abandon it. Attributed to Zuko/Formisimo. — [Foundry CRO](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **[DATA, aggregated secondary]** Generic "contact us" forms convert 1–3% of visitors; quote-request forms 8–12%. — [Foundry CRO](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **[DATA, 2011 and 2007]** HBR "The Short Life of Online Sales Leads" (March 2011), 2.24 million leads: firms that contacted leads within an hour were nearly 7x as likely to qualify them as those that waited over an hour, and 60x more likely than those waiting 24+ hours. The related 2007 MIT/InsideSales study found a 5-minute response was 21x more likely to qualify than 30 minutes. — [HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) (paywalled; figures via [HubSpot](https://blog.hubspot.com/sales/how-to-handle-the-ticking-time-bomb-that-is-an-inbound-lead))
- **[CASE, vendor]** Chili Piper claims booking links remove re-entry friction and cites a 70% lift in demo-form conversion for Gong; these are vendor claims for B2B SaaS sales teams. — [Chili Piper](https://www.chilipiper.com/calendly)
- **[CASE, e-commerce]** Sticky mobile CTA tests: +10% add-to-cart clicks and +9% orders at 95% confidence in one Zipify test; a typical range of 3–7% lift on mobile add-to-cart across Shopify stores. — [Zipify](https://zipify.com/mobile-sticky-button-split-test-results/), [Carty Labs](https://cartylabs.com/blog/shopify-sticky-add-to-cart-bar)
- **[DATA, 2024 report]** 83% of landing-page visits are on mobile, and desktop converts 8% better. — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[OPINION]** Case-study pages should each end in a CTA; freelancers who added clear CTAs and one outcome line per project reported more enquiries (anecdotal, no numbers). — [SolidGigs](https://solidgigs.com/blog/freelance-ux-improvements-that-lead-to-more-client-inquiries/)

### Inferences
- Recommended form: name, email, "what do you need?" (one textarea), plus an optional budget/project-type select. That is 3 required fields with one textarea, matching the HubSpot finding that extra textareas and dropdowns hurt most. Do not require a phone number.
- Label the form as a project enquiry ("Tell me about your project") rather than "Contact", since quote-style forms convert several times better than generic contact forms in the aggregated benchmarks.
- Offer three channels side by side: form, plain `mailto:` address (recruiters often prefer email), and a booking link for a 20–30 minute intro call. The booking link also solves time-zone negotiation because the tool shows slots in the visitor's zone.
- A response-time promise ("I reply within 24 hours, usually the same day in AEST/EST working hours") is backed by the lead-decay research in direction, though that research is about B2B sales teams, not freelancers. Only promise what will be kept; send an instant auto-acknowledgement email.
- Sticky header CTA on desktop and a sticky bottom "Hire me / Book a call" bar on mobile is low-cost; the lift evidence is from e-commerce, so expect a smaller effect.
- CTA placements that the evidence and practice support: hero, after the project grid, end of every case study, after testimonials, footer.
- Button copy: no reliable test data found for freelancer sites. First-person, specific labels ("Book a 20-min call", "Start a project") are practitioner convention.

### Gaps
- No independent data comparing contact form vs email link vs Cal.com/Calendly vs WhatsApp for freelancers. WhatsApp is common for South Asian and some AU small-business clients, but I found no conversion data; treat as an optional extra channel, not the primary one.
- No direct evidence on the effect of a stated response-time promise.
- The field-count table is an aggregation of old studies with different methods; the direction is reliable, the exact percentages are not.

---

## 4. Social proof and trust

### Takeaway
Named, specific testimonials placed near the decision points help, and anonymous ones are weak; the hidden testimonials section should be shown as soon as real, attributable quotes exist. Effect sizes come from single-site tests, so the direction is trustworthy and the numbers are not.

### Cited Findings
- **[CASE, older]** WikiJob moved three testimonials higher on the page and saw a 34% conversion lift. — [Wishpond roundup](https://wishpond.com/blog/10-easy-ab-tests-to-help-increase-conversions)
- **[CASE]** A video testimonial on a checkout page lifted conversion from 2.6% to 3.44% (+32% sales) for a Swedish driving-theory site. — [Trustmary](https://www.trustmary.com/blog/case-example-32-increase-in-sales-by-using-video-testimonial-on-check-out-page/)
- **[CASE, contradicting]** For Brookdale Living, a static image beat a 2-minute testimonial video by 3.92% in conversions. Video is not automatically better. — [VWO](https://vwo.com/success-stories/brookdale-living/)
- **[OPINION]** Testimonials should carry name, title, company and location rather than being anonymous. — [TechWyse](https://www.techwyse.com/blog/website-conversion/5-best-practices-for-testimonials-that-lead-to-increased-conversions)
- **[OPINION, no method shown]** "A name, a role and a photo triple credibility" versus an anonymous review; measurable results appear in about 20% of portfolios but have very high impact, while screenshots appear in 90% and have low impact. — [Kolonell, 2026](https://kolonell.com/en/blog/freelance-portfolio-win-clients-accra-2026) (numbers are unsourced estimates)
- **[SURVEY, older]** 84.1% of CEOs/CTOs/founders treat GitHub project work as an important skill indicator. — [ITPro Today](https://itprotoday.com/it-management/developers-show-your-github-project-to-attract-job-offers) (SNIPPET)
- **[OPINION]** A GitHub profile with good READMEs functions as a portfolio for technical reviewers. — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **[DATA, eye-tracking, older, SNIPPET]** Real photos of real people are examined; stock photos are skipped. — [CountingWorks citing NN/g](https://www.countingworkspro.com/blog/why-real-photos-not-stock-shots-make-your-firm-instantly-more-trustworthy)

### Inferences
- Priority order for this developer, cheapest first: (1) two or three named client quotes with role, company, country and a headshot or logo, each tied to a project; (2) one quantified result per case study; (3) client logos or "worked with" row if permission exists; (4) links to verifiable third-party profiles (LinkedIn recommendations, Upwork/Clutch reviews) because a visitor can check them; (5) GitHub/npm stats and publications for the technical audience.
- Verifiability matters more than volume for an offshore freelancer. A testimonial that links to the client's live site or LinkedIn profile is worth more than five unlinked ones.
- Put one short testimonial directly beside or under the contact form and one near the hero, following the WikiJob placement result.
- Text testimonials with photo are the sensible default; a video testimonial is a bonus only if it is short and does not slow the page.
- Publications and open-source work help the full-time-role audience more than small-business clients, so place them on the About page or a secondary section, not the hero.

### Gaps
- No controlled evidence on client logos, certifications, GitHub stars or publications on freelancer conversion.
- No data on whether Upwork/Clutch badges help or hurt on a personal site.
- All testimonial tests found are from e-commerce or consumer services and several are over five years old.

---

## 5. Case study structure that sells

### Takeaway
Practitioner consensus, with little hard data, is three to five case studies in a problem → approach → result shape with at least one measured outcome and a CTA at the end. The developer's six existing case-study pages are the right asset; the work is in adding outcomes, role clarity and a closing CTA.

### Cited Findings
- **[OPINION, no method shown]** "A portfolio built around 3 to 5 case studies converts inbound leads 2 to 3 times better than an image gallery." — [Kolonell, 2026](https://kolonell.com/en/blog/freelance-portfolio-win-clients-accra-2026) (no data source given)
- **[OPINION]** A case study should be a specific account of the problem, how it was solved and what happened as a result; showing deliverables without context forces clients to guess the freelancer's actual involvement. — [DEV Community](https://dev.to/alfred_p_c0ddb65b3df9fc36/how-to-write-case-studies-that-convert-portfolio-visitors-to-clients-2nkk), [Fueler](https://fueler.io/blog/how-to-build-a-freelance-portfolio-that-converts-visitors-into-clients)
- **[OPINION]** Useful developer metrics are of the form "site load time reduced from 5.8 s to 1.2 s, bounce rate down 28%" or "47% faster page load after redesign", with a CTA on every project page. — [NameSilo](https://www.namesilo.com/blog/en/website-development/real-life-examples-of-portfolio-layouts-that-skyrocket-client-inquiries)
- **[OPINION]** Hiring managers want at least one project that solves a problem someone would pay for, with the reason it was built. — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **[SURVEY, design field, SNIPPET]** Recruiters will not read a 10–15 minute case study end to end; managers spend 5–10 minutes on a whole portfolio. — [UX Collective](https://uxdesign.cc/ever-wonder-how-recruiters-look-at-your-design-portfolio-cc8dd1ecb698)
- **[DATA, 2011]** Readers take in about a quarter of page text. — [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)

### Inferences
- Suggested template per case study, written for the skim first:
  1. Title as an outcome ("WooCommerce rebuild that cut load time from X to Y"), not a project name.
  2. A summary strip at the top: client and country, the developer's role, stack, timeline, one to three result numbers, live link.
  3. Problem in two or three sentences in the client's terms.
  4. Approach: key decisions and trade-offs, with one diagram or screenshot per decision.
  5. Result: before/after numbers, client quote.
  6. CTA: "Have a similar project? Book a call" plus a link to the next case study.
- Where client business metrics are unavailable, use metrics the developer can measure alone: Lighthouse/Core Web Vitals before and after, build time, page weight, delivery time, uptime.
- Six projects is fine if the top three are marked as featured. Order by relevance to the target buyer (Next.js, WooCommerce, AI, 3D), not by date.
- The top summary strip serves the 10-second skimmer and the body serves the technical manager, which fits the two reading patterns in section 1.

### Gaps
- No A/B or analytics evidence on case-study length, structure or count for developer portfolios.
- I did not audit named examples of strong developer case studies; the report writer should not cite specific sites from these notes.

---

## 6. Positioning, niche, pricing, and the offshore trust gap

### Takeaway
Specialist positioning and visible "starting from" pricing are supported by weak survey data and practitioner experience, not by controlled tests; both mainly work by filtering for better-fit leads. No good data was found on how to close the offshore trust gap, so those recommendations are reasoned, not evidenced.

### Cited Findings
- **[SURVEY, low quality]** EarnifyHub survey of 300 freelancers (2026): web development generalists reported a median of $3,400/month versus $5,800/month for niche specialists (+71%); specialists earn 30–60% more per project. Self-reported, method not disclosed. — [EarnifyHub](https://earnifyhub.com/blog/freelancing/freelancing-income-report-2026)
- **[SURVEY, platform claim, SNIPPET]** Fiverr research says nearly 90% of clients seek freelancers with specialised skills. — reported by [Tools for Humans](https://www.toolsforhumans.ai/blog/why-your-freelance-rates-just-shifted-the-economics-of-independent-work-in-2026) (attribution from search summary; primary not seen)
- **[CASE, qualitative]** Solo consultant Pravin Kumar (70+ projects) published price bands (most projects between US$1,000 and US$10,000, fixed fee by scope). He reports "fewer total inquiries, but a much higher share of them are ready to buy", shorter sales cycles and fewer unqualified calls. No numbers given. — [pravinkumar.co, 2026](https://www.pravinkumar.co/blog/why-i-publish-my-pricing-solo-consultant-2026)
- **[OPINION]** A range or "starting at" price sets expectations while leaving room to quote. — [WPMU DEV](https://wpmudev.com/blog/?p=171283); debate summarised at [Speckyboy](https://speckyboy.com/should-freelancers-advertise-their-pricing.md)
- **[OPINION]** Commonly cited risks buyers see in offshore developers: communication problems, time-zone gaps, and inconsistent quality. — [Cortance](https://cortance.com/answers/remote-global/what-are-the-key-risks-of-hiring-offshore-developers)
- **[SURVEY, SNIPPET]** Clutch 2024 research is cited as finding the average offshore relationship lasts 14 months. — [Full Scale](https://fullscale.io/blog/offshore-development-due-diligence-checklist/) (secondary; not verified)

### Inferences
- Positioning: lead with one sharp statement rather than a list of four stacks. A reasonable option is "Next.js and WooCommerce developer for e-commerce and content sites, with AI and 3D features", with Laravel and WordPress shown as supporting skills. Separate short service pages (for example Next.js builds, WooCommerce stores, AI integrations, 3D web) give each buyer a landing page and help search.
- Two audiences, two paths: a "Hire me for a project" path (services, pricing, booking) and a "Hire me full-time" path (CV download, LinkedIn, experience, availability). One small switch or two CTAs in the hero is enough.
- Pricing: show two or three productised offers with "from" prices in USD or AUD (for example a fixed-scope landing page, a WooCommerce build, a monthly care plan) plus "custom quote". Expect fewer but better enquiries, as in the Kumar case. This is an untested expectation.
- Offshore trust gap, reasoned from the stated buyer concerns:
  - State working-hours overlap in the client's zone. Dhaka is UTC+6, so there is a natural afternoon overlap with Australian east-coast business hours and an evening overlap with US mornings; say the exact hours offered.
  - Show written English quality through the case studies themselves; this is the visitor's first sample of communication.
  - Name the process: weekly demo, written updates, staging link, milestone payments, contract and invoice, NDA on request.
  - Reduce payment risk: milestone billing, a paid small first task, or escrow via a platform for first-time clients.
  - Show verifiable identity: real photo, LinkedIn, GitHub, named clients in AU/US if any.
  - Do not hide the location. State it with the overlap hours; a hidden location discovered later costs more trust than it saves.

### Gaps
- No controlled evidence on generalist vs specialist positioning or on pricing transparency for freelance developers.
- No survey data specifically on what AU or US small-business clients worry about when hiring a Bangladesh-based developer.
- No data on the conversion effect of showing currency in AUD/USD or of time-zone statements.

---

## 7. Navigation / IA and UX: structure, speed, mobile, readability, dark vs light, accessibility

### Takeaway
Speed has the strongest numbers of anything in these notes: on lead-gen sites, small load-time gains produce large gains in form completion. Light mode reads better for most people, so offer both themes. Single-page vs multi-page has no decisive evidence; the existing hybrid (home page plus case-study pages) is sound.

### Cited Findings
- **[DATA, end of 2019]** Google/Deloitte/55 "Milliseconds Make Millions": 37 brand sites, 30M+ sessions, mobile. A 0.1 s improvement in load metrics on lead-generation sites gave +5.5% progression from home page to form step 1, +21.6% from form start to submission, and +7% page views. Retail conversion +8.4%, travel +10.1%, luxury progression to Contact Us +20.6%. — [web.dev](https://web.dev/case-studies/milliseconds-make-millions)
- **[DATA, April 2022 update of 2019 study]** Portent: 100M+ page views, 20 sites (14 B2B lead-gen). A B2B lead-gen site loading in 1 s converts 3x better than one loading in 5 s and 5x better than one at 10 s; the steepest drop is between 1 and 3 seconds. Note Portent's absolute "conversion rates" (about 40% at 1 s) use a loose goal definition, so use the ratios only. — [Portent](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm)
- **[DATA]** Core Web Vitals "good" thresholds at the 75th percentile: LCP under 2.5 s, INP under 200 ms, CLS under 0.1. — [web.dev vitals business impact](https://web.dev/case-studies/vitals-business-impact)
- **[CASE]** Vodafone Italy improved LCP by 31% and saw 8% more sales; Yelp cut FCP 45% for a 15% conversion gain. — [web.dev](https://web.dev/case-studies/vitals-business-impact)
- **[DATA, 2024 report]** 83% of landing-page traffic is mobile; desktop converts 8% better. — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[DATA, Feb 2020 review of lab studies]** NN/g: for people with normal vision, light mode gives better performance for reading and visual-acuity tasks, especially with small text; dark mode may help some low-vision users. NN/g recommends letting users switch. — [NN/g Dark Mode](https://www.nngroup.com/articles/dark-mode/)
- **[DATA, 2024 report]** Simpler words and shorter copy correlate with higher conversion. — [Unbounce](https://unbounce.com/conversion-benchmark-report/)

### Inferences
- Set a performance budget and treat it as a conversion feature: LCP under 2.5 s on a mid-range phone over 4G, INP under 200 ms, CLS under 0.1. On Next.js this means a static or server-rendered hero with no client-side 3D blocking first paint, `next/image`, font subsetting, and lazy-loading any Three.js canvas after interaction or when in view.
- Many visitors will be AU/US users on good connections, but recruiters often open links on phones. Test on throttled mobile.
- Theme: ship both, default to the system preference, and make sure the light theme is as polished as the dark one. Developer portfolios default to dark by habit; the evidence says body text reads better in light.
- IA: keep the home page as a long scroll that covers the pitch end to end, with separate indexable pages for each case study, services, and about/CV. Top nav of about five items with the primary CTA as a button on the right.
- Accessibility basics double as conversion basics: contrast ratios, focus states, labelled form fields with inline errors, reduced-motion support, real text rather than text in images.

### Gaps
- No evidence found comparing single-page and multi-page portfolios on leads.
- The Deloitte data is from 2019 mobile traffic on large brands; effect sizes on a small portfolio will differ.
- No data found on dark vs light theme and conversion, only reading performance.

---

## 8. Lead capture beyond the contact form; measurement; benchmarks

### Takeaway
Realistic visitor-to-enquiry rates for a service site are in the low single digits, so with portfolio-scale traffic the priority is measuring every contact action and fixing the main path, not adding popups or chat. A newsletter or lead magnet is optional and only worth it if the developer will publish regularly.

### Cited Findings
- **[DATA, 2024 report]** Median landing-page conversion across industries is 6.6%, with an industry range of 3.8% to 12.3%. These are campaign landing pages, which convert better than general websites. — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[DATA, SNIPPET]** Median B2B website visitor-to-lead rate of 2.3% (February 2025, attributed to HubSpot), top quartile 4.7%+. — [Surface](https://withsurface.com/blog/b2b-lead-conversion-benchmarks-for-2025) (attribution not verified at source)
- **[OPINION / aggregated]** Typical service sites turn about 2–4% of visitors into leads. — [SolidGigs](https://solidgigs.com/blog/freelance-ux-improvements-that-lead-to-more-client-inquiries/)
- **[DATA, aggregated secondary]** Generic contact forms 1–3%; lead-magnet downloads about 23% of landing-page visitors; newsletter sign-ups about 1.95%. — [Foundry CRO](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **[DATA, 2024 report]** Conversion by traffic source on landing pages: email 19.3%, paid social 12%, paid search 10.9%. Warm traffic converts far better than cold. — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **[DATA, vendor]** Exit-intent popups average 3.94% conversion across 1B+ displays (vendor dataset, mostly e-commerce offers). — [Flint](https://www.flint.com/blog/exit-intent-popup-conversion-statistics)
- **[DATA, vendor]** Chat vendors claim live chat converts 3–5x better than static forms (about 8% vs 3–5%). Vendor-sourced and assumes someone answers quickly. — [Hyperleap](https://hyperleap.ai/blog/ai-chatbot-vs-live-chat-vs-contact-form), [Databox](https://databox.com/forms-vs-chat)

### Inferences
- Benchmark to plan with: 1–3% of all visitors making an enquiry is normal for a service site; 3–5% is good. At 300 visits a month that is 3 to 15 enquiries, so small-sample noise is large and A/B testing is not practical. Use before/after comparisons over 4–8 weeks and qualitative session review instead.
- Track these events (Vercel Analytics custom events are already available since Vercel Analytics is installed; GA4, Plausible or PostHog also work): hero CTA click, nav CTA click, case-study view, case-study end-CTA click, form start, form submit success, form error, email link click, booking link click, booking completed, CV download, outbound GitHub/LinkedIn clicks. Report by source and landing page.
- Skip exit-intent popups and live chat for now. Popups have no evidence in this context and risk annoying professional visitors; chat needs a fast human reply the solo developer cannot guarantee across time zones. An honest alternative is the response-time promise plus booking link.
- If adding one secondary capture, a low-effort option is a short blog/notes section where each technical post ends with a relevant service CTA. A lead magnet (for example a WooCommerce speed checklist) only pays off with traffic and follow-up emails.
- Since warm traffic converts several times better than cold, the site's role in outreach matters: links from proposals, LinkedIn and Upwork should land on the most relevant case study or service page, not the home page.

### Gaps
- No published conversion benchmark specific to freelance developer portfolios.
- No independent evidence on newsletters, lead magnets, exit intent or chat for solo developers.

---

## 9. Practical tooling for the contact pipeline on Next.js / Vercel

### Takeaway
A Next.js server action that validates with Zod, checks a honeypot and Cloudflare Turnstile, then sends via Resend is the standard free-tier pipeline in 2026; a hosted form backend (Web3Forms, Formspree) is the faster no-backend alternative. All fit a zero-cost budget at portfolio volumes.

### Cited Findings
- **Resend free tier (2026):** 3,000 emails/month, 100/day, one verified domain, 30-day log retention. — [CostBench](https://costbench.com/software/email-api/resend/free-plan/), [Automation Atlas](https://automationatlas.io/answers/resend-free-tier-explained-2026/)
- **Web3Forms free tier:** 250 submissions/month, unlimited forms and domains, spam protection and hCaptcha integration; webhooks and file uploads are paid. — [Web3Forms pricing](https://web3forms.com/pricing)
- **Formspree free tier:** 50 submissions/month, 30-day history, up to two linked notification emails. — [Formspree help](https://help.formspree.io/articles/account-management/account-limits)
- **Cloudflare Turnstile:** free plan has unlimited challenges and up to 20 widgets; no Cloudflare DNS required. — [Cloudflare docs](https://developers.cloudflare.com/turnstile/plans/)
- **Pattern in the wild:** Next.js 16 App Router + React 19 `useActionState` + Zod + Resend + honeypot template. — [GitHub: JPerez00/resend-email-template](https://github.com/JPerez00/resend-email-template)
- **Server action pitfalls:** server actions give no storage, spam filtering or rate limiting by default; common bugs are errors swallowed after `redirect()`, pending state not updating when the submit button is outside the form, and mail landing in spam when the sending domain is unverified. Recommended layered spam defence: honeypot, minimum time-to-submit check, rule-based scoring. — [Splitforms, 2026](https://splitforms.com/blog/server-actions-vs-form-backend-nextjs) (vendor blog; technical points are checkable)
- **CAPTCHA cost:** a visible CAPTCHA is associated with about 3.2% form drop-off. — [Foundry CRO](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **Cal.com:** free plan includes unlimited bookings and event types; React embed via `@calcom/embed-react`. — [PkgPulse, 2026](https://www.pkgpulse.com/guides/cal-com-vs-calendly-vs-nylas-scheduling-calendar-apis-2026)
- **Cal.com embed gotcha:** inline embeds in Next.js can auto-scroll the page to the calendar on load. — [DEV Community](https://dev.to/mohymenul/troubleshooting-automatic-scrolling-to-calcom-inline-embed-on-page-load-28g3)

### Inferences
- Recommended build for this site (Next.js 16 on Vercel):
  1. Server action: Zod validation, honeypot field, time-to-submit floor, Turnstile token verification (managed/invisible mode to avoid the CAPTCHA drop-off), simple per-IP rate limit.
  2. Send two emails via Resend from a verified domain with SPF/DKIM/DMARC: a notification to the developer (reply-to set to the visitor) and an auto-acknowledgement to the visitor that restates the reply-time promise and includes the booking link.
  3. Keep a second record of every submission (a database row, a Google Sheet webhook, or a Slack/Telegram/WhatsApp notification) so a mail failure never loses a lead.
  4. Show clear inline success and error states, keep the typed message on error, and always show the plain email address as a fallback.
  5. Fire analytics events for form start, success and failure.
- Fastest fix if time is short: point the existing form at Web3Forms (250/month free) today, then move to the server action + Resend build later.
- Cal.com: use the popup/modal embed triggered by a button, or a plain link, rather than an inline embed on the home page. This avoids the scroll bug and keeps third-party script off the initial load.
- Test the pipeline monthly with a real submission; a silently broken form is the current state of the site and the most expensive failure mode.

### Gaps
- Free-tier limits change often; the Resend and Cal.com figures come from third-party trackers, so confirm on the vendors' own pricing pages before building.
- No comparative deliverability data for Resend versus hosted form backends found.

---

## 10. Common mistakes on developer portfolios that cost leads

### Takeaway
The costliest mistakes are functional and structural, not aesthetic: a contact path that does not work, a hero that does not say what is offered, projects with no outcomes, and a slow or motion-heavy first screen. This site currently has the first of these and hides its testimonials.

### Cited Findings
- **Unclear value proposition in the first 10 seconds** loses most visitors. **[DATA, 2011]** — [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- **Slow load:** 1 s vs 5 s is a 3x conversion gap on B2B lead-gen sites **[DATA, 2022]**; 0.1 s matters for form completion **[DATA, 2019]**. — [Portent](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm), [web.dev](https://web.dev/case-studies/milliseconds-make-millions)
- **Flashy animation over substance:** hiring managers value project work, not animation. **[OPINION citing SURVEY]** — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **Tutorial clones and todo apps** instead of real problems. **[OPINION]** — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/)
- **Screenshots without context or role**, leaving the client to guess what the developer did. **[OPINION]** — [Fueler](https://fueler.io/blog/how-to-build-a-freelance-portfolio-that-converts-visitors-into-clients)
- **Jargon-heavy, long copy:** professional-level reading difficulty converts at about half the rate of simple copy. **[DATA, 2024]** — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- **Long or awkward forms:** extra textareas, dropdowns and required phone fields reduce completion. **[DATA, older]** — [HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx), [Foundry CRO](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- **Slow replies:** qualification odds fall steeply within the first hour. **[DATA, 2011]** — [HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)
- **Anonymous or missing testimonials.** **[OPINION + CASE]** — [TechWyse](https://www.techwyse.com/blog/website-conversion/5-best-practices-for-testimonials-that-lead-to-increased-conversions), [Wishpond](https://wishpond.com/blog/10-easy-ab-tests-to-help-increase-conversions)
- **Hidden pricing** pushes some buyers to a competitor who shows it. **[OPINION]** — [pravinkumar.co](https://www.pravinkumar.co/blog/why-i-publish-my-pricing-solo-consultant-2026)
- **Dark-only themes with small text** read worse for most users. **[DATA, 2020]** — [NN/g](https://www.nngroup.com/articles/dark-mode/)
- **Unverified sending domain** sends form mail to spam. **[OPINION, technical]** — [Splitforms](https://splitforms.com/blog/server-actions-vs-form-backend-nextjs)

### Inferences
- Priority list for this specific site, highest expected return first:
  1. Wire the contact form end to end, add an email fallback and an auto-reply. Until this is done every other change is wasted.
  2. Rewrite the hero: who it is for, what is built, one proof point, one primary CTA, availability, real photo.
  3. Add a top summary strip with result numbers and an end CTA to each of the six case studies.
  4. Collect and publish two or three named testimonials; unhide the section.
  5. Add a booking link and state time-zone overlap and reply time.
  6. Set and meet a performance budget; gate 3D behind lazy loading.
  7. Add event tracking for every contact action.
  8. Add services with "from" pricing and separate client and employer paths.
  9. Offer light and dark themes.
- Skills lists with progress bars or logo walls are a common portfolio pattern that tells a buyer little. No data found; replacing them with "what I can build for you" grouped by service is consistent with the value-proposition evidence.

### Gaps
- No study ranks portfolio mistakes by measured lead loss; the ordering above is my judgement from the strength of the underlying evidence.

---

## Source reliability summary for the report writer

- Strongest: NN/g (2011 dwell time; 2020 dark mode), Google/Deloitte (2019), Portent (2022), Unbounce Conversion Benchmark Report (2024), HBR lead response (2011). All are general web or lead-gen research, not portfolio-specific, and most predate 2023.
- Medium: Profy.dev hiring-manager survey (n≈60, date not confirmed, seen via secondary reports); HubSpot form-field study (old); vendor pricing pages.
- Weak, use for direction only: single-site A/B tests, EarnifyHub freelancer survey, Kolonell's unsourced multipliers, vendor claims from chat, popup, scheduling and 3D-animation companies, and Foundry CRO's aggregated benchmark tables.
- I found no 2025–2026 primary research on freelance developer portfolio conversion. 2025–2026 sources are mostly practitioner guides restating older studies.
