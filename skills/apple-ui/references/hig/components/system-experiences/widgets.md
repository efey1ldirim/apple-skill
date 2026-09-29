# Widgets
Source: https://developer.apple.com/design/human-interface-guidelines/widgets · Section: Components › System experiences (last page of the group) · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS** ("No additional considerations for macOS. Not supported in tvOS"; the platform strip shows every icon except the TV dark **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **December 16, 2025** (updated guidance for all platforms, added visionOS and CarPlay; earlier rows: Jan 17 2025 corrected watchOS dimensions · Jun 10 2024 accented widgets in iOS 18/iPadOS 18 · Jun 5 2023 watchOS widgets, iPad Lock Screen, iOS 17/iPadOS 17/macOS 14 · Nov 3 2022 iPhone Lock Screen widgets and iPhone 14 design comprehensives). One DocC fetch, read in full. **39 screenshots (hero → the "Change log" heading)** were compared with the fetched text, tab labels, image alt text and every size table; they cover the **whole page except the Change-log table itself (fetch-only)**. Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the Change log rows, all alt text and dark variants, and the three video links (titles only; the videos were not watched, nothing from them is recorded). The **iOS dimensions table is wider than the screen** in the screenshots (the "Inline" column is cut off at the right edge); its values were read from the fetch. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **many numbers** (all captured in *Specs & values*).

## In one line
A widget puts **essential, glanceable information and a little focused functionality from your app in additional contexts**: Home Screen, Today View, Lock Screen, StandBy, CarPlay, Mac desktop and Notification Center, visionOS surfaces and the watchOS Smart Stack. You design for **size** (system family: small/medium/large/extra large/extra large portrait; accessory: circular/corner/inline/rectangular), **context** and **rendering mode** (full-colour, accented, vibrant). Rules: **simple ideas tied to the app's main purpose**, **dynamic** but **not real-time** content (use Live Activities for that), **one widget in the right size beats all sizes**, **balanced density**, **thoughtful brand use**, **tap deep-links to the exact place**, **simple interactive elements only**, **16 pt margins (11 pt tight)** and **concentric corners**, **system font, ≥ 11 pt, no rasterised text**, **meaning never by colour alone**, **full-colour images sparingly**, **light/dark support**, **placeholders that hint at the layout**, **verb-first single description per widget group**, and, on Vision Pro, **two distance thresholds, mounting styles and treatment styles**. Web counterpart: a **dashboard tile/card family** with responsive sizes and an honest freshness label.

## Rules

### Framing (intro)
- Widgets help people **organise and personalise their devices** with **timely, glanceable content and specific functionality**, in **consistent** form across platforms. Example, a Weather widget on: **Home Screen and Lock Screen (iPhone, iPad)**; **desktop and Notification Center (Mac)**; **a horizontal or vertical surface (Apple Vision Pro)**; **a fixed position in the Smart Stack (Apple Watch)**.

### Anatomy
- Sizes range from **small accessory widgets** (iPhone, iPad, Apple Watch) to **system family widgets** including **extra large** on iPad, Mac and Apple Vision Pro. Widgets **adapt their appearance to the context** and to the person's device customisation.
- Consider three things: **the widget size to support** · **the context (devices and system experiences) where it may appear** · **the rendering modes and colour treatment** received by size and context.
- **WidgetKit** gives **default appearances and treatments** per size; still **consider a custom design** that serves your content best **in each specific context**.

#### System family widgets
- Broad size range, **may include one or more interactive elements**. Sizes (tabs): **Small · Medium · Large · Extra large · Extra large portrait**. Supported contexts:

| Widget size | iPhone | iPad | Mac | Apple Vision Pro |
|---|---|---|---|---|
| System small | Home Screen, Today View, StandBy, CarPlay | Home Screen, Today View, Lock Screen | Desktop and Notification Center | Horizontal and vertical surfaces |
| System medium | Home Screen, Today View | Home Screen, Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System large | Home Screen, Today View | Home Screen, Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large | Not supported | Home Screen, Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large portrait | Not supported | Not supported | Not supported | Horizontal and vertical surfaces |

#### Accessory widgets
- **Very limited information** because of their size. Sizes (tabs): **Accessory circular · corner · inline · rectangular**. Where they appear:

| Widget size | iPhone | iPad | Apple Watch |
|---|---|---|---|
| Accessory circular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |
| Accessory corner | Not supported | Not supported | Watch complications |
| Accessory inline | Lock Screen | Lock Screen | Watch complications |
| Accessory rectangular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |

#### Appearances
- A widget can be **full-colour**, **monochrome with a tint colour** or **clear, translucent**; depending on location, device and personalisation the system may **tint or clear the widget and its full-colour images, symbols and glyphs**. Small system widget examples:
  - **Home Screen, iPhone and iPad:** people choose **light, dark, clear or tinted**. Light/dark = **full-colour design**; **clear** = the system **desaturates, adds translucency, highlights and the Liquid Glass material**; **tinted** = the system **desaturates the widget and its content, then applies the person's tint colour**.
  - **Apple Vision Pro:** the widget is **a 3D object surrounded by a frame**, in **full colour with a glass- or paper-like coating layer that responds to lighting**; people can choose a **tinted** appearance using **system colour palettes**.
  - **Lock Screen, iPad:** **monochromatic, no tint colour**.
  - **Lock Screen, iPhone in StandBy:** **scaled up, background removed**; **below an ambient-light threshold** the system renders it **monochromatic with a red tint**.
