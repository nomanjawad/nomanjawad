# Inner-page structure of a developer portfolio + blog: UX evidence and templates (as of October 2026)

Reading guide for the report writer:
- Each finding is tagged **[RESEARCH]** (usability testing, eye tracking, analytics, surveys, standards), **[EXPERT]** (practitioner or hiring-manager opinion), or **[WEAK]** (unsourced, anecdotal, or vendor/marketing claim; treat with caution).
- "Inferences" sections hold my recommended templates. They are reasoned from the cited findings, not directly tested on developer portfolios. Almost no primary usability research exists on developer portfolios specifically; most evidence is transferred from corporate sites, e-commerce, news/article reading and UX-designer hiring.
- Most source pages were read through an automated page summariser. Numbers and dates were extracted from the pages, but direct quotations should be re-checked against the source before being printed as verbatim quotes.

## Case study / project page: structure, length, order, visuals, outcomes, what reviewers read

### Takeaway
Evidence supports restructuring the current chronological Problem → Approach → Solution → Outcome page into an inverted pyramid: outcome, role and scale in the first screen, then the story as scannable sub-sectioned evidence, because reviewers skim rather than read and most readers never reach the bottom where the Outcome currently sits. Hiring-side sources consistently ask for the same things: explicit personal contribution, constraints and trade-offs, measurable impact, and lessons learned; these are opinion/survey findings, not experiments.

### Cited Findings

