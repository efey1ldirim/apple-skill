# iMessage apps and stickers
Source: https://developer.apple.com/design/human-interface-guidelines/imessage-apps-and-stickers · Section: Technologies · Supported platforms: **iOS and iPadOS** (page data; the platform text: "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, visionOS, or watchOS**"; the intro also mentions **FaceTime effects**) · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (74 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **3 sticker sizes**, **500 KB** file limit, **4 sticker formats**, **7 icon size rows**, **@3x dimensions 300 / 408 / 618 px**, **1024 × 1024 px** App Store icon.

## In one line
An **iMessage app** helps people **share content, collaborate and play games inside a conversation**; a **sticker pack** gives them **images to decorate it**. Both also appear **in effects in Messages and FaceTime**, and can be a **standalone app or an extension** of an iOS/iPadOS app. **Offer one primary experience per iMessage app (split extra functionality into separate apps), surface content from your app (shopping list, itinerary, simple group decisions), put the essentials in the compact view (reserve more for the expanded view), let people edit text only in the expanded view (the compact view is about the keyboard's height), and make stickers expressive, inclusive and versatile (legible on any background and when rotated or scaled; transparency helps) with a localised alternative description for VoiceOver.** **Specs:** **square-cornered icons in 7 sizes (the system masks the corners)**, **one sticker size per pack (small 300, regular 408, large 618 px @3x)**, **files ≤ 500 KB**, **PNG/APNG/GIF/JPEG with different transparency and animation support**. On the web: **no iMessage app surface**; the sticker and share-sheet ideas map to **emoji/sticker pickers, GIF/APNG/animated WebP assets, alt text, Web Share and compact-vs-expanded panels**.

## Rules

### Framing (intro)
- An **iMessage app** helps people **share content, collaborate and play games with others in a conversation**; **stickers are images that decorate a conversation**.
- **An iMessage app or sticker pack is available in the context of a Messages conversation and also in effects in Messages and FaceTime.** You can create it **as a standalone app or as an app extension** in an iOS/iPadOS app (developer: Messages; "Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime").

### Best practices
- **should** **Prefer one primary experience in your iMessage app.** People are **in a conversational flow** when they open it, so **functionality or content must be easy to understand and immediately available.** For **several functions or different content collections, create a separate iMessage app for each.**
- **may** **Surface content from your iOS or iPadOS app**: **app-specific information people might share (a shopping list, a trip itinerary)**, or **a simple collaborative task (deciding where to eat or which movie to watch).**
- **should** **Present essential features in the compact view.** People see the app in **a compact view below the message transcript** or **expand it to fill most of the window**: **the most frequently used items belong in the compact view; extra content and features go to the expanded view.**
- **should** **In general, let people edit text only in the expanded view.** **The compact view occupies roughly the same space as the keyboard**; **show the keyboard in the expanded view so the app's content stays visible while editing.**
- **should** **Create stickers that are expressive, inclusive and versatile.** **Rich static images or short animations**, **each legible against many backgrounds and when rotated or scaled**; **transparency helps integrate a sticker with text, photos and other stickers.**
- **must** **Provide a localised alternative description for every sticker**: **VoiceOver speaks it to help people use the pack.**

### Specifications

#### Icon sizes
- The icon **appears in Messages, the App Store, notifications and Settings**; **after installation it also appears in the Messages app drawer.**
- **You supply a square-cornered icon for each extension; the system applies a mask that rounds the corners.** Create it in these sizes:
| Usage | @2x (px) | @3x (px) |
|---|---|---|
| Messages, notifications | **148 × 110** | — |
| | **143 × 100** | — |
| | **120 × 90** | **180 × 135** |
| | **64 × 48** | **96 × 72** |
| | **54 × 40** | **81 × 60** |
| Settings | **58 × 58** | **87 × 87** |
| App Store | **1024 × 1024** | **1024 × 1024** |

#### Sticker sizes
- Messages supports **small, regular and large** stickers. **Pick the size that suits your content and prepare all stickers at that size; don't mix sizes in one pack.** **Messages shows stickers in a grid organised differently per size.** (Illustrations, bottom half of an iPhone screen: **small: eight stickers visible plus a partial row of four, three rows**; **regular: six stickers in two rows of three**; **large: two stickers fully visible plus a partial row of two**.)
- **Create sticker images at these @3x dimensions** (the system **downscales for @2x and @1x at runtime if needed**; developer: `MSStickerSize`):
| Sticker size | @3x dimensions (px) |
|---|---|
| Small | **300 × 300** |
| Regular | **408 × 408** |
| Large | **618 × 618** |
- **must** **A sticker file must be 500 KB or smaller.** Formats:
| Format | Transparency | Animation |
|---|---|---|
| PNG | 8-bit | No |
| APNG | 8-bit | Yes |
| GIF | single-colour | Yes |
| JPEG | No | No |

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Availability | Messages conversations + effects in Messages and FaceTime; standalone app or app extension |
| Views | **compact** (below the transcript, about the keyboard's height) · **expanded** (most of the window) |
| Editing text | expanded view only |
| Icon | square corners (system rounds them); Messages/notifications: 148×110, 143×100, 120×90 (@3x 180×135), 64×48 (@3x 96×72), 54×40 (@3x 81×60); Settings 58×58 (@3x 87×87); App Store 1024×1024 |
| Sticker sizes (@3x) | **small 300×300 · regular 408×408 · large 618×618**; one size per pack |
| Grid on iPhone | small ≈ 8 visible + partial row (3 rows) · regular 6 (2 rows of 3) · large 2 + partial row |
| Sticker file | **≤ 500 KB** |
| Formats | PNG (8-bit alpha, static) · APNG (8-bit alpha, animated) · GIF (single-colour transparency, animated) · JPEG (no transparency, static) |
| Accessibility | localised alternative description for every sticker (VoiceOver) |
| Developer docs | **Messages** · "Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime" · `MSStickerSize` |
| Video (link only, not watched) | Express Yourself! (WWDC17 820) |
| Apple's Related list | iMessage Apps and Stickers (developer page) |
| Change log | May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of the **iMessage App Store icon** over grid lines, **tinted blue** (alt).
- **Sticker-size illustrations (catalog `imessage-apps-and-stickers-01`, captions "Small", "Regular", "Large"; light and dark variants on the page):** **the bottom half of an iPhone screen showing a grid of stickers**: **small = 8 visible + a partial row of 4 (three rows)**; **regular = 6 (two rows of three)**; **large = 2 fully visible + a partial row of 2**.
- **No other images, videos or callouts**; the tables are text (icon sizes, sticker sizes, formats).
- **Mismatches / notes:**
  1. **The abstract says an iMessage app can help people "play games"**, but **the page gives no game-specific rules**.
  2. **The icon table's first two rows have no @3x value ("—")**, and the **"Messages, notifications" rows are listed without individual labels** (the last four rows continue the same usage).
  3. **"Apple's icon sizes for stickers" are widescreen (148×110, 143×100)**, **unlike a normal app icon**; **the App Store icon (1024²) is square.**
  4. **The rule "don't mix sticker sizes in a pack"** is stated **without saying what happens if you do.**
  5. **"GIF: single-colour transparency" vs "PNG: 8-bit"**: **GIF edges are hard (no soft alpha)**, so **animated stickers with soft edges should use APNG.**
  6. **The 500 KB limit is per file**, **not per pack**.
  7. **The page mentions FaceTime effects** but **gives no FaceTime-specific design rules.**
- **Catalog:** the script found **1 comparison** (the three sticker-size illustrations). **Not catalogued:** the hero. Catalog total **262** (was 261); the 261 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **imessage-apps-and-stickers-01** (neutral trio, light only): **Small / Regular / Large** sticker grids on an iPhone (rule: pick one size per pack). The script reports **1 comparison** for this page.

## Web translation
**Web pages can't build iMessage apps or sticker packs.** **What transfers:** **compact vs expanded panels for in-conversation tools, a focused single-purpose widget, and sticker/emoji picker assets** (image formats, sizes, transparency, alt text). Statements about formats and browsers are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| One primary experience per app | **A chat-embedded tool/widget does one thing** (a poll, a plan-picker, a location share); **split other features into separate widgets or pages.** |
| Surface content from your main app | **"Share to chat" actions** (**Web Share API `navigator.share({title, text, url, files})`**, **Web Share Target** for receiving), **deep links back to the full item**, **Open Graph previews** (`og:title/description/image`) so pasted links look good in Messages and other chat apps. |
| Essentials in the compact view; more in the expanded view | **A compact panel (bottom sheet, ~40–50 % height, CONV) with frequent items and an "Expand" affordance** (`sheets.md`, `split-views.md`); **expand to full height for detail, search and text entry.** |
| Edit text only in the expanded view | **When an input needs the on-screen keyboard, expand the panel first** (**`visualViewport` and `interactive-widget=resizes-content` handling**) so **content stays visible above the keyboard** (`virtual-keyboards.md`). |
| Stickers: expressive, inclusive, legible on any background, rotated or scaled | **Sticker/emoji packs as transparent images** (**PNG with alpha, animated WebP/APNG**), **legible on light and dark** (**white outline or shadow baked in**, test on `#000`, `#fff` and photos), **scalable (vector SVG for simple art)**, **diverse representation** (`inclusion.md`). |
| Localised alternative description per sticker | **`alt` text on every sticker image** (`<img alt="Thumbs up cat">`) **translated per locale**; **`aria-label` on picker buttons**; **search by description**. |
| Icon sizes | **PWA/app icons:** **`<link rel="apple-touch-icon" sizes="180x180">`, a 1024 px master, maskable 192/512 px manifest icons; square corners (the OS masks)**; **widescreen chat-extension icons don't exist on the web.** |
| One sticker size per pack; @3x source | **Author at the largest size and export consistent dimensions** (**e.g. 618 px for large, 408 regular, 300 small**), **serve `srcset` 1×/2×/3×**, **don't mix sizes in one grid**; **CSS grid with fixed cell sizes** (3 columns for regular, 4 for small, 2 for large is Apple's iPhone layout; **CONV**). |
| File ≤ 500 KB; formats | **Budget each sticker ≤ 500 KB (aim lower, e.g. ≤ 100–200 KB for animated, CONV)**; **choose format by need:** **PNG/WebP lossless (alpha), APNG or animated WebP (alpha + animation), GIF only when unavoidable (1-bit transparency)**, **JPEG only for opaque photos**; **lazy-load and cache**; **`prefers-reduced-motion` → show the first frame** for animated stickers. |
| Native-only | **Messages framework (`MSMessagesAppViewController`, `MSSticker`, `MSStickerSize`), the app drawer, effects in Messages/FaceTime, iMessage app extensions** are native iOS/iPadOS; **the web has Web Share/Share Target, Open Graph, and your own sticker picker UI.** |

Field-note cross-links:
- `field-notes/*`: **no chat-extension or sticker recipe**; nothing conflicts.
- `hig/patterns/collaboration-and-sharing.md` (✓): **sharing and collaboration in conversations**; `hig/components/menus/activity-views.md` (✓): **the share sheet**; `hig/components/presentation/sheets.md` (✓): **compact and expanded sheet sizes**; `hig/components/selection-and-input/virtual-keyboards.md` (✓): **keyboard behaviour**; `hig/foundations/accessibility.md` (✓) and `inclusion.md` (✓): **alt descriptions, diverse stickers**; `hig/foundations/images.md` (✓): **image formats, scale factors, transparency**; `hig/foundations/app-icons.md` (✓): **icon design and masks**; `hig/technologies/game-center.md` (✓): **multiplayer in-conversation games (Game Center invites)**; `hig/patterns/playing-haptics.md` (✓) and `hig/foundations/motion.md` (✓): **animated sticker motion and reduced motion**.
- Not yet ingested (linked from this page): none in the HIG (the iMessage developer page is external).

## Checklist
- [ ] **The tool/widget does one thing**; **extra features are separate.**
- [ ] **Frequent items appear in the compact panel**; **text entry expands the panel first** so **content stays visible above the keyboard.**
- [ ] **Stickers are transparent, legible on light, dark and photo backgrounds, scale and rotate well, and share one size per pack.**
- [ ] **Every sticker has translated alt text (and a searchable description).**
- [ ] **Each sticker file is ≤ 500 KB** and **uses the right format** (PNG/WebP alpha, APNG/animated WebP for motion; GIF only if needed).
- [ ] **Animated stickers respect `prefers-reduced-motion`.**
- [ ] **Shared content has a deep link and a good Open Graph preview.**
- [ ] **Icons: 180 px touch icon + maskable manifest icons; square source art.**

## Related
- Ingested: Collaboration and sharing (✓), Activity views (✓), Sheets (✓), Virtual keyboards (✓), Accessibility (✓), Inclusion (✓), Images (✓), App icons (✓), Game Center (✓), Playing haptics (✓), Motion (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Messages · "Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime". External: iMessage Apps and Stickers (developer site).
- Videos: Express Yourself! (WWDC17 820).
