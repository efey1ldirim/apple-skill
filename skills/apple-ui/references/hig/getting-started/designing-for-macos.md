# Designing for macOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-macos ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 5 (text cross-checked: matches
the fetched content) · No change log on page.

## In one line
The Mac is the spacious, powerful, stationary workstation: big (often multiple) displays at
30–90 cm, keyboard + precise pointer, hours of deep work across many apps. Show more with less
nesting and fewer modals, let people shape their windows, expose every command in the menu bar,
reward precision and the keyboard, and let people personalise.

## What the page says

### Why people use a Mac (framing)
People rely on the Mac's **power, spaciousness and flexibility** for **in-depth productivity**,
media and content, and games — **often with several apps at once**.

### The five defining characteristics
1. **Display** — typically **large and high-resolution**; people **extend the workspace with
   extra displays, including an iPad** (Sidecar). Your UI may span/move between screens of
   different sizes.
2. **Ergonomics** — used **while stationary**, usually on a **desk or table**; typical viewing
   distance **about 1–3 feet (~30–90 cm)**.
3. **Inputs** — people expect to use **any combination** of physical **keyboards**, **pointing
   devices** (mouse/trackpad), **game controllers**, and **Siri** for both entering data and
   controlling the interface.
4. **App interactions** — from **a few minutes** of quick tasks to **several hours of deep
   concentration**. Many apps are open at once; people expect **smooth transitions between active
   and inactive states** as they switch apps (the window that loses focus changes appearance
   subtly but stays readable and keeps its state).
5. **System features** to integrate with: **the menu bar**, **file management** (documents,
   open/save, Finder), **going full screen**, **Dock menus**.

### Best practices (prioritise these to feel at home on macOS)
- **should — Use large displays to show more content with fewer nested levels and less
  modality** — flatten hierarchies, avoid drilling in and out, avoid modal takeovers — **while
  keeping a comfortable information density** that doesn't make people strain to see what they
  want (more ≠ cramped).
- **must — Let people resize, hide, show and move windows** to suit their work style and
  display setup, and **support full-screen mode** for distraction-free work.
- **must — Put commands in the menu bar**: it should give easy access to **all** the commands
  people need in your app (the complete, discoverable command inventory).
- **should — Take advantage of high-precision input** so people can make **pixel-perfect
  selections and edits**.
- **must — Handle keyboard shortcuts** so people can speed up actions and work **keyboard-only**.
- **should — Support personalisation**: customise **toolbars**, configure **windows** to show
  the views they use most, choose **colours and fonts** in the interface.

### Resources listed
- Related: Apple Design Resources (macOS kits). Developer documentation: macOS Pathway.
- Videos: *Meet Liquid Glass*, *Get to know the new design system*, *Build an AppKit app with
  the new design* (WWDC25 session 310).

## Platform comparison so far (iPhone → iPad → Mac)
| | iOS | iPadOS | macOS |
|---|---|---|---|
| Display | medium | large | large + **multiple displays (incl. iPad)** |
| Distance | ≤ 30–60 cm | ≤ ~90 cm | **~30–90 cm** |
| Posture | hand-held | held / flat / stand | **stationary, desk** |
| Primary input | touch | touch + keyboard/pointer/Pencil | **keyboard + precise pointer** (+ game controller, Siri) |
| Density | low, focused | adapts to input/distance | **higher, but comfortable** |
| Navigation | push/back, tab bar | sidebar/split view, fewer modals | **flat hierarchy, windows, menu bar** |
| Signature expectations | reach zone, swipe back | multitasking, drag & drop | **resizable windows, full screen, menu bar, shortcuts, personalisation, active/inactive states** |

## Specs & values
- Viewing distance ~1–3 ft (~30–90 cm).
- No sizes on this page (see Layout, Typography, Windows, The menu bar, Keyboards).

## Visual notes (from screenshots)
- Hero: green-gradient construction-grid panel with a dark-green iMac glyph (display with a
  lighter screen area, stand and foot) centred on circles + diagonals.
