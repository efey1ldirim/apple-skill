# Apple Design — landing page (developer.apple.com/design)
Source: https://developer.apple.com/design/ · Section: Overview · Ingested: 2026-09-28 ·
Captured: 7 screenshots (hero → footer) + full text + computed CSS at 1440px and 320px.

## In one line
Apple's front door for design: its promise is apps and games that feel **native to Apple
platforms**, and it routes you to the guidance (HIG), official tools and assets, expert talks,
real-world stories, awards, and a beginner pathway — with the 2025 **Liquid Glass** design
system as the current headline.

## What the page says (content — the important part)

### Hero message
- The single headline promises: design apps and games that **fit seamlessly into Apple's
  platforms**. The ambition is not "a pretty app" but an app that feels like it belongs to the
  system. → For us: "Apple quality" = consistency with platform conventions + craft, not a
  visual style bolted on.
- The hero artwork *is* the message: familiar system controls (a switch, a slider, a round
  "+" button, a large rounded window corner, a capsule that pinches in the middle like two
  drops merging) rendered as **clear, refractive glass** over a pale grey canvas. Colour
  appears only where a control is "on" (green switch fill, blue slider fill, a rainbow
  gradient flowing through a glass capsule, a warm orange/yellow knob). Faint construction
  lines and concentric circles show the controls are built on geometry. This previews the
  Liquid Glass language: controls are glass that bends light, colour is state, shapes are
  capsules/circles/concentric rounded rectangles.

### The six things Apple offers designers (feature tiles)
1. **Human Interface Guidelines** — the up-to-date guidance and best practices for good
   experiences on *every* Apple platform. (The primary reference; everything else supports it.)
   Tile art: a search field with "Design" typed, a floating glass close button, a round
   rocket button, and a tab bar (Tab 1 / Tab 2 / Tab 3 with the selected tab in blue and the
   icons as simple shapes) plus a separate round search button — i.e. the new floating,
   capsule-shaped navigation controls.
2. **Apple Design Resources** — official design templates for **Figma and Sketch**, colour
   guides, and more. Tile art: a dark-mode kit of system components — keyboard, "Allow /
   Don't Allow" notification-permission alert, context menu (Options, Share, Copy, Copy
   Transcript, Duplicate), tab bar (Home, New, Radio, Library, Search), capsule buttons in
   blue ("Continue", "Play"), red ("Delete"), grey ("Cancel"), green switches, a slider,
   a colour picker gradient. → Use Apple's own kits as the source of truth for component
   proportions before inventing.
3. **Icon Composer** — tool for building app icons **for the new design**, including applying
   live, dynamic properties and effects (the layered, glass-like icons that react to light and
   appearance modes).
4. **SF Symbols** — a library of **7,000+ symbols** made to integrate with Apple platforms
   (the system iconography; icons should match text weight/size).
5. **Pass Designer** (beta) — create **Apple Wallet passes** on a Mac.
6. **Reality Composer Pro** (beta) — iterate, preview and prepare **3D content** quickly
   (spatial / visionOS).

### Design videos (learn from Apple's own designers) — all WWDC25
| Talk | What it covers (our summary) |
|---|---|
| Meet Liquid Glass | The new material that unifies the design language across Apple platforms while making the UI more dynamic and expressive. Chapters: Dynamics · Adaptivity · Principles. |
| Get to know the new design system | Deeper tour of changes to visual design, information architecture, and core system components. Chapters: Design language · Structure · Continuity. |
| Say hello to the new look of app icons | New icon appearances on iOS/iPadOS/macOS — light and dark tints and a clear option. Chapters: Overview · Design system · Drawing icons. |
| Create icons with Icon Composer | Making the updated icons for iOS, iPadOS, macOS, watchOS; exporting layers from design tools; delivery. |
| Design foundations from idea to interface | What makes apps feel clear, intuitive, effortless. Chapters: **Structure · Navigation · Content · Visual design** — a useful ordering for any design task. |
| Elevate the design of your iPad app | Responsive layouts for resizable windows. Chapters: Navigation · Windows · Pointer · Menu bar. |
Takeaway: Apple frames design as **structure → navigation → content → visual design**, in
that order; visual polish comes last, after information architecture is right.

