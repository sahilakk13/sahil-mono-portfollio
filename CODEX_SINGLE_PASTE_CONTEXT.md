# CODEX SINGLE PASTE CONTEXT

Paste this into Codex if you cannot upload the whole folder. If you can upload files, upload the folder and paste only `codex-prompts/01_MASTER_CODEX_PROMPT.md`.

You are a senior frontend engineer, UI designer, and motion developer.

We have to build my personal portfolio by closely recreating the visual design, layout, spacing, typography, responsiveness, and interaction feel of this Webflow template:

https://monof-template.webflow.io/

This is a strict recreation task, not a loose inspiration task.

Read all provided context files before coding:
- context/00_TEMPLATE_LINKS.md
- context/01_PROJECT_CONTEXT.md
- context/02_VISUAL_SPEC.md
- context/03_SECTION_REQUIREMENTS.md
- context/04_ROUTES_AND_PAGES.md
- context/05_COMPONENT_STRUCTURE.md
- context/06_ANIMATION_AND_RESPONSIVE.md
- context/07_ACCESSIBILITY_PERFORMANCE.md
- data/site.ts
- data/projects.ts
- data/services.ts
- data/posts.ts
- data/testimonials.ts

Legal rule:
Do not copy proprietary Webflow source code, paid exported files, original class names, or paid assets. Recreate the visual behavior and layout using custom React code from observation.

Tech stack:
- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- CSS variables
- Data-driven content from local TS files
- Vercel-ready

Critical visual requirements:
- Off-white background
- Black/near-black typography
- Inter font
- Huge editorial typography
- Thin divider lines
- Asymmetrical grids
- Rounded white cards
- Black pill buttons
- Premium spacing
- Mōno-like section order
- Smooth, quiet animations
- Fully responsive

Do not:
- Do not build a generic freelancer portfolio.
- Do not use colorful gradients.
- Do not simplify the homepage.
- Do not skip inner pages.
- Do not add GitHub links.
- Do not mention internships.
- Do not use unnecessary company names.

Implementation order:
1. Create the React + Vite + TypeScript app if it does not exist.
2. Install Tailwind, Framer Motion, React Router.
3. Create the folder structure exactly as described.
4. Create global tokens and typography first.
5. Build homepage desktop carefully section by section.
6. Build responsive versions.
7. Build Studio, Work, Project, Blog, Post, Contact, and 404 routes.
8. Add animations.
9. Run `npm run build`.
10. Fix every error.
11. Visually audit against the reference and refine.

Final result must be a complete working site, not a partial prototype.


---

# Template Links Codex Must Inspect

Main template:
https://monof-template.webflow.io/

Studio:
https://monof-template.webflow.io/studio

Work layouts:
https://monof-template.webflow.io/work/work-1
https://monof-template.webflow.io/work/work-2
https://monof-template.webflow.io/work/work-3

Project detail references:
https://monof-template.webflow.io/project/forma-digital
https://monof-template.webflow.io/project/nero-vision
https://monof-template.webflow.io/project/one-step
https://monof-template.webflow.io/project/bold-moves

Blog layouts:
https://monof-template.webflow.io/blog/blog-1
https://monof-template.webflow.io/blog/blog-2
https://monof-template.webflow.io/blog/blog-3

Post detail references:
https://monof-template.webflow.io/post/the-power-of-simplicity-in-modern-brand-design
https://monof-template.webflow.io/post/from-idea-to-execution-building-products-that-last
https://monof-template.webflow.io/post/why-great-brands-are-built-on-clarity-not-complexity
https://monof-template.webflow.io/post/designing-digital-systems-that-scale-with-your-business

Contact layouts:
https://monof-template.webflow.io/contact/contact-1
https://monof-template.webflow.io/contact/contact-2
https://monof-template.webflow.io/contact/contact-3

Reference/marketplace pages:
https://webflow.com/templates/html/mno-website-template
https://www.flowmance.com/webflow-template/mono-agency-template

Codex instruction:
Before writing the full implementation, inspect these pages visually and identify layout patterns. Recreate the visual system and interaction behavior, not the proprietary source code.


---

# Personal Portfolio Context

Name: Sahil Kumar
Role line: Data Analyst • Developer
Location: Pakistan / Remote Worldwide
Site direction: Premium personal portfolio for data analytics, dashboard design, web development, mobile apps, AI products, automation, and SEO.

