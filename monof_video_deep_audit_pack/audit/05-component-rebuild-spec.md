# 05 — Component Rebuild Spec

Do not patch the existing homepage. Refactor into template-matched components.

## Required component tree

```tsx
<Home>
  <Preloader />
  <TopHeader />
  <CustomCursor />
  <BottomFloatingNav />
  <HeroScene />
  <PartnersLogoWall />
  <WorkStickyStack />
  <AboutFeatureBlock />
  <VisionScrollScene />
  <ServicesRows />
  <ShowreelPinnedScene />
  <PricingFAQ />
  <TestimonialsPinnedScene />
  <StatsSuccessStory />
  <BlogCards />
  <ContactFooter />
</Home>
```

## Component requirements

### `TopHeader`
- Absolute at top.
- No backdrop blur.
- Fades/scrolls out after hero unless reference behavior requires visible.
- Contains brand, page links, CTA.

### `BottomFloatingNav`
- Fixed bottom center.
- Hidden before partners/work.
- White rounded pill, shadow subtle.
- Sections: Home / Work(4) / brand / Studio / Contact.
- Hide near footer or add footer safe padding.

### `HeroScene`
- Tall wrapper approx 3400–3600px.
- Sticky central white card.
- Background collage images behind it.
- Hairlines and black dots.
- Split bottom display title.
- Curved transition bottom.

### `PartnersLogoWall`
- Dense 16-logo grid.
- 4 columns desktop; multiple rows.
- White logo cards on light gray.
- No random colorful logo cards.

### `WorkStickyStack`
- Left sticky rail, right vertical cards.
- Use 4 cards only on homepage.
- Cards should be large, rounded, image-led.
- Use created placeholder visuals if no real images, but make them editorial: screenshots, dashboard mockups, device crop, portrait/collage look.

### `AboutFeatureBlock`
- Large heading and media/stat grid.
- Mixed-card feature grid must match reference arrangement.

### `VisionScrollScene`
- Long pinned black scene.
- Use progress-mapped text phases.
- This section is currently the largest mismatch. It must be rebuilt.

### `ServicesRows`
- Rows with index, title, media, description.
- All rows visible.
- Active state by hover/scroll.
- Inactive rows pale/gray.

### `ShowreelPinnedScene`
- Long pinned media scene.
- Center video/media tile with surrounding media tiles.
- Black background.

### `PricingFAQ`
- White section.
- Heading left/top, pricing cards side-by-side.
- FAQ 2×2 centered cards.
- Add lower “Looking for more?” CTA.

### `TestimonialsPinnedScene`
- Long pinned section.
- Progress changes active testimonial.
- Cards/rotated background cards.
- Counter right.

### `StatsSuccessStory`
- Black section.
- Metric cards + quote cards.
- Success story two-column large cards.

### `BlogCards`
- White, four cards with image, date, title, arrow.

### `ContactFooter`
- Black image-backed contact form + dense footer.

## Delete / remove from current implementation

- Remove cloudy sticky header.
- Remove normal homepage work grid.
- Remove short black vision band.
- Remove normal showreel card.
- Remove generic testimonials slider-only section.
- Remove placeholder geometric project media.
- Remove two strong nav systems fighting each other.
