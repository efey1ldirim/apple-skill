# Typography — ⚠️ CRITICAL (zero-tolerance gate)
Source: https://developer.apple.com/design/human-interface-guidelines/typography · Section: Foundations · Supported platforms: all six · Ingested: 2026-09-28 · Apple change log: 2025-12-16 (emphasized weights added). Two independent DocC fetches matched byte for byte (SHA-256 `4d3d540e7135301fb130e55c5d0577c31ed8c240cdf818712270ebdb89a1d034`). All 66 supplied screenshots were checked against the page, including each visible table segment and selected tab. Text only inside illustrative images is marked **(from screenshot)**.

**[user decision] Typography is CRITICAL, alongside Color and Layout.** Apply the TYPOGRAPHY GATE in `SKILL.md`. The complete numeric tables are preserved as facts in `tokens/apple-typography.json`; `tokens/apple-typography.css` is a labelled web preview translation. Run `tools/check-typography.mjs` and the live 200% text-scale check before shipping.

## In one line
Use readable type, a clear and stable hierarchy, and semantic text styles that respond to the person's chosen size. Treat the system's font metrics as the source of truth.

## Rules

### Ensuring legibility
- **must** Follow each platform's default and minimum text sizes for both system and custom fonts; test at real viewing distances and in varied conditions. A thin custom font needs more size than the listed minimum.
- **must** Test game labels and status text on every platform the game runs on. If they are hard to read, increase size, raise foreground/background contrast, add a legible backing shape, or use a typeface optimised for reading.
- **should** Prefer Regular, Medium, Semibold and Bold. Ultralight, Thin and Light are especially risky at small sizes.

### Conveying hierarchy
- **should** Use weight, size and colour to distinguish primary from secondary information; preserve that order when text scales.
- **should** Keep the number of typefaces small so the hierarchy remains consistent.
- **should** Scale what matters most for the task. Body content and dialogue may need greater growth than tab labels or transient hit values.

### Using system fonts
- **should** Use SF or NY and semantic built-in text styles where suitable. SF includes Pro, Compact, Arabic, Armenian, Georgian, Hebrew and Mono; the named script families except Mono also have rounded variants. NY is a serif companion to SF.
- **must** Access system fonts through platform APIs; do not bundle the system font files into an app or game. SwiftUI `Font.Design.default` and `.serif` expose SF and NY.
- **should** Let the variable font choose continuous optical size and weight. Pick discrete Text/Display optical masters only when a design tool cannot support the variable format.
- **should** Match SF Symbol weight to adjacent text; both share corresponding weights.
- **should** Prefer system text styles for automatic Dynamic Type and accessibility scaling. A style combines weight, point size and leading; the emphasized variant has a separate weight.
- **may** Use symbolic traits to add emphasis or adjust leading. Loose leading helps long passages and wide columns; tight leading may fit a constrained short row. **Avoid tight leading at three or more lines.** SwiftUI: `Font.leading(_:)`.
- **should** Adjust tracking in a *mockup* if necessary to match the running system font at a particular size. In native rendering, the system varies tracking automatically; the lookup tables below are not instructions to hard-code tracking in production.

### Using custom fonts
- **must** Test legibility across device distances, contexts, styles and weights; use the platform minimums as floors, not target sizes.
- **must** Reproduce Dynamic Type and Bold Text behaviours (or offer another clear text-size control where a Unity plug-in cannot be used). SwiftUI has custom-font scaling guidance; Apple's Unity plug-ins can support Dynamic Type in games.

### Supporting Dynamic Type
- **must** Adapt layouts at every supported size, including accessibility categories. Check glyphs and meaningful icons alongside text; SF Symbols scale with Dynamic Type.
- **must** Keep key text available at large sizes. Let useful labels wrap to enough lines. In a scrollable area, do not cut off text unless a separate full-text view is available (`UILabel.numberOfLines`).
- **should** Stack inline metadata and reduce column count when large text would crowd or overlap it. UIKit `UIContentSizeCategory.isAccessibilityCategory` can trigger an alternative arrangement.
- **must** Preserve the information order when text grows; keep the primary element toward the top.
- **should** Test with iOS/iPadOS Larger Accessibility Text Sizes enabled and at the largest standard and accessibility categories, not just at the default.

