# Popovers
Source: https://developer.apple.com/design/human-interface-guidelines/popovers · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for visionOS. Not supported in tvOS or watchOS"; the TV and Watch icons are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources **(from screenshot)**). One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the start of the Resources block) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the **Related** links and **Developer documentation** list (the screenshots end on the "Related" heading) and the dark variants of the images. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers**.

## In one line
A popover is a **transient view that appears above other content when someone clicks or taps a control or interactive area**, with an **arrow pointing at its source**. Use it for **a small amount of information or a few related tasks**, **one at a time**, **sized to its content**, **never covering its source**, **never for warnings** (use an alert), and **never over compact iPhone-size views** (use a sheet). Always **save work** when it closes itself; on macOS it may be **detachable into a panel**.

## Rules

### Framing (intro)
- A popover is a **transient view above other content**, opened by **clicking or tapping a control or interactive area**.

### Best practices
- **should** **Expose only a small amount of information or functionality.** A popover **disappears after interaction**, so limit it to **a few related tasks**. Example: a **calendar event popover** lets people **change date/time or move the event to another calendar**, then disappears so they **keep reviewing their calendar**.
- **may** **Use a popover when you want more room for content.** **Sidebars and panels take a lot of space**; content needed **only temporarily** can live in a popover and **streamline the interface**.
- **should** **Position popovers well.** Its **arrow points as directly as possible at the element that revealed it**; ideally it **doesn't cover that element or essential content** people need while using it.
- **should** **Use a Close button only for confirmation and guidance.** A **Close, Cancel or Done** button is worth having **if it adds clarity** (e.g. **exit with or without saving**). Otherwise the popover **closes when people click/tap outside it or choose an item in it**. If **multiple selections** are possible, keep it **open until people explicitly dismiss it or click/tap outside**.
- **must** **Always save work when a nonmodal popover closes automatically.** People can **dismiss it accidentally** by clicking/tapping outside; **discard work only after an explicit Cancel**.
- **must** **Show one popover at a time.** Multiple popovers clutter and confuse; **never a cascade or hierarchy** (one emerging from another). To show a new one, **close the open one first**.
- **must** **Don't show another view over a popover**, **except an alert**.
- **should** **Let people close one popover and open another with a single click or tap** where possible, especially when **several bar buttons each open a popover**.
- **should** **Don't make a popover too big**: **just big enough for its contents and to point to its source**; the system may adjust the size to fit.
- **should** **Animate size changes.** Some popovers have **condensed and expanded views** of the same info; **animate the resize** so it doesn't look like **a new popover replaced the old one**.
- **should** **Avoid the word "popover" in help documentation**: refer to **a specific task or selection** ("Select the Show button", not "…at the bottom of the popover").
- **must** **Avoid using a popover for a warning**: people can **miss it or close it accidentally**; **warn with an alert** (see *Alerts*).

### Platform considerations
- **visionOS:** no additional considerations. **tvOS, watchOS:** not supported.

#### iOS, iPadOS
- **should** **Avoid popovers in compact views.** Adjust the layout **dynamically by the size class of the content area**: **reserve popovers for wide views**; in **compact** views use the **full available space with a full-screen modal such as a sheet** (see *Modality*).

