# Focus and selection
Source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection · Section: Inputs · Supported platforms: **iPadOS, macOS, tvOS, visionOS** ("Not supported in iOS or watchOS"; the iPad, Mac, TV and Vision Pro icons are lit **(from screenshot)**; the page has platform sections for **iPadOS, tvOS and visionOS**, and the framing text also names **macOS**) · Ingested: 2026-09-29 · Apple last updated: **October 24, 2023** (clarified the difference between focus effects and the visionOS hover effect; the other row: June 21, 2023, updated with visionOS guidance). One DocC fetch, read in full. **8 screenshots (hero → the first change-log row)** were compared with the fetched text, image alt text, the tvOS state table and the change log line by line; they cover the **whole page except the second Change-log row and the video titles' small print (fetch-only)**. The browser was in **dark appearance**; the content is identical. Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the second Change-log row, the alt text of every image and the dark variants. The three video links were read as titles only (videos not watched, nothing recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **one count** (up to **five** tvOS focus states) and no measurements.

## In one line
**Focus** shows **which component an input will act on** when people navigate with a **remote, game controller or keyboard** ("component-based navigation"). Often **focusing also selects**; the exception is when auto-selection would cause a **distracting context shift**, where **selection needs a separate gesture** (tvOS). Rules: **use the system's focus effects**, **never move focus without the person's input** (except to a neighbour when the focused item disappears during discrete moves), **fit the platform's model** (iPadOS/macOS full keyboard access = content elements only; tvOS = every element reachable), **show focus in the platform's way** (accent highlight for lists/collections, ring/halo for fields), **keep a sensible focus order and a primary item per group**, and on **tvOS** support **five states**, **full-screen gestures act on content**, and **no pointer**. **visionOS eye targeting uses the hover effect, not focus** (see Eyes). Web mapping: **`:focus-visible`, roving tabindex and focus groups, `aria-selected`, ordered focus, TV/spatial navigation**.

## Rules

### Framing (intro)
- Focus supports **simplified, component-based navigation**: with a **remote, game controller or keyboard** people **bring focus to the component** they want.
- **Often focusing also selects**; **exception:** automatic selection that would cause **a distracting context shift, e.g. opening a new view**. **tvOS example:** the remote **moves focus from item to item**, but **selecting a focused item opens or activates it**, so **selection is a separate gesture**.
- **Platforms show focus differently:** **iPadOS and macOS** draw **a ring** around the item or **highlight** it; **tvOS** generally uses the **parallax effect** for depth and liveliness. The mix of effects and interactions is called **the focus system / focus model**.

### Best practices
- **should** **Rely on system-provided focus effects**: they are **tuned to Apple devices** (responsive, fluid, lifelike) and give **consistency and predictability**; **create custom focus effects only if absolutely necessary**.
- **must not** **Change focus without the person's interaction**: people rely on focus to **know where they are**; moving it makes them **hunt for the new focus**, delaying the task. **Exception:** when people move focus with **discrete, directional input (keyboard, remote, game controller)** and the **focused item disappears**: **move focus to one of the few items within one step** so the indicator is easy to find. **Otherwise** (input isn't discrete/directional) you can't predict the next target, so **hide the focus indicator when the focused object disappears**.
- **should** **Fit the platform when helping people focus items**: on **iPadOS and macOS a full keyboard access mode** reaches every control, so you **only need focus for content elements** (**list items, text fields, search fields**) and **not for buttons, sliders and toggles**. On **tvOS** people rely on **directional gestures on a remote/controller or the arrow keys**, so **every element must be focusable**.
- **should** **Indicate focus with the platform's appearance**: in **iPadOS and macOS** the system draws a **focused list item with white text on a background highlight in the app's accent colour** and **unfocused items with the standard text colour on a gray highlight** (developer: `UICollectionView`, `NSTableView`).
- **should** **Use a focus ring for a text or search field but a highlight in a list or collection**: a ring can outline an item that fills a cell (a photo), but **highlighting the entire row is usually easier to read** in lists and collections.

### Platform considerations
- **iOS, watchOS:** not supported.

#### iPadOS
- **iPadOS 15 and later** defines a focus system for **keyboard navigation** of **text fields, text views, sidebars, collection views and custom views**.
- **Similar to tvOS** (move a focus indicator to an item, then select), **but different in feel**: **tvOS uses directional focus** (the same swipe/arrow-key gesture reaches **every** component); **iPadOS defines focus groups** (specific areas: sidebar, grid, list) with **two keyboard interactions**:
  - **Tab** moves focus **among focus groups** (sidebars, grids, other areas).
  - **Arrow keys** give **directional focus similar to tvOS, but only within the same focus group** (through a list or sidebar).
