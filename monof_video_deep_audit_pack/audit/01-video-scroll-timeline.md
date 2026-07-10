# 01 — Video Scroll Timeline Audit

Source: uploaded template recording `Screen Recording 2026-07-10 at 5.23.31 PM.mov`, duration ~56 seconds, 3024×1964, recorded from the live Mōno Webflow template.

The recording proves the Mōno template is not a normal static landing page. It is a scroll-driven template with long pinned scenes, masking, oversized typography, curved transitions, bottom floating navigation, and cursor states.

## Timeline map from the recording

### 0–12s — Preload / loading behavior
- Starts with mostly blank/white view.
- A black full-screen preloader appears near 100%.
- The template does not simply show the page immediately; it stages the entrance.
- Codex must implement a light version: black overlay, percentage or logo, fade/clip out into hero.

### 13–24s — Hero intro and top navigation
- Top navigation is minimal, absolute/transparent, and not a cloudy sticky navbar.
- Hero has lots of white space, hairline grid dividers, and small black anchor dots.
- Left hero content is a vertical service list.
- Right hero content is a compact paragraph with black pill CTA.
- Huge bottom hero title is split into two parts: brand on left, `Studio` on right.
- The mouse cursor appears as a small dot and should remain subtle.

### 25–26s — Hero composition + image collage + curved transition
- Central hero white panel sits above/inside a larger image collage.
- Large image strips are visible behind/around the hero card.
- The hero panel has an oversized title at bottom and black dots aligned on a hairline grid.
- A large white curved transition sweeps upward into the partner section.
- This is currently one of the biggest mismatches in Sahil's site: it needs a central hero card + image collage backdrop, not a generic split hero.

### 27s — Partner/logo wall + Work section starts
- Logo wall is dense, not sparse. It uses multiple rows and columns.
- Background is light gray/off-white.
- Work section begins immediately below.
- Bottom floating nav appears centered near viewport bottom.
- Bottom nav contains links: Home, Work(4), central brand pill, Studio, Contact.

### 28–34s — Work section
- Work section is NOT a 2-column grid.
- Left column is sticky: label `(Portfolio 26©)`, huge `Work(4)`, dot, and `View all work` pill.
- Right side is a single vertical stack of very large image cards.
- Each work card nearly fills the right side width and much of viewport height.
- Images are real editorial/fashion/brand visuals, not abstract placeholders.
- Card hover/cursor says `View Work`.
- The left text remains pinned while the right cards scroll past.

### 35s — About + mixed cards
- About section changes to white.
- Large heading: `We shape brands with focus, intention, and impact.`
- Uses asymmetric cards below: stats, transparency/pricing, performance boost, live collaboration card.
- The mix is highly structured and geometric, not generic feature cards.

### 36–40s — Built Different / Our Vision pinned black scrollytelling
- Huge long black section.
- Measured public capture: section height ≈ 9600px at 1440 width.
- View is pinned/sticky: while scrolling, text changes in center.
- `(Our Vision)` appears at top center.
- `(Scroll for more)` appears bottom center.
- Small dot remains fixed near bottom center.
- Words animate/mask in sequence:
  - Built Different
  - Design with purpose
  - Code with passion
  - Create with vision
  - Innovate always
- Text is not static; it drifts/slides/masks through center.
- Final part reveals a red portrait image.
- This must be implemented as a proper sticky scene, not a short black band.

### 41–43s — Services transition
- White curved transition rises from black.
- Services section has huge pale/gray indexed rows and active row emphasis.
- It uses image cards associated with services, but the layout is row-based, not a generic tab card.
- Rows must remain visible; inactive rows become pale, not hidden.

### 44–45s — Showreel pinned black/media section
- Showreel is a long black section.
- Measured public capture: section height ≈ 4800px at 1440 width.
- It uses a pinned central video/image with surrounding media tiles.
- Text `Showreel 26©` is centered over the media.
- Background media appears dark, blurred/dimmed, with rounded tile borders.
- This must be implemented as a pinned scrollytelling scene, not a simple video card.

### 46–47s — Pricing + FAQ
- Pricing is white with a curved transition from the dark showreel.
- Heading is multi-line: `Pick Smart. / Pay Less. / Build Better.`
- Two pricing cards sit side by side.
- FAQ uses a centered 2×2 grid of accordion rows/cards.
- FAQ cards have plus icon at right and compact index at left.
- `Looking for more?` block appears below with avatars and CTA.

### 48–50s — Testimonials pinned scrollytelling
- Testimonials section is light gray/off-white and very tall.
- Measured public capture: section height ≈ 6000px.
- Label `(Testimonials)` stays on left.
- A card is centered and changes per scroll progress.
- Counter on right shows `02/04`, etc.
- There are floating rotated/offset cards in the background.
- This is not a regular slider only; it is scroll-driven.

### 51–52s — Stats + Success story
- Stats section is black.
- Left heading and CTA: `Mōno™ stands behind the data.`
- Right side uses metric cards and quote cards.
- Success story is two-column: large image left + dark testimonial card right.
- Both cards have large rounded corners and sit on black background.

### 53s — Blog cards + curved transition to Contact
- Blog is white with 4 image cards in a row.
- Each has an image, date, title, and small arrow icon.
- A large curved white-to-dark transition leads into contact.

### 54–56s — Contact + footer
- Contact section is black with a large background image/collage at top.
- Left contact form overlays the image.
- Footer is black, dense, with logo, newsletter, link columns, contact details, social/location, and large brand word.
- Bottom floating nav must not cover important footer content; it should hide/fade or have safe bottom padding.

## Summary of what Codex must stop doing

- Stop using a normal sticky top header.
- Stop using normal grids for work/testimonials/showreel.
- Stop treating black sections as static bands.
- Stop using placeholder geometric project cards.
- Stop building regular sliders where scroll-pinned scenes are required.
- Stop polishing custom sections and rebuild from this timeline.
