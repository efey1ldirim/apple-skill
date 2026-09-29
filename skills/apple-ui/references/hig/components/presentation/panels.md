# Panels
Source: https://developer.apple.com/design/human-interface-guidelines/panels · Section: Components › Presentation · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources **(from screenshot)**). One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the developer-documentation links) were compared with the fetched text and image alt text line by line: everything matches except one **image-vs-alt-text detail** (the HUD picture, see § Visual notes); they are contiguous and cover the whole page (the last one ends on the `hudWindow` link, before the footer). **Read from the fetch only:** the dark variants of the two images. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers**.

## In one line
On macOS a **panel** is a **secondary window that floats above the app's windows** and gives **quick access to controls, options or information about the active window or current selection** (Fonts, Colors, **Inspector**). Keep it **less prominent than a main window**, with a **short noun title in a title bar**, **simple adjustment controls** (sliders, steppers), **shown when the app is active and hidden when it isn't**, **not listed as a document, no minimize button**, and **named by its title, never "panel"**. A **HUD-style** panel (dark, translucent) is **only for media/immersive apps**, **small, nearly colourless, with few controls**. On other platforms present the same content **modally**.

## Rules

### Framing (intro)
- In a macOS app a panel **typically floats above other open windows** and provides **supplementary controls, options or information** related to **the active window or current selection**.
- A panel has **a less prominent appearance than the app's main window**; when appropriate it can use a **dark, translucent style for a heads-up-display (HUD) experience**.
- **Other platforms:** consider a **modal view** to present supplementary content relevant to the current task or selection (see *Modality*).

### Best practices
- **should** **Use a panel for quick access to important controls or information about the content people work with**: e.g. **controls or settings affecting the selected item** in the active document or window.
- **may** **Use a panel for inspector functionality.** An **inspector shows details of the currently selected item and updates automatically** when the selection changes. An **Info window**, which **keeps the same contents even when the selection changes**, should be a **regular window, not a panel**. Depending on the layout, a **split view pane** can also host an inspector.
- **should** **Prefer simple adjustment controls.** Avoid controls that need **typing or choosing items to act on** (multi-step); prefer **sliders and steppers** for **direct control**.
- **should** **Write a brief title describing the panel's purpose.** A floating panel needs a **title bar** so people can **position it**. Use a **short noun or noun phrase in title-style capitalisation** (macOS's **"Fonts"** and **"Colors"**; many apps use **"Inspector"**).
- **should** **Show and hide panels appropriately.** When the app **becomes active, bring all its open panels to the front**, regardless of which window was active when a panel opened; when the app is **inactive, hide all its panels**.
- **should** **Keep panels out of the Window menu's documents list.** Commands to **show or hide** panels are fine in the Window menu, but panels **aren't documents or standard app windows**.
- **should** **In general, don't offer a minimize button on a panel**: it shows only when needed and disappears when the app is inactive.
- **should** **Refer to panels by title, in the UI and in help.** In menus use the title **without "panel"** ("Show Fonts", "Show Colors", "Show Inspector"). In help docs, "panel" as a distinct window type can confuse: use the title, or **append "window"** when it adds clarity ("Fonts window", "Colors window"; "Inspector" often stands alone).

### HUD-style panels
- A **HUD-style panel** does the **same job** as a standard panel but is **darker and translucent**. HUDs suit apps with **highly visual content or an immersive experience** (media editing, a full-screen slide show); **QuickTime Player** shows **inspector information in a HUD** without covering much content.
- **should** **Prefer standard panels.** A HUD can **distract or confuse** without a logical reason and **may not match the current appearance setting**. Use a HUD **only**:
  - in a **media-oriented app** that presents **movies, photos or slides**;
  - when a **standard panel would obscure essential content**;
  - when you **don't need controls**, apart from the **disclosure triangle** (most system controls **don't match a HUD's appearance**).
