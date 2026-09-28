# Apple's own web patterns (developer.apple.com / apple.com)

Measured on Apple's live sites (computed CSS at 1440px, plus user screenshots), 2026-09-28.
These are Apple's *web* implementations — the most direct reference for building Apple-quality
websites. Add to this file whenever a new site pattern is observed.

---

## 1. Global navigation mega-menu ("flyout") — Platforms menu
Observed: user screenshot (hover on **Platforms** in the Developer global nav) + CSS.

### Structure
- Trigger: a plain text link in the 44px global nav bar (`Platforms`, 12px regular, black ~80%
  alpha). Opens on **hover** (desktop ≥ 834px); on small screens the same content becomes a
  full-screen drill-down menu.
- The flyout is a **full-width sheet that grows down from the nav bar** (no card, no border, no
  shadow, no rounded corners). Content aligned to the site's **980px column** (padding
  `40px 22px 84px`).
- **Two (or three) columns of link groups**:
  - **Primary group ("elevated")**: small header, then **big links** — here *Apple Platforms,
    iOS, iPadOS, macOS, tvOS, visionOS, watchOS, App Store*.
  - **Secondary group**: small header, then **small bold links** — here *Featured: Design,
    Distribution, Games, Accessories, Web, Home, CarPlay*.
  - Other menus follow the same shape (e.g. Get Started: "Explore Get Started" + "Stay Updated").
- Column gap: primary group has `padding-right: 88px`, secondary `44px`.
- Group headers are **sentence case, small, grey** — *not* uppercase ("Explore Platforms",
  "Featured"). Consistent with our no-uppercase-eyebrow rule.

### Values
| Element | Desktop spec |
|---|---|
| Nav bar height | 44px |
| Flyout background (light) | `#FAFAFC` (`--r-globalnav-background-opened`) |
| Flyout background (dark) | `#161617` |
| Group header | SF Pro Text 12px / 400 / lh 16px / −0.12px, colour `#6E6E73` (dark: `#86868B`) |
| Primary ("elevated") link | SF Pro Display **24px / 600** / lh 28px / +0.216px, colour `#333336`; padding `9px 11px 7px` (hit area ~44px tall), `margin-bottom: -6px` (links sit tight, ~38px pitch) |
| Secondary link | SF Pro Text **12px / 600** / lh 16px / −0.12px, colour `#333336`; padding `7px 11px` (30px tall rows, ~24px pitch) |
| Mobile (≤ 833px) primary link | 28px / 600 / lh 1.14 / +0.007em |
| Mobile secondary link | 17px / 600 / lh 1.47 / −0.022em |
| Mobile header | 17px / 400 / −0.022em |
| Max flyout height | `calc(100vh − 88px)` |

### The page behind it
- The rest of the page is **blurred and veiled** while the menu is open (screenshot: content
  below the sheet is heavily blurred, washed out).
- Implementation pieces in Apple's CSS: the page gets `filter: blur(3px)` with a 0.15s
  transition (`.globalnav-page-blurred`), and a **curtain** layer over it with
  `backdrop-filter: blur(10px)` (fade 0.1s); in dark mode the curtain is `rgba(0,0,0,.4)`.
- Scrolled/scrim state of the nav bar itself: `rgba(250,250,252,.8)` +
  `backdrop-filter: saturate(180%) blur(20px)` — the classic Apple frosted bar.

### Motion (choreography)
- The sheet **grows in height** with `cubic-bezier(.4, 0, .6, 1)`; background fades in with it.
- Group headers and each link **fade in and slide down 4px** (`opacity 0→1`,
  `translateY(-4px)→0`), duration **0.32s**, **staggered** per item (delay grows with the item
  index; group delay + 80ms for headers).
- Closing reverses quickly: items fade out with a shorter duration (~0.16s + 20ms per remaining
  item), sheet collapses.
- Switching directly from one menu to another cross-fades content in **0.12s** and animates the
  height difference (no close/reopen).
- Mobile: items slide 8px with a 20ms stagger starting 0.2s after open.

### Why it works (design reading)
- Hierarchy by **size contrast**, not colour: 24px primary vs 12px secondary, both the same dark
  grey; headers the only grey element.
