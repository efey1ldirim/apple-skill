# Toolbars
Source: https://developer.apple.com/design/human-interface-guidelines/toolbars · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS, tvOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for tvOS") · Ingested: 2026-09-29 · Apple last updated: **December 16, 2025** ("Updated guidance for Liquid Glass"). One DocC fetch, read in full. **18 screenshots** (light-mode page, hero → the Videos heading with its thumbnail "Get to know the new design system") were compared with the fetched text, captions and image alt text line by line: everything matches; the screenshots are contiguous. **Read from the fetch only:** the **four change-log rows**, the video's URL, dark variants, and the **Standard/Compact tab** contents beyond the two screenshots' visible states. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
A toolbar is **one or more sets of controls along the top or bottom edge of a view**, grouped into **leading, centre and trailing sections**, holding **the view title, navigation (Back, search) and actions**. Choose items **deliberately** (overflow moves the rest), prefer **plain, unbordered symbols** to text, use **one prominent primary action on the trailing side**, **group by function (max about three groups)**, keep **text-labelled actions separate from symbol actions**, **reduce backgrounds and tints**, and on macOS **mirror every toolbar item as a menu-bar command**. A **tab bar** is different: it navigates **between areas**.

## Rules

### Framing (intro)
- A toolbar is **one or more sets of controls arranged horizontally along the top or bottom edge of the view**, **grouped into logical sections**.
- Toolbars **act on content in the view, facilitate navigation and orient people**; they hold **three kinds of content:**
  - **the title of the current view**;
  - **navigation controls** (back and forward) and **search fields**;
  - **actions / bar items**: buttons and menus.
- **Contrast:** a **tab bar** is **specifically for navigating between areas of an app**.
- Hero: a **Back** circle on the leading edge and **Compose**, **Share** and **More (⋯)** on the trailing edge, with margin and height arrows **(from screenshot)**.

### Best practices
- **should** **Choose items deliberately to avoid overcrowding.** People must **distinguish and activate** each item. **Define which items move to the overflow menu as the bar narrows.**
  - **Note:** **macOS and iPadOS add an overflow menu automatically** when items no longer fit. **Don't add one manually**, and **avoid layouts that overflow by default**.
- **may** **Add a More menu for additional actions**, **prioritising the less important ones** for it. **Include all actions in the bar if possible**; add More **only if you really need it**.
  - Illustration (tabs *Standard* / *Compact*): the **standard macOS Notes toolbar** (window title "Notes, 103 notes", sidebar and back buttons, then compose, text format "Aa", checklist, table, attachment, "Writing Tools", lock, share, **⋯ More** menu, search) with the **More menu open** (Pin Note highlighted, Lock Note, Find in Note, Move to ▸, Recent Notes ▸, Math Results ▸, Attachment Viewer ▸, Delete Note). **Compact:** the window is narrow and **items collapse into an overflow ("»") menu** that includes the More menu (View Options ▸, **New Note** highlighted, Checklist, Table, Media ▸, Writing Tools, Lock ▸, Share, Note Actions ▸) **(from screenshot)**. Captions: **"The standard toolbar in macOS Notes includes a More menu with extra commands."** / **"As the window narrows, the More menu moves into an overflow menu along with other toolbar items that no longer fit."**
- **may** **In iPadOS and macOS apps, let people customise the toolbar with their most common items.** Especially for apps with **many items**, **advanced functionality not everyone needs**, or **long-session use**; e.g. **editing actions**, since people use different editing commands by work style and project.
- **should** **Reduce toolbar backgrounds and tinted controls.** Custom backgrounds and appearances may **overlay or interfere with the system's background effects**. Let **the content layer inform the toolbar's colour and appearance**, and use a **`ScrollEdgeEffectStyle`** when needed to **distinguish the toolbar area from content**; this expresses the app's personality **without distracting from content**.
- **should not** **Apply a similar colour to toolbar item labels and content-layer backgrounds.** With bright, colourful content, **prefer the toolbar's default monochromatic appearance** (see *Color › Liquid Glass color*).
- **should** **Prefer standard components in a toolbar.** By default **buttons, text fields, headers and footers have corner radii concentric with the bar's corners**; **a custom component's radius must also be concentric with the bar's corners**.
- **may** **Temporarily hide toolbars for a distraction-free experience.** Do it **contextually when it makes most sense** and **offer ways to reliably restore** hidden interface elements (*Going full screen*; visionOS: *Immersive experiences*).