Tone:
- Premium
- Confident
- Minimal
- Practical
- Not overexplained
- No generic freelancer language

Public-facing constraints:
- Do not use the word internship.
- Do not add GitHub links, GitHub buttons, or GitHub icons unless requested later.
- Avoid unnecessary company names.
- Keep it portfolio-focused and outcome-focused.
- Make it look like a premium studio portfolio, not a CV website.

Main projects:
1. EdMaxEx — SEO / Website Optimization / Growth
2. BudgetBites — Flutter / Firebase / Restaurant Recommendation App
3. H&M BI Analytics — Power BI / ML / Repeat Purchase Prediction
4. AI Try-On System — React / Supabase / AI Image Product
5. LeadPilot — Lead Generation SaaS / Automation / Supabase
6. Portfolio Website — React / GSAP / Three.js

Primary services:
- Web Design
- BI Dashboards
- Development
- Data Analytics
- SEO Optimization

Hero positioning:
Do not make the hero say too much. Keep it sharp, visual, spacious, and editorial.

Preferred hero statement:
No generic portfolio. No empty claims. Only practical data, design, and development work that turns ideas into measurable results.


---

# Visual Specification

## Goal

Recreate the Mōno Webflow template style as closely as possible using custom React/Tailwind code.

This is not an inspiration task. It is a close recreation task of the visual language, section structure, layout rhythm, responsiveness, and motion feel.

## Core visual language

- Off-white background
- Near-black typography
- Inter font
- Huge editorial display type
- Thin gray divider lines
- Asymmetrical split grids
- Rounded white/off-white cards
- Large visual cards
- Black pill buttons
- Minimal icons
- Plenty of whitespace
- Small parenthesized section labels
- Quiet premium motion
- No loud colors
- No gradients unless very subtle neutral placeholders are unavoidable

## Design tokens

Use CSS variables everywhere.

```css
:root {
  --bg: #f7f7f4;
  --surface: #ffffff;
  --text: #080808;
  --muted: #777777;
  --line: #e6e6e1;
  --button: #050505;
  --button-text: #ffffff;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  --shadow-soft: 0 20px 60px rgba(0,0,0,.12);
  --container: 1440px;
}
```

## Typography

Font: Inter

Hero title:
- `font-size: clamp(5rem, 13vw, 14rem)`
- `line-height: 0.85`
- `font-weight: 750 or 800`
- `letter-spacing: -0.06em`

Section headings:
- `font-size: clamp(3.25rem, 7vw, 7rem)`
- `line-height: 0.9 to 1`
- `letter-spacing: -0.05em`

Body:
- `font-size: 1rem to 1.125rem`
- `line-height: 1.45 to 1.6`

Micro labels:
- `font-size: 0.8rem to 0.95rem`
- `font-weight: 600`
- Examples: `(Services)`, `(Portfolio 26©)`, `(Stats)`

## Layout rules

- Use max-width 1440px container.
- Use large section padding.
- Use CSS grid more than flexbox for major layouts.
- Use thin lines as design structure.
- Do not center everything.
- Use asymmetry: small label column + large heading/content column.
- Make cards breathe.
- Desktop layout must feel editorial.
- Mobile must remain premium and not cramped.

## Buttons

Primary button:
- black background
- white text
- pill radius
- compact height
- slight soft shadow
- hover: scale 1.03 and slight y movement

Secondary link:
- text link with arrow or underline reveal
- no bright color

## Images / media placeholders

Do not use copyrighted template assets.
Use neutral placeholder blocks or generate simple local SVG/CSS abstract previews.
Every project card should have a premium thumbnail placeholder that feels designed, not random.


---

# Homepage Section Requirements

Build homepage in this exact order.

## 1. Header

Desktop:
- Left: Sahil Kumar™
- Navigation: Home, Studio, Work, News, Contact
- Right CTA: Let’s talk
- Thin bottom divider
- Sticky/fixed premium behavior
- Clean active route states

Mobile:
- Compact header
- Fullscreen or clean dropdown menu
- Motion open/close
- Keyboard accessible

## 2. Split Hero

Must be the closest section to the reference.

Requirements:
- Full viewport height
- Large asymmetrical grid
- Thin vertical and horizontal divider lines
- Left service/category list
- Right statement + CTA
- Bottom/meta copyright
- Small scroll indicator
- Huge bottom title