- **Rectangular accessory:** on **iPhone and iPad Lock Screen** = monochromatic without tint; on **Apple Watch** = a **complication** in **full-colour and tinted** appearances and **also in the Smart Stack** (tabs: iPhone Lock Screen · Watch complication · Smart Stack on Apple Watch).
- **Rendering modes** (each appearance has one, depending on platform and appearance settings):
  - **Full-colour**: system family widgets on all platforms; shows your widget in full colour and **doesn't change the colour of your views**.
  - **Accented**: system family widgets on all platforms and **accessory widgets on Apple Watch**. The system **removes the background** and replaces it with a **tinted colour effect (tinted)** or a **Liquid Glass background (clear)**, and **splits the views into an accent group and a primary group**, applying **one solid colour to each**.
  - **Vibrant**: widgets on the **Lock Screen of iPhone and iPad** and **iPhone in StandBy in low light**; **desaturates text, images and gauges** and creates **a vibrant effect by colouring content for the Lock Screen background or a macOS desktop**; people can tint the Lock Screen, and StandBy low light applies **red**.

| Platform | Full-colour | Accented | Vibrant |
|---|---|---|---|
| iPhone | Home Screen, Today view, StandBy and CarPlay (with the background removed) | Home Screen and Today view | Lock Screen, StandBy in low-light conditions |
| iPad | Home Screen and Today view | Home Screen and Today view | Lock Screen |
| Apple Watch | Smart Stack, complications | Smart Stack, complications | Not supported |
| Mac | Desktop and Notification Center | Not supported | Desktop |
| Apple Vision Pro | Horizontal and vertical surfaces | Horizontal and vertical surfaces | Not supported |

### Best practices
- **should** **Choose simple ideas that relate to the app's main purpose**, with **timely content and relevant functionality** (Weather widgets prioritise **high/low temperatures and conditions**).
- **should** **Give quick access to the content people want**: **meaningful content, useful actions and deep links to key areas**. **Replicating the app icon adds little** and widgets like it get removed.
- **should** **Prefer dynamic information that changes through the day**: content that never changes loses its prominent spot. Widgets **don't update minute by minute**, so **find ways to keep content fresh**.
- **may** **Surprise and delight** (a calendar widget with a **unique treatment for birthdays or holidays**).
- **should** **Offer multiple sizes only when it adds value.** Small = **typically one piece of information**; larger sizes add **layers of information and actions**. **Don't just stretch a small widget's content to fill a larger area**; **one widget in the size that best represents the content beats all sizes**.
- **should** **Balance information density**: sparse feels unnecessary, dense isn't glanceable; give **essential info at a glance** and **details on a longer look**; if too dense, **use a larger size or replace text with graphics**.
- **should** **Show only information directly related to the main purpose**; larger sizes may show more data or richer visualisation without losing the purpose (all Calendar widgets stay **centred on upcoming events** and widen the range with size).
- **should** **Use brand elements thoughtfully**: brand **colours, typefaces, stylised glyphs**, not overpowering the information or looking out of place; people **seldom need the logo or app icon**; when useful (content from several sources) **a small logo in the top-right corner** is enough.
- **should** **Decide between automatic content and user configuration**: Stocks lets people **choose stocks**; Podcasts **automatically shows recent content** (developer: "Making a configurable widget").
- **must not** **Mirror the widget's look inside the app**: an element that **looks like the widget but doesn't behave like it confuses** and discourages trying other interactions.
- **should** **Tell people when authentication adds value**: e.g. **"Sign in to view reservations"** when signed out.

#### Updating widget content
- Widgets **refresh periodically**, **no continuous real-time updates**, and **the system may adjust update limits**.
- **should** **Keep the widget up to date**: choose a frequency from **how often data changes** and **when people need it** (tide widget: **hourly** although conditions change constantly). If people check more often than you can update, **show text saying when the data was last updated**.
- **should** **Let the system refresh dates and times** (saves update budget); pick a frequency that fits the data and **show content quickly without hiding stale data behind placeholders** (developer: "Keeping a widget up to date").
- **should** **Use animated transitions to draw attention to data updates**: many SwiftUI views animate by default; standard and custom animations of **up to two seconds** (developer: "Animating data updates in widgets and Live Activities").

#### Adding interactivity
- People **tap or click** a widget to launch its app; it can also hold **buttons and toggles** for extra functionality without launching (Reminders: **toggles to complete tasks**). Interaction in areas **that aren't buttons or toggles launches the app**.
- **should** **Offer simple, relevant functionality; keep complexity in the app**: an easy way to finish a task **directly related to the content**.
- **must** **Open the app at the right location**: **deep link** to details and actions related to the widget's content, no navigating (tap a medium Stocks widget → the Stocks page for that symbol).
- **should** **Stay glanceable and uncluttered while interactive**: multiple targets (**SwiftUI links, buttons, toggles**) may make sense, but **avoid app-like layouts**; size targets so people **tap/click with confidence and without accidental actions**; **inline accessory widgets offer only one tap target**.

#### Choosing margins and padding
- Widgets **scale to different screen sizes and areas**: supply content at **appropriate sizes** and **let the system resize**. iOS **resizes content designed for large devices to small ones**; iPadOS **renders at a large size then scales down** for the Home Screen. Use the **Specifications** values and Apple Design Resources for guidance; **use SwiftUI for production** flexibility.
- **should** **Use standard margins**: **16 pt for most widgets**; **tighter 11 pt margins** can suit **groupings for graphics, buttons or background shapes**; **smaller margins on the Mac desktop and on the Lock Screen (including StandBy)** (developer: `padding(_:_:)`).
- **should** **Coordinate the content's corner radius with the widget's**: use a **SwiftUI container** so content fits the rounded corners (`ContainerRelativeShape`).

#### Displaying text in widgets
- **should** **Prefer the system font, text styles and SF Symbols**: at home on any platform, easy weights/styles/sizes, symbols align and scale with text. A **custom font sparingly, easy to read at a glance**; often **custom for the large text, SF Pro for the smaller**.
- **should** **Avoid very small fonts**: generally **11 pt or larger**.
- **must not** **Rasterise text**: use text elements and styles so it **scales and VoiceOver can speak it**.
- **Note (callout):** in **iOS, iPadOS and visionOS** widgets support **Dynamic Type from Large to AX5** when you use `Font` (system) or `custom(_:size:)`.

