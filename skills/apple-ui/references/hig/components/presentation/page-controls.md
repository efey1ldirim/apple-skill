# Page controls
Source: https://developer.apple.com/design/human-interface-guidelines/page-controls · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, tvOS, visionOS, watchOS** ("Not supported in macOS"; the Mac icon is dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 21, 2023** (visionOS guidance; earlier row: June 5, 2023 watchOS guidance). One DocC fetch, read in full. 7 screenshots (light-mode page, hero → the page footer) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page, including the change log. **Read from the fetch only:** the dark variants of the images (the two watchOS illustrations have none). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **two numbers** (about **10** dots at most; **2** indicator image types at most) plus the size ratios in the 9-dot illustration's alt text.

## In one line
A page control is a **row of small indicator dots, one per page of a flat, ordered list**, with a **solid dot for the current page**. Use it only for **sequential peer pages**, **centred near the bottom**, keep it to **about 10 dots** (else use a grid or another arrangement), **let the system colour the dots**, use **at most two indicator image types**, **don't animate during scrubbing**, and pick a **background style** (automatic / prominent / minimal) that matches how central the control is.

## Rules

### Framing (intro)
- A page control shows **a row of indicator images**, each standing for **a page in a flat list**; the scrolling row **helps people navigate the list** to the page they want.
- It **handles any number of pages**, so it suits **user-created lists**.
- By default it shows **small dots**, **a solid dot marks the current page**; dots are **always equidistant** and are **clipped when too many fit the window**.

### Best practices
- **must** **Use page controls for movement between an ordered list of pages.** They **don't represent hierarchical or nonsequential relationships**; for more complex navigation use a **sidebar or split view**.
- **should** **Centre the page control at the bottom of the view or window**: horizontally centred and **near the bottom** so people always know where it is.
- **should** **Don't show too many dots** even though any number works: **more than about 10** are **hard to count at a glance**. With **more than 10 peer pages**, use another arrangement such as a **grid** that lets people navigate **in any order**.

