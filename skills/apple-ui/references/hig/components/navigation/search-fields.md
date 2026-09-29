# Search fields
Source: https://developer.apple.com/design/human-interface-guidelines/search-fields · Section: Components › Navigation and search · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; visionOS has "no additional considerations") · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (terminology and search-as-a-tab guidance in iOS refined; earlier rows: June 9, 2025 placement + tokens, September 12, 2023 platforms combined, June 5, 2023 watchOS). One DocC fetch, read in full. 11 screenshots so far (light-mode page, hero → the start of the Videos row; the Change log block was not in them) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the **change log** rows, the three video titles and links, the dark variants and the developer-doc names other than those visible in the screenshots. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A search field is an **editable text field with a Search icon, a Clear button and placeholder text**; it can carry a **scope bar** and **tokens** to narrow a search. Placeholder says **what can be searched**, results **appear as people type** when possible, **suggestions** (recent/predictive) speed things up, results are **simplified and prioritised**, and **where the field lives** (tab, toolbar, inline, sidebar, dedicated area) depends on the app's layout and how important search is.

## Rules

### Framing (intro)
- A search field is an **editable text field** showing a **Search icon**, a **Clear button** and **placeholder text** where people type what they look for.
- Search fields can use a **scope bar** and **tokens** to **filter and refine** the scope.
- **Patterns for reaching search differ by platform**, following the goals and design of the app.
- Systemwide search (Spotlight) is covered in the **Searching** pattern; developer guidance: *Adding a search interface to your app*.

### Best practices
- **should** **Use placeholder text to show what can be searched.** Useful to **reinforce the scope** or **teach the kind of content** search covers.
- **should** **Start searching immediately when the person types, if possible.** Results feel responsive because they are **refined continuously** as the text gets more specific.
- **may** **Show suggested search terms**: **recent searches before search begins**, or **predictive suggestions while typing**; helps people search faster even when search doesn't start immediately.
- **should** **Simplify results.** Put the **most relevant results first** so people scroll less; besides ranking by likelihood, consider **categorising** them.
- **may** **Let people filter results**, e.g. a **scope bar in the results area**.

### Scope bars and tokens
- Purpose: let people **narrow a search before or after** they run it.
- A **scope bar** is a control for **filtering/adjusting the scope**; a **token** is a **visual representation of a search term** that people can **select and edit**, and it **acts as a filter** for the other terms.
- **should** **Use a scope bar for clearly defined categories**; it moves people **from a broader to a narrower scope** (Mail on iPhone: whole mailbox → the mailbox being viewed).
- **should** **Default to the broader scope** and let people refine: the wider scope gives context for the full result set and steers them well when they narrow.
- **should** **Use tokens for common search terms or items.** A defined token gets a **visual container** that says "select and edit me as one item". Tokens can **clarify a term** (filter by a contact in Mail) or **focus on a set of attributes** (filter photos in Messages). The related macOS component is **Token fields**.
- **may** **Pair tokens with search suggestions**: people may not know which tokens exist, so suggestions **teach** them.

### Platform considerations
- **visionOS:** no additional considerations.

#### iOS
- **Three places** for the entry point: **a tab in a tab bar**, **a toolbar at the bottom or top**, or **inline with content**. The right one depends on the app's layout, content and navigation.

##### Search as a tab
- A search tab in the tab bar keeps search **visible and always available** while people switch sections. **Two styles:**
  - **Standard tab**: shown like the other tabs; tapping it goes to a **search landing page** with a **search field at the top**.
  - **Button appearance**: the search tab is a **separate button**; tapping it **focuses the field and shows the keyboard immediately**.
- **should** **Choose the standard tab** to **give suggestions, promote discovery and encourage exploration**: the landing page can show content or suggestions **before** the person taps the field. Good for apps with **varied rich content** (Apple TV shows genres and categories there so people see what exists before searching).
- **should** **Choose the button appearance** so people **find what they need fast**: the keyboard appears with the field above it, ready; it is a **more transient** experience that returns people **directly to the previous tab** when they leave search; ideal when search should **resolve quickly and seamlessly**.