## Specs & values

### Platform legibility floors (HIG, points)
| Platform | Default | Minimum |
|---|---:|---:|
| iOS, iPadOS | 17 | 11 |
| macOS | 13 | 10 |
| tvOS | 29 | 23 |
| visionOS | 17 | 12 |
| watchOS | 16 | 12 |

The defaults are the ordinary reading targets; minimums are floors. A light custom face may require larger values. Native points must not be confused with CSS pixels.

### Complete text-style tables
`tokens/apple-typography.json` records **every row and every column** from the HIG tables, with exact weight, size, leading (called *line height* on macOS), and emphasized weight:

| Platform group | Categories | Styles per category | Design resolution |
|---|---|---:|---|
| iOS/iPadOS Dynamic Type | xSmall, Small, Medium, Large **(default)**, xLarge, xxLarge, xxxLarge, AX1–AX5 | 11 | 144 ppi @2x; 216 ppi @3x |
| macOS built-in styles | default only; no Dynamic Type | 11 | 144 ppi @2x |
| tvOS built-in styles | default table | 9 | 72 ppi @1x; 144 ppi @2x |
| watchOS Dynamic Type | xSmall, Small **(38 mm default)**, Large **(40/41/42 mm default)**, xLarge **(44/45/49 mm default)**, xxLarge, xxxLarge, AX1–AX3 | 10 | Not stated alongside these style tables |

For orientation, iOS/iPadOS **Large (default)** has Large Title 34/41 pt Regular → Bold emphasized; Title 1 28/34 and Title 2 22/28 Regular → Bold; Title 3 20/25 Regular → Semibold; Headline 17/22 Semibold; Body 17/22 Regular → Semibold; Callout 16/21; Subhead 15/20; Footnote 13/18; Caption 1 12/16; Caption 2 11/13. iOS/iPadOS **AX5** raises Body to 53/62 pt, Large Title to 60/70 pt, and Caption 2 to 40/48 pt. The very large accessibility steps are deliberately non-linear; never approximate them with one fixed multiplier.

macOS's Body is 13/16 pt Regular → Semibold; its Headline is 13/16 Bold → Heavy, and its smallest built-in styles are 10/13. tvOS Body is 29/36 pt Medium → Bold, Title 1 is 76/96, and Caption 2 is 23/30. watchOS varies defaults by watch size: Body is 15/17.5 (Small), 16/18.5 (Large), or 17/19.5 (xLarge); at AX3 it is 23/25.5. See the JSON for all intermediate numbers rather than interpolating.

### Complete tracking tables
`tokens/apple-typography.json` records each published point size with **both** tracking in 1/1000 em and tracking in points. Never derive the published points column by multiplying and rounding the em column: Apple reports optical values that can differ, including macOS/tvOS 52–53 pt values that differ from the SF Pro tab.

| Platform / face | Published sizes | Notable exact values (1/1000 em; points) |
|---|---:|---|
| iOS/iPadOS/visionOS SF Pro | 64 | 17 pt −26; −0.43 pt · 34 pt +12; +0.40 pt · 80–96 pt 0 |
| iOS/iPadOS/visionOS SF Pro Rounded | 64 | 17 pt +22; +0.37 pt · 34 pt +12; +0.38 pt · 80–96 pt 0 |
| iOS/iPadOS/visionOS New York | 57 | 15 pt 0 · 34 pt −14; −0.45 pt · 260 pt −18; −4.57 pt |
| macOS SF Pro | 64 | 17 pt −26; −0.43 pt · 52 pt +6; +0.31 pt · 53 pt +6; +0.33 pt |
| tvOS SF Pro | 64 | Same published row values as macOS, including 52/53 pt |
| watchOS SF Compact | 64 | 16 pt 0 · 19 pt −12; −0.22 pt · 20 pt 0 · 96 pt −28; −2.62 pt |
| watchOS SF Compact Rounded | 64 | 20 pt 0 · 96 pt −28; −2.62 pt |

