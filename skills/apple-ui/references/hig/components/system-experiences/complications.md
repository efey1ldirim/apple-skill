# Complications
Source: https://developer.apple.com/design/human-interface-guidelines/complications · Section: Components › System experiences · Supported platforms: **watchOS only** ("Not supported in iOS, iPadOS, macOS, tvOS, or visionOS"; only the Watch icon is dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **October 24, 2023** (links moved from deprecated ClockKit docs to WidgetKit; June 5, 2023: rectangular guidance updated for widgets in the Smart Stack; September 14, 2022: specifications for Apple Watch Ultra). One DocC fetch, read in full. **20 screenshots (hero → the page footer) were compared with the fetched text and image alt text line by line; they cover the whole page** (the Change log table is visible in the last one). Everything visible matches the fetch except the items listed under **Mismatches** below. **Read from the fetch only (not in screenshots):** the alt text and dark/light variants of the images, and the three video links (titles are visible on the cards; the videos were not watched, nothing from them is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. Numbers: **all size tables are captured below** (parsed from the fetch, not retyped; px = 2 × pt in every cell except one flagged typo).

## In one line
A complication (also called an *accessory*) shows **timely, relevant information on the watch face**, seen each time the wrist is raised. Ship **essential dynamic data** (a static launcher gets dropped), **support every family** (circular, corner, inline, rectangular; legacy templates for old watchOS), offer **several complications per family** each with **its own deep link**, **protect sensitive data on the Always-On display**, **pick update times deliberately**, choose **closed / open / segmented** gauges by the kind of number, make images **survive tinted mode** (no colour-only meaning, line widths ≥ 2 pt), and **supply placeholders**. Build with **WidgetKit** (ClockKit only for older OS). watchOS only; on the web the transferable idea is the **glanceable tile/widget**.

## Rules

### Framing (intro)
- People often prefer apps that offer **several powerful complications**: quick views of the data they care about, **without opening the app**.
- Most watch faces show **at least one** complication; some show **four or more**.
- **Since watchOS 9** the system groups complications into **families** (circular, inline, …) and defines **recommended layouts** for the data; a watch face **declares the family it supports in each slot**.
- Complications for **earlier watchOS** use **legacy templates**: **non-graphic** styles that **don't take the wearer's chosen colour**.
- **Developer note (callout):** prefer **WidgetKit** for watchOS 9+ (see "Migrating ClockKit complications to WidgetKit"); to support earlier versions keep implementing the **ClockKit data-source protocol** (`CLKComplicationDataSource`).

### Best practices
- **should** **Show essential, dynamic content people want at a glance.** Launching the app is possible, but people value **information that always feels current**; a **static** complication with no meaningful data is **less likely to keep a prominent spot** on the face.
- **should** **Support all complication families when possible.** More families = **available on more watch faces**. If a family can't show useful data, give an **image that represents the app (like the app icon)** so the complication still **launches the app**.
- **should** **Consider several complications per family.** It lets you use **shareable watch faces** and lets people build a face **around an app they love**. Example: a triathlon app offers **three circular complications** (swim, bike, run), each **deep-linking to its segment**, plus a **shareable watch face** preconfigured with those complications and the app's **custom images and colours**, so people **need no setup** (see Watch faces).
- **should** **Define a different deep link for each complication.** Each should open the **most relevant area**; if all open the same place they **seem less useful**.
- **must** **Keep privacy in mind.** On the **Always-On Retina display** the face may be **visible to other people**: help people **prevent sensitive information** from showing (see Always On).
- **should** **Choose update times carefully.** Data is supplied as a **timeline**: each entry carries the **time at which it should appear**. Different data needs different times (meeting app: **an hour before** the meeting; weather app: **when the forecast conditions are expected**). You may **update the timeline only a limited number of times per day**, and the system stores **a limited number of entries per app**, so **pick times that maximise usefulness**.

### Visual design
- **should** **Choose the ring or gauge style by the data.** Many families support a ring/gauge layout for **numbers that change over time**:
  - **Closed** style: a value that is **a percentage of a whole** (battery gauge).
  - **Open** style: **minimum and maximum are arbitrary**, or the value **isn't a percentage of a whole** (speed indicator).
  - **Segmented** style: like open, values **within an app-defined range**, and it can show **rapid value changes** (the Noise complication).
