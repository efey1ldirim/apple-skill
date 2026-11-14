# Apple's product pages (apple.com) — architecture and measured sections

Measured 2026-11 on apple.com/macbook-pro (section-highlights, media-card-set,
aap-media-card-gallery CSS), apple.com/macbook-pro/proled-xdr-display ("Get the highlights.",
"Everything to see here."), the MacBook Pro battery section, apple.com/safari (Safari 26 chrome),
and the iPhone / AirPods product pages (structure only). Rebuilt twice for production marketing
pages (one dark-only product page, one theme-aware homepage) and approved by the product owner.

Tags: **APPLE-WEB** = read from Apple's own CSS or measured on the live page · **FN** = our
decision, validated in production · **REJ** = built, shown, rejected (see `../field-notes/anti-patterns.md`).

Read with: `site-patterns.md` (global nav, cards, docs), `../field-notes/landing-and-motion.md`
(what to put in each section, rejected ideas, traps), `../hig/foundations/motion.md`.

---

## 1. Page architecture
Every section answers **one** question, in this order (FN, mirrors Apple's product pages):

| # | Section | Question it answers | Apple model |
|---|---|---|---|
| 1 | Hero | What is it? | Product name + one line + the one object, nothing else |
| 2 | Get the highlights | What can it do? | Horizontal media-card gallery with an autoplay control bar |
| 3 | Closer look | How does it work in detail? | "Everything to see here." / "Take a closer look": pill explorer over one big product stage |
| 4 | Figures row (optional) | How much / how many? | Big thin numbers + short grey labels; **only numbers you can verify** |
| 5 | Trust / privacy | Is it safe? | One headline, one real product artefact, a tile grid of verified claims |
| 6 | Real-life photo | Where does it fit in my life? | Battery section: headline + paragraph, edge-to-edge photo, overlapping stat card |
| 7 | Compare / buy | How much does it cost? | Plan cards in the highlights card grammar |
| 8 | Footer | — | Dark product footer, 12 px everything |

- One column grid for content: **980 px** text column (`max(22px, (100vw − 980px)/2)` gutter);
  galleries and stages use the wider **1260 px** grid (`max(6.25vw, (100vw − 1260px)/2)`). APPLE-WEB
- Breakpoints Apple uses on these pages: **1068 px** (medium) and **734 px** (small). APPLE-WEB
- Dark product pages: page `#000`, app/product surface `#131314`, card `#1C1C1E`, text `#F5F5F7`,
  secondary `#86868B`, link on dark `#2997FF`. One filled colour (the product's accent) on the
  primary button only. FN (values from the product's own dark theme + Apple's web neutrals)
- A product page with one correct look may force dark regardless of system theme; a homepage
  should follow the theme (doubles the colour work — decide up front). FN

## 2. Product-local navigation bar
- Height **52 px** (Apple's product local nav), aligned to the 980 px column, ≥ 22 px edge +
  safe-area inset. APPLE-WEB
- Left: product name only. Right: 2–3 section links + **one** small filled pill (product accent).
  Buttons one height (36 px visual, 44 px hit area via `::after`); 12 px between (8 on phone);
  spacing on a 4 pt rhythm. FN
- Transparent over the hero; on scroll switches to frosted glass + hairline. Put
  `backdrop-filter` on a **separate background layer**, never on the bar itself — the bar would
  become the containing block of `position: fixed` children and a full-screen phone menu would be
  squeezed into the 52 px bar. FN
- Current section: a thin line under its link. On phone the links fold into a chevron menu; the
  filled pill stays outside. FN

## 3. "Get the highlights." gallery (media-card gallery + All Access Pass bar)
All values APPLE-WEB unless tagged.

### Section and cards
| Part | Desktop | ≤ 1068 | ≤ 734 |
|---|---|---|---|
| Section padding | 144 top / 224 bottom | 120 / 200 | 80 / 168 |
| Title | 48/52 px, 600, −0.003em; 48 px below | 40 px, lh 1.1, 0 | 32 px, lh 1.125, +0.004em; 32 px below |
| "Watch the film ›"-type link | 17 px / 1.235, 400, −0.022em, link blue, right of title on its baseline (`align-items: last baseline`) | same | stacks under title, 16 px gap |
| Card width | `min(87.5vw, 1260px)` | same | `max(87.5vw, 280px) − 20px` |
| Card height | 612 | 576 | 480 |
| Radius / gap | 28 / 20 | 28 / 20 | 18 (Apple) · 28 kept (FN) / 20 |
| Snap | centre | centre | start, `scroll-padding-inline-start` = gutter |

- Card has **no fill** on dark: the page black shows through; a **1 px `#424245` border** drawn
  by `::after` (inset 0, radius inherit, `pointer-events: none`, above content) separates it.
- Caption: 28/32 px, 600, +0.007em, `rgba(255,255,255,.92)`, inset 48 px (32 on phone). Pins:
  **top-centre** (584 px wide), **centre-left** or **top-right** (400 px wide; 320 at ≤ 1068).
  On phone every caption is top-centre, 17 px / 1.235 / −0.022em.
- Media area fills what the caption leaves (top-centre: padding `150 56 56`; side pins: the
  caption column + 40 px gap is padded away).
- Reveal: title, link, gallery rise in sequence — `opacity .8s` + `translateY(30px)→0` over 1 s,
  delays 0 / 0.1 / 0.2 s, ease `cubic-bezier(.28,.11,.32,1)`.

### Motion model — everything from one number
`pos` = `scrollLeft / card step` (Apple: `--autoplay-progress`). For card `i`, `o = pos − i`:
- Caption shift `x = o · 3 · 120px · −0.45` (= −162 px per card of distance).
- Caption opacity `(1 − |o|)³`.
- Dot width `8 + (48 − 8) · max(0, 1 − |i − pos|)` → the active dot grows into a 48 px pill (32 on phone).
- Card change = a **1 s smooth `scrollLeft` transition**; values are written straight to the DOM
  each frame (no framework re-render). Measure the step from layout once — `offsetLeft` rounds to
  integers and a fractional vw card width drifts 1 px per card (5 px by the last card). FN

### Control bar ("All Access Pass")
- 56 px tall, `rgba(42,42,45,.72)` + `blur(7px)`, radius 28; light-theme variant
  `rgb(232 232 237 / .7)` (FN). `position: sticky; bottom: 32px` (20 on phone) inside the section.
- Opens when **60 %** of the gallery is visible: a 56 px disc grows from a point (0.6 s), the
  background un-clips from the centre (`clip-path` 0.45 s, after 0.3 s), dots fade/scale in at
  **0.74 s**, play button at **0.94 s**.
- Dots 8 px, 16 px apart (8 px margins), `rgba(255,255,255,.36)`, hover `.48`; hit area 24 px via
  `::before`. Active dot fill: a rounded 15 % head enters from the left and grows linearly to
  115 % over the card's duration (`#F5F5F7`); the fill's `animationend` advances to the next card.
- Play/pause: 56 px circle beside the dots (16 px gap; 12 on phone), hover
  `rgba(73,73,76,.73)`, active `rgba(57,57,60,.74)`. After the last card it becomes **Replay**.
- Keep its focus ring circular (`border-radius: 50%; outline-offset: 3px`) — a global
  focus-visible radius turns it square. FN

### Scene playback rule (FN, matches Apple's start-frame behaviour)
- A card's un-animated style **is its final frame**; keyframes only describe the start, with
  `animation-fill-mode: backwards` holding frame 0 during delays.
- Inactive cards: `animation-play-state: paused` → they wait on their **first** frame (Apple: start-frame).
- Active card paused: frozen where it is. The card scrolling **out** keeps its frame during the
  slide (same React `key`, paused) and only resets after it is off-screen — resetting at once makes
  every card jump to its first second mid-slide (REJ).
- Active card restarts by re-mounting with a new `key`.
- Reduced motion: no autoplay, every card on its final frame, captions static, instant card change.
- Apple disables manual scrolling on desktop; we enable it on purpose (trackpad/wheel scroll snaps,
  mouse drag, finger swipe; a drag must not end in a click that opens a card). FN — the owner asked
  for it.

### What goes in a card (FN)
- One feature per card, shown as a **concrete output** playing out (a question typed then
  answered with a small chart; four document types fanning out in their real type colours; a
  notification arriving; a fact said once and reused weeks later; a cited answer).
- Show only what the product really does today, for every customer — never a plan-gated feature as
  if universal, never a notification channel the product doesn't have.
- Scenes 6–8 s each. Ordering matters: lead with the card that speaks to every audience.
- First card = the broadest promise; zoom into the device when the UI detail is too small to read
  (zoom right after the first meaningful event, not at the end).

## 4. "Everything to see here." — closer-look explorer
APPLE-WEB unless tagged.
- **Centred lockup** (max 840 px): product-name kicker **21 px / 600 / +0.011em, sentence case**
  (never uppercase) → title `clamp(40px, 4.45vw, 64px)` / 1.0625 / 600 / −0.009em, 18 px below →
  copy `clamp(17px, 1.46vw, 21px)` / 1.381 / +0.011em, `#6E6E73`, 24 px below.
- Reveal: items rise 32 px, `opacity 1s` + `transform 1.2s` spring, stagger 0.08 s; the stage follows at 0.24 s.
- **Stage**: 82 px below, **edge-to-edge, no radius**, 1 px `#333336` hairline top and bottom;
  ~760 px tall on a 900 px viewport → `clamp(560px, 100vh − 140px, 860px)`. Product sits at
  ~58 % of the width (the space right of the pills).
- **Pills** 56 px, `rgba(42,42,45,.72)`, left edge `max(80px, (100vw − 1260px)/2)` (90 px at
  1440). A pill opens in place into a **423 px** card (lead sentence + body); 36 px prev/next
  arrows in the left gutter; 44 px close at top-right. Expand with `grid-template-rows: 0fr→1fr`
  plus a width transition. FN
- Choosing a pill moves the **camera** to that feature: `transform-origin: zx zy;
  transform: translate(centre − z) scale(s)`, 1 s, ease `(.28,.11,.32,1)`; scale 1.25–1.5. Pressing
  the same pill again pulls back to the whole product. Use a **real screenshot of the product**
  per state (captured from the real UI at @3x), not a redrawn mock. FN
- Pills over a zoomed product must be opaque enough that zoomed text doesn't show through; fade
  the left edge of the stage into the section colour. FN
- Phone (≤ 734): stage first, pills below as a horizontal scroll row (so the zoom stays visible
  while reading); open card 310 px, 14 px text, arrows either side, close 36 px.

## 5. Real-life photo section (the battery section pattern)
- **Head**: two columns `1.15fr 1fr`, 40 px gap — big headline left
  (`clamp(36px, 4.8vw, 64px)` / 1.06 / 600 / −0.032em, `text-wrap: balance`), secondary-colour
  paragraph right (`clamp(19px, 1.7vw, 21px)` / 1.42 / −0.014em). Paragraph delayed 0.15 s. APPLE-WEB layout, FN values
- **Photo**: edge-to-edge, pulled **up under the head** (negative top margin up to 150 px), 4:3
  frame (3:2 desktop crop, 4:5 phone crop), max 1100 px tall. Mask fades top and bottom to the page
  colour (`transparent 0 → #000 12% … 80% → transparent`); a top 45 % gradient
  (`#000 → rgba(0,0,0,.75) 40% → transparent`) guarantees the headline reads on any photo.
  Fades in over 1.4 s; scroll settles it from `scale(1.08)` to 1.
- **Stat card** overlapping the faded bottom: thin grey hairline border, two columns, each a small
  line over a big line (Apple's "13 more hours / 50% battery"). Use a **real** figure — e.g. trial
  length — never an invented one. A big green word is fine as the one accent (system green).
- **The photo must tell the headline literally.** Apple's night-drive photo says "anywhere, for
  hours". Pick a scene that says your headline, with: dark top-left (headline), dark bottom third
  (card), subject in the right half. Details in `../field-notes/landing-and-motion.md` § Photography.

## 6. Plans / compare
- Same card grammar as the highlights: no fill, 1 px `#424245`, radius 28. The recommended plan
  differs **only** by the product-surface fill and the single filled button. FN
- Billing-period switch = Apple's segmented control on dark: a dark pill track, selected segment
  one tone lighter. FN

## 7. Dark product footer
- Surface `#131314`, one hairline on top; **every** text 12 px: column headings bold and light,
  links secondary `#A1A1A6` (≈ 7:1 on `#131314`, the dark small-text target). FN
- Legal links in a row separated by vertical bars; location line on top. APPLE-WEB
- Targets 28 px for pointer, 44 px for touch (HIG). Leave bottom room for any floating chat button. FN

## 8. Light marketing variant (theme-aware homepage) — FN
- Sections alternate `#F5F5F7` / `#FFFFFF` (dark `#08080A` / `#000`); text `#1D1D1F`, secondary
  `#6E6E73` (dark: `#F5F5F7`, `rgb(235 235 245 / .6)`) — never mixed with opacity greys.
- Highlights gallery on a light page: section and title follow the theme, the cards stay a **black
  studio** in both themes (devices on black with long soft highlights, like Apple's black product cards).
- **Bento = keynote slide**: white section panel, uniform grey cards (`#F0F0F3`), equal 12 px
  gaps, **no border, no shadow** — tone and spacing alone separate them. One large hero card may
  carry the brand artwork (theme-independent, like the keynote's "iOS" tile); colour lives only there
  and in small illustrations.
- Marketing card: fill opposite to the section, no border/shadow, centred text, whole card is the
  link, doesn't lift on hover (see `site-patterns.md` § 3). "More" link blue + "›", underline on hover only.
- Black/white pill hover: `filter: brightness()` does nothing on black — shift the fill one tone
  (`#333336` light, `#D1D1D6` dark); press = scale.
- Product-page buy bar: a fixed glass capsule anchored at the bottom with one blue button.

## 9. Device stages (drawn, not photographed) — FN
- Never use Apple's device images (licence) — draw/model them. Use Apple's published
  tech-spec dimensions in **mm** (e.g. iPhone 17 Pro 150.0 × 71.9 × 8.75, 6.3″ 2622×1206;
  MacBook Pro 14″ 312.6 × 221.2 × 15.5, 3024×1964; Apple Watch 46 mm: 39 × 46 × 9.7, 208 × 248 pt).
- Keep hardware current: Dynamic Island at its real size (≈ 126 pt on iPhone 17 Pro), the current
  battery glyph, the logo on the lid. Owners notice outdated details.
- Studio lighting: near-black room, wide soft top box, thin strip lights on both sides, low rim
  light → long soft highlights on metal and glass. Corners are superellipses (continuous corner,
  n ≈ 2.6), not circular arcs.
- Draw on-screen UI **1:1 with the real UI**, including OS chrome (Safari 26: 52 pt toolbar, 36 pt
  glass capsules — sidebar + ⌄, ‹ ›, privacy shield, centred address field, share/+/tabs).
  Phone frames use only Apple neutrals (`#000`, `#3A3A3C`, `#48484A`).
- One WebGL context on screen; pause scenes off-screen; measure frame rate in a real browser on a
  real GPU (headless screenshots look fine at 5 fps). Card slides and device motion must hit 60 fps —
  "looks like 30 fps" was a rejection.

## 10. Motion constants used on these pages
| Use | Value | Tag |
|---|---|---|
| Page reveals, card change, camera zoom | `cubic-bezier(.28,.11,.32,1)` | APPLE-WEB |
| Text settling into place (slight overshoot) | `cubic-bezier(.22,1,.36,1)` | FN |
| Sheets, sliding selection, bubbles growing in | `cubic-bezier(.32,.72,0,1)` | FN |
| Drawing an underline / pen stroke | symmetric `cubic-bezier(.65,0,.35,1)` — the sheet curve finishes 85 % in 0.3 s and makes a two-line stroke snap then crawl | FN |
| Physical settle (3D objects) | `1 − e^(−6.5t)·cos(7.5t)` | FN |
| Section reveal | opacity 0.8–1 s + rise 28–32 px over 1–1.2 s, stagger 80–150 ms | APPLE-WEB |
| Rotating headline phrase | outgoing slides up and blurs out; incoming rises and sharpens; entrance slightly longer than exit | FN |