Left list:
- Web Design
- Data Analytics
- Dashboard Design
- Development
- SEO Optimization

Statement:
No generic portfolio. No empty claims. Only practical data, design, and development work that turns ideas into measurable results.

CTA:
Let’s talk

Huge title options:
- Sahil / Kumar
- Data / Developer

Choose the one that gives the closest visual balance.

## 3. Partners / Logo Wall

- Label: `(Partners)`
- Year/meta: `2026©`
- Monochrome logo cards
- 4 columns desktop, 2 tablet, 1 mobile
- White cards, rounded, thin border

## 4. Work Preview

- Label: `(Portfolio 26©)`
- Heading: `Work(6)`
- CTA: `View all work`
- Six project cards
- Large image/media area
- Minimal metadata
- Hover: image scale, card lift, text/arrow movement

Projects:
1. EdMaxEx — 26©
2. BudgetBites — 25©
3. H&M BI Analytics — 26©
4. AI Try-On System — 26©
5. LeadPilot — 26©
6. Portfolio Website — 26©

## 5. About Preview

- Label: `(Who we are)`
- Brand: `Sahil Kumar™`
- Huge heading: `I shape digital products with data, design, and clean development.`
- Support text: `From dashboards and analytics to interactive websites and AI-powered tools, I build digital work that is simple, fast, and useful.`
- Stats:
  - +3 years building
  - 20+ projects
  - Remote worldwide
  - Data + Development
- Include one portrait/image placeholder card

## 6. Feature Grid / Built Different Block

Asymmetrical mixed cards:
- Pricing with complete transparency
- Page speed +78%, bounce rate -13%
- Live collaboration/chat mockup
- Large text stack:
  - Built Different
  - Design with purpose
  - Code with passion
  - Create with vision
  - Innovate always

## 7. Services Showcase

Very important.

- Label: `(Services)`
- CTA: `Get started`
- List with index:
  - (001) Web Design
  - (002) BI Dashboards
  - (003) Development
  - (004) Data Analytics
  - (005) SEO Optimization

Desktop:
- Huge service rows on left
- Right-side active preview card/image
- Active row darker
- Inactive rows muted
- Hover/click changes preview
- Smooth crossfade

Mobile:
- Accordion/card stack
- No hover-only dependency

## 8. Showreel

- Heading: `Showreel 26©`
- Large 16:9 rounded video block
- Play button center
- Neutral placeholder allowed
- Hover effect

## 9. Pricing

- Label: `(Pricing)`
- Heading:
  Pick Smart.
  Pay Less.
  Build Better.

Cards:
- Starter — $300 / project
- Growth — $700 / project
- Custom — Let’s discuss

Each card:
- What’s included
- Timeline
- CTA: Book a call
- Minimal premium bullets

## 10. FAQ

Accordion items:
1. What services do you offer?
2. How do you determine the right strategy?
3. How long does a project take?
4. Do you work with international clients?
5. Can you build dashboards and websites together?

Must use aria-expanded and smooth height animation.

## 11. Testimonials

- Label: `(Testimonials)`
- Slider with 4 items
- Large quote
- Name/role
- Numbered controls: 01 02 03 04 /04
- Fade/slide transitions
- Keyboard accessible

## 12. Stats / Results

- Label: `(Stats)`
- Heading: `Sahil stands behind the data.`
- Four cards:
  - $40K+ decisions supported
  - 30% reporting effort reduced
  - 20+ projects delivered
  - 90%+ client satisfaction target

## 13. Success Story Quote

Large quote block with one strong testimonial-like statement.
Use realistic placeholder but avoid fake overclaiming.

## 14. Blog Preview

- Label: `(Blog)`
- Heading: `Smart insights.`
- Minimal row list with dates and titles

Posts:
- Building dashboards that make decisions easier
- From idea to execution: building products that last
- Why great portfolios are built on clarity
- Designing digital systems that scale

## 15. Contact CTA

- Label: `(Contact us)`
- Heading: `Let’s talk.`
- Text: `Crafting visuals. Shaping systems. Let’s create great work together.`
- CTA: `Let’s Collaborate`

## 16. Newsletter / Footer

Newsletter:
- `Be the first to know what’s new.`
- `No noise. Just curated updates.`

Footer link columns:
- Home
- Studio
- Work I, Work II, Work III
- Blog I, Blog II, Blog III
- Contact I, Contact II, Contact III

