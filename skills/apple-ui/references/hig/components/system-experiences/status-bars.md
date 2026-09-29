# Status bars
Source: https://developer.apple.com/design/human-interface-guidelines/status-bars · Section: Components › System experiences · Supported platforms: **iOS, iPadOS** ("No additional considerations for iOS or iPadOS. Not supported in macOS, tvOS, visionOS, or watchOS"; the phone and tablet icons are dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **not shown: the page has no Change log** (the table of contents ends with Resources **(from screenshot)**), no Related list and no videos. One DocC fetch, read in full. **3 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text and image alt text line by line; they cover the **whole page**. Everything visible matches the fetch except the small notes under **Mismatches** below. **Read from the fetch only (not in screenshots):** the alt text of the three images and the dark variant of the hero. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **no numbers**; it is very short (3 best practices).

## In one line
The status bar runs along the **upper edge of the screen** and shows **the device's current state** (time, cellular carrier/signal, Wi-Fi, battery). Rules: its **background is transparent by default**, so **keep it readable and never imply that content behind it is interactive** (prefer a **scroll edge effect** with a blurred view behind it); **hide it only temporarily for full-screen media** (the Photos example) and **never permanently**; when hidden, **a simple, discoverable gesture (one tap) brings it back**. iOS and iPadOS only; on the web the nearest things are the PWA status-bar/safe-area area and the browser chrome.

## Rules

### Framing (intro)
- A status bar **appears along the upper edge of the screen** and shows **information about the device's current state** (examples on the page: **time, cellular carrier, battery level**; the hero also labels **Wi-Fi**).

### Best practices
- **should** **Don't let content obscure the status bar.** Its **background is transparent by default**, so content beneath shows through and **can make the bar hard to read**. If **controls are visible behind it**, people **may try to use them and can't**. **Keep the status bar readable** and **don't imply that content behind it is interactive.** **Prefer a scroll edge effect that puts a blurred view behind the status bar** (developer: `ScrollEdgeEffectStyle`, `UIScrollEdgeEffect`).
- **may** **Consider temporarily hiding the status bar for full-screen media**: it can be **distracting** when people focus on media; hiding it (and other UI) gives a more **immersive** experience. Example: the **Photos** app **hides the status bar and other interface elements when people browse full-screen photos**.
- **must not** **Hide the status bar permanently**: people would have to **leave the app to check the time or see whether they have Wi-Fi**. **Let people redisplay a hidden status bar with a simple, discoverable gesture**; example: in Photos **a single tap** shows it again.

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page **gives no sizes, spacings, durations or counts**.

| Item | Value |
|---|---|
| Location | upper edge of the screen |
| Content shown | time, cellular carrier/signal, Wi-Fi, battery (hero labels: time + place, cellular bars, Wi-Fi strength, battery %) |
| Default background | **transparent**: content shows through |
| Recommended treatment | scroll edge effect = **blurred view behind the bar** |
| Hiding | temporary only, for full-screen media; restore with **a simple, discoverable gesture (one tap)** |
| Developer APIs named | `ScrollEdgeEffectStyle`, `UIScrollEdgeEffect`, `UIStatusBarStyle`, `preferredStatusBarStyle` (UIKit) |
| Videos / Related / Change log | none on this page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a red-orange gradient card holding a **large, dark rendering of an iPhone status bar**: **"9:41"** at the left, then **four ascending cellular bars (all filled)**, a **Wi-Fi fan**, and a **full battery** at the right. Below, **short leader lines** point to monospaced callouts **(from screenshot)**: under the time **"9:41 AM PST / Cupertino"**; under the cellular bars **"Cellular / Full Bars"**; under the Wi-Fi fan **"Wi-fi / Full Strength"**; under the battery **"Battery / 100%"**. The alt text only says the status bar with labels showing the time and the cellular, Wi-Fi and battery levels; **the callout wording is only in the image**.
- **Page chrome (from screenshot):** TOC = Status bars · Best practices · Platform considerations · Resources (**no Change log**); side navigation shows **System experiences** open with **Status bars** ringed (browser focus, not page design); the platform strip has **iPhone and iPad** dark; the last screenshot ends into Apple's site footer.
- **Photos pair (screenshot 2):** two iPhone tops with the **same photo of a tree against a blue sky** (a spiky palm/Joshua-tree silhouette). **Visible:** the **Dynamic Island**, **"9:41"** at the left, **cellular, Wi-Fi and battery** at the right, and below it the app's own bar: a **round back chevron** at the left, the centred title **"February 17, 2025"** with **"1:46PM"** under it, and a round **"…"** button at the right **(from screenshot: the date text and the three controls are not in the alt)**. **Hidden:** the same photo with **only the Dynamic Island cut-out left**; the status items **and the app's controls are gone**. The hidden state removes **all chrome**, not only the system bar.
- **Mismatches / notes:**
  1. The hero callout reads **"Wi-fi"** (lowercase "f") while the page text writes **Wi-Fi**; a drawing convention of the callouts, not a rule.
  2. The hero adds **"9:41 AM PST" and "Cupertino"** under the time, which the intro text does not mention (the intro lists time, carrier, battery level); the hero also shows **Wi-Fi**, which the intro text does not list.
- **Catalog:** the fetch script reports **1** comparison (the neutral pair described below); catalog total **193** (was 192); existing IDs unchanged.