- Components show focus with **the halo effect** or **the highlighted appearance**.
- **Halo (focus ring):** a **customisable outline** around the component; applies to **custom views** and to **fully opaque content in a cell (an image)**. (Illustrated: a photo grid where the focused photo has a **square outline**, and a version with a **rounded-rectangle** outline.)
- **should** **Customise the halo when necessary**: by default the system **infers the halo from the item's shape**; you can **refine it to match contours** (rounded corners, Bézier shapes) and **adjust its position if another component occludes or clips it** (a badge above the halo; a parent not clipping it) (developer: `UIFocusHaloEffect`).
- **Highlighted appearance** (text in the accent colour) **also indicates focus but is not a focus effect**; it occurs **automatically when people select a collection-view cell with content configurations** (developer: `UICollectionViewCell`). (Illustrated: a menu list with the second item's **icon and title in a red accent**.)
- **should** **Make focus move through custom views sensibly**: pressing Tab moves through focus groups **in reading order (leading → trailing, top → bottom)**; adjust for custom views: to go **down a vertical stack before moving to the next view**, mark **the stack container as one focus group** (developer: `focusGroupIdentifier`).
- **should** **Set item priority within a group**: when a group receives focus its **primary item** gets focus too, so people reach the likely item quickly; **raise an item's priority to make it primary** (developer: `UIFocusGroupPriority`).

#### tvOS
- **should** **In full screen, let gestures act on the content, not on focus**: a full-screen item **doesn't show focus**, so people assume gestures affect **the object**.
- **must not** **Display a pointer**: people expect to **navigate a fixed set of items by focus**, not drag a tiny pointer across a huge screen; **free-form movement may fit gameplay** (hidden objects, flying a plane), but **use the focus model for menus and other UI**; if a pointer is required make it **highly visible and integrated**.
- **should** **Design for the focus states**: **up to five distinct states**; focusing usually **raises scale**, so **supply larger assets so they stay sharp** and **make sure the larger item doesn't crowd the surroundings**. States (illustrated with a **button over a photograph**):

| State | Meaning | Look |
|---|---|---|
| **Unfocused** | the viewer hasn't brought focus to the item; **less prominent than focused** | **small drop shadow** (very close to the content behind), **translucent background** infused with the content's colours, **high-contrast text** |
| **Focused** | the viewer brings focus to it; **stands out through elevation to the foreground, illumination and animation** | **larger** than unfocused, **drop shadow further away**, **opaque white background**, **black text** |
| **Highlighted** | the viewer **chooses** the focused item; **instant feedback** (e.g. a button **briefly inverts its colours and animates** before its selected look) | **same size as unfocused**, **shadow a little farther from the surface**, **opaque white background, black text** |
| **Selected** | the viewer **has chosen or activated** it (e.g. a **heart-shaped favourite button filled** when selected, empty when deselected) | **same size as unfocused**, **small shadow close to the content**, **opaque white, black text** |
| **Unavailable** | the viewer **can't focus or choose** it; **appears inactive** | **same size**, **no drop shadow** (rests on the content), **translucent tinted background**, **low-contrast text** |
- (developer: "Adding user-focusable elements to a tvOS app").

#### visionOS
- visionOS supports **the same focus system as iPadOS and tvOS**, so people can use **a connected keyboard or game controller** with apps and the system.
- **Note (callout):** when people **look** at a virtual object to target it, the system uses **the hover effect, not a focus effect** (see Eyes); **the hover effect is unrelated to the focus system**.

## Specs & values
| Item | Value |
|---|---|
| tvOS focus states | **up to 5**: unfocused · focused · highlighted · selected · unavailable |
| iPadOS keyboard model | **Tab** between focus groups; **arrow keys** within a group (directional focus) |
| iPadOS versions | focus system since **iPadOS 15** |
| Default focused list-item look (iPadOS/macOS) | **white text** on an **accent-colour highlight**; unfocused: **standard text colour** on **gray highlight** |
| Field vs list indicator | **ring** for text/search fields; **highlight** for lists and collections |
| tvOS scale | focused item is **larger**; supply larger assets |
| Pointer | **avoid** on tvOS (unless gameplay needs it) |
| Developer APIs named | `UICollectionView`, `NSTableView`, `UIFocusHaloEffect`, `UICollectionViewCell` (content configurations), `focusGroupIdentifier`, `UIFocusGroupPriority`, TVML Focus Attributes, "Focus-based navigation", "About focus interactions for Apple TV", "Adding user-focusable elements to a tvOS app" |
| Videos (links only, not watched) | Design for spatial input (WWDC23 10073), Design for spatial user interfaces (WWDC23 10076), Design for the iPadOS pointer (WWDC20 10640) |
| Apple's Related list | Eyes (✓), Keyboards (✓ `inputs/keyboards.md`) |
| Change log | Oct 24 2023 · Jun 21 2023 |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple gradient card** (tinted purple on purpose) with **a pale-lilac circular D-pad**: a **ring**, **four triangular arrows (up, down, left, right)** and **a central disc**, over **construction lines**. Alt: "A sketch of a frame around a circular interface element, suggesting locking focus on an object."
- **Halo examples (screenshots 4–5):** a **3 × 2 photo grid** (Joshua tree at sunset, a **sailboat on a golden sea (focused, blue outline)**, an orange dune, a snowy peak in clouds, a starry lake at night, a black-and-white sea stack): first with **square corners and a blue rectangular halo**, then with **rounded tiles and a rounded blue halo** **(from screenshot: the photos and colour)**.
- **Highlighted appearance (screenshot 5):** a **dark rounded list of six rows**, each **a star outline + "Title"**; the **second row's star and title are red on a slightly lighter row background** **(from screenshot: the labels "Title")**.
- **tvOS states (screenshots 7–8):** a table with **five pill labels over the same night-lake photo**: **"Unfocused"** (dark translucent pill, light text), **"Focused"** (big **white pill**, black text), **"Highlighted"** (white pill, same size as unfocused), **"Selected"** (white pill), **"Unavailable"** (dim translucent pill, low contrast); the descriptions are in the fetch **(from screenshot: the labels inside the pills)**.
- **Callouts:** the visionOS **Note** as a dark rounded box (screenshot 8).
- **Videos (last screenshot):** three cards: a **heart glyph in a white circle next to a pinching hand** (Design for spatial input), **a wall of tiny system windows** (Design for spatial user interfaces), a **3D "Back" chevron button** (Design for the iPadOS pointer). **Change log** shows the first row "October 24, 2023: Clarified the difference between focus effects and the visionOS hover effect."; the second row is below the cut.
- **Page chrome (from screenshot):** TOC = Focus and selection · Best practices · Platform considerations · Resources · Change log; the platform strip: **iPad, Mac, TV, Vision Pro lit; iPhone and Watch dimmed**; side navigation: **Inputs** open with **Focus and selection** ringed (browser focus), **Technologies** below.
- **Mismatches / notes:**
  1. The platform strip lights **macOS** although the "Platform considerations" text only has **iPadOS, tvOS, visionOS** sections (the intro and best practices discuss macOS).
  2. The five tvOS state labels are **inside the images** (a button-shaped pill); the fetched alt texts describe the buttons without those words.
  3. **`highlighted`** appears **twice with different meanings**: the **tvOS "Highlighted" state** (chosen focused item) vs the **iPadOS "highlighted appearance"** (accent-coloured text; "not a focus effect").
  4. The screenshots were taken in **dark appearance**.
- **Catalog:** the script found **0 comparisons** (the halo and state images are single images or table cells, which it doesn't read). **Not catalogued:** the tvOS state table (5 images), the two halo illustrations, the highlighted-list illustration. Catalog stays at **216**, existing IDs unchanged.

## Visual examples (catalog)
No new catalog entries (see above). If the five tvOS state images are wanted as a catalog set, the fetch script would need to read images inside **table cells**.

## Web translation
The web already has a **focus model**: **keyboard focus, `:focus-visible`, tab order, roving tabindex, ARIA selection state**. This page supplies the **rules for when and how focus is shown, moved and grouped**, and for **10-foot/TV UIs**.

| HIG rule | Web implementation |
|---|---|
| Focus = what the input will act on | A **visible focus indicator on every focusable element**, using **`:focus-visible`** (keyboard/remote/controller; not on mouse click for buttons); **never `outline: none`** without a replacement (Buttons GATE); contrast **≥ 3:1** against adjacent colours (WCAG 2.4.11/2.4.13, Color gate). |
| Focusing may also select, except when it would shift context | **Selection follows focus only when harmless** (tabs with automatic activation, a list filter preview); **activation stays separate when it navigates or has side effects** (manual-activation tabs, menus: `Enter`/`Space`). `aria-selected` (tabs, listbox options), `aria-current`, `aria-pressed`: **selection state is separate from `:focus`**. |
| Rely on system focus effects | **Use native controls and the browser's default focus ring**, restyled via **`outline`/`outline-offset`** and **`:focus-visible`** tokens rather than custom scripting; custom effects only when the default fails contrast or clips. |
| Don't move focus without interaction | **Never call `.focus()` on load, on data refresh or after async updates** unless the user just acted; after **opening a dialog** move focus **into** it and **restore it to the trigger on close**; when the focused element is **removed**, move focus to the **nearest logical neighbour (next/previous item)** if the user was **keyboard-navigating**, else **just clear the indicator** (Apple's exception vs default). |
| Platform-consistent focus scope | On desktop web with **Tab-based access** every control is focusable natively; for **TV/remote or game-controller UIs** (10-foot) **every interactive element must be reachable with arrows** (CSS **spatial navigation** where available, or a key handler `ArrowUp/Down/Left/Right`); don't expect a mouse. |
| Focus indicator consistent with the platform | Match **OS conventions**: **accent-colour highlight with white text** for selected/focused rows in desktop-style lists (`Highlight`/`HighlightText` system colours or accent tokens), **a ring for inputs**. |
| Ring for fields, highlight for lists/collections | **Text inputs / search: 2 px accent ring** (`outline`); **lists, tables, collections: whole-row background highlight** (`:focus-visible` on the row, `aria-selected` styling), not a ring around each thumbnail unless the thumbnail is the cell. |
| iPadOS focus groups: Tab between groups, arrows within | **Composite widgets = one tab stop, arrow keys inside** (**roving tabindex** or `aria-activedescendant`) for **toolbars, tablists, menus, listboxes, grids**; **Tab** moves to the next group; **`Home/End`, `PageUp/Down`** as APG specifies; **landmarks** and **skip links** to jump between big areas (sidebar, main). |
| Halo customised to shape; not clipped or occluded | `outline-offset` and **`border-radius` matching the element** (outlines follow `border-radius` in modern browsers); make sure **parents don't `overflow: hidden`** the ring (use `outline-offset: -2px` or padding); keep **badges above the ring** with `z-index`. |
| Highlighted appearance is not a focus effect | Keep **selected/hover styling separate from focus styling** (`:hover` / `[aria-selected="true"]` vs `:focus-visible`), so an item can be **selected without focus** and **focused without being selected**, and both are visible together (e.g. **selection background + focus ring**). |
| Focus order sensible; identify groups | **DOM order = reading order** (leading → trailing, top → bottom; mirror in RTL); **never positive `tabindex`**; group vertical stacks as **one composite** so arrows go down before Tab moves on. |
| Primary item per group gets focus | When focus enters a composite, **land on the last-used or default item** (`tabindex="0"` on it, `-1` on the rest); in dialogs **initial focus = the safest primary action or first field** (Alerts guidance). |
| tvOS: gestures in full screen act on content, not focus | In **full-screen viewers** (video, gallery) **arrow keys/swipes control the content** (seek, next photo); **`Esc`/Back exits**; don't show a focus ring inside the viewer; **restore focus to the launching item on exit**. |
| tvOS: no pointer | **10-foot UIs**: hide the cursor (`cursor: none`) and **use focus navigation**; if a pointer is essential (map, game) make it **large and high contrast**. |
| Five focus states | **Style five states explicitly** for TV/large-target UIs: **default** (translucent, small shadow) · **focused** (`:focus-visible`: **scale 1.05–1.1**, larger shadow, opaque light background, dark text) · **pressed/"highlighted"** (`:active`: brief invert/animation) · **selected** (`[aria-pressed="true"]`/`[aria-selected]`: filled) · **unavailable** (dim, **no shadow**, low-contrast). Supply **larger assets** so **scaled** images stay sharp (`srcset`), and leave **room** so the scaled item doesn't crowd neighbours (`transform: scale` doesn't reflow). |
| Unavailable = not focusable (tvOS) | **Tension with the skill's menu decision** (`menus.md`: inactive items in regular menus are **dimmed but focusable, `aria-disabled`**; hidden in context menus): on **web menus and toolbars keep unavailable items focusable so screen-reader users can discover them**; on **TV grids** Apple's rule (**can't focus**) is acceptable; choose per surface and document it. |
| visionOS: hover effect is not focus | **Don't reuse focus styles as the "look" hover state on spatial UIs**; provide **both** (`:hover` from the system's gaze highlight, `:focus-visible` from keyboard) and keep them visually **distinct** (`eyes.md`). |
| Native-only APIs | Native teams use **UIKit focus engine** (`UIFocusHaloEffect`, focus groups) or SwiftUI `focusable`/`focusSection`; the web uses **`:focus-visible`, `tabindex`, ARIA composite widgets**. |

