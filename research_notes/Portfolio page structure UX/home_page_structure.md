# Home page structure and section order for a personal developer portfolio (evidence notes, as of October 2026)

Reader's key for evidence strength used throughout:
- **[EYE]** eye-tracking study; **[ANALYTICS]** scroll/behaviour analytics; **[TEST]** usability test or controlled experiment; **[SURVEY]** survey; **[LIT]** literature review; **[STD]** formal standard (WCAG etc.); **[OPINION]** expert or practitioner opinion; **[OBS]** my direct observation of a live site on 2026-10-05.
- Almost none of the primary research was done on *personal portfolio* sites. It was done on news, e-commerce, corporate and content sites. Applying it to a portfolio is inference, and is marked as such.
- Subject site's current order (for reference): Hero (name, one-paragraph subtitle, two buttons, facts card) → technology marquee → About (two paragraphs + four stats) → Work (six projects, alternating image/text rows) → Skills table → Experience timeline → Contact form. Testimonials hidden. Motion-heavy hero with cursor-following portrait planned.

---

## 1. How people scan a home page; attention above vs below the fold; scroll depth; page length

### Takeaway
Attention is heavily front-loaded: in NN/g's 2018 eye tracking, 57% of viewing time was above the fold and 74% in the first two screenfuls, and analytics benchmarks put the average scroll at roughly half the page. People scan rather than read, and the most efficient scan (the "layer-cake") only happens when headings are visually distinct and descriptive, so every home page section needs a heading that carries meaning by itself.

