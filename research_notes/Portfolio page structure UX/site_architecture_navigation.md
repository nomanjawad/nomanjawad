# Site-level structure (information architecture and navigation) for a developer portfolio with blog and case studies

Research date: 5 October 2026. Evidence labels used throughout: **[STUDY]** = empirical research (usability test, eye tracking, survey) with a described method; **[GUIDELINE]** = standards-body or research-firm guidance that is not tied to a single cited dataset; **[OPINION]** = expert or practitioner opinion; **[OBSERVED]** = structure of a live site as fetched on 2026-10-05 (via an automated page summary, so small elements may have been missed); **[UNVERIFIED]** = statistic seen only in an aggregator, original not confirmed.

Important overall caveat: almost none of the empirical research is about personal developer portfolios. The strong studies (NN/g) are on general websites (news, ecommerce, etc.). Applying them to a portfolio is inference, and is marked as such.

## 1. Single long page vs multi-page vs hybrid

### Takeaway
Research does not say "people will not scroll", but it does show attention falls steeply with depth, so a single long page buries whatever sits at the bottom (in the current site: Experience and Contact). No controlled study comparing one-page and multi-page portfolios was found; the best-supported design is a hybrid: a short, scannable home page that summarises and links out, plus real pages with their own URLs for Work, each case study, Blog, each post and About.

