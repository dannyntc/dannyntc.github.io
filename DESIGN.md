# Design direction

## Surface

Personal portfolio in Experience mode with a strong Read mode for case studies and essays.

## Visual world

The site should feel like a well-kept personal working journal: warm paper, ink, blue annotations, quiet rules, and generous margins. The page should feel authored and reflective rather than like a generic consulting template.

## Typography

- Display and article headings use Source Serif 4 when available, with Georgia fallback.
- Body and interface text use Source Sans 3 when available, with system sans-serif fallback.
- Reading text stays around 65–75 characters per line.
- Headings use restrained negative tracking, never below `-0.04em`.

## Colour roles

- `--paper`: warm off-white page surface.
- `--paper-deep`: slightly darker paper for quiet callouts.
- `--ink`: charcoal primary text.
- `--muted`: readable secondary text.
- `--blue`: ink-blue links and selected emphasis.
- `--line`: low-contrast rules.

## Composition

- A compact sticky horizontal masthead replaces the fixed sidebar.
- The introduction uses a restrained display headline and keeps the first evidence section within reach.
- Selected Work uses open editorial rows rather than repeated cards.
- The three connected dimensions of Danny's work follow Selected Work as a compact “thread” block.
- How I Think is a typographic reading list.
- The Workbench uses concise project entries with native disclosures for process detail.
- Background is a two-column editorial timeline that collapses to one column.

## Interaction

- Navigation uses normal anchors and works without JavaScript.
- Detail pages provide a home link and a parent-section return link.
- Project detail uses native `<details>` disclosures.
- Content is visible by default; no scroll reveal is required.
- Motion is limited to a subtle page-load title reveal and is disabled for reduced-motion users.

## Accessibility

- Use semantic section headings and a skip link.
- Maintain visible keyboard focus.
- Preserve readable contrast and comfortable touch targets.
- Keep all substantive content available without JavaScript or remote fonts.
