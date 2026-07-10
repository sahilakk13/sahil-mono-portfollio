# Mōno Video Deep Audit Pack — Start Here

This pack is built from the user's real screen recording of the Mōno template plus the captured public page structure and computed-style data.

Use this pack to force Codex to stop guessing and rebuild the Sahil portfolio against the real template behavior.

## Files

- `audit/01-video-scroll-timeline.md` — frame-by-frame behavior from the uploaded video.
- `audit/02-reference-section-structure.md` — exact section order and text/content mapping.
- `audit/03-layout-and-style-tokens.md` — measured style values from the public capture.
- `audit/04-motion-and-scroll-system.md` — exact scroll/sticky/pinned scene requirements.
- `audit/05-component-rebuild-spec.md` — what React components must become.
- `audit/06-codex-implementation-plan.md` — order of implementation.
- `codex-prompts/01_FINAL_REBUILD_FROM_VIDEO_AUDIT.md` — paste this into Codex.
- `qa/01_PIXEL_QA_CHECKLIST.md` — use after Codex completes.
- `evidence/template_video_contact_sheet.jpg` — reference video contact sheet.
- `evidence/keyframes/` — selected reference keyframes.

## Important

Do not ask Codex to polish the existing custom design. The current site must be restructured section by section to match the template's real scroll behavior:

1. Top nav is not a heavy sticky header.
2. Bottom floating nav appears after hero and must hide/show with scroll behavior.
3. Work is sticky-left text + right vertical card stack, not a standard grid.
4. Built Different is a long pinned black scrollytelling section.
5. Showreel is a long pinned black/media section.
6. Testimonials are a long pinned/scrollytelling section.
7. Services are huge indexed rows with image + text; not a generic tab preview.