### Cited Findings
- **[EYE, 2018]** Users spent about 57% of page-viewing time above the fold and 74% in the first two screenfuls (up to 2160 px); 81% in the first three screenfuls. Study: 120 participants, 130,000+ fixations, 1920×1080 screen, mixed page types (news, e-commerce, blogs, FAQs, encyclopedic). — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[EYE, 2018]** Measured by share of page rather than pixels: 42% of viewing time fell in the top 20% of the page and 65% in the top 40%. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[EYE, 2010 vs 2018]** In 2010, 80% of viewing time was above the fold; in 2018, 57%. NN/g's reading: people scroll more than they used to, but the sharp drop in attention after the fold is unchanged. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[EYE, 2018]** Within the first screenful, 65% of the above-fold viewing time was concentrated in the top half of the viewport. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[OPINION from EYE]** NN/g's recommendation from that study: "Reserve the top of the page for high-priority content: key business and user goals." — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[ANALYTICS, undated, c. 2013–2014]** Chartbeat sample of 25 million sessions: the most-viewed band of a page is about 550 px down (just over 80% of visitors); only about 70% see the very top (some scroll before load completes). On **home pages and section fronts, 50% of visitors reach pixel 1000**; on content (article) pages 50% reach 1500 px. — [Chartbeat, Scroll behavior across the web](https://chartbeat.com/resources/research/scroll-behavior-across-the-web/)
- **[ANALYTICS, same Chartbeat data]** Reach and dwell diverge: the top of the page is in view for about 4 seconds, while engaged time peaks around 1200 px at nearly three times that. About 66% of engaged time happens below the fold. — [Chartbeat, Scroll behavior across the web](https://chartbeat.com/resources/research/scroll-behavior-across-the-web/); [MarTech summary](https://martech.org/chartbeat-proves-below-the-fold-ad-placement-may-offer-more-value-than-assumed/)
- **[ANALYTICS, 2022]** Contentsquare's 2022 Digital Experience Benchmark reported a 54% average scroll rate across industries, i.e. the average visitor does not get past roughly the halfway point of a page. — [Contentsquare via BusinessWire, 2022](https://www.businesswire.com/news/home/20220324005433/en)
- **[EYE, 2019 write-up of long-running NN/g eye tracking]** Four text-scanning patterns, least to most effective: F-pattern, spotted, layer-cake, commitment. The F-pattern appears "in the absence of subheadings and bullets"; it is a fallback, not a layout to design for. — [NN/g, Text Scanning Patterns: Eyetracking Evidence](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- **[EYE]** Layer-cake: fixations land on headings and subheadings, with body text skipped until a relevant heading is found. "Aside from reading almost every word, the layer-cake pattern is by far the most effective way in which users can scan pages." — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- **[EYE]** Spotted pattern: fixations jump to words that stand out visually (links, bold, coloured text, numerals) or that resemble what the user is looking for. — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- **[EYE]** "Most users will read very little from a wall of text; support them by chunking your content into sections and bulleted lists." — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)

### Inferences
- The two Chartbeat and NN/g findings are compatible, not contradictory: nearly everyone sees the top, about half reach the second or third screenful, and those who continue spend more time per pixel further down. For a portfolio this means the hero must work for 100% of visitors, and the first two to three screenfuls must contain the things a hurried visitor needs (who, what, proof, way to the work).
- On the current page order, the Work section starts after hero + marquee + About (two paragraphs + stats). That plausibly puts the first project at or beyond the third screenful on desktop, and further on mobile, which is past the point where roughly half of visitors have stopped. Moving Work up is the single change most directly supported by the scroll data.
- Sections placed sixth and seventh (Experience, Contact form) should be assumed to be seen by a minority. Anything essential in them (a way to contact, the current role, the CV link) needs a duplicate higher up or in persistent navigation.
- Z-pattern: I found no eye-tracking evidence for a "Z-pattern". It appears in design blogs as a layout heuristic for sparse pages. Treat it as opinion. The evidence-backed model for a sectioned home page is layer-cake plus spotted.
- Page length: no study gives an optimal length. The data supports "long is fine if the top is self-sufficient and every section has a meaningful heading", and "each additional section is seen by fewer people". A reasonable working target is that the essential story fits in the first three screenfuls, with the rest as optional depth.

### Gaps
- No public scroll-depth data exists specifically for personal portfolio sites. The only reliable way to know 25/50/75/100% reach for this site is to instrument it (the site already has Vercel Analytics; scroll-depth events would need to be added).
- A clean, current, primary benchmark for the share of visitors reaching 25/50/75/100% was not found. Figures circulating in 2025–2026 blog posts (for example "healthy" ranges of 40–60% for landing pages, or "55% average by 2026") come from marketing glossaries without disclosed data, so I have not reported them as findings.
- Contentsquare's 2023–2026 benchmark editions were not retrieved; the 2022 figure is the latest I could source.
- The Chartbeat study is undated on its page and is over a decade old; it is news-publisher traffic, which differs from a portfolio audience.

---

## 2. What must be above the fold; hero imagery, carousels, auto-playing motion, false bottoms

### Takeaway
The first screenful should state name, role and a specific one-line value statement, show one piece of proof, and offer one primary action, with a visible hint that more content follows. Research is consistently negative on auto-advancing carousels, on full-viewport heroes that look "finished" (the illusion of completeness), and on motion that competes with the text people are trying to read.

### Cited Findings
- **[EYE, 2018]** Because 57% of viewing time is above the fold and 65% of that is in the top half of the viewport, the upper half of the first screen is the highest-value area on the page. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **[TEST/OPINION]** "The illusion of completeness can interfere with scrolling": when the first screen looks like a complete page, people do not scroll. NN/g recommends signifiers such as content cut off by the fold. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/); [NN/g video, Why Didn't People Scroll? The Illusion of Completeness](https://www.nngroup.com/videos/illusion-completeness/)
- **[OPINION, secondary report of a test]** A full-page image with a heading and a call-to-action button "often pushes important information off-screen", and large hero graphics with no scroll cues create the impression there is nothing more to see. This source also reports an NN/g test in which 75% of users did not realise they could scroll and could not work out what the company did; I could not verify that figure against an NN/g primary page, so treat it as unconfirmed. — [University of St Andrews digital communications blog, 2020](https://digitalcommunications.wp.st-andrews.ac.uk/2020/09/21/scrolling-and-the-illusion-of-completeness/)
- **[TEST, 2013]** Auto-forwarding carousels: in an NN/g UK test a user failed to find a discount shown in 98-point type at the top of a home page because the carousel rotated every 5 seconds ("I didn't have time to read it. It keeps flashing too quickly."). The offer was visible only 20% of the time. Moving elements are also read as advertising and ignored (banner blindness). — [NN/g, Auto-Forwarding Carousels and Accordions Annoy Users](https://www.nngroup.com/articles/auto-forwarding/)
- **[ANALYTICS, 2013]** Notre Dame (Erik Runyon) carousel data: about 1% of visitors clicked the carousel, and 84–89% of those clicks were on the first slide. Reported here from a secondary source. — [Silktide, Stop using carousels](https://silktide.com/blog/stop-using-carousels-on-websites/)
- **[OPINION from tests, 2020]** Motion in peripheral vision triggers an involuntary attention shift and is hard to ignore; gratuitous animation "distract[s] and annoy[s] the user". Animation should be "unobtrusive, brief, and subtle" and is best used for feedback, state change, spatial orientation and signifiers, not to "induce delight or entertain". — [NN/g, The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/)
- **[TEST, 2023]** NN/g advises that scroll-controlled effects be excluded from above-the-fold content. — [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)
- **[SURVEY, 2019, n=204 UX hiring managers]** Portfolios "must be scannable since hiring managers rarely read word-for-word." — [NN/g, UX Design Portfolios](https://nngroup.com/articles/ux-design-portfolios/)
- **[OPINION]** Practitioner consensus for developer portfolios: the hero states who you are, what you do and one call to action; strong portfolios answer "evidence of real work, ability to communicate, technical depth" within about 30 seconds of landing. — [DevPlaybook, Best Developer Portfolio Examples (2026)](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OBS]** Brittany Chiang's home page puts name, role ("Frontend Engineer"), a one-sentence tagline ("I build accessible, pixel-perfect experiences for the web."), section navigation and social links in a persistent left column; there is no hero image and no button. — [brittanychiang.com](https://brittanychiang.com/)

### Inferences
- Recommended above-the-fold contents, in priority order: (1) name; (2) role in plain words ("Full stack developer"); (3) one sentence that says what kind of work and for whom, short enough to read in a few seconds, in place of the current one-paragraph subtitle; (4) one primary button ("View work") and at most one secondary ("Contact" or "Read the blog"); (5) one line of proof (current role/employer, years, a notable client, or a single quantified result); (6) the top edge of the next section visible, so the page does not look finished.
- The "small facts card" is a reasonable carrier for proof if it holds two to four facts that are verifiable and specific. It then duplicates the four stats in About; one of the two should go.
- Photo: no evidence found either way for a portrait in a developer hero. It is a legitimate identity cue as long as it does not displace the text or shrink the visible portion of the next section.
- Planned cursor-following portrait: it has no equivalent on touch devices, it is continuous motion next to the text the visitor is trying to read (the exact condition NN/g warns about), and it adds JavaScript to the element most likely to be the Largest Contentful Paint. If kept, it should be small in its motion range, start only on pointer movement (not auto-play), be disabled under `prefers-reduced-motion`, be absent on touch/coarse pointers, and never delay the text render. This is my inference from general evidence; no study tested this specific effect.
- Two hero buttons are fine provided one is visually primary. Equal-weight buttons force a choice before the visitor knows anything.

### Gaps
- No controlled evidence on photo vs no photo, or on the wording of value statements, for developer portfolios.
- The CXL "false bottom" article could not be retrieved (HTTP 403), so its case-study numbers are not included.
- No research was found on cursor-following or pointer-reactive hero elements specifically.

---

## 3. Optimal order of sections (work vs about; skills, experience, testimonials, blog, contact)

### Takeaway
There is no experiment that tests section order on portfolio home pages; the case for "work before about" rests on scroll-depth data plus what reviewers say they look for (real projects, quickly). The defensible order for this site is: Hero → selected Work → short About (with skills folded in) → Experience summary → Writing → Contact, with the marquee and the standalone Skills table removed or demoted.

### Cited Findings
- **[ANALYTICS]** Half of visitors to home pages reach only about pixel 1000, and the average scroll rate is around 54%, so anything placed in the lower half of a long page is seen by a minority. — [Chartbeat](https://chartbeat.com/resources/research/scroll-behavior-across-the-web/); [Contentsquare via BusinessWire, 2022](https://www.businesswire.com/news/home/20220324005433/en)
- **[SURVEY, 2019, n=204]** UX hiring managers want to see how a candidate "started with an opportunity and produced real value for a user and the organization", i.e. the work and its reasoning, and they scan rather than read. (UX roles, not developer roles.) — [NN/g, UX Design Portfolios](https://nngroup.com/articles/ux-design-portfolios/)
- **[SURVEY, secondary report]** A Profy.dev survey of 60+ hiring managers is reported as finding that 93% would look at a portfolio site if provided, while 51% said a candidate's chances would not be lower without one. I could not reach the primary page (DNS failure), so this is from a secondary article. — [Scrimba, How to Build a Web Developer Portfolio That Gets You Hired](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- **[OPINION]** "Hiring managers spend seconds, not minutes, on initial portfolio reviews, making strong project work more important than flashy animations." — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- **[OPINION]** A commonly recommended order for developer portfolios: hero → featured projects (2–4, with live demos and source links) → skills/stack (concise) → about (brief) → contact. — [DevPlaybook, 2026](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OPINION]** Designers' accounts of recruiter behaviour describe a first pass of about 30 seconds in which a portfolio is kept or rejected. — [UX Collective, Only 30 seconds to reject your portfolio](https://uxdesign.cc/only-30-seconds-to-reject-your-portfolio-8cb14ac70674)
- **[OBS]** Counter-example to "work first": Brittany Chiang's page runs About → Experience (6 roles) → Projects (4) → Writing (4). It works because the identity block and section links are persistent in a side column and the About is a short block, so Experience starts within the first screen or two. — [brittanychiang.com](https://brittanychiang.com/)
- **[OBS]** Lee Robinson's home page is a short bio, then topic notes, then a dated list of 8 posts; no images, no projects section. Josh Comeau's is article-first: 8 featured articles, category links, a top-10 list, then newsletter signup, with About and Contact only in navigation/footer. — [leerob.com](https://leerob.com/); [joshwcomeau.com](https://www.joshwcomeau.com/)

### Inferences
Reasoning by visitor task (inference, not measured):

| Visitor | What they need first | Where it should be |
|---|---|---|
| Recruiter / hiring manager, first pass | Role, level, current position, 2–3 credible projects, CV link | Hero + first two sections |
| Engineering lead, deeper pass | Case study depth, stack per project, code/live links, writing | Project cards → case study pages, blog |
| Prospective client | What you build, proof it worked, how to reach you | Hero, Work, Contact reachable at any time |
| Peer / blog reader | Latest posts | Navigation + a Writing section |

Recommended order for this site, with reasons:
1. **Hero** — identity, role, one-line value statement, one primary action, one line of proof.
2. **Selected Work** (3–4 projects) — the highest-value content for every visitor type, and it must fall inside the half of the page that most people see.
3. **About, shortened** (one short paragraph, optionally the stats here *or* in the hero card, not both), with the stack listed as grouped text. This replaces both the marquee and the Skills table.
4. **Experience, condensed** (most recent 3–4 roles: title, company, dates, one line) with a link to a full résumé page or PDF. Brittany Chiang's pattern ("View Full Résumé") is the model.
5. **Writing** (3–4 latest or best posts) — the site is a portfolio *and* blog and the home page currently has no route to the blog apart from navigation.
6. **Testimonials**, only if real, attributed (name, role, company) and short; one to three, placed after Work or just before Contact. Unattributed quotes add nothing and can stay hidden.
7. **Contact** — keep the form at the end, but also expose a plain email link or "Contact" item in the header so reaching out does not depend on scrolling to the bottom.

- The technology marquee between hero and About occupies prime second-screenful space with logos that carry no proof, and it is auto-moving content (see section 8 for the WCAG issue). The same information is repeated later in the Skills table. One static, grouped list is enough.
- "Work before About" and "About before Work" are both seen on respected sites. The deciding variable is how far down the first project is. A two-to-three-line About above Work is fine; two paragraphs plus four stats plus a marquee above Work is not.

### Gaps
- No A/B test or usability study of portfolio section order was found. Everything in this section beyond the scroll data is consensus and reasoning.
- No survey was found that asks developer hiring managers which home page section they look at first. The Profy.dev survey may contain this; its primary page was unreachable.
- A widely repeated claim that "73% of hiring managers consider a strong portfolio more important than a perfect resume (Stack Overflow Developer Survey 2024)" and that "84% of employers want working applications" surfaced in search summaries. The Stack Overflow Developer Survey polls developers, not hiring managers, and I found no primary source for either number. Do not cite them.

---

## 4. How many projects on the home page; card anatomy; grid vs list vs alternating rows; bento

### Takeaway
Show three to four featured projects with a clear "all projects" link rather than six. The current alternating image/text rows are the one layout with direct eye-tracking evidence against them: NN/g found zigzag layouts make scanning less efficient than layouts where text and images stay vertically aligned.

### Cited Findings
- **[EYE]** NN/g eye tracking comparing zigzag (alternating image-left/image-right) with aligned layouts: zigzag "make[s] scanning less efficient because users must jump over visual obstacles"; users scanned efficiently when text and imagery were vertically aligned. The same study found images with informational value were looked at more than decorative images, and that informational value matters more than alignment. — [NN/g, Zigzag Image–Text Layouts Make Scanning Less Efficient](https://nngroup.com/articles/zigzag-page-layout)
- **[SURVEY-based guidance, 2019]** NN/g recommends 3–5 detailed case studies in a UX portfolio, quality over quantity, and 1–2 if time is short. — [NN/g, UX Design Portfolios](https://nngroup.com/articles/ux-design-portfolios/)
- **[OPINION]** Developer-portfolio guides recommend 2–4 featured projects with live demos and source links on the home page. — [DevPlaybook, 2026](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OPINION]** "Quality beats quantity, with 3–5 polished projects outperforming 10+ basic ones" is stated in multiple practitioner guides; it is advice, not a measured result. — [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- **[OBS]** Brittany Chiang shows 4 featured projects, each with description and tech tags, then "View Full Project Archive". — [brittanychiang.com](https://brittanychiang.com/)
- **[META-ANALYSIS, 2010]** Choice overload is weaker than usually claimed: Scheibehenne et al.'s meta-analysis of the "too many options" effect (the 24-vs-6 jam study and its follow-ups) found a mean effect of about zero, with wide variation by context. — [Scheibehenne, Greifeneder & Todd, 2010 (PDF)](https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf); [summary](https://www.atticusli.com/replication-crisis/choice-overload-jam-study/)
- **[EYE]** Layer-cake and spotted scanning imply that a project's title and the few words that stand out are what get read; body text under a card is read only if the title earns it. — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)

### Inferences
- The argument for fewer projects is page length and scroll reach, not choice overload. Six alternating full-width rows is roughly six screenfuls on mobile; the fifth and sixth projects, and everything after them, are seen by few people. Three or four featured projects plus a link to the full list keeps Experience, Writing and Contact within reach. Hick's law (decision time rises with the number of options) is often cited here, but given the meta-analysis above it should not be presented as the main evidence.
- Order projects by strength, not chronology: the first card gets the most views by a large margin (compare the carousel first-slide data and the scroll curve).
- Card anatomy that fits spotted/layer-cake scanning: informative screenshot (the actual product UI, not an abstract mock-up) → project name → one line stating what it is and the outcome or your role (a number if there is one) → 3–5 stack tags as text → a single obvious link to the case study, with live/source as secondary links. Make the whole card or the title the link target.
- Layout choice: keep the image on the same side in every row (or use a uniform 2-column card grid on desktop, single column on mobile) so titles line up on one vertical axis. That is the minimum change that addresses the zigzag finding without redesigning cards.
- Bento grids: no usability evidence found for or against. By extension of the zigzag finding, a bento with irregular tile sizes scatters titles and removes a single scan line, so it suits a small set of unequal highlights better than a list of comparable projects. This is inference.

### Gaps
- No study of the number of featured projects on a portfolio home page and its effect on click-through to case studies.
- No comparative evidence on grid vs list for portfolio project cards specifically (e-commerce list/grid research exists but was not retrieved and may not transfer).
- No evidence base for bento layouts.

---

## 5. Presenting skills: lists/tables vs logos vs skill bars

### Takeaway
There is no formal study, but practitioner and recruiter opinion is close to unanimous that skill bars and percentages are meaningless self-ratings; plain, grouped text is preferred, and skills are most credible when attached to projects. A logo marquee plus a separate skills table says the same thing twice without evidence.

### Cited Findings
- **[OPINION]** Skill-level bars are described as meaningless to a recruiter: without a defined scale nobody knows what "4/5 in Python" means, self-ratings are unreliable, and a drawn bar carries no parseable text. Recommendation: list skills as clean text and prove the level elsewhere. — [Hiration, Do skill bars help your resume?](https://www.hiration.com/blog/skill-bars-resume/)
- **[OPINION]** Developer-community feedback on portfolios repeats the point: progress bars "make no sense" because they are relative to whoever is looking, and a skills page without projects demonstrating the skills is meaningless. — [freeCodeCamp forum thread](https://www.freecodecamp.org/forum/t/would-you-hire-me-yes-no-why/80680?page=2); [Ali Calimli, Don't do this in your developer portfolio](https://alicalimli.beehiiv.com/p/dont-do-this-in-your-developer-portfolio)
- **[OPINION]** Recommended skills/stack treatment on the home page is "concise, not exhaustive". — [DevPlaybook, 2026](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OBS]** Brittany Chiang's home page has no skills section at all; technologies appear as tags on each experience entry and each project. — [brittanychiang.com](https://brittanychiang.com/)
- **[EYE]** Bulleted and chunked text supports efficient scanning; walls of text do not. — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)

### Inferences
- Best fit for this site: remove the marquee; replace the Skills table with either (a) per-project and per-role tech tags only, or (b) one compact block of grouped text inside About (for example Frontend / Backend / Data / Infrastructure, four to eight items each, ordered by how much you actually use them). Text is searchable, readable by screen readers and by people scanning for a keyword such as "PostgreSQL".
- If a table is kept, it is acceptable as long as it is grouped, short and static; the objection in the sources is to self-rated levels and to duplication, not to tables as such.
- Logos without names are slower to identify than words for all but the most famous technologies, and need alt text. If logos are used, pair each with its name.

### Gaps
- No controlled study or quantitative survey on skill bars vs text lists was found; the claim "recruiters dislike skill bars" is consistent opinion, not measured data.
- No evidence on whether a skills section on the home page affects outcomes at all.

---

## 6. Experience / résumé on the home page vs a separate page; timeline usability

### Takeaway
No direct research was found. The pattern used by well-regarded portfolios is a condensed, reverse-chronological list on the home page (role, company, dates, one or two lines, tech tags) with a link to a full résumé, which matches scroll-depth data better than a full decorative timeline in sixth position.

### Cited Findings
- **[OBS]** Brittany Chiang's home page lists six roles, most recent first, each with title, company, dates, a short description and tech tags, followed by a "View Full Résumé" PDF link; Experience sits second, directly after a short About. — [brittanychiang.com](https://brittanychiang.com/)
- **[OBS]** Lee Robinson's home page folds experience into the opening bio (current and previous employers named in sentences) with no timeline. — [leerob.com](https://leerob.com/)
- **[ANALYTICS]** Content in the lower half of a long home page is reached by a minority of visitors. — [Chartbeat](https://chartbeat.com/resources/research/scroll-behavior-across-the-web/); [Contentsquare via BusinessWire, 2022](https://www.businesswire.com/news/home/20220324005433/en)
- **[EYE]** Zigzag (alternating-side) layouts scan less efficiently than aligned ones. — [NN/g, Zigzag layouts](https://nngroup.com/articles/zigzag-page-layout)

### Inferences
- A recruiter's first question after "what does this person do" is usually "where and at what level"; the current role belongs in the hero or facts card, so it does not depend on reaching section six.
- On the home page, show the three or four most recent roles in a single left-aligned column with dates in a consistent position. Avoid a centre-spine timeline with entries alternating left and right: by extension of the zigzag finding it is harder to scan, and it collapses awkwardly on mobile.
- Put the full history, education and a downloadable PDF on a separate résumé/about page, linked from the Experience section and the header.

### Gaps
- No usability research on vertical timelines for résumé content, and none comparing on-page experience with a separate résumé page, was found.

---

## 7. Visual hierarchy and readability (headings, line length, body font, contrast, spacing, dark vs light)

### Takeaway
The evidence supports visually distinct, descriptive headings, body lines of 50–75 characters, a proportional body font, and a light theme as the default for reading with a dark option available. The evidence against monospace body text is real but old and thin, so it should be stated cautiously.

### Cited Findings
- **[EYE]** Distinct, meaningful headings and subheadings are what produce the efficient layer-cake scan; without them users fall back to the F-pattern and miss content. — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- **[TEST-based guidance, 2022]** Baymard recommends 50–75 characters per line for body text, with 80 as the upper limit (WCAG 1.4.8); in testing, users called long-line text overwhelming and abandoned or skimmed it. Implementation: `max-width` of about `70ch` or `34em`. — [Baymard, Line length readability](https://baymard.com/blog/line-length-readability)
- **[TEST, 2001]** Wichita State SURL study of 12 on-screen fonts: Courier, the only monospace font tested, had the second-worst reading time, close to the decorative font Corsiva; the fastest-to-slowest spread was about 13% (roughly 40 s over about 310 s). Old (CRT era), small, and reported here via a secondary article. — [Coding Horror, Comparing Font Legibility (2005)](https://blog.codinghorror.com/comparing-font-legibility/)
- **[TEST, 2022]** Wallace et al. (ACM TOCHI): across 16 fonts and hundreds of crowdsourced readers, reading speed differed by 35% between a person's fastest and slowest font with no loss of comprehension, and the best font varied by individual ("one font does not fit all"). — [Adobe Research publication page](https://research.adobe.com/publication/towards-individuated-reading-experiences-different-fonts-increase-reading-speed-for-different-individuals)
- **[LIT, 2020]** NN/g's review of the academic literature (it ran no study of its own): for people with normal vision, light mode (dark text on light) gives better visual performance; Piepenbrock et al. 2013 found light mode better for acuity and proofreading in both young and older adults, with a larger advantage at small font sizes; Dobres et al. 2017 found light mode better even at night for glance reading. People with cataracts and similar conditions may do better in dark mode (Legge et al. 1985, n=7). Recommendation: offer a dark-mode option. — [NN/g, Dark Mode vs. Light Mode](https://www.nngroup.com/articles/dark-mode/)
- **[STD]** WCAG 2.2 sets 24×24 CSS px as the minimum target size (SC 2.5.8, AA). — [Deque, target-size rule](https://dequeuniversity.com/rules/axe/4.8/target-size)

### Inferences
- Use monospace as an accent (labels, tags, dates, code, small headings) and a proportional sans-serif for paragraphs. The direct evidence is one 2001 study, but the mechanism is uncontroversial: monospace is wider, so fewer words fit per line and per fixation, and at a 50–75 character measure a monospace paragraph is physically wider or must be set smaller.
- If the site is dark by default (common for developer portfolios), compensate for the documented small-text disadvantage: body text at 16–18 px or larger, line-height around 1.5–1.7, off-white on near-black rather than pure white on pure black, and honour `prefers-color-scheme` with a toggle. The specific pixel values are common practice, not findings.
- Heading scale: no study gives exact sizes. What the eye-tracking supports is that section headings must be unmistakably different from body text and must describe the content ("Selected work", "Experience") rather than be clever.
- Section spacing: no numeric evidence. The practical rule that follows from the false-bottom research is that spacing between sections must not be so large that a screen shows only empty space or a complete-looking block; keep the next section's heading visible at common viewport heights.

### Gaps
- No modern, large-sample study comparing monospace and proportional body text on current high-density screens was found. I believe the 16 fonts in Wallace et al. did not include a monospace face, but I could not confirm that from the paper.
- WCAG contrast thresholds (4.5:1 for body text) were not re-verified in this session and are omitted from the findings; they are standard and should be checked against WCAG 2.2 SC 1.4.3.
- No evidence was found on optimal heading sizes or whitespace amounts.

---

## 8. Motion and scroll effects (scroll-jacking, parallax, scroll-triggered reveals, marquees, reduced motion)

### Takeaway
Usability testing is negative on scroll-jacking and neutral-to-negative on parallax (more "fun", no gain in usability, and disorienting for people prone to motion sickness). Any motion that auto-plays for more than five seconds, including a technology marquee, needs a pause control under WCAG 2.2.2, and all non-essential motion should be switched off under `prefers-reduced-motion`.

### Cited Findings
- **[TEST, 2023]** NN/g usability testing of scroll-jacking sites (Apple, BBC, Crypto.com, Therabody and others) found disorientation, loss of user control, severe frustration for task-focused users, difficulty reading animated text, worse results on mobile, and reduced discoverability and task success. — [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)
- **[TEST-based guidance, 2023]** If scroll effects are used at all: keep them below the fold, keep scroll speed moderate, never change direction, minimise text inside them, mix with normal scrolling, avoid on mobile, and keep navigation visible as an "escape hatch". — [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)
- **[TEST, 2013 thesis; published 2015]** Purdue (Dede Frederick): 86 participants randomly assigned to a parallax or a non-parallax version of the same site, three tasks each. The parallax site scored higher only on "fun"; no significant difference on the other user-experience measures, including visual appeal. Participants prone to motion sickness found parallax disorienting. — [Journal of Usability Studies, Feb 2015 (PDF)](https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Frederick_Feb2015.pdf); [summary, Elezea 2013](https://elezea.com/2013/12/parallax-scrolling-maybe-not/)
- **[OPINION from tests, 2020]** "Down-time animations often frustrate participants in usability testing"; overuse of animation is "overwhelming" and reduces the effect of each animation. — [NN/g, The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/)
- **[STD]** WCAG 2.2 SC 2.2.2 (Level A): moving, blinking or scrolling content that starts automatically, lasts more than five seconds and is shown alongside other content must have a mechanism to pause, stop or hide it, unless the motion is essential. — [W3C, Understanding SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- **[STD/guidance]** `prefers-reduced-motion` reports the user's OS-level request to minimise motion; parallax and similar effects can trigger dizziness, nausea and migraine in people with vestibular disorders. Supported since Chrome 74, Edge 79, Firefox 63, Safari 10.1. — [web.dev, prefers-reduced-motion](https://web.dev/prefers-reduced-motion)
- **[TEST, 2013]** Auto-moving content is also mistaken for advertising and skipped. — [NN/g, Auto-Forwarding Carousels](https://www.nngroup.com/articles/auto-forwarding/)

### Inferences
- The technology marquee is the clearest problem on the current page: it auto-plays indefinitely beside other content, so it fails SC 2.2.2 unless it has a pause control (pausing only on hover does not help keyboard or touch users), and by the banner-blindness finding it is likely to be skipped anyway. A static grouped list removes the issue.
- Scroll-triggered reveals (fade/slide in on enter) were not found in any study. Risk reasoning: they delay content the visitor has scrolled to, and people who scroll fast or jump via anchor links can meet blank space. If used, keep them short (roughly 200–400 ms), small in distance, run once, never gate text behind them, and make sure content is visible without JavaScript and under reduced motion.
- The planned motion-heavy hero concentrates risk in the one place every visitor sees. A safe version: text renders immediately and is static; the portrait effect is progressive enhancement for fine pointers only; nothing loops by itself for more than five seconds; reduced-motion users get a still image.
- The Frederick result is useful framing for a personal site: motion can make a site more enjoyable without making it more usable. For a developer portfolio some craft display has value as a work sample, so the practical rule is to spend the motion budget in one or two places, not on every section.

### Gaps
- No usability study on scroll-triggered reveal animations, marquees specifically, or cursor-following effects was found.
- The Frederick study is over a decade old and used one hotel-style test site; no recent replication was found.
- The web.dev article's statistic on prevalence of vestibular dysfunction (attributed to vestibular.org) was not verified at source and is not reported here.

---

## 9. Repeated or sticky calls to action, section anchors, back-to-top, progress indicators

### Takeaway
Evidence here is mostly vendor analytics and expert guidance: a compact persistent header with section links and a contact action is a reasonable way to keep Contact reachable from anywhere on a long single page, provided it is small and does not cover focused or anchored content. No evidence was found for scroll progress bars on a home page.

### Cited Findings
- **[ANALYTICS, vendor]** Contentsquare reports an average 15% decrease in scrolls per session after sticky headers were added, read as less scrolling back to the top to navigate. Vendor blog; methodology not disclosed. — [Contentsquare, Sticky menu navigation](https://contentsquare.com/blog/sticky-menu-navigation/)
- **[OPINION, 2023]** Sticky menus help where people need to move between sections often, but they obscure content, can break under zoom, and can hide focused elements for keyboard users. Keep them compact; no more than five items on mobile; use CSS `scroll-padding` so anchor targets are not hidden under the bar. — [Smashing Magazine, Designing Sticky Menus: UX Guidelines](https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/)
- **[OPINION, 2023]** A partially persistent header (hides on scroll down, returns on scroll up) is a middle option; suggested slide-in duration about 300–400 ms. Alternatives to sticky navigation: shorter pages, a table of contents at the top, back-to-top links at the bottom. — [Smashing Magazine, Designing Sticky Menus](https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/)
- **[TEST, 2023]** Visible navigation acts as an "escape hatch" on pages with heavy scroll effects. — [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)
- **[OBS]** Brittany Chiang's page keeps section anchors (About, Experience, Projects) permanently visible in the side column and has no contact form; contact is through persistent social links. — [brittanychiang.com](https://brittanychiang.com/)

### Inferences
- For this site: a slim sticky (or hide-on-scroll-down) header with three or four anchors (Work, About, Writing, Contact), the Contact item styled as the one persistent call to action. This fixes the main structural weakness, that Contact is the seventh section.
- Repeat the primary action at natural decision points only: hero ("View work"), end of Work ("All projects"), and the closing Contact section. Repeating a "Hire me" button in every section adds noise without evidence of benefit.
- Back-to-top: optional. With a persistent header it is redundant; on mobile a footer "Back to top" link is cheap and harmless.
- Scroll progress indicators suit long articles more than a home page; skip on the home page, consider for blog posts and case studies.
- Set `scroll-padding-top` equal to the header height and check that focused elements are never hidden under the header (WCAG 2.2 SC 2.4.11 Focus Not Obscured covers this; not re-verified in this session).

### Gaps
- No independent study on sticky or repeated calls to action for non-commerce personal sites.
- NN/g's own guidance on sticky headers and on back-to-top links was not retrieved, so it is not cited.
- A figure that sticky headers "boost task completion by 34%" appeared in a search summary without a traceable study and has been left out.

---

## 10. Mobile home page structure (priority, thumb reach, tap targets, performance)

### Takeaway
On a phone the page becomes one long column, so section order matters even more and every extra section pushes Work and Contact further out of reach; the hero must show name, role and the primary action without scrolling. Tap targets should be about 1 cm (roughly 44–48 CSS px) with 24 px as the WCAG floor, and hover- or cursor-driven effects have no mobile equivalent.

### Cited Findings
- **[TEST-based guidance]** Minimum touch target of 1 cm × 1 cm for fast, accurate selection, based on Parhi, Karlson and Bederson; average fingertips are 1.6–2 cm wide and the thumb's contact area about 2.5 cm. — [NN/g, Touch Targets on Touchscreens](https://www.nngroup.com/articles/touch-target-size/)
- **[STD]** WCAG 2.2 SC 2.5.8 (AA): targets at least 24×24 CSS px, or with equivalent spacing; inline text links are exempt. — [Deque, target-size rule](https://dequeuniversity.com/rules/axe/4.8/target-size)
- **[OBSERVATIONAL STUDY, 2013]** Steven Hoober observed over 1,300 people using phones: 49% one-handed, 36% cradled, 15% two-handed; thumbs drive about 75% of interactions. Phones were smaller in 2013, so the split has probably shifted. — [Smashing Magazine, The Thumb Zone (2016)](https://smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users)
- **[TEST, 2023]** Scroll-jacking performs worse on mobile; NN/g advises against implementing it there. — [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)
- **[OPINION, 2023]** Sticky bars on mobile must be compact and hold no more than five items; an on-screen keyboard can take up to 60% of the screen, so sticky elements should not persist while a form is being filled in. — [Smashing Magazine, Designing Sticky Menus](https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/)
- **[TEST-based guidance, 2022]** Line length is rarely a problem in portrait orientation but can exceed 80 characters in landscape if text width is not capped. — [Baymard, Line length readability](https://baymard.com/blog/line-length-readability)
- **[STD/guidance]** Core Web Vitals "good" thresholds: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Thresholds confirmed via search results in this session; canonical reference linked. — [web.dev, Web Vitals](https://web.dev/articles/vitals)

### Inferences
- Mobile order should be the same as desktop (hero → work → about → experience → writing → contact). Stacked alternating rows already become image-then-text on mobile, which is the aligned pattern NN/g found efficient, so the zigzag problem is mainly a desktop one.
- Six projects at one full-width card each is the main driver of mobile page length. Three or four featured cards with a compact image ratio (for example 16:9, not full-height) keeps Contact within a reasonable number of swipes.
- Hero on mobile: name, role, one sentence, primary button; the facts card can drop below the buttons or shrink to one line. The cursor-following portrait should be a static image on touch devices (`@media (hover: none), (pointer: coarse)`), which also saves the JavaScript.
- The contact form at the bottom is in easy thumb reach once reached; the issue is reaching it. A header "Contact" link or a `mailto:` in the hero covers people who will not scroll.
- Performance work one person can do: make the hero text the LCP element (not an image or canvas), serve responsive images in modern formats with explicit dimensions, lazy-load project images below the fold, load animation libraries after first paint or only on fine-pointer devices, and reserve space to avoid layout shift. These follow from the Core Web Vitals definitions; they were not measured on this site.

### Gaps
- The often-quoted "53% of mobile visits are abandoned if a page takes longer than 3 seconds" comes from Google/DoubleClick data published in 2016; I did not retrieve the primary source, it is a decade old, and it should be treated as dated context only.
- No research on mobile behaviour specific to portfolio sites, or on the device split of portfolio visitors (recruiters probably skew desktop, but I found no data).
- No recent replication of Hoober's grip study for current large phones was retrieved.

---

## 11. Examples of well-structured developer portfolio home pages, and common mistakes

### Takeaway
The respected examples differ in order but share four traits: identity in one line, very little preamble before real content, short curated lists with "view all" links, and almost no decorative motion. The common mistakes map directly onto the current page: preamble before the work, duplicated facts, a skills display without proof, and motion in the hero.

### Cited Findings
- **[OBS, 2026-10-05]** **Brittany Chiang** — persistent left column: name, "Frontend Engineer", one-sentence tagline, anchors (About, Experience, Projects), social links. Right column in order: About (short) → Experience (6 roles, reverse-chronological, tech tags, "View Full Résumé") → Projects (4 featured, "View Full Project Archive") → Writing (4 posts with years) → footer credits. No hero image, no skills section, no contact form. — [brittanychiang.com](https://brittanychiang.com/)
- **[OBS, 2026-10-05]** **Lee Robinson** — text only: name → short bio paragraph (current role, previous employers, years of experience) → list of topic notes → dated list of 8 blog posts. No images, no projects section, no form. — [leerob.com](https://leerob.com/)
- **[OBS, 2026-10-05]** **Josh W. Comeau** — content-first blog home: header nav (categories, courses, goodies, About) → 8 featured articles → browse by category → top-10 popular list → newsletter signup → footer with About/Contact. No About section on the home page. — [joshwcomeau.com](https://www.joshwcomeau.com/)
- **[OPINION]** Bruno Simon's 3D driving portfolio is cited as a showcase of interactive craft; it is an exception whose content *is* the interaction. — [DevPlaybook, 2026](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OPINION]** Reviewers look for three signals (real work rather than tutorial clones, ability to explain what was built and why, technical judgment) and strong portfolios deliver them within about 30 seconds. — [DevPlaybook, 2026](https://devplaybook.cc/blog/best-developer-portfolio-examples-2025)
- **[OPINION]** Common mistakes named in practitioner sources: skill bars/percentages; a skills list with no projects that demonstrate it; too many weak projects; animation that gets in the way of the work. — [Hiration](https://www.hiration.com/blog/skill-bars-resume/); [freeCodeCamp forum](https://www.freecodecamp.org/forum/t/would-you-hire-me-yes-no-why/80680?page=2); [Scrimba](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- **[EYE/TEST]** Research-backed mistakes: complete-looking full-viewport hero (illusion of completeness); auto-advancing or auto-moving content; zigzag image/text rows; vague or clever headings; walls of text; scroll-jacking. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/); [NN/g, Auto-Forwarding](https://www.nngroup.com/articles/auto-forwarding/); [NN/g, Zigzag layouts](https://nngroup.com/articles/zigzag-page-layout); [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/); [NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/)

### Inferences
Mapping of the current page against the evidence:

| Current element | Issue | Evidence type | Suggested change |
|---|---|---|---|
| Hero subtitle is a paragraph | Scanners read a line, not a paragraph | Eye tracking (general) | One sentence; move the rest to About |
| Planned motion-heavy hero, cursor-following portrait | Peripheral motion competes with text; no touch equivalent; LCP/INP risk | NN/g guidance + inference | Static text first; effect as fine-pointer enhancement; off under reduced motion |
| Technology marquee | Auto-moving > 5 s needs pause control; read as decoration; duplicates Skills | WCAG 2.2.2 + NN/g tests | Remove, or make static |
| About (2 paragraphs + 4 stats) before Work | Pushes first project past where about half of visitors stop | Scroll analytics + inference | Work second; About shortened to one paragraph |
| Facts card and four stats | Same kind of content twice | Inference | Keep one |
| Six projects, alternating rows | Zigzag scans less efficiently; long on mobile | NN/g eye tracking + inference | 3–4 featured, image on a consistent side or uniform grid, "All projects" link |
| Skills table | Unproven list; duplicates marquee | Opinion consensus | Fold grouped text into About; tags on projects |
| Experience timeline in 6th place | Seen by a minority; current role not visible early | Scroll analytics + inference | Current role in hero; 3–4 roles + résumé link; move above Writing |
| No blog on home page | Half the site's purpose has no home page presence | Inference + examples | Add 3–4 recent posts |
| Contact form last, only route | Depends on full scroll | Scroll analytics | Keep form; add persistent header Contact / email link |
| Testimonials hidden | Fine if not real and attributed | Opinion | Show only named, specific quotes; otherwise leave hidden |

- The examples show that the About-first order can work, but only when About is very short and navigation is persistent. They also show that a text-only home page with no hero motion is fully compatible with a strong reputation.
- All three observed sites belong to people with established audiences; visitors arrive already knowing who they are. A less well-known developer needs the role, proof and work earlier and more explicitly than these sites provide.

### Gaps
- Site observations were made through an automated text extraction on 2026-10-05; visual details (exact fold position, spacing, motion) were not inspected and layouts may have changed.
- No systematic analysis of a large sample of developer portfolios (section order frequencies) was found; listicles of "best portfolios" select on visual appeal, not on measured effectiveness.
- No data links any portfolio structure to hiring or client outcomes.
