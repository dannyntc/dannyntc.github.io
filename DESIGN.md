# Design direction

## Surface

Personal portfolio in Experience mode with a strong Read mode for case studies and essays. The site should read as a measured account of work: practical questions, documented contributions, and specific outcomes before interpretation.

## Visual world

The site follows the original profile layout: a warm off-white page, a fixed left sidebar on desktop, compact responsive navigation on smaller screens, thin neutral rules, and quiet blue/olive accents. Cards and borders organize information without creating colored section panels.

## Typography

- Headings and body text use Source Sans Pro when available, with Helvetica and system sans-serif fallbacks.
- Homepage and article headings use a compact scale and cap at approximately 26px.
- Work, project, timeline, and essay titles stay around 18–20px.
- Reading text stays around 65–75 characters per line.
- Headings use normal tracking and weight to create hierarchy without oversized display type.

## Colour roles

- `--paper`: warm off-white page surface.
- `--ink`: charcoal primary text.
- `--muted`: readable secondary text.
- `--blue`: ink-blue links and selected emphasis.
- `--olive`: muted green for navigation and secondary links.
- `--line`: low-contrast rules.

## Composition

- A fixed 246px desktop sidebar contains the portrait, identity, primary navigation, contact icons, and top link.
- Below 1025px the sidebar becomes a compact sticky header with wrapped horizontal navigation.
- The introduction uses a compact sans-serif headline and keeps the first evidence section within reach.
- Work uses bordered full-width cards with context, contribution, and documented result.
- Projects uses a two-column bordered-card grid with native disclosures for implementation detail.
- Writing is a rule-separated reading list for essays on tools, judgment, and usable processes.
- About Me combines bordered experience and education cards, community notes, and contact links without tinted backgrounds.

## Interaction

- Sidebar and responsive-header navigation use normal anchors and work without JavaScript.
- Detail pages provide a home link and a parent-section return link.
- Project detail uses native `<details>` disclosures.
- Content is visible by default; no scroll reveal is required.
- Motion is limited to a subtle page-load title reveal and is disabled for reduced-motion users.

## Accessibility

- Use semantic section headings and a skip link.
- Maintain visible keyboard focus.
- Preserve readable contrast and comfortable touch targets.
- Keep all substantive content available without JavaScript or remote fonts.