Reading behaviour that drives the structure
- [RESEARCH, 2008, old] Analysis of 45,237 page views: users have time to read at most 28% of the words on an average (593-word) page, realistically about 20%; each extra 100 words adds only about 4.4 seconds of dwell time. — [NN/g, How Little Do Users Read?](https://www.nngroup.com/articles/how-little-do-users-read/)
- [RESEARCH, eye tracking, 2017 article on 2006+ studies] The F-shaped scanning pattern appears when text is unformatted (no bold, bullets, subheadings), the user wants efficiency and has low commitment to the content. Remedies listed: front-load key points, prominent headings and subheadings starting with information-carrying words, visual grouping, bold key phrases, descriptive links, bullets/numbered lists, cut unnecessary content. — [NN/g, F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- [RESEARCH-BASED GUIDANCE, 2018] Inverted pyramid (most important information or the conclusion first) lets a reader stop at any point and still have the main point, lowers interaction cost, and encourages scrolling; method: identify key points, rank secondary information, front-load every element (headings, paragraphs), consider a summary or key-point list. No caveats on when not to use it are given. — [NN/g, Inverted Pyramid](https://www.nngroup.com/articles/inverted-pyramid/)
- [RESEARCH, analytics, 2013, old, news articles not portfolios] Chartbeat data reported by Slate: most visitors scroll through roughly 60% of an article, about 10% never scroll, and a large share leave very early. — [Slate, 2013](https://www.slate.com/articles/technology/technology/2013/06/how_people_read_online_why_you_won_t_finish_this_article.html); secondary summary at [Psychology Today, 2015](https://www.psychologytoday.com/us/blog/brain-wise/201509/people-read-only-60-of-an-online-article)

What hiring managers say they want (survey and opinion; UX-design hiring, transferred to developers)
- [RESEARCH, survey, 2019] NN/g surveyed 204 UX hiring professionals. Reviewers very rarely read a whole portfolio word for word, so content must be scannable. Case studies should cover: problem or hypothesis; your specific role and collaborators; how you arrived at the solution; how the solution addressed the problem; challenges and rejected concepts; user and business impact; lessons learned. Recommended 3–5 detailed case studies, quality over quantity. — [NN/g, UX Design Portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [EXPERT, 2023] Leslie Yang (hiring manager, former lead product designer): moves on from gallery-style portfolios because authorship is unclear; wants user problem and business goals, iterations, impact metrics, role clarity with "I" statements rather than "we", who else was on the team, project duration, and "what would you have done differently"; 3–4 case studies on the site. — [Leslie Yang, Substack](https://leslieyang.substack.com/p/what-a-hiring-manager-looks-for-in)
- [EXPERT] Josh W. Comeau (based on reviewing a couple of hundred developer portfolios submitted via Twitter, not a formal survey): show 2–5 projects, "a highlight reel" not an index of everything; project pages should act as a guided tour of what is interesting under the hood; most portfolios he saw were well built and polished but still failed to help the person get hired; he found himself giving the same feedback repeatedly. Audience caveat: the book targets people seeking a first or second developer job. — [Josh W. Comeau, Building an Effective Dev Portfolio](https://www.joshwcomeau.com/effective-portfolio/)
- [EXPERT, 2026] GreatFrontEnd: a developer case study should run Problem → Constraints → Solution → Results → Tradeoffs (what you did not do and why); reviewers trust narratives that include constraints, bugs and follow-up work more than perfect stories; lead with the strongest work. — [GreatFrontEnd, Frontend Developer Portfolio 2026](https://www.greatfrontend.com/blog/frontend-developer-portfolio)
- [WEAK, unsourced, 2026] DevPlaybook describes a "60-second review" (10 s homepage, 20 s featured project, 20 s code scan, 10 s GitHub) and says live demos, real-world problems and visible backend work matter. No author, data or interviews are cited. — [DevPlaybook](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers)
- [WEAK, unsourced] Lyrid: hiring managers "typically spend around 3 minutes" per portfolio; limit to 3–5 projects; the most common failing is listing technologies without the why or the impact. — [Lyrid](https://www.lyrid.io/post/5-critical-software-engineer-portfolio-mistakes-that-junior-developers-are-making)

Visuals
- [RESEARCH, eye tracking, 2010, old] Users look at information-carrying images and ignore purely decorative ones; real photos of real people get attention, generic stock photos are ignored; enlarged views should be at least twice the thumbnail size. — [NN/g, Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)

### Inferences
Recommended case-study template (replaces current order; each step lists the reasoning):
1. **Breadcrumb / back link**: "Work / Project name" (see cross-page section; a single "← All work" link is enough on a two-level site).
2. **Header block**: kicker (type of work, client/industry, year), title, and a one-sentence summary written as an outcome ("Cut checkout load time from X to Y for Z") rather than a description. Reason: the top horizontal sweep of the F-pattern is the only part almost everyone reads.
3. **Spec list immediately under the title, before the hero image**: Role (with "my part" in one line, for example "Sole developer" or "Backend + API; design by X"), team size, stack, duration, year, and links (Live site, Repo, Demo video). Reason: role/authorship ambiguity is the most consistently cited reason reviewers discount work; live link and repo are what developers' reviewers check next. Keep it; just move it up and add team and links.
4. **TL;DR / results strip**: 2–4 quantified outcomes or, if no metrics exist, concrete qualitative outcomes (shipped date, users, client quote). Reason: inverted pyramid; the current page hides Outcome at the bottom where a minority of readers arrive.
5. **Hero visual**: a real screenshot or a short silent autoplay-off video/GIF of the product in use, with a caption stating what is shown. Reason: information-carrying images are looked at; decorative mock-up art is not.
6. **Problem and constraints** (2–4 short paragraphs or a short list): who had the problem, why it mattered, and constraints (deadline, budget, legacy stack, team).
7. **My contribution**: explicit bullets in first person with active verbs (designed the schema, wrote the sync worker, set up CI). Name what others did.
8. **Approach and key decisions**: 2–4 sub-headed decisions, each "decision → options considered → why → trade-off accepted". Include one architecture diagram and, where it genuinely shows something clever, one short code excerpt (15–30 lines) with a link to the full file. This is the section engineering reviewers use to judge thinking; it is the developer equivalent of "process" in design case studies.
9. **Solution**: annotated screenshots, before/after pairs where a previous state existed, and performance or Lighthouse numbers where relevant.
10. **Outcome**: the full version of the results strip, with how each number was measured; a client or teammate testimonial placed here, next to the claim it supports.
11. **What I would do differently / lessons** (short). Asked for by both the NN/g survey and hiring-manager write-ups; also makes the story credible.
12. **Next step**: a contextual contact prompt ("Working on something similar? Email me") plus next/previous project and "All work". A single dead-end "next project" link gives no route to contact.

Other inferences
- Length: no source gives a tested word count. Given 20–28% of words read, aim for a page that makes sense from headings, the results strip, captions and bold phrases alone; roughly 600–1,200 words of body text with 4–8 visuals is a defensible target, with depth pushed into linked blog posts.
- The current "one paragraph per section" format is close to the unformatted-text condition that triggers F-pattern skimming; breaking each section into sub-headed decisions, bullets and captioned visuals is the main fix.
- Headings should be descriptive rather than generic where possible ("Why I moved the queue to Postgres" under Approach) because heading-first words carry the scan.
- A blog post can serve as the deep technical appendix for a case study; cross-link both ways.

### Gaps
- No usability study or eye-tracking study of developer portfolio case-study pages was found. All hiring-side evidence is either a UX-designer hiring survey (NN/g 2019) or individual opinion.
- No reliable data on how long engineering managers spend on a case study; the "60 seconds" and "3 minutes" figures are unsourced.
- No evidence was found on testimonials inside case studies, on video versus static screenshots, or on TL;DR boxes specifically; recommendations rest on inverted-pyramid and image-attention findings.
- I did not verify named exemplar portfolios in this session. Candidates commonly cited by practitioners, which the writer should treat as unverified suggestions to check rather than sourced findings: Josh W. Comeau, Brittany Chiang, Lee Robinson, Tania Rascia, Cassidy Williams (developer sites), and engineering write-ups on company blogs for the "decision and trade-off" style.
- No source addresses client (as opposed to employer) reading behaviour on case studies.

## Work / projects index page

### Takeaway
For a handful of projects, show a short curated set of 3–5 (at most about 6) in strength order with informative cards; filtering is not justified at this scale. Evidence is mostly expert opinion plus general scanning research.

### Cited Findings
- [RESEARCH, survey, 2019] 3–5 detailed case studies recommended; quality over quantity. — [NN/g, UX Design Portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [EXPERT] 2–5 projects; a highlight reel, not an index of everything. — [Josh W. Comeau](https://www.joshwcomeau.com/effective-portfolio/)
- [EXPERT, 2026] Lead with the strongest work first. — [GreatFrontEnd](https://www.greatfrontend.com/blog/frontend-developer-portfolio)
- [WEAK] Too many projects makes it hard to tell which ones the developer invested in; outdated projects show past rather than present skill. — [Lyrid](https://www.lyrid.io/post/5-critical-software-engineer-portfolio-mistakes-that-junior-developers-are-making)
- [EXPERT, 2017, old] Lists scan faster and give a clearer hierarchy because elements sit in fixed positions; cards suit browsing of varied, visual content and take more space. — [Webdesigner Depot, Cards vs. lists](https://www.webdesignerdepot.com/2017/01/cards-vs-lists-how-they-impact-ux/)
- [RESEARCH, eye tracking, 2010] Information-carrying images get attention; decorative ones are ignored. — [NN/g, Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)
- [EXPERT, 2023] Gallery-only presentation without authorship and rationale makes a reviewer move on. — [Leslie Yang](https://leslieyang.substack.com/p/what-a-hiring-manager-looks-for-in)

### Inferences
Recommended work-index template:
1. H1 "Work" plus one sentence on what kind of work is shown and for whom.
2. **Featured case studies (3–5)**, ordered by strength and relevance to the work wanted, not by date. One- or two-column large cards. Each card: real product screenshot (consistent aspect ratio), project name, one-line outcome, role, year, 3–4 stack tags, and the whole card as one link (single tab stop).
3. **Optional "Other projects" list** below: compact text rows (name, one line, year, stack, link to repo or live site) for smaller or older work. A list is the better format here because it is text-led and scanned.
4. Closing contact prompt.

Reasoning
- With fewer than about 10 items everything is visible on one screen or two, so filtering by technology adds interface cost without a finding problem to solve. Show stack tags as plain text; add filters only when the list exceeds roughly 12–15 items.
- Show the year on each card so recency is visible even though order is by strength.
- Two columns on desktop, one on mobile; avoid three or more narrow columns, which shrink screenshots below the size where they carry information.

### Gaps
- No research found on grid versus list for portfolio indexes specifically, on optimal number of cards, or on ordering by recency versus strength. NN/g's own cards and filtering articles were not retrieved in this session.
- The threshold for adding filters is my judgement, not a sourced figure.

## Blog index page

### Takeaway
A reverse-chronological text list with title, date, one-line excerpt and tags is the best fit for a developer blog; use plain pagination or a "Load more" button, not infinite scroll, because infinite scroll blocks the footer, harms re-finding and is weak for keyboard and screen-reader users.

### Cited Findings
- [RESEARCH-BASED GUIDANCE, 2022] Infinite scroll suits homogeneous, goal-less browsing (social feeds, entertainment). Avoid it when users look for something specific, compare items, need the footer, or use keyboard/screen readers. Problems: footer unreachable, no landmarks for re-finding, back button returns to the top, heavier pages, crawlers may not see lazy content. "Load more" reduces these issues and keeps user control; pagination is best for task-focused finding and gives location markers. No single pattern is superior overall. — [NN/g, Infinite Scrolling: When to Use It, When to Avoid It](https://www.nngroup.com/articles/infinite-scrolling-tips/)
- [RESEARCH, usability testing, 2016, old, e-commerce] Baymard testing across 50+ e-commerce sites: with pagination users explored much less of the list and saw it as slow; with infinite scroll they saw more items with less focus and could not reach the footer; "Load more" performed best. Mobile: show 15–30 items before the button. Over 90% of benchmarked "Load more" sites broke back-button position; the fix is updating the URL with history.pushState. Never use infinite scroll for search results. — [Baymard via Smashing Magazine](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/)
- [EXPERT, 2017] Lists scan faster than cards for text-led content. — [Webdesigner Depot](https://www.webdesignerdepot.com/2017/01/cards-vs-lists-how-they-impact-ux/)
- [RESEARCH, eye tracking] Front-loaded, information-rich headings and link text are what scanning users pick up. — [NN/g, F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- [EXPERT, 2012, old] Publication dates affect perceived trustworthiness of articles (reported in search summary of the NN/g bylines article); bylines add little on a single-author site. — [NN/g, Bylines for Web Articles](https://www.nngroup.com/articles/bylines-for-web-articles/)

### Inferences
Recommended blog-index template:
1. H1 "Blog" or "Writing" plus one line on topics covered; RSS link.
2. Optional **Featured / start here**: 2–3 best posts pinned at top once there are more than about 10 posts.
3. **Post list**, newest first, grouped by year once the archive is long. Each row: title (the link), date in an unambiguous format with a `<time>` element, a one-sentence excerpt written by hand, 1–3 tags, optional reading time. No thumbnails unless each post has a meaningful image.
4. **Tags**: a small fixed set (5–10) shown as a row of links to tag pages; avoid a large tag cloud.
5. **Paging**: with under roughly 30 posts, show everything on one page (best for Ctrl+F, re-finding and footer access). Beyond that, numbered pagination at 15–30 per page or a "Load more" button that updates the URL.
6. **Search**: unnecessary below a few dozen posts; a full single-page archive plus browser find covers it. Add client-side search later.
7. **Empty state** at launch: do not publish an empty index; hide the Blog nav item until 2–3 posts exist.

### Gaps
- All pagination evidence comes from e-commerce and search contexts, not blog archives.
- No research found on excerpts versus title-only lists or on tag versus category taxonomies for small blogs.

## Blog post page: typography, headings, TOC, metadata, code blocks, end-of-post elements

### Takeaway
Set body text at about 18–20 px with line-height near 1.5 and a measure of 50–75 characters (hard cap 80), use descriptive H2/H3 headings, put an inline "On this page" list at the top (sticky side rail only on wide screens), show published and updated dates, and keep newsletter or contact prompts inline at the end rather than as popups. Code-block conventions (copy button, horizontal scroll, highlighting) are widely adopted practice with little formal research behind them.

### Cited Findings

Line length, size, spacing
- [RESEARCH + STANDARD, 2022] Baymard recommends 50–75 characters per line for body text and no more than 80; long lines are perceived as intimidating and users avoid reading them; fatigue reported beyond about 100 characters; implement with max-width near 70ch or 34em. Text must also tolerate line height 1.5, paragraph spacing 2em, letter spacing 0.12em, word spacing 0.16em (WCAG 1.4.12 text-spacing values). Line length matters less on portrait mobile but can exceed 80 in landscape. — [Baymard, Line Length](https://baymard.com/blog/line-length-readability)
- [STANDARD] WCAG 2.2 SC 1.4.8 Visual Presentation (Level AAA): width no more than 80 characters, text not justified, line spacing at least 1.5 within paragraphs and paragraph spacing at least 1.5 times line spacing, resizable to 200% without horizontal scrolling. Rationale: people with reading or vision disabilities lose their place on long lines. — [W3C, Understanding SC 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- [RESEARCH, academic, 2000s, old; conflicting] Dyson and colleagues found 100-character lines were read faster than 25-character lines with equal comprehension, while about 55 characters was judged easiest to read; subjective ease did not track measured performance. — [Wikipedia, Line length](https://en.wikipedia.org/wiki/Line_length); [Dyson & Kipping, Visible Language](https://journals.uc.edu/index.php/vl/article/view/5671); critique of the 50–75 rule at [Viget, The Line Length Misconception](https://www.viget.com/articles/the-line-length-misconception)
- [RESEARCH, eye tracking, 2016, old] Rello, Pielot and Marcos, "Make It Big!": 104 participants, font sizes 10–26 pt, four line spacings, Wikipedia articles. Readability and comprehension improved continuously up to 18 pt; very small and very large line spacing both hurt comprehension; recommendation is 18 pt or larger for text-heavy sites with default line spacing. — [BYU Editing Research summary](https://editingresearch.byu.edu/tag/make-it-big-the-effect-of-font-size-and-line-spacing-on-online-readability/)

Headings, scanning, front-loading
- [RESEARCH, eye tracking] Headings, front-loaded opening paragraphs, bullets and bold key phrases break the F-pattern. — [NN/g, F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- [RESEARCH, automated audit, February 2026] WebAIM Million 2026: 41.8% of home pages skip heading levels, 18.1% have more than one h1, 7.5% have no headings; only 46.1% have a main landmark. — [WebAIM Million](https://webaim.org/projects/million/)

Table of contents
- [RESEARCH-BASED GUIDANCE, 2023] NN/g: place the table of contents near the top, below the title and above the body; a TOC in a side rail should be sticky and highlight the current section; a TOC in the main column should not be sticky (it competes with global navigation); on mobile move it into the body, or use accordions, or a sticky collapsible control, though in testing users often failed to notice sticky collapsible TOCs; label it clearly ("Contents", "On this page", "In this article"); links must look like links. No minimum page length is specified. — [NN/g, Table of Contents: The Ultimate Design Guide](https://www.nngroup.com/articles/table-of-contents/)

Dates, bylines, author box
- [EXPERT, 2012, old] Nielsen: one-line bio at the top only when credibility is crucial, longer bio at the bottom; do not link author names to mailto; link to the author's other articles unless it is a single-author blog; publication dates affect perceived trustworthiness. — [NN/g, Bylines for Web Articles](https://www.nngroup.com/articles/bylines-for-web-articles/)

Reading time
- [WEAK, anecdotal] Individual bloggers reported bounce rate down 13% (David Michael Ross) and time on site up 13.8% (Brian Cray) after adding reading time; a vendor post claims "up to 40%" engagement gains. These are single-site before/after reports, not controlled studies. — [MarTech](https://martech.org/estimated-reading-times-increase-engagement/); [Simpleview](https://www.simpleviewinc.com/blog/stories/post/adding-read-time-on-blogs-boosts-engagement-by-up-to-40/)

Newsletter and other prompts
- [RESEARCH-BASED GUIDANCE, 2019] NN/g lists as problematic: popups before content loads, asking for an email before any interaction, modal overlays blocking content, several popups in a row. Recommended: ask only after a meaningful action such as finishing a post, use non-modal or inline placements, offer something concrete in return. — [NN/g, Popups: 10 Problematic Trends](https://www.nngroup.com/articles/popups/)
- [WEAK, unverified] A Webflow consultant's blog cites an "NN/g May 2026 modal usability study" finding 68% of users dislike newsletter modals. I could not find or verify this study at NN/g; do not cite the figure without confirming it. — [pravinkumar.co](https://www.pravinkumar.co/blog/webflow-newsletter-modal-replacement-design-2026)
- [EXPERT, vendor] Inline signup blocks placed at a natural break or after the article are suggested as the lower-disruption alternative. — [Marfeel docs](https://www.marfeel.com/docs/experiences/formats/popup-experiences-configuration-and-best-practices)

Code blocks (practice, not research)
- [EXPERT] Copy buttons in a corner can cover long lines, especially on mobile; common solution is a header bar or top padding with the button always visible on touch devices and hover-revealed on desktop; give the button an accessible name and announce "Copied" through a visually hidden role="status" element. — [OpenReplay blog](https://blog.openreplay.com/create-copy-button-code-blocks/); [Strapi docs PR](https://github.com/strapi/documentation/pull/2772)
- [EXPERT] Some documentation sites offer a wrap toggle on mobile as a trade-off against horizontal scrolling. — [The Guild docs issue](https://github.com/the-guild-org/docs/issues/1425)

Scroll depth
- [RESEARCH, analytics, 2013, old] Typical article readers reach about 60% of the page; a tenth never scroll. — [Slate](https://www.slate.com/articles/technology/technology/2013/06/how_people_read_online_why_you_won_t_finish_this_article.html)

### Inferences
Recommended blog-post template:
1. "← Blog" back link (or breadcrumb).
2. **Header**: H1 title; published date and "Updated" date when materially revised (important for technical content that ages); reading time (cheap, harmless, weakly supported); tags. No author box at the top on a single-author site.
3. **Lead paragraph** that states what the reader will learn or the conclusion (inverted pyramid). For tutorials add a short "Prerequisites / versions used" line.
4. **"On this page" TOC** for posts with roughly four or more H2s: inline and non-sticky at the top on mobile and narrow screens; sticky right-rail with current-section highlight at wide breakpoints. H2 and H3 only.
5. **Body**: one H1; H2/H3 without skipped levels; headings worded as descriptions of content; short paragraphs; lists; images with alt text and visible captions; heading anchor links.
6. **Code blocks**: syntax highlighting with contrast-checked theme in both light and dark; language label or filename header; always-visible copy button in the header bar with accessible name and status announcement; `overflow-x: auto` on the block so the page itself never scrolls sideways; `tabindex="0"` on scrollable blocks so keyboard users can scroll them; smaller monospace size (about 14–15 px) and short lines in examples to limit scrolling on phones; no line numbers in copied text.
7. **End of post**, in this order: brief author line (name, one sentence, link to About) → one primary next step (newsletter/RSS or "get in touch") inline → 2–3 related posts chosen by hand or tag → previous/next. Share buttons can be reduced to a copy-link control. Because many readers stop around 60%, nothing essential should exist only at the bottom; also link related case studies in the body text.
8. No modal or timed popups anywhere on reading pages.

Typography settings to implement: body 18–20 px (1.125–1.25rem), line-height 1.5–1.6, measure `max-width: 65–70ch`, left-aligned, paragraph spacing about 1em or more, headings with more space above than below, body text contrast at least 4.5:1.

Reasoning on the line-length conflict: the academic work (Dyson) shows longer lines can be read faster while readers prefer medium lines; Baymard and WCAG converge on a ceiling of 80. For a blog where willingness to start and continue reading matters more than raw speed, 60–75 is the defensible choice.

Comments: no evidence found either way. For a solo developer a hosted comment thread carries moderation and privacy cost; a "Reply by email" or link to a discussion elsewhere is a low-maintenance substitute.

### Gaps
- No controlled research found on code-block usability (copy buttons, wrap versus scroll, highlighting themes) or on reading-time labels; evidence is practice and anecdote.
- No research found on related-post modules, share buttons or comments for personal technical blogs.
- Rello et al. measured point sizes on a specific monitor setup; mapping 18 pt to CSS pixels is approximate, and the study was accessed only through a secondary summary.
- GOV.UK content design guidance could not be retrieved (the page now redirects to guidance.publishing.service.gov.uk and returned only a redirect notice), so its sentence-length and front-loading rules are not cited here.

## About page

### Takeaway
NN/g's research shows people use About content to judge whether an organisation is authentic, transparent and clearly explained, and they cross-check it against third-party sources; for a solo developer that translates to a plain statement of what you do, a real photo, a short story, verifiable proof and easy contact. First versus third person and resume download are not addressed by research found here.

### Cited Findings
- [RESEARCH, usability testing, 2019 with earlier rounds] NN/g ran three rounds of About Us research: 70+ users observed, 100 sites tested and 65 more reviewed, 85 guidelines; the latest round had 20 participants aged 24–65. Users want About content to be clear, authentic and transparent, and look for what the organisation does and stands for, location, history and contact methods. — [NN/g, About Us Information on Websites](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH, same study] Satisfaction rose with realistic photography, storytelling, plain language and clear headlines, several contact channels, honest testimonials and external endorsements; it fell with stock photos, walls of text, hidden basics (what the company does, contact details), pushy sales tone, poor contrast and non-mobile layouts. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH, same study] Participants said "reviews" more than 40 times across 20 sessions and routinely left the site to check third-party sources; when a site failed to explain what the company does, users said they would just search elsewhere. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH-BASED GUIDANCE, same article] Present About information at four levels: homepage tagline; main About page with 1–2 scannable paragraphs of goals and accomplishments; deeper sub-pages; footer links as a fallback. Users worry that giving an email address leads to spam. Most participants preferred desktop for researching a company. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH, eye tracking, 2010, old] Photos of real people attract attention; generic stock people are ignored. — [NN/g, Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)
- [EXPERT, 2023] Hiring managers want "I" statements and explicit personal contribution. — [Leslie Yang](https://leslieyang.substack.com/p/what-a-hiring-manager-looks-for-in)

### Inferences
Recommended About template:
1. H1 with a plain summary sentence: who you are, what you build, for whom, where you are based and your working time zone (the 1–2 scannable paragraphs NN/g recommends, written in first person).
2. Real photo of you (not an avatar or stock image), with alt text.
3. Short story: 2–4 short paragraphs on background, what you focus on now and how you work. Sub-headed, not a wall of text.
4. Facts block for scanners: experience timeline or current/previous roles, core stack, education or certifications, publications or talks or open source.
5. Proof that can be checked off-site: links to GitHub, LinkedIn, published packages, client or colleague testimonials with name and role. This answers the "reviews" behaviour: visitors will verify elsewhere, so point them to the evidence.
6. CV: link to an HTML or PDF CV (label with format and size). Low cost and useful to recruiters who must attach a document to a tracking system.
7. Personal note (optional, short) and contact prompt with email and link to Contact.

First versus third person: no research found; first person fits a one-person site and matches the hiring-manager preference for "I" statements. A short third-person bio can be offered separately for people who need to copy it (talk organisers).
Length: main page skimmable in under a minute, roughly 250–500 words plus the facts block.

### Gaps
- NN/g's study covers organisations, not personal sites; transfer to a solo developer is my inference.
- No research found on first versus third person, on resume/CV downloads, or on optimal About length for individuals.
- The full 85-guideline NN/g report is paid and was not consulted.

## Contact page

### Takeaway
Offer both a visible plain email address and a short form (name, email, message), with visible labels above fields, inline error messages, and a clear statement of what happens next (response time, time zone). Field-count conversion figures come from marketing case studies and should be treated as directional only.

### Cited Findings
- [RESEARCH-BASED GUIDANCE, 2016] NN/g top form recommendations: keep it short; labels close to fields, above the field on mobile and short forms; single-column layout; logical order; avoid placeholder text as labels; size fields to expected input; mark optional fields and limit them; state format requirements; no Reset/Clear buttons; visible errors not signalled by colour alone. — [NN/g, Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/)
- [RESEARCH-BASED GUIDANCE, 2014] Placeholders as labels strain memory, prevent checking entries, hinder error correction, get mistaken for prefilled values, usually fail contrast and may not be announced by screen readers; labels and hints should sit outside the field and remain visible. — [NN/g, Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/)
- [RESEARCH-BASED GUIDANCE, 2019, reviewed 2024] Error handling: validate inline after the user leaves a field, not while typing; put the message next to the field; make it explicit, polite and constructive; use colour plus an icon; do not rely on a summary alone or on tooltips. — [NN/g, Error-Message Guidelines for Forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [STANDARD] W3C WAI forms tutorial: every control needs a programmatic label (`<label>`), related controls grouped with fieldset/legend, instructions provided, input validated, and users notified of success and errors with instructions to fix them (WCAG 1.3.1, 2.4.6, 3.3.2, 4.1.2). — [W3C WAI Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [RESEARCH, automated audit, February 2026] 51% of the top million home pages have form inputs without labels; 30.6% have empty buttons. — [WebAIM Million 2026](https://webaim.org/projects/million/)
- [WEAK, marketing case studies, dates vary, mostly 2010s] Reducing a contact form from 11 to 4 fields raised conversions 120%; HubSpot's analysis of 40,000 forms is reported as showing higher conversion with 3 fields than 4; making a phone field optional cut abandonment from 39% to 4%. These are vendor-reported and not replicated. — [WPForms summary](https://wpforms.com/research-based-tips-to-improve-contact-form-conversions/); [UX Movement](https://uxmovement.com/forms/research-based-tips-for-a-better-contact-form/)
- [RESEARCH, usability testing, 2019] Users want several easy-to-find contact channels and fear spam when handing over an email address. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [EXPERT, 2012] Do not hide a mailto behind an unrelated link such as a name; links are expected to open pages. — [NN/g, Bylines](https://www.nngroup.com/articles/bylines-for-web-articles/)
- [WEAK, unsourced, 2026] One developer-portfolio checklist claims a direct email is better than a contact form. — [DevPlaybook](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers)
- [STANDARD] WCAG 2.2 additions relevant to forms and help: 3.2.6 Consistent Help (A), 3.3.7 Redundant Entry (A), 2.5.8 Target Size minimum 24×24 CSS px (AA), 2.4.11 Focus Not Obscured (AA). — [W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

### Inferences
Recommended Contact template:
1. H1 "Contact" plus one or two sentences: what kinds of enquiries are welcome (freelance, roles, speaking), current availability.
2. **Expectations placed above the form, not after it**: typical reply time ("I reply within two working days"), location and time zone with working hours in UTC offset. Setting expectations before submission reduces the uncertainty that stops people sending.
3. **Email address as visible, selectable text** and a mailto link labelled with the address itself, plus a copy button. Some users cannot or will not use forms; others have no mail client configured for mailto, so the address must be readable.
4. **Form**: Name, Email, Message (three fields); optional "What is this about?" select only if it changes how you respond. No phone, no budget field, no CAPTCHA puzzle (use a honeypot or server-side filtering). Labels above fields, `autocomplete="name"` / `"email"`, `type="email"`, single column, submit button labelled "Send message".
5. **Errors**: validate on blur and on submit; message beside the field tied with `aria-describedby`, `aria-invalid` set; focus moved to the first error or an error summary; keep everything the user typed.
6. **After sending**: inline confirmation that replaces the form, announced with a status role, restating when to expect a reply and offering the direct email as fallback; if sending fails, say so and show the email address and preserve the message.
7. **Alternative channels**: LinkedIn, GitHub, optional scheduling link; only channels actually monitored.
8. Short privacy line: what happens to the submitted data and that it is not used for mailing lists (addresses the spam fear).

### Gaps
- No NN/g "Contact Us" page study was found in this session, and no research comparing form versus email link for personal sites. The "offer both" recommendation is an inference from the multiple-channels finding.
- No evidence found on stating response time or time zone; that placement advice is reasoning only.
- Field-count figures are old vendor case studies from lead-generation contexts.

## Cross-page elements: breadcrumbs, next/previous, related content, footer, templates, 404 and empty states

### Takeaway
On a site only two levels deep, full breadcrumbs are optional; a single parent link does the job. Footers matter as a fallback route to About and Contact, 404 pages need plain language plus routes onward, and contact help should sit in the same place on every page.

### Cited Findings
- [RESEARCH-BASED GUIDANCE, 2018] Breadcrumbs are secondary navigation that helps people arriving from external links; they are not necessary or useful on flat sites only 1–2 levels deep; they should show site hierarchy not history; the current page is the last item and not a link; on mobile avoid wrapping to several lines, keep adequate tap targets, and consider showing only the immediate parent. — [NN/g, Breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/)
- [RESEARCH, usability testing, 2019] Footer links act as the fallback when users fail to find About or contact information through main navigation; hidden contact details reduce satisfaction. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH, 2016–2022] Infinite scroll makes the footer unreachable. — [NN/g, Infinite Scrolling](https://www.nngroup.com/articles/infinite-scrolling-tips/); [Baymard via Smashing](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/)
- [EXPERT, 1998, very old but still the NN/g reference] 404 pages should use plain language, say precisely what went wrong, and be constructive: apologise, suggest likely fixes, link to close matches and offer search. — [NN/g, Improving the Dreaded 404 Error Message](https://www.nngroup.com/articles/improving-dreaded-404-error-message/)
- [EXPERT] 404 and empty states should explain why the page is empty and give links to the home page and best content. — [Uxcel, 404 best practices](https://uxcel.com/blog/11-best-practices-for-designing-404-pages-656)
- [STANDARD] WCAG 2.2 SC 3.2.6 Consistent Help (A): help mechanisms such as contact details must appear in the same relative order across pages. — [W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

### Inferences
- **Breadcrumbs**: the site will be Home → Work → Project and Home → Blog → Post (two levels). Many case-study and post visitors arrive from search, social or a CV link, so a wayfinding cue is still useful; replace the breadcrumb bar with a single "← Work" / "← Blog" link, or keep a one-line breadcrumb if wanted for structured data. If kept: `<nav aria-label="Breadcrumb">` with an ordered list and `aria-current="page"` on the last item.
- **Next/previous**: at the end of case studies and posts, paired with a link to the index and a contact prompt; show the title of the destination, not just "Next".
- **Related content**: cross-link case studies and blog posts that cover the same project or technology; hand-picked beats algorithmic at this scale.
- **Footer** on every page, identical: email address, Contact, About, Work, Blog, RSS, GitHub/LinkedIn, and a "back to top" on long pages. This also satisfies Consistent Help.
- **Consistent templates**: one case-study template and one post template with fixed section order lets returning reviewers find role, stack and outcome in the same place each time.
- **404**: plain message, links to Work, Blog, Home and Contact, and the 3 most recent posts; no joke that hides the explanation. Keep the real 404 status code.
- **Empty states**: tag pages with zero posts, a not-yet-launched blog and failed form submissions each need a one-line explanation and a route onward; hide sections that have no content rather than showing "coming soon".

### Gaps
- No research found on next/previous or related-content modules on portfolio sites.
- No recent (2020s) NN/g research on 404 pages was retrieved; the cited guideline dates from 1998.

## Accessibility and mobile for these page types (WCAG 2.2)

### Takeaway
The most common real-world failures are basic and cheap to avoid: low contrast, missing alt text, unlabelled form inputs, empty links/buttons and broken heading order. WCAG 2.2 adds target size, focus visibility under sticky elements and consistent help, all of which bear on sticky headers/TOCs, tag chips and icon links.

### Cited Findings
- [RESEARCH, automated audit, February 2026] WebAIM Million 2026: 95.9% of home pages had detectable WCAG 2 failures. Most common: low-contrast text 83.9%, missing alt text 53.1%, missing form labels 51%, empty links 46.3%, empty buttons 30.6%, missing document language 13.5%. Skipped heading levels on 41.8% of pages; more than one h1 on 18.1%; no headings on 7.5%. Pages using ARIA averaged more errors (59.1) than pages without (42). — [WebAIM Million](https://webaim.org/projects/million/)
- [STANDARD] New in WCAG 2.2: 2.4.11 Focus Not Obscured (AA): a focused component must not be entirely hidden by author content such as sticky bars; 2.5.8 Target Size Minimum (AA): targets at least 24×24 CSS px or sufficiently spaced; 2.5.7 Dragging Movements (AA); 3.2.6 Consistent Help (A); 3.3.7 Redundant Entry (A); 3.3.8 Accessible Authentication (AA); 2.4.13 Focus Appearance (AAA): indicator at least a 2 px perimeter with 3:1 contrast; 4.1.1 Parsing removed. — [W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [STANDARD] SC 1.4.8 (AAA): max 80 characters, no justified text, line spacing 1.5, 200% resize without horizontal scroll. — [W3C, Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- [RESEARCH-BASED GUIDANCE] Mobile breadcrumb tap targets at least 1 cm × 1 cm; do not let breadcrumbs wrap. — [NN/g, Breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/)
- [RESEARCH-BASED GUIDANCE, 2023] Sticky collapsible TOCs on mobile were often not noticed in testing; in-body TOC is the safe mobile choice. — [NN/g, Table of Contents](https://www.nngroup.com/articles/table-of-contents/)
- [RESEARCH, 2022] Infinite scroll is a keyboard and screen-reader barrier. — [NN/g, Infinite Scrolling](https://www.nngroup.com/articles/infinite-scrolling-tips/)
- [STANDARD] Forms need programmatic labels, grouping, instructions, and success/error notifications. — [W3C WAI Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)

### Inferences
Checklist by page type:
- **All pages**: `lang` on `<html>`; one `<h1>`; no skipped heading levels; `<header>`, `<nav>`, `<main>`, `<footer>` landmarks with a skip link; unique `<title>` per page; visible focus style with at least 3:1 contrast; `scroll-padding-top` equal to sticky header height so focused elements and anchor targets are not hidden (2.4.11); text contrast 4.5:1 including muted metadata, tags and dates; honour `prefers-reduced-motion`; native elements before ARIA (pages with ARIA average more errors).
- **Case study**: alt text describing what each screenshot shows, empty alt for decorative images; captions as visible text; diagrams with a text equivalent; video with captions and no autoplay with sound; before/after shown side by side or stacked rather than drag sliders (2.5.7), or give the slider keyboard and button controls.
- **Work and blog index**: each card one link with the title as accessible name (avoid duplicate "Read more" links and empty image links); tag chips and pagination links at least 24×24 px with spacing, preferably about 44 px tall on touch.
- **Blog post**: heading anchors keyboard reachable; TOC in `<nav aria-label="On this page">`; code blocks focusable when horizontally scrollable; copy buttons with accessible names and status announcement; syntax theme colours contrast-checked; page must not scroll horizontally at 320 px width; text resizable to 200%.
- **Contact**: `<label for>` on every field, `autocomplete` tokens, errors linked with `aria-describedby`, status message for success, no time limits, no puzzle CAPTCHA.
- **Mobile**: body text at least 16 px (ideally 18 px), single column, in-body TOC, breadcrumb reduced to parent link, footer reachable (no infinite scroll).

### Gaps
- WebAIM data covers home pages of the top million sites, not inner pages or personal sites.
- The advice on focusable code blocks, `scroll-padding-top` and 44 px touch targets is standard practitioner technique and not sourced to a document retrieved in this session.

## Common mistakes on these page types in developer portfolios

### Takeaway
The recurring failures are about communication rather than code: unclear personal role, technology lists without problem or impact, too many or stale projects, outcomes buried or missing, and no easy route to contact. Sources here are almost entirely opinion.

### Cited Findings
- [EXPERT] Most reviewed developer portfolios were polished but did not help the person get hired; the same feedback was needed repeatedly; portfolios are treated as an index of everything rather than a highlight reel. — [Josh W. Comeau](https://www.joshwcomeau.com/effective-portfolio/)
- [WEAK] Too many projects; technology focus with no "why" or impact; bare project titles without challenges, contribution or outcome; disorganised layout; outdated work; tutorial clones. — [Lyrid](https://www.lyrid.io/post/5-critical-software-engineer-portfolio-mistakes-that-junior-developers-are-making)
- [EXPERT, 2023] Gallery-only presentation with unclear authorship; "we" instead of "I". — [Leslie Yang](https://leslieyang.substack.com/p/what-a-hiring-manager-looks-for-in)
- [RESEARCH, survey, 2019] Reviewers rarely read word for word; they want process, rejected options, impact and lessons, not only polished end results. — [NN/g, UX Design Portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [EXPERT, 2026] Perfect narratives are less believable than ones that state constraints, bugs and trade-offs. — [GreatFrontEnd](https://www.greatfrontend.com/blog/frontend-developer-portfolio)
- [RESEARCH, 2019] On About pages: stock photos, walls of text, vague language about what you do, hidden contact details. — [NN/g, About Us](https://www.nngroup.com/articles/about-us-information-on-websites/)
- [RESEARCH-BASED GUIDANCE] Placeholder-only form labels; email-capture popups before content. — [NN/g, Placeholders](https://www.nngroup.com/articles/form-design-placeholders/); [NN/g, Popups](https://www.nngroup.com/articles/popups/)
- [RESEARCH, 2026] Low contrast, missing alt text, unlabelled inputs and skipped headings are near-universal. — [WebAIM Million](https://webaim.org/projects/million/)

### Inferences
Mistakes present in, or at risk for, the current site:
- Outcome is last on the page, so most visitors never see it.
- Each section is one undivided paragraph, which invites F-pattern skimming and hides decisions.
- "Role" is a spec-list label only; it does not say what was personally done versus the team.
- No links to live site, repo or demo in a fixed place.
- The page ends with only "next project": no contact route, no index link.
- No About or Contact page, so the questions "who is this" and "how do I reach them" have no destination; no work index, so there is no overview for someone landing on a case study from outside.
Other common mistakes to avoid when adding the new pages: technology filter UI over five projects; blog index launched empty or with "coming soon"; body text too small, too wide or low-contrast grey; code blocks that make the whole page scroll sideways on phones; icon-only social links without accessible names; contact form with no confirmation and no visible email; sticky header covering anchored headings; dates missing from technical posts.

### Gaps
- No quantitative study of developer-portfolio mistakes was found; "90% of portfolios" style claims in search results are unsourced and were not used.
- Nothing found separating what freelance clients versus employers penalise.