### Developer stories (what Apple celebrates)
- **Art of Fauna** (Klemens Strasser) — a second Apple Design Award, this time for
  **Inclusivity**. Apple elevates accessibility/inclusion as a design-excellence category,
  not a compliance chore.
- **Is This Seat Taken?** — a logic puzzler styled like a Saturday-morning cartoon; puzzles
  hidden inside a funny narrative about choosing where to sit (buses, restaurants). Apple
  celebrates **delight and personality** wrapped around clear mechanics.
- **grug** — a playful app giving daily "wisdom" in caveman grunts that "looks good doing
  it": strong, simple visual identity (flat single-colour screens — dark green, sky blue,
  yellow — with hand-drawn line art) can be award-worthy.

### Apple Design Awards
Celebrates innovation, ingenuity and technical achievement in apps and games. Shown as a grid
of 12 winner app icons on a dark panel — every icon a squircle, most full-colour
illustrations, one a white icon with a hand-lettered wordmark.

### New to design?
Apple's **Design Pathway** — a curated, easy-to-follow route through videos, documentation
and resources for starting to design apps and games. (Linked page: /design/get-started/.)

## Page structure & web specs (secondary — measured with computed CSS)

### Information architecture
- Global nav (Developer site) → **local nav** "Design" with 5 items: Overview · What's New ·
  Get Started · Guidelines · Resources. Current item: black text + a **1px black underline**
  sitting ~15px below the text (an `::after` line), not a pill or bold.
- Sections in order: Hero → Tools/feature tiles (2-column grid) → Videos (3-column) → Stories
  (3-column) → Awards (full-width card) → "New to design?" blue banner → breadcrumb + sitemap
  footer (Platforms, Tools, Technologies, Resources, Support, Programs, Events).

### Canvas & rhythm
- Page background alternates **white `#FFFFFF`** and **light grey `#F5F5F7`** by section; cards
  take the *opposite* tone (grey `#F5F5F7` tiles on white sections, white-ish cards on grey
  video section). No borders, **no shadows** on cards — contrast of fills only.
- Every section: `padding: 68px 0`. Content column **980px** max (local nav: 980px + 22px
  side padding). Hero: 735px tall at desktop (540px on mobile), `#F5F5F7` with a full-bleed
  glass illustration.
- Grids: 2 columns of 478px with **24px gap**; 3 columns of 311px with **24px gap**.

### Cards
- `border-radius: 18px`, `overflow: hidden`, fill `#F5F5F7`, no border, no shadow.
- Media at the top, edge-to-edge (no inner radius — the card clips it).
- Text block centred: `padding: 0 42.5px 34px`; headline 24px/600 (21px on mobile);
  description 17px/400/25px line-height, `margin-top: 13.6px`; link 17px in **#0066CC** with a
  `›` chevron from the SF Pro Icons font.
- Tool tiles use a **96×96 app icon** instead of media, centred above the title.
- Whole card is one link (`tile-link`); hovering the card underlines only its text link —
  the card itself does not move, lift or change colour.
- Story cards: 311px wide, text left-aligned, 19px/600 title, 17px body, "Read more ›" link
  pinned at the bottom.
- Awards card: dark panel with the icon grid on top, `#F5F5F7` lower half with centred
  title/description/link.
- "New to design?" banner: `linear-gradient(#0055C7 → #0071E3)` top-to-bottom, radius 18px,
  white SF symbol-style icon (paintbrush), 32px/600 headline, 21px intro, white link — the
  only saturated surface on the page, reserved for the beginner CTA.

