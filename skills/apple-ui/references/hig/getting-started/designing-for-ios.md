# Designing for iOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ios ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 5 · No change log on page.

## In one line
iPhone is a personal, always-with-you, hand-held device used anywhere and on the move — design
for one or two hands, a medium high-res screen at arm's length, touch/keyboard/voice, sessions
of seconds or hours, and constant app switching; then lean on the system's capabilities instead
of making people do work.

## What the page says

### Why iPhone matters to people (framing)
People rely on iPhone to stay in touch, play, watch and listen, get tasks done and keep track
of personal data — **anywhere and while moving**. Start any iOS design by understanding the
device characteristics below; decisions grounded in them produce apps iPhone users value.

### The five defining characteristics
1. **Display** — medium-sized, high-resolution screen. (Room for focused content, not for
   dense multi-pane layouts; small details are sharp and visible.)
2. **Ergonomics** — held in **one or both hands**; people **rotate between portrait and
   landscape** as the task demands; the screen is typically **no farther than a foot or two**
   (~30–60 cm) from the eyes while in use.
3. **Inputs** — Multi-Touch **gestures**, the **virtual keyboard** and **voice** (Siri) are
   how people act on the go. People also expect apps to make use of their **personal data**
   (with privacy), of **motion input** from the gyroscope and accelerometer, and increasingly of
   **spatial interactions**.
4. **App interactions** — usage swings between **very short sessions** (a minute or two to
   check updates, log data, send a message) and **long sessions** (an hour or more of browsing,
   gaming, media). People keep **several apps open** and **switch between them often** — and
   like being able to.
5. **System features** — iOS offers system-level ways to interact with apps in familiar,
   consistent ways; integrate with them: **Widgets**, **Home Screen quick actions**,
   **Spotlight** (search), **Shortcuts** (Siri shortcuts & suggestions), **Activity views**
   (the share sheet).

### Best practices (Apple: prioritise these to feel at home on iOS)
- **should — Fewer controls, more focus.** Keep people on the primary task and content by
  **limiting the number of controls on screen**; keep secondary details and actions
  **discoverable with minimal interaction** (one tap/menu away, not deleted).
- **must — Adapt seamlessly to appearance changes** — device **orientation**, **Dark Mode**,
  **Dynamic Type** (user-chosen text size). Let people pick the configuration that suits them;
  the layout must survive every combination.
- **should — Fit how the device is held.** Controls in the **middle or bottom** of the screen
  are easier and more comfortable to reach. Therefore it's especially important to support
  **swipe to go back** and **swipe actions on list rows** (acting without stretching to the top).
- **should — Use platform capabilities instead of asking for input** — *with permission*. Pull
  in what the system already knows so people don't type it: e.g. **payments** (Apple Pay),
  **biometric authentication** (Face ID / Touch ID) for security, **location-based features**.

### Resources listed
- Related: Apple Design Resources — iOS app templates (Figma/Sketch kits).
- Developer documentation: iOS Pathway.
- Videos: *Meet Liquid Glass*, *Get to know the new design system* (both WWDC25) — iOS design
  today is defined by the Liquid Glass design system.

## Specs & values
- Viewing distance while in use: ≤ 1–2 ft (≈ 30–60 cm).
- Orientation: both portrait and landscape expected.
- Easy-reach zone: middle and bottom of the display (top corners are the hardest to reach).
(Concrete point sizes, margins, safe areas live in Layout / Typography — not on this page.)

## Platform considerations
This page *is* the iOS platform summary. iPadOS/macOS/etc. have their own pages.

## Visual notes (from screenshots)
- Hero: wide rounded panel (~18px radius) with the teal→lime green gradient of Getting
  started; a thick dark-green outline iPhone glyph centred on a **construction grid** — dashed
  vertical/horizontal guides, diagonals and a circle — i.e. the icon-design grid, signalling
  "built on geometry". A dark-mode variant of the image exists.