##### Search in a toolbar
- **Bottom toolbar:** include search as an **expanded field** or a **toolbar button**, depending on available space; when tapped it **animates into a field above the keyboard**.
- **Top toolbar (navigation bar):** search appears as a **toolbar button**; when tapped it **animates into a field** above the keyboard, or **at the top if there is no room at the bottom**.
- **should** **Put search at the bottom when there's room**: add a field to an existing toolbar **or** make a toolbar whose only item is search. Best when search is a **priority** (easy to reach). Examples: **Settings** (search is the only item); **Mail** and **Notes** (search sits beside other important controls).
- **should** **Put search at the top** when it's important to **defer to content at the bottom** of the screen or **there is no bottom toolbar**; use it where covering content could interfere with the app's main function (**Wallet**: event passes stacked at the bottom).

##### Search as an inline field
- **should** **Use an inline field when placing it beside the content it searches strengthens that link**: filtering within **a single view**, showing the search applies **locally, not globally**; useful when the app has **more than one search field** or **location decides the scope**. Example: in **Music** the main search is a tab, but in the library an **inline field filters songs and albums**.
- **should** **When at the top, place the inline field above the list it searches** and **consider pinning it to the top toolbar when scrolling**, keeping it distinct from search elsewhere.

#### iPadOS, macOS
- Placement and behaviour are **similar**; if the app is on both, **keep the search experience as consistent as possible**.
- **should** **Put the field at the trailing side of the toolbar for many common uses.** Familiar pattern, especially for apps with **split views** that search across several columns (**Mail, Notes, Voice Memos**). Uses space well: people **navigate results while the selection stays visible in the detail view**. Also good when **results appear in the detail view** (**Freeform**: toolbar search filters the boards below).
- **should** **Put search at the top of the sidebar** when you **filter content or navigation there** (**Settings**: filters the sidebar and reveals sections several levels deep so people can search, preview and jump). Good with a **rich detail view** and when you want a **clear separation** between the sidebar being filtered and the adjacent view.
- **should** **Add search as an item in the sidebar or tab bar** for a **dedicated discovery area**: when search comes with **rich suggestions, categories or content** that need room; apps where **browsing and search go together** (**Music, TV**) get one place for suggested content, categories and recent searches, and search stays available while switching sections.
- **should** **In a dedicated area, consider focusing the field immediately on arrival** so people search faster and find the field. **Exception:** on **iPad with only a virtual keyboard**, **leave it unfocused** so the keyboard doesn't cover the view unexpectedly.
- **should** **Account for window resizing.** On iPad the field **resizes fluidly with the window** like on Mac. In **compact iPad views**, make sure search is **where it's most useful in context**: Notes and Mail put search **above the content-list column** when resized to compact.

#### tvOS
- A **search screen** is a **specialised keyboard screen** for entering text, with **results beneath the keyboard in a fully customisable view** (developer: `UISearchController`).
- **should** **Provide suggestions**: people **don't want to type much** on tvOS, so offer **popular and context-specific suggestions, plus recent searches** when available (*Using suggested searches with a search controller*).