#### Using colour
- **should** **Use colour to enhance, not compete with content**; in the asset catalog you can set **the colours the system uses to generate the widget's editing-mode UI**.
- **must** **Convey meaning without relying on specific colours**: widgets can be monochromatic (with or without a tint) and **in watchOS the system may invert colours depending on the watch face**; **use text and iconography in addition to colour**.
- **should** **Use full-colour images judiciously**: in tinted or clear appearances the system **desaturates them by default**; you may **force full colour**, but then they **draw special attention and can feel out of place** (esp. in clear). **Reserve full colour for media content (album art)** and use **images smaller than the widget**.

### Rendering modes

#### Full-colour
- **should** **Support light and dark appearances**: **light backgrounds for light, dark backgrounds for dark**; use **semantic system colours** for text and backgrounds so they adapt, or **colour variants in the asset catalog** (see Dark Mode; developer: asset management, supporting Dark Mode). Illustrated by a small Notes widget: **black text on white** and **white text on black** with the same yellow header bar.

#### Accented
- **should** **Group components into an accented and a primary group.** On **iPhone, iPad and Mac** the system **tints primary and accented content white**; on **Apple Watch** primary content white and **accented content in the watch face's colour** (developer: `widgetAccentable(_:)`, "Optimizing your widget for accented rendering mode and Liquid Glass").

#### Vibrant
- **should** **Offer enough contrast**: **pixel opacity sets the strength of the blurred background material**; **fully transparent pixels let the material through**; **pixel brightness sets vibrancy**; **brighter grays = more contrast, darker = less**.
- **should** **Create assets optimised for vibrancy**: render images, numbers and text **at full opacity**; **white or light gray for the most prominent content**, **darker grayscale for secondary elements** to set hierarchy; **check grayscale contrast**; **use opaque grayscale values rather than opacities of white**.

### Previews and placeholders
- **should** **Design a realistic preview for the widget gallery** that shows **capabilities and what each type or size offers**; real data is fine, but **if it takes too long to load use realistic simulated data**.
- **should** **Design placeholder content that helps people recognise the widget**: an installed widget shows **placeholder content while data loads**; combine **static interface components with semi-opaque shapes** standing in for dynamic content (**rectangles of different widths for lines of text; circles or squares for glyphs and images**). (Illustrated: a small **Tips** widget as yellow card with three yellow bars vs the real "How to take a screenshot".)
- **should** **Write a succinct widget description** (shown in the gallery): **begin with an action verb** ("See the current weather conditions and forecast for a location", "Keep track of your upcoming events and meetings"); **avoid "This widget shows…", "Use this widget to…", "Add this widget"**; **approachable language, sentence-style capitalisation**.
- **should** **Group the sizes and give one description**: so people don't think each size is a different widget; **one description regardless of how many sizes** (each size gives a slightly different perspective on the same content).
- **may** **Colour the Add button**: after choosing your app in the gallery an **Add button** appears **below the group of widgets**; you can set its colour to remind people of your brand (Notes: **yellow**; Weather: **blue** **(from screenshot)**).

### Platform considerations
- **macOS:** no additional considerations. **tvOS:** not supported.

#### iOS, iPadOS
- **Lock Screen widgets** are **functionally similar to watch complications**: follow **Complications** principles as well. **Provide useful information**, **don't treat them only as another way to launch the app**; a complication design often works as a Lock Screen widget and vice versa: **create them in tandem**.
- Three **Lock Screen shapes**: **inline text above the clock** and **circular and rectangular below the clock** (screenshot: inline "Tue 6 ▦ Team Meeting" above 9:41; rectangular "11:30AM–12:30PM Design Review Conference Room"; circular 50 % gauge; circular "6:26 PM" **(from screenshot)**).
- **should** **Support the Always-On display on iPhone**: reduced luminance; **use levels of gray with enough contrast** and stay legible (developer: "Creating accessory widgets and watch complications").
- **should** **Offer Live Activities for real-time updates**: widgets **don't show real-time information**; for tracking a task or event **for a limited time with frequent updates** use Live Activities; widgets and Live Activities **share frameworks and design similarities**, so **develop them in tandem and reuse code and components** (developer: ActivityKit).

##### StandBy and CarPlay
- **StandBy** shows **two small system widgets side by side, scaled up to fill the Lock Screen**. **Supporting StandBy also makes widgets work in CarPlay**: both use the **small system widget with the background removed and scaled up to fit the Widgets-screen grid**; **glanceable information and large text matter especially in CarPlay** (a car display).
- **should** **Limit rich images or colour as meaning in StandBy**: **scale up and rearrange text** to be read from a distance; **don't use background colours** so the widget **blends with the black background**. (✓ a Clock widget + a Weather widget with **white text on black, "Cupertino ➤ 70° ☀ Sunny H:75° L:59°"**; ✗ the Weather widget as a **blue gradient card** on the black background; developer: "Displaying the right widget background".)
- In **low light** the system renders widgets **monochrome with a red tint** (screenshot: everything in red on black, caption "iPhone in low-light conditions").

#### visionOS
- Widgets are **3D objects placed on a horizontal or vertical surface**; a widget **persists in place even when Vision Pro is turned off and on**; **real-world scale**; **size, mounting style and treatment style** shape perception.
- **Full colour by default**; **accented** when people tint them with **system colour palettes**; people can also set the **frame width** of **elevated** widgets and **widget-specific options** (visionOS has **no system-wide light/dark**; the Music poster widget offers its own **light/dark theme generated from the album art**) (developer: "Updating your widgets for visionOS").
- **should** **Adapt to the spatial context**: widgets are part of **living rooms, kitchens, offices**; think of them as **part of the surroundings**; Music becomes **poster-like, glanceable across the room with large typography and a high-resolution image**; a productivity app might offer **a small widget that fits on a desk**.
- **should** **Test across all system colour palettes and lighting**: tone, contrast and legibility **consistent and intentional**; if you **exclude elements from tinting**, test in **every tint palette** so untinted elements stay legible.

