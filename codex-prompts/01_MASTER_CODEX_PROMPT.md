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