- **must** **Make sure images look good in tinted mode.** In tinted mode the system applies **one solid colour** to a complication's **text, gauges and images** and **desaturates full-colour images** unless you supply **tinted versions** (developer API `WidgetRenderingMode`; with **legacy templates** tinting applies **only to graphic complications**). So:
  - **must not** use **colour as the only way** to convey important information: people should get **the same information in tinted and non-tinted mode**.
  - **should** **supply an alternative tinted-mode version** of a full-colour image **when it looks bad desaturated**.
- **should** **Expect people to prefer tinted mode.** The system **converts the complication to grayscale** and tints images, gauges and text with **a single colour based on the wearer's selected colour**.
- **should** **Use line widths of 2 pt or more** in complication content; thinner lines are hard to see at a glance, **especially while moving**; choose weights that suit the image's size and complexity.
- **should** **Provide static placeholder images for each complication.** The system shows them when **there is no content** for the data (e.g. right after install, while it checks whether the app can produce a **localised placeholder**), and they can appear in the **carousel where people pick complications**. **Placeholder sizes vary by layout (and legacy template) and may differ from the size of the real image** (developer API `placeholder(in:)`).

### Circular (families: Infograph and Infograph Modular faces; also defines extra-large layouts for the X-Large face)
- Content: **text, gauges, full-colour images** in circular areas.
- **Regular layouts (8 named in the captions):** Closed gauge image · Closed gauge text · Open gauge image · Open gauge text · Open gauge range · Image · Stack image · Stack text.
- **may** Add **text curved along the bezel** to accompany a regular-size circular image (works on faces like Infograph); the text can fill **nearly 180°** of the bezel **before truncating**.
- The **system applies a circular mask to each image**.
- **SwiftUI default text (regular):** style **Rounded**, weight **Medium**; text size **12 pt (40 mm), 12.5 pt (41 mm), 13 pt (44 mm), 14.5 pt (45/49 mm)**.
- **Extra-large layouts** (same 8 names) are for **oversized treatment of important information** on the **X-Large** face (example: the Contacts complication with a **contact photo**); they show full-colour images, text and gauges in a **large circular region filling most of the face**; some text fields **support multicolour text**. The system masks the **circular, open-gauge and closed-gauge** images.
- **SwiftUI default text (extra-large):** Rounded, Medium; **34.5 pt (40 mm), 36.5 pt (41 mm), 36.5 pt (44 mm), 41 pt (45/49 mm)**.

### Corner (e.g. Infograph)
- Full-colour images, text and gauges **in the watch face's corners**; some templates support **multicolour text**.
- **Layouts (5):** Circular image · Gauge image · Gauge text · Stack text · Text image. Text and gauge **curve with the corner** of the face (quadrant arcs).
- The system applies a **circular mask to each image**.
- **SwiftUI default text:** Rounded, **Semibold**; **10 pt (40 mm), 10.5 pt (41 mm), 11 pt (44 mm), 12 pt (45/49 mm)**.

### Inline (utilitarian small and large)
- **Utilitarian small:** a **rectangular area in a corner** of the face (Chronograph, Simple faces); content = **image, interface icon or circular graph**. Layouts: **Flat · Ring image · Ring text · Square**.
- **Utilitarian large:** **primarily text**, optional **interface icon on the leading side** of the text; **spans the bottom** of the face (Utility, Motion faces). Layout: **Large flat**.