##### Thresholds and sizes
- Widgets adapt to **proximity**; two thresholds: **simplified** (**viewed at a distance**) and **default** (**viewed nearby**). (Illustrated by the Music poster: distance = **cover + "ALBUM NAME / Artist Name" + small footer**; nearby = **smaller type and a track list** **(from screenshot)**.)
- **should** **Design a responsive layout with the right detail per threshold**: at a distance **a simplified version, fewer details, larger type, no interactive elements (buttons/toggles)**; nearby **more detail, smaller type**; **keep shared elements across both** for continuity.
- **should** **Offer family sizes that fit the surroundings**: real-world dimensions and **permanent presence**; think **wall, sideboard, workplace**: a **small** widget for a desk, an **extra large** one for **visually rich content (artwork, photography)**.
- **should** **Stay legible across distances**: people can **scale a widget from 75 % to 125 %**; use **print-design principles: clear hierarchy, strong typography, scale**; **high-resolution assets** that look good at every size.

##### Mounting styles
- **Elevated:** on **horizontal** surfaces the widget **always appears elevated, tilts gently backward** (better readability) and **casts a soft shadow**; on **vertical** surfaces it either sits **flush like a mounted picture frame**.
- **Recessed:** on **vertical** surfaces only; content **set back into the surface, like a cut-out**; **horizontal surfaces don't use it**.
- **Default = elevated** (works on both).
- **should** **Choose the mounting style that fits the content**: **elevated** for content that should **stand out**, like **reminders, media or glanceable data**; **recessed** for **immersive or ambient** content like **weather or editorial**, **vertical surfaces only**; you can **opt out per widget**; **supporting only recessed** means people **can't place it on a horizontal surface** (a weather app: recessed for large and extra-large, elevated only for small).
- **Developer note (callout):** declare styles with **`supportedMountingStyles(_:)`** on a `WidgetConfiguration`; use **separate configurations** for widgets with different support.
- **should** **Test elevated designs with each system frame width**: you **can't change the layout by frame width**, so it must stay **visually balanced** for each.