#### macOS
- A popover can be **detachable**: when people **drag it**, it becomes a **separate panel that stays on screen** while they use other content.
- **may** **Let people detach a popover** so they can **view other information while it stays visible**.
- **should** **Change the detached popover's appearance minimally**: a panel that **looks like the original popover** keeps context.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Opens from | click/tap on a control or interactive area |
| Pointer | arrow toward the source element; must not cover it or essential content |
| Content | small: a few related tasks or info |
| Dismiss | click/tap outside, choose an item, or an explicit Close/Cancel/Done (only when it clarifies) |
| Multi-select | stays open until explicit dismissal or outside click |
| Auto-close | must save work; discard only on explicit Cancel |
| Simultaneous | **one at a time**; no cascades; nothing above it except an alert |
| Switching | close one and open another with a single click/tap |
| Size | just enough for content + arrow; animate size changes |
| Warnings | not in popovers → alerts |
| Compact iOS/iPadOS | use a full-screen sheet instead |
| macOS | optionally detachable into a panel; minimal visual change on detach |
| Not supported | tvOS, watchOS |
| Developer docs | SwiftUI `popover(isPresented:attachmentAnchor:arrowEdge:content:)` · UIKit `UIPopoverPresentationController` · AppKit `NSPopover` |
| Related HIG pages | Sheets (not yet ingested) · Action sheets ✓ · Alerts ✓ · Modality ✓ · Panels ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **large pale-pink rounded rectangle** and a **small pointed arrow (caret) on its top edge**, a little left of centre; a **vertical double arrow** at its right (height) and a **horizontal double arrow** below (width): a **rounded card with an arrow tab**, no numbers **(from screenshot)**.
- **macOS attached popover (catalog `popovers-01`, tab 1):** a Calendar **event block** (magenta, "**Event Name**", a repeat glyph, clock "**2–4 PM**") with a **white rounded popover to its right whose left edge has a small arrow pointing at the event**. Inside: a **header card** with the bold **"Event Name"** and a **magenta colour dot with up/down stepper chevrons**; a card with **"Aug 20, 2025  2:00 PM – 4:00 PM"** and **"Repeats weekly"** plus a small repeat button; a card **"Propose a New Time"**; a list card of **five attendees with green check circles**: **Juan Chavez (organizer), Mei Chen, Tom Clark, Bill James, Anne Johnson** **(from screenshot)**.
- **macOS detached popover (tab 2):** the same content in a **panel with no arrow**, a **title strip with a dark round ✕ and the word "Info"**, and an added **grey "Show" button** at the bottom; it sits **beside** the event block (not pointing at it). Apple's page shows the pair behind an **"Attached popover | Detached popover" tab switcher** **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Popovers · Best practices · Platform considerations · Resources (**no Change log**); side navigation scrolled to show **Presentation** open with **Popovers** in bold (Page controls ringed in the focus outline) and the **Selection and input** and **Status** groups below (Color wells … Virtual keyboards; Activity rings …). The last screenshot ends on the **"Related"** heading.
- The page has **1 tabbed neutral pair** (catalog `popovers-01`), **no ✗/✓ pairs, no videos**. Fetch script run; existing catalog IDs unchanged, total 141. Nothing is measured.

## Web translation
The web version is the **popover / popup panel anchored to a trigger**: a colour picker, filter panel, event details, share menu with options, "more info" card. Modern browsers give it natively (**Popover API**, **CSS anchor positioning**).

| HIG rule | Web implementation |
|---|---|
| Opened by a click/tap on a control | Trigger `<button popovertarget="id" aria-haspopup="dialog" aria-expanded>`; popover `<div id popover="auto" role="dialog" aria-labelledby>` (non-modal `dialog`); **not on hover-only**. Use `aria-haspopup="menu"` only for real menus (`menus.md`). |
| Small amount of info / a few related tasks | **≤ ~5 controls or ~7 rows** (CONV); a form with steps, validation summaries or long lists belongs in a **dialog/sheet or page** (`modality.md`). |
| More room than sidebars/panels | Prefer a popover over a permanent side pane for **temporary** content; if people need it **while working elsewhere**, offer **detach** (below) or a docked pane (`split-views.md`, `panels.md`). |
| Arrow points at the source; don't cover it | **CSS anchor positioning** (`anchor-name`, `position-anchor`, `position-area`, `position-try-fallbacks: flip-block, flip-inline`) or Floating UI/Popper: **offset 8–12 px** (CONV), an **arrow element** (rotated square or `clip-path`) aimed at the trigger centre, **flip/shift to stay in the viewport**, never overlapping the trigger or content the person needs (choose the side with room). RTL flips sides. |
| Close button only for clarity | **No ✕** by default (light dismiss + Esc); add **Cancel/Done** only when there is an **explicit save-or-discard choice**; multi-select popovers **stay open** until **Done**/outside click/Esc. |
| Save work on auto-close | Light-dismiss **commits** edits (autosave) or **keeps a draft**; **discard only on an explicit Cancel** (`entering-data.md`, `undo-and-redo.md`); if the popover has unsaved invalid input, **don't silently drop it**: keep the draft and show it on reopen. |
| One at a time; no cascades | `popover="auto"` **closes other auto popovers** on open; **never nest** popovers or open a menu popover from inside a popover (use inline expanders/segments); one **portal root** for overlays. |
| Nothing over a popover except an alert | Stacking order: page < popover < **alert/modal** (`alerts.md`); tooltips/toasts must not sit above an open popover; when an alert opens, **keep the popover open beneath** or close it deliberately. |
| Close one and open another with one click | Rely on **light-dismiss + `popovertarget`** so clicking **another trigger** opens its popover in **one** click (test: the outside `pointerdown` must not swallow the click); in toolbars use **hover-intent switching** only after the first is open (CONV). |
| Not too big | **`max-width: min(90vw, 360–420px)`** (CONV), height fits content, **`max-height: calc(100dvh - 2 × margin)`** with internal scroll as last resort; no full-page popovers. |
| Animate size changes | Transition **width/height** (`interpolate-size: allow-keywords` or FLIP) **~200 ms** between condensed/expanded views so it reads as **one** popover; **`prefers-reduced-motion`** → instant. |
| No "popover" in help | UI copy and docs say "**Select Show**", never "the popover"; internal names are fine in code (`writing.md`). |
| Not for warnings | Warnings/errors that need attention → **`alertdialog`** or inline banner (`alerts.md`, `feedback.md`); popovers can be missed or dismissed accidentally. |
| iOS/iPadOS: not in compact views | **Container/media query** (CONV: below ~640 px inline size): render the same content as a **bottom sheet or full-screen dialog** with a clear close/Done (`modality.md`; Sheets not yet ingested); above it, an anchored popover. Decide by **available width, not device type**. |
| macOS: detachable | A **"Pop out" affordance** (drag the title/handle out, or a button) turns the popover into a **floating non-modal panel** (`panels.md`) with a **title strip ("Info") and a close ✕**, **same content and styling** (minimal changes), stays open while people use the page; keep position remembered. |
| Accessibility | On open **move focus to the first control** (or the popover for read-only content); **Esc closes and returns focus to the trigger**; **Tab** stays in DOM order (no hard trap, non-modal), tabbing out **closes** it (CONV); visible focus; hit regions ≥ 44 px on touch (Buttons gate); glass fill with **solid fallback** (`materials.md`). |

