# Reference index

Read this first. It tells you which files to open for the task at hand and what has been
ingested so far.

## Routing table — what to read for which task

| Task | Always read | Then read |
|---|---|---|
| Any UI work | **`hig/foundations/color.md` (CRITICAL — colour gate)**, `tokens/apple-system-colors.css`, **`hig/foundations/layout.md` (CRITICAL — layout gate)**, `tokens/apple-layout.css`, **`hig/foundations/typography.md` (CRITICAL — typography gate)**, `tokens/apple-typography.json`, **`hig/foundations/materials.md` (CRITICAL — materials gate, whenever anything is translucent/blurred/overlaid)**, `tokens/apple-materials.css`, **`hig/patterns/feedback.md` (CRITICAL — feedback gate, for every message, error, toast, alert, status, spinner or disabled state)**, `tokens/apple-feedback.css`, `hig/foundations/accessibility.md` (contrast/size/motion minimums), `hig/getting-started/design-principles.md` (Apple's 8 principles — the decision lens), `field-notes/principles.md`, `field-notes/anti-patterns.md` | — |
| Web UI (React/Tailwind/CSS) | + `field-notes/tokens.md`, `field-notes/components.md`, `field-notes/engineering-gotchas.md` | HIG pages for the components you use |
| Mobile web / phone layouts (reach zone, swipe-back, Dynamic Type, autofill) | + `hig/getting-started/designing-for-ios.md` | HIG: Layout, Gestures, Virtual keyboards |
| Tablet / large-screen / resizable layouts (split view, popovers, pointer vs touch density, keyboard shortcuts) | + `hig/getting-started/designing-for-ipados.md` | HIG: Multitasking, Pointing devices, Keyboards, Split views |
| Desktop web app / dashboard / SaaS (flat hierarchy, panes, command palette, shortcuts, personalisation) | + `hig/getting-started/designing-for-macos.md` | HIG: Windows, The menu bar, Keyboards, Toolbars |
| TV / kiosk / 10-foot UI, keyboard focus styling, multi-user profiles | + `hig/getting-started/designing-for-tvos.md` | HIG: Focus and selection, Remotes, Managing accounts |
| Immersive / 3D / WebXR, hover-free (gaze) input, motion comfort | + `hig/getting-started/designing-for-visionos.md` + `hig/foundations/immersive-experiences.md` + `hig/foundations/motion.md` § visionOS (peripheral motion, 0.2 Hz, frame of reference) + `hig/foundations/spatial-layout.md` (field of view, head-anchoring, depth, dynamic/fixed scale, 60 pt spacing) | HIG: Eyes, Windows |
| Focus mode, fullscreen, lightbox, presentation mode (enter/exit, backdrop dim) | + `hig/patterns/going-full-screen.md` (person enters and exits, controls stay reachable, pause/resume), `hig/foundations/immersive-experiences.md` (web translation), `hig/foundations/motion.md`, `hig/foundations/spatial-layout.md` (receding page behind sheets, depth levels) | HIG: Sheets |
| Animation, transitions, micro-interactions, gesture/swipe UI, loading & success feedback, scroll effects, animated icons, WebGL/canvas motion | + `hig/foundations/motion.md`, `hig/patterns/feedback.md` (FEEDBACK GATE: how loud a message may be), `hig/foundations/accessibility.md` § Motion (Reduce Motion fallback), `field-notes/tokens.md` § Motion, `field-notes/landing-and-motion.md` § Motion rules | HIG: Feedback, SF Symbols § Animations, Playing haptics |
| Glanceable surfaces: notifications/web push, widgets, badges, at-a-glance mobile summaries | + `hig/getting-started/designing-for-watchos.md` | HIG: Notifications, Widgets, Complications |
| Website header / mega-menu / docs site / section nav | + `apple-web/site-patterns.md` (Apple's own measured web patterns) | HIG: Menus, Sidebars, Tab bars |
| Minimum text & target sizes per platform | + `hig/foundations/typography.md`, `tokens/apple-typography.json`, `hig/getting-started/designing-for-games.md` (game targets) | HIG: Buttons |
| Text styles, Dynamic Type, line height, tracking, custom fonts, readable copy | + `hig/foundations/typography.md` (TYPOGRAPHY GATE), `tokens/apple-typography.json` (exact platform tables), `tokens/apple-typography.css` (web preview), `node tools/check-typography.mjs <changed files>` | HIG: Accessibility, Writing (✓ `hig/foundations/writing.md`) |
| Foldable / dual-pane / wide-short layouts, toolbar overflow priority, navigation rail | + `hig/getting-started/designing-for-iphone-duo.md` | HIG: Layout, Split views, Toolbars, Tab bars |
| App icon, favicon, PWA/maskable icons, brand mark tiles | + `hig/foundations/app-icons.md` | HIG: Icons, Branding |
| Images, photos, srcset/retina assets, image formats, hover-lift/parallax cards, media viewers, `<img>` vs icon, clickable images, text over images, image upload/replace, frame animations | + `hig/foundations/images.md`, `hig/components/content/image-views.md` (display-only, button for clicks, symbol/template icon not image, scrim behind overlaid text, same-size animation frames, image-well behaviours) | HIG: Layout, Materials |
| RTL / Arabic / Hebrew / i18n-ready layouts, bidirectional text, numbers & phone numbers in other scripts, mirroring icons, sliders, ratings, carousels | + `hig/foundations/right-to-left.md` (flip / don't-flip table; visuals `right-to-left-01 … 21`), `node tools/check-layout.mjs --strict` | HIG: Layout, Inclusion, SF Symbols, Typography |
| UI copy: button/link labels, error messages, empty states, settings descriptions, field hints, step-flow wording, capitalisation, tone | + `hig/foundations/writing.md` (verb-led labels, no "we", consistent terms, error/empty-state rules), `field-notes/principles.md` §16 | HIG: Inclusion, Accessibility, Alerts, Text fields |
| Forms asking personal data (gender, family, names), imagery of people, localisation, inclusive language | + `hig/foundations/inclusion.md`, `hig/foundations/writing.md` | HIG: Right to left |
| Interface icons / glyphs, icon buttons, toolbars, choosing an icon for an action | + `hig/foundations/icons.md` (standard action → symbol table + web mapping), `hig/foundations/sf-symbols.md` (weights/scales/variants/rendering modes; licence: no SF Symbols on the web) | HIG: Toolbars, Buttons |
| Choosing an icon set (SF Symbols vs Lucide / Phosphor / Ionicons) | `SKILL.md` § Icon source + `hig/foundations/sf-symbols.md` § Which icon set to recommend | — |
| Animated icons / symbol effects (bounce, pulse, replace, wiggle, breathe, rotate, variable colour, draw) | + `references/symbol-effects.md` (measured Apple timings + how-to), `tokens/apple-symbol-effects.css` / `.js`, demo `examples/symbol-effects/index.html`, `hig/foundations/motion.md` | HIG: Motion, Feedback |
| Brand colour, brand font, logo placement, voice & tone | + `hig/foundations/branding.md`, `hig/foundations/writing.md` (voice vs tone, term list) | HIG: Color, Typography |
| Glass / blur / translucency: nav bars, tab bars, toolbars, sidebars, popovers, sheets, overlays, controls over photos/video, frosted panels | + `hig/foundations/materials.md` (MATERIALS GATE), `tokens/apple-materials.css`, `apple-web/site-patterns.md` (frosted bar + veil) | HIG: Color § Liquid Glass color, Sliders, Toggles, Popovers, Sheets |
| Share button, share sheet/popover, permissions ("who can edit"), presence/collaborator lists, collaboration notifications with deep links | + `hig/patterns/collaboration-and-sharing.md`, `hig/foundations/writing.md` (permission phrases), `hig/foundations/materials.md` | HIG: Activity views, Sheets, Popovers, Toolbars, Notifications |
| Drag and drop, reordering lists/boards, file upload drop zones, moving items between containers, multi-select drag | + `hig/patterns/drag-and-drop.md` (move vs copy, drag image, target feedback, undo, alternatives), `hig/foundations/accessibility.md` (dragging alternatives), `field-notes/anti-patterns.md` (no dashed drop frame at rest) | HIG: Pointing devices, Undo and redo, Feedback, Loading, Keyboards |
| Toasts, alerts, error/success/status messages, validation, spinners, disabled buttons, confirmations, destructive-action prompts | **`hig/patterns/feedback.md` (FEEDBACK GATE)**, `tokens/apple-feedback.json` / `.css`, `node tools/check-feedback.mjs`, `node tools/run-feedback-probe.mjs <url>`, `hig/foundations/writing.md`, `hig/foundations/accessibility.md` | HIG: Alerts, Playing haptics, Undo and redo, Loading, Notifications |
| Documents/files: create-open-save flows, autosave, unsaved changes, file pickers, upload/export/import, previews, drive/library start screens | + `hig/patterns/file-management.md` (autosave, extensions, Quick Look, document launcher), `hig/patterns/feedback.md` (save status, unsaved dot), `hig/patterns/drag-and-drop.md` | HIG: Toolbars, The menu bar (File menu), Printing, Sheets |
| First load / app start: launch or splash screens, app shell + skeletons, PWA startup, restoring last state, orientation at start | + `hig/patterns/launching.md` (near-identical first screen, no text/branding, restore state), `hig/foundations/branding.md`, `hig/foundations/layout.md` | HIG: Onboarding, Loading |
| Live video / streaming / TV-style apps: live badges, channel switching, EPG/guide grid, content footer, PiP, cloud DVR/recording | + `hig/patterns/live-viewing-apps.md`, `hig/patterns/launching.md` (auto-start), `hig/patterns/going-full-screen.md`, `hig/patterns/feedback.md`, `hig/getting-started/designing-for-tvos.md` | HIG: Playing video, Remotes, Focus and selection |
| Loading states: skeletons, placeholders, spinners/progress, prefetch, background downloads, long waits, offline/stalled loads | + `hig/patterns/loading.md`, `hig/patterns/feedback.md` (FEEDBACK GATE: named spinners, watchOS rule), `hig/patterns/launching.md` | HIG: Progress indicators |
| Accounts: sign-in/sign-up, guest mode, passkeys/SSO, auth button wording, account deletion, subscriptions on deletion, device/TV sign-in | + `hig/patterns/managing-accounts.md`, `hig/foundations/privacy.md`, `hig/patterns/entering-data.md`, `hig/patterns/feedback.md` (deletion confirm) | HIG: Sign in with Apple, Onboarding, Apple In-App Purchase |
| Push/email/SMS notifications: permission timing, urgency levels, time-sensitive alerts, marketing opt-in, quiet hours/digest, notification settings | + `hig/patterns/managing-notifications.md`, `hig/foundations/privacy.md`, `hig/patterns/feedback.md` | HIG: Notifications, Settings, Alerts |
| Modals, dialogs, sheets, drawers, confirmations, popups, "are you sure" prompts, unsaved-changes dialogs, full-screen viewers | + `hig/patterns/modality.md` (only when beneficial, one at a time, obvious dismissal, data-loss guard), `hig/patterns/feedback.md` (FEEDBACK GATE: alertdialog rules), `hig/foundations/materials.md` | HIG: Sheets, Alerts, Popovers, Action sheets |
| Multitasking: tabs/windows, resizing, split screen, background tabs, PiP, media that keeps playing, save/restore state, background uploads | + `hig/patterns/multitasking.md`, `hig/patterns/launching.md`, `hig/foundations/layout.md` (any window size) | HIG: Windows, Playing video, Playing audio |
| Help, tips, coach marks, tooltips, help text, tutorials, first-use hints | + `hig/patterns/offering-help.md` (tip types + eligibility, tooltip copy 60–75 chars), `hig/foundations/writing.md`, `hig/patterns/feedback.md`; visuals `offering-help-01 … 03` | HIG: Onboarding, Help menu |
| Sound: audio playback, sound effects, UI sounds, mute/silent, volume, headphones/output routing, interruptions, media keys, spatial audio | + `hig/patterns/playing-audio.md` (categories, interruptions, silent switch), `hig/patterns/multitasking.md`, `hig/patterns/feedback.md`, `hig/foundations/accessibility.md` | HIG: Playing video, Playing haptics |
| Haptics / vibration / tactile feedback in mobile apps (which pattern for which event, custom haptics, Expo/RN/Android/web mapping) | + `hig/patterns/playing-haptics.md` (vocabulary + measured timings + mobile recommendation), `tokens/apple-haptics.json`, `hig/patterns/feedback.md` | HIG: Gestures, Sliders, Toggles |
| Video players, embedded video, PiP, poster images, video encoding/aspect ratio, resume/exit behaviour, overlays over video, TV/kiosk playback | + `hig/patterns/playing-video.md` (no baked padding, resume without asking, loading, overlays), `hig/patterns/playing-audio.md`, `hig/patterns/live-viewing-apps.md`; visuals `playing-video-01 … 02` | HIG: Keyboards, Remotes, Ornaments |
| Printing, PDF export, print stylesheets, print options | + `hig/patterns/printing.md` (menu placement, only when possible, custom options panel, advanced options), `hig/patterns/file-management.md` | HIG: The menu bar (File menu), Action sheets |
| Asking for reviews/ratings/NPS/feedback, review prompts, app-store rating requests | + `hig/patterns/ratings-and-reviews.md` (after engagement, never mid-task, cool-down, system prompt), `hig/patterns/onboarding.md`, `hig/patterns/modality.md` | HIG: Alerts |
| Search: site/app search box, search tab, suggestions/recent searches, scope and filters, search history privacy, command palette, discoverability (Spotlight-like) | + `hig/patterns/searching.md`, `hig/patterns/entering-data.md`, `hig/foundations/privacy.md` | HIG: Search fields, Toolbars, Tab bars |
| Undo/redo, history, revert, undo toasts instead of confirmations, soft delete, shortcuts | + `hig/patterns/undo-and-redo.md`, `hig/patterns/feedback.md` (undo instead of "are you sure" for recoverable actions), `hig/patterns/drag-and-drop.md` | HIG: Pointing devices, Keyboards, The menu bar (Edit menu) |
| Workout / fitness / stopwatch / tracker / "session in progress" screens: live metrics, big controls, pause/resume/end, sensor-unavailable states, session summary, courier/driver mode | + `hig/patterns/workouts.md` (3 screens: controls · metrics · media; timer from timestamp; wake lock; `--` not 0; summary; discard micro-sessions; legible in motion), `hig/patterns/feedback.md`, `hig/patterns/playing-haptics.md`, `hig/patterns/going-full-screen.md`, `hig/foundations/typography.md` + `color.md` (legibility gates); visual `workouts-01` | HIG: Activity rings, Charting data |
| Settings / list screen | + `field-notes/components.md` § Settings list, `hig/patterns/settings.md` (few settings, good defaults, in-context options, respect system settings) | HIG: Settings, Lists and tables, Toggles |
| Embedded web content: iframes, in-app browser/webview, rendering email or CMS HTML, external links from an app, embed fallbacks | + `hig/components/content/web-views.md` (sandbox + sanitise, back/forward only for multi-page, never rebuild a browser, open external in new tab/system browser, embed-refused fallback, block remote content) | HIG: Modality, Privacy |
| Lists and data tables: settings/option lists, master-detail lists, sortable/resizable tables, zebra stripes, row selection + checkmarks, info (ⓘ) vs chevron rows, A–Z index rails, responsive tables | + `hig/components/layout/lists-and-tables.md` (`<table>` semantics + `aria-sort`, selection feedback by task, middle truncation, grouped list = field-note Settings list, info button vs disclosure indicator, no index beside trailing controls, tree/treegrid for hierarchy), `hig/components/layout/collections.md`, `field-notes/components.md` § Settings list; visual `lists-and-tables-01` | HIG: Outline views, Split views |
| Static text roles: button/menu/list labels, form `<label>`, text colour hierarchy (primary/secondary/tertiary/quaternary), disabled/unavailable text, copyable values, dates/times/timers as text | + `hig/components/layout/labels.md` (label vs field vs text view, four text-colour roles + contrast, selectable text, `<time>` + `Intl`, timers from timestamps), `field-notes/tokens.md` § Ink, `hig/foundations/typography.md` + `color.md` gates; visual `labels-01` | HIG: Text fields, Buttons, Complications |
| Accordions, expandable rows, "Advanced options", show more/less, collapsible sections, tree rows, expanding dialogs | + `hig/components/layout/disclosure-controls.md` (essentials visible, advanced collapsed, `aria-expanded` buttons/`<details>`, chevron direction incl. RTL, descriptive label, one expander per view, open on error/find), `hig/foundations/motion.md`, `hig/patterns/feedback.md`; visuals `disclosure-controls-01 … 02` | HIG: Outline views, Lists and tables, Buttons |
| File/asset browsers, cascading category or taxonomy pickers, Miller columns, Finder-like explorers, deep hierarchies with preview pane | + `hig/components/layout/column-views.md` (root in first column, chevron parents, leaf preview + metadata, resizable columns with keyboard separators, arrow-key tree navigation, mobile → drill-in stack), `hig/patterns/file-management.md`, `hig/foundations/layout.md` | HIG: Lists and tables, Outline views, Split views |
| Galleries, image/product grids, carousels/shelves, template or app pickers, photo libraries, selectable/reorderable item sets | + `hig/components/layout/collections.md` (standard grid/row, table for text, padding so focus/hover isn't clipped, selection + edit without gesture-only, animate insert/delete/reorder, never reflow under the user), `hig/components/content/image-views.md`, `hig/foundations/layout.md`, `hig/patterns/drag-and-drop.md` | HIG: Lists and tables |
| Grouping: cards, panels, fieldsets, settings groups, section containers, callout boxes, form sections with titles | + `hig/components/layout/boxes.md` (border OR tone, small vs container, padding/alignment instead of nested boxes, short sentence-case title, `<fieldset>/<legend>`), `field-notes/principles.md` § 3 (groups not cards), `hig/foundations/layout.md`, `hig/foundations/color.md` (surface levels) | HIG: Collections, Lists and tables, Disclosure controls |
| Long text and multi-line input: textarea, notes/comment/message boxes, rich-text editors, read-only text panels, copyable error text/IDs, on-screen keyboard type | + `hig/components/content/text-views.md` (label vs field vs text view, scroll with max height, start-aligned label colour, legible at any text size, selectable + Copy, right keyboard attributes), `hig/patterns/entering-data.md`, `hig/foundations/typography.md` (TYPOGRAPHY GATE), `field-notes/engineering-gotchas.md` (16 px, autogrow) | HIG: Labels, Text fields, Virtual keyboards |
| Wizard / onboarding / form | + `field-notes/components.md` § Wizard, `hig/patterns/onboarding.md` (optional, interactive, tips over tours, postpone setup, permissions/ratings timing), `hig/patterns/entering-data.md` (pre-gather, defaults, choices over typing, live validation, Continue only when required data is in), `hig/foundations/privacy.md` (no permission requests up front; ask only for needed data) | HIG: Onboarding, Entering data, Text fields, Pickers |
| Consent / permission / connect screen | + `field-notes/components.md` § Consent screen, `hig/foundations/privacy.md` (grant dialog vs pre-alert screen) | HIG: Managing accounts, Alerts/Sheets |
| Asking for location/camera/mic/notifications/contacts, pre-permission ("soft ask") screens, cookie/tracking consent, purpose/reason copy, sign-in & password/passkey flows, storing tokens | + `hig/foundations/privacy.md` (visuals `privacy-01 … 04`) | HIG: Managing accounts, Sign in with Apple, Entering data, Onboarding |
| Landing / marketing page | + `field-notes/landing-and-motion.md`, `hig/overview/design-landing.md` (Apple's own page: section rhythm, cards, links), `hig/foundations/motion.md` (purposeful motion, no ~0.2 Hz loops, no edge motion) | HIG: Branding, Typography, Materials |
| Dashboard / analytics / any chart, graph or sparkline | + `hig/patterns/charting-data.md` (message first, detail on demand, common types, descriptive text, consistency, accessibility), **`hig/components/content/charts.md`** (mark types, fixed vs dynamic axis, zero baseline for bars, quiet grid, not colour alone, per-element vs grouped labels, keyboard path, hide tick text from AT; visual `charts-01`), `field-notes/components.md` § Dashboard tiles, `hig/foundations/accessibility.md` (not colour alone) | HIG: Color, Layout |
| Dark mode | + `hig/foundations/dark-mode.md`, `field-notes/tokens.md` § Dark, `hig/foundations/color.md`, `tokens/apple-system-colors.css` | HIG: Dark Mode, Color, Materials |
| Design review / audit | `field-notes/anti-patterns.md` + checklist in `SKILL.md` + `visual-examples/README.md` (compare screenshots with Apple's ✗/✓ images) | HIG pages for every component on screen |
| Visual proportions in doubt | `screenshots-described/` | — |

When a HIG page and a field note disagree: the **field note wins for the web** when it records
an explicit user decision (marked **[user decision]**); otherwise follow the HIG and note the
conflict.

## HIG ingestion status

Full HIG tree as of 2026-09-28 (from Apple's navigator index). File naming:
`hig/<section>/<slug>.md`, components as `hig/components/<group>/<slug>.md`. Update the row
on every ingestion. `—` = not yet ingested.

### Landing & overview
| Page | File | Ingested |
|---|---|---|
| developer.apple.com/design (landing) | `hig/overview/design-landing.md` | 2026-09-28 |
| HIG home (/design/human-interface-guidelines) | `hig/getting-started/_index.md` | 2026-09-28 |

### Getting started  (collection page: `hig/getting-started/_index.md`)
| Page | File | Ingested |
|---|---|---|
| Design principles `design-principles` | `hig/getting-started/design-principles.md` | 2026-09-28 |
| Designing for iOS `designing-for-ios` | `hig/getting-started/designing-for-ios.md` | 2026-09-28 |
| Designing for iPadOS `designing-for-ipados` | `hig/getting-started/designing-for-ipados.md` | 2026-09-28 |
| Designing for macOS `designing-for-macos` | `hig/getting-started/designing-for-macos.md` | 2026-09-28 |
| Designing for tvOS `designing-for-tvos` | `hig/getting-started/designing-for-tvos.md` | 2026-09-28 |
| Designing for visionOS `designing-for-visionos` | `hig/getting-started/designing-for-visionos.md` | 2026-09-28 |
| Designing for watchOS `designing-for-watchos` | `hig/getting-started/designing-for-watchos.md` | 2026-09-28 |
| Designing for games `designing-for-games` | `hig/getting-started/designing-for-games.md` | 2026-09-28 |
| Designing for iPhone Duo `designing-for-iphone-duo` | `hig/getting-started/designing-for-iphone-duo.md` | 2026-09-28 |

### Foundations  (collection page: —; **all 18 pages ingested**)
| Page | File | Ingested |
|---|---|---|
| Accessibility `accessibility` | `hig/foundations/accessibility.md` | 2026-09-28 |
| App icons `app-icons` | `hig/foundations/app-icons.md` | 2026-09-28 |
| Branding `branding` | `hig/foundations/branding.md` | 2026-09-28 |
| Color `color` ⚠️ CRITICAL | `hig/foundations/color.md` | 2026-09-28 |
| Dark Mode `dark-mode` (part of COLOR GATE) | `hig/foundations/dark-mode.md` | 2026-09-28 |
| Icons `icons` | `hig/foundations/icons.md` | 2026-09-28 |
| Images `images` | `hig/foundations/images.md` | 2026-09-28 |
| Immersive experiences `immersive-experiences` | `hig/foundations/immersive-experiences.md` | 2026-09-28 |
| Inclusion `inclusion` | `hig/foundations/inclusion.md` | 2026-09-28 |
| Layout `layout` ⚠️ CRITICAL | `hig/foundations/layout.md` | 2026-09-28 |
| Materials `materials` ⚠️ CRITICAL | `hig/foundations/materials.md` | 2026-09-28 |
| Motion `motion` | `hig/foundations/motion.md` | 2026-09-28 |
| Privacy `privacy` | `hig/foundations/privacy.md` | 2026-09-28 |
| Right to left `right-to-left` | `hig/foundations/right-to-left.md` | 2026-09-28 |
| SF Symbols `sf-symbols` | `hig/foundations/sf-symbols.md` (+ measured animation kit `symbol-effects.md`) | 2026-09-28 |
| Spatial layout `spatial-layout` (visionOS only) | `hig/foundations/spatial-layout.md` | 2026-09-28 |
| Typography `typography` ⚠️ CRITICAL | `hig/foundations/typography.md` (+ exact tables `tokens/apple-typography.json`, CSS web preview) | 2026-09-28 |
| Writing `writing` | `hig/foundations/writing.md` | 2026-09-28 |

### Patterns  (collection page: —; **25 of 25 ingested — Patterns complete**)
| Page | File | Ingested |
|---|---|---|
| Charting data `charting-data` | `hig/patterns/charting-data.md` | 2026-09-28 |
| Collaboration and sharing `collaboration-and-sharing` | `hig/patterns/collaboration-and-sharing.md` | 2026-09-28 |
| Drag and drop `drag-and-drop` | `hig/patterns/drag-and-drop.md` | 2026-09-28 |
| Entering data `entering-data` | `hig/patterns/entering-data.md` | 2026-09-28 |
| Feedback `feedback` ⚠️ CRITICAL | `hig/patterns/feedback.md` (+ `tokens/apple-feedback.{css,json}`, `tools/check-feedback.mjs`, `tools/feedback-probe.js`) | 2026-09-28 |
| File management `file-management` | `hig/patterns/file-management.md` | 2026-09-28 |
| Going full screen `going-full-screen` | `hig/patterns/going-full-screen.md` | 2026-09-28 |
| Launching `launching` | `hig/patterns/launching.md` | 2026-09-28 |
| Live-viewing apps `live-viewing-apps` | `hig/patterns/live-viewing-apps.md` | 2026-09-28 |
| Loading `loading` | `hig/patterns/loading.md` | 2026-09-28 |
| Managing accounts `managing-accounts` | `hig/patterns/managing-accounts.md` | 2026-09-28 |
| Managing notifications `managing-notifications` | `hig/patterns/managing-notifications.md` | 2026-09-28 |
| Modality `modality` | `hig/patterns/modality.md` | 2026-09-28 |
| Multitasking `multitasking` | `hig/patterns/multitasking.md` | 2026-09-28 |
| Offering help `offering-help` | `hig/patterns/offering-help.md` | 2026-09-28 |
| Onboarding `onboarding` | `hig/patterns/onboarding.md` | 2026-09-28 |
| Playing audio `playing-audio` | `hig/patterns/playing-audio.md` | 2026-09-28 |
| Playing haptics `playing-haptics` (recommended for mobile, not a gate) | `hig/patterns/playing-haptics.md` (+ `tokens/apple-haptics.json`, MEASURED from the demo audio/video) | 2026-09-28 |
| Playing video `playing-video` | `hig/patterns/playing-video.md` | 2026-09-28 |
| Printing `printing` | `hig/patterns/printing.md` | 2026-09-29 |
| Ratings and reviews `ratings-and-reviews` | `hig/patterns/ratings-and-reviews.md` | 2026-09-29 |
| Searching `searching` | `hig/patterns/searching.md` | 2026-09-29 |
| Settings `settings` | `hig/patterns/settings.md` | 2026-09-29 |
| Undo and redo `undo-and-redo` | `hig/patterns/undo-and-redo.md` | 2026-09-29 |
| Workouts `workouts` | `hig/patterns/workouts.md` | 2026-09-29 |

### Components  (collection page: —; **Content group complete**: Charts, Image views, Text views, Web views · Layout and organization: Boxes, Collections, Column views, Disclosure controls, Labels, Lists and tables)
| Page | File | Ingested |
|---|---|---|
| **Content** (group) | | |
| &nbsp;&nbsp;Charts `charts` | `hig/components/content/charts.md` | 2026-09-29 |
| &nbsp;&nbsp;Image views `image-views` | `hig/components/content/image-views.md` | 2026-09-29 |
| &nbsp;&nbsp;Text views `text-views` | `hig/components/content/text-views.md` | 2026-09-29 |
| &nbsp;&nbsp;Web views `web-views` | `hig/components/content/web-views.md` | 2026-09-29 |
| **Layout and organization** (group) | | |
| &nbsp;&nbsp;Boxes `boxes` | `hig/components/layout/boxes.md` | 2026-09-29 |
| &nbsp;&nbsp;Collections `collections` | `hig/components/layout/collections.md` | 2026-09-29 |
| &nbsp;&nbsp;Column views `column-views` | `hig/components/layout/column-views.md` | 2026-09-29 |
| &nbsp;&nbsp;Disclosure controls `disclosure-controls` | `hig/components/layout/disclosure-controls.md` | 2026-09-29 |
| &nbsp;&nbsp;Labels `labels` | `hig/components/layout/labels.md` | 2026-09-29 |
| &nbsp;&nbsp;Lists and tables `lists-and-tables` | `hig/components/layout/lists-and-tables.md` | 2026-09-29 |
| &nbsp;&nbsp;Lockups `lockups` | — | — |
| &nbsp;&nbsp;Outline views `outline-views` | — | — |
| &nbsp;&nbsp;Split views `split-views` | — | — |
| &nbsp;&nbsp;Tab views `tab-views` | — | — |
| **Menus and actions** (group) | | |
| &nbsp;&nbsp;Activity views `activity-views` | — | — |
| &nbsp;&nbsp;Buttons `buttons` | — | — |
| &nbsp;&nbsp;Context menus `context-menus` | — | — |
| &nbsp;&nbsp;Dock menus `dock-menus` | — | — |
| &nbsp;&nbsp;Edit menus `edit-menus` | — | — |
| &nbsp;&nbsp;Home Screen quick actions `home-screen-quick-actions` | — | — |
| &nbsp;&nbsp;Menus `menus` | — | — |
| &nbsp;&nbsp;Ornaments `ornaments` | — | — |
| &nbsp;&nbsp;Pop-up buttons `pop-up-buttons` | — | — |
| &nbsp;&nbsp;Pull-down buttons `pull-down-buttons` | — | — |
| &nbsp;&nbsp;The menu bar `the-menu-bar` | — | — |
| &nbsp;&nbsp;Toolbars `toolbars` | — | — |
| **Navigation and search** (group) | | |
| &nbsp;&nbsp;Path controls `path-controls` | — | — |
| &nbsp;&nbsp;Search fields `search-fields` | — | — |
| &nbsp;&nbsp;Sidebars `sidebars` | — | — |
| &nbsp;&nbsp;Tab bars `tab-bars` | — | — |
| &nbsp;&nbsp;Token fields `token-fields` | — | — |
| **Presentation** (group) | | |
| &nbsp;&nbsp;Action sheets `action-sheets` | — | — |
| &nbsp;&nbsp;Alerts `alerts` | — | — |
| &nbsp;&nbsp;Page controls `page-controls` | — | — |
| &nbsp;&nbsp;Panels `panels` | — | — |
| &nbsp;&nbsp;Popovers `popovers` | — | — |
| &nbsp;&nbsp;Scroll views `scroll-views` | — | — |
| &nbsp;&nbsp;Sheets `sheets` | — | — |
| &nbsp;&nbsp;Windows `windows` | — | — |
| **Selection and input** (group) | | |
| &nbsp;&nbsp;Color wells `color-wells` | — | — |
| &nbsp;&nbsp;Combo boxes `combo-boxes` | — | — |
| &nbsp;&nbsp;Digit entry views `digit-entry-views` | — | — |
| &nbsp;&nbsp;Image wells `image-wells` | — | — |
| &nbsp;&nbsp;Pickers `pickers` | — | — |
| &nbsp;&nbsp;Segmented controls `segmented-controls` | — | — |
| &nbsp;&nbsp;Sliders `sliders` | — | — |
| &nbsp;&nbsp;Steppers `steppers` | — | — |
| &nbsp;&nbsp;Text fields `text-fields` | — | — |
| &nbsp;&nbsp;Toggles `toggles` | — | — |
| &nbsp;&nbsp;Virtual keyboards `virtual-keyboards` | — | — |
| **Status** (group) | | |
| &nbsp;&nbsp;Activity rings `activity-rings` | — | — |
| &nbsp;&nbsp;Gauges `gauges` | — | — |
| &nbsp;&nbsp;Progress indicators `progress-indicators` | — | — |
| &nbsp;&nbsp;Rating indicators `rating-indicators` | — | — |
| **System experiences** (group) | | |
| &nbsp;&nbsp;App Shortcuts `app-shortcuts` | — | — |
| &nbsp;&nbsp;Complications `complications` | — | — |
| &nbsp;&nbsp;Controls `controls` | — | — |
| &nbsp;&nbsp;Live Activities `live-activities` | — | — |
| &nbsp;&nbsp;Notifications `notifications` | — | — |
| &nbsp;&nbsp;Snippets `snippets` | — | — |
| &nbsp;&nbsp;Status bars `status-bars` | — | — |
| &nbsp;&nbsp;Top Shelf `top-shelf` | — | — |
| &nbsp;&nbsp;Watch faces `watch-faces` | — | — |
| &nbsp;&nbsp;Widgets `widgets` | — | — |

### Inputs  (collection page: —)
| Page | File | Ingested |
|---|---|---|
| Action button `action-button` | — | — |
| Apple Pencil and Scribble `apple-pencil-and-scribble` | — | — |
| Camera Control `camera-control` | — | — |
| Digital Crown `digital-crown` | — | — |
| Eyes `eyes` | — | — |
| Focus and selection `focus-and-selection` | — | — |
| Game controls `game-controls` | — | — |
| Gestures `gestures` | — | — |
| Gyroscope and accelerometer `gyro-and-accelerometer` | — | — |
| Keyboards `keyboards` | — | — |
| Nearby interactions `nearby-interactions` | — | — |
| Pointing devices `pointing-devices` | — | — |
| Remotes `remotes` | — | — |

### Technologies  (collection page: —)
| Page | File | Ingested |
|---|---|---|
| AirPlay `airplay` | — | — |
| Always On `always-on` | — | — |
| App Clips `app-clips` | — | — |
| Apple In-App Purchase `apple-in-app-purchase` | — | — |
| Apple Pay `apple-pay` | — | — |
| Augmented reality `augmented-reality` | — | — |
| CareKit `carekit` | — | — |
| CarPlay `carplay` | — | — |
| Game Center `game-center` | — | — |
| Generative AI `generative-ai` | — | — |
| HealthKit `healthkit` | — | — |
| HomeKit `homekit` | — | — |
| iCloud `icloud` | — | — |
| ID Verifier `id-verifier` | — | — |
| iMessage apps and stickers `imessage-apps-and-stickers` | — | — |
| Live Photos `live-photos` | — | — |
| Mac Catalyst `mac-catalyst` | — | — |
| Machine learning `machine-learning` | — | — |
| Maps `maps` | — | — |
| NFC `nfc` | — | — |
| Photo editing `photo-editing` | — | — |
| ResearchKit `researchkit` | — | — |
| SharePlay `shareplay` | — | — |
| ShazamKit `shazamkit` | — | — |
| Sign in with Apple `sign-in-with-apple` | — | — |
| Siri `siri` | — | — |
| Tap to Pay on iPhone `tap-to-pay-on-iphone` | — | — |
| VoiceOver `voiceover` | — | — |
| Wallet `wallet` | — | — |

### Other design pages (what's new, resources, pathway, videos, awards…)
| Page | File | Ingested |
|---|---|---|

## Field notes (already written)
| File | Contents |
|---|---|
| `field-notes/principles.md` | The design language rules, with the reasoning behind each |
| `field-notes/tokens.md` | Exact colours, radii, shadows, type scale, spacing, motion — Tailwind + CSS vars |
| `field-notes/components.md` | Validated component recipes: group, row, tile, buttons, segmented, choice, field, wizard shell, consent screen, dashboard tiles |
| `field-notes/anti-patterns.md` | Ideas that were tried and rejected, and why |
| `field-notes/engineering-gotchas.md` | Layout/CSS traps that break these designs in real browsers |
| `field-notes/landing-and-motion.md` | Marketing-page language: masked headlines, glass, per-section palettes, scroll choreography |
| `references/symbol-effects.md` | SF Symbols animation presets measured frame by frame from Apple's videos → web kit (`tokens/apple-symbol-effects.*`), usage + how to adapt to any icon; verified by `tools/check-symbol-effects.mjs` |
| `apple-web/site-patterns.md` | Apple's own website patterns measured live: global mega-menu, local nav, cards, docs layout, section colour coding |
| `screenshots-described/curated-references.md` | 20 curated reference shots behind the field notes, described |
