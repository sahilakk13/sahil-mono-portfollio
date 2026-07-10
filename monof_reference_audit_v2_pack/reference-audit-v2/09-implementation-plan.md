# 09 — Implementation plan from audit v2

## Stop condition

Do not continue polishing the current custom homepage. Replace mismatching sections with reference-matched structures.

## Implementation order

### 1. Global tokens and base behavior
- Update `tokens.css` and global CSS to exact captured tokens.
- Add Lenis or Lenis-like smooth scroll with `lerp: 0.08`.
- Add `useReducedMotion` guard.
- Add fixed crosshair overlay component for desktop.
- Add cursor tooltip component for `View Work` and `Read more`, not a generic black blob.

### 2. Navigation
Files likely: `Header.tsx`, `Footer.tsx`, `FloatingNav.tsx`, `MenuOverlay.tsx`, `CustomCursor.tsx`.
- Top nav: absolute, 132px, logo left, centered links, hamburger right.
- Hamburger opens full-screen black overlay.
- Bottom nav: fixed bottom center 570×62, radius 12, hidden in hero, shows on scroll up after hero, hides on scroll down and footer.
- Remove any sticky cloudy header behavior.

### 3. Hero
Files likely: `Hero.tsx`, `CrosshairOverlay.tsx`, `motion.ts`.
- Create `hero-track` height 3600px.
- First hero viewport 1200px white.
- Use exact positions for service list, intro text, CTA, copyright, and split giant title.
- Add letter/word mask reveal.
- Remove current first-view angled color panels.

### 4. Partners + Work
Files: `LogoWall.tsx`, `WorkPreview.tsx`, `ProjectCard.tsx`.
- Combine partners and work inside one light-gray section.
- Partners metadata row and 16-logo/card dense rhythm.
- Work sticky left rail + single right-column 4-card vertical stack.
- Homepage should be Work(4). Put 6 projects on work detail pages if needed.

### 5. About + feature cards
Files: `AboutPreview.tsx`, `FeatureGrid.tsx`.
- Use 64px heading and reference layout.
- Feature cards should precede vision animation and match sizes/radii.

### 6. Vision animation
New file: `VisionScroll.tsx` or refactor `FeatureGrid`.
- Tall black `animation-section` height ≈9600px desktop.
- Sticky center phrases with scroll progress transitions.
- Labels top/bottom.

### 7. Services
Files: `ServicesShowcase.tsx`.
- Rebuild as row list, not preview-card tabs.
- Huge 96px titles, index left, description right.
- Hover changes active description/opacity and maybe subtle title movement.

### 8. Showreel
Files: `Showreel.tsx`.
- Black 4800px section, sticky 1200px viewport.
- 96px heading and large video/reveal behavior.

### 9. Pricing + FAQ
Files: `Pricing.tsx`, `FAQ.tsx`.
- Combine/align closer to captured white section.
- Two cards with divider lines.
- FAQ two-column toggles around 468×72.

### 10. Testimonials
Files: `Testimonials.tsx`.
- Convert from normal slider to 6000px sticky sequence.
- Keep controls but make scroll/transition dominant.

### 11. Stats + success story
Files: `Stats.tsx`, `SuccessStory.tsx`.
- Dark section, center intro, staggered 331×320 stat cards.
- Use Sahil metrics but captured card rhythm.

### 12. Blog / Contact / Footer
Files: `BlogPreview.tsx`, `ContactCTA.tsx`, `Footer.tsx`.
- Blog four horizontal cards 334×358.
- Contact dark section 1080px.
- Footer dense dark grid with vertical divider and safe-space for bottom nav.

### 13. Responsive
Only after desktop reference match:
- Use `07-responsive-map.md`.
- Disable/adjust crosshair and cursor on touch.
- Maintain reference mobile hero/title behavior.

## Build/QA commands

```bash
npm run build
npm run dev
```

After implementation create:
`reference-audit-v2/10-final-match-report.md`