The iOS/iPadOS/visionOS, macOS and tvOS tables cite 144 ppi @2x and 216 ppi @3x for tracking mockups; watchOS cites 144 ppi @2x. Apple notes that some apps do not express tracking in 1/1000 em. Use the exact published row for the size and face when preparing a mockup; do not extrapolate.

### APIs and dated changes
- SF and NY downloads: `developer.apple.com/fonts/`; SF Symbols are a separate asset library.
- Dynamic Type development: SwiftUI Text input/output; custom-font text guidance; UIKit `UILabel.numberOfLines` and `UIContentSizeCategory.isAccessibilityCategory`; Unity plug-ins.
- macOS control-specific font APIs: `controlContentFont(ofSize:)`, `labelFont(ofSize:)`, `menuFont(ofSize:)`, `menuBarFont(ofSize:)`, `messageFont(ofSize:)`, `paletteFont(ofSize:)`, `titleBarFont(ofSize:)`, `toolTipsFont(ofSize:)`, `userFont(ofSize:)`, `userFixedPitchFont(ofSize:)`, `boldSystemFont(ofSize:)`, `systemFont(ofSize:)`.
- Page history: emphasized weights added 2025-12-16; Dynamic Type guidance expanded 2025-03-07; Unity and visionOS billboarding guidance 2024-06-10; font-weight art and tvOS table clarification 2023-09-12; visionOS guidance 2023-06-21.

## Platform considerations
- **iOS/iPadOS:** SF Pro is the system font; NY is available. Dynamic Type includes 7 standard categories and AX1–AX5. Use the platform's semantic styles and test every category.
- **macOS:** SF Pro is the system font; NY is available to Mac Catalyst apps. macOS has no Dynamic Type. Use the specific dynamic system font variant corresponding to a standard control when matching it.
- **tvOS:** SF Pro is the system font and NY is available. Its built-in styles are notably larger for viewing distance; the table starts with 76 pt Title 1 and has a 29 pt Body.
- **visionOS:** SF Pro is the system font; specify NY text styles explicitly. Body/title Dynamic Type styles are bolder, and Extra Large Title 1/2 support wide editorial layouts. Prefer flat 2D text for important reading. Test text at every spatial scale, maximise contrast against its container, and use bold rather than an artificial shadow for text without a backing surface. Spatial labels should billboard toward the wearer so the baseline remains perpendicular to the line of sight.
- **watchOS:** SF Compact is the system font; NY is available; complications use SF Compact Rounded. The default text-size category depends on watch size, and AX1–AX3 add accessibility sizes.

## Visual notes (from screenshots)
- Screenshots 1–14 show the conceptual guidance: the yellow typographic hierarchy sketch; the game comparison (**typography-01**); SF and NY type specimens; nine weight columns with upright and italic rows; a Mail hierarchy example; default versus largest accessibility Mail (**typography-02**); and the visionOS 2D ✓ / depth-heavy 3D ✗ pair (**typography-03**).
- **typography-01:** In the difficult game state, small plant names float directly over a light pink and grey environment and the progress panel is compact. In the improved state, names are larger and sit on dark translucent lozenges; the progress panel grows and uses more substantial text. The image labels “Coffeeberry”, “Poppy”, “Yucca” and “Plants Recorded 0/3” are **(from screenshot)**.
- **typography-02:** At default size, Mail keeps contact avatar, sender, recipient, date and attachment in a compact header with several body paragraphs on the screen. At the largest accessibility size, the sender occupies two lines, date and attachment move below the recipient, the subject wraps, and the body continues under the viewport. The example sender “Orkun Kucuksevim” and subject “New hiking trail” are **(from screenshot)**. The screenshot makes vertical scrolling and reprioritisation visible; it does not imply that important body text should be clipped.
- **typography-03:** In a room, the readable 2D serif word sits on a translucent window; the extruded 3D version creates overlapping white letter faces and becomes harder to parse. The word “hello” is **(from screenshot)**.
- Screenshots 15–26 show every iOS/iPadOS category from xSmall through AX5. Screenshots 27–28 show the macOS and tvOS tables. Screenshots 29–37 show watchOS xSmall through AX3. The selected tab always has a short underline and its table immediately follows; headers separate style, weight, size, leading and emphasized weight. The numbers and selected labels match the fetched tables.
- Screenshots 38–49 show the SF Pro, SF Pro Rounded and New York tracking tabs across their full ranges. Screenshots 50–53 repeat the macOS tracking table, 54–57 the tvOS table, 58–61 SF Compact, and 62–65 SF Compact Rounded. Screenshot 66 shows resource links, three video cards and the change-log heading. The screenshots contain no extra table rows beyond the fetched text.

