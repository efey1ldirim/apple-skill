# Designing for iPadOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 4 · No change log on page.

## In one line
iPad is powerful, portable and flexible — a large screen that may be held, laid flat or put on
a stand up to ~1 m away, driven by touch, keyboard, trackpad, Pencil and voice (often mixed),
used for quick actions *and* hours of deep work, with several apps visible at once. Use the
space for content, not for modals; size content by distance and input; adapt to every window
configuration.

## What the page says

### Why people use iPad (framing)
People value iPad's **power, mobility and flexibility** — for media, games, **detailed
productivity work**, and **creating** things. Start from the device characteristics below.

### The five defining characteristics
1. **Display** — **large**, high-resolution.
2. **Ergonomics** — often **held**, but also **laid on a surface or put on a stand**. Each
   position changes viewing distance; people are usually **within about 3 feet (~1 m)** while
   interacting.
3. **Inputs** — Multi-Touch **gestures**, the **virtual keyboard**, an attached **hardware
   keyboard**, a **pointing device** (trackpad/mouse), **Apple Pencil** (and Scribble —
   handwriting into text fields), **voice**. People **frequently combine input modes** (e.g.
   Pencil in one hand and touch in the other; keyboard shortcuts plus touch).
4. **App interactions** — from a **few quick actions** to **hours of immersion** in games,
   media, content creation or productivity. Multiple apps are open at once; people **like
   seeing more than one app on screen** and using **inter-app capabilities such as drag and
   drop**.
5. **System features** to integrate with: **Multitasking** (multiple windows/apps on screen),
   **Widgets**, **Drag and drop**.

### Best practices (prioritise these to feel at home on iPadOS)
- **should — Use the big screen to lift up the content people care about.** Minimise **modal
  interfaces** and **full-screen transitions** (don't cover the whole screen to show a small
  task); place controls where they are **easy to reach but not in the way**.
- **should — Let viewing distance and input mode decide size and density.** Further away or
  touch-driven → larger, less dense; close with a trackpad/Pencil → denser content is fine.
- **should — Support every input:** Multi-Touch, a physical keyboard or trackpad, Apple
  Pencil — and **consider unique interactions that combine multiple input modes**.
- **must — Adapt seamlessly to appearance/configuration changes** — orientation,
  **multitasking modes** (your app may occupy any window size), Dark Mode, Dynamic Type — and
  **transition effortlessly to running on macOS** (iPad apps run on Apple silicon Macs). Let
  people choose the configuration that suits them.

### Resources listed
- Related: Apple Design Resources (iOS/iPadOS kits). Developer documentation: iPadOS Pathway.
- Videos: *Elevate the design of your iPad app* (WWDC25 — navigation, resizable windows,
  pointer, menu bar), *Meet Liquid Glass*, *Get to know the new design system*.

## iOS vs iPadOS — the differences that matter
| | iPhone (iOS) | iPad (iPadOS) |
|---|---|---|
| Display | medium | **large** |
| Distance | ≤ 1–2 ft (30–60 cm) | **up to ~3 ft (~1 m)**, varies with posture |
| Posture | one/two hands | hands **or** flat surface **or** stand |
| Inputs | touch, virtual keyboard, voice (+ motion) | touch, virtual **and hardware keyboard**, **trackpad/mouse**, **Apple Pencil**, voice — **combined** |
| Sessions | minutes ↔ an hour+ | quick actions ↔ **hours of creation/productivity** |
| Multi-app | switch between apps | **several apps visible at once**, **drag and drop between them** |
| Key advice | fewer controls; bottom reach zone; swipe back | **avoid modals/full-screen takeovers**; density by distance & input; any window size; runs on Mac too |

## Specs & values
- Typical interaction distance: within ~3 ft (~0.9 m).
- No sizes on this page (see Layout, Typography, Multitasking, Pointing devices).

## Visual notes (from screenshots)
- Hero: same green-gradient construction-grid panel as the iOS page, with a landscape iPad
  outline glyph (rounded rectangle, home bar at the bottom) centred on a circle + diagonals grid.