Field-note cross-links:
- `hig/components/presentation/panels.md` (✓): the **detached** version; `hig/components/presentation/alerts.md` (✓) and `action-sheets.md` (✓): warnings and follow-up choices go there, not in popovers.
- `hig/patterns/modality.md` (✓): modal vs nonmodal; the **compact fallback** is a sheet.
- `hig/components/menus/menus.md`, `pop-up-buttons.md`, `pull-down-buttons.md`, `activity-views.md` (✓): menu-like popups and the **share popover** on wide screens.
- `hig/components/layout/split-views.md` (✓) and `sidebars.md` (✓): permanent panes vs temporary popovers.
- `hig/patterns/entering-data.md` (✓), `undo-and-redo.md` (✓): save-on-dismiss and recovery; `hig/foundations/materials.md` (✓ CRITICAL), `hig/components/menus/buttons.md` (✓ CRITICAL).
- Not yet ingested: **Sheets**.
- No conflict with a field note.

## Checklist
- [ ] The popover shows **a small amount of information or a few related tasks**, opened by **click/tap** (not hover only).
- [ ] The **arrow points at the trigger**; the popover **doesn't cover the trigger or essential content**; it flips/shifts to fit.
- [ ] **Only one popover is open**; none nested; nothing sits above it except an alert.
- [ ] **Light dismiss** (outside click/Esc) **saves work**; **discard only via explicit Cancel**; Close/Done only where it clarifies save vs discard; multi-select stays open until dismissed.
- [ ] Clicking another trigger **closes this and opens that in one click**.
- [ ] Size fits content (max width/height bounded); size changes are **animated**; reduced motion respected.
- [ ] **Warnings use an alert**, not a popover.
- [ ] **Compact viewports** get a sheet/full-screen dialog instead.
- [ ] (macOS-style apps) the popover can be **detached** into a panel with minimal visual change.
- [ ] Focus moves in on open, **Esc returns it to the trigger**; UI copy never says "popover".

## Related
- Ingested: Panels (✓), Alerts (✓), Action sheets (✓), Modality (✓), Menus (✓), Pop-up buttons (✓), Pull-down buttons (✓), Activity views (✓), Split views (✓), Sidebars (✓), Entering data (✓), Undo and redo (✓), Materials (✓ CRITICAL), Buttons (✓ CRITICAL), Writing (✓).
- Not yet ingested: **Sheets**.
- Developer docs: SwiftUI `popover(isPresented:attachmentAnchor:arrowEdge:content:)`; UIKit `UIPopoverPresentationController`; AppKit `NSPopover`.