## Visual examples (catalog)
`visual-examples` gains **status-bars-01**: neutral pair **status bar visible vs hidden** in the Photos app (rule label "Consider temporarily hiding the status bar when displaying full-screen media"). Light variants only. Not in the catalog: the hero.

## Web translation
A web app doesn't own a status bar: on the phone it is **the OS bar above the page** (or above an **installed PWA**), on desktop there is none. What transfers is the **relationship between your content and the system bar**: **keep the strip readable**, **don't put interactive content under it**, **hide chrome only temporarily for media**, and **always give a simple way back**.

| HIG rule | Web implementation |
|---|---|
| The bar sits at the top edge and shows device state | Treat the area as **reserved**: `viewport-fit=cover` + **`padding-top: env(safe-area-inset-top)`** on fixed headers so your UI starts below it (Layout gate, `layout.md`); never hard-code a 20/44/47 px height. |
| Transparent by default; keep it readable | In an installed PWA / full-bleed page, choose **`<meta name="theme-color">`** (per scheme with `media`) and, on iOS home-screen apps, **`apple-mobile-web-app-status-bar-style`** (`default`, `black`, `black-translucent`) so the **icons keep contrast with what is behind them**; test on light and dark content (Color gate: **≥ 4.5:1** for the status glyphs you can't restyle, so choose the background around them). |
| Don't imply content behind is interactive | Content that scrolls **under** a translucent header must **look inactive there**: fade it (**mask-image gradient**) so **nothing tappable sits in the status strip**; put the **first control at least `env(safe-area-inset-top)` below** the edge; don't draw buttons or links **flush to the top edge** in full-bleed layouts. |
| Prefer a scroll edge effect (blurred view behind the bar) | Sticky top area with **`position: sticky; top: 0; backdrop-filter: blur(20px) saturate(1.2)`** and a **solid fallback** (`@supports not (backdrop-filter)` and Reduce Transparency/forced colours) so text over the bar stays legible (Materials GATE, `materials.md`); add a **soft gradient mask** so the blur fades in as content scrolls under it (CONV). |
| Temporarily hide for full-screen media | **Fullscreen API** (`element.requestFullscreen()`) or `display-mode: fullscreen` for photos/video, or **auto-hide your own header/toolbar** after a few seconds of no interaction (CONV: 2–3 s) while the OS bar stays as the platform decides; see `going-full-screen.md`, `playing-video.md`, `images.md`. |
| Never hide it permanently | Don't lock the app into permanent fullscreen/kiosk without a visible exit; on **mobile web the user can always swipe/tap the system bar**, but **your own persistent "time/connection/battery" cues** (a clock, an **offline banner via `navigator.onLine` and the `online`/`offline` events**, `navigator.getBattery()` where available) should **reappear** when you hide chrome (Apple's reason: people shouldn't have to leave the app to check time or Wi-Fi). |
| Simple, discoverable gesture to redisplay | **One tap** (or click/`Esc`) on the media **toggles the chrome back**; also a **visible affordance** on first use (a brief hint) and **keyboard access** (`Space`/`Enter` on the media, `aria-controls` on the toggle), never hover-only. |
| iOS/iPadOS only | The web has **no status-bar API beyond theme colour, safe areas and PWA display modes**; on desktop web ignore it and rely on the browser chrome. |

Field-note cross-links:
- `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: safe areas, `dvh`, no hard-coded bar heights; `hig/foundations/materials.md` (✓ CRITICAL) and **Materials GATE**: blur behind the bar plus solid fallback; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: contrast of status glyphs over content.
- `hig/patterns/going-full-screen.md` (✓) and `hig/patterns/playing-video.md` (✓): hiding chrome for immersive media, restoring by tap; `hig/components/navigation/tab-bars.md` (✓), `hig/components/menus/toolbars.md` (✓) and `hig/components/presentation/scroll-views.md` (✓): the same scroll-edge / hide-on-scroll behaviour for bars; `hig/components/menus/home-screen-quick-actions.md` (✓) and `hig/patterns/launching.md` (✓): PWA launch display.
- `field-notes/*`: no status-bar rule; **no conflict**.
- Not yet ingested (linked from this page): none (no Related list).

## Checklist
- [ ] Nothing interactive sits **under the system/status strip**; content there is **faded or blurred**, and top controls start **below `env(safe-area-inset-top)`**.
- [ ] Status glyph contrast is checked against **light and dark content** (theme-color / status-bar style set per scheme).
- [ ] A blurred sticky header has a **solid fallback** for Reduce Transparency/forced colours.
- [ ] Full-screen media **hides chrome only temporarily**; **one tap/`Esc`** restores it; there is a **visible exit** and keyboard access.
- [ ] When chrome is hidden, **time/connection cues you provide reappear** on demand (offline banner, clock).
- [ ] No hard-coded status-bar heights anywhere.

## Related
- Ingested: Layout (✓ CRITICAL), Materials (✓ CRITICAL), Color (✓ CRITICAL), Going full screen (✓), Playing video (✓), Tab bars (✓), Toolbars (✓), Scroll views (✓), Launching (✓), Home Screen quick actions (✓), Images (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: `UIStatusBarStyle`, `preferredStatusBarStyle` (UIKit); `ScrollEdgeEffectStyle`, `UIScrollEdgeEffect`.
