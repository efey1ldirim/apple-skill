# Tab bars
Source: https://developer.apple.com/design/human-interface-guidelines/tab-bars · Section: Components › Navigation and search · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("No additional considerations for macOS. Not supported in watchOS"; the watch icon is dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (terminology and art; earlier rows: December 16, 2025 and July 28, 2025 Liquid Glass, September 9 and August 6, 2024 iPadOS 18 tab bar, June 21, 2023 visionOS). One DocC fetch, read in full. 12 screenshots (light-mode page, hero → the "Change log" heading) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page except the change-log rows. **Read from the fetch only:** the **change log** rows (the last screenshot ends on the heading), the video's actual motion (only its poster frame is in the screenshots), and the dark variants. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **two numbers** (tvOS 68 pt and 46 pt) and "five or fewer" default tabs.

## In one line
A tab bar lets people **move between the top-level sections of an app** and **keeps each section's navigation state**. Use it **for navigation, never for actions**; keep it **always visible** (except under modals), with **few, labelled, filled-icon tabs**, no disabled or hidden tabs, **no overflow "More"** if avoidable, **badges only for critical news**, and a colour that **doesn't clash with the content layer**. On iPhone it **floats as Liquid Glass at the bottom**, on iPad it sits **near the top** and can **convert to a sidebar**, on tvOS it is a **fixed 68 pt bar**, on visionOS a **vertical bar that expands on gaze**.

## Rules

### Framing (intro)
- Tab bars help people **understand the kinds of information or functions the app offers**.
- They let people **switch quickly between sections of the view** while **preserving the current navigation state within each section**.

### Best practices
- **must** **Use a tab bar for navigation, not for actions.** It moves between sections (Clock: **Alarm, Stopwatch, Timer**). Controls that **act on elements in the current view** belong in a **toolbar**.
- **should** **Keep the tab bar visible when navigating to different sections.** Hiding it makes people forget which area they are in. **Exception:** a **modal view** covering it (modals are temporary and self-contained).
- **should** **Use only as many tabs as needed.** Weigh the cost of extra tabs against how often people need each section; **fewer tabs are easier to navigate**. For a complex information structure, consider a **sidebar** or a **tab bar that adapts to a sidebar**.
- **should** **Avoid overflow tabs.** When space limits how many tabs show, the **trailing tab becomes "More" on iOS and iPadOS** and lists the rest separately; that makes hidden sections **harder to reach and notice**, so **limit the situations where it happens**.
- **must** **Don't disable or hide tab bar buttons, even when their content is unavailable.** Tabs that come and go make the interface **look unstable and unpredictable**; if a section is **empty, explain why**.
- **should** **Include tab labels** (beneath or beside the icon) that describe the content or function; **use single words whenever possible**.
- **may** **Use SF Symbols** for familiar, scalable icons that **adapt to context**: in **compact** views the **icon sits above the label**, in **regular** views the **icon and label sit side by side** (the iPhone illustration shows landscape = side by side, portrait = stacked). **Prefer filled** symbols/icons for consistency with the platform. For custom icons see Apple Design Resources for **tab bar icon dimensions**.
- **should** **Use a badge only for critical information**: a **red oval with white text**, containing **a number or an exclamation point**, on a tab that has **new or updated information that deserves attention**. **Reserve** badges so their impact and meaning aren't diluted (see Notifications).
- **should** **Avoid similar colours for tab labels and content-layer backgrounds.** If the content layer is bright and colourful, prefer a **monochromatic tab bar** or an **accent with enough visual difference** (see *Liquid Glass color*).

### Platform considerations
- **macOS:** no additional considerations. **watchOS:** not supported.