### Titles
- **should** **Give each window a useful title**: it confirms **location** and **differentiates multiple open windows**. **If titling seems redundant, leave the title area empty**: Notes doesn't title the current note in a single window (the first line of content is enough); **in separate windows the system titles them with the first line** of content.
- **must not** **Title windows with the app name**: it says nothing about content hierarchy or the window or area.
- **should** **Write a concise title**: **a word or short phrase** that distils the purpose of the window or view, **under 15 characters** so there's room for other controls.

### Navigation
- A toolbar with navigation controls sits **at the top of a window** and helps people **move through a hierarchy**; it often contains a **search field** for quick navigation between areas or content. **In iOS a navigation-specific toolbar is sometimes called a navigation bar.**
- **must** **Use the standard Back and Close buttons.** People know **Back retraces steps through a hierarchy** and **Close closes a modal view**. **Prefer the standard symbols; don't use a text label that says Back or Close.** A **custom version** must **look the same, behave as expected, match the interface and be implemented consistently** (*Icons*).
  - **✗** A **capsule Back button** with the chevron **and the word "Back"**. **✓** The **standard circular Back** with just the chevron (catalog `toolbars-02`).

### Actions
- **should** **Provide actions that support the main tasks.** Prioritise **the commands people are most likely to want**: often the most frequent, but sometimes those that map to **the highest-level or most important objects**.
- **must** **Make each control's meaning clear.** **Don't make people guess or experiment.** **Prefer simple, recognisable symbols to text**, **except for actions like *edit* that symbols don't represent well** (*Standard icons*).
  - **✗** A group with **text labels "Filter", "Delete", "New"**. **✓** The same group with **symbols (filter lines, trash, plus)** (catalog `toolbars-03`).
- **should** **Prefer system-provided symbols without borders.** They're familiar, **automatically get colouring and vibrancy** and respond consistently. **Borders (outlined circle symbols) aren't needed** because **the section provides a visible container**, and **the system defines hover and selection states** (*SF Symbols*).
  - **✗** Filter and More as **circle-outlined symbols**. **✓** The same as **plain symbols** (catalog `toolbars-04`).
- **must** **Use `.prominent` for key actions such as Done or Submit.** It **separates and tints** the action for **a clear focal point**. **Specify only one primary action, on the trailing side.** Illustration: an ungrouped **Filter** button leading and a **blue Done (checkmark)** trailing **(from screenshot)**.

### Item groupings
- Items go in **three places: leading edge, centre area, trailing edge**, "familiar homes for navigation, window/document titles, common actions and search":
  - **Leading edge.** **Return to the previous document** and **show/hide a sidebar** at the far edge, then the **view title**; next to it a **document menu** with **standard and app-specific commands for the document as a whole (Duplicate, Rename, Move, Export)**. **Leading-edge items aren't customisable**, so they're always available.
  - **Centre area.** **Common, useful controls**; the **title can sit here** if not on the leading edge. **On macOS and iPadOS people can add, remove and rearrange items here** (if you allow customisation) and **items here collapse into the system-managed overflow menu** as the window shrinks.
  - **Trailing edge.** **Important items that must stay available**, **buttons that open nearby inspectors**, **an optional search field**, the **More menu** (extra items, customisation support), and **a primary action like Done** when one exists. **Trailing items stay visible at all window sizes.**
  - Illustration: Freeform's iPad toolbar with labels **Leading** (back chevron + "Title" with a small dot), **Center** (a group of six tool icons), **Trailing** (undo, share, ⋯ and a compose button) **(from screenshot)**.