### Rectangular
- Full-colour images, text, **a gauge and an optional title** in a **large rectangular region**; some text fields **support multicolour text**.
- Suits **details of a value or process that changes over time**: room for **charts, graphs, diagrams**. Example: the **Heart Rate** complication shows a **24-hour graph of heart-rate values**, **high-contrast white and red** for the primary content and **lower-contrast gray** for the graph lines and labels, so it reads at a glance.
- **Since watchOS 10** a rectangular layout may be **shown in the Smart Stack**. **Optimise** by: (1) **supplying background colour or content** that conveys information or aids recognition; (2) using **intents to specify relevancy**, so the widget shows when it is **most appropriate and useful**; (3) creating a **custom layout optimised for the Smart Stack** (developer API `WidgetFamily.accessoryRectangular`; see Widgets for Smart Stack guidance).
- **Layouts (3):** Standard body · Text gauge · Large image.
- Both **large-image layouts** automatically get a **4-point corner radius** (the note follows the table whose two large-image rows carry an asterisk; the asterisk itself has no separate footnote text on the page).
- **SwiftUI default text:** Rounded, Medium; **16.5 pt (40 mm), 17.5 pt (41 mm), 18 pt (44 mm), 19.5 pt (45/49 mm)**.

### Legacy templates (earlier watchOS; nongraphic; no wearer colour)
- **Circular small:** a **small image or a few characters**, in a corner (Color face). Layouts: Ring image · Ring text · Simple image · Simple text · Stack image · Stack text.
- **Modular small:** **two stacked rows** (icon + content), **a circular graph**, or **one larger item** (bottom row of the Modular face). Layouts: Columns text · Ring image · Ring text · Simple image · Simple text · Stack image · Stack text.
- **Modular large:** a **large canvas, up to three rows** (centre of the Modular face). Layouts: Columns · Standard body · Table · Tall body.
- **Extra large:** larger text and images (X-Large faces). Layouts: Ring image · Ring text · Simple image · Simple text · Stack image · Stack text.
- **In every stack measurement the width value is the maximum size.**

### Platform considerations
- **watchOS only.** Not supported in iOS, iPadOS, macOS, tvOS, visionOS.

## Specs & values
Units: **pt** (px @2x = **2 × pt** in every cell below; the one exception is flagged). Watch sizes: **38 mm** = legacy only ("–" in the modern families), **40 mm/42 mm**, **41 mm**, **44 mm**, **45 mm/49 mm**. Sizes are **guidance values**, "as you design images"; the system masks/clips as noted.

### Circular (regular), image sizes
| Image | 40 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|
| Image | 42 × 42 | 44.5 × 44.5 | 47 × 47 | 50 × 50 |
| Closed gauge | 27 × 27 | 28.5 × 28.5 | 31 × 31 | 32 × 32 |
| Open gauge | 11 × 11 | 11.5 × 11.5 | 12 × 12 | 13 × 13 |
| Stack (not text) | 28 × 14 | 29.5 × 15 | 31 × 16 | 33.5 × 16.5 |

### Circular (extra-large), image sizes
| Image | 40 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|
| Image | 120 × 120 | 127 × 127 | 132 × 132 | 143 × 143 |
| Open gauge | 31 × 31 | 33 × 33 | **33 × 33** | 37 × 37 |
| Closed gauge | 77 × 77 | 81.5 × 81.5 | 87 × 87 | 91.5 × 91.5 |
| Stack | 80 × 40 | 85 × 42 | 87 × 44 | 95 × 48 |

### Circular family, no-content placeholders
| Layout | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Circular | – | 42 × 42 | 44.5 × 44.5 | 47 × 47 | 50 × 50 |
| Bezel | – | 42 × 42 | 44.5 × 44.5 | 47 × 47 | 50 × 50 |
| Extra Large | – | 120 × 120 | 127 × 127 | 132 × 132 | 143 × 143 |

### Corner, image sizes
| Image | 40 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|
| Circular | 32 × 32 | 34 × 34 | 36 × 36 | 38 × 38 |
| Gauge | 20 × 20 | 21 × 21 | 22 × 22 | 24 × 24 |
| Text | 20 × 20 | 21 × 21 | 22 × 22 | 24 × 24 |

Corner-family placeholder (one row, header has no row label): **–** (38 mm) · **20 × 20** (40/42) · **21 × 21** (41) · **22 × 22** (44) · **24 × 24** (45/49).