Contact:
- hello@sahilkumar.dev
- Pakistan / Remote Worldwide
- LinkedIn, Instagram
- No GitHub unless requested later


---

# Routes and Pages

Implement all routes. Do not skip inner pages.

## Routes

- `/`
- `/studio`
- `/work/work-1`
- `/work/work-2`
- `/work/work-3`
- `/project/edmaxex`
- `/project/budgetbites`
- `/project/hm-bi-analytics`
- `/project/ai-tryon-system`
- `/project/leadpilot`
- `/project/portfolio-website`
- `/blog/blog-1`
- `/blog/blog-2`
- `/blog/blog-3`
- `/post/dashboard-decisions`
- `/post/idea-to-execution`
- `/post/portfolio-clarity`
- `/post/scalable-digital-systems`
- `/contact/contact-1`
- `/contact/contact-2`
- `/contact/contact-3`
- `/404`

## Studio page

Use the reference studio-page feeling.

Sections:
- Intro
- Timeline
- Logo strip
- Approach manifesto
- Stats
- Skill/team-style cards
- Awards/achievements list
- Contact CTA
- Footer

Skill cards:
- Data Analytics
- BI Dashboards
- Frontend Development
- Flutter Apps
- AI Products

## Work pages

Use the same project data but different layouts.

`/work/work-1`:
- Editorial grid
- Large mixed project cards

`/work/work-2`:
- Compact list layout
- Rows with index, title, type, year

`/work/work-3`:
- Bold visual grid
- More image-led layout

## Project detail pages

Each project page must include:
- Large title
- Metadata row: Type, Services, Year
- Hero media block
- Challenge
- Solution
- Result
- Gallery blocks
- Final note
- Related projects
- CTA

## Blog pages

`/blog/blog-1`:
- Minimal row list

`/blog/blog-2`:
- Card grid

`/blog/blog-3`:
- Image-led editorial list

## Post detail pages

Each post page must include:
- Huge title
- Date
- Intro/deck
- Body sections
- Related posts
- CTA

## Contact pages

`/contact/contact-1`:
- Full inquiry form

`/contact/contact-2`:
- Compact collaboration CTA form

`/contact/contact-3`:
- Email/location/social-first layout

Forms:
- Name
- Email
- Project type
- Budget
- Message
- Success state
- Error state
- Basic validation
- No backend needed yet


---

# Component Structure

Use this structure.

```txt
src/
  main.tsx
  App.tsx
  routes/
  pages/
    Home.tsx
    Studio.tsx
    WorkOne.tsx
    WorkTwo.tsx
    WorkThree.tsx
    ProjectDetail.tsx
    BlogOne.tsx
    BlogTwo.tsx
    BlogThree.tsx
    PostDetail.tsx
    ContactOne.tsx
    ContactTwo.tsx
    ContactThree.tsx
    NotFound.tsx
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    LogoWall.tsx
    WorkPreview.tsx
    ProjectCard.tsx
    AboutPreview.tsx
    FeatureGrid.tsx
    ServicesShowcase.tsx
    Showreel.tsx
    Pricing.tsx
    FAQ.tsx
    Testimonials.tsx
    Stats.tsx
    SuccessStory.tsx
    BlogPreview.tsx
    ContactCTA.tsx
    Newsletter.tsx
    PageTransition.tsx
    SectionLabel.tsx
    Button.tsx
    MediaPlaceholder.tsx
  data/
    site.ts
    projects.ts
    services.ts
    posts.ts
    testimonials.ts
  styles/
    tokens.css
    globals.css
```

## Component rules

- Keep sections reusable but do not make them visually generic.
- Use data files for repeatable content.
- Use Framer Motion wrappers in each section.
- Keep layout CSS precise.
- Avoid excessive utility-class noise by using component classes where needed.
- Use semantic HTML.
- Keep hover/active states polished.


---

# Motion and Responsive Requirements

## Framer Motion animations

Required:
- Page transitions: fade + slight y movement
- Section reveal on scroll: opacity 0 -> 1, y 30 -> 0
- Card stagger on entrance
- Project cards: image scale + card lift on hover
- Buttons: slight scale/magnetic feel
- Services preview: crossfade and y movement
- FAQ accordion: smooth height animation
- Testimonial slider: fade/slide
- Mobile nav: slide/fade

Respect `prefers-reduced-motion`.

## Timing guidance