#### watchOS
- Tapping the search field opens a **full-screen text-input control**; the app **returns to the search field only after Cancel or Search** is tapped.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Field anatomy | Search icon · editable text · Clear button · placeholder |
| Narrowing tools | scope bar (control) · tokens (selectable/editable filter items) |
| iOS entry points | tab in a tab bar (standard or button appearance) · bottom/top toolbar · inline |
| Search-tab styles | **standard** = uniform tab → landing page with field at top · **button appearance** = separate button → focus field + keyboard now, returns to previous tab on exit |
| Toolbar search | bottom: expanded field or button, animates into a field above the keyboard · top: button, animates into a field above the keyboard or at the top |
| iPadOS/macOS | trailing side of toolbar · top of sidebar · item in sidebar/tab bar (dedicated area) · consistent across iPad and Mac · resizes with the window |
| Focus on arrival (dedicated area) | yes, except iPad with only a virtual keyboard |
| tvOS | keyboard screen, results beneath, suggestions incl. recents |
| watchOS | full-screen text input; back after Cancel/Search |
| App examples in the page | Mail (mailbox scope; tokens for contacts; bottom search), Messages (tokens for photos), Notes / Voice Memos / Freeform (toolbar search), Settings (bottom on iOS; top of sidebar on iPad/Mac), Wallet (top), Music (tab + inline library filter, dedicated area), TV / Apple TV (standard search tab, dedicated area) |
| Developer docs | SwiftUI `searchable(text:placement:prompt:)`, *Adding a search interface to your app*, *Scoping a search operation* · UIKit `UISearchBar`, `UISearchTextField`, `UISearchController`, *Using suggested searches with a search controller* · AppKit `NSSearchField` |
| Videos | "Design intuitive search experiences" (WWDC26), "Get to know the new design system" (WWDC25), "Discoverable design" (WWDC21) |
| Related HIG pages | Searching ✓ · Token fields ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange rounded card with a **pale pink capsule search field**: a **magnifier** at the left, the placeholder **"Search"** with a **text caret** before the S and a **dashed underline**, and a **microphone (dictation)** glyph at the right. **Dimension arrows** show the **width** (a horizontal arrow across the field) and the **height** (a vertical bracket at its right edge): the image hints that the field is a sized, pill-shaped control **(from screenshot)**. No numbers are printed.
- **Scope bar and tokens (Mail on iPhone):** a phone in light mode with the **"Select" button faded** at the top right; a **scope bar** (two-segment control: **All Mailboxes** selected, **Current Mailbox**) with a leader line labelled "Scope bar"; under it a **Suggestions** heading and **three token rows**: **Sender contains: Design** (person icon), **Subject contains: Design** (envelope icon), **Attachment name contains: Design** (paperclip icon), each with a **grey attribute label and the typed word in black** and a leader labelled "Tokens". At the bottom, the field shows **"Design" with a caret, a small mic, and a separate round ✕ button** beside it, above the keyboard whose **prediction row shows "Design", Designs, Designed** and a **blue return key** **(from screenshot)**.
- **Search as a tab (catalog `search-fields-01`):** the **standard tab** puts **Search as the fifth tab** (magnifier + label) in the **same floating capsule**; the **button appearance** shortens the capsule to four tabs and puts a **separate round glass button with only a magnifier** at the trailing end. Selected tab is a **blue diamond on a grey pill**.
- **Toolbar (catalog `search-fields-02`):** bottom bar = **round filter button, wide capsule field with "Search", round compose button** in separate glass pieces; top bar (under the status bar) = **round Back**, then a **capsule group with magnifier and "⋯"** and a **round +**.
- **iPad / Mac (catalog `search-fields-03`):** iPad's field sits **at the trailing end** of the toolbar with a mic, and a **rounded panel of three suggestions** below it (typed part black, completion grey, first row highlighted grey); the Mac field shows a **yellow focus ring**, a **round clear (×)** button and a **small dropdown with the first suggestion filled yellow**.
- **iPad sidebar illustration:** iPad frame (cropped), status bar "**9:41 Tue Apr 1**", a **sidebar toggle button**, then a **grey capsule "Search" field with a mic at the very top of the sidebar**, then four list rows "**Title**" with dashed-square icons; the detail area on the right is empty **(from screenshot)**.
- **iPad tab bar illustration:** a **top capsule tab bar** at the centre: sidebar icon, **Tab 1, Tab 2, Tab 2, Tab 4** (the second "Tab 2" is Apple's own duplicate label), and at the **trailing end a Search item drawn as a blue-tinted circle** so it reads as a separate search area **(from screenshot)**.
- **tvOS illustration:** a dark blue-brown screen; top-left a **"Search" pill with a back chevron**; a large **magnifier + "search suggestion"** field with **"Hold [mic] to …"** hint at the right; below it the **on-screen keyboard as a single row**: **123**, **SPACE**, a–z (the **"v" key is focused, white**), delete; then **five suggestion chips** ("search suggestion" with a magnifier); then **Top Results**, two rows of **poster cards with "Line 1 / Line 2"** (one with "Subtitle", one with a round thumbnail) **(from screenshot)**. **No dark variant exists** for this image (fetch shows light only).
- **Page chrome (from screenshot):** the TOC reads Search fields · Best practices · Scope bars and tokens · Platform considerations · Resources · **Change log**; the side navigation shows **Navigation and search** open with **Search fields** ringed in the keyboard-focus outline; the Resources block shows **Related: Searching, Token fields**; **Developer documentation**: *Adding a search interface to your app* — SwiftUI, `searchable(text:placement:prompt:)` — SwiftUI, `UISearchBar` — UIKit, `UISearchTextField` — UIKit, `NSSearchField` — AppKit; **Videos** shows three thumbnails (a photo-grid montage, a dark keyboard/UI collage, a phone with a green "Toasty" app).
- The page has **3 neutral pairs** (catalog `search-fields-01 … 03`), **no ✗/✓ pairs and no videos to measure** (fetch script run; existing catalog IDs unchanged, total 132). Nothing is measured.

## Web translation
The web has a native `type="search"` field and a rich ecosystem of suggestion/combobox patterns, so most of this maps directly.

### Field anatomy and behaviour
| HIG rule | Web implementation |
|---|---|
| Field = Search icon + editable text + Clear button + placeholder | `<form role="search"><div class="field"><SearchIcon aria-hidden/><input type="search" name="q" aria-label="Search" …/><button type="button" aria-label="Clear Search">…</button></div></form>`. Icons: Lucide/Phosphor magnifier and x-circle, **never SF Symbols artwork** (`icons.md`). Show Clear **only when there's text**; on Clear, **empty the field and keep focus in it**. Capsule shape, 44 px+ tall on touch (`layout.md`, Buttons gate). |
| Placeholder shows what can be searched | `placeholder="Search Messages"` / "Search Projects": name the **searched scope**, sentence case (`writing.md`). A placeholder is **never the only label**: keep an `aria-label` or visible label; placeholder colour must still meet **≥ 4.5:1** on its background, including on glass (`color.md`, `materials.md` MATERIALS GATE; grey placeholders on frosted bars often fail). |
| Search as you type, if possible | `input` event → **debounced** (CONV 150–300 ms) request, **cancel stale requests** (`AbortController`), keep the **previous results until new ones arrive** (no flashing empty state), **`aria-live="polite"` count** ("12 results") in a status region; results never steal focus. If the query is expensive (server, big index), submit on **Enter** and say so (Apple says "if possible"). Enter always works as an explicit submit. |
| Suggested terms: recents before typing, predictive while typing | ARIA **combobox**: `role="combobox"`, `aria-expanded`, `aria-controls` → `role="listbox"` of `role="option"` rows, `aria-activedescendant` for Arrow-key navigation; Esc closes the list (second Esc clears); Enter picks. Recent searches show on **focus with an empty field**; **let people clear history** and keep it out of shared screens (`hig/patterns/searching.md` privacy). Highlight the **typed part in the text colour and the completion in secondary text** as in the iPad/Mac images. |
| Simplify results | Rank most relevant first; **group with headings** (People / Files / Messages) with counts; limit each group and offer "Show all"; never a flat dump. |
| Filter results | A **scope bar** directly under the field or above the results (see below). Empty-result state: say what was searched and offer to widen the scope (`feedback.md`). |

### Scope bars and tokens
| HIG rule | Web implementation |
|---|---|
| Scope bar for clearly defined categories | A **segmented control** (2–4 segments, CONV) under the field: `role="tablist"`/`role="radiogroup"`, roving focus, selected segment stated in text, not colour alone. Use it only for **mutually exclusive, well-defined categories** (All Mailboxes / Current Mailbox); many or overlapping filters belong in tokens or a filter panel. |
| Default to the broader scope | Initial segment is the widest ("All"); **remember the person's last narrowing within the session** only if it's visible; show the active scope in the field's placeholder/label ("Search Current Mailbox"). |
| Tokens for common terms | Render a matched term as a **chip inside the field** ("From: Design") that is **one unit**: Backspace **selects** it, a second Backspace deletes it; click/Enter edits it back to text; each chip has `aria-label` ("Sender: Design, press Backspace to remove"). Build with a `contenteditable` or an input + chip list (`role="listbox"`/`list` with focusable items). Keep the macOS-only **Token fields** (✓ `token-fields.md`) for the full chip-input behaviour. |
| Pair tokens with suggestions | Suggestions list shows the **token rows** (icon + grey attribute label + typed value in the text colour, e.g. "Subject contains: **Design**") so people **discover** available filters; choosing one converts the text to a chip. |

### Placement (iOS section → responsive web)
| HIG placement | Web implementation |
|---|---|
| Search as a tab, **standard** style | A **Search item in the bottom nav/tab bar** that routes to a **search landing page** (field at the top, then recents, categories, trending content). Use for content-rich apps where discovery matters. |
| Search as a tab, **button appearance** | A separate **round search button** at the trailing end of the bottom bar that **opens search focused with the keyboard up** (`input.focus()` on user gesture) and **returns to the previous view when dismissed** (restore scroll and selected tab). Use where search should resolve fast. |
| Bottom toolbar | On mobile web: a **sticky bottom bar** with the field (or a button that expands to a field above the keyboard, handle `visualViewport` so the field stays above the on-screen keyboard); use when search is a **priority** and there's room. |
| Top toolbar | A **search icon button in the header** that **expands** into a field (animate width/opacity; honour Reduce Motion, `prefers-reduced-motion`), or takes over the header row if there's no room; use when a **bottom bar would cover primary content**. |
| Inline field | A field **directly above the list it filters**, `position: sticky` under the header while scrolling; label with the scope ("Filter songs"); it filters **that list only**, not the whole app. |
| iPad/Mac: trailing side of the toolbar | Desktop web: **search at the right of the app header/toolbar** with a suggestions popover below; results update the **detail pane while the selection stays visible**; `⌘K` / `Ctrl+K` and `/` as shortcuts (CONV; Apple's page names none). |
| Top of the sidebar (filters the sidebar) | A field **at the top of the sidebar/nav tree** that filters the tree and expands matching branches; visually separate from the content pane. |
| Dedicated area (sidebar/tab item) | A "Search" destination in the nav with **rich suggestions, categories, recents**; **auto-focus the field on arrival only when a hardware keyboard/pointer is likely** (`matchMedia('(pointer: fine)')`); **on touch devices leave it unfocused** so the virtual keyboard doesn't cover the page (Apple's iPad exception). |
| Window resizing | The field **scales with the container** (`min-width` with `flex: 1`, CONV max ~ 480–640 px on desktop); at **compact widths** move it **above the list column** (Notes/Mail behaviour) or collapse to an icon that expands. Never let it disappear without an entry point. |
| Consistent across iPad and Mac | Same placement/behaviour for tablet and desktop breakpoints; only the touch target sizes change. |

### tvOS, watchOS analogues
- **10-foot / TV-style web apps:** on-screen keyboard row, **big suggestion chips first** (typing is costly), recents, results grid under the keyboard; focus ring on the current key/card (`inputs/*` later).
- **Small screens / wearables:** tapping the field opens a **full-screen search view** with **Cancel** and **Search** buttons (Title Case per `writing.md`); on close, return focus to the trigger.

### Cross-cutting
- **Buttons GATE** (`hig/components/menus/buttons.md`): the Clear button, scope segments and the search-tab button have **≥ 44 px hit regions**; icon-only buttons have accessible names.
- **Materials GATE** (`hig/foundations/materials.md`): a field on glass keeps **text and placeholder legible**; give it the solid fallback for Reduce Transparency/Increase Contrast.
- **RTL** (`right-to-left.md`): the magnifier and Clear swap sides; the mic stays at the trailing end; typed text aligns to the start.
- **Casing** (`writing.md` › Capitalisation): **Title Case** for button labels ("Cancel", "Clear"), **sentence case** for placeholders and descriptions.
- **Privacy** (`privacy.md`, `searching.md`): don't send every keystroke to third parties; make recents clearable.

Field-note cross-links:
- `hig/patterns/searching.md` (✓): the **why and systemwide part**; this note is the **component** (placeholder scope, suggestions, privacy, single place to search).
- `hig/components/menus/toolbars.md` (✓): search field at the trailing side, glass groups, priority collapse; `pull-down-buttons.md` for "⋯" beside the search button.
- `hig/components/layout/split-views.md`, `outline-views.md`, `tab-views.md` (✓): sidebar/column filtering; a field at the top of a tree filters expandable rows.
- `hig/components/menus/buttons.md` (✓ CRITICAL), `hig/foundations/materials.md` (✓ CRITICAL), `hig/foundations/color.md` (✓ CRITICAL): gates above.
- Ingested since: Tab bars (✓ `tab-bars.md`), Sidebars (✓ `sidebars.md`). Token fields (✓ `token-fields.md`). Not yet ingested and named here: Segmented controls.
- No conflict with a field note.

## Checklist
- [ ] Field has a **Search icon, Clear button and placeholder** naming the searched scope; also an accessible name; placeholder contrast ≥ 4.5:1.
- [ ] Results **update as people type** (debounced, cancellable), or Enter submits when live search is too costly; count is announced.
- [ ] **Recents before typing and predictive suggestions while typing** are offered; history can be cleared; combobox keyboard model works (Arrows, Enter, Esc).
- [ ] Results are **ranked and grouped**; the most relevant come first.
- [ ] A **scope bar** (if any) defaults to the **broader** scope, uses clearly defined categories, and shows the active scope in text.
- [ ] **Tokens** (if any) behave as one unit (select, edit, delete) and are **introduced by suggestions**.
- [ ] Placement matches the app: **search tab** for discovery/priority, **bottom/top toolbar** for quick access, **inline** for a local filter, **top of sidebar** for filtering navigation, **dedicated area** for rich suggestions.
- [ ] **Button-appearance search** focuses instantly and returns to the previous view; **standard tab** shows a landing page before typing.
- [ ] In a dedicated area the field is **auto-focused unless only a virtual keyboard is available**.
- [ ] The field **survives resizing** (compact layouts move it above the list) and is consistent across tablet and desktop.
- [ ] Hit regions ≥ 44 px; works over glass with fallbacks; RTL mirrored.

## Related
- Ingested: Searching (✓), Toolbars (✓), Split views (✓), Outline views (✓), Tab views (✓), Pull-down buttons (✓), Buttons (✓ CRITICAL), Materials (✓ CRITICAL), Color (✓ CRITICAL), Layout (✓ CRITICAL), Writing (✓), Privacy (✓), Right to left (✓), Entering data (✓).
- Ingested since: **Tab bars** (✓), **Sidebars** (✓). Token fields (✓ `token-fields.md`).
- Developer docs: SwiftUI `searchable(text:placement:prompt:)`, *Adding a search interface to your app*, *Scoping a search operation*; UIKit `UISearchBar`, `UISearchTextField`, `UISearchController`; AppKit `NSSearchField`.
- Videos: "Design intuitive search experiences" (WWDC26), "Get to know the new design system" (WWDC25), "Discoverable design" (WWDC21).