### Customizing indicators
- By default all indicators use the **system dot**; a control can also show a **unique image** for a specific page (Weather uses the **`location.fill`** symbol for the **current location's page**).
- **may** **Supply a custom default image** for all indicators and/or a **different image for a specific page** if it improves the app or game (`preferredIndicatorImage`, `setIndicatorImage(_:forPage:)`).
- **should** **Keep custom indicator images simple and clear**: **no complex shapes, negative space, text or inner lines** (they turn muddy and unreadable at tiny sizes); consider **simple SF Symbols** or your own icons (see *Icons*).
- **should** **Customise the default image only when it strengthens the control's meaning**: e.g. every page lists bookmarks → `bookmark.fill` as the default indicator.
- **should** **Use no more than two different indicator images.** One special page (Weather's current location) can get its own image so it is **easy to find**; several unique images force people to **memorise meanings** and look **messy**, even if each is clear. ✗ several different indicators = busy and hard to use; ✓ only two = organised and consistent (catalog `page-controls-01`).
- **should** **Don't colour the indicator images.** Custom colours can **reduce the contrast that separates the current-page indicator** and hurt visibility; let **the system colour** them for different contexts.

### Platform considerations
- **macOS:** not supported.

#### iOS, iPadOS
- A page control **adjusts indicator appearance to convey more**: the **current page's indicator is highlighted** so people can **estimate its relative position**; when **more indicators than fit** exist, the control **shrinks indicators at both sides** to suggest **more pages**. *(Illustration alt text: 9 dots; the **centre 5** at default size, the **2nd and 8th about half** size, the **1st and 9th about a quarter**; the centre dot is filled.)*
- **Interaction: tap or scrub.** To **scrub**, touch the control and **drag left or right**. **Tapping the leading or trailing side of the current-page indicator** reveals the **next or previous page**; in **iPadOS** people can also **use the pointer to target a specific indicator**. **Scrubbing** opens pages **in sequence**, and scrubbing **past either edge** jumps to the **first or last page**.
- **Developer note:** in the API, **tapping is a discrete interaction** and **scrubbing a continuous one** (`UIPageControl.InteractionState`).
- **should** **Avoid animating page transitions during scrubbing.** People scrub **very fast**; animating every transition **makes the app lag and flash**. **Animate scrolling only for tapping.**
- A page control may have a **translucent rounded-rectangle background** for contrast. **Background styles:**
  - **Automatic**: background **only while people interact**; use when the control **isn't the primary navigation element**.
  - **Prominent**: **always shown**; use **only when it is the primary navigation control** on the screen.
  - **Minimal**: **never shown**; use when you only **show the current position** and need **no visual feedback while scrubbing**. (`backgroundStyle`)
- **should** **Don't support the scrubber with the minimal style**: there is **no visual feedback while scrubbing**; to allow scrubbing use **automatic or prominent**.

#### tvOS
- **should** **Use page controls on collections of full-screen pages**: designed for a **full-screen environment** where **content-rich pages are peers**; **extra controls make it hard to keep focus** while moving between pages.

#### visionOS
- Page controls **represent the available pages and indicate the current one**, but **people don't interact with them**.

#### watchOS
- Page controls can sit **at the bottom of the screen for horizontal pagination**, or **next to the Digital Crown for a vertical tab view**. In vertical tab views the indicator shows **where you are in the navigation, both within the current page and within the set of pages**; it **transitions between scrolling a page's content and moving to other pages**.
- Illustrations: **vertical** (indicator by the Crown, **fourth tab selected**) and **horizontal** (indicator at the bottom, **second tab selected**).
- **should** **Use vertical pagination to split multiple views into distinct, purposeful pages**: a **clear purpose per page**, scrolled with the **Digital Crown**; more effective than **horizontal pagination** or **deep hierarchical navigation** on watchOS.
- **should** **Consider limiting each page's content to one screen height**: gives each page a **clear, distinct purpose** and a **more glanceable** design; use **variable-height pages judiciously** and, if possible, only **after fixed-height pages**.

## Specs & values

| Item | Value |
|---|---|
| Purpose | move between **ordered, flat, peer** pages; not hierarchy |
| Position | **centred horizontally, near the bottom** of the view/window |
| Dot count | **~10 max** (more → grid/other arrangement) |
| Indicator spacing | always **equidistant**; clipped if they don't fit |
| Current page | solid/highlighted indicator |
| Indicator images | system dot by default; **≤ 2 image types** (e.g. `location.fill` for one special page + dots) |
| Custom image rules | simple; no negative space, text, inner lines; **don't colour** |
| iOS 9-dot example (alt text) | centre **5** at full size, 2nd/8th **≈ ½**, 1st/9th **≈ ¼**; centre filled |
| iOS/iPadOS interaction | tap left/right of current = prev/next · **iPadOS pointer**: target a specific dot · **scrub** = drag; past edge = first/last page |
| Animation | **animate only for tap**, not for scrubbing |
| Background styles | **Automatic** (on interaction) · **Prominent** (always; primary nav only) · **Minimal** (never; no scrubber) |
| tvOS | full-screen peer pages; no other controls |
| visionOS | non-interactive indicator |
| watchOS | bottom (horizontal) or beside Digital Crown (vertical); each page ≤ 1 screen height where possible |
| Not supported | macOS |
| Developer docs | SwiftUI `PageTabViewStyle` · UIKit `UIPageControl` (`preferredIndicatorImage`, `setIndicatorImage(_:forPage:)`, `backgroundStyle`, `InteractionState`) |
| Related HIG pages | Scroll views (not yet ingested) · Tab views ✓ · Icons ✓ · SF Symbols ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **large pale-pink rounded panel** (a page) and, below it, a **pale capsule holding ten dots**: the dots **grow toward the centre** (small at both ends, larger in the middle) and **the sixth is solid black** (current); a **vertical double-headed arrow** spans the **panel's height** and a **vertical bracket** at the right marks the **gap between panel and control**: the control sits **below the content, near the bottom edge** and is **centred** **(from screenshot)**.
- **iOS illustration:** a **grey capsule** with **9 dots**: the **fifth is dark/filled**, the others grey; the **outer dots are visibly smaller**, matching the alt text **(from screenshot)**.
- **Weather ✗/✓ (catalog `page-controls-01`, light):** a phone's bottom edge with a **round map button** at the left, the **page-control capsule** in the middle and a **round list button** at the right. **✗:** the capsule holds a **mix of different weather icons** (a location arrow, a black sun, a faded sun, a cloud, a rain cloud, a cloud with sun, another sun) in different tones: **busy, hard to tell which is current**. **✓:** **one location arrow at the leading end** followed by **plain dots**, the **second element a black dot (current)** and the rest grey. The ✗ and ✓ badges and captions ("Using several different indicators can make a page control look busy and difficult to use." / "Using only two different indicators looks well-organized and provides a consistent experience.") are page text.
- **Developer note callout:** grey outlined card about tapping (discrete) vs scrubbing (continuous) **(from screenshot)**.
- **watchOS illustrations (catalog `page-controls-02`, light only, black screens):** **vertical**: a **small column of dots on the right edge** (five dots, the **fourth an elongated white pill**, near the Digital Crown position); **horizontal**: **five dots at the bottom centre**, the **second white**, others grey. Captions "Vertical page control" / "Horizontal page control" are page text.
- **Page chrome (from screenshot):** platform strip with the **Mac icon dimmed**; TOC Page controls · Best practices · Customizing indicators · Platform considerations · Resources · Change log; side navigation shows **Presentation** open with **Page controls** in bold and **Panels** ringed in the focus outline; Resources: **Related Scroll views**; **Developer documentation**: `PageTabViewStyle` (SwiftUI), `UIPageControl` (UIKit); **Change log** two rows; the last screenshot shows the page footer.
- The page has **1 ✗/✓ pair** (`page-controls-01`) and **1 neutral pair** (`page-controls-02`); **no videos**. Fetch script run; existing catalog IDs unchanged, total 140. Nothing is measured.

## Web translation
Web equivalents: **carousel/pager dots** (onboarding, product galleries, story viewers, photo carousels, weather/locations swipers), **`scroll-snap` pagers**, and **vertical dot rails** on full-screen section sites. Apple has no macOS version, so on desktop the control usually gains **arrows or a counter** as extras.

| HIG rule | Web implementation |
|---|---|
| Ordered list of pages (not hierarchy) | Use only for **peer, sequential slides** (`role="group"` slides with `aria-roledescription="slide"` and `aria-label="3 of 9"`); hierarchy/section navigation belongs in a **sidebar/tabs** (`sidebars.md`, `tab-bars.md`, `tab-views.md`). |
| Solid dot = current | The current dot is **larger/solid** and the others **translucent**, with a **non-colour cue** too (size/fill) and `aria-current="true"`; ≥ **3:1** contrast for the dots vs their background (`color.md` non-text contrast). |
| Centred near the bottom | `position: absolute; inset-inline: 0; bottom: 12–16px; margin-inline: auto; width: fit-content` over the carousel (CONV values), inside safe areas (`env(safe-area-inset-bottom)`, Layout gate). |
| ≈ 10 dots max; else a grid | **≤ 10 dots**; for more, **window the dots**: keep **5 full-size, then ½ and ¼ size** at the edges as in Apple's 9-dot picture (CONV: scale 1 / .5 / .25), or show a **"3 / 24" counter**, or switch to a **grid/list** (`collections.md`). Dots stay **equidistant** (CSS grid `gap`, fixed pitch); the current dot **scrolls into the window** as pages change. |
| Buttons, not decorations | Each dot is a **`<button type="button">`** with `aria-label="Go to page 3"` (or a `role="tablist"` of `role="tab"` per the APG carousel pattern) and `aria-controls`; the **visible dot is small but the hit region is ≥ 24 px everywhere and ≥ 44 px on touch** (padding/pseudo-element; **Buttons GATE**), with visible **focus** and **press** states. |
| Tap = next/previous; pointer targets a dot | **Click/tap on the dot** goes to that page (pointer devices); on touch, **tapping the leading/trailing side of the current dot** goes to previous/next (CONV) plus optional **‹ ›** arrows at wider widths; **keyboard**: **←/→** (RTL flips), **Home/End**, Enter/Space on a dot. |
| Scrubbing | **Drag along the dots** (`pointerdown/move/up` with `setPointerCapture`) to move **through pages in sequence**; **dragging past the ends jumps to first/last**; show a **magnified bubble or a live preview** where the dots are tiny. |
| No animation while scrubbing | **Animate (`scroll-behavior: smooth`, transforms) only for taps and arrows**; while scrubbing set `behavior: "instant"`/`auto`, drop transitions, and **coalesce updates with `requestAnimationFrame`** so fast drags don't lag; honour **`prefers-reduced-motion`** everywhere. |
| Custom indicators: ≤ 2 kinds, simple, uncoloured | A **special page** (current location, "Featured") gets **one distinct glyph** (Lucide `navigation`/`locate`/`star`, **never SF Symbols artwork**, `icons.md`); everything else is the dot; icons are **single-shape, no text, no inner lines/negative space**; **don't tint them** with brand colours: use `currentColor` from the control's foreground token so contrast holds over any image. |
| Default indicator = a meaning-carrying symbol | Only if **every page shares a meaning** (all pages are bookmarks → a bookmark glyph for all); otherwise keep dots. |
| Background styles | **Automatic**: a translucent rounded-rectangle **backing appears on hover/focus/touch and fades out after ~2–3 s idle** (CONV); **Prominent**: always visible, only when it is **the primary navigation** (onboarding); **Minimal**: no backing, **position display only** and **then don't offer scrubbing** (dots aren't interactive; keep them `aria-hidden` and expose "Page 3 of 9" in text). Backings use **glass with a solid fallback** (`materials.md`). |
| tvOS: full-screen pages, no other controls | **10-foot UIs**: full-viewport pages with only the dots; **Left/Right on the D-pad** moves pages; don't add competing focusable controls (`focus` must not get stuck). |
| visionOS: indicates only | Non-interactive dots: `aria-hidden="true"` on the dots and a visible/hidden text status ("Page 2 of 5"); navigation happens by gaze/pinch on the content or other controls. |
| watchOS: vertical pagination with the Crown; one screen per page | **Small screens**: **vertical `scroll-snap-type: y mandatory`** pages of **100dvh** with a **dot rail at the inline-end edge**; the rail reflects **within-page and between-page position**; **keep each page one screen tall**, put **variable-height pages after fixed-height ones**. |
| Not supported on macOS | On desktop web still valid, but add **arrows, keyboard and pointer hover**; don't rely on swiping alone. |

Field-note cross-links:
- `hig/components/layout/tab-views.md` (✓) and `hig/components/navigation/tab-bars.md` (✓): **tabs and tab bars** are for **named sections**; page controls are for **anonymous, ordered pages**. `sidebars.md`/`split-views.md` (✓) for hierarchical or complex navigation.
- `hig/components/layout/collections.md` (✓): the **grid** alternative beyond ~10 pages.
- `hig/patterns/onboarding.md` (✓): onboarding pagers are the classic use (prominent style, Skip/Next also available).
- `hig/foundations/icons.md` and `sf-symbols.md` (✓): simple single-shape indicators, licence rules; `hig/components/menus/buttons.md` (✓ CRITICAL): hit regions and states; `hig/foundations/color.md` (✓ CRITICAL): non-text contrast, no reliance on colour.
- `hig/foundations/motion.md` (✓): reduced motion, no animation during rapid interaction; `hig/foundations/materials.md` (✓ CRITICAL): backing and fallback.
- Not yet ingested: **Scroll views**.
- No conflict with a field note.

## Checklist
- [ ] The pages are **ordered peers** (not hierarchy or unrelated sections); otherwise use tabs, a sidebar or a split view.
- [ ] Control is **centred near the bottom**, **≤ ~10 dots**, dots **equidistant**; longer lists use edge-shrunk dots, a counter or a grid.
- [ ] **Current page is solid/larger** with `aria-current` and a **non-colour** cue; dot contrast ≥ 3:1.
- [ ] **No more than two indicator image types**; custom glyphs are simple (no text/inner lines/negative space) and **not brand-tinted**.
- [ ] Each dot is a **real button** with an accessible name; hit region **≥ 24 px** (≥ **44 px** on touch); focus and press states visible.
- [ ] **Keyboard** works (←/→, Home/End); RTL flips; pointer can target a dot; touch can tap sides or scrub.
- [ ] **No smooth animation during scrubbing**, smooth only for taps; reduced motion respected.
- [ ] Background style matches the role: **automatic** normally, **prominent** only if it is the primary navigation, **minimal** only when there's **no scrubbing**.
- [ ] Small-screen vertical pagination: **one screen height per page**, variable-height pages last.

## Related
- Ingested: Tab views (✓), Tab bars (✓), Sidebars (✓), Split views (✓), Collections (✓), Onboarding (✓), Icons (✓), SF Symbols (✓), Motion (✓), Buttons (✓ CRITICAL), Color (✓ CRITICAL), Materials (✓ CRITICAL), Layout (✓ CRITICAL).
- Not yet ingested: **Scroll views**.
- Developer docs: SwiftUI `PageTabViewStyle`; UIKit `UIPageControl`.
