# Design brief

Source: Stitch HTML
Mood: warm, curious, precise. Minimal and airy single-column layout with clean lines, refined typography, and subtle juggling ring dividers.

## Style

- Style: Modern.
- Feel: warm, curious, precise.
- Personal detail: three small subtle juggling rings as a divider between sections.
- Motion: subtle and short, 150 to 300 ms: things settle into place, nothing bounces. When the visitor prefers reduced motion, nothing moves.

## Colours

| Token | Light | Dark | Used for |
|---|---|---|---|
| background | #f9f9f8 | #111318 | page background |
| surface | #eeeeed | #1b1e26 | cards, tags |
| text | #1a1c1c | #e4e6e8 | headings and body text |
| muted | #5d5e66 | #a3a6b4 | headline under the name, dates, section headings |
| accent | #0037b0 | #7c9eff | links, focus ring, buttons |
| on-accent | #ffffff | #111318 | text on an accent button |

## Type

| Role | Font | Size | Weight |
|---|---|---|---|
| headings | "Geist", system-ui, sans-serif | name 2rem, section 1.25rem, role 1.125rem | 500 |
| body | "Geist", system-ui, sans-serif | 1rem, line height 1.6 | 400 |
| details | "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace | 0.875rem, for dates and labels | 400 |

## Shapes

- Corner radius: none on lists, 0.25rem on tags, photo is round.
- Borders: thin hairline dividers between list items and sections, 1px in the muted colour thinned out.
- Shadows: none.

## Layout

- Page width: at most 42.5rem (680px), centered, with 1.5rem space at the sides on phones.
- Space between sections: 4rem; 1rem between items in a list.
- Experience & sessions: borderless lists, one below the other; no heavy cards or multiple columns.

## Components

- Links: accent colour, underlined on hover, 2px accent focus ring on keyboard navigation.
- Projects: borderless list with title, description, and link tags.
- Skills: plain text list in muted colour separated by commas or bullets.
- Section headings: medium weight in heading font, clean and quiet.

## Signature

- Move: Staggered entrance on load
- Guide: guides/ui-behaviors/dynamic-sibling-animations.md
- Where: the hero bio elements settle smoothly into place one after another on initial load.

## Sections

1. `bio`: the name, headline, pitch, availability, location, languages and bio paragraphs.
2. `cv`: the goal is connecting with the marketing community and peers, leading with work experience, education, and skills.
3. `events`: workshop session attended at DevFest Milano.
4. `links`: LinkedIn and email links.