- Text layout: abstract in 28px; body 20px; each characteristic is a paragraph with a **bold
  lead-in label** ("Display.", "Ergonomics." …) followed by regular text; inline links are blue
  and **underlined** (documentation link style), linking to the deeper HIG pages.
- Right-hand **"On this page"** mini-TOC: "Designing for iOS · Best practices · Resources",
  current section marked by a thin dark vertical bar to its left and black text; others grey.
- Resources section: "Related", "Developer documentation", "Videos" subheads; video cards are
  16:9 thumbnails with ~18px radius and bold titles underneath.

## Web translation (mobile web / PWA / responsive apps)
| iOS guidance | What to do on the web |
|---|---|
| One/two hands, reach zone | Put the primary action in the **bottom third** on phones: sticky bottom action bar/footer (our wizard footer), bottom tab bar for top-level navigation, FAB-free. Keep destructive/rare actions away from the thumb's resting spot. Hit targets ≥ 44×44px. |
| Swipe back | Never hijack horizontal swipes near the left edge (Safari uses them for Back). Use real routes/history (`pushState`) so the browser back gesture works for every screen, sheet and step. Support swipe actions on list rows only as an *extra* — always provide a visible alternative (menu/button). |
| Orientation | Layout must work in landscape phones (short height!): don't lock height-dependent layouts; use `100dvh`, allow scroll, test 812×375. |
| Dark Mode | Honour `prefers-color-scheme` with a Light/Dark/Auto override; every token has a dark pair. |
| Dynamic Type | Size text in `rem`, never block browser zoom (`user-scalable=no` is forbidden), keep inputs ≥ 16px (iOS zoom), test at 200% text size; on Apple devices `font: -apple-system-body` follows the user's text size. Layouts must reflow, not truncate. |
| Fewer controls | One primary action; secondary actions in a "More" menu / overflow button / row detail; progressive disclosure. |
| Short & long sessions, app switching | Make the 30-second task fast (deep links, remembered last state, quick actions on the home screen of a PWA via manifest `shortcuts`). Preserve state when the tab is backgrounded: save drafts, restore scroll and form input on `visibilitychange`/`pageshow` (bfcache), never reset a flow because the user switched apps. |
| Use capabilities, not typing | `autocomplete` attributes (`name`, `email`, `tel`, `street-address`, `one-time-code` for SMS codes), `inputmode`/`type` for the right keyboard, **passkeys/WebAuthn** (Face ID/Touch ID), **Apple Pay / Payment Request API**, Geolocation API — each only after a clear, contextual permission ask. |
| System features | Web Share API (`navigator.share`) = the share sheet (Activity view); PWA manifest `shortcuts` ≈ Home Screen quick actions; good `<title>`/meta for Spotlight/Siri suggestions. |
| Safe areas | `viewport-fit=cover` + `env(safe-area-inset-*)` padding on fixed bars (home indicator, notch/Dynamic Island). |

## Checklist
- [ ] Primary action reachable by thumb (middle/bottom) on a phone?
- [ ] Browser/edge swipe-back works on every screen; no gesture hijacking?
- [ ] Works in portrait **and** landscape, light **and** dark, at large text sizes?
- [ ] Only the essential controls visible; secondary ones one tap away?
- [ ] State survives app switching (drafts, scroll, step)?
- [ ] Autofill, correct keyboards, passkeys/Apple Pay/location used instead of manual entry —
      each behind a clear permission rationale?
- [ ] Share uses the system share sheet?

## Related (ingestion status)
Gestures, Siri, Privacy (✓ `hig/foundations/privacy.md`), Gyroscope and accelerometer, Widgets, Home Screen
quick actions — not yet ingested; Activity views (✓ `components/menus/activity-views.md`); Searching (✓), Layout (✓ CRITICAL), Dark Mode (✓), Typography (✓ CRITICAL) are ingested. Virtual keyboards (✓ `components/selection-and-input/virtual-keyboards.md`).
Note: the page links "spatial interactions" (`/spatial-interactions`), which is not in the
current HIG navigator tree.