##### Treatment styles
- The system applies one of two: **paper** (grounded, print-like, feels solid; **darker or lighter with lighting**) and **glass** (lighter, layered; **foreground stays bright and legible, doesn't dim or brighten with ambient light**).
- **should** **Choose paper for a print-like, real-object look** (the Music poster widget: framed artwork on a wall); the entire widget responds to ambient light.
- **should** **Choose glass for information-rich widgets**: separates foreground and background, foreground in **full colour unaffected by ambient light** (a News widget: **editorial images softly print-like behind, crisp headlines in front**).

#### watchOS
- **should** **Provide a colourful background that conveys meaning**: Smart Stack widgets are **black by default**; a custom colour can add meaning (Stocks: **red for falling, green for rising**).
- **should** **Encourage the system to show or raise your widget in the Smart Stack** via **relevancy information** (**location-based** or tied to **ongoing system actions like a workout**; developer: RelevanceKit).

## Specs & values
Units: **pt**. Sizes are guidance from Apple ("use the following values"); production widgets use SwiftUI for flexibility.

### Limits and facts
| Item | Value |
|---|---|
| Standard widget margin | **16 pt** (most widgets); tight **11 pt**; **smaller on Mac desktop and on the Lock Screen incl. StandBy** |
| Minimum text size | **≥ 11 pt** |
| Dynamic Type | **Large to AX5** (iOS, iPadOS, visionOS) |
| Animation | **≤ 2 s** |
| Inline accessory tap targets | **1** |
| visionOS scale range | **75 %–125 %** |
| visionOS thresholds | **simplified** (distance) and **default** (nearby) |
| visionOS mounting styles | **elevated** (default; horizontal + vertical) · **recessed** (vertical only) |
| visionOS treatment styles | **paper** · **glass** |
| Lock Screen accessory shapes (iPhone/iPad) | **inline** (above the clock), **circular** and **rectangular** (below) |
| StandBy | two small widgets, scaled up, background removed; red tint in low light |
| Vibrant assets | full opacity; white/light gray for prominent, darker grayscale for secondary; opaque grays, not opacities of white |
| Accented tint | iPhone/iPad/Mac: white for both groups; Watch: primary white, accented = watch-face colour |
| Developer APIs named | WidgetKit, `WidgetRenderingMode` (`fullColor`, `accented`, `vibrant`), `widgetAccentable(_:)`, `padding(_:_:)`, `ContainerRelativeShape`, `Font`, `custom(_:size:)`, `supportedMountingStyles(_:)`, `WidgetConfiguration`, `WidgetMountingStyle` (`elevated`, `recessed`), `WidgetTexture` (`paper`, `glass`), `LevelOfDetail` (`simplified`, `default`), RelevanceKit, ActivityKit, SwiftUI |
| Videos (links only, not watched) | WidgetKit foundations (WWDC26 277), What's new in widgets (WWDC25 278), Design widgets for visionOS (WWDC25 255) |
| Apple's Related list | Layout (✓ CRITICAL) |
| Change log | Dec 16 2025 · Jan 17 2025 · Jun 10 2024 · Jun 5 2023 · Nov 3 2022 |

### iOS dimensions (portrait screen → widget sizes, pt)
| Screen size | Small | Medium | Large | Circular | Rectangular | Inline |
|---|---|---|---|---|---|---|
| 430 × 932 | 170 × 170 | 364 × 170 | 364 × 382 | 76 × 76 | 172 × 76 | 257 × 26 |
| 428 × 926 | 170 × 170 | 364 × 170 | 364 × 382 | 76 × 76 | 172 × 76 | 257 × 26 |
| 414 × 896 | 169 × 169 | 360 × 169 | 360 × 379 | 76 × 76 | 160 × 72 | 248 × 26 |
| 414 × 736 | 159 × 159 | 348 × 157 | 348 × 357 | 76 × 76 | 170 × 76 | 248 × 26 |
| 393 × 852 | 158 × 158 | 338 × 158 | 338 × 354 | 72 × 72 | 160 × 72 | 234 × 26 |
| 390 × 844 | 158 × 158 | 338 × 158 | 338 × 354 | 72 × 72 | 160 × 72 | 234 × 26 |
| 375 × 812 | 155 × 155 | 329 × 155 | 329 × 345 | 72 × 72 | 157 × 72 | 225 × 26 |
| 375 × 667 | 148 × 148 | 321 × 148 | 321 × 324 | 68 × 68 | 153 × 68 | 225 × 26 |
| 360 × 780 | 155 × 155 | 329 × 155 | 329 × 345 | 72 × 72 | 157 × 72 | 225 × 26 |
| 320 × 568 | 141 × 141 | 292 × 141 | 292 × 311 | N/A | N/A | N/A |

### iPadOS dimensions (portrait screen; Canvas = design canvas, Device = on device; pt)
| Screen size | Target | Small | Medium | Large | Extra large |
|---|---|---|---|---|---|
| 768 × 1024 | Canvas | 141 × 141 | 305.5 × 141 | 305.5 × 305.5 | 634.5 × 305.5 |
| | Device | 120 × 120 | 260 × 120 | 260 × 260 | 540 × 260 |
| 744 × 1133 | Canvas | 141 × 141 | 305.5 × 141 | 305.5 × 305.5 | 634.5 × 305.5 |
| | Device | 120 × 120 | 260 × 120 | 260 × 260 | 540 × 260 |
| 810 × 1080 | Canvas | 146 × 146 | 320.5 × 146 | 320.5 × 320.5 | 669 × 320.5 |
| | Device | 124 × 124 | 272 × 124 | 272 × 272 | 568 × 272 |
| 820 × 1180 | Canvas | 155 × 155 | 342 × 155 | 342 × 342 | 715.5 × 342 |
| | Device | 136 × 136 | 300 × 136 | 300 × 300 | 628 × 300 |
| 834 × 1112 | Canvas | 150 × 150 | 327.5 × 150 | 327.5 × 327.5 | 682 × 327.5 |
| | Device | 132 × 132 | 288 × 132 | 288 × 288 | 600 × 288 |
| 834 × 1194 | Canvas | 155 × 155 | 342 × 155 | 342 × 342 | 715.5 × 342 |
| | Device | 136 × 136 | 300 × 136 | 300 × 300 | 628 × 300 |
| 954 × 1373 * | Canvas | 162 × 162 | 350 × 162 | 350 × 350 | 726 × 350 |
| | Device | 162 × 162 | 350 × 162 | 350 × 350 | 726 × 350 |
| 970 × 1389 * | Canvas | 162 × 162 | 350 × 162 | 350 × 350 | 726 × 350 |
| | Device | 162 × 162 | 350 × 162 | 350 × 350 | 726 × 350 |
| 1024 × 1366 | Canvas | 170 × 170 | 378.5 × 170 | 378.5 × 378.5 | 795 × 378.5 |
| | Device | 160 × 160 | 356 × 160 | 356 × 356 | 748 × 356 |
| 1192 × 1590 * | Canvas | 188 × 188 | 412 × 188 | 412 × 412 | 860 × 412 |
| | Device | 188 × 188 | 412 × 188 | 412 × 412 | 860 × 412 |

\* When **Display Zoom is set to More Space**.

### macOS dimensions
Not given as a table on this page: the Mac uses the **system family sizes** in the context table above (Apple's Specifications section has **no macOS heading**).

### visionOS dimensions
| Widget | Size in pt | Size in mm (scaled to 100 %) |
|---|---|---|
| Small | 158 × 158 | 268 × 268 |
| Medium | 338 × 158 | 574 × 268 |
| Large | 338 × 354 | 574 × 600 |
| Extra large | 450 × 338 | 763 × 574 |
| Extra large portrait | 338 × 450 | 574 × 763 |

### watchOS dimensions (widget in the Smart Stack, pt)
| Apple Watch size | Size |
|---|---|
| 40 mm | 152 × 69.5 |
| 41 mm | 165 × 72.5 |
| 44 mm | 173 × 76.5 |
| 45 mm | 184 × 80.5 |
| 49 mm | 191 × 81.5 |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a red-orange card with **an iPad Home Screen mock-up**: status bar "**9:41 Mon Jun 22**" at the left and "**100 %**" battery at the right **(from screenshot)**; **seven light-pink rounded widget placeholders** in a grid (four small squares at the left, one big square in the middle, two wide medium ones at the right) and **a Dock with six squares** at the bottom. The alt only says a set of differently sized widgets on an iPad Home Screen.
- **Size tabs (screenshots 2–7):** the Calendar widget in five sizes on a light grey tile: **Small** (TUESDAY 14, two events: "Yoga Class / Golden Gate Park / 4:00–5:00PM" and "Dinner with Ravi / 6:00–7:30PM"); **Medium** (same left column, plus "Dinner with Ravi / Restaurant Name / 6:00–7:30PM", "TOMORROW" and "Pick up coffee / Coffee Shop / 8:30–9:00AM"); **Large** (a day timeline 1–5 with the red now-line and "Yoga Class 4:00PM Golden Gate Park" at left, "TOMORROW" 7–2 with "Pick up coffee" at right); **Extra large** (TUESDAY 14 timeline plus TOMORROW, THURSDAY "Doctor's Appointment 1:00PM Doctor's Office" and "Dinner", FRIDAY "Brunch", "Design Meeting"); **Extra large portrait** is the **Music poster** (a tall photo of a Joshua tree, "ALBUM NAME / Artist Name" and a small footer "Genre · 18 songs · 57 minutes · 2025", a note glyph and "Song Name") **(from screenshot: the event texts are only in the images; the alt texts describe the sizes)**.
- **Accessory tabs (screenshots 8–11):** circular = a calendar glyph over **"10:00 AM"** in a translucent circle on a taupe Lock Screen crop; corner = **"10:00AM TEAM MEETING"** curved on black; inline = **"Tue 11 ▦ 2 events at 10AM"**; rectangular = **"10AM / Team Meeting / Project Review"** with two white bars.
- **Appearances (screenshots 12–15):** three Stocks tiles on a warm bronze wallpaper: **Full-colour** (dark card, green "AAPL +0.11 / Apple Inc. +0.04 %" and a green sparkline, "247.77"), **Clear** (glassy translucent card with white text) and **Tinted** (purple tile, white-on-purple). Vision Pro: the small tile in a **light rounded 3D frame** on grey. iPad Lock Screen: white-on-bronze monochrome. StandBy: black tile with green chart vs **red-on-black** low-light version.
- **Rendering-mode table (screenshot 17)** and **context tables** match the fetch; the "Widget size" tables use **hyphenated line breaks** ("To-day View", "Notif-ication Center") that are **not in the fetched text**.
- **Best-practice examples:** the **Weather** small widget (blue gradient, "Cupertino ➤ 70° ☀ Sunny H:75° L:59°"); the **Reminders** pair (screenshot 21): "**20 Reminders**" with a red count title and seven rows with round toggles, **first and third filled red** in the completed state; the **Stocks** medium list (screenshot 22): "Dow Jones 46,912 +151.27", "S&P 500 6,720 +9.66", "AAPL 269.77 +1.23" on a dark card **(from screenshot)**.
- **Text, colour, rendering (screenshots 24–27):** callout **Note** (Dynamic Type Large to AX5) as a grey rounded box; two small **Notes** widgets (light: black text on white; dark: white text on black; yellow header "Notes" in both, note "**Steve's Surprise Birthday Party Checklist**", "Yesterday").
- **Previews (screenshots 28–30):** placeholder card (yellow with **three pale bars**) vs real "**How to take a screenshot**"; two **widget-gallery** phones: "**Notes › Note**, 'Get quick access to one of your notes.'" with a **yellow Add Widget** button, and "**Weather › Forecast**, 'See the current weather conditions and forecast for a location.'" with a **blue Add Widget** button; a page control of **six dots**.
- **Platform (screenshots 31–39):** Lock Screen iPhone (bronze wallpaper, "Tue 6 ▦ Team Meeting", big 9:41, rectangular "11:30AM–12:30PM Design Review Conference Room", a 50 % circular gauge, a "6:26 PM" circle); StandBy **✓** (Clock + Weather in white on black) vs **✗** (Weather as a blue card) and the red low-light view; visionOS Music poster **from a distance vs nearby** (nearby adds a small track list); tables for iOS, iPadOS (10 screen sizes ×2 rows), visionOS, watchOS; Resources with the three video cards ("WidgetKit foundations": a presenter; "What's new in widgets": two latte-art tiles; "Design widgets for visionOS": a collage of widgets on a wall). The screenshots **end at the "Change log" heading**.
- **Page chrome (from screenshot):** TOC = Widgets · Anatomy · Best practices · Rendering modes · Previews and placeholders · Platform considerations · Specifications · Resources · Change log (the deeper headings such as Choosing margins, Using colour, StandBy and CarPlay are not in the TOC); the platform strip has **all icons dark except the TV**; side navigation shows **System experiences** with **Widgets** ringed (browser focus).
- **Mismatches / notes:**
  1. **iOS dimensions table** is clipped in the screenshots (the Inline column shows partial values "25…"); values come from the fetch.
  2. **Catalog rule labels:** the auto catalog gives **no rule text** to `widgets-01`–`-06` and `-11` (tab sets) and **files the StandBy ✓/✗ tabs (`widgets-10`) as "neutral"** (tab labels "Correct usage" / "Incorrect usage"); the pair is really a **do/don't** (green check vs grey cross **(from screenshot)**). `widgets-07`–`-09` carry the correct rule text.
  3. The **visionOS distance/nearby pair** has the alt "A placeholder image showing a widget viewed from a distance/nearby in visionOS", while the screenshot shows the **Music poster** artwork (the alt says "placeholder").
  4. **Accessory circular tab image** shows "**10:00 AM**" with a calendar glyph, alt text: "showing only the time for the next event": consistent.
  5. Apple's **Specifications section has no macOS table** although the framing lists Mac contexts; the macOS heading exists on other pages (Live Activities: "use the iOS dimensions") but **not here**.

## Visual examples (catalog)
`visual-examples` gains **11 sets** (mostly neutral, per tab): **widgets-01** system family sizes (5) · **-02** accessory sizes (4) · **-03** small Stocks widget full-colour / clear / tinted · **-04** StandBy vs StandBy low light · **-05** rectangular accessory on iPhone Lock Screen / watch complication / Smart Stack · **-06** Reminders incomplete vs completed · **-07** Notes light vs dark (full-colour) · **-08** Tips placeholder vs real content · **-09** widget-gallery Add button colours (Notes yellow, Weather blue) · **-10** StandBy correct vs incorrect background (**a real do/don't filed as neutral**) · **-11** visionOS viewed from a distance vs nearby. Not in the catalog: the hero, the Vision Pro and iPad Lock Screen crops, the watchOS/visionOS artwork. Catalog total: **204** (was 193); existing IDs unchanged.

## Web translation
Widgets are a **system surface**; a web app can't add them to Home/Lock Screen, desktop or Smart Stack (PWA widgets exist only on some Windows/Edge builds: treat as CONV). What transfers is **a dashboard tile/card family**: **responsive sizes of the same content**, glanceable, **honest about freshness**, **deep-linking**, **safe in every colour scheme**, with **placeholders and gallery descriptions**. Compare `complications.md` (glance tiles), `controls.md` (quick toggles) and `live-activities.md` (real-time).

| HIG rule | Web implementation |
|---|---|
| Simple idea tied to the app's main purpose | One **question per tile** ("What's next?", "Revenue today"); the tile title states it; no feature grab-bag. |
| Quick access to what people want; deep links; don't duplicate the app icon | Tile = **live value + one action or deep link**; a tile that only says "Open app" is dropped from layouts. |
| Dynamic content but not real-time; keep fresh | Refresh on a schedule that matches how the data changes, **cache with stale-while-revalidate**, **show "Updated 09:41"** when people may look more often than you refresh; use **push** only for the few live values; genuinely real-time tracking belongs to a **live status** (`live-activities.md`). |
| Let the system refresh dates/times | Render **dates and countdowns from timestamps on the client** (`<time datetime>`, `Intl.RelativeTimeFormat`) instead of re-fetching to change "5 min ago". |
| Animate updates ≤ 2 s | **150–400 ms** value transitions (hard cap 2 s), numeric roll/cross-fade, **`prefers-reduced-motion`** respected. |
| Offer multiple sizes only if it adds value; don't stretch small content | **One tile, several container-query layouts** (`@container (inline-size ≥ 20rem)`): small = one number; medium = + list/graph; large = + actions/timeline; **don't scale up the small layout**; **ship only the sizes that add information**. |
| Balance density; longer look for detail | Glance layer (≤ 3 facts) + **hover/tap/expand** for more; if dense, **switch to a chart or larger tile** rather than smaller text. |
| Show only information related to the main purpose | Every size keeps the **same subject** (events) and widens the range, as Calendar does. |
| Brand elements: colours, typefaces, glyphs; small logo top-right | Use **brand accent + type** tokens; **no logo tile**; if several sources, a **small mark at the top-right**. |
| Auto content vs user configuration | **Sensible defaults** + a **"Customise" control** on the tile (which stocks, which project); persist per user; the default must be useful without setup. |
| Don't mirror the widget in the app | Don't render **decorative look-alike tiles** in marketing or nav that don't behave like the real tile; if you show a **preview**, label it **"Preview"** and make it inert. |
| Tell people when signing in adds value | A **signed-out tile** says what it will show and **one "Sign in to view …" link**; never an empty box. |
| Interactivity: deep link to the right place; simple actions; one target for inline | Whole tile → **exact view** (`/stocks/AAPL`); **≤ 2–3 controls** (toggle to complete a task, quick action) with **≥ 44 px** hit regions and spacing (Buttons GATE); **no app-like layouts** inside tiles; an inline/one-line tile has **one link**. |
| Margins 16 pt (11 pt tight); smaller on desktop and Lock Screen | Tile padding **16 px** (CONV mapping pt → px), **11–12 px** for inner groupings, **tighter on dense desktop/kiosk surfaces**; equal insets. |
| Concentric corner radius | `border-radius: calc(var(--tile-radius) - var(--pad))` for inner shapes; images clipped to the same radius. |
| System font, text styles, symbols; custom font sparingly; ≥ 11 pt | `font-family: system-ui`; a display face **only for the big number**; text **≥ 11–12 px** (Apple: 11 pt); use **`rem`** so user text size scales (Dynamic Type analogue: allow up to ~200 % without clipping: Layout gate). |
| Don't rasterise text | **Live HTML/SVG `<text>`**, no text in images; charts have **`aria-label` with the value**. |
| Meaning not by colour alone | Status = **icon + word + colour** (Stocks: ▲/▼ and the sign, not only green/red); works in **grayscale, `forced-colors`** (Color gate). |
| Full-colour images sparingly | Reserve **full-colour imagery for media (album art)**; other art **desaturates to one tint** in a monochrome/tinted theme; images **smaller than the tile**. |
| Light and dark; semantic colours | **CSS variables per scheme**, semantic tokens (`--text`, `--surface`), light surface in light mode, dark in dark (`color-scheme`, `prefers-color-scheme`). |
| Accented: accent group + primary group | Tinted/"accent" theme = **two token groups only** (`--primary` white/near-white, `--accent` the user colour); everything else derives from them. |
| Vibrant: opaque grayscale, full opacity, contrast | For **translucent/glass tiles** use **opaque light/dark grays over the blur**, not `rgba(255,255,255,.x)` text; keep **≥ 4.5:1** against the worst-case backdrop (Materials GATE); solid fallback when `backdrop-filter` is missing or Reduce Transparency is on. |
| Clear/tinted appearances by user choice | Offer **a tint colour picker + "clear" (glass) option** only if it stays legible; otherwise honour **`prefers-contrast`** and **`forced-colors`**. |
| Realistic gallery preview; simulated data if slow | A **"Add a tile" gallery** shows **each tile with realistic sample data** (not lorem ipsum), **rendered instantly** (static sample, then swap live). |
| Placeholders: static shapes + semi-opaque bars | **Skeleton with the tile's real chrome** (title, icon) and **rounded bars of varying widths** for text and **circles/squares** for images, at the **exact final size**; no shimmer under `prefers-reduced-motion`. |
| Widget description: verb first, no "This widget…", sentence case | Gallery blurb: **"See the current weather and forecast for a location."**; **no "This tile shows…"**; **sentence case**; **one description for all sizes** grouped under one entry. |
| Colour the Add button | The **"Add to dashboard"** button uses the **product's brand accent** (one prominent button per view). |
| Lock Screen widgets ≈ complications; create in tandem | Share **design tokens and components between tiles and compact glance chips** (`complications.md`). |
| Always-On: gray levels with enough contrast | **Idle/dimmed state**: high-contrast grays, **no animation, no thin lines** (Color gate). |
| Live Activities for real-time | Real-time tracking = **pinned live status chip/banner**, not a tile that polls (`live-activities.md`). |
| StandBy/CarPlay: scale up, big text, no background colour | **Large-display/kiosk mode**: **2× scale**, **big numbers**, **no coloured card backgrounds** (black or page background), **red-shifted low-light theme** (`filter: sepia(1) hue-rotate(-50deg)` as a test), standard margins. |
| visionOS: thresholds (simplified vs default) | **Distance-aware layouts** for wall displays/TVs: **`@media (min-width: 1600px)` or a "far" toggle** = **fewer items, larger type, no controls**; near = full detail; **keep shared elements** across both. |
| visionOS: sizes fit the surroundings; scale 75–125 % | Let users **resize the tile between presets** and keep art **high-resolution** (`srcset`) so it scales up without blur. |
| Mounting/treatment styles (elevated/recessed, paper/glass) | Not web features; the analogue is **elevated (shadowed card) vs recessed (inset panel)** and **matte vs glass** surface tokens: pick one per tile family, keep foreground **opaque and legible**. |
| watchOS: meaningful background colour; relevance for Smart Stack | **Tile background reflects state** (green up / red down) **plus** an icon/text; **rank tiles by relevance** (time, location, ongoing task) so the most useful sits first. |
| Native-only surface | Mention the native implementation (**WidgetKit**) for teams with an iOS/watchOS/visionOS app. |

Field-note cross-links:
- `hig/components/system-experiences/complications.md` (✓): Lock Screen and watch **accessory widgets are the same families** (circular/corner/inline/rectangular; tinted vs full-colour; Smart Stack for rectangular): **consistent**; the old "Widgets not yet ingested" line there is now updated. `controls.md` (✓) and `live-activities.md` (✓): sibling surfaces: **controls = actions**, **Live Activities = real-time**, **widgets = glance**; `app-shortcuts.md` (✓) and `snippets.md` (✓): deep links and inline results.
- `hig/components/status/gauges.md` (✓): the **accessory gauge** variant; its "not yet ingested: Widgets" line is updated. `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: margins, safe areas, text scaling; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: tinted/monochrome, meaning not colour-only; `hig/foundations/materials.md` (✓ CRITICAL) and **Materials GATE**: clear/glass and vibrant; `hig/foundations/typography.md` (✓ CRITICAL): system font, Dynamic Type; `hig/foundations/dark-mode.md` (✓); `hig/foundations/sf-symbols.md` (✓); `hig/foundations/branding.md` (✓); `hig/patterns/feedback.md` (✓ CRITICAL): placeholders and loading; `hig/patterns/loading.md` (✓): skeletons; `hig/components/menus/buttons.md` (✓ CRITICAL): hit regions.
- `hig/foundations/writing.md` (✓): **capitalisation table**: widget descriptions are **sentence case**, **verb-first** (row added there).
- `field-notes/*`: no widget or dashboard-tile recipe beyond **Dashboard tiles** in `field-notes/components.md`; **no conflict**, and that recipe is the natural web base.
- Not yet ingested (linked from this page): none beyond what is already ✓ (Layout ✓, Typography ✓, SF Symbols ✓, Dark Mode ✓, Complications ✓, Live Activities ✓, VoiceOver named in text).

## Checklist
- [ ] Each tile answers **one question** and shows **live value + one action/deep link**; it's not an icon repeat.
- [ ] Sizes come from **one component with container queries**; **only sizes that add information** are offered; the small layout is not stretched.
- [ ] Density is balanced: **≤ 3 facts at a glance**, more on expand; if dense, a larger size or a chart.
- [ ] **Freshness is honest**: refresh schedule fits the data; **"Updated …"** shown when needed; dates render from timestamps; real-time = live status instead.
- [ ] The whole tile deep-links to the **exact view**; at most **2–3 ≥ 44 px controls**; inline tiles have **one** target.
- [ ] Padding **16 px** (11–12 px inside groups), **concentric radii**, text **≥ 11–12 px** and scalable, **no text in images**.
- [ ] Meaning survives **grayscale/tinted/forced-colors** (icon + word + colour); full-colour images only for media.
- [ ] **Light, dark, tinted/clear** variants use semantic tokens; glass tiles keep **≥ 4.5:1** with an **opaque fallback**.
- [ ] Gallery: **realistic preview**, **skeleton placeholder** matching the final size, **one verb-first sentence-case description**, brand-coloured **Add** button.
- [ ] Signed-out state says **"Sign in to view …"** with a link; configurable tiles have **good defaults**.
- [ ] Large-display/kiosk and **far-view** variants: **bigger type, fewer items, no controls, no coloured backgrounds**; low-light theme tested.
- [ ] No look-alike "widget" in the app or marketing that doesn't behave like the real tile.

## Related
- Ingested: Complications (✓), Controls (✓), Live Activities (✓), App Shortcuts (✓), Snippets (✓), Notifications (✓), Watch faces (✓), Layout (✓ CRITICAL), Color (✓ CRITICAL), Materials (✓ CRITICAL), Typography (✓ CRITICAL), Dark Mode (✓), SF Symbols (✓), Branding (✓), Gauges (✓), Loading (✓), Feedback (✓ CRITICAL), Buttons (✓ CRITICAL), Writing (✓).
- Not yet ingested (linked from this page): none; Apple Design Resources is external. VoiceOver is named in the text.
- Developer docs: WidgetKit, "Developing a WidgetKit strategy", "Preparing widgets for additional platforms, contexts, and appearances", `WidgetRenderingMode`, "Keeping a widget up to date", "Animating data updates in widgets and Live Activities", "Making a configurable widget", "Creating accessory widgets and watch complications", "Displaying the right widget background", "Updating your widgets for visionOS", RelevanceKit, ActivityKit.
- Videos: WidgetKit foundations (WWDC26 277), What's new in widgets (WWDC25 278), Design widgets for visionOS (WWDC25 255).