- Identical page grammar to "Designing for iOS": 28px abstract, bold lead-in paragraphs,
  underlined blue inline links, bullet list of system features, "Best practices" and "Resources"
  sections, right-side mini-TOC (Designing for iPadOS · Best practices · Resources).
- Video row of three: "Elevate the design of your iPad app" thumbnail shows **window controls**
  — red/yellow/green circles (close/minimise/full-screen) on a light glass capsule with a pointer
  arrow — the iPadOS windowing controls; plus the two Liquid Glass videos.

## Web translation (tablet & large-screen web, responsive apps)
| iPadOS guidance | What to do on the web |
|---|---|
| Large screen elevates content; avoid modals & full-screen transitions | Above ~768–1024px, show detail **in place**: split view (list + detail), inline editing, side panels, **popovers** anchored to the trigger instead of full-screen modals. Reserve true modals for short, blocking decisions. Keep the primary content visible behind/next to secondary tasks. |
| Controls reachable but not in the way | Toolbars at top (or floating), actions near the content they act on; don't stretch a phone's bottom bar across 1366px — on wide screens move navigation to a **sidebar**. |
| Density by distance & input | Use `@media (pointer: coarse)` / `(pointer: fine)` and `(hover: hover)` to adapt: coarse → 44px targets, more spacing; fine → denser rows (e.g. 32–36px), hover affordances. Don't key density on screen width alone. |
| Many inputs, combined | Every action works by touch **and** keyboard **and** pointer: visible focus, **keyboard shortcuts** for frequent actions (with a discoverable shortcut list), hover states, right-click/long-press context menus, Pencil/stylus = pointer events (`pointerType === "pen"`, pressure) where drawing matters. Use Pointer Events, not mouse-only or touch-only handlers. |
| Multitasking / any window size | The app can be any width from ~320px to full screen, and the width changes live (Split View, Stage Manager, resizable windows). Build with **fluid layouts + container queries**, no fixed breakpoints that assume device type. Test at ⅓, ½, ⅔ widths. Don't sniff devices: iPad Safari presents a desktop (Mac) user agent by default. |
| Drag and drop between apps | Support dragging content out (`draggable`, `dataTransfer` with text/URL/file types) and dropping files/text in (drop zones with clear hover state). |
| Runs on macOS too | Same code should feel right with mouse + keyboard on a desktop: menus, shortcuts, hover, denser layout — one responsive continuum phone → tablet → desktop. |
| Orientation, Dark Mode, text size | As for iOS: landscape/portrait, `prefers-color-scheme`, rem-based type, zoom never blocked. |

## Checklist
- [ ] On large screens, is content shown in place (split view/panels/popovers) rather than
      full-screen modals?
- [ ] Does density adapt to input (`pointer: coarse/fine`), not just width?
- [ ] Is everything usable with touch, keyboard (incl. shortcuts & focus) and pointer (hover,
      context menu)?
- [ ] Does the layout survive any window width and live resizing (container queries)?
- [ ] Drag and drop in/out where content is movable?
- [ ] Orientation, Dark Mode, large text all handled?

## Related (ingestion status)
Multitasking, Widgets, Drag and drop (✓ `hig/patterns/drag-and-drop.md`),
Apple Pencil and Scribble (✓ `inputs/apple-pencil-and-scribble.md`), Siri (✓ `technologies/siri.md`) ✓ (other unmarked items not yet ingested). Windows (✓ `components/presentation/windows.md`). Popovers (✓ `components/presentation/popovers.md`). Virtual keyboards (✓ `components/selection-and-input/virtual-keyboards.md`). Ingested since: Split views (✓ `components/layout/split-views.md`), Sidebars (✓ `components/navigation/sidebars.md`), Gestures (✓ `inputs/gestures.md`), Keyboards (✓ `inputs/keyboards.md`), Pointing devices (✓ `inputs/pointing-devices.md`: iPadOS pointer effects).