- **may** **To place items in groups, pin them to the leading edge, centre or trailing edge and insert space between buttons or items where appropriate.**
- **should** **Group items logically by function and frequency**: Keynote has sections for **presentation-level commands, playback commands and object insertion**.
- **should** **Put navigation controls and critical actions (Done, Close, Save) in dedicated, familiar, visually distinct sections** to reflect their importance.
  - **✗** An iPhone toolbar with **undo, redo, tool and More all in one trailing section**. **✓** **Undo/redo grouped on the leading edge** and **tool + More on the trailing edge** (catalog `toolbars-05`).
- **should** **Keep groupings and placement consistent across platforms**, so people trust the app behaves the same everywhere.
- **should** **Minimise the number of groups**: too many clutter the bar even on iPad and Mac. **Aim for a maximum of three.**
- **must** **Keep text-labelled actions separate.** A text action next to a symbol action can **look like one combined action** and **several text buttons can run together**. **Separate them with fixed space** (`UIBarButtonItem.SystemItem.fixedSpace`).
  - **✗** **"Edit" and a Share symbol in one capsule**. **✓** Edit and Share **each in its own capsule** (catalog `toolbars-06`).

### Platform considerations
- **tvOS:** no additional considerations.

#### iOS
- **should** **Prioritise only the most important items in the main toolbar area**: space is limited, **include the essential actions first** and **create a More menu for the rest**.
- **should** **Use a large title to stay oriented while navigating and scrolling.** By default **the large title shrinks to a standard title as people scroll and returns to large at the top** (`prefersLargeTitles`).

#### iPadOS
- **may** **Combine a toolbar with a tab bar**: they **coexist in the same horizontal space at the top of the view**, useful to **navigate between a few main areas while keeping the window's full width for content** (*Layout*, *Windows*).

#### macOS
- The toolbar sits **in the frame at the top of a window, below or integrated with the title bar**; **window titles can display inline with controls** and **toolbar items don't include a bezel**. Illustration: a Finder window with callouts **Toolbar** and **Frame** (back/forward chevrons, title "Documents", view switcher, sort, share, tag, more, search) **(from screenshot)**.
- **must** **Make every toolbar item available as a command in the menu bar.** People can **customise or hide** the toolbar, so it **can't be the only place** for a command. **But don't add a toolbar item for every menu item**: not every command is important or frequent enough.

