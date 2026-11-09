# Lead with work, keep navigation plain

The best-supported structure for nomanjawad.com is a hybrid: a short home page that summarises and links out, plus real pages for Work, Blog, About and Contact, with case studies and posts one level below. On the home page, the first screen should carry name, role, a one-sentence value statement, one line of proof and one primary button, and the first project should start in the second screenful, because eye tracking puts 57% of viewing time above the fold and 74% in the first two screenfuls ([NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)). The current order (Hero, marquee, About, Work, Skills, Experience, Contact) puts the work behind three blocks of preamble and leaves the only contact route in seventh place. Case studies should be turned upside down so that outcome, role and links sit at the top, where today the Outcome is the last paragraph. Two earlier recommendations change: the IDE shell stays, with conventional, always-visible, plainly labelled links, and the priced service pages are dropped in favour of a capabilities block on the home and About pages. The evidence is strong for scroll attention, visible navigation, zigzag layouts, forms and auto-moving content; it is transferred from news, e-commerce and corporate sites almost everywhere else; and section order, project counts and most case-study advice are expert opinion. No study links any portfolio structure to hiring or client outcomes, so the site should measure its own scroll depth and contact events.

## What the evidence can and cannot support

Almost none of the primary research was done on personal developer portfolios. The table below sorts the main claims in this report by how far they can be trusted, so that each later recommendation can be read with the right weight.