## Web translation
- Import `tokens/apple-typography.css` for opt-in SF-style web mockup variables; exact source tables remain in `.json`. The CSS converts native pt values to CSS px at a 16 px root **as a convention**, expressed in `rem` so browser zoom and user preferences remain effective. Do not call it native text rendering.
- Use a system UI font stack, semantic HTML heading/body roles and a small number of font families. Do not copy Apple's font binaries into the web bundle merely to mimic a native interface.
- Use the platform default as a practical body-size starting point; never treat the platform minimum as the desired body size. On web, inspect actual pixels, contrast and viewing distance. This refines `field-notes/tokens.md` rather than replacing its approved product-specific hierarchy.
- In responsive layouts, make content wrap; let row height grow; move timestamps and glyphs below main text as needed; reduce column count. Do not use a forced one-line truncation for meaningful content without a full-text path.
- Test browser zoom/text scaling to 200%, narrow widths and both themes with `tools/run-layout-probe.mjs`; inspect whether labels, controls and icons remain legible. This complements the Layout and Color gates.
- In web mockups, consult the exact tracking lookup only when visual matching is necessary. Do not apply a single global negative `letter-spacing` formula to every size or family. Native apps let the system manage it.

## Checklist
- [ ] Read this page and the exact JSON rows for the target platform and text category; use semantic native styles where available.
- [ ] Body text reaches the platform's ordinary default; no meaningful text falls below the platform minimum, and thin faces are larger.
- [ ] Hierarchy remains distinct at every text size; a small set of typefaces and Regular–Bold weights serve it.
- [ ] Custom fonts support Dynamic Type and Bold Text or an equivalent size control.
- [ ] Largest standard and accessibility sizes keep important content readable, wrap labels and adapt inline/column layout; icons scale too.
- [ ] No important text is lost to ellipsis in a scrollable view without a full-text route; three-line passages avoid tight leading.
- [ ] visionOS readable text is flat, high-contrast and facing the wearer.
- [ ] Static checker has 0 errors, warnings have a reason, and the 200% live text-scale/layout probe passes.
- [ ] Compare relevant UI against **typography-01 … 03** and verify light/dark appearances.

## Related
- Accessibility (✓ ingested): Dynamic Type, contrast and larger text.
- SF Symbols (✓ ingested): symbol weight matching and scale.
- Color (✓ CRITICAL): text/background contrast, including on materials.
- Materials (✓ CRITICAL): vibrancy and visionOS text contrast.
- Layout (✓ CRITICAL): reflow, size classes, 200% text scale.
- Branding (✓ ingested): branded typography without loss of readability.
- Writing (✓ ingested): labels, content hierarchy, brevity on small and large-distance screens.
- Resources: Fonts for Apple platforms; SF Symbols; SwiftUI Text input and output; UIKit Text display and fonts; AppKit Fonts; videos on Dynamic Type (WWDC24), expanded SF (WWDC22), UI typography (WWDC20).
