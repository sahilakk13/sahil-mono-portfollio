# 02 — Layout map

## Global page geometry

Captured desktop viewport: 1440×1200. The full homepage capture height is about 38,183px because the template uses long sticky/scrollytelling tracks.

Core geometry:
- Outer container horizontal padding is about 29–48px.
- Header height is 132px.
- Hero first viewport is 1200px high.
- Hero track is 3600px high, so it is not a normal short landing hero.
- Fixed crosshair overlay covers the entire viewport at z≈9998.
- Floating bottom nav is fixed at z≈9996 and starts translated down by 150%.
- Webflow marketplace badge and template navigator are not part of the design; exclude them.

## Hero layout

Reference desktop first viewport:
- White background.
- Top header absolute at top.
- Service list: left top, x≈48, y≈120, line-height 20.8px.
- Intro paragraph: right top, x≈1064, y≈120, width≈300.
- CTA: below paragraph at x≈1064, y≈208, 113×51.
- Horizontal viewport line at y≈600, vertical viewport line at x≈720.
- Small black dot positions: around x≈48/390/727/1064 and y≈350.
- Center plus/circle at viewport center x≈710 y≈590, 20×20.
- Copyright around x≈1064 y≈916.
- Huge title anchored near bottom, y≈1020, 176px, split across left/right.

Current site must not use a full top angled color-strip inside the first viewport. Any image/collage behavior belongs after the first hero viewport or as a subtle continuation, not as the initial reference-matching hero.

## Partners + work section

Section background: rgb(245,245,245).
- Starts y≈3599.
- Container x≈29, width≈1382.
- Partners metadata row at y≈3748: `(Partners)` left, `2011-26©` center/right.
- Work margin block starts y≈4254.
- Work uses a sticky left rail:
  - x≈29, width≈338, height≈500.
  - Label, h2 Work(4), button.
- Work cards live in one right column:
  - x≈382, width≈1029.
  - Each wrapper ≈1029×960.
  - Do not use a 2-column homepage work grid; the reference is a large vertical right-column stack with sticky left rail.

## About section

White `section with-minus`, starts y≈8422, height≈1358.
- Label/brand row around x≈377 y≈8686.
- Big heading h2 at x≈377 y≈8723, w≈1034, font 64px, line-height 70.4.
- Below/side: small stat/card system and mixed card area.
- Avoid giant clipping under nav. The reference has enough vertical whitespace and fixed crosshair overlay.

## Mixed feature grid + vision transition

Feature cards occur before the black vision section.
- Cards use light background, radius 10–20px, dark text.
- Text examples: `Pricing with complete transparency`, chat bubbles, `View pricing`, small brand logo.
- The vision section is not a short black band. It is a 9600px black animation track.

## Vision animation section

`animation-section`: y≈9780, height≈9600, black.
- Has labels `(Our Vision)` at top and `(Scroll for more)` at bottom.
- Sticky center typography: Built Different / Design with purpose / Code with passion / Create with vision / Innovate always.
- Center title font ≈96px, weight 500, line-height about 105.6.
- This should be a sticky scrollytelling sequence where titles transition/reveal, not a static black strip.

## Services section

White section y≈19379, height≈989.
- Header row: `(Services)` left x≈29, `Get started` CTA right x≈1073.
- Rows start y≈19651.
- Each service row is roughly 115px high.
- Left index at x≈29, font 14.4/600.
- Title begins x≈74–75, font 96px/600, line-height ≈105.6.
- Right description column x≈1078, width≈333, font 16/600.
- Reference is not an image-preview tab component; it is a large typographic row list with text previews.

## Showreel

Black `video-section`: y≈20368, height≈4800.
- Contains sticky video section 1200px high.
- Heading `Showreel 26©` centered around y≈20911, font 96px.
- Play button 70×70 white circle in center of video, transformed at 0.7 scale during initial state.
- Implement a sticky black video reveal/scale behavior, not a simple normal video card.

## Pricing + FAQ

White section y≈25167, height≈1706.
- Label `(Pricing)` x≈320 y≈25316.
- Heading lines around x≈472 y≈25354, font 96px/600:
  - Pick Smart.
  - Pay Less.
  - Build Better.
- Pricing cards use thin black dividers and black pill buttons, two-column arrangement.
- FAQ rows at y≈26348. They are in two columns, each toggle header around 468×72, not a full-width simple accordion.

## Testimonials

Light-gray `testimonials-section`, y≈26873, height≈6000.
- Sticky/scrollytelling behavior, not a normal slider only.
- Uses large quote block and media/card accent.
- Numbered controls and/or sticky cards should be implemented with smooth scroll/slide.

## Stats + success story

Dark section y≈32872, height≈2589.
- Center intro with `(Stats)` label and h2.
- Stats cards are dark cards, around 331×320, radius 10px, staggered in sticky positions.
- Metric font around 60.8px.
- Cards include front/back-like content: metric, label, description, CRI value and stars.

## Blog

White/light section y≈35461, height≈901.
- Header row with `(Blog)`, `Smart insights.`, and `See all` CTA.
- Four horizontal blog cards, not a simple list.
- Each card: x positions roughly 29, 378, 728, 1077; width 334, height 358; bg rgb(245,245,245); radius 7px.

## Contact + footer

Contact dark section y≈36362, height≈1080.
Footer starts y≈37442, height≈741.
- Contact and footer are both dark.
- Footer has left/right grid with vertical divider.
- Bottom floating nav must hide/fade or have safe space when over footer. It must not cover large brand text.