| Strength | Claim | Source and caveat |
|---|---|---|
| Strong (empirical, general websites) | Attention falls steeply with depth: 57% of viewing time above the fold, 74% in two screenfuls | NN/g eye tracking, 120 participants, desktop, 2018 ([NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)) |
| Strong | Hidden navigation cuts discoverability by over 20% and lengthens tasks; with four or fewer links, show them on mobile | NN/g, 179 participants, 2016; ten years old, no replication found ([NN/g](https://www.nngroup.com/articles/hamburger-menus/)) |
| Strong | Alternating image/text rows scan less efficiently than aligned ones | NN/g eye tracking ([NN/g](https://nngroup.com/articles/zigzag-page-layout)) |
| Strong | Auto-moving content gets skipped; motion lasting over five seconds needs a pause control | NN/g tests ([NN/g](https://www.nngroup.com/articles/auto-forwarding/)); WCAG 2.2 SC 2.2.2 ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)) |
| Strong | Scroll-jacking harms task success; parallax adds "fun" but no usability | NN/g tests, 2023 ([NN/g](https://www.nngroup.com/articles/scrolljacking-101/)); Purdue, 86 participants ([JUS](https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Frederick_Feb2015.pdf)) |
| Strong | Form rules: visible labels, single column, inline errors | NN/g guidance ([NN/g](https://www.nngroup.com/articles/web-form-design/)); W3C ([W3C](https://www.w3.org/WAI/tutorials/forms/)) |
| Transferred | Reviewers scan; want role, process, impact, lessons; 3 to 5 case studies | Survey of 204 UX hiring managers, not developer hiring ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/)) |
| Transferred | About pages are judged on clarity, real photos, checkable proof | NN/g studies of organisations, not individuals ([NN/g](https://www.nngroup.com/articles/about-us-information-on-websites/)) |
| Transferred | Pagination or "Load more" beats infinite scroll for finding things | E-commerce and search testing ([NN/g](https://www.nngroup.com/articles/infinite-scrolling-tips/)) |
| Transferred | Body text 50 to 75 characters per line; light mode reads better for most | Baymard ([Baymard](https://baymard.com/blog/line-length-readability)); literature review ([NN/g](https://www.nngroup.com/articles/dark-mode/)) |
| Opinion only | Work before About; three featured projects; text skills over bars or logos; case-study section order; stating reply time; IDE themes | Practitioner guides and observed sites; no experiment found |

Two readings of this table matter. First, the scroll data comes in two compatible forms: nearly everyone sees the top, about half of home-page visitors reach roughly pixel 1000 ([Chartbeat](https://chartbeat.com/resources/research/scroll-behavior-across-the-web/)), and the average scroll rate across industries was 54% in 2022 ([Contentsquare](https://www.businesswire.com/news/home/20220324005433/en)). Those who keep going spend more time per pixel lower down, so long pages are fine as long as the top is self-sufficient. Second, several figures that circulate in portfolio advice have no traceable source and are left out here, including the "73% of hiring managers" Stack Overflow claim, the "60-second review" and "3 minutes per portfolio" timings, and a "34% task completion" figure for sticky headers.

## A flat four-page site inside the existing shell

A blog forces a multi-page site, since each post needs a URL, so the real choice is how much the home page keeps. No controlled comparison of one-page and multi-page portfolios exists. The hybrid follows from two general findings: content low on a long page gets little attention, and any page can be a visitor's first page because search and shared links land on interior pages ([NN/g](https://www.nngroup.com/articles/navigation-you-are-here/)). Flat structures work when the categories are distinct and recognisable ([NN/g](https://www.nngroup.com/articles/flat-vs-deep-hierarchy/)), and the "three-click rule" has no data behind it, so clear labels matter more than click counts ([NN/g](https://www.nngroup.com/articles/3-click-rule/)).

| Level | Route | Purpose | Status today |
|---|---|---|---|
| 0 | `/` | Summary: identity, three featured projects, short About, recent posts, contact | Exists as one long page |
| 1 | `/work` | Index of all case studies; parent of every project page | Missing |
| 1 | `/blog` | Index of posts, newest first, with RSS | Missing |
| 1 | `/about` | Story, real photo, full experience, capabilities, CV link | Missing |
| 1 | `/contact` | Email address, short form, reply-time and time-zone statement | Missing |
| 2 | `/work/[slug]` | Case study | Exists; six URLs stay identical |
| 2 | `/blog/[slug]` | Post | Missing |
| Footer level | `/blog/tags/[tag]`, `/rss.xml`, CV as PDF, custom 404 | Added only when they hold content | Missing |

There are no `/services` routes. Uses and Now pages are developer conventions with no usability evidence either way and can wait.

### The IDE shell stays, with plain labels

The earlier report advised replacing the IDE shell with a top navigation bar and labelled that a judgement call. The new evidence does not support replacement. NN/g endorses left-side vertical navigation as easy to scan and suited to growing structures, provided it is visible, left-aligned and worded with keywords first ([NN/g](https://www.nngroup.com/videos/vertical-navigation/)). No study of IDE-themed or terminal-themed portfolios exists. The applicable principle is Jakob's law, that people expect a site to work like the others they know ([NN/g](https://www.nngroup.com/articles/end-of-web-design/)), and one expert review of creative portfolios found the recurring faults were hidden and non-standard navigation, not unusual looks ([Smashing Magazine](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)). The rule that follows is: keep the visual theme, make navigation behave conventionally.

In practice the Sidebar lists four pages as plain text links, **Work, Blog, About, Contact**, with the current page highlighted and the parent item staying highlighted on case studies and posts. File-name labels such as `about.tsx` can decorate a link but never replace the plain word. The sidebar should list pages only. A small NN/g study found that in-page anchor links styled like ordinary links break people's expectations ([NN/g](https://www.nngroup.com/articles/in-page-links-content-navigation/)), so home-page anchors do not belong beside page links. The Topbar holds the page title, the theme toggle, a visible search or "⌘K" button and a CV link; it does not repeat the sidebar. The CommandPalette remains as an accelerator and later as blog search. Guidance on palettes is practitioner opinion from application design, and it says a palette should never be the only route to anything ([Superhuman](https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/)).

On phones, four links is exactly the NN/g threshold for showing links visibly instead of behind a hamburger, so the shell should collapse to a slim bar with four text links. This also replaces the earlier report's sticky bottom action bar, for which no verifiable web evidence was found. A skip link should be the first focusable element, since the sidebar precedes the content in the page source ([W3C](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)). An identical footer on every page repeats the four links and adds the email address, GitHub, LinkedIn, CV and RSS; NN/g found the footer is where people look when the main navigation fails them ([NN/g](https://www.nngroup.com/articles/about-us-information-on-websites/)). Full breadcrumbs are unnecessary on a two-level site ([NN/g](https://www.nngroup.com/articles/breadcrumbs/)); a single "← Work" or "← Blog" link does the job.

## The home page: seven sections become six, work second

The recommended order is Hero, Selected work, About with capabilities, Experience, Writing, Contact. Only the first screen and the position of Work rest on measurement. The rest is consensus and reasoning from visitor tasks: recruiters need role, level and CV; engineering leads need case-study depth; clients need proof and a way to get in touch; peers arrive for posts. Respected sites show that About-first can work (Brittany Chiang's page runs About, Experience, Projects, Writing), but only with a very short About and persistent navigation ([brittanychiang.com](https://brittanychiang.com/)). Those owners also have established audiences, which Noman does not yet have.

| # | Section | Contents | Basis |
|---|---|---|---|
| 1 | Hero | H1 with name and role ("Noman E Jawad, full stack developer"); one sentence on what he builds and for whom; primary button "View work", quieter secondary "Contact"; facts card with two to four checkable facts (current role, years, Dhaka and working-hours overlap); portrait; top edge of the next section visible | Scroll eye tracking (strong); wording and photo are opinion |
| 2 | Selected work | Three projects in strength order; image on the same side in every row or a uniform two-column grid; each card: real screenshot, name, one-line outcome, role, three to five stack tags, whole card links to the case study; "All work" link to `/work` | Zigzag finding (strong); count is opinion |
| 3 | About and capabilities | One short first-person paragraph; capabilities as grouped plain text (Frontend, Backend, Commerce, AI integration, Infrastructure); link to `/about` | Opinion; replaces Marquee, Skills table and four stats |
| 4 | Experience | Three or four most recent roles in one left-aligned column (title, company, dates, one line); "Full CV" link | Observed pattern; no research |
| 5 | Writing | Three latest or best posts (title, date, one line); "All posts" link; hidden until two or three posts exist | Inference from site purpose |
| 6 | Contact | Short prompt, visible email address, the three-field form or a link to `/contact` | Form guidance (strong); placement is inference |

Three points need explanation. The hero must not look like a finished page: NN/g calls this the illusion of completeness and recommends cutting content off at the fold so people see there is more ([NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)). The earlier report described the reference hero as full-viewport; the hero should stop short of full height. The one-paragraph subtitle becomes one sentence, because scanning readers pick up headings and standout words, not paragraphs ([NN/g](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)). And the facts card and the four About stats say the same kind of thing twice, so the card stays and the stats go.

The technology Marquee should be removed. It runs indefinitely beside other content, which fails WCAG 2.2.2 without a pause control, and moving elements are read as advertising and skipped ([NN/g](https://www.nngroup.com/articles/auto-forwarding/)). The Skills table duplicates it. Practitioner opinion, with no formal study, holds that skills are credible when attached to projects and that bars or percentages mean nothing ([Hiration](https://www.hiration.com/blog/skill-bars-resume/)), so stack tags on cards plus one grouped text block are enough. Testimonials stay hidden unless the quotes are real, named and attributable; if they are, one to three belong after Selected work.

The argument for three projects instead of six is page length, not choice overload. A meta-analysis found the "too many options" effect averages about zero ([Scheibehenne et al.](https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf)). Six full-width rows are roughly six screenfuls on a phone, which pushes Experience, Writing and Contact out of reach. All six projects remain on `/work`.

### The motion hero is acceptable on four conditions

No study has tested cursor-following portraits. General evidence says motion in peripheral vision pulls attention involuntarily and should be brief and subtle ([NN/g](https://www.nngroup.com/articles/animation-purpose-ux/)), and the Purdue experiment suggests motion makes a site more enjoyable without making it more usable. For a developer, some display of craft is a work sample, so the planned hero can ship if the text is server-rendered and static, the tilt starts only on pointer movement and has a small range, touch devices and `prefers-reduced-motion` users get a still image, and nothing loops unprompted for more than five seconds. The earlier finding still holds that the reference effect is a tilted image driven by Motion, not WebGL. The rest of the earlier motion list should shrink: the scroll-tied marquee is dropped; text reveals must never hide text until an animation runs; sticky stacking project cards are optional, desktop-only and below the fold, following NN/g's advice to keep scroll effects away from the first screen and off mobile ([NN/g](https://www.nngroup.com/articles/scrolljacking-101/)); and the bento proof grid, which has no usability evidence, gives way to the facts card.

Typography changes with the same logic. Body paragraphs should move from JetBrains Mono to a proportional sans-serif, with monospace kept for labels, tags, dates and code. The direct evidence is thin: one 2001 study in which the only monospace font tested read second slowest, known through a secondary account ([Coding Horror](https://blog.codinghorror.com/comparing-font-legibility/)). The mechanism is uncontroversial, though, since monospace fits fewer words per line. Both themes stay, following the system preference, and section headings should be literal ("Selected work", "Experience").

## Inner pages: outcome first on case studies, lists for writing

### Case study (`/work/[slug]`)

People read about 20% to 28% of the words on a page ([NN/g](https://www.nngroup.com/articles/how-little-do-users-read/)), and article readers typically reach about 60% of the page ([Slate](https://www.slate.com/articles/technology/technology/2013/06/how_people_read_online_why_you_won_t_finish_this_article.html)). The current template saves the Outcome for the last paragraph, so most visitors never see it. The inverted pyramid, with the conclusion first, lets a reader stop anywhere and still have the point ([NN/g](https://www.nngroup.com/articles/inverted-pyramid/)). What to include comes from hiring-side sources that agree with each other but are surveys and opinion: the NN/g survey of UX hiring managers, a hiring manager who rejects galleries where authorship is unclear and wants "I" statements ([Leslie Yang](https://leslieyang.substack.com/p/what-a-hiring-manager-looks-for-in)), and a developer guide that asks for constraints and trade-offs ([GreatFrontEnd](https://www.greatfrontend.com/blog/frontend-developer-portfolio)).

| # | Block | Contents |
|---|---|---|
| 1 | Parent link | "← Work" in place of the crumb bar |
| 2 | Header | Kicker (type of work, client or industry, year); title; one-sentence summary written as an outcome |
| 3 | Specs, above the image | Role with "my part" in one line; team; stack; duration; year; links to live site, repository, demo |
| 4 | Results strip | Two to four outcomes, quantified where possible; Lighthouse or Core Web Vitals before and after when client numbers are unavailable |
| 5 | Hero visual | Real product screenshot with a caption |
| 6 | Problem and constraints | Who had the problem, why it mattered, deadline, budget, legacy stack |
| 7 | My contribution | First-person list of what he did; what others did |
| 8 | Approach and key decisions | Two to four sub-headed decisions: options, choice, trade-off; one diagram; one short code excerpt if it shows something |
| 9 | Solution | Annotated screenshots, before and after stacked or side by side |
| 10 | Outcome | Full results with how each was measured; a named testimonial here if one exists |
| 11 | Lessons | What he would do differently |
| 12 | Next step | Contact prompt; next and previous project by title; "All work"; related posts |

A defensible length is 600 to 1,200 words with four to eight visuals; no source gives a tested word count. The page should make sense from headings, the results strip and captions alone. Images that carry information get looked at and decorative ones are ignored ([NN/g](https://www.nngroup.com/articles/photos-as-web-content/)), so product screenshots beat abstract mock-ups.

### Work index (`/work`)

The page opens with an H1 "Work" and one sentence on what kind of work is shown. All six projects follow in strength order, not date order, in a uniform two-column grid on desktop and one column on mobile. Each card matches the home card and adds the year. If one or two projects are clearly weaker, they move to a compact "Other projects" text list underneath. The page closes with a contact prompt. Filters by technology are unjustified at this size; the threshold of roughly 12 to 15 items for adding them is the researchers' judgement. Josh Comeau, from reviewing a couple of hundred developer portfolios, advises a highlight reel of two to five projects over an index of everything ([Josh W. Comeau](https://www.joshwcomeau.com/effective-portfolio/)).

### Blog index (`/blog`)

The page opens with an H1 "Blog", one line on topics, and an RSS link. Posts appear as a text list, newest first: title as the link, date, one hand-written sentence, one to three tags. Thumbnails are unnecessary. Below about 30 posts everything sits on one page, which keeps browser find and the footer usable; beyond that, numbered pages or a "Load more" button that updates the URL. Infinite scroll is ruled out because it hides the footer and hampers keyboard users ([NN/g](https://www.nngroup.com/articles/infinite-scrolling-tips/)). Once there are more than about ten posts, two or three "start here" picks go on top. Tags stay a small fixed set shared with case studies, and no tag page is published for a single item. The Blog nav item appears only when two or three posts exist.

### Blog post (`/blog/[slug]`)

| # | Block | Contents |
|---|---|---|
| 1 | Parent link | "← Blog" |
| 2 | Header | H1; published date and "Updated" date; reading time; tags |
| 3 | Lead | What the reader will learn or the conclusion; versions used, for tutorials |
| 4 | "On this page" | For posts with four or more H2s: inline at the top on mobile; sticky side rail with current-section highlight on wide screens |
| 5 | Body | Descriptive H2 and H3 with no skipped levels; short paragraphs; captioned images; code blocks with language label, copy button, and horizontal scroll inside the block |
| 6 | End | One-line author note linking to About; one next step (RSS or "get in touch"); two or three related posts and any related case study; previous and next by title |

Body text should be 18 to 20 px at a line-height near 1.5 with a measure of 65 to 70 characters. An eye-tracking study with 104 participants found readability improved up to 18 pt, known here through a secondary summary ([BYU](https://editingresearch.byu.edu/tag/make-it-big-the-effect-of-font-size-and-line-spacing-on-online-readability/)). The line-length rule is contested: academic work found longer lines read faster while readers preferred medium ones ([Viget](https://www.viget.com/articles/the-line-length-misconception)), and the 60 to 75 range is chosen because willingness to keep reading matters more than raw speed. The table-of-contents placement follows NN/g testing, which found sticky collapsible versions often go unnoticed on mobile ([NN/g](https://www.nngroup.com/articles/table-of-contents/)). No popups appear on reading pages ([NN/g](https://www.nngroup.com/articles/popups/)). Code-block conventions and reading-time labels are common practice with only anecdote behind them.

### About (`/about`)

The page opens with a plain first-person summary: who he is, what he builds, for whom, that he is in Dhaka, and his working-hours overlap with Australia and the US. A real photograph follows, then a story of two to four short sub-headed paragraphs, then a facts block with the full experience timeline, grouped capabilities, education and open source. Next come links people can check off-site (GitHub, LinkedIn, published packages, named testimonials), a CV link labelled with format and size, and a contact prompt. The main text should run 250 to 500 words. NN/g's About research found satisfaction rose with real photography, plain language and external endorsement, and that participants routinely left the site to verify claims elsewhere ([NN/g](https://www.nngroup.com/articles/about-us-information-on-websites/)); it studied organisations, so applying it to one person is inference. The stylised hero portrait and the real About photo therefore serve different jobs. Nothing was found on first versus third person or on CV downloads.

### Contact (`/contact`)

The page opens with an H1 and one or two sentences on which enquiries are welcome. Above the form sit a reply-time promise and his time zone. The email address appears as visible, selectable text with a copy button. The form has three fields, Name, Email and Message, with labels above the fields, one column, and a button reading "Send message". Errors appear beside the field after the visitor leaves it, and typed text is never lost ([NN/g](https://www.nngroup.com/articles/errors-forms-design-guidelines/)). After sending, an inline confirmation replaces the form and restates the reply time; on failure the page says so and shows the address. Monitored alternative channels and a one-line privacy note close the page. Placeholders must not stand in for labels ([NN/g](https://www.nngroup.com/articles/form-design-placeholders/)). "Offer both email and form" is an inference from the finding that users want several contact channels; the reply-time statement is reasoning only, and field-count conversion figures come from old vendor case studies.

### Shared rules

Every page gets one H1, a unique title in the pattern "Page name | Noman E Jawad", the same shell and the same footer. The 404 page keeps the shell, says plainly that the page was not found, and links to Home, Work, Blog and Contact. Sections with no content are hidden, never labelled "coming soon". The basics deserve a check on every template, since a February 2026 audit found low-contrast text on 83.9% of top home pages and unlabelled form inputs on 51% ([WebAIM](https://webaim.org/projects/million/)). WCAG 2.2 adds a 24 px minimum target size and a rule that sticky bars must not hide the focused element ([W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).

## Where the Wix article agrees and where it does not

The Wix portfolio SEO guide is vendor marketing from a company that sells a portfolio builder, written mainly for local creatives, and cites one statistic ([Wix](https://www.wix.com/blog/portfolio-seo)). It is treated here as expert opinion. On structure it mostly agrees with the research: it argues against a single-page portfolio and for dedicated, text-rich project pages; its home pattern (H1 with role, short intro, featured projects, capabilities, concise bio) matches the order above; its project pattern (descriptive title, overview facts, challenge, outcome, captioned images) fits the case-study template; and it warns against motion that shifts layout and urges showing only the best work with context.

| Wix advice | Position in this report |
|---|---|
| Services pages linked from projects | Conflicts with the owner's decision. Capabilities become a section on Home and About; no `/services` routes or prices |
| Google Business Profile, address and phone on Contact | Rejected. The profile requires in-person customer contact ([Google](https://support.google.com/business/answer/3038177)); state Dhaka and working hours in text |
| Results in 4 to 8 weeks | Conflicts with earlier research: weeks for his name only; 1.74% of new pages reach the top 10 within a year ([Ahrefs](https://ahrefs.com/blog/how-long-does-it-take-to-rank/)) |
| "Authority score" rises with three to five articles | A third-party tool metric, not a Google concept |
| FAQ sections | Fine for readers; FAQ rich results ended on 7 May 2026 ([Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage)) |
| Person, CreativeWork, Breadcrumb schema | Cheap, with no measured ranking gain for individuals. Visible breadcrumbs are unnecessary on a two-level site per NN/g; keep the parent link |
| Avoid vague headings like "My Work" | Partial conflict. Navigation labels should stay literal ("Work", "Blog"); page H1s and case-study titles can be descriptive |
| One-paragraph home intro | Minor conflict. Scanning evidence favours one sentence in the hero; the paragraph belongs in About |
| Keyword-led H1 on project pages | Compatible when the keyword fits an outcome-led title naturally |

## Changes to the current site, by phase

The phases are those of the earlier plan: Phase 0 fixes, Phase 1 domain and SEO, Phase 2 content collections and blog, Phase 3 redesign, Phase 4 new pages. Changes to earlier recommendations are marked "Revised".

| Phase | Change | Where | Basis |
|---|---|---|---|
| 0 | Make the contact form send; add visible labels, inline errors, confirmation and failure states | `ContactForm.tsx` | Strong |
| 0 | Show the email address as text in the Contact section and footer; add a Contact link and CV link to the shell | Sidebar, Topbar | Scroll data plus inference |
| 0 | Remove the technology Marquee (or make it static) | `page.tsx` | Strong (WCAG 2.2.2) |
| 0 | Move Work above About; cut the hero subtitle to one sentence | `page.tsx`, `content.json` | Scroll data; a quick reorder ahead of the full redesign |
| 0 | Add a skip link | Shell layout | Standard |
| 1 | Unique title and canonical URL per page on nomanjawad.com; keep the six `/work/[slug]` URLs | Metadata | Guidance |
| 2 | Add `/blog`, `/blog/[slug]`, RSS and shared tags using the list and post templates | New routes | Transferred |
| 2 | Add case-study fields to the content schema: outcome summary, my part, team, links, results, decisions, lessons, related posts | Content collections | Opinion |
| 2 | Drop the planned `content/services` collection | Content model | Revised (owner decision) |
| 2 | Add the Writing section to Home and the Blog nav item once two or three posts exist | `page.tsx`, Sidebar | Inference |
| 3 | Keep the IDE shell; four plain page links, pages only; Topbar for utilities; visible palette button; four visible links on mobile | Sidebar, Topbar, CommandPalette | Revised; strong for visible navigation, opinion for the theme |
| 3 | Rebuild Home in the six-section order; three featured projects; aligned rows or grid | `page.tsx` | Strong for alignment; opinion for count |
| 3 | Fold Skills into About as grouped text; delete the Skills table and four stats; shorten Experience to recent roles with a CV link | `page.tsx` | Opinion |
| 3 | Motion hero under the four conditions; hero shorter than the viewport; no scroll-tied marquee or bento grid; stacking cards optional on desktop | Hero | Revised; general motion evidence |
| 3 | Primary hero button "View work", secondary "Contact" (was "Start a project") | Hero | Revised; opinion |
| 3 | Proportional sans-serif for body text; monospace for accents; line-length cap near 70 characters | `globals.css` | Thin evidence, sound mechanism |
| 3 | Shared footer on every page | Shell | Transferred |
| 4 | Add `/work`, `/about`, `/contact` and a custom 404 | New routes | Mixed |
| 4 | Rewrite the six case studies to the 12-block template; replace the crumb bar with "← Work"; replace the lone "next project" link with the next-step block | `work/[slug]/page.tsx` | Transferred and opinion |
| 4 | No `/services/[slug]` pages and no "from" pricing | — | Revised (owner decision) |
| 4 | Show Testimonials only with real, named quotes, on Home after Work and inside the matching case study | `page.tsx` | Opinion |

One knock-on effect of the owner's decisions is worth noting. The earlier report flagged that Vercel's Hobby plan excludes commercial use, defined to include advertising the sale of a service ([Vercel](https://vercel.com/docs/limits/fair-use-guidelines)). Removing priced service pages reduces that exposure, but a site that invites client enquiries is still a grey area that only Vercel can rule on. Dropping service pages also removes the earlier plan's extra search entry points; the blog and the rewritten case studies now carry that job.

## Conclusion

The research changes the redesign from a visual question into an ordering question. Most of the gain comes from moving things that already exist: the work up the home page, the outcome up the case study, the contact route into the shell. None of that depends on the motion hero or a new look, and the highest-confidence changes are also the cheapest, which is why several sit in Phase 0. The IDE theme survives because the evidence is against hidden and unconventional navigation, not against a left sidebar or a developer aesthetic.

The limit of the evidence is the more useful finding. Nobody has measured how recruiters, engineering leads or clients move through a developer portfolio, so this structure is a well-reasoned starting position, not a proven optimum. Noman can close part of that gap himself: add scroll-depth events at 25, 50, 75 and 100% alongside the contact events already planned, compare periods of four to eight weeks, and ask three to five non-developers to find the CV, one case study and the contact method on a phone. Those two checks will say more about this site than any published study currently can.
