
# Codex final command — implement from reference capture audit

Paste this into Codex after placing this pack in the project root.

```text
Read `reference-capture/` and `reference-audit-v2/` fully before changing code.

The previous implementation is still too custom. Stop random polishing. The captured Mōno reference is the source of truth.

Important legal rule:
- Do not copy proprietary Webflow code into the React project.
- Do not ship paid template assets.
- Do not reuse Webflow class names as our architecture.
- Use the capture and audit only to understand visual layout, spacing, typography, animation, scroll behavior, interactions, and responsive behavior.
- Rebuild everything with original React + Tailwind + Framer Motion code and Sahil Kumar content.

Implement from these files only:
- reference-audit-v2/01-page-structure.md
- reference-audit-v2/02-layout-map.md
- reference-audit-v2/03-typography-tokens.md
- reference-audit-v2/04-color-border-radius-shadow-tokens.md
- reference-audit-v2/05-animation-and-interaction-map.md
- reference-audit-v2/06-assets-composition-map.md
- reference-audit-v2/07-responsive-map.md
- reference-audit-v2/08-current-vs-reference-difference-report.md
- reference-audit-v2/09-implementation-plan.md

Critical corrections:
1. Replace the current sticky/cloudy top header with the reference absolute top nav + hamburger overlay.
2. Implement bottom floating nav exactly: hidden in hero, shows on scroll up after hero, hides on scroll down, hides or safe-spaces near footer.
3. Rebuild hero as a 3600px track with clean 1200px first viewport, hairlines/crosshair, service list, intro, CTA, copyright, and huge split bottom title. Remove first-viewport angled color panels.
4. Combine partners + work in one light-gray section.
5. Rebuild homepage work as sticky-left rail plus single right-column large vertical stack. Do not use a 2-column card grid.
6. Rebuild services as huge indexed rows with right descriptions. Do not use a large image-preview tab system.
7. Rebuild vision as a tall 9600px black sticky scrollytelling section, not a short black band.
8. Rebuild showreel as a 4800px black sticky video section.
9. Rebuild pricing/FAQ to the captured two-column/row rhythm.
10. Rebuild testimonials as a long sticky/light-gray section, not just a normal carousel.
11. Rebuild stats as dark staggered stat cards.
12. Rebuild blog as four horizontal cards, not a row list.
13. Keep footer dense/dark but remove bottom nav overlap and any stuck floating CTA bug.
14. Add desktop crosshair overlay and subtle tooltip cursor states matching reference. Do not use a distracting black dot cursor.
15. Use exact typography/color/radius tokens from the audit.

Work in this order:
A. Update global tokens and motion utilities.
B. Build navigation/header/menu/bottom nav/crosshair/cursor tooltip.
C. Rebuild desktop homepage section by section from the audit.
D. Run `npm run build` and fix errors.
E. Create `reference-audit-v2/10-final-match-report.md`.
F. Only after desktop is matched, implement responsive from `07-responsive-map.md`.

Do not say “done” until:
- build passes,
- every section has been compared against the audit,
- `10-final-match-report.md` lists matched items and remaining mismatches.
```