#### visionOS
- The system toolbar appears **along the bottom edge of a window, above the window-management controls, in a parallel plane slightly in front of the window on the z-axis** (Notes screenshot: a rounded dark bar with undo, redo, a divider, Aa, checklist, table, attachment, markup) **(from screenshot)**.
- **A variable blur** in the bar background keeps items legible as content scrolls behind while **the view's glass material stays uniform and undivided**.
- You can supply **a symbol or a text label** per item; **looking at a symbol item reveals its text label** in visionOS.
- **should** **Prefer the system-provided toolbar**: consistent, familiar, **optimised for eye and hand input**, and **placed automatically** relative to its window. Illustration: a bar with four **"Label"** items, the third **selected** **(from screenshot)**.
- **must not** **Create a vertical toolbar**: **visionOS tab bars are vertical**, so it would confuse people.
- **should** **Prevent windows from resizing below the toolbar's width**: **visionOS has no menu bar** listing an app's actions, so the bar must give **reliable access to essential controls at any window size**.
- **may** **Offer contextual toolbar controls in a modal state** (a photo editor's multi-step task uses different controls) and **reinstate the window's standard toolbar when the state ends**.
- **should not** **Use a pull-down menu in a toolbar**: hard to discover, clutters, and **at the bottom edge it may cover the window controls** (*Pull-down buttons*).

#### watchOS
- A **toolbar button** offers important functionality **in a view showing related content**; place buttons **in the top corners or along the bottom**; **above scrolling content they stay visible while content scrolls under them**. Illustrations: **top** buttons (an "i" info and a "+" beside the time and blue title) and **bottom** buttons (a location arrow and a search magnifier) **(from screenshot)** (catalog `toolbars-07`; SwiftUI `topBarLeading`, `topBarTrailing`, `bottomBar`).
- **A button can also sit in the scrolling view**: **hidden until people scroll up to reveal it**; since **people often scroll to the top, discovery is automatic** (catalog `toolbars-08`: a list with a green **"Action"** capsule above the first item once revealed; SwiftUI `primaryAction`).
- **should** **Use a scrolling toolbar button for an important action that isn't the app's primary function**: Mail puts **New Message** in a toolbar button at the top of the **Inbox** (its main purpose is the message list, and compose is closely related).

## Specs & values

| Item | Value |
|---|---|
| Content | title · navigation (back/forward, search) · actions (buttons, menus) |
| Sections | leading · centre · trailing (leading not customisable; trailing always visible; centre customisable and collapsible) |
| Groups | **≤ about 3**; keep text-labelled actions apart (fixed space) |
| Title | **< 15 characters**, word or short phrase; never the app name; may be empty |
| Back / Close | standard symbols; **no "Back"/"Close" text** |
| Actions | symbols preferred, no circle borders; text only where no symbol fits (*edit*) |
| Primary action | **one** `.prominent` (tinted) action, trailing (e.g. Done, Submit) |
| Overflow | system-managed on macOS/iPadOS; don't build one by hand; More menu for the rest |
| Backgrounds/tints | minimal; content layer informs colour; scroll edge effect when needed; concentric corner radii |
| Hiding | contextual; always reliably restorable |
| iOS | important items first, More for the rest; large title collapses on scroll |
| iPadOS | can combine with a tab bar in the same top space |
| macOS | inside the frame (below or merged with the title bar), no bezels; every item also a menu-bar command |
| visionOS | bottom edge, parallel plane in front, variable blur; symbol or text (label revealed on gaze); no vertical bar; window ≥ toolbar width; no pull-down; contextual controls in modal states |
| watchOS | corner or bottom buttons; scrolling button hidden until scroll up |
| Change log | Dec 16, 2025 Liquid Glass · Jun 9, 2025 item grouping, symbols, navigation-bar guidance merged · Jun 21, 2023 visionOS · Jun 5, 2023 watchOS |
| Developer docs | SwiftUI `Toolbars` · UIKit `UIToolbar` · AppKit `NSToolbar` |
| Video | "Get to know the new design system" (WWDC25) |
| Related HIG pages | Sidebars ✓ · Tab bars ✓ · Layout ✓ CRITICAL · Buttons ✓ CRITICAL · Search fields ✓ `hig/components/navigation/search-fields.md` (Sidebars ✓ `hig/components/navigation/sidebars.md`; Tab bars ✓ `hig/components/navigation/tab-bars.md`) |

## Visual notes (from screenshots)
- **Hero:** a red-to-pink card with a **light circular Back button** at the leading side, a wide **horizontal double arrow** between it and a **circular Compose** button, a **capsule holding Share and ⋯** at the trailing side, edge **margin brackets** at both ends and **vertical arrows above and below** the bar marking its height and its distance from the edge **(from screenshot)**.
- **Notes (macOS) pair:** two tabs, **Standard** (all items and the More menu open, a **highlighted first item in yellow-orange**) and **Compact** (overflow "»" menu, **New Note highlighted**). Icons are **plain glyphs inside light capsule sections** **(from screenshot)**.
- **Do/don't images (`toolbars-02 … 06`)** are on light card backgrounds with the standard grey ✗ and green ✓ badges below each; they show **capsule sections of glass**, **plain versus circle-outlined symbols**, and the **grouping of leading/trailing sections**.
- **Diagrams:** the Freeform iPad anatomy with **Leading / Center / Trailing** callouts and hairline leaders; the Finder diagram with **Toolbar / Frame** callouts; the visionOS Notes bar over a room photo; the watchOS pairs (top/bottom buttons; hidden/shown scrolling button).
- **Note callout:** grey outlined card (neutral) about the automatic overflow menu.
- **Page chrome (from screenshot):** the URL bar in the first screenshots shows `…/human-interface-guidelines/toolbars`. The TOC reads Toolbars · Best practices · Titles · Navigation · Actions · Item groupings · Platform considerations · Resources · Change log. The side navigation shows **Toolbars** in bold after The menu bar, closing the **Menus and actions** group; the next group is **Navigation and search** (Path controls, Search fields, Sidebars, Tab bars, Token fields). The last screenshot ends on the **Videos** heading; the change-log rows come from the fetch.
- **Catalog:** `toolbars-01` (Standard/Compact compare), `-02 … -06` (five do/don't pairs), `-07`, `-08` (watchOS compare pairs). Nothing is measured.
- **Text that is not in the fetch:** the labels inside pictures listed above.

## Web translation
On the web a toolbar is a **`role="toolbar"` control strip** for a view or component: the **app's top bar in an editor or tool**, a **document toolbar**, a **table/list action bar**, a **media control bar**. Site header navigation is a `nav`, not a toolbar (`tab-views.md`, `sidebars`). Use the **ornament-style attached bar** (`ornaments.md`) when the strip belongs to a panel or card edge.

| HIG rule | Web implementation |
|---|---|
| Sections: title · navigation · actions; leading / centre / trailing | A flex bar with three regions: `.tb-start` (Back, sidebar toggle, title, document menu), `.tb-center` (common controls), `.tb-end` (inspector toggles, search, More, primary action), `justify-content: space-between`, logical properties for RTL. Group each cluster as `role="group"` with a name. |
| `role="toolbar"` semantics | `<div role="toolbar" aria-label="Note actions" aria-orientation="horizontal">` with **roving `tabindex`**: **Left/Right** move between items, **Home/End** jump, **Tab** leaves the toolbar; only one item in the tab order; toggles use `aria-pressed`, menu buttons `aria-haspopup="menu"`. A toolbar of **one or two** buttons needs no toolbar role, just buttons. |
| Overflow / More menu | **The browser gives no automatic overflow, so build it**: priority+ pattern with `ResizeObserver`; **trailing-edge items never collapse**, **leading items never collapse**, centre items collapse **lowest priority first** into a **"More" menu button** (`pull-down-buttons.md`, `menus.md`) rendered **at the trailing end**. Keep the hidden items reachable in DOM order (or render both and toggle `hidden`) so no command disappears, and **avoid designs that overflow at the default width**. (Apple's "don't add an overflow menu manually" applies to native platforms; on web the equivalent rule is *one* overflow control, never two.) |
| Choose items deliberately; no overcrowding | **≤ 5–7 visible controls** at desktop width, ≥ 8 px spacing (Buttons gate), **≥ 44 × 44 px hit regions on touch** even when the glyph is 20 px (`buttons.md`); rare actions go to More. |
| Customisable toolbar (iPadOS/macOS) | For heavy tools let people **add/remove/reorder centre items** (a "Customize Toolbar…" View-menu item, drag handles with keyboard alternatives) and **persist the layout per user**; keep leading items fixed. |
| Reduce backgrounds and tints; glass; scroll edge | A neutral surface (`materials.md`: translucent glass with an opaque fallback under `prefers-reduced-transparency`/`forced-colors`); **no coloured toolbar backgrounds or tinted icons by default**; use a **scroll-edge fade or hairline** (gradient `mask`, `border-block-end` appearing when `scrollTop > 0`) instead of colour to separate bar from content; **don't tint labels the same hue as content backgrounds** (`color.md`). |
| Concentric corner radii | Inner controls' radius = **bar radius − bar padding** (`border-radius: calc(var(--bar-r) - var(--bar-pad))`), buttons as capsules inside a capsule section; set the values with CSS variables so custom items match. |
| Hide temporarily; restore reliably | Only in **focus/immersive modes** (reading, full-screen editing, media): auto-hide on scroll down and **reveal on scroll up, tap, key press or focus**; a **visible affordance** and Esc/toolbar shortcut restores it; never trap keyboard users (`going-full-screen.md`). |
| Titles: useful, ≤ 15 characters, not the app name | The view title in the bar is the page's `<h1>` or a `role="heading"` (also `document.title` for multi-window); **short (under ~15 characters), no app name**, leave it empty when the content's first line already says it; for multiple windows/tabs the title differs per window. |
| Standard Back/Close buttons, symbols only | An icon-only **chevron Back** and **× Close** with `aria-label="Back"` / `"Close"` and a tooltip, **not** the words on screen; consistent everywhere; Back follows the app hierarchy (`history.back()` only when it matches), Close closes the modal and returns focus (`modality.md`). |
| Symbols over text; no circled symbols; clear meaning | Familiar glyphs (filter, trash, plus, share, ⋯) with accessible names and tooltips; use the **same glyph family and stroke weight** (Lucide/Phosphor, never SF Symbols artwork on the web); **no circle/box outlines** around glyphs: the section capsule is the container, hover/pressed/`aria-pressed` states come from the section style; text only for actions with no good symbol ("Edit"). |
| One prominent action, trailing | **One** filled/tinted **Done / Submit / Save** at the trailing edge (`btn-prominent`, Buttons gate: never a destructive primary); everything else neutral. |
| Group by function and frequency; ≤ 3 groups | Cluster by job (history: undo/redo; tools; view; share/export); **navigation and critical actions (Done, Close, Save) live in their own visually distinct sections**; at most about **three groups**, separated by a small gap or hairline, not by heavy dividers; same grouping across web, mobile and desktop layouts. |
| Keep text-labelled actions separate | When a text button ("Edit") sits beside an icon button (Share), give **each its own capsule/section or a fixed gap ≥ 8 px** so they don't read as one control; adjacent text buttons need a visible gap. |
| iOS: prioritise, large title | On phones show only the **essential actions** plus a **More** button; **large title** that collapses on scroll (`position: sticky` header + `IntersectionObserver` or CSS `animation-timeline: scroll()`; respect `prefers-reduced-motion`). |
| iPadOS: toolbar + tab bar | On tablets/wide layouts a **tab list and the action toolbar can share the top row**; on narrow viewports tabs move to a bottom bar (`tab-views.md`). |
| macOS: every toolbar item is also a menu command | Every toolbar action also appears in the **app menu / command palette** (`the-menu-bar.md`), since the toolbar can be hidden or customised; but **don't put every command in the toolbar**. |
| visionOS: bottom edge, no vertical bar, min width, no pull-down | The web analogue: **a bottom action bar** for touch-heavy tools is fine; **never a vertical toolbar next to a vertical tab list**; set the container's `min-inline-size` ≥ the bar's width so controls stay reachable; **avoid pull-down menus in a bottom bar** where the menu would cover the navigation, or open them **upward** and away from the screen bottom (flip). Contextual controls in a modal state swap in and **restore the standard bar on exit**. |
| watchOS: corner/bottom buttons, scrolling primary button | On tiny screens keep 1–2 corner buttons; a **primary action that scrolls away** can sit at the top of a list and become visible on scroll up (sticky reveal). |
| Accessibility | Bar has an accessible name; icon-only items named; disabled items keep focus with a reason; visible `:focus-visible` rings; `prefers-reduced-transparency` and `forced-colors` fallbacks; live regions only for results of actions, not for bar changes. |

Field-note cross-links:
- `hig/components/menus/buttons.md` (✓ CRITICAL): every toolbar button is a Buttons-gate button: hit region ≥ 44 px, names, tooltips on icon-only controls, hover/press/focus states, **exactly one prominent**; borderless buttons on a glass surface are the documented exception to "give a button a background shape".
- `hig/foundations/materials.md` (✓ CRITICAL) and `color.md` (✓ CRITICAL): the glass bar, contrast on blended backgrounds, the "reduce tints" rule and Liquid Glass colour guidance.
- `hig/foundations/layout.md` (✓ CRITICAL): concentric radii, safe areas, spacing around controls, space for bars at each width.
- `hig/components/menus/ornaments.md` (✓): visionOS toolbars are ornaments; same "attached, doesn't scroll" behaviour.
- `hig/components/menus/the-menu-bar.md` (✓): every toolbar item also a menu command; View › Show/Hide Toolbar and Customize Toolbar.
- `hig/components/menus/pull-down-buttons.md` (✓) and `menus.md` (✓): the More menu; avoid pull-downs in visionOS bottom bars.
- `hig/foundations/icons.md` (✓) and `sf-symbols.md` (✓): standard symbols, no circle outlines, icon source rule.
- `hig/patterns/going-full-screen.md` (✓): hide and restore.
- `hig/components/layout/tab-views.md` (✓), `split-views.md` (✓): tab bar vs toolbar and where each goes.
- No conflict with a field note. **Note on counts:** this page says **max about three groups**; the Buttons page says **one or two** prominent buttons (here: **exactly one**, consistent with the Nonplo rule).

## Checklist
- [ ] The bar has three regions (leading: back/sidebar/title; centre: common controls; trailing: search/More/primary) and **≤ ~3 groups**, with critical actions in their own section.
- [ ] Items are chosen deliberately; the rest sit behind **one** More/overflow menu; leading and trailing items never collapse.
- [ ] Controls are **plain symbols** with names and tooltips (no circles, no "Back"/"Close" text); text appears only where no symbol fits and is **separated** from symbol actions.
- [ ] **One** prominent trailing action; nothing tinted by default; background is neutral glass with a scroll-edge separation and concentric radii.
- [ ] `role="toolbar"` with roving focus and the full keyboard model; ≥ 44 px hit regions on touch; states and focus ring on every item.
- [ ] Titles are short (< ~15 chars), never the app name, and may be empty when content says it.
- [ ] Every toolbar command also exists in the app menu or palette; hidden/customised toolbars are restorable.
- [ ] Hiding is contextual and reliably reversible; contextual toolbars in modal states restore the standard one on exit.
- [ ] Layout and grouping match across breakpoints and platforms.

## Related
- Ingested: Buttons (✓ CRITICAL), Layout (✓ CRITICAL), Materials (✓ CRITICAL), Color (✓ CRITICAL), Menus (✓), Pull-down buttons (✓), Ornaments (✓), The menu bar (✓), Tab views (✓), Split views (✓), Going full screen (✓), Icons (✓), SF Symbols (✓).
- Ingested since: **Search fields** (✓ `hig/components/navigation/search-fields.md`: trailing-side toolbar search, bottom vs top search). Sidebars (✓ `hig/components/navigation/sidebars.md`). Tab bars (✓ `hig/components/navigation/tab-bars.md`: navigation not actions). Windows (✓ `components/presentation/windows.md`: window controls vs leading toolbar items). Not yet ingested: Immersive experiences.
- Developer docs: SwiftUI `Toolbars`, UIKit `UIToolbar`, AppKit `NSToolbar`, `ScrollEdgeEffectStyle`, `UIBarButtonItem.SystemItem.fixedSpace`, `prefersLargeTitles`.
- Video: "Get to know the new design system" (WWDC25).
