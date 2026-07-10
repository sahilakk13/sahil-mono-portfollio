# 01 — Page structure from capture

## Captured route inventory

| route | ok | css | js | images | links/buttons |
|---|---:|---:|---:|---:|---:|
| https://monof-template.webflow.io/ | True | 3 | 9 | 122 | 85 |
| https://monof-template.webflow.io/studio | True | 3 | 9 | 70 | 47 |
| https://monof-template.webflow.io/work/work-1 | True | 3 | 9 | 44 | 55 |
| https://monof-template.webflow.io/work/work-2 | True | 3 | 9 | 44 | 48 |
| https://monof-template.webflow.io/work/work-3 | True | 3 | 9 | 52 | 48 |
| https://monof-template.webflow.io/contact/contact-1 | True | 3 | 9 | 32 | 42 |
| https://monof-template.webflow.io/contact/contact-2 | True | 3 | 9 | 27 | 39 |
| https://monof-template.webflow.io/contact/contact-3 | True | 3 | 9 | 40 | 41 |
| https://monof-template.webflow.io/blog/blog-1 | True | 3 | 9 | 40 | 41 |
| https://monof-template.webflow.io/blog/blog-2 | True | 3 | 9 | 44 | 46 |
| https://monof-template.webflow.io/blog/blog-3 | True | 3 | 9 | 44 | 48 |

## Homepage section order and evidence