### Typography (SF Pro Display for ≥ 19px, SF Pro Text for body)
| Role | Desktop 1440 | Mobile 320 |
|---|---|---|
| Hero headline (h1) | 32 / 600 / lh 36 / +0.128px | 23 / 600 / lh 26.8 |
| Section title (h2, "Watch design videos") | 40 / 600 / lh 44 | 28 / 600 / lh 32 |
| Local nav title "Design" | 21 / 600 | 19 / 600 |
| Local nav items | 12 / 400 / −0.12px, black | 14 |
| Card headline | 24 / 600 / lh 28 | 21 / 600 / lh 25 |
| Story title | 19 / 600 / lh 23 | — |
| Intro paragraph | 21 / 400 / lh 29 | 19 / lh 27 |
| Body / card description | 17 / 400 / lh 25 / −0.374px | same |
| Video caption (h5) | 15 / 600, grey `#666666` | same |
| Primary text colour | `#1D1D1F` (not pure black) | — |
| Link colour | `#0066CC` (light); `#2997FF` on dark | — |
Notes: large headings get slightly *positive* tracking in Apple's web type (SF Pro Display
optical tracking), body gets negative (−0.374px at 17px). Links underline on hover only.

## Visual notes (from screenshots)
- Hero: pale lavender-grey `#F5F5F7`-ish canvas; glass controls with bright refractive rims
  (thin coloured fringes where light bends at edges), soft shadows under them, construction
  circles/crosshairs faintly drawn. Headline centred at the bottom of the hero, two lines,
  semibold, dark grey — calm, not huge (32px) because the artwork carries the drama.
- Feature tiles: illustration area light grey grid paper (HIG) vs dark UI kit (Resources) —
  one light, one dark side by side, same card shape.
- Video thumbnails: 16:9, clipped by the 18px card radius, big white translucent play
  triangle centred, "WWDC25" watermark bottom-left; caption below the image, outside the card,
  grey semibold.
- Story row: first two cards have edge-to-edge illustrations; the third shows three phone
  screenshots on a light background (product shots float on a neutral card).
- Footer: breadcrumb (Apple logo › Developer › Design) then a 4-column link directory with
  semibold group headings and regular grey links.

## Web translation
- Our `#F5F5F7` canvas and 18px group radius **match Apple's own site exactly** (tokens.md
  already uses both). Keep them.
- Apple's marketing cards use **fill contrast only** (grey card on white or white on grey) —
  no shadow, no border. For marketing/overview grids prefer this over shadowed cards;
  reserve soft shadows for *floating* objects (tiles, glass controls) as in field notes.
- Primary text `#1D1D1F` instead of `#000` is Apple's web default; acceptable refinement for
  body text on light canvas (field notes use black/opacity tones — both fine; don't mix both
  on one page).
- Text links: `#0066CC` + `›` chevron, underline on hover — Apple's standard "more" link. Use
  for secondary navigation actions in marketing contexts (in app chrome keep the field-note
  rule: grey text secondary, one filled pill).
- Section rhythm: 68px vertical padding, 980px column, 24px grid gap — a safe default for
  documentation/overview pages.
- Selected tab in a text nav: thin 1px underline below the label, not a pill/bold.
- Order work as **structure → navigation → content → visual design**.
- Tailwind sketch of the Apple card:
  `rounded-[18px] overflow-hidden bg-[#F5F5F7]` · body `px-[42px] pb-[34px] text-center` ·
  title `text-[24px] font-semibold leading-[28px]` · desc `mt-[14px] text-[17px] leading-[25px] tracking-[-0.022em]` ·
  link `text-[17px] text-[#0066CC] hover:underline`.

Note: HIG Dark Mode advises against app-specific appearance settings; for websites the
Light/Dark/Auto control is acceptable only defaulting to Auto — see `../foundations/dark-mode.md`.

## Checklist
- [ ] Does the design feel like it belongs to the platform (conventions first, style second)?
- [ ] Structure and navigation settled before visual polish?
- [ ] Cards on overview pages separated by fill tone, not borders/shadows?
- [ ] One saturated surface at most per page, reserved for the key CTA?
- [ ] Colour in controls expresses state (on/selected), not decoration?
- [ ] Links: blue, chevron, underline on hover; nav selection = subtle underline?
- [ ] Inclusivity considered as a quality bar, not an afterthought?

## Related (to ingest)
- /design/human-interface-guidelines/ (HIG overview) — not yet
- /design/whats-new/ — not yet
- /design/get-started/ (Design Pathway) — not yet
- /design/resources/ — not yet
- /design/awards/ — not yet
- /videos/design/ and the six WWDC25 talks above — not yet
- /icon-composer/, /sf-symbols/ — not yet