#### iOS
- The tab bar **floats above content at the bottom of the screen**; items sit on a **Liquid Glass** background that lets content **peek through** beneath.
- **With an attached accessory** (Music's **MiniPlayer**): you can **minimise the tab bar** and **move the accessory inline** when the person **scrolls down**. People leave the minimised state by **tapping a tab** or **scrolling to the top**. (Developer: `TabBarMinimizeBehavior`, `UITabBarController.MinimizeBehavior`.) Expanded = the accessory above the full bar; minimised = the **current tab at the bottom-leading corner, the accessory at bottom centre, and the search tab at the trailing corner**.
- A tab bar can include a **dedicated search tab at the trailing end** (see *Search fields*).

#### iPadOS
- The system shows the tab bar **near the top of the screen**. You choose a **fixed tab bar** (`tabBarOnly`) **or** a tab bar **with a button that converts it to a sidebar** (`sidebarAdaptable`).
- **Note:** to show a sidebar **without** the conversion option, use a **navigation split view** instead of a tab view (see *Sidebars*).
- **should** **Prefer a tab bar for navigation.** It reaches the sections people use **most**; a more complex app can offer the **convert-to-sidebar** option for a wider set.
- **may** **Let people customise the tab bar**: add frequently used items, remove rare ones (Music: choose a **favourite playlist** to show in the tab bar). If people choose their own tabs, **aim for a default list of five or fewer** to keep **continuity between compact and regular sizes** (`TabViewCustomization`, `UITab.Placement`).

#### tvOS
- A tab bar is **highly customisable**: background **tint, colour or image**; **font** for items (a **different font** for the selected one); **tints** for selected/unselected items; **button icons** such as settings and search.
- By default it is **translucent** and **only the selected tab is opaque**; when the remote **focuses** the bar, the selected tab gets a **drop shadow** to emphasise it.
- **Height: 68 pt; top edge 46 pt from the top of the screen; you can't change either.**
- **Too many items:** the system **truncates the rightmost item with a fade beginning at the right side**; if it scrolls, it also **fades from the left**.
- **should** **Know the scrolling behaviour.** By default people can **scroll the tab bar offscreen** when the current tab has **a single main view** (TV app: Watch Now, Movies, TV Shows, Sports, Kids). **Exception:** a screen with a **split view** (TV app's Library, an app's Settings) keeps the bar **pinned at the top** while the panes scroll. **Always**: **Menu on the remote returns focus to the tab bar** at the top of the page.
- **should** **In a live-viewing app, order tabs consistently: Live content → Cloud DVR or other recorded content → Other content** (see *Live-viewing apps*).

#### visionOS
- The tab bar is **always vertical**, **floating at a fixed position relative to the window's leading side**. **Looking at it expands it automatically**; to open a tab, **look at the tab and tap**. While expanded it **can temporarily cover content behind it**. (The page shows a **video** of a symbol-only bar expanding to symbols + labels when the selected tab gets the hover effect.)
- **should** **Give each tab a symbol and a text label.** The **symbol is always visible**; **labels appear when people look at the bar**. Even so, **keep labels short** for at-a-glance reading. Collapsed = symbols only; expanded = symbols + labels.
- **may** **Use a sidebar within a tab** when the hierarchy is deep (secondary navigation), and **make sure sidebar selections don't change the open tab**.

## Specs & values

| Item | Value |
|---|---|
| Purpose | navigate between **top-level sections**; preserve **per-section navigation state** |
| Not for | actions (use a toolbar) |
| Visibility | always visible while navigating sections; only a **modal** may cover it |
| Number of tabs | as few as needed; **default of five or fewer** when people can customise (iPadOS) |
| Overflow | trailing tab becomes **More** (iOS/iPadOS); avoid |
| Disabled/hidden tabs | **never**; explain empty sections |
| Labels | beneath (compact) or beside (regular) the icon; **single words** when possible |
| Icons | SF Symbols, **filled**; adapt to compact/regular |
| Badge | **red oval**, white text, **number or "!"**, critical info only |
| Colour | avoid label/accent colours similar to content-layer backgrounds; monochrome if the content is colourful |
| iOS | floats at the bottom on Liquid Glass; accessory may minimise on scroll-down, restore on tab tap or scroll-to-top; optional **search tab at the trailing end** |
| iPadOS | near the top; `tabBarOnly` or `sidebarAdaptable` (button converts to sidebar); customisable via `TabViewCustomization`, `UITab.Placement` |
| tvOS | **height 68 pt**, **top edge 46 pt from the top**, both fixed; translucent, selected tab opaque + shadow when focused; rightmost fade (and left fade when scrolling); Menu returns focus |
| tvOS live viewing | Live → Cloud DVR/recorded → Other |
| visionOS | vertical, fixed at the window's leading side, expands on gaze (symbols → symbols + labels), symbol + label per tab, sidebar-in-tab must not switch tabs |
| Developer docs | SwiftUI `TabView`, `TabViewBottomAccessoryPlacement`, *Enhancing your app's content with tab navigation*, `tabBarOnly`, `sidebarAdaptable`, `TabBarMinimizeBehavior`, `TabViewCustomization` · UIKit `UITabBar`, `UITabBarController.MinimizeBehavior`, `UITab.Placement`, *Elevating your iPad app with a tab bar and sidebar* |
| Videos | "Get to know the new design system" (WWDC25), "Elevate the design of your iPad app" (WWDC25) |
| Related HIG pages | Tab views ✓ · Toolbars ✓ · Sidebars ✓ · Materials ✓ CRITICAL |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card. A **glass capsule tab bar** at the lower middle holds **four tabs with a star icon each, labelled Tab 1 – Tab 4**; **Tab 1 is selected** (a **white pill** behind a **black star and bold black label**), Tab 2–4 are **dark-red stars and labels** on the translucent capsule. At the trailing end, **separate from the capsule, a round glass button with a magnifier** (the search tab). **Thin red dimension lines** show the **distance from the card's top edge down to the bar** (a vertical rule) and **horizontal margins to the card sides** (end ticks): the bar floats with **side margins**, no numbers **(from screenshot)**.
- **Landscape vs portrait iPhones:** two black-bezel iPhone drawings, both with a **floating capsule tab bar at the bottom** showing **five tabs** (blue diamond selected, circle, triangle, badge-shape, square). In **landscape** the tab bar is a **short centred capsule** with **icons at the leading side of each label**; in **portrait** it spans the bottom with **icons above labels** **(from screenshot)**.
- **Anatomy diagram:** a four-tab capsule (blue diamond "Tab 1" selected, circle, triangle, badge-shape) plus a **separate round search button**; leader lines labelled **Icon** (to the diamond) and **Label** (to the text under it) **(from screenshot)**.
- **Badges (iPhone bottom half):** a phone with a Phone-app-style bar: **Favorites** (blue star, selected), **Calls** (**red round badge "1"**), Contacts, **Keypad**, **Voicemail** (**red round badge "1"**); labels are tiny **(from screenshot)**. Note: the fetch describes badges as a "red oval"; the picture shows **small red circles with a white digit**.
- **Accessory (catalog `tab-bars-01`):** expanded = a **"Not Playing" mini-player capsule** (music-note thumbnail, play, fast-forward) **stacked above** the **four-tab bar** (Home red and selected, Radio, Library, Search); minimised = **one row of three pieces**: a **round Home button (red house)** at the leading corner, the **Not Playing mini-player** stretched across the middle, and a **round Search button** at the trailing corner. Both captions ("A tab bar with an attached accessory, expanded/minimized") are page text.
- **iPadOS (catalog `tab-bars-02`):** on Apple's page the two images sit behind a **"Tab bar | Sidebar" tab switcher with an underlined selected label**. **Tab bar**: Music on iPad, status bar "**9:41 Tue Apr 1**"; a **centred capsule near the top** with a **sidebar-toggle icon**, **Home (red, selected)**, **New**, **Radio**, **magnifier**; below, a large **"Home"** title, a red profile button at the right, **Top Picks** cards, **Recently Played**, and a **floating playback bar** at the bottom. **Sidebar**: the same app with the tab bar converted to a **grey sidebar** (Edit link, sidebar button; **Search, Home (selected pill), New, Radio**; **Library** section with chevron: Recently Added, Artists, Albums, Songs, Downloaded; **Playlists** section: All Playlists, Favorite Songs, Broadway Musicals); the playback bar shifts right. The screenshots show both pictures in full **(from screenshot)**.
- **visionOS (catalog `tab-bars-03`, light only):** **collapsed** = a tall **glass capsule with four stars**, the top one **white inside a lighter circle** (selected); **expanded** = a **rounded glass panel** with **star + "Label"** rows; the first is **selected** (lighter pill), the fourth shows the **look/hover** fill. No dark variants.
- **Note callout** (iPadOS, grey outlined card headed "Note", neutral colour) about presenting a sidebar without the conversion option **(from screenshot)**.
- **visionOS video poster:** a still from a spatial video: a **vertical glass capsule at the left-centre** with **six symbols** (an app-icon-like hexagon on top, a **round highlighted** second symbol, photos, a stack, a banner, a **magnifier** last) over a teal scene titled **"GALAPAGOS · MAY 14, 2023"** with a **"Play" pill**, and a **"Play ▷" link** under the poster. Only the poster is visible; the expanding motion is described by the fetch alt text **(from screenshot)**.
- **tvOS section:** text only in the screenshots (bulleted customisation list, the 68/46 pt sentence, the fade sentence, scrolling paragraph, the three-item live-viewing order list); no tvOS illustration on the page.
- **Page chrome (from screenshot):** platform strip with watch dimmed; TOC Tab bars · Best practices · Platform considerations · Resources · Change log; side navigation shows **Navigation and search** with **Tab bars** ringed (later screenshots scroll the sidebar to show the Selection and input group below Presentation). Resources: **Related** Tab views, Toolbars, Sidebars, Materials; **Developer documentation** with the five items (TabView, TabViewBottomAccessoryPlacement, *Enhancing your app's content with tab navigation*, UITabBar, *Elevating your iPad app with a tab bar and sidebar*); **Videos**: two cards, a dark UI-kit collage "**Get to know the new design system**" and the window-controls thumbnail "**Elevate the design of your iPad app**" (both WWDC25).
- The page has **3 neutral pairs** (catalog `tab-bars-01 … 03`) and **1 video** (visionOS expanding animation; not measured: not the point of the page, only its alt text is recorded). No ✗/✓ pairs. Fetch script run; existing catalog IDs unchanged, total 136.

## Web translation
The **bottom/top navigation bar** is the web's most common mobile pattern. The HIG adds discipline about *what belongs in it* and *how it behaves*.

| HIG rule | Web implementation |
|---|---|
| Navigation, not actions | `<nav aria-label="Primary">` with **links to sections** (real URLs). Add-Post, Compose, Share, Filter are **actions**: put them in the toolbar/header or a FAB (`toolbars.md`), **never as a tab** (a centre "+" tab is an anti-pattern under this rule). Not `role="tablist"` (that's for in-page panels: `tab-views.md`); use `aria-current="page"` on the active link. |
| Preserve state per section | Each tab **remembers its own navigation stack, scroll position and filters**: keep per-section history (client router with per-tab stacks or keep-alive views); re-tapping the active tab **pops to the section root** or scrolls to top (CONV). |
| Always visible; modals may cover it | The bar stays on **every screen inside a section**, including detail views; hide it only under a **modal/sheet** (`modality.md`). Don't auto-hide on scroll unless implementing the accessory-minimise pattern below. |
| Number of tabs | **3–5** on phones (CONV, from "fewer is easier" and the five-or-fewer default); more sections → sidebar (`sidebars.md`), not "More". |
| Avoid overflow tabs | If space is short, **don't collapse into a "More" tab**: switch to a **sidebar/drawer at wider widths** or trim sections; if a "More" is unavoidable, list every hidden section there with badges preserved. |
| Don't disable or hide tabs | Empty section → render the page with an **empty state that explains why** and how to fill it (`feedback.md`); use `aria-disabled` on **no tab**. Permissions: show the tab and explain (`managing-accounts.md`). |
| Labels, single words | Icon + **visible label** always (no icon-only bars on phones); one word ("Home", "Search", "Library"); Title Case per `writing.md`; truncate never, shorten instead. |
| Icons adapt: stacked in compact, side by side in regular | Icons **above** the label at phone widths (`flex-direction: column`), **beside** it in landscape/wide (`row`), via container queries; **filled icons** (Phosphor "fill", Lucide + `fill`), never SF Symbols artwork (`icons.md`). |
| Badge only for critical | Small **red circle/oval with a white number or "!"** at the icon's top-trailing corner; `aria-label="Calls, 1 new"` (or a visually hidden count); **cap at "99+"** (CONV); don't badge every tab. **Contrast:** white on system red usually fails 4.5:1 for small text, so use the darker red token and bold text, or larger digits (`color.md`, Color gate). |
| Colour clash with content layer | Tab label/selected accent must **differ from the colours behind the bar**: monochrome bar over colourful content, or an accent with clear contrast against both light and dark backgrounds; **selected state = shape (pill/weight) + colour**. |
| iOS: floating glass bar over content | `position: fixed; inset-inline: 12–16px; bottom: max(12px, env(safe-area-inset-bottom))` (CONV values), rounded capsule with `backdrop-filter`; **content scrolls beneath** with bottom padding so nothing is hidden; **solid fallback** for Reduce Transparency/Increase Contrast (`materials.md` gate, `layout.md` safe areas/`dvh`). |
| Attached accessory: minimise on scroll down | A mini-player/now-playing/checkout strip **above the bar**; on scroll-down **collapse the bar to the current tab's icon, the accessory inline, and the search button** (the three-piece row), restore on tab tap or scroll-to-top; respect `prefers-reduced-motion`; keep all pieces ≥ 44 px (Buttons gate). |
| Search tab at trailing end | A **Search** item last in the bar (standard or separated round button); see `search-fields.md` for the two styles. |
| iPadOS: bar near the top, convertible to a sidebar | At tablet/desktop widths place the **primary nav at the top** (a centred capsule/segmented nav) **or** a sidebar, with **a toggle button to convert** and the person's choice remembered; a sidebar-only app doesn't need the conversion (`sidebars.md`). |
| Let people customise tabs; default ≤ 5 | "Edit tabs" with add/remove/reorder (keyboard **Move up/down**); keep the **default set ≤ 5** so compact and regular layouts match; persist per user. |
| tvOS: fixed bar, fade truncation, focus returns on Menu | For 10-foot web UIs: a **top bar of fixed height** (68 pt ≈ 68 CSS px at 1×; scale with viewport, CONV) that scrolls away with a single main view but stays **pinned over split content**; **Back/Menu returns focus to the bar**; focused tab gets a **shadow/scale**, and overflowing items **fade at the edges**. Live-streaming: order **Live → Recorded/DVR → Other**. |
| visionOS: vertical bar expanding on gaze, symbol + label | A **vertical icon rail** at the leading edge that **expands to icons + labels on hover/focus-within** (`:hover`, `:focus-within`, not hover-only: also expands via keyboard focus and a toggle), covering content temporarily; labels short; **sidebar inside a tab must not change the selected tab**. |
| Deep hierarchy | Section-level **sidebar or secondary nav** inside a tab (`sidebars.md`); the top-level tab stays selected. |

Field-note cross-links:
- `hig/components/navigation/sidebars.md` (✓): the adaptive **tab bar ↔ sidebar** switch (`sidebarAdaptable`), tab bar first on phones, sub-nav in a tab.
- `hig/components/navigation/search-fields.md` (✓): search as a tab (**standard tab** vs **button appearance**) and the same glass tab bar drawings (`search-fields-01`).
- `hig/components/menus/toolbars.md` (✓): actions belong there, not in tabs; `hig/components/layout/tab-views.md` (✓): the **in-page tab view** (segmented/tabbed panels), a different component from the app-level tab bar.
- `hig/foundations/materials.md`, `color.md`, `layout.md` (✓ CRITICAL): glass layer, badge/label contrast, safe areas.
- `hig/patterns/managing-notifications.md` (✓): badges; `live-viewing-apps.md` (✓): tab order for live apps; `modality.md` (✓): modals covering the bar.
- No conflict with a field note.

## Checklist
- [ ] Every tab is a **top-level section** (navigation); **no action tabs** (compose, add, share).
- [ ] The tab bar **stays visible** across a section's screens and is hidden only under modals.
- [ ] **≤ 5 tabs** on phones; no "More" overflow; extra sections go to a sidebar.
- [ ] No tab is **disabled or hidden**; empty sections explain why.
- [ ] Each tab has a **filled icon and a single-word label**; icon above label in compact, beside in wide layouts.
- [ ] Each tab **keeps its own state** (stack, scroll, filters); re-tapping resets to the root.
- [ ] **Badges** are red, white text, number or "!", critical only; accessible names include the count; contrast passes.
- [ ] The bar's colours **differ from the content behind it** (monochrome over colourful content).
- [ ] Floating glass bar has bottom padding for content, safe-area insets, and a **solid fallback**.
- [ ] An accessory (mini-player) minimises on scroll-down and restores on tab tap or scroll-to-top; all pieces ≥ 44 px.
- [ ] At wider widths the bar can **convert to a sidebar** (or is replaced by one) and the choice persists; customisable tabs default to ≤ 5.
- [ ] TV/vision analogues: fixed-height focusable bar, focus returns to it; rail expands on gaze/focus with labels.

## Related
- Ingested: Sidebars (✓), Search fields (✓), Tab views (✓), Toolbars (✓), Materials (✓ CRITICAL), Color (✓ CRITICAL), Layout (✓ CRITICAL), Buttons (✓ CRITICAL), Managing notifications (✓), Live-viewing apps (✓), Modality (✓), SF Symbols (✓), Icons (✓), Writing (✓).
- Not yet ingested: none linked beyond Notifications (the Technologies page).
- Developer docs: SwiftUI `TabView`, `TabViewBottomAccessoryPlacement`, `tabBarOnly`, `sidebarAdaptable`, `TabBarMinimizeBehavior`, `TabViewCustomization`; UIKit `UITabBar`, `UITabBarController.MinimizeBehavior`, `UITab.Placement`.
- Videos: "Get to know the new design system" (WWDC25), "Elevate the design of your iPad app" (WWDC25).