### Cited Findings
- [STUDY, 2018] NN/g eye tracking: 120 participants, over 130,000 fixations on 1920x1080 screens, across news, ecommerce, blogs, FAQs and encyclopedic pages. Users spent about 57% of page-viewing time above the fold and 74% in the first two screenfuls (up to 2160px). — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [STUDY, 2018 vs 2010] The 2010 figure was 80% of viewing time above the fold; it fell to 57% in 2018, so people scroll more than before, but "the pattern of a sharp decrease in attention following the fold" is unchanged. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [STUDY, 2018] Regardless of page length, more than 42% of viewing time fell in the top 20% of a page and more than 65% in the top 40%. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [GUIDELINE from that study] "Reserve the top of the page for high-priority content: key business and user goals"; "beware of false floors" and use signifiers such as cut-off content to show there is more below; use headings so scanners can spot important sections. — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [STUDY, 2023, small qualitative] NN/g observed 11 participants reading long-form pages with in-page (anchor) link tables of contents. In-page links can confuse when they look like ordinary links to other pages; historically they "break the mental model for a link". They suit long pages with logically chunked content where users have a specific information need, not first-time exploration. — [NN/g, In-Page Links for Content Navigation](https://www.nngroup.com/articles/in-page-links-content-navigation/)
- [GUIDELINE, 2023] If in-page links are used: label the list ("On this page" / "Table of contents"), style them clearly as links, first check whether the content can simply be shortened, and consider accordions on mobile. — [NN/g, In-Page Links for Content Navigation](https://www.nngroup.com/articles/in-page-links-content-navigation/)
- [GUIDELINE, 2015] "Each page on a website could be the first page your website visitors see", because search engines and shared links drop people on interior pages. Human-readable URLs matter for "sharing, credibility, recognition, and recall". — [NN/g, Navigation: You Are Here](https://www.nngroup.com/articles/navigation-you-are-here/)
- [OPINION] Vendor and blog comparisons say one-page sites are easy on mobile (just scroll) but stack everything vertically, make specific information harder to find, and frustrate users who must return to the top for the menu. These are not studies. — [ICDSoft](https://www.icdsoft.com/blog/one-page-vs-multi-page-website-which-one-is-better/); [Nick Babich](https://babich.biz/blog/one-page-vs-multi-page-website/)
- [OBSERVED] Brittany Chiang's widely copied portfolio is a single page (About, Experience, Projects, Writing) with anchor navigation, but it still links out to a separate full project archive and a resume PDF, i.e. it is a hybrid in practice. — [brittanychiang.com](https://brittanychiang.com/)

### Inferences
- With six stacked sections (Hero, About, Work, Skills, Experience, Contact), the NN/g attention curve implies Skills, Experience and Contact get a small fraction of attention. Either move a contact action and the strongest proof of work into the first two screenfuls, or give those items their own pages reachable from persistent navigation.
- A single page cannot be deep-linked or titled per topic. Adding a blog forces multi-page anyway (each post needs a URL), so the realistic choice is "hybrid", not "single page".
- Hybrid recommendation: home page = short hero (who, what, for whom) + 2 to 3 featured case studies + 2 to 3 latest posts + contact action; each block ends with a "view all" link to its index page. Long detail (full experience history, full skills list) moves to About or Resume.
- If the home page keeps anchor sections, the sidebar should not mix anchor links and page links without a visual distinction, since the 2023 NN/g study found that mixing causes wrong expectations.

### Gaps
- No controlled or analytics-based comparison of one-page vs multi-page personal portfolios was found. The claim that one is better for conversions is opinion only.
- The NN/g scrolling data is from desktop screens in 2018; no equivalent recent mobile eye-tracking breakdown was retrieved.

## 2. Recommended page set and hierarchy; flat vs deep; click depth

### Takeaway
A flat, two-level structure fits this site: Home, then Work, Blog, About, Contact at level one, with case studies and posts at level two. The "three-click rule" is not supported by data; what matters is clear labels and a visible path. Which optional pages (Uses, Now, Resume) users expect has no research behind it.

### Cited Findings
- [GUIDELINE, 2013] "Content is more discoverable when it's not buried under multiple intervening layers", but "going too far to either extreme will backfire". Flat structures work when categories are distinct and recognisable. — [NN/g, Flat vs. Deep Website Hierarchies](https://www.nngroup.com/articles/flat-vs-deep-hierarchy/)
- [STUDY cited by NN/g, article 2019] The three-click rule "has not been supported by data in any published studies to date"; a study by Joshua Porter found user drop-off does not increase and satisfaction does not fall when tasks take more than three clicks. The rule traces to a 2001 Jeffrey Zeldman book that gave no data. — [NN/g, The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/)
- [GUIDELINE, 2019] Instead of counting clicks: use labels with strong information scent, give clear wayfinding, surface important tasks from the home page, and build hub (index) pages with descriptive links. — [NN/g, The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/)
- [STUDY, 2019] NN/g surveyed 204 UX professionals who hire. Recommendation drawn from it: 3 to 5 detailed case studies, quality over quantity; each case study should cover problem, your role, process, outcome, challenges, impact and lessons. Hiring managers rarely read word for word, so layouts must be scannable. (This is about UX designer portfolios, not developers.) — [NN/g, UX Design Portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [OPINION, 2012 expert review of 8 portfolio sites] A portfolio visitor's core objectives are: learn about the creator, view the work, contact them. Structure should serve those three before anything decorative. — [Smashing Magazine, An Analysis of Navigation in Portfolio Websites](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)
- [OBSERVED] Page sets on well-known developer sites: Tania Rascia: Blog, Shelves, Projects, About me (+ resume link). Josh Comeau: Categories, Courses, Goodies, About (+ Contact in footer). Brittany Chiang: About, Experience, Projects (+ Writing, Archive, Resume PDF). — [taniarascia.com](https://www.taniarascia.com/); [joshwcomeau.com](https://www.joshwcomeau.com/); [brittanychiang.com](https://brittanychiang.com/)

### Inferences
- Suggested hierarchy (inference from the above, not a tested result):
  - Level 0: `/` Home
  - Level 1: `/work` (index of case studies), `/blog` (index of posts), `/about` (bio, skills, experience, resume download), `/contact` (or a contact section reachable from every page)
  - Level 2: `/work/[slug]`, `/blog/[slug]`
  - Optional, footer-level: `/resume` (or PDF), `/uses`, `/now`, tag pages `/blog/tags/[tag]`, RSS feed
- About and Work/Projects appear in all three observed sites; a blog index appears in all; a dedicated Contact page appears in only one (the others use email/social links). So Home, Work, Blog, About are the "expected" set; Contact can be a page or a persistent link; Uses/Now/Resume pages are optional.
- A `/work` index page is currently missing (case studies are only reachable from the home page section). It is the natural hub page and the parent for breadcrumbs and "back to all work".
- Skills as a standalone section has weak support: the NN/g survey emphasises process and outcomes in case studies, so skills are better shown as technology tags on case studies and a compact list on About.
- With 3 to 5 strong case studies recommended, six is fine; feature the best three on Home and list all on `/work`.

### Gaps
- No survey or analytics data found on whether visitors expect or use Uses, Now or Resume pages. These are community conventions among developers, with no usability evidence either way.
- No tree-testing or card-sorting data for personal portfolio sites was found.

## 3. Navigation: placement, item count, labels, sticky, mobile, command palette, breadcrumbs, footer, skip link

### Takeaway
The strongest quantitative finding is that hidden navigation hurts: keep the main links visible on desktop (top or left both work) and, with four or fewer top-level links, visible on mobile too. A left sidebar is supported by NN/g for broad or growing structures, so the IDE shell is acceptable as long as its links are always visible, plainly labelled text. A command palette is a bonus for power users, never the primary route.

### Cited Findings

**Visible vs hidden navigation**
- [STUDY, 2016] NN/g with WhatUsersDo: 179 participants, 6 live websites, desktop and smartphone, comparing hidden (hamburger), visible and combo navigation. On desktop, hidden navigation was used in 27% of cases vs 48% (visible) and 50% (combo). On mobile, hidden navigation was used in 57% of cases vs 86% for combo. — [NN/g, Hamburger Menus and Hidden Navigation Hurt UX Metrics](https://www.nngroup.com/articles/hamburger-menus/)
- [STUDY, 2016] Same study: content discoverability dropped by over 20% with hidden navigation; task time was 39% longer on desktop and 15% longer on mobile; perceived difficulty rose 21% vs visible navigation; people took 5 to 7 seconds longer to open hidden navigation on desktop and about 2 seconds longer on mobile. — [NN/g, Hamburger Menus](https://www.nngroup.com/articles/hamburger-menus/)
- [GUIDELINE from that study] Desktop: show navigation across the top or down the left side; do not use a hamburger. Mobile: "If your site has 4 or fewer top-level navigation links, display them as visible links"; with 5 or more, hiding is acceptable but still carries a (smaller) penalty. — [NN/g, Hamburger Menus](https://www.nngroup.com/articles/hamburger-menus/)
- Note on age: this study is ten years old in 2026. Hamburger icons are more familiar now; no newer replication with numbers was found in this research.

**Top nav vs left sidebar**
- [GUIDELINE, 2022] NN/g: vertical (left) navigation "allows for easy expansion", is "easy to scan", is a familiar pattern, and suits "broad or growing IAs"; the cost is horizontal space. To work it must be left-aligned, front-loaded with keywords, and visible. — [NN/g video, Vertical Navigation](https://www.nngroup.com/videos/vertical-navigation/)
- [OPINION] UX Movement argues left navigation scans faster (vertical scanning) and gives items equal weight, while top navigation saves space and gives leftmost items more weight. No dataset is given. — [UX Movement](https://uxmovement.com/navigation/top-navigation-vs-left-navigation-which-works-better/)

**Number of items and labels**
- [GUIDELINE, 2019] Use meaningful labels with strong information scent; avoid vague or branded terminology. — [NN/g, The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/)
- [OBSERVED] Label choices on established developer sites: "Projects" (Brittany Chiang, Tania Rascia), "Blog" (Tania Rascia), "Writing" (Brittany Chiang), "About"/"About me" (all three). All use 3 to 4 primary items. — [brittanychiang.com](https://brittanychiang.com/); [taniarascia.com](https://www.taniarascia.com/); [joshwcomeau.com](https://www.joshwcomeau.com/)

**Sticky headers**
- [GUIDELINE, 2021; NN/g expert guidance, no single study cited] Keep sticky headers small (content-to-chrome ratio), opaque and visually distinct from content, with little or no animation (300 to 400ms if any). "Partially persistent" headers that hide on scroll down and return on scroll up work well on mobile. Do a cost-benefit check on whether a sticky header is needed at all. — [NN/g, Sticky Headers: 5 Ways to Make Them Better](https://www.nngroup.com/articles/sticky-headers/)

**Mobile patterns**
- [STUDY data cited second-hand, article 2019] Steven Hoober's observations: 75% of users touch the screen with one thumb; 49% hold the phone one-handed, 36% cradle, 15% two-handed. Used to argue for bottom-placed primary navigation with 3 to 5 items. — [Smashing Magazine, Bottom Navigation Pattern on Mobile Web Pages](https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/)
- [OPINION/caveat, 2019] On the mobile web, a bottom bar competes with browser and OS chrome (for example the iOS home indicator) and needs safe-area padding. — [Smashing Magazine](https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/)
- [UNVERIFIED] An ecommerce retailer reportedly gained 18% category page views, 12% lower bounce and 9% mobile revenue after moving from a top-right hamburger to a bottom menu. Seen only in a search summary of secondary blogs, with no named company or method; do not rely on it. — [search result via gitnexa.com](https://www.gitnexa.com/blogs/why-mobile-menus-should-be-easy-to-tap-with-one-hand)

**Command palette and search**
- [OPINION] Practitioner guidance: a palette suits products with more actions than a person can remember; on a marketing site, blog or five-screen app it is unnecessary as the main route, and "if the list is under fifteen commands and they all fit in the navigation, the navigation is the answer". The palette must be advertised (a visible "⌘K" hint or search icon), because undiscovered shortcuts go unused. — [skillselion / UX Patterns for Developers summary](https://skillselion.com/skills/thedaviddias/ux-patterns-for-developers/command-palette); [Superhuman, How to build a remarkable command palette](https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/)
- [OBSERVED] Josh Comeau's blog (hundreds of posts) offers site search; the smaller portfolio sites observed do not. — [joshwcomeau.com](https://www.joshwcomeau.com/)

**Breadcrumbs**
- [GUIDELINE, 2018, marked "last reviewed September 1, 2026"] "Breadcrumbs aren't necessary (or useful) for sites with flat hierarchies that are only 1 or 2 levels deep." They are for hierarchies deeper than two levels. If used: supplement, never replace, global navigation; show hierarchy, not history; start at Home; on mobile do not let them wrap, and consider showing only the parent level. — [NN/g, Breadcrumbs: 11 Design Guidelines](https://www.nngroup.com/articles/breadcrumbs/)

**Footer navigation**
- [OBSERVED] Josh Comeau's footer groups links into Courses, General (About, About this blog, Contact), Social/Feed (Bluesky, GitHub, LinkedIn, RSS) and Legal. Tania Rascia's footer carries newsletter signup, social links and stack credits. — [joshwcomeau.com](https://www.joshwcomeau.com/); [taniarascia.com](https://www.taniarascia.com/)

**Skip to content**
- [GUIDELINE, WCAG 2.2 technique G1] A skip link satisfies Success Criterion 2.4.1 Bypass Blocks. It should be the first focusable control on the page, say that it goes to main content, move focus there when activated, and may be visible only on focus. — [W3C WAI, Technique G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)

### Inferences
- The proposed primary set (Work, Blog, About, Contact) is exactly four links, which is the NN/g threshold for showing links visibly on mobile instead of behind a hamburger. Practical options for one developer: a slim top bar with four text links, or a bottom bar with four icon-plus-label items. Avoid collapsing the sidebar into an icon-only rail or hamburger on phones.
- The IDE shell has three navigation systems (sidebar, top bar, palette). Each destination should have one obvious home: sidebar = primary pages; top bar = current location/title and utilities (theme, palette trigger); palette = accelerator and blog search. Duplicating the same links in sidebar and top bar adds chrome without adding findability.
- A persistent left sidebar plus a sticky top bar is a lot of fixed chrome. NN/g's content-to-chrome point suggests keeping the top bar thin and letting the sidebar collapse on narrow laptops, but keep the text links visible.
- Label wording: no study compares "Work" vs "Projects" vs "Portfolio" or "Blog" vs "Writing" vs "Notes". Applying the information-scent guidance, choose the most literal, widely used word: "Work" or "Projects" (both common; "Work" matches the existing `/work/` URLs and suits client case studies), "Blog" (most literal; "Writing" is also common; "Notes" implies short, informal entries and is weaker). Avoid IDE-flavoured labels such as file names ("about.tsx", "~/work") as the only label; if kept for flavour, pair them with the plain word.
- Breadcrumbs are not needed for a two-level site per NN/g. A simple "back to all work" / "back to blog" parent link on detail pages, plus an active state on the parent nav item, gives the same orientation at lower cost.
- Footer on every page should repeat the primary links and add contact email, GitHub, LinkedIn, resume, RSS. This is the fallback for visitors who scroll to the end of a post or case study, and for mobile visitors if any navigation is hidden.
- With a sidebar before the main content in DOM order, a skip link is more valuable than on a top-nav site, since keyboard users would otherwise tab through the whole sidebar on every page.
- The palette can double as blog search once posts grow; show a visible search/"⌘K" button so touch and mouse users can open it.

### Gaps
- No empirical study was found on the optimal number of navigation items for small sites; "5 to 7" figures commonly quoted are convention. The only data-backed threshold found is NN/g's "4 or fewer: show visibly on mobile".
- No usability data on command palettes on content websites was found; all guidance is practitioner opinion from application design.
- No recent (2023 to 2026) quantitative replication of the 2016 hamburger study was retrieved.
- No controlled comparison of bottom bar vs hamburger on the mobile web with a verifiable method was found.
- Apple HIG and Material Design guidance was not fetched directly; the "3 to 5 destinations" bottom-bar figure is reported second-hand via Smashing Magazine.

## 4. Conventions vs novelty (IDE or terminal themed portfolios)

### Takeaway
No empirical study of IDE or terminal themed portfolios exists in what was found. The general principle (Jakob's law) and one expert review of creative portfolio navigation both point the same way: novelty in visual style is fine; novelty in how navigation behaves costs usability. Keep the IDE look, keep the navigation conventional.

### Cited Findings
- [OPINION/principle, 2000] Jakob's Law: "Users spend most of their time on other sites", so "users prefer your site to work the same way as all the other sites they already know". Stated by Jakob Nielsen as a principle with supporting argument, not a single experiment. — [NN/g, End of Web Design](https://www.nngroup.com/articles/end-of-web-design/)
- [OPINION, 2012 expert review, not a user study] Justin Mifsud reviewed 8 creative portfolio sites against usability guidelines. Recurring problems: "mine-sweeping" (navigation hidden until hover), non-standard interactions that need explaining, and sequential-only navigation. Conclusion: a site can be both usable and attractive, but the visitor's goals (who is this, see the work, get in touch) come first. — [Smashing Magazine, 2012](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)
- [STUDY, 2016] The hamburger study is indirect evidence: anything that hides or disguises navigation reduced discoverability by over 20% and slowed tasks. — [NN/g, Hamburger Menus](https://www.nngroup.com/articles/hamburger-menus/)
- [OPINION, 2021 survey quotes] Hiring managers quoted in a developer-portfolio survey: "A bad design can make you look incompetent" and "It might be better to have no portfolio website than one that looks bad or is broken." — [Profy.dev survey write-up on DEV](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- [OPINION] Design-tool vendors showcase unconventional portfolios (for example Bruno Simon's drivable 3D site) and say unconventional layouts "can succeed when they remain intuitive". No task-success data is offered. — [Figma resource library](https://www.figma.com/resource-library/portfolio-website-examples/)

### Inferences
- An IDE shell is closer to convention than it looks: a left sidebar of destinations plus a top bar is a familiar layout (docs sites, dashboards). The risk lies in IDE-specific metaphors: file-tree labels, tabs that behave like editor tabs, links that look like code, terminal input as the way to navigate. Non-developer visitors (recruiters, clients) will not know these.
- Safe rule: every primary destination must be reachable by a visible, plainly worded text link in one click, without the palette, hover or keyboard. Theme-specific touches (status bar, file-name styling, palette) sit on top as decoration and accelerators.
- A cheap check a solo developer can run: ask 3 to 5 non-developers to find the resume, a specific case study and the contact method on a phone, and watch where they hesitate.

### Gaps
- No usability study, A/B test or analytics write-up on IDE, terminal or game-style portfolios was found. Any claim that such themes help or harm hiring outcomes is unevidenced.
- No data on what share of portfolio visitors are non-technical was found.

## 5. Audiences and their tasks (recruiters, hiring managers, clients, developers)

### Takeaway
Reliable data on how people review developer portfolios is thin. The consistent signals are: reviewers scan, they do not read; they want a few strong, well-explained projects with the candidate's role and results; and a broken or confusing site does more harm than having none. Structure should therefore put identity, proof of work, resume and contact within one click of any entry page.

### Cited Findings
- [STUDY, 2019] NN/g survey of 204 UX hiring professionals: reviewers want process and reasoning, not only polished results; they rarely read word for word, so scannable structure and clear separation between projects matter; 3 to 5 detailed case studies are recommended. Audience named: hiring managers, recruiters and fellow practitioners. (UX roles, not developers.) — [NN/g, UX Design Portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [STUDY, August 2021, small convenience sample] Profy.dev surveyed 60+ recruiters and React team leads. Most would look at a portfolio site if given one, but rated it as making little difference to hiring chances; several said GitHub projects, READMEs and the resume carry more weight. A search-result summary of the original reports 65% "would definitely look" at an inexperienced candidate's portfolio site and 93% "likely" to look, with 31% neutral and 28% disagreeing that having one is important; these exact figures could not be confirmed on the page fetched. — [Profy.dev write-up on DEV](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge); [original, not reachable during research](https://profy.dev/article/portfolio-websites-survey)
- [OPINION from that survey] Risks named by respondents: poor design reflects on competence; sites go stale with broken links and outdated content. — [Profy.dev write-up on DEV](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- [UNVERIFIED] "80% of recruiters spend 3 minutes or less on a portfolio"; "first impression within 10 seconds"; "less than 30 seconds". Seen in a search summary of a portfolio-tool blog with no method given. — [Fueler blog](https://fueler.io/blog/how-recruiters-evaluate-your-digital-portfolio)
- [UNVERIFIED, likely unreliable] "73% of hiring managers consider a strong portfolio more important than a perfect resume (Stack Overflow Developer Survey 2024)", "84% of employers want working applications", "72% of tech recruiters use GitHub (HBR 2024)". These appear in aggregator articles; the Stack Overflow Developer Survey polls developers, not hiring managers, so the attribution is doubtful. Do not cite as fact. — [hakia.com](https://hakia.com/skills/building-portfolio/); [fonzi.ai](https://fonzi.ai/blog/do-recruiters-check-github)
- [OPINION, 2012] Portfolio visitor goals in order: know who the person is, see the work, contact them. — [Smashing Magazine, 2012](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)

### Inferences
- Likely first tasks by audience (inference; no direct data separates them for developers):
  - Recruiter: confirm role, level, location/availability, stack; get resume and LinkedIn. Needs: one-line positioning in the hero, visible "Resume" link (PDF download), contact.
  - Hiring manager / engineering lead: judge depth. Needs: 2 to 3 featured case studies from the home page with role, problem, decisions, results; links to code or live product; a few technical posts.
  - Client: judge fit and trust. Needs: work similar to theirs, outcomes in plain language, a clear way to get in touch from every case study.
  - Fellow developer: mostly arrives on a blog post from search or social. Needs: readable post, related posts, RSS, who wrote this.
- Because reviewers scan and time is short, the resume and contact links should be in persistent navigation or the top bar, not only at the bottom of a long home page.
- Since stale or broken sites are the named risk, a smaller structure that the owner can keep current beats a large one: no empty sections, no "coming soon" pages, dates on posts.

### Gaps
- No rigorous study (eye tracking, analytics, or a large survey) of how recruiters or engineering managers navigate developer portfolio sites was found. Time-on-portfolio figures in circulation are unsourced.
- No data on what freelance clients look for on a developer's site was found.
- The Profy.dev sample is small, self-selected, React-focused and from 2021; the hiring market has changed since.

## 6. Cross-linking between content types

### Takeaway
There is little direct research on cross-linking for portfolios; the supported principle is that any page may be the entry page, so each post and case study should carry its own onward paths (related work, related posts, author, contact). Established developer blogs organise by a small set of categories or curated collections, not by large tag clouds.

### Cited Findings
- [GUIDELINE, 2015] Any page can be the first page seen, so each page must orient visitors and offer ways onward. — [NN/g, Navigation: You Are Here](https://www.nngroup.com/articles/navigation-you-are-here/)
- [GUIDELINE, 2019] Surface important tasks from key pages and build hub pages with descriptive link groupings. — [NN/g, The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/)
- [OBSERVED] Josh Comeau: home page has "Browse by category" (8 categories: CSS, React, Animation, Career, JavaScript, SVG, Next.js, General) and a "Popular content" top 10 list, plus search. — [joshwcomeau.com](https://www.joshwcomeau.com/)
- [OBSERVED] Tania Rascia: beyond a chronological blog, content is grouped into "Shelves" (curated paths) and "Series" (multi-part articles); the home page mixes latest posts and projects. — [taniarascia.com](https://www.taniarascia.com/)
- [OBSERVED] Lee Robinson: home page lists topic "Notes" pages and a reverse-chronological list of posts with dates on one minimal page. — [leerob.com](https://leerob.com/)
- [OBSERVED] Brittany Chiang: home page shows projects and writing side by side on one page, each with a "view all" style archive link. — [brittanychiang.com](https://brittanychiang.com/)

### Inferences
- Minimum cross-links a solo developer can maintain:
  - Case study page: technologies as tags; "related posts" (posts that mention this project or share a tag); next/previous case study; closing contact prompt; link back to `/work`.
  - Blog post: short author line linking to About; "related work" where the post draws on a project; 2 to 3 related posts by shared tag; next/previous; closing line pointing to Work and Contact; link back to `/blog`.
  - Home: featured work and latest posts, each with "view all".
- Use one shared tag vocabulary (technologies and topics) across posts and case studies, so a tag page such as `/tags/nextjs` can list both. Start with a handful of categories as Josh Comeau does; do not create tag pages that hold a single item.
- Related-content links can be derived automatically from shared tags in Next.js at build time, so this costs little upkeep.

### Gaps
- No data found on click-through of related-post modules, next/previous links, or blog-to-contact conversion on personal sites.
- No evidence on whether tag pages help visitors on sites with tens of posts; this is practice, not research.

## 7. Wayfinding and orientation

### Takeaway
Show the current location in more than one way (highlighted nav item, clear page heading, descriptive title, readable URL) because many visitors land on interior pages. For a two-level site this replaces breadcrumbs.

### Cited Findings
- [GUIDELINE, 2015] Mark the current section in navigation (highlight or offset); give each page a descriptive, unique HTML title, which shows in tabs, search results and bookmarks; use human-readable URLs that reveal site structure. — [NN/g, Navigation: You Are Here](https://www.nngroup.com/articles/navigation-you-are-here/)
- [GUIDELINE, 2018/2026 review] Breadcrumbs show hierarchy and are unnecessary on sites one or two levels deep. — [NN/g, Breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/)
- [GUIDELINE, WCAG 2.2] Skip link as first focusable element for bypassing repeated blocks (SC 2.4.1). — [W3C WAI, Technique G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
- [GUIDELINE, 2021] Sticky navigation must stay visually distinct from content at every scroll position. — [NN/g, Sticky Headers](https://www.nngroup.com/articles/sticky-headers/)

### Inferences
- On `/work/[slug]` the "Work" nav item should stay highlighted, and on `/blog/[slug]` the "Blog" item, so the parent is always evident.
- If the home page keeps anchor sections with scroll-spy highlighting, those states should look different from page-level active states, or the sidebar should list only pages.
- Title pattern: "Post or project name | Site owner name"; URL pattern: `/work/project-name`, `/blog/post-title`, lower case, hyphenated, no dates or IDs needed at this scale.
- 404 page: keep the full shell and navigation, say plainly that the page was not found, and link to Home, Work and Blog (and offer the palette/search). An IDE-styled joke error with no links would strand non-technical visitors.
- Consistency: same sidebar order, labels and footer on every page type, including blog posts; avoid a separate layout for the blog that drops the main navigation.

### Gaps
- No research specific to 404 page design was retrieved in this pass; the 404 advice above is inference from general wayfinding guidance.
- GOV.UK and Baymard sources were not fetched; nothing in these notes rests on them.

## 8. Real examples and common structural mistakes

### Takeaway
The well-regarded developer sites checked all use three or four plainly labelled primary links, a home page that summarises and links out, and separate indexes for writing and projects. None of them relies on a novel navigation mechanism.

### Cited Findings
- [OBSERVED] **Tania Rascia** (taniarascia.com): top bar with Blog, Shelves, Projects, About me, plus social, RSS and theme toggle. Home: short hero, career timeline, latest posts (4), shelves, series, projects (6), footer with newsletter and social. Resume linked. 177+ posts. — [taniarascia.com](https://www.taniarascia.com/)
- [OBSERVED] **Josh W. Comeau** (joshwcomeau.com): top bar with Categories, Courses, Goodies, About; search and theme toggle. Home: featured articles, browse by category, popular content top 10. Footer: About, About this blog, Contact, social, RSS, legal. Blog-first site. — [joshwcomeau.com](https://www.joshwcomeau.com/)
- [OBSERVED] **Brittany Chiang** (brittanychiang.com): single home page with sticky left-side anchor navigation: About, Experience, Projects; then Writing; links to a full project archive and a resume PDF; social links in the fixed panel. Portfolio-first hybrid. — [brittanychiang.com](https://brittanychiang.com/)
- [OBSERVED] **Lee Robinson** (leerob.com): one minimal text page: short bio, topic notes, dated list of posts; almost no navigation chrome. Shows that a very small structure works when content is the point. — [leerob.com](https://leerob.com/)
- [OPINION, 2012] Structural mistakes seen in creative portfolios: navigation hidden until hover, non-standard interactions that need instructions, forced sequential browsing. — [Smashing Magazine, 2012](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)
- [OPINION, 2021] Mistakes named by hiring managers: weak design, broken links, outdated content. — [Profy.dev write-up on DEV](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- [STUDY, 2016 and 2018] Evidence-backed mistakes: hiding primary navigation (discoverability down over 20%); putting key content deep in a long page (74% of viewing time in the first two screenfuls). — [NN/g, Hamburger Menus](https://www.nngroup.com/articles/hamburger-menus/); [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)

### Inferences
- Brittany Chiang's site is the closest analogue to the current site (left-side navigation, single home page) and it copes by keeping the page short, labelling plainly and linking out to an archive and resume. The current site's addition of a blog pushes it towards the Tania Rascia model: four top-level destinations with a summarising home page.
- Common structural mistakes to check against (mix of evidence and inference): contact only at the bottom of a long page; no Work index; blog on a different layout or subdomain with no route back to work; themed labels that hide meaning; anchor and page links mixed without distinction; resume buried; empty or placeholder sections; key routes available only via keyboard or palette.

### Gaps
- The example-site descriptions come from automated summaries of the live home pages on 2026-10-05; interior pages (post layout, related links, mobile menus) were not inspected, and small elements may have been missed (for example, leerob.com's header links).
- No published write-up with traffic or outcome data analysing these portfolios was found; "well-regarded" reflects reputation in the developer community, not measured performance.
