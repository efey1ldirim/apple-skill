# Reference index

Read this first. It tells you which files to open for the task at hand and what has been
ingested so far.

## Routing table — what to read for which task

| Task | Always read | Then read |
|---|---|---|
| Any UI work | `hig/getting-started/design-principles.md` (Apple's 8 principles — the decision lens), `field-notes/principles.md`, `field-notes/anti-patterns.md` | — |
| Web UI (React/Tailwind/CSS) | + `field-notes/tokens.md`, `field-notes/components.md`, `field-notes/engineering-gotchas.md` | HIG pages for the components you use |
| Settings / list screen | + `field-notes/components.md` § Settings list | HIG: Settings, Lists and tables, Toggles |
| Wizard / onboarding / form | + `field-notes/components.md` § Wizard | HIG: Onboarding, Entering data, Text fields, Pickers |
| Consent / permission / connect screen | + `field-notes/components.md` § Consent screen | HIG: Privacy, Managing accounts, Alerts/Sheets |
| Landing / marketing page | + `field-notes/landing-and-motion.md`, `hig/overview/design-landing.md` (Apple's own page: section rhythm, cards, links) | HIG: Branding, Typography, Motion, Materials |
| Dashboard / analytics | + `field-notes/components.md` § Dashboard tiles | HIG: Charting data, Charts, Layout |
| Dark mode | + `field-notes/tokens.md` § Dark | HIG: Dark Mode, Color, Materials |
| Design review / audit | `field-notes/anti-patterns.md` + checklist in `SKILL.md` | HIG pages for every component on screen |
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
| Designing for iOS `designing-for-ios` | — | — |
| Designing for iPadOS `designing-for-ipados` | — | — |
| Designing for macOS `designing-for-macos` | — | — |
| Designing for tvOS `designing-for-tvos` | — | — |
| Designing for visionOS `designing-for-visionos` | — | — |
| Designing for watchOS `designing-for-watchos` | — | — |
| Designing for games `designing-for-games` | — | — |
| Designing for iPhone Duo `designing-for-iphone-duo` | — | — |

### Foundations  (collection page: —)
| Page | File | Ingested |
|---|---|---|
| Accessibility `accessibility` | — | — |
| App icons `app-icons` | — | — |
| Branding `branding` | — | — |
| Color `color` | — | — |
| Dark Mode `dark-mode` | — | — |
| Icons `icons` | — | — |
| Images `images` | — | — |
| Immersive experiences `immersive-experiences` | — | — |
| Inclusion `inclusion` | — | — |
| Layout `layout` | — | — |
| Materials `materials` | — | — |
| Motion `motion` | — | — |
| Privacy `privacy` | — | — |
| Right to left `right-to-left` | — | — |
| SF Symbols `sf-symbols` | — | — |
| Spatial layout `spatial-layout` | — | — |
| Typography `typography` | — | — |
| Writing `writing` | — | — |

### Patterns  (collection page: —)
| Page | File | Ingested |
|---|---|---|
| Charting data `charting-data` | — | — |
| Collaboration and sharing `collaboration-and-sharing` | — | — |
| Drag and drop `drag-and-drop` | — | — |
| Entering data `entering-data` | — | — |
| Feedback `feedback` | — | — |
| File management `file-management` | — | — |
| Going full screen `going-full-screen` | — | — |
| Launching `launching` | — | — |
| Live-viewing apps `live-viewing-apps` | — | — |
| Loading `loading` | — | — |
| Managing accounts `managing-accounts` | — | — |
| Managing notifications `managing-notifications` | — | — |
| Modality `modality` | — | — |
| Multitasking `multitasking` | — | — |
| Offering help `offering-help` | — | — |
| Onboarding `onboarding` | — | — |
| Playing audio `playing-audio` | — | — |
| Playing haptics `playing-haptics` | — | — |
| Playing video `playing-video` | — | — |
| Printing `printing` | — | — |
| Ratings and reviews `ratings-and-reviews` | — | — |
| Searching `searching` | — | — |
| Settings `settings` | — | — |
| Undo and redo `undo-and-redo` | — | — |
| Workouts `workouts` | — | — |

### Components  (collection page: —)
| Page | File | Ingested |
|---|---|---|
| **Content** (group) | | |
| &nbsp;&nbsp;Charts `charts` | — | — |
| &nbsp;&nbsp;Image views `image-views` | — | — |
| &nbsp;&nbsp;Text views `text-views` | — | — |
| &nbsp;&nbsp;Web views `web-views` | — | — |
| **Layout and organization** (group) | | |
| &nbsp;&nbsp;Boxes `boxes` | — | — |
| &nbsp;&nbsp;Collections `collections` | — | — |
| &nbsp;&nbsp;Column views `column-views` | — | — |
| &nbsp;&nbsp;Disclosure controls `disclosure-controls` | — | — |
| &nbsp;&nbsp;Labels `labels` | — | — |
| &nbsp;&nbsp;Lists and tables `lists-and-tables` | — | — |
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
| `screenshots-described/curated-references.md` | 20 curated reference shots behind the field notes, described |