| y | height | element/class | bg | visible text cue |
|---:|---:|---|---|---|
| 0 | 132 | `div.navigation-top effect add-prc` | `rgba(0, 0, 0, 0)` | Mōno™ Studio Home Studio Work (4) News Contact |
| 0 | 1200 | `div.hero` | `rgb(255, 255, 255)` | Web Design Social Media Marketing Development SEO Optimization No cookie cutter sites. No empty claims. Only practical tools and smart strat |
| 0 | 1200 | `div.hero-agency` | `rgb(17, 17, 17)` | Web Design Social Media Marketing Development SEO Optimization No cookie cutter sites. No empty claims. Only practical tools and smart strat |
| 0 | 3600 | `div.hero-track` | `rgba(0, 0, 0, 0)` | Web Design Social Media Marketing Development SEO Optimization No cookie cutter sites. No empty claims. Only practical tools and smart strat |
| 3500 | 34683 | `div.page-content` | `rgba(0, 0, 0, 0)` | (Partners) 2011-26© (Portfolio 26©) Work(4) View all work Forma Digital 26 © One Step 24 © Nero Vision 25 © Bold Moves 24 © (Who we are) Mōn |
| 3599 | 4823 | `section.section gr` | `rgb(245, 245, 245)` | (Partners) 2011-26© (Portfolio 26©) Work(4) View all work Forma Digital 26 © One Step 24 © Nero Vision 25 © Bold Moves 24 © |
| 8422 | 1358 | `section.section with-minus` | `rgb(255, 255, 255)` | (Who we are) Mōno™ Studio We shape brands with focus, intention, and impact. +13 team members across the World (Team of experts) +9 Mōno™ Pr |
| 9780 | 9600 | `section.animation-section` | `rgb(0, 0, 0)` | Built Different Design with purpose Code with passion Create with vision Innovate always (Our Vision) (Scroll for more) |
| 19379 | 989 | `section.section` | `rgb(255, 255, 255)` | (Services) Get started (001) Web Design Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions. (0 |
| 20368 | 1200 | `div.sticky-video-section` | `rgba(0, 0, 0, 0)` | Showreel 26© |
| 20368 | 4800 | `section.video-section` | `rgb(0, 0, 0)` | Showreel 26© |
| 25167 | 1706 | `section.section` | `rgb(255, 255, 255)` | (Pricing) Pick Smart. Pay Less. Build Better. Choose the plan that fits you best. Starter Built for early-stage teams establishing their onl |
| 26873 | 6000 | `section.testimonials-section` | `rgb(245, 245, 245)` | (Testimonials) "Working with Mōno™ felt like having an internal team rather than an external agency. They were proactive, detail-oriented, a |
| 32872 | 2589 | `section.section drk` | `rgb(0, 0, 0)` | (Stats) Mōno™ stands behind the data. Our success is reflected in the numbers we achieve for our clients. Every project is designed with mea |
| 35461 | 901 | `section.section with-minus` | `rgb(255, 255, 255)` | (Blog) Smart insights. See all November 11, 2025 The power of simplicity in modern real brand design October 1, 2025 From idea to execution: |
| 36317 | 1242 | `div.photo-section` | `rgba(0, 0, 0, 0)` |  |
| 36362 | 1080 | `section.section ctc` | `rgb(0, 0, 0)` | (Contact us) Let's talk. By contacting us, you accept our Terms and Privacy Policy. |
| 37442 | 741 | `div.footer` | `rgb(0, 0, 0)` | Crafting visuals. Shaping stories. Let’s create great work together! Let’s Collaborate Mōno™ Studio (Newsletter) Be the first to know what’s |

## Real homepage order to implement

1. `navigation-top`: absolute top header, not a normal sticky Tailwind navbar.
2. `hero-track`: a 3600px tall track containing the first hero viewport and later hero/media continuation.
3. `hero`: first 1200px viewport, white background, fixed hairline grid overlay, service list, intro text, CTA, copyright, huge split title.
4. `page-content`: starts around y=3500.
5. Partners + Work live inside one large light-gray section (`section gr`) from y≈3599 to y≈8422.
6. About section (`section with-minus`) at y≈8422.
7. Mixed feature cards immediately before the long black vision animation.
8. Vision/Built Different scrollytelling section (`animation-section`) at y≈9780, 9600px tall, black background.
9. Services section at y≈19379, short white section with large indexed rows.
10. Showreel section (`video-section`) at y≈20368, 4800px tall, black sticky video experience.
11. Pricing + FAQ white section at y≈25167.
12. Testimonials sticky/scrollytelling section at y≈26873, 6000px tall, light-gray.
13. Stats dark section at y≈32872.
14. Blog cards section at y≈35461.
15. Contact CTA dark section at y≈36362.
16. Footer dark section at y≈37442.
17. `menu-bottom`: floating bottom nav. Hidden in hero; appears after hero on scroll up; hides while scrolling down.
18. `plus-line-wrapper`: fixed full-screen crosshair grid overlay with horizontal/vertical hairlines and center dot/plus.
19. `text-tool-tip`: fixed cursor tooltip layer for “View Work” / “Read more”.

## Header content

Visible top header:
- Logo: `Mōno™ Studio` at x≈41 y≈51.
- Desktop nav centered: Home, Studio, Work (4), News, Contact.
- Hamburger lines at x≈1367 y≈60/70.
- Header height: 132px, absolute, transparent background.

For Sahil:
- Logo: `Sahil Kumar™`.
- Nav: Home, Studio, Work (6), News, Contact.
- Keep hamburger even on desktop, because the reference includes it.

## Hero content

Reference:
- Left services at x≈48 y≈120, 16px/600: Web Design, Social Media, Marketing, Development, SEO Optimization.
- Right intro at x≈1064 y≈120, width≈300, 16px/600.
- CTA at x≈1064 y≈208, black pill 113×51, radius 100px.
- Copyright at x≈1064 y≈916.
- Huge title letters at y≈1020, font≈176px, weight 600, letter spacing≈-8px.
- Visible title split: `Mōno™` left and `Studio` right. On smaller widths it wraps/crops differently.

For Sahil:
- Replace title with `Sahil` left and `Kumar™` right, but match the exact split-bottom layout and crop logic.
- Do not keep custom angled color panels as the first-viewport hero. The reference first viewport is clean white grid/hairline layout.

## Work content

Reference work names:
- Forma Digital — 26 ©
- One Step — 24 ©
- Nero Vision — 25 ©
- Bold Moves — 24 ©

For Sahil replace with:
- EdMaxEx — 26 ©
- BudgetBites — 25 ©
- H&M BI Analytics — 26 ©
- AI Try-On System — 26 ©
- LeadPilot and Portfolio Website can appear on work inner pages or as expanded Work(6), but if homepage follows reference strictly use 4 primary cards.

## Services content

Reference rows:
- (001) Web Design
- (002) Social Media
- (003) Development
- (004) Brand Identity
- (005) Marketing

For Sahil rows:
- (001) Web Design
- (002) BI Dashboards
- (003) Development
- (004) Data Analytics
- (005) SEO Optimization

## Footer content

Footer uses dense dark layout with:
- top collaboration sentence + right CTA
- left logo/newsletter block
- right pages/contact/social grid
- vertical divider at x≈720
- no floating random buttons outside their section