Field-note cross-links:
- `hig/inputs/eyes.md` (✓): Apple's Related page; **hover effect vs focus effect**, the Note repeats that they're unrelated; **consistent**. `hig/components/selection-and-input/toggles.md`, `sliders.md`, `segmented-controls.md`, `virtual-keyboards.md` (✓): their "not yet ingested: Focus and selection" lines are now updated; keyboard/remote behaviour of those controls follows this page. `hig/components/layout/lockups.md` (✓) and `hig/components/system-experiences/top-shelf.md` (✓): the tvOS **focus-grow with parallax** and label-on-focus behaviour; `hig/components/layout/collections.md` (✓), `lists-and-tables.md` (✓), `sidebars.md` (✓), `tab-views.md` (✓): row highlight vs ring, focus groups (sidebar, list), keyboard navigation; `hig/foundations/images.md` (✓): parallax effect.
- `hig/components/menus/menus.md` (✓) / `the-menu-bar.md` (✓): **unavailable items** decision (dimmed + focusable, `aria-disabled`), which differs from tvOS "unavailable can't take focus" (see table above); `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: removed focus outline is a violation; `hig/foundations/accessibility.md` (✓) and `color.md` (✓ CRITICAL): focus visibility and contrast.
- `field-notes/engineering-gotchas.md` (a missing `focus-visible` ring is worse in dark mode) and `field-notes/components.md` (input recipe with `focus:ring-2`) are **consistent** with the ring-for-fields rule; **no conflict**.
- Ingested since: Keyboards (✓ `inputs/keyboards.md`: Full Keyboard Access, the iPadOS "no keyboard navigation for controls" note). Not yet ingested (linked from this page): none.

## Checklist
- [ ] Every interactive element has a **visible `:focus-visible` indicator** with **≥ 3:1** contrast; no bare `outline: none`.
- [ ] **Selection state is separate from focus** (`aria-selected`/`aria-pressed`/`aria-current`); both are visible together.
- [ ] **Focus is never moved without a user action**; after removal it goes to the **nearest neighbour** (keyboard) or is cleared; dialogs **restore focus to the trigger**.
- [ ] **Tab order = reading order**, **no positive tabindex**; composite widgets are **one tab stop with arrows inside** (roving tabindex).
- [ ] **Ring on fields, whole-row highlight in lists/collections**; rings follow the element's radius and aren't **clipped** by parents.
- [ ] Each composite **lands on a sensible primary item**.
- [ ] TV/remote UIs: **all elements reachable with arrows**, **five states styled**, **larger assets** for scaled focus, **no pointer**, full-screen viewers use **gestures/arrows on the content** and **`Esc`** to exit.
- [ ] Unavailable items follow the **surface's rule** (web menus: dimmed + focusable; TV grids: not focusable) and it is documented.

## Related
- Ingested: Eyes (✓), Toggles (✓), Sliders (✓), Segmented controls (✓), Virtual keyboards (✓), Lockups (✓), Top Shelf (✓), Collections (✓), Lists and tables (✓), Sidebars (✓), Tab views (✓), Images (✓), Menus (✓), Buttons (✓ CRITICAL), Accessibility (✓), Color (✓ CRITICAL).
- Ingested since: Keyboards (✓ `inputs/keyboards.md`). Not yet ingested (linked from this page): none.
- Developer docs: TVML Focus Attributes, UIKit "Focus-based navigation", "About focus interactions for Apple TV", `UIFocusHaloEffect`, `focusGroupIdentifier`, `UIFocusGroupPriority`.
- Videos: Design for spatial input (WWDC23 10073), Design for spatial user interfaces (WWDC23 10076), Design for the iPadOS pointer (WWDC20 10640).
