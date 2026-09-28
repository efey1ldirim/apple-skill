# HIG home & "Getting started" collection
Sources: https://developer.apple.com/design/human-interface-guidelines (HIG home) ·
https://developer.apple.com/design/human-interface-guidelines/getting-started ·
Ingested: 2026-09-28 · Screenshots: 3 (Getting started grid, expanded sidebar, footer).

## What these pages say
### HIG home
- Purpose of the HIG: guidance and best practices for designing a great experience on **any**
  Apple platform.
- Home is organised in three blocks:
  1. **Design fundamentals** — the principles behind all Apple design. Featured: Design
     principles, Designing for iPhone Duo, Designing for iOS.
  2. **Foundations of design** — the key concepts behind every good experience. Featured:
     Accessibility, App icons, Color, Layout, Materials, Typography. (Apple's own shortlist of
     the most important foundations — read these first.)
  3. **New and updated** (as of 2026-09-28): Designing for iPhone Duo, Apple In-App Purchase,
     Layout, Branding, SharePlay, Siri. → Layout and Branding were recently revised; prefer the
     current versions over older knowledge.
- The HIG has six top-level parts: **Getting started, Foundations, Patterns, Components,
  Inputs, Technologies** (full tree in `../../INDEX.md`).

### Getting started
- Goal stated by the page: make an app or game that **feels at home on every platform you
  support** (native feel per platform, not one design pasted everywhere).
- Contents, in Apple's order: Design principles → Designing for iOS → iPadOS → macOS → tvOS →
  visionOS → watchOS → games → **iPhone Duo** (new in 2026: a new iPhone form factor with its
  own page).
- Reading order implied: principles first, then the platform page(s) you target, then
  Foundations.

## Structure & visual notes (secondary)
- Documentation layout: left **sidebar navigator** (Filter field with a list icon, collapsible
  sections with disclosure chevrons ›/⌄, child items with small monochrome platform glyphs;
  grey `#6E6E73` 14px items, the current page bold/black) + a 740px content column.
- Page title 48px bold (SF Pro Display, −0.144px tracking); abstract 28px regular.
- Topic grid: 3 columns of cards, each a 231×130 image with rounded corners — a **teal→lime
  green gradient** with a dark-green outline glyph (building block, iPhone, iPad, iMac, TV,
  Vision Pro, Watch, game controller, folding iPhone Duo) — and a 17–20px semibold title
  below, outside the image. Green tint echoes the green of Apple's original six-colour logo
  and is used for all "Getting started" imagery.
- Footer: light grey band, breadcrumb, 4-column link directory, "Light / Dark / Auto" segmented
  appearance switch (blue selected capsule) at bottom right, copyright + legal links, language
  picker.

## Web translation
- For documentation/help centres: sidebar navigator with filter + collapsible sections + one
  content column (~740px) is Apple's pattern; highlight the current page by weight/colour, not a
  filled block.
- Offer a **Light / Dark / Auto** appearance control, defaulting to Auto (system).
- A single tint family per section of imagery (green for Getting started) gives a large doc set
  a coherent look without colouring the UI chrome.