- **should** **Keep one panel style when the app switches modes**: a HUD used in full-screen mode should **stay a HUD after leaving full screen**.
- **should** **Use colour sparingly in HUDs**: too much colour in the dark appearance distracts; **small amounts of high-contrast colour** highlight what matters.
- **should** **Keep HUDs small**: they are meant to be **unobtrusively useful**; don't let one **obscure the content it adjusts** or **compete for attention**. (Developer: `hudWindow`.)

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Role | floating secondary window with supplementary controls/options/info for the active window or selection |
| Prominence | less prominent than the main window |
| Title | short noun / noun phrase, title-style caps, in a title bar (Fonts, Colors, Inspector) |
| Controls | simple adjustments (sliders, steppers); avoid typing/selecting-to-act |
| Inspector vs Info window | inspector updates with the selection (panel OK); Info window keeps fixed contents (regular window) |
| Visibility | front when app active; hidden when app inactive |
| Window menu | show/hide commands OK; not in the documents list |
| Minimize button | avoid |
| Naming | by title, no "panel" in menu items ("Show Inspector"); "… window" in help when clearer |
| HUD | dark translucent; media/immersive apps, or when a standard panel would hide essential content, or no controls needed (disclosure triangle only); same style across full-screen/windowed; little, high-contrast colour; small |
| Other platforms | modal view instead |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | AppKit `NSPanel`, `hudWindow` (`NSWindow.StyleMask`) |
| Related HIG pages | Windows ✓ · Modality ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card. A **dark maroon translucent rounded panel** floats in the centre with a **small round red close button (✕) at the top-left** and a **thin separator under a title strip**; behind and below it, a **lighter pink window** whose corner peeks out at the bottom; a **vertical double arrow** at the panel's right (its height) and a **horizontal double arrow** below it (its width): a **compact panel floating over a larger window**; no numbers **(from screenshot)**.
- **HUD screenshot (QuickTime Player Inspector):** a **dark translucent rounded window** over a warm-beige/blue wallpaper, a **red close dot at the left of a small grey centred title "Inspector"**; below, a **bold filename "movie name.m4v"** and a **timestamp line "2023-02-23T12:03:35-0800"**; a **"General:" disclosure section (expanded, ▾)** with **right-aligned grey labels and white values**: **Source** (`/Users/juanchavez/Documents/Project Folder/movie name.m4v`, wrapped over three lines), **Resolution** (2110 × 1680), **Data Size** (198.9 MB), **Data Rate** (34.07 Mbit/s), **Current Size** (2110 × 1680), **Video Format** (H.264); and a **collapsed "Video Details:" (▸)** row, separated by hairlines **(from screenshot)**. **Difference:** the page's alt text lists "**frames per second**" and "**frame size**"; the picture shows **no frames-per-second row** and uses **Resolution / Current Size** instead. The picture is authoritative for what is visible.
- **Text-only page otherwise:** no ✗/✓ pairs, no videos, no change log. The bullet list under "Prefer standard panels" (three HUD conditions) and the definition of *inspector* / *Info window* appear only as text.
- **Page chrome (from screenshot):** platform strip with only the Mac lit; TOC Panels · Best practices · HUD-style panels · Platform considerations · Resources (**no Change log**); side navigation shows **Presentation** open with **Panels** ringed in the focus outline; Resources: **Related Windows, Modality**; **Developer documentation**: **NSPanel** and **hudWindow** (AppKit).
- Fetch script run; the page has **no comparison images**; catalog IDs unchanged, total 140. Nothing is measured.

## Web translation
The web equivalents are **floating tool palettes and inspectors** in editor-style apps (design tools, video/photo editors, dashboards with a "Properties" panel), **non-modal**, **draggable**, or **docked** as a **split-view pane** (`split-views.md`). Apple has **no non-macOS version**; for small screens present the same content **as a sheet/drawer (modal)**, as the intro says.

