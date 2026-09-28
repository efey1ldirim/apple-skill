# Reference index

Read this first. It tells you which files to open for the task at hand and what has been
ingested so far.

## Routing table — what to read for which task

| Task | Always read | Then read |
|---|---|---|
| Any UI work | `field-notes/principles.md`, `field-notes/anti-patterns.md` | — |
| Web UI (React/Tailwind/CSS) | + `field-notes/tokens.md`, `field-notes/components.md`, `field-notes/engineering-gotchas.md` | HIG pages for the components you use |
| Settings / list screen | + `field-notes/components.md` § Settings list | HIG: Settings, Lists and tables, Toggles |
| Wizard / onboarding / form | + `field-notes/components.md` § Wizard | HIG: Onboarding, Entering data, Text fields, Pickers |
| Consent / permission / connect screen | + `field-notes/components.md` § Consent screen | HIG: Privacy, Managing accounts, Alerts/Sheets |
| Landing / marketing page | + `field-notes/landing-and-motion.md`, `hig/overview/design-landing.md` (Apple's own page: section rhythm, cards, links) | HIG: Branding, Typography, Motion, Materials |
| Dashboard / analytics | + `field-notes/components.md` § Dashboard tiles | HIG: Charting data, Charts, Layout |
| Dark mode | + `field-notes/tokens.md` § Dark | HIG: Dark Mode, Color, Materials |
| Design review / audit | `field-notes/anti-patterns.md` + checklist in `SKILL.md` | HIG pages for every component on screen |
| Visual proportions in doubt | `screenshots-described/` | — |

When a HIG page and a field note disagree: the **field note wins for the web** when it records
an explicit user decision (marked **[user decision]**); otherwise follow the HIG and note the
conflict.

## HIG ingestion status

Pages are added one at a time from developer.apple.com/design. File naming:
`hig/<section>/<slug>.md` (e.g. `hig/foundations/color.md`). Update this table on every
ingestion. `—` = not yet ingested.

### Landing & overview
| Page | File | Ingested |
|---|---|---|
| developer.apple.com/design (landing) | `hig/overview/design-landing.md` | 2026-09-28 |
| Human Interface Guidelines (overview) | — | — |

### Getting started
| Page | File | Ingested |
|---|---|---|

### Foundations
| Page | File | Ingested |
|---|---|---|

### Patterns
| Page | File | Ingested |
|---|---|---|

### Components
| Page | File | Ingested |
|---|---|---|

### Inputs
| Page | File | Ingested |
|---|---|---|

### Technologies
| Page | File | Ingested |
|---|---|---|

### Other design pages (resources, videos, awards, tips…)
| Page | File | Ingested |
|---|---|---|

## Field notes (already written)
| File | Contents |
|---|---|
| `field-notes/principles.md` | The design language rules, with the reasoning behind each |
| `field-notes/tokens.md` | Exact colours, radii, shadows, type scale, spacing, motion — Tailwind + CSS vars |
| `field-notes/components.md` | Validated component recipes: group, row, tile, buttons, segmented, choice, field, wizard shell, consent screen, dashboard tiles |
| `field-notes/anti-patterns.md` | Ideas that were tried and rejected, and why |
| `field-notes/engineering-gotchas.md` | Layout/CSS traps that break these designs in real browsers |
| `field-notes/landing-and-motion.md` | Marketing-page language: masked headlines, glass, per-section palettes, scroll choreography |
| `screenshots-described/curated-references.md` | 20 curated reference shots behind the field notes, described |