### Inline, utilitarian small
| Content | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Flat (width range × height) | 9–21 × 9 | 10–22 × 10 | 10.5–23.5 × **21** (px given as 21–47 × 21 = 10.5 pt high; **the pt height "21" looks like a typo**, the utilitarian large table says 10.5) | N/A | 12–26 × 12 |
| Ring | 14 × 14 | 14 × 14 | 15 × 15 | 16 × 16 | 16.5 × 16.5 |
| Square | 20 × 20 | 22 × 22 | 23.5 × 23.5 | 25 × 25 | 26 × 26 |

### Inline, utilitarian large
| Content | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Flat (width range × height) | 9–21 × 9 | 10–22 × 10 | 10.5–23.5 × 10.5 | N/A | 12–26 × 12 |

### Rectangular
| Content | 40 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|
| Large image with title * | 150 × 47 | 159 × 50 | 171 × 54 | 178.5 × 56 |
| Large image without title * | 162 × 69 | 171.5 × 73 | 184 × 78 | 193 × 82 |
| Standard body | 12 × 12 | 12.5 × 12.5 | 13.5 × 13.5 | 14.5 × 14.5 |
| Text gauge | 12 × 12 | 12.5 × 12.5 | 13.5 × 13.5 | 14.5 × 14.5 |

### Legacy: circular small
| Image | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Ring | 20 × 20 | 22 × 22 | 23.5 × 23.5 | 24 × 24 | 26 × 26 |
| Simple | 16 × 16 | 18 × 18 | 19 × 19 | 20 × 20 | 21.5 × 21.5 |
| Stack (max width) | 16 × 7 | 17 × 8 | 18 × 8.5 | 19 × 9 | 19 × 9.5 |
| Placeholder | 16 × 16 | 18 × 18 (page prints "18x18x") | 19 × 19 | 20 × 20 | 21.5 × 21.5 |

### Legacy: modular small
| Image | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Ring | 18 × 18 | 19 × 19 | 20 × 20 | 21 × 21 | 22.5 × 22.5 |
| Simple | 26 × 26 | 29 × 29 | 30.5 × 30.5 | 32 × 32 | 34.5 × 34.5 |
| Stack (max width) | 26 × 14 | 29 × 15 | 30.5 × 16 | 32 × 17 | 34.5 × 18 |
| Placeholder | 26 × 26 | 29 × 29 | 30.5 × 30.5 | 32 × 32 | 34.5 × 34.5 |

### Legacy: modular large (icons/images, width range × height; identical for all three layouts)
| Content | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Columns · Standard body · Table | 11–32 × 11 | 12–37 × 12 | 12.5–39 × 12.5 | 14–42 × 14 | 14.5–44 × 14.5 |

### Legacy: extra large
| Image | 38 mm | 40/42 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|
| Ring | 63 × 63 | 66.5 × 66.5 | 70.5 × 70.5 | 73 × 73 | 79 × 79 |
| Simple | 91 × 91 | 101.5 × 101.5 | 107.5 × 107.5 | 112 × 112 | 121 × 121 |
| Stack (max width) | 78 × 42 | 87 × 45 | 92 × 47.5 | 96 × 51 | 103.5 × 53.5 |
| Placeholder | 91 × 91 | 101.5 × 101.5 | 107.5 × 107.5 | 112 × 112 | 121 × 121 |

### SwiftUI default text values
| Layout | Style | Weight | 40 mm | 41 mm | 44 mm | 45/49 mm |
|---|---|---|---|---|---|---|
| Circular (regular) | Rounded | Medium | 12 pt | 12.5 pt | 13 pt | 14.5 pt |
| Circular (extra-large) | Rounded | Medium | 34.5 pt | 36.5 pt | 36.5 pt | 41 pt |
| Corner | Rounded | Semibold | 10 pt | 10.5 pt | 11 pt | 12 pt |
| Rectangular | Rounded | Medium | 16.5 pt | 17.5 pt | 18 pt | 19.5 pt |