| HIG rule | Web implementation |
|---|---|
| Floating supplementary window for the active window/selection | A **non-modal floating panel**: `<div role="dialog" aria-modal="false" aria-labelledby>` (or `role="region"`/`complementary` when docked), **`position: fixed`** in a **panel layer above the workspace windows but below alerts/modals** (`z-index` tokens), **no scrim, no focus trap**, the main content stays usable. |
| Less prominent than the main window | Lighter chrome: smaller title bar, secondary surface/elevation tokens, **no primary colours or large headings**; its shadow smaller than a modal's. |
| Quick access to important controls/info | Put **frequently used adjustments** first; **remember position, size and open state per user** (`localStorage`), restore on reload; a keyboard shortcut to toggle (CONV, e.g. ⌘⌥I/Ctrl+Alt+I for Inspector). |
| Inspector: updates with the selection | The panel **re-renders live on selection change** (empty state "No selection" with guidance); announce changes politely: **`aria-live="polite"` only for the panel's heading/summary**, not every field; an **Info dialog/page** with **fixed contents** is a normal window or route, not the inspector. Docked variant: a right-hand **split-view pane** (`split-views.md`). |
| Simple adjustment controls | **Sliders (`<input type="range">`), steppers, switches, colour swatches, segmented controls**; avoid forms that need typing plus "Apply": if numbers must be typed, pair a **slider with a numeric field that updates live** and apply changes immediately with **Undo** (`undo-and-redo.md`). |
| Brief noun title in a title bar | A **title bar acts as the drag handle** (`pointerdown` + `setPointerCapture`), noun title in **Title Case** ("Inspector", "Fonts", "Colors": `writing.md` capitalisation table), a **close (✕) button** with an accessible name ("Close Inspector"); **keyboard move** (focus the title bar, arrow keys, Shift = faster; CONV) and **clamp to the viewport** so it can't be lost. |
| Show when the app is active; hide when it isn't | Panels belong to the **workspace**: bring them **forward when the app window regains focus** (`window` `focus`), keep them **above document windows** in that workspace, and **hide/park them when the workspace is unmounted or the app is backgrounded in a multi-window shell**; **don't** keep panels floating over unrelated pages or routes. |
| Not in the Window menu's documents list | In a window/tab switcher list **documents only**; put **"Show Inspector / Hide Inspector"** toggles in the **View/Window menu** or command palette (`the-menu-bar.md`). |
| No minimize button | Offer **close** (and optionally **collapse to title bar** if the panel is tall: CONV) but **no minimize/maximize**; re-open via the menu command or shortcut. |
| Refer to panels by title | Menu items and help say "**Show Inspector**", "**Hide Colors**", never "Show Inspector Panel"; in help copy use "the Inspector window" only when clarity needs it (`writing.md`). |
| HUD style | A **dark translucent overlay**: `background: rgb(0 0 0 / .55–.7)` (CONV) + `backdrop-filter: blur(20–30px)`, **light text tokens with ≥ 4.5:1** on the worst-case backdrop (`color.md`, `materials.md` MATERIALS GATE; **solid dark fallback** for Reduce Transparency/Increase Contrast). Use **only** for media/immersive views (video, photo viewer, slideshow) or when a standard panel would hide essential content; **information-first** (read-only rows, disclosure triangles: `disclosure-controls.md`), **no form controls** unless restyled for dark; **keep the same style** in and out of full screen. |
| Colour sparingly in HUDs | Neutral greys/white text; **one accent** for the value that matters (e.g. an error or the active state), never decorative colour. |
| Keep HUDs small | Cap size (CONV: ≤ ~30 % of the viewport width/height) and **let it be moved or dismissed**; **auto-hide after inactivity in a media player** with a keyboard/hover reveal; never cover the content being adjusted (place beside it). |
| Other platforms: modal view | On phones/tablets: **bottom sheet or drawer** for the same content (`modality.md`; Sheets ✓ `sheets.md`), with obvious dismissal; don't float small draggable palettes on touch. |
| Focus and accessibility | Panel is **reachable by Tab** in DOM order near its trigger (or via a "Skip to Inspector" landmark shortcut); **Esc returns focus to the main content** (doesn't have to close); visible focus rings; touch targets ≥ 44 px on touch widths (Buttons gate); respects `prefers-reduced-motion` when opening. |

Field-note cross-links:
- `hig/components/layout/split-views.md` (✓): the docked **inspector pane** alternative; `hig/patterns/modality.md` (✓): the **modal** version on other platforms; **panels are non-modal**.
- `hig/components/menus/the-menu-bar.md` (✓): **Window menu** rules (list only documents; show/hide commands) and **View**-menu toggles.
- `hig/components/layout/disclosure-controls.md` (✓): the **only control that fits a HUD**; `hig/foundations/dark-mode.md` (✓), `materials.md`, `color.md` (✓ CRITICAL): dark translucent surfaces, contrast, fallbacks.
- `hig/patterns/undo-and-redo.md` (✓): immediate-apply adjustments need Undo; `hig/foundations/writing.md` (✓): Title Case titles, "Show X" menu wording.
- Windows (✓ `components/presentation/windows.md`: main / key / inactive states). Sliders (✓ `components/selection-and-input/sliders.md`). Not yet ingested: Steppers.
- No conflict with a field note.

## Checklist
- [ ] The panel gives **quick access to controls or info about the current selection**; fixed-content "Info" views are regular windows/routes.
- [ ] **Non-modal**: no scrim, no focus trap; sits above workspace windows and below alerts; position/size/open state are remembered.
- [ ] Title is a **short Title Case noun** in a **draggable title bar**; close button has a name; keyboard move works and it can't leave the viewport.
- [ ] Controls are **simple adjustments** (sliders/steppers/switches) applied live with **Undo**; typing-heavy forms are avoided.
- [ ] Inspector **updates on selection** and shows a helpful empty state.
- [ ] Panels aren't in the document/window list; **Show/Hide X** exists in the menu or command palette; **no minimize**.
- [ ] Menus and help say "**Show Inspector**", not "Show Inspector Panel".
- [ ] **HUD only** for media/immersive views (or when a standard panel would obscure content): dark translucent, read-only info, **≥ 4.5:1 contrast**, solid fallback, sparing colour, **small**, style kept across full-screen.
- [ ] On touch/small screens the content appears as a **modal sheet/drawer**, not a floating palette.

## Related
- Ingested: Modality (✓), Split views (✓), The menu bar (✓), Disclosure controls (✓), Dark mode (✓), Color (✓ CRITICAL), Materials (✓ CRITICAL), Undo and redo (✓), Writing (✓).
- Windows (✓ `components/presentation/windows.md`: key-window behaviour, panels key only on title-bar/text-field click).
- Developer docs: AppKit `NSPanel`, `hudWindow`.