- Same documentation grammar as the other platform pages (bold lead-in paragraphs, blue
  underlined inline links, "On this page" mini-TOC: Designing for macOS · Best practices ·
  Resources).
- **(from screenshot)** Third video card "Build an AppKit app with the new design": black
  thumbnail showing a wide sunset-photo window with a **floating Liquid Glass toolbar capsule**
  containing trash, archive, "archive-x" and "+" icons — the new macOS toolbar: grouped icon
  buttons on one glass capsule floating over content.

## Web translation (desktop web apps, dashboards, SaaS)
| macOS guidance | What to do on the web |
|---|---|
| More content, fewer nested levels, less modality | Flatten navigation: sidebar + list + detail on one screen; inline editing; inspectors/side panels instead of modal forms; use modals only for short blocking decisions. Keep density comfortable: rows ~32–40px with fine pointer, body 13–15px, generous line height, never cram. |
| Resizable / hideable / movable windows, full screen | Resizable split panes (drag handles, persisted sizes), collapsible sidebar (⌘/Ctrl+\ or a toolbar toggle), detachable/pop-out views where useful, a **focus/full-screen mode** (Fullscreen API or distraction-free layout). Remember layout per user. |
| Menu bar = all commands | Web has no native menu bar: provide a **command palette** (⌘K / Ctrl+K) that lists *every* action with its shortcut, plus contextual **right-click menus** and overflow "…" menus. Every command must be reachable without hunting. |
| High-precision input | Precise hit areas where precision matters (resize handles, marquee/multi-select with Shift/⌘-click, range selection in tables, nudging with arrow keys, snapping), hover affordances and tooltips (`(hover: hover) and (pointer: fine)`). |
| Keyboard shortcuts, keyboard-only | Full keyboard operability: logical tab order, visible focus, arrow-key navigation in lists/grids, Enter/Esc semantics, standard shortcuts (⌘S save, ⌘Z/⇧⌘Z undo/redo, ⌘F find, ⌘K palette, ⌘, settings). Don't hijack browser-reserved shortcuts. Show shortcuts in menus/tooltips. Detect platform to show ⌘ vs Ctrl. |
| Personalisation | Customisable toolbars/columns (show/hide/reorder table columns), saved views/filters, density setting (comfortable/compact), theme Light/Dark/Auto, accent colour, text size. Persist per user. |
| Active/inactive states | When the tab/window loses focus (`blur`/`visibilitychange`), keep state intact; optionally mute selection highlight to grey like macOS inactive windows; pause heavy animation/polling when hidden; resume instantly on return. |
| File management | Drag files in and out, clear Save/Export/Download with sensible file names, recent documents, autosave with version history rather than "unsaved changes" traps. |
| Multiple displays | Layouts must scale from 1280px laptops to 5K external monitors: cap line length (~70–90ch), use max-widths or multi-column content rather than stretching. |
| Dock menus | PWA manifest `shortcuts` for quick actions from the Dock/taskbar. |

## Checklist
- [ ] Main work visible without drilling through nested screens or modals?
- [ ] Density high enough to be productive, low enough to be comfortable?
- [ ] Panes resizable/collapsible, focus/full-screen mode available, layout remembered?
- [ ] Every command discoverable in one place (command palette / menus) with shortcuts shown?
- [ ] Fully usable keyboard-only; precise pointer interactions (multi-select, handles)?
- [ ] Personalisation: columns/toolbar/theme/density/text size?
- [ ] Works from laptop to very large displays without stretched lines?

## Related (ingestion status)
The menu bar, File management (✓), Going full screen (✓), Dock menus (✓), Menus (✓), Toolbars (✓),
Siri (✓ `technologies/siri.md`) ingested since (Game controls ✓ `inputs/game-controls.md`). Ingested since: Sidebars (✓ `components/navigation/sidebars.md`), Windows (✓ `components/presentation/windows.md`), Keyboards (✓ `inputs/keyboards.md`), Pointing devices (✓ `inputs/pointing-devices.md`: click/gesture and pointer tables).
