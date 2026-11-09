# Wix blog: Portfolio SEO guide (user-supplied source)

Source: https://www.wix.com/blog/portfolio-seo — author Sharon Hafuta, published 16 July, updated 7 August (year not shown in the extraction). Fetched 2026-10-05 through a summarising fetch tool, so quotes are as returned by that tool and not checked against the raw page. This is a vendor marketing article (Wix sells a portfolio builder): treat it as expert opinion, not research evidence. The site owner asked for it to be taken into account.

## What the article recommends (10 steps)

1. Keyword map: one primary keyword, five to ten secondary service keywords, plus project-level keywords for case studies; validate phrasing in Ahrefs, Semrush or Search Console.
2. Home page: clear H1 using the primary keyword; one-paragraph intro stating niche and specialty; featured projects section; services/capabilities overview; concise bio. "Treat the first 100 words of your homepage like your elevator pitch."
3. Project pages: keyword-rich H1 (e.g. "Brand identity project for artisan coffee shop"); overview with service, scope, client type, location; challenge/approach; outcome; images with descriptive alt text.
4. Images: descriptive filenames, meaningful alt text ("not a place for keyword stuffing, but it is a place for clarity"), optional captions, light file sizes.
5. Technical performance: compress images, WebP, "avoid excessive motion triggering layout shifts", limit third-party scripts.
6. Topical authority: detailed case studies, process/behind-the-scenes explainers, opinion pieces, educational posts, FAQ sections. Claim: "Even three to five well-written articles can move your authority score."
7. Internal linking: home → key projects; project pages → relevant services; services → case studies; About → work and services; descriptive anchor text.
8. Schema: Person, Organization, CreativeWork, ImageObject, Breadcrumb; validate with the Rich Results Test.
9. Local SEO: location in H1 or subheading and metadata, Google Business Profile, contact page with full name/address/phone.
10. Metadata: keyword-led titles, human-friendly descriptions. "Write metadata like ad copy. You're selling the click."

Developer-specific line: prioritise clear use cases, tech-stack keywords placed naturally, GitHub integration, schema for code samples.

Common mistakes listed: vague headings like "My Work"; a single-page portfolio instead of dedicated project pages; no text descriptions; missing metadata; oversized images; no internal linking; no keyword strategy; over-designing at the expense of crawlability.

Expert quote (Chava Katz, Wix): "Keep your portfolio simple and intentional. Show only your best work and give each piece context so people understand your process."

Only statistic cited: an Ahrefs figure that 96.98% of desktop clicks and 97.56% of mobile clicks go to page-one results. Timeline claim: results "typically appear within 4–8 weeks".

Wix-specific product claims (not applicable to this Next.js site): templates pre-structured for search, automatic schema, built-in image optimisation and location tools.

## Structure implications for page-structure research

- Supports multi-page: dedicated, text-rich project pages and against a single-page portfolio.
- Home page pattern: H1 with role keyword → short intro → featured projects → capabilities → short bio.
- Case study pattern: descriptive title → overview facts → challenge/approach → outcome → captioned images.
- Descriptive headings instead of generic ones ("My Work").
- Cross-links between home, projects, about (and services, if any).
- Warns against motion that causes layout shift and against design that blocks crawling.

## Where it conflicts with the earlier research in this project (see reports/Portfolio redesign SEO and leads.md)

- Google Business Profile / local NAP: earlier research found GBP requires in-person customer contact, so it does not fit a remote-only freelancer. The Wix advice is aimed at local creatives (photographers etc.).
- Timeline of 4–8 weeks: earlier research (Ahrefs data, Mueller's comments) points to weeks only for branded queries and 3–12 months for long-tail non-branded terms; only 1.74% of new pages reach the top 10 within a year.
- "Authority score" is a third-party tool metric, not a Google concept.
- Services pages: the owner has decided to keep the site as portfolio + blog on Vercel's free Hobby plan with no priced sales pages, so "services" should be read as a capabilities section, not sales pages.
- FAQ sections: FAQ rich results were removed by Google on 7 May 2026 (earlier research); FAQs may still help readers but give no rich result.
- Schema: earlier research found no rich result from Service schema and no measured ranking gain from Person/CreativeWork schema for individuals; it is cheap to add but should not be oversold.