- No containers: the sheet *is* the surface; columns separated by whitespace only.
- The blurred page keeps context ("I'm still on the same page") while removing competition.
- Motion is short, eased, staggered by a few ms — alive but never slow.

### Web recipe (Tailwind-ish)
```html
<!-- flyout sheet -->
<div class="fixed inset-x-0 top-11 bg-[#FAFAFC] dark:bg-[#161617]">
  <div class="mx-auto max-w-[980px] px-[22px] pt-10 pb-[84px] flex">
    <section class="pr-[88px]">
      <h2 class="text-[12px] leading-4 text-[#6E6E73] dark:text-[#86868B]">Explore Platforms</h2>
      <ul class="mt-[6px]">
        <li><a class="inline-flex px-[11px] pt-[9px] pb-[7px] -mb-[6px] -ml-[11px] text-[24px] leading-7 font-semibold text-[#333336] dark:text-[#E8E8ED] hover:text-black">iOS</a></li>
      </ul>
    </section>
    <section class="pr-11">
      <h2 class="text-[12px] leading-4 text-[#6E6E73]">Featured</h2>
      <ul class="mt-[6px]">
        <li><a class="inline-flex px-[11px] py-[7px] -mb-[6px] -ml-[11px] text-[12px] leading-4 font-semibold text-[#333336]">Design</a></li>
      </ul>
    </section>
  </div>
</div>
<!-- curtain over the page -->
<div class="fixed inset-0 top-11 backdrop-blur-[10px] bg-white/30 dark:bg-black/40"></div>
```
Stagger items with `transition: opacity .32s, transform .32s; transition-delay: calc(var(--i) * 20ms)`
from `opacity:0; transform: translateY(-4px)`. Open on hover with a small intent delay, on click
for touch, close on Esc/outside click; manage focus (keyboard users can Tab into the sheet);
`aria-expanded` on the trigger; respect `prefers-reduced-motion` (no slide, instant fade).

---

## 2. Local (section) navigation bar
- Second bar under the global nav: section title left ("Design", 21px/600), item links right
  (12–14px regular, black). Current item: **1px black underline ~15px below the text**
  (`::after`), no pill. Sticky; frosted when scrolled.

## 3. Cards and sections (marketing/overview pages)
- Sections alternate `#FFFFFF` / `#F5F5F7`; cards take the opposite fill; **radius 18px, no
  border, no shadow**; section padding 68px; column 980px; grid gap 24px.
- Card text centred, headline 24/600, body 17/25, link `#0066CC` + "›", underline only on hover;
  the whole card is the link, it doesn't lift on hover.
(Details: `../hig/overview/design-landing.md`.)

## 4. Documentation layout (HIG pages)
- Left sidebar navigator with **Filter** field, collapsible groups (chevrons), small monochrome
  glyphs per item, current page bold/black; content column ~740px; right **"On this page"**
  mini-TOC with a thin vertical bar marking the current section.
- Page: 48px bold title → 28px abstract → hero image (18px radius) → body 17–20px with **bold
  lead-in sentences**; inline links blue and underlined; tables with a bold header, **1px dark
  rule under the header**, light row hairlines; "Resources" (Related / Developer documentation /
  Videos) and a **Change log** table at the end.
- "Important" callout: rounded box, 1px amber border, cream fill, amber title (documentation
  only — not for app chrome).
- Footer: grey band, breadcrumb, 4-column link directory, **Light / Dark / Auto** segmented
  appearance switch, legal row, language picker.

## 5. Colour-coded section imagery (HIG)
Every page tile/thumbnail uses a **gradient in the colour of its HIG section** with a darker
duotone SF Symbol in the middle — a navigation aid that needs no labels:
| Section | Tile colour |
|---|---|
| Getting started | green (teal → lime) |
| Foundations | yellow (lemon → gold) |
| Patterns | orange (amber → coral) |
| Inputs | purple/magenta (pink → violet) |
| Technologies | blue (azure → sky) |
| Components | (to be observed) |
Web lesson: in large docs/marketing sites, one hue per section, used only in imagery (never in
the UI chrome), gives instant orientation while the interface stays neutral.
