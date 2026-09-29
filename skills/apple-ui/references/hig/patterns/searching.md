# Searching
Source: https://developer.apple.com/design/human-interface-guidelines/searching · Section: Patterns · Supported platforms: all six on the platform strip; the page says **no additional considerations** for any platform (Spotlight is iOS, iPadOS and macOS) · Ingested: 2026-09-29 · Apple last updated: 2026-06-08. Change log: 2025-06-09 general guidance moved in from Search fields, systemwide-search guidance reorganised · 2026-06-08 terminology updated and best practices refined. One DocC fetch, read in full. 3 screenshots (dark-mode page, hero → Related) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous. **The last Related link, Developer documentation, Videos and the change-log rows were read from the fetch only.** The page has no text inside images and no videos. Only page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Give search **one obvious home** (a search field, or a dedicated tab if search is central), show **what is being searched**, help with **recent searches and suggestions**, protect **privacy** of history, and make content findable **outside the app** through Spotlight.

## Rules

### Framing (intro)
- People generally expect a **search field** to search an app (Apple links Search fields ✓ `hig/components/navigation/search-fields.md`).
- You can **personalise** search from what you know about how people use the app: show **recent searches, suggestions, completions or corrections** based on their earlier terms.
- Sometimes people want to **scope or filter**: by attributes like **creation date, file size or file type** (Apple links *Scope bars and tokens* in Search fields).
- People may also want to **find content inside an open document or file**: provide ways to search within a **window or page** (iOS, iPadOS, macOS).
- **Spotlight** (iOS, iPadOS, macOS) finds content **across all apps and the web**. If you index your content and provide information about it, people can find it **without opening the app first** (§ Systemwide search).

### Best practices
- **should** **If search is important, give it a primary position.**
  - Notes: a search field in the **bottom toolbar** next to other important actions.
  - Apps with **tab bars** (Photos, Apple TV): **search is a dedicated tab**.
- **should** **Make the app's content searchable through a single location.**
  - One clearly identified place to find anything in the app.
  - For apps with clearly distinct sections, a **local search** can still help: e.g. in the iOS Music app, search **acts as a filter on the current view** when searching songs and albums.
- **must** **Clearly show the current scope of a search.** Use **descriptive placeholder text**, a **scope bar** or a **title** to reinforce what is being searched. Example: Mail always shows a clear reference to the **mailbox** being searched.
- **should** **Provide suggestions.** Showing **recent searches before typing** or **predictive suggestions while typing** helps people search faster and type less (`searchSuggestions(_:)`).
- **must** **Consider privacy before showing search history.** People may not want history visible where others could see it. If you show it, **let people clear it**.

### Systemwide search
- **should** **Make the app's content searchable in Spotlight** by making it **indexable** and specifying descriptive attributes known as **metadata**; Spotlight extracts, stores and organises them for fast, comprehensive search (*Adding your app's content to Spotlight indexes*).
- **should** **Define metadata for custom file types you handle**: supply a **Spotlight File Importer** plug-in describing the metadata your format contains (`CSImportExtension`).
- **may** **Use Spotlight for advanced file search inside your app.** Example: a button that instantly starts a Spotlight search **based on the current selection**, then a **custom view** showing the results or a filtered subset.
- **should** **Prefer the system open and save views**: they generally include a **built-in search field** to search and filter the **entire system** (Apple links File management ✓).
- **should** **Implement a Quick Look generator if the app produces custom file types**, so Spotlight and other apps can show previews of your documents (Quick Look).

### Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Primary search position | a search field in the bottom toolbar (Notes) or a dedicated tab in tab-bar apps (Photos, Apple TV) |
| Locations for search | one primary place; local per-section search acts as a filter on the current view (Music) |
| Scope display | placeholder text · scope bar · title (Mail shows the mailbox) |
| Personalisation | recent searches (before typing) · predictive suggestions (while typing) · completions · corrections |
| History | show only with privacy in mind; always let people clear it |
| Filter attributes named | creation date · file size · file type |
| Systemwide | Spotlight indexing + metadata; File Importer plug-in for custom types; Quick Look generator for previews |
| System open/save views | include a system-wide search field |
| Developer docs | `searchSuggestions(_:)` (SwiftUI) · *Adding your app's content to Spotlight indexes* · `CSImportExtension` · Quick Look |
| Related HIG pages | Search fields ✓ · Toolbars ✓ · Tab bars · File management ✓ |
| Video | *Design intuitive search experiences* (WWDC26 292) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large magnifying glass (a ring with a handle at the lower trailing corner), over construction circles.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Searching · Best practices · Systemwide search · Platform considerations · Resources · Change log.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 105). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
Search on the web: an **on-site search box** (or command palette), **filtering a list**, **find in page** (browser), and **search-engine discoverability** (the web's "Spotlight").

| HIG rule | Web implementation |
|---|---|
| Primary position if important | Put search **in the header (desktop) or a search icon/tab (mobile)**, in the same place on every page; on a tab-bar layout make **Search a dedicated tab**. `role="search"` landmark on the form; `type="search"` input with a visible label or `aria-label`; **⌘/Ctrl+K or `/`** to focus (shown in the placeholder or a tooltip). |
| Single location | One global search covering all content types; results **grouped by type** (Pages, People, Files…). Per-section search **filters the current list** in place (the Music pattern) and says so ("Filter songs"). Don't run two competing search boxes on one screen. |
| Show the scope | Placeholder names the scope ("Search Inbox", "Filter songs"); a **scope control** (segmented control/tabs: All · Files · People) under the field; a heading ("Results for “term” in Inbox"); when scope narrows automatically, show it as a removable chip/token. |
| Suggestions | On focus with an empty field: **recent searches** (and popular/saved ones); while typing: **predictive suggestions/completions/corrections** in an `aria-autocomplete="list"` **combobox** (`role="combobox"` + `listbox`, `aria-activedescendant`, arrow keys, Enter, Esc); highlight the matching part; debounce requests (≈ 150–250 ms, CONV); show "no results" with a suggestion or corrected term ("Showing results for X"). |
| Privacy of history | Keep history **per user, not shared**, and **local by default** where possible; a visible **Clear** (per item and all); don't show history on shared/kiosk screens or in screenshots-prone places; don't put searches in URLs that end up in referrers if they're sensitive (use POST or `Referrer-Policy: no-referrer`); allow turning history off; no history in incognito. |
| Filters and tokens | Attribute filters (date, size, type, owner) as **tokens/chips** and a **Filters** popover; show active filters and a clear-all; keep the same filters in the URL query (shareable/back-button friendly). |
| Search inside a document | Provide **in-document find** (⌘/Ctrl+F handled by the browser; for canvas/virtualised content implement your own find with match count, next/previous, highlight, and don't hijack ⌘/Ctrl+F silently). |
| Systemwide (Spotlight ⇒ web) | Make content discoverable: **semantic HTML, titles, meta descriptions**, `sitemap.xml`, **structured data (schema.org JSON-LD)** as the "metadata", canonical URLs, stable links, Open Graph previews (the Quick Look analogue); for installed PWAs, **Web App Manifest shortcuts** (e.g. a "Search" shortcut) and an **OpenSearch description** so browsers can offer to search the site from their address bar. Custom file types: expose readable metadata and previews (thumbnails) so link unfurling and previews work. |
| Advanced "search from selection" | A context action "Search for “selection”" (context menu/toolbar) that opens the search UI **prefilled** with the selected text and shows results in a custom view. |
| System open/save | Use the browser/OS file pickers (`showOpenFilePicker` etc.) which include system search (`file-management.md`). |
| Empty states and errors | "No results for “x”" with **what to try** (check spelling, remove filters) and a clear-filters button (Feedback gate: quiet, actionable, no blame); loading states named; results announced via a polite live region ("12 results"). |
| Accessibility | Keyboard: focus field, arrows through suggestions/results, Enter to open, Esc to clear/close; a visible **clear (×)** button with a label; results count announced; focus not stolen while typing; sufficient contrast for highlights. |
| Performance and feel | Show results incrementally; keep the query string and scroll position on back; cancel stale requests; typo tolerance and prefix matching; never wipe the list on each keystroke (avoid flicker). |

Field-note cross-links:
- `hig/patterns/file-management.md` (✓): system open/save views include search; Quick Look generators for custom file types (same rule appears there).
- `hig/patterns/entering-data.md` (✓): suggestions and recent entries reduce typing (same idea as "recent searches"); privacy of remembered values.
- `hig/patterns/feedback.md` (CRITICAL): empty-result and error states; announced result counts; named spinners.
- `hig/patterns/launching.md` and `multitasking.md`: restore the last query and scroll when returning.
- `hig/foundations/privacy.md` (✓): search history is personal data; clear controls, no leaking in URLs.
- `hig/patterns/managing-accounts.md`: history follows the account; sign-out clears local history on shared devices.
- `hig/patterns/onboarding.md`/`offering-help.md`: a one-line tip for the search shortcut (Cmd/Ctrl+K), not a tour.
- `hig/foundations/writing.md`: placeholder text names the scope, sentence case, verb-led where it's an action.
- No conflict with a field note.

## Checklist
- [ ] Search has one primary home (header/search tab/toolbar), a labelled field in a `role="search"` landmark, and a keyboard shortcut.
- [ ] The current scope is always visible (placeholder, scope control, heading or token); local filters say what they filter.
- [ ] Recent searches appear before typing and predictive suggestions while typing; suggestions are a proper combobox with keyboard support.
- [ ] Search history is private, per user, clearable per item and entirely, can be turned off, and never leaks into URLs/referrers.
- [ ] Filters appear as removable tokens and are reflected in the URL; "Clear filters" exists.
- [ ] In-document search exists where documents are long; ⌘/Ctrl+F isn't hijacked silently.
- [ ] Content is discoverable from outside (semantic HTML, sitemap, structured data, previews); custom file types have metadata and previews.
- [ ] Empty-result and error states explain what to try; result counts are announced.

## Related
- Ingested: File management (✓), Entering data (✓), Feedback (✓ CRITICAL), Privacy (✓), Managing accounts (✓), Onboarding (✓), Offering help (✓), Writing (✓).
- Ingested since: **Search fields** (✓ `hig/components/navigation/search-fields.md`, incl. scope bars and tokens). **Tab bars** (✓ `hig/components/navigation/tab-bars.md`), **Sidebars** (✓ `hig/components/navigation/sidebars.md`).
- Developer docs: listed in Specs & values. Video: *Design intuitive search experiences* (WWDC26 292).