- Page transition: 0.35s to 0.55s
- Section reveal: 0.6s to 0.9s
- Stagger: 0.06s to 0.12s
- Hover transitions: 0.2s to 0.35s
- Service preview crossfade: 0.35s to 0.5s
- Accordion: 0.3s to 0.45s

## Responsive breakpoints

Desktop large: 1440px+
Laptop: 1024px–1439px
Tablet: 768px–1023px
Mobile landscape: 480px–767px
Mobile portrait: <=479px

## Responsive rules

- Desktop keeps asymmetrical grids.
- Tablet stacks complex grids but preserves premium spacing.
- Mobile becomes single-column.
- Hero title must never overflow.
- Cards must not overlap.
- Buttons/touch targets at least 44px.
- Header/mobile nav must be usable with keyboard.
- Use `clamp()` heavily for type.
- Use `minmax(0, 1fr)` for grid safety.
- Avoid horizontal overflow.


---

# Accessibility, SEO, and Performance

## Accessibility

- Semantic HTML.
- Use real buttons for interactive controls.
- Use aria-expanded on accordions and mobile nav.
- Use aria-controls where suitable.
- Add visible focus states.
- Keyboard usable mobile menu, FAQ, testimonial slider.
- Meaningful images need alt text.
- Decorative images use empty alt.
- Color contrast must pass.

## SEO

- Set title and meta description.
- Use proper H1 only once per page.
- Use logical H2/H3 structure.
- Add OpenGraph placeholder tags.
- Add route-specific titles if possible.
- Use clean URLs.

## Performance

- Lazy-load media.
- Use responsive image placeholders.
- Use CSS transforms for animations.
- Avoid layout shift.
- Avoid huge dependencies.
- Keep bundle clean.
- Target Lighthouse: 90+ performance, accessibility, SEO.


---

# Public Template Audit Summary

This file summarizes visible/public page structure from the Mōno reference so Codex does not improvise.

Reference: https://monof-template.webflow.io/

## Visible navigation pattern

- Brand/logo at header
- Links: Home, Studio, Work, News, Contact
- CTA: talk/contact action
- Footer contains dense page link groups and contact/social information

## Homepage visible section order

1. Header / nav
2. Hero with service list, short statement, CTA, copyright, huge title, scroll indicator
3. Partner/logo area
4. Portfolio/work preview
5. About/who-we-are section
6. Mixed feature cards / performance / collaboration / built-different block
7. Services list with indexed rows and images/descriptions
8. Showreel video embed section
9. Pricing cards
10. FAQ accordion/list
11. Testimonials with numbered controls
12. Stats/results card section
13. Success story quote block
14. Blog/insights rows
15. Contact CTA/form area
16. Newsletter + dense footer

## Reference content patterns to adapt

Use the same design pattern, not the same copyrighted content.

- Parenthesized labels, for example `(Partners)`, `(Services)`, `(Stats)`
- Indexed service rows, for example `(001)`, `(002)`
- Work headings like `Work(4)`; adapt to `Work(6)` for Sahil's projects
- Huge title split across the hero
- Pricing heading split into short stacked lines
- Testimonials with 01/02/03/04 controls and `/04`
- Footer with page groups and contact groups

## Key visual deductions

- Minimal black/off-white design
- Large editorial type
- Thin dividers as layout structure
- Heavy use of grid and asymmetry
- Rounded image/card containers
- Subtle motion, not loud animation
- Premium but simple copy

## Important implementation warning

Do not download or copy template source, Webflow classes, original images, paid assets, or exported files. Build a clean React implementation that recreates the public UX and visual language with Sahil's content.


---

# QA PROMPT AFTER FIRST BUILD

Now act as a strict design QA engineer.

Open the reference:
https://monof-template.webflow.io/

Compare our site section by section.

Check and fix:
1. Header spacing and alignment
2. Hero grid proportions
3. Huge title scale
4. Thin divider line color/thickness
5. Off-white background
6. Section spacing rhythm
7. Button radius/shadow/hover
8. Card border radius and whitespace
9. Work grid/card proportions
10. Services hover/active preview
11. FAQ accordion style
12. Testimonial slider controls
13. Stats/results cards
14. Blog row styling
15. Footer density and link columns
16. Mobile nav
17. Mobile hero overflow
18. Tablet stacking
19. Animation smoothness
20. Build errors and console errors

Apply the fixes directly in code. Do not only report issues.
