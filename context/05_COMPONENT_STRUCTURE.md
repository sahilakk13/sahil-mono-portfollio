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