### Other values and facts
| Item | Value |
|---|---|
| Circular masks | applied by the system to: every regular circular image, the extra-large circular / open-gauge / closed-gauge images, every corner image |
| Rectangular large-image corner radius | **4 pt** (automatic) |
| Bezel text | curved along the bezel; fills **nearly 180°** before truncating |
| Minimum line width | generally **≥ 2 pt** |
| Gauge styles | **closed** (percentage of a whole), **open** (arbitrary range), **segmented** (app range, rapid changes) |
| Complications per face | at least one on most faces; four or more on some |
| Timeline | entries with display times; **limited updates per day** and **limited stored entries per app** (numbers not given) |
| Rendering modes | full-colour; **tinted** (grayscale + one colour from the wearer's selected colour) |
| Developer APIs named | WidgetKit, `WidgetRenderingMode`, `placeholder(in:)`, `WidgetFamily.accessoryRectangular`, ClockKit `CLKComplicationDataSource`, App Intents (relevancy) |
| Videos (links only, not watched) | Design widgets for the Smart Stack on Apple Watch (WWDC23 10309), Go further with Complications in WidgetKit (WWDC22 10051), Complications and widgets: Reloaded (WWDC22 10050) |
| Change log | Oct 24 2023 (WidgetKit links) · Jun 5 2023 (rectangular → Smart Stack widgets) · Sep 14 2022 (Apple Watch Ultra specs) |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a red-orange gradient card with a **watch face on a dark red rounded rectangle**. Face content **(from screenshot)**: time **10:09** in large red digits; **date pill "FRI 23"** top-right; the labels around it, drawn in a **monospaced type with leader lines**: **Top Left (Earth)** = a small round Earth image next to the time; **Middle (Your Schedule)** = a wide card "**8:00–9:00AM / Yoga / Gym**" with a vertical bar at its leading edge; **Bottom Left (Activity)** = Activity rings; **Bottom Middle (Compass)** = a compass dial **"315° NW"**; **Bottom Right (Temperature)** = a gauge **"72" with "64" and "88"** at its ends; **Date** = the top-right pill. The alt text only says a watch face with the time and differently sized, labelled complications: **the label words are only in the image**.
- **Developer note and Note callouts:** grey rounded boxes with a dark border (Developer note in screenshot 2; Notes under the tables).
- **Circular families (screenshots 5, 6, 7):** black tiles with the content in the centre. Regular: **closed gauge image** = music note in a red ring with a dull arc for the remaining part; **closed gauge text** = "100" in a green ring; **open gauge image** = "1.0" with a green→violet 8-to-4 o'clock arc and a small green sun at the bottom; **open gauge text** = "42 AQI" with a blue→violet arc; **open gauge range** = "72" with "55" (green) and "76" (orange) at the arc ends; **Image** = the Breathe flower icon (green); **Stack image** = a red sunrise glyph over "7:24"; **Stack text** = "AAPL" over green "121.96". The **bezel example** shows "8:00AM YOGA • FLOW STUDIO" curved along the top, and a small circle "FRI 23" below it. Extra-large set: same eight layouts, larger; closed gauge text is a **blue "85"** ring, open gauge image "50" with a teardrop at the bottom, open gauge text "29 AQI", range "56" with "52" green and "89" red, the Breathe icon in **blue**.
- **Corner (screenshots 9, 10):** five black tiles: a weather glyph (sun + cloud) in a circle; a **"14:59" text along an orange arc with a timer icon**; "**72°**" with "55" (green) and "76" (orange) at the ends of a green→orange arc; "**CUP**" (white, bold) over "10:09AM, +0HRS" (orange), both curved; a "**00:00.00**" stopwatch text curved with a stopwatch icon.
- **Inline (screenshot 11):** **Flat** = "**LON 6:09**" on **one line** in light grey; **Ring image** = two teardrops in partial rings; **Ring text** = two rings with "63"; **Square** = a moon. **Large flat** = "**11:00AM PHOTO SHOOT**" on one line in a wide black tile, with small-caps "AM".
- **Rectangular (screenshots 12, 13):** **Standard body** = blue title "Water Reminders", white "32 oz. consumed", grey "4 day streak! Woohoo!"; **Text gauge** = blue drop + "Water Reminder", white "32 oz. consumed", a blue bar filled to ~70 % on a dark track; **Large image** = "**68 BPM,** **2 MINS AGO**" (white + red) over a white/grey heart-rate graph with hour labels 12AM · 6AM · 12PM · 6PM and axis values 102 and 52. **The wording differs slightly between the two water tiles** ("Reminders" plural vs "Reminder" singular) **(from screenshot)**.
- **Legacy templates (screenshots 14–19):** all are **black tiles with coloured single-hue content** (tan, light blue, orange, yellow, red): circular small (ring image, "63" ring, stopwatch, "68°", sunrise "7:24", "LON 6:09"); modular small (two-row columns "CP 14 / MH 28", rings, moon, "68°", sunrise "7:24PM", "LON 6:09"); modular large (Columns "CAL 396/660 · MIN 13/30 · HOUR 3/12" with yellow labels; Standard body "Cupertino, CA / 68° Partly Cloudy / H:72° L:62°" with the first line red; Table "Final Score 14 Central Prep / 28 Mission High"; Tall body "Wednesday / Mar 9" with the second line about twice as tall); extra large (ring, ring text "63" orange, moon, "68°", sunrise "7:24PM", "LON 6:09").
- **Videos (screenshot 20):** three cards: Smart Stack widgets (a weather widget with "72° H:72° L:52° 60% 32% 10%" on layered outlines), the WidgetKit complications talk (a watch on black with the label "accessoryCorner"), and "Reloaded" (a watch and an iPhone Lock Screen both showing 10:09). The last screenshot then shows the Change log table and the start of Apple's site footer (ignored).
- **Page chrome (from screenshot):** TOC = Complications · Best practices · Visual design · Circular · Corner · Inline · Rectangular · Legacy templates · Platform considerations · Resources · Change log; side navigation shows **System experiences** opened with **Complications** ringed (browser focus, not page design); the platform strip has **only the Watch icon dark**.
- **Mismatches between images and their alt text (recorded, not corrected):**
  1. **Inline › Flat:** the alt says the letters L, O, N sit **above** the time; the image shows "**LON 6:09**" **on one line** (checked in the catalog image `complications-04-neutral-1`). The stacked version is the circular-small/modular/extra-large "Stack text".
  2. **Circular (extra-large) › Closed gauge text:** the alt reads "number **one eighty-five**"; the image shows "**85**" (catalog image `complications-02-neutral-2`).
  3. Several circular-family **"Stack image"** tiles (regular circular, extra-large, circular small) show "**7:24**" **without PM** while the alt says "seven twenty-four PM"; modular small and legacy extra large show "7:24PM".
  4. **Modular large › Standard body:** the alt says "cloudy"; the image says "**Partly Cloudy**".
- **Quirks in Apple's tables (kept as printed):** the utilitarian-small Flat 41 mm height prints **21 pt** with **21 px @2x** (should be 10.5 pt); extra-large circular **Open gauge is 33 × 33 pt at both 41 mm and 44 mm** and the extra-large text size is **36.5 pt at both**; circular small **Placeholder 41 mm** prints "18x18x pt"; a stray "59X30" and "@ 2x" spacing; the Corner placeholder table has an **empty first header cell**.

## Visual examples (catalog)
`visual-examples` gains **9 neutral comparison sets** (no do/don't pairs; each is a set of layouts shown side by side): **complications-01** circular regular (8) · **-02** circular extra-large (8) · **-03** corner (5) · **-04** inline utilitarian small (4) · **-05** rectangular (3) · **-06** circular small (6) · **-07** modular small (7) · **-08** modular large (4) · **-09** extra large (6). The hero and the two single images (bezel text, large flat) are not in the catalog rows. Catalog total: **179** (was 170); existing IDs unchanged.

## Web translation
Complications exist **only on watchOS**, but the design problem is common: **a tiny, glanceable, always-current tile** that answers one question and **leads into the right place**. Don't clone the watch-face look on the web; reuse the **rules**: dynamic over static, several tiles each with its own deep link, deliberate refresh, colour-independent meaning, sturdy strokes and safe placeholders.

| HIG rule | Web implementation |
|---|---|
| Essential, dynamic content, not a launcher | A dashboard **tile/widget shows a live value with its freshness** ("12 open · updated 2 min ago"); a tile that only says "Open app" is **a link, not a widget**, and gets dropped by users' layouts. Show **one number and one word**, drawn from the same source as the full screen. |
| Support all families; icon fallback | Design tiles in **a few fixed sizes** (inline/chip, circular/small square, wide rectangular) with **container queries** (`@container (inline-size < 12rem)`); if a size can't carry useful data, render **the product mark/app icon that links in** rather than an empty tile. |
| Several complications per family, shareable faces | Offer **several tile types per size** (one per key metric/task) and **preset layouts** ("Sales day", "Support day") people can **apply in one click or share by link**, so there is **no set-up** (dashboard templates). |
| A different deep link per complication | **Every tile links to the most relevant view** with a stable URL and query (`/orders?status=late`, `/calendar?day=today`); test that no two tiles land on the same generic page. |
| Privacy on the Always-On display | **Shoulder-surfing awareness:** hide or mask sensitive values on **idle/locked/shared-screen** states (a **privacy mode** toggle, blur after inactivity, `visibilitychange`/idle timer), and never put private data in **browser tab titles, badges, notification previews or shared-screen widgets** without a setting. See `always-on` (not yet ingested), `privacy.md`. |
| Update timeline with limited refreshes | **Refresh by relevance**, not by polling: schedule updates around the **moment the data matters** (a meeting tile refreshes an hour before; a forecast tile at the forecast time), cache with **stale-while-revalidate**, cap refresh frequency, and always show **"as of" time**. Server side, **push** changes (SSE/WebSocket) for the few live values. |
| Closed / open / segmented gauge by data | Closed ring = **share of a whole** (`stroke-dasharray` progress ring, `role="progressbar"` or `<meter>` with min/max/value); open arc = **arbitrary range** with end labels; segmented = **several discrete steps** or rapid-change readouts. Details and colour rules in `gauges.md`; never colour-only (see below). |
| Tinted mode: single colour, desaturated | The web equivalents are **`forced-colors`**, **`prefers-contrast: more`**, **monochrome/grayscale** and **dark/tinted themes**. Test every tile with `filter: grayscale(1)`; **meaning must survive**: value text, shapes (solid vs outline), icons and labels, **never hue alone**; ship **mono variants of full-colour images** (SVG using `currentColor`) where the photo/illustration turns to mud. A **single accent hue** for gauge, text and icon is the tinted look. |
| Don't use colour as the only signal | Status = **icon + word + colour** (`aria-label` on the ring: "Battery 72 %"); gauge ends carry **numbers**; contrast **≥ 3:1** for graphics, **≥ 4.5:1** for text (Color gate). |
| Line widths ≥ 2 pt | Use **stroke ≥ 2 CSS px (CONV)** in tiny charts and rings, **≥ 1.5 px** only for secondary gridlines (CONV); heavier strokes for small sizes; `vector-effect: non-scaling-stroke` so scaling doesn't thin lines; no hairlines on moving/animated tiles. |
| Static placeholders, localised | **Skeleton or static placeholder** at the tile's **exact final size** (no layout shift), localised text, the same shape as the real content; also use it in the **"add a tile" picker**. The placeholder may **differ in size from live content**, so size the container, not the content. |
| Circular mask / four-point radius | `border-radius: 50%` or `clip-path: circle()` on circular tiles; **4 px radius** on large-image tiles (CONV: 4 pt → 4 px). Provide images **transparent-background** (`images.md`). |
| Rounded type, medium/semibold weights | On Apple devices `font-family: ui-rounded, "SF Pro Rounded", system-ui`; **weight 500** for tile text, **600** for the small corner-style text; watch text sizes (10–41 pt) are **device-specific**, don't copy the numbers; keep tile text **≥ 12 px** (CONV) and let it scale with `rem`. |
| Curved text along the bezel | SVG **`<textPath>`** on an arc; **≤ ~180° of arc** before truncating with an ellipsis; keep an **accessible plain-text** version (`aria-label` on the SVG). |
| Rectangular for charts (24 h graph, white/red primary, grey grid) | Sparklines/mini charts: **high-contrast primary series, low-contrast grid and labels**, few labels, one highlighted value; follow `charts.md` and `charting-data.md`; **descriptive text** (`aria-label`: "Heart rate, last 24 hours, latest 68 BPM, 2 minutes ago"). |
| Smart Stack: relevance, background colour, optimised layout | A **relevance-sorted stack/feed** (surface the tile when useful: time of day, upcoming event), a **background colour or image that aids recognition**, and a **layout made for the small container** rather than a shrunk full card. |
| Legacy templates | Keep an **older, simpler tile variant** for old clients until support is dropped; it **doesn't take theme colours** (single fixed style); don't mix legacy and new styles in one view. |
| watchOS only | Not a web component; this page is the **model for widgets/tiles**, PWA **badges**, and **home-screen widgets** in native apps that use WidgetKit. |

Field-note cross-links:
- `hig/components/status/gauges.md` (✓): closed/standard/capacity gauges and the **accessory** variant "visually similar to watchOS complications" (Lock Screen, widgets, watchOS); this page is where the **closed / open / segmented** choice comes from. Consistent.
- `hig/components/layout/labels.md` (✓): date/time and timer text for complications (`labels.md` listed Complications as "not yet ingested"; updated). `hig/getting-started/designing-for-watchos.md` (✓): complications and notifications are the most-used surfaces; this page confirms.
- `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: tinted mode, colour not the only signal; `hig/foundations/images.md` (✓): transparency required for complication images; `typography.md` (✓ CRITICAL): SF Compact Rounded on watchOS; `hig/components/status/activity-rings.md` (✓): the ring in the hero; `progress-indicators.md` (✓), `hig/components/content/charts.md` (✓) and `hig/patterns/charting-data.md` (✓): rectangular graphs.
- `hig/components/system-experiences/app-shortcuts.md` (✓): the Action-button/quick-launch counterpart; both are **glance + deep link** surfaces.
- `field-notes/*`: no widget/tile recipe; **no conflict**.
- Ingested since: Watch faces (✓ `components/system-experiences/watch-faces.md`). Widgets (✓ `components/system-experiences/widgets.md`). Always On (✓ `technologies/always-on.md`). Not yet ingested (linked from this page): none.

## Checklist
- [ ] Every tile shows **live, meaningful data** with its **freshness**; a tile that only launches is replaced by one that shows data.
- [ ] Tiles exist in **all sizes you support**, with a **product-mark fallback** where a size can't show useful data.
- [ ] Several tiles per size, and **each links to a different, most-relevant view**.
- [ ] **Sensitive values can be hidden** on idle/shared screens; nothing private in tab titles, badges or previews by default.
- [ ] Refresh is **scheduled by relevance**, cached, rate-limited, and shows **"as of" time**.
- [ ] Gauge type fits the number: **closed = share of a whole**, **open = arbitrary range**, **segmented = stepped/rapid**; each has text values.
- [ ] Meaning **survives grayscale/forced-colors** (value text, shape, icon), graphics **≥ 3:1**, text **≥ 4.5:1**; mono image variants where needed.
- [ ] Strokes are **≥ 2 px** on small tiles; **placeholders** match the final size and are localised.
- [ ] Tiles have **accessible names and values** (`aria-label`, live region only where updates matter).
- [ ] Nothing imitates the **Apple Watch face** chrome; the concept is reused, not the look.

## Related
- Ingested: Gauges (✓), Labels (✓), Designing for watchOS (✓), Color (✓ CRITICAL), Images (✓), Typography (✓ CRITICAL), Activity rings (✓), Progress indicators (✓), Charts (✓), Charting data (✓), App Shortcuts (✓).
- Ingested since: Always On (✓ `technologies/always-on.md`), Watch faces (✓ `watch-faces.md`), Widgets (✓ `widgets.md`). Not yet ingested (linked from this page): none.
- Developer docs: WidgetKit, "Migrating ClockKit complications to WidgetKit", `CLKComplicationDataSource`, `WidgetRenderingMode`, `placeholder(in:)`, `WidgetFamily.accessoryRectangular`, App Intents.
- Videos: Design widgets for the Smart Stack on Apple Watch (WWDC23 10309), Go further with Complications in WidgetKit (WWDC22 10051), Complications and widgets: Reloaded (WWDC22 10050).
