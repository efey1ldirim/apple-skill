# Live Activities
Source: https://developer.apple.com/design/human-interface-guidelines/live-activities · Section: Components › System experiences · Supported platforms: **iOS, iPadOS** (the Live Activity starts here), plus **macOS** (menu bar), **watchOS** (Smart Stack) and **CarPlay** (Dashboard) as *system locations* ("No additional considerations for iOS or iPadOS. Not supported in tvOS or visionOS"); on the platform strip **only the iPhone icon looks dark** in the screenshots, although the page covers iPad, Mac, Watch and CarPlay **(from screenshot; the text is the authority)** · Ingested: 2026-09-29 · Apple last updated: **December 16, 2025** (updated guidance for all platforms, added macOS and CarPlay; earlier rows below). One DocC fetch, read in full. **20 screenshots (hero → Resources / the "Change log" heading)** were compared with the fetched text and image alt text line by line; they cover the whole page **except the Change log table itself, which is fetch-only** (the last screenshot ends on its heading). Everything visible matches the fetch except the notes under **Mismatches** below. **Read from the fetch only (not in screenshots):** the six Change-log rows, the alt text of every image, dark variants. The three video links were read as titles only (the videos were not watched, nothing from them is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **many numbers** (all captured in *Specs & values*).

## In one line
A Live Activity lets people **follow the progress of a task or event at a glance**, beyond a push notification: frequent updates over **a few hours (never more than eight)**, shown in the **Dynamic Island, Lock Screen, StandBy, Home Screen banner, Mac menu bar, watchOS Smart Stack and CarPlay Dashboard**. It must support **four presentations** (compact, minimal, expanded, Lock Screen). Rules: **a defined beginning and end**, **only the few facts that matter**, **no ads**, **nothing sensitive in plain sight**, **brand look with big, medium-or-heavier text**, **concentric margins** (14 pt on the Lock Screen), **animate updates (≤ 2 s)**, **tap opens the exact place in the app**, **at most one simple control**, **alert sparingly**, **update only when something changes**, **end at once and set a 15–30 min dismissal**, and **design iPhone first, then refine for StandBy, CarPlay, watchOS**. Native Apple feature; on the web the transferable idea is the **persistent, glanceable status for a time-boxed task**.

## Rules

### Framing (intro)
- Live Activities keep people up to date on **tasks and events in glanceable places across devices**; they go **beyond push notifications** with **frequent content and status updates over a few hours** and **interaction** with the shown information.
- Examples: **time left until a food-delivery order arrives**, **live in-game information for a soccer match**, **real-time fitness metrics with controls to pause or cancel a workout**.
- They **start on iPhone or iPad** and **appear automatically in system locations across the person's devices**:

| Platform or system experience | Location |
|---|---|
| iPhone and iPad | Lock Screen, Home Screen, in the Dynamic Island and StandBy on iPhone |
| Mac | The menu bar |
| Apple Watch | Smart Stack |
| CarPlay | CarPlay Dashboard |

### Anatomy
- A Live Activity is **a unified home for alerts and indicators of ongoing activity**. Depending on device and location the system picks a **presentation** (or a mix). **Your Live Activity must support all four:** **Compact · Minimal · Expanded · Lock Screen**.
- In iOS/iPadOS these presentations are used everywhere, and the system **derives default looks for other contexts** from them (e.g. the compact presentation's two elements are **merged into one view for Apple Watch and CarPlay**).
- **Compact:** used in the Dynamic Island **when only one Live Activity is active**; **two separate elements**, one **leading** and one **trailing** of the TrueDepth camera; despite the small space it shows **up-to-date** information.
- **Minimal:** used when **several** Live Activities are active; **two** appear in the Dynamic Island, **one attached, one detached**; the detached one is **circular or oval** depending on content size. As with compact: **tap opens the app**, **touch and hold shows the expanded presentation**.
- **Expanded:** shown when people **touch and hold** a compact or minimal Live Activity.
- **Lock Screen:** a **banner at the bottom of the Lock Screen**; use **a layout similar to the expanded presentation**. On devices **without the Dynamic Island**, the Lock Screen presentation **briefly appears as a banner over the Home Screen or other apps** when you alert about an update.
- **StandBy:** on iPhone in StandBy the activity shows **minimal**; **tapping** it switches to the **Lock Screen presentation scaled up 2×** to fill the screen; a **custom Lock Screen background colour is extended to the whole screen** by the system.

### Best practices
- **should** **Offer Live Activities for tasks and events with a defined beginning and end**; best for **short to medium** activities that **don't exceed eight hours**.
- **should** **Focus on the important information people need at a glance**; you don't have to show everything; prioritise and be concise; **tap opens the app** for detail.
- **must not** **Use a Live Activity for ads or promotions**: show **only information related to the ongoing event or task**.
- **should** **Avoid sensitive information**: activities are prominent and **casual observers** may see them (Lock Screen, Always-On display). Show an **innocuous summary** and let people **tap to see the sensitive data in the app**, **or redact** sensitive views and let people **configure whether to show sensitive data** (developer: `Creating a widget extension`).
- **should** **Match your app's look and personality in both dark and light appearances**, so it's recognisable and visually tied to the app.
- **should** **If you include a logo mark, show it without a container**; **don't use the whole app icon**.
- **must not** **Add elements to your app that draw attention to the Dynamic Island**: your activity shows there **while the app isn't in use**, and other items can appear there when the app is open.
- **should** **Make text easy to read**: **large, heavier text, a medium weight or higher**; **small text sparingly**; key information legible at a glance. (✗/✓ pair: small two-line "GATE C15" vs large "C15".)

#### Creating Live Activity layouts
- **should** **Adapt to different screen sizes and presentations**: activities **scale**; create layouts and assets for various devices and scale factors and use the **Specifications** values as guidance.
- **should** **Adjust element size and placement for efficient use of space**: use only the space needed; elements fit well together.
- **should** **Use familiar layouts for custom views**: **templates with default system margins and recommended text sizes** are in **Apple Design Resources**; they keep the activity legible at a glance and consistent with surroundings (e.g. the Smart Stack).
- **should** **Use consistent margins and concentric placement**: even margins between rounded shapes and the activity's edges **including corners**, so nothing pokes into the rounded shape. Example: for a rounded rectangle near a corner, **match its corner radius to the outer radius by subtracting the margin** and use a **SwiftUI container** to apply the right radius (`ContainerRelativeShape`). **Keep content compact and snug within a margin concentric to the outer edge.** (✗ icon too far from the edge / ✓ icon close but not poking into the curve.)
- **should** **When separating a block of content, put it in an inset container shape or use a thick line**; **don't draw content to the edge** of the Dynamic Island. (✗ band to the edge / ✓ inset pill / ✓ thick line.)
- **Tip (callout):** to align **nonrounded** content in the rounded corners, **blur the content in your drawing tool**; blurred shapes make it easier to find the position that best follows the outer perimeter. (✗ blurred text far from the edge / ✓ close to it.)
- **should** **Dynamically change the height** on the Lock Screen or in the expanded presentation: **shrink** when there is less to show, **grow** as more information arrives. Example: a rideshare activity is compact while it **locates a driver**, then **extends** for pickup time, driver details, etc.

#### Choosing colors
- **should** **Consider carefully a custom background colour and opacity.** You **can't** customise background colours for **compact, minimal and expanded**; you **can** for the **Lock Screen** presentation. With a custom background colour or image, **ensure enough contrast, especially for tint colours on Always-On displays with reduced luminance**.
- **should** **Use colour to express your app's character**: in the Dynamic Island the background is **black and opaque**; **bold colours** for text and objects give personality, make the activity **recognisable at a glance**, **stand out from other activities**, feel like **a small glanceable part of the app**, and reinforce **relationships between elements**.
- **should** **Tint the key line to match your content**: when the background is **dark** (e.g. Dark Mode) a **key line** appears around the Dynamic Island; choose **a key-line colour consistent with the other elements** (developer: `Creating custom views for Live Activities`).

#### Adding transitions and animating content updates
- Besides extend/contract transitions, activities use **system and custom animations with a maximum duration of two seconds**. **The system doesn't animate on Always-On displays with reduced luminance.**
- **should** **Use animations to reinforce the information and to draw attention to updates**: move elements, animate in/out with the **default content-replace transition**, or make **custom transitions with scale, opacity and movement**. Examples: **numeric content transitions for score changes**; **fade a timer out** when it reaches zero.
- **should** **Animate layout changes** (expanding to fill the screen in StandBy, more information arriving): **preserve as much of the existing layout as possible** by **moving existing elements to their new positions** instead of removing and re-adding them.
- **should** **Try to avoid overlapping elements**: sometimes **animate an element out and back in at a new position** to avoid collisions; in lists, **animate only the element that moves** and **fade the others in/out** (developer: `Animating data updates in widgets and Live Activities`).

#### Offering interactivity
- **must** **Make sure tapping opens the app at the right location**: take people **directly to the related details and actions**, no navigating to find them (developer: `Linking to specific app scenes from your widget or Live Activity`).
- **should** **Focus on simple, direct actions**: buttons/toggles **take space away from information**; include interactive elements **only for essential functionality directly related to the activity that people use once or pause/resume** (music playback, workouts, apps that **record live audio with the microphone**); **prefer a single interactive element** to avoid accidental taps.
- **may** **Let people respond to updates** with a button or toggle where the update can be acted on (rideshare: **contact the driver** while waiting).

#### Starting, updating, and ending a Live Activity
- **should** **Start at appropriate times and let people turn them off in the app.** People expect activities to **start automatically** for a task at hand or at specific times (after a food order, a rideshare request, when a favourite team's match starts); **unexpected ones surprise or annoy**. Offer **controls in the app view that corresponds to the activity** (a sports app: **unfollow a game or team**). If people can't control them from the app they may **turn off Live Activities in Settings altogether**.
- **should** **Offer an App Shortcut that starts your Live Activity** (e.g. started with the **Action button**; see App Shortcuts).
- **should** **Update only when there is new content**: if the underlying content or status is unchanged, **keep the same display**.
- **should** **Alert only for essential updates that need attention.** Alerts **light up the screen and play the notification sound by default**, and show the **expanded presentation** in the Dynamic Island (a **banner** on devices without it). Don't alert too often or for non-crucial updates, and **don't send push notifications for the same updates alongside** the Live Activity.
- **should** **Track multiple events with one Live Activity**: prefer **a single activity with a dynamic layout that rotates through events** over several activities to jump between (a sports app cycling through **scored points, substitutions, fouls across matches**).
- **must** **End a Live Activity immediately when the task or event ends, and consider a custom dismissal time.** On end the system **removes it at once from the Dynamic Island and CarPlay**; on the **Lock Screen, in the Mac menu bar and in the watchOS Smart Stack it stays up to four hours**. A summary may only matter briefly: choose a **dismissal time proportional to the duration**; **15 to 30 minutes is adequate in most cases** (rideshare: end when the ride completes and keep it **30 minutes** for the summary and a tip; developer: `Displaying live data with Live Activities`).

### Presentation
- Support **all locations, devices and appearances**; the sizes differ, so **design layouts that fit each place**.
- **should** **Start with the iPhone design, then refine for other contexts**: standard designs for each presentation first; then, depending on the functionality, **custom layouts for iPhone in StandBy, CarPlay, Apple Watch**.

#### Compact presentation
- **should** **Focus on the most important information**: dynamic, up-to-date, essential, easy to understand (a sports app: **two team logos and the score**).
- **should** **Make the two compact elements read as one piece of information** although the TrueDepth camera separates them: **consistent colour and typography** connect leading and trailing.
- **should** **Keep content as narrow as possible and snug against the TrueDepth camera**: don't hide key status-bar information; **no padding between content and the camera**; **balanced** leading/trailing views of similar size, using **shortened units or less precise data** to keep width and balance. (✗ unbalanced, too wide with padding / ✓ snug.)
- **must** **Link to relevant app content**: a tap opens **the related details**; **both leading and trailing elements open the same screen**.

#### Minimal presentation
- **should** **Make it recognisable**: **show updated information rather than only a logo** if possible, while people can still tell your app (the Timer app shows **remaining time**, not a static icon).

#### Expanded presentation
- **should** **Keep relative placement between presentations**: expanded is **an enlarged compact/minimal**; information and layout **expand predictably**.
- **should** **Wrap content tightly around the TrueDepth camera**: place content **close to the camera**, avoid big gaps around it, use space efficiently and **diminish the camera's presence**. (✗ empty space next to the camera / ✓ content uses it.)

#### Lock Screen presentation
- **must not** **Replicate notification layouts**: create a **layout specific to the activity's information**.
- **should** **Choose colours that work on a personalised Lock Screen** (wallpapers, custom tints, widgets): use **custom background or tint colours and opacity sparingly** to stay legible.
- **should** **Verify contrast in Dark Mode and on an Always-On display.** By default the Lock Screen activity uses a **light background in light appearance and a dark one in dark appearance**; with a custom background choose **a colour that works in both** or **one per appearance**; **test on an Always-On device with reduced luminance** because the system **adapts colours** there (see Dark Mode, Always On; developer: asset catalogs).
- **should** **Verify the generated colour of the dismiss button**: the system builds a matching **dismiss button** from the background and foreground colours; adjust it if needed (`activitySystemActionForegroundColor(_:)`).
- **should** **Use standard margins to align with notifications**: the standard layout margin on the Lock Screen is **14 points**; tighter margins are OK for graphics or buttons, but **don't crowd the edges** (developer: `padding(_:_:)`).

#### StandBy presentation
- **should** **Update the layout for StandBy**: assets must look right at the **larger scale**; consider **a custom layout that uses the extra space** (developer: `Creating custom views for Live Activities`).
- **should** **Consider the default background colour in StandBy**: it **blends with the device bezel**, gives a **softer look that fits the surroundings** and lets the system **scale the activity a bit larger** because it needn't leave margins around the TrueDepth camera.
- **should** **Use standard margins; don't extend graphics to the screen edge**: without margins content is **cut off as the activity extends**, so it **feels broken**.
- **should** **Verify in Night Mode**: the system applies **a red tint** to the activity; check the colours keep **enough contrast**.

### CarPlay
- The system **merges the compact leading and trailing elements into one layout** on the **CarPlay Dashboard**. The design applies to **both CarPlay and Apple Watch**, so design for both; **Apple Watch activities can be interactive, but the system deactivates interactive elements in CarPlay**.
- **may** **Create a custom layout if larger text or more information helps**: declare support for the **`ActivityFamily.small`** supplemental family instead of the default appearance.
- **should** **Think carefully about buttons/toggles in the custom layout**: they are **deactivated in CarPlay**; if people are likely to **start or watch the activity while driving**, show **timely content rather than buttons and toggles**.

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **tvOS, visionOS:** not supported.
- **macOS:** active activities **appear automatically in the menu bar of a paired Mac** in the **compact, minimal and expanded** presentations; **clicking one launches iPhone Mirroring** to show the app.
- **watchOS:** when an activity starts on iPhone it appears **at the top of the paired Watch's Smart Stack**; by default the view **combines the leading and trailing elements of the iPhone compact presentation**. Tapping opens **your watchOS app if you have one**; without one it opens **a full-screen view with a button to open the app on the paired iPhone**.
  - **may** **Create a custom watchOS layout**: shows **more information** and can add a **button or toggle**.
  - **should** **Think carefully about buttons/toggles there**: the custom watchOS layout **also applies in CarPlay**, where interactive elements are deactivated; **if people may start or observe the activity while driving, don't include buttons or toggles** in it.
  - **should** **Focus on essential information and significant updates** in the Smart Stack; useful content: **progress** (estimated arrival of a delivery), **interactive elements** (stopwatch or timer controls), **significant updates** (sports score changes).

## Specs & values

### Limits and behaviours
| Item | Value |
|---|---|
| Recommended activity duration | short to medium, **≤ 8 hours** |
| Presentations to support | **4**: compact, minimal, expanded, Lock Screen |
| Dynamic Island corner radius | **44 pt** (matches the TrueDepth camera shape) |
| Lock Screen standard margin | **14 pt** |
| Text | **medium weight or higher**, large; small text sparingly |
| Animation | **≤ 2 s**; **none on Always-On with reduced luminance** |
| Kept after it ends | Dynamic Island and CarPlay: removed **at once**; Lock Screen, Mac menu bar, watchOS Smart Stack: **up to 4 hours** |
| Suggested custom dismissal | proportional to duration; **15–30 min** usually; example **30 min** (rideshare) |
| StandBy | minimal presentation; tap → Lock Screen presentation **scaled 2×**; Night Mode adds a **red tint** |
| Dynamic Island background | **black, opaque**; key line appears on dark backgrounds |
| Custom background | **Lock Screen presentation only** |
| Interactivity | prefer **one** element; **deactivated in CarPlay** |
| CarPlay family | `ActivityFamily.small` (supplemental) |

### CarPlay dimensions (pt): the system may scale to the vehicle screen
| Live Activity size (pt) |
|---|
| 240 × 78 |
| 240 × 100 |
| 170 × 78 |

Smart Display Zoom configurations to test (CarPlay simulator; Settings › Display in CarPlay):
| Configuration | Resolution (pt) |
|---|---|
| Widescreen | 1920 × 720 |
| Portrait | 900 × 1200 |
| Standard | 800 × 480 |

### iOS dimensions (points, portrait)
| Screen | Compact leading | Compact trailing | Minimal (width range) | Expanded (height range) | Lock Screen (height range) |
|---|---|---|---|---|---|
| 430 × 932 | 62.33 × 36.67 | 62.33 × 36.67 | 36.67–45 × 36.67 | 408 × 84–160 | 408 × 84–160 |
| 393 × 852 | 52.33 × 36.67 | 52.33 × 36.67 | 36.67–45 × 36.67 | 371 × 84–160 | 371 × 84–160 |

Dynamic Island width (pt) by device (page lists **iPhone 14 Pro → iPhone 17 Pro Max**; identical pattern every generation):
| Presentation | Device | Width |
|---|---|---|
| Compact or minimal | iPhone 17 Pro Max · iPhone Air · iPhone 16 Pro Max · iPhone 16 Plus · iPhone 15 Pro Max · iPhone 15 Plus · iPhone 14 Pro Max | **250** |
| Compact or minimal | iPhone 17 Pro · iPhone 17 · iPhone 16 Pro · iPhone 16 · iPhone 15 Pro · iPhone 15 · iPhone 14 Pro | **230** |
| Expanded | iPhone 17 Pro Max · iPhone Air · iPhone 16 Pro Max · iPhone 16 Plus · iPhone 15 Pro Max · iPhone 15 Plus · iPhone 14 Pro Max | **408** |
| Expanded | iPhone 17 Pro · iPhone 17 · iPhone 16 Pro · iPhone 16 · iPhone 15 Pro · iPhone 15 · iPhone 14 Pro | **371** |

### iPadOS dimensions (points, portrait)
| Screen | Lock Screen (height range) |
|---|---|
| 1366 × 1024 | 500 × 84–160 |
| 1194 × 834 | 425 × 84–160 |
| 1012 × 834 | 425 × 84–160 |
| 1080 × 810 | 425 × 84–160 |
| 1024 × 768 | 425 × 84–160 |

### macOS dimensions
Use the iOS dimensions.

### watchOS dimensions (same as watchOS widgets)
| Apple Watch size | Live Activity in the Smart Stack (pt) |
|---|---|
| 40 mm | 152 × 69.5 |
| 41 mm | 165 × 72.5 |
| 44 mm | 173 × 76.5 |
| 45 mm | 184 × 80.5 |
| 49 mm | 191 × 81.5 |

### Other facts
| Item | Value |
|---|---|
| Developer APIs named | ActivityKit, SwiftUI, WidgetKit, `ContainerRelativeShape`, `activitySystemActionForegroundColor(_:)`, `padding(_:_:)`, `ActivityFamily.small`, asset catalogs, App Shortcuts |
| Videos (links only, not watched) | Live Activities essentials (WWDC26 223), Turbocharge your app for CarPlay (WWDC25 216), What's new in widgets (WWDC25 278) |
| Apple's Related list | none on this page |
| Change log | Dec 16 2025 (all platforms updated, macOS and CarPlay added) · Jun 10 2024 (watchOS) · Oct 24 2023 (expanded guidance, new artwork) · Jun 5 2023 (iOS 17/iPadOS 17 features) · Nov 3 2022 (artwork and specifications) · Sep 23 2022 (new page) |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** the red-orange card shows **two stacked phone tops**: above, the **compact** presentation on the Dynamic Island, **"KC 7"** at the leading side and **"SF 6"** at the trailing side of the camera pill; below, the **expanded** presentation: big **"KC 7"** and **"SF 6"**, under them **"LeMoine 3.07 ERA"**, **"Bot 9th 3-2, 2 out"** with a **baseball-diamond glyph** in the middle, and **"Stern .312 AVG"**. The score text and names are **(from screenshot)**; the alt only says the collapsed and expanded Dynamic Island showing a live sports score.
- **Locations table (screenshot 2):** a two-column table (Platform or system experience · Location) with four rows, matches the fetch.
- **Compact / minimal / expanded diagrams (screenshots 3–4):** phones in a **light UI** with a **black Dynamic Island** and a **crimson pill** standing for the TrueDepth camera (the pill is not real UI). Compact: callouts **"Leading side"** and **"Trailing side"** **(from screenshot)**, status 9:41, Wi-Fi, battery. Minimal: callouts **"Minimal (attached)"** (a black capsule joined to the camera pill) and **"Minimal (detached)"** (a separate black circle) **(from screenshot)**. Expanded: a **large black rounded shape** below the camera pill.
- **Lock Screen and Home Screen banner (screenshot 5–6):** a black banner at the bottom of the Lock Screen (above the flashlight and camera buttons and the home indicator): a **blue delivery-bag glyph** with **"3 items"** at the leading side, **"Juan C."** with **four and a half stars** and **"Arriving in 8 minutes"** (**"8 minutes" in blue**) at the trailing side **(from screenshot)**; on an older notch iPhone the same banner overlays the Home Screen with app icons underneath.
- **StandBy (screenshots 6–7):** a landscape phone with a **blue full-screen background** and a **dashed inner border** marking the 2× scaled area: **"Airline / SFO ✈ NRT / Landing in 8h 9m / Departed 2:40 PM / Terminal 2 7:20 PM"** and a dark bar at the leading edge for the camera cut-out **(from screenshot)**.
- **✗/✓ pairs (screenshots 7–12):** small two-line "GATE C15" vs large "C15" in a compact island; a **"Contact Juan C." expanded** view with even margins; a blue circle poking too far from the corner vs snug icons; three phones separating a block: **✗ full-width teal band "Text"** to the edge, **✓ inset rounded pill "Text"**, **✓ thin line above "Text"**; blurred **"7 min"** with a **red dashed outline** for the blur exercise (✗ far, ✓ close); compact **"8min"** unbalanced (gap) vs snug; expanded **empty space next to the camera** (red dashed line on the ✗) vs content moved up beside it. In the ✓ compact picture the **"8min" text touches the edge of the crimson camera pill** (as drawn).
- **Tip callout:** teal-bordered box titled "Tip" (screenshot 9); other callout: none. **Colour swatches:** the dark **Night Mode** StandBy pictures are **red on black** (screenshots 13–14).
- **watchOS (screenshot 17):** **iPhone compact view** (9:41, delivery glyph left, "8min" right); **Default Smart Stack view**: a white card, grey **"From Delivery App"**, glyph at the bottom left, **blue "8 min"** at the bottom right; **Custom Smart Stack view**: bold **"Delivery App / Arriving in / 8 min"** with a **circular progress ring around the glyph**.
- **Tables (screenshots 18–21):** CarPlay, iOS, Dynamic Island widths, iPadOS, macOS sentence, watchOS: all values match the fetch; the iOS table headers wrap "Minimal (width given as a range)", "Expanded (height given as a range)". **Videos (last screenshot):** "Live Activities essentials" (WWDC26; a phone with a brown "Espresso / Ordered" card and segmented progress), "Turbocharge your app for CarPlay" (WWDC25; a car interior with dashboard screens), "What's new in widgets" (WWDC25; two latte-art tiles "Most Frequent Beverage / Matcha Latte"). The screenshots stop at the **"Change log" heading**.
- **Page chrome (from screenshot):** TOC = Live Activities · Anatomy · Best practices · Presentation · CarPlay · Platform considerations · Specifications · Resources · Change log (the deeper headings Creating layouts, Choosing colors, etc. are **not** in the TOC); side navigation shows **System experiences** with **Live Activities** ringed.
- **Mismatches / notes:**
  1. **Catalog rule label:** the automatic catalog labelled **live-activities-04** (the blurred-text pair) with the rule "When separating a block of content…"; the pair actually belongs to the **Tip about blurring**. Recorded in the README row.
  2. **Platform strip:** only the **iPhone** icon is dark in the screenshots although the page covers iPad, Mac, Watch and CarPlay (the text is authoritative).
  3. **Dynamic Island widths:** the page lists **14 phones × 2 presentation types** (the screenshots show the rows from iPhone 17 Pro Max down to iPhone 14 Pro); Max, Plus and Air models share the wider value and Pro and standard models the narrower one, as summarised in the table above.

## Visual examples (catalog)
`visual-examples` gains **7 sets**: **live-activities-01** ✗/✓ text size · **-02** ✗/✓ concentric placement · **-03** ✗ + ✓ + ✓ separating a block (band to the edge vs inset pill vs thick line) · **-04** ✗/✓ blur exercise (**rule label in the auto catalog is wrong**, see above) · **-05** ✗/✓ compact balance · **-06** ✗/✓ expanded layout around the camera · **-07** neutral pair (default vs custom Smart Stack view). All have light and dark variants. Not in the catalog: hero, anatomy diagrams, Lock Screen and StandBy pictures, the watchOS compact view. Catalog total: **190** (was 183); existing IDs unchanged.

## Web translation
Live Activities are a **system surface** (Dynamic Island, Lock Screen, StandBy, Smart Stack, CarPlay): a web app **can't create them** and **must not imitate** them. What transfers is the design of a **time-boxed, glanceable status** for one task: **one persistent status that updates in place**, tells the few facts that matter, opens the exact place in the app, and **goes away when the task ends**. Nearest web/PWA tools: a **sticky in-app status bar/chip**, **Web Push with `tag` (replace in place) and `renotify`**, the **Badging API**, **Media Session** for playback, **tab title/favicon updates**, and (Android) progress-style ongoing notifications; treat platform specifics as CONV.

| HIG rule | Web implementation |
|---|---|
| A defined beginning and end, ≤ 8 hours | Use a **status tile only for a bounded task** (delivery, upload, ride, match, export). Give it a **start trigger and an end condition** and **auto-expire** (CONV: hard stop around 8 h). Long-running states belong in a dashboard, not a status tile. |
| Important information only, concise; tap opens the app | **One headline value + one supporting line** (ETA, score, progress); the rest lives behind the tap. Same source of truth as the full screen. |
| No ads or promotions | **Never put promotion in a status tile or ongoing notification**; treat it as a transactional message (`managing-notifications.md`). |
| Avoid sensitive info; summary + tap, or redact with a setting | Default to **an innocuous summary** ("Your order is 8 min away"), **mask private values** on lock/idle/shared screens, offer a **"show details on lock screen/notifications" setting** (`privacy.md`; same idea as `complications.md`, `controls.md`). |
| Four presentations (compact, minimal, expanded, Lock Screen) | Define **four sizes of the same status**: **chip** (icon + one value, ~ compact/minimal), **bar** (one line + progress), **card** (expanded, with detail and one action), **notification/lock** view (system-drawn). Build them as one component with **container queries** so they stay consistent. |
| Brand look, dark and light; logo without container; not the whole app icon | Use **brand accent + tokens** for both themes (`branding.md`, `dark-mode.md`); show the **mark alone (no rounded-square tile)**; don't reuse the full app icon. |
| Text medium weight or higher, large | **Weight ≥ 500** and **≥ 16 px** for the headline value, small text only for secondary info, **≥ 12 px** (CONV), contrast **≥ 4.5:1** (Color gate). |
| Concentric margins; inner radius = outer radius − margin | CSS: `--r: 20px; --m: 8px; .inner{ border-radius: calc(var(--r) - var(--m)); margin: var(--m) }` (or `border-radius: calc(var(--outer) - var(--padding))`); **standard padding 14 px** on the card (Apple: **14 pt** on the Lock Screen; CONV mapping pt → px); equal insets on all sides including corners; nothing touches the curve. |
| Separate blocks with an inset container or a thick line | A **nested rounded panel with inset margin** or a **≥ 2 px divider**; **never run a band edge-to-edge** into rounded corners (`overflow: hidden` on the parent would clip it). |
| Blur trick to check alignment in rounded corners | In design review, **blur the layer** (`filter: blur(6px)` in devtools) to see whether shapes follow the corner curve. |
| Height changes with content | **Animate `height`/`grid-template-rows`** from compact to expanded as data arrives (`interpolate-size` / grid trick), **no fixed height**; keep the element's position stable. |
| Custom background only where allowed; bold colours; key line | Keep the **tile background a fixed brand surface** (black-like on dark, light on light); use **bold accent colours for the values** and a **1–2 px key line** in the accent on dark backgrounds so the tile separates from the page. |
| Transitions ≤ 2 s; animate updates; content-replace, numeric transitions | **150–400 ms** for value changes (**hard cap 2 s**); **numeric roll/cross-fade** for scores/timers; **animate layout changes with FLIP** (move existing elements, don't remove and re-add); **respect `prefers-reduced-motion`** and skip animation on **idle/low-power** or dimmed states. |
| Avoid overlapping elements during transitions | In lists animate **only the moved item**, fade the others; stagger to avoid collisions. |
| Tap opens the exact place; both compact elements link to the same screen | The whole tile is **one link** to the **deep-linked view** (`/orders/123/track`), not the home page; leading and trailing parts never link to different places. |
| Simple, direct actions; prefer one element | **At most one button** ("Contact driver", "Pause") with **≥ 44 px** hit region (Buttons GATE); no secondary menus in the tile. |
| Respond to updates | A single **contextual action** tied to the current state ("Contact driver" while waiting), removed when it no longer applies. |
| Start at appropriate times; easy to turn off | Start **only after an explicit user action** (order, request, follow); provide **"Stop tracking" in the related screen** and a **global setting** to disable status tiles; don't start silently. |
| App Shortcut that starts it | Offer **a one-tap "Track this" entry** (manifest shortcut / command palette / deep link) that starts the tile (`app-shortcuts.md`). |
| Update only when content changes | **Diff before render**; don't re-render or re-notify for identical data; push updates only on change, **coalesce** bursts (CONV: ≤ 1 update per few seconds). |
| Alert only for essential updates; no duplicate push | **Web Push for the few moments that need action** (driver arrived) with `tag` so it **replaces** the previous one; **never both a notification and a status change for the same event**; quiet updates elsewhere are silent. |
| One activity for many events | **Rotate one tile through events** (goal, sub, foul) with a small event label instead of many tiles. |
| End immediately, custom dismissal 15–30 min | **Switch to "done" state as soon as the task ends**, show a **short summary** (ride total, tip) for **15–30 min** (CONV mapping of Apple's advice), then **remove** it; never leave a finished tile up for hours. |
| iPhone first, then StandBy / CarPlay / watch | **Design the mobile card first**, then variants: **large-display/kiosk** (`@media (min-width: 1600px)` or `display-mode: fullscreen`, 2× scale, standard margins, no edge-to-edge art), **glance-while-busy** (bigger text, fewer items), **tiny (watch-like)** (one value). |
| StandBy background + Night Mode red tint | In **night/low-light** styles (`prefers-color-scheme: dark`, `prefers-contrast`), verify colours keep contrast; **don't rely on hue** to distinguish states (Color gate); test a **red-shifted/`sepia` filter** (`filter: sepia(1) hue-rotate(-50deg)`) as a quick check. |
| CarPlay: interactive elements deactivated | In **driving or hands-busy contexts** show **information only** (no buttons/toggles, larger text); detect via **native shell/OS setting** rather than guess. |
| macOS menu bar, watch Smart Stack | Desktop web analogue: a **tray/menu-bar/PiP or compact floating window** (Document Picture-in-Picture) or a **pinned tab with dynamic title/favicon**; clicking returns to the app at the right place. |
| Dismiss button colour | Provide a **visible, accessible dismiss** ("Hide", "Stop tracking") whose colours are **derived from the tile's background/foreground** and checked for contrast. |
| Verify on Always-On (reduced luminance) | Test **dimmed/low-power** appearance: **no animation, high contrast, no thin lines**; prefer bold colours (Color gate). |
| Native-only surface | Mention the **native implementation** (ActivityKit / WidgetKit) for teams with an iOS app; the web implements the **principles**, not the surface. |

Field-note cross-links:
- `hig/components/system-experiences/app-shortcuts.md` (✓): Live Activities are **a response type** there ("timers and countdowns until an event is complete") and this page says to **offer an App Shortcut that starts** the activity: **consistent, complementary**. `hig/components/system-experiences/controls.md` (✓): a control can **launch a Live Activity** without opening the app. `complications.md` (✓): sibling glance surface (timeline, privacy on Always-On, tinted/grayscale); rules for **redaction, contrast on reduced luminance and deep links** repeat.
- `hig/patterns/managing-notifications.md` (✓) and `hig/patterns/feedback.md` (✓ CRITICAL): alert discipline (no duplicate push, only essential alerts); `hig/patterns/workouts.md` (✓) and `hig/patterns/live-viewing-apps.md` (✓): timers from timestamps, live scores; `hig/patterns/playing-audio.md` (✓): playback controls outside the app.
- `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**; `hig/foundations/dark-mode.md` (✓); `hig/foundations/branding.md` (✓); `hig/foundations/typography.md` (✓ CRITICAL): weights/sizes; `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: safe areas, margins; `hig/foundations/privacy.md` (✓): sensitive data; `hig/foundations/motion.md` (✓): purposeful motion, duration limits.
- `field-notes/*`: no status-tile recipe; **no conflict**. `hig/foundations/motion.md` (purposeful motion, no ~0.2 Hz loops, no edge motion) is **consistent** with the 2 s ceiling and the "no animation on reduced luminance" rule here.
- Not yet ingested (linked from this page or named): **Always On**, **Widgets** (Smart Stack); **Notifications** is now ✓ (`notifications.md`).

## Checklist
- [ ] The tile is for a **bounded task**, with a **start trigger, an end condition and auto-expiry** (≈ ≤ 8 h).
- [ ] It shows **one headline fact plus one supporting line**; **no ads**; detail is one tap away.
- [ ] **Sensitive values are masked** by default on lock/idle/shared screens, with a setting to show them.
- [ ] There are **four sizes** (chip, bar, card, notification) generated from one component and consistent.
- [ ] Text is **≥ 500 weight**, large, **≥ 4.5:1** contrast; the logo mark has **no container**.
- [ ] **Concentric margins** (inner radius = outer − margin), standard padding, blocks separated by an **inset panel or thick line**, nothing edge-to-edge.
- [ ] **Height and layout animate** predictably; every transition **≤ 2 s**, reduced-motion respected, **no animation in dimmed/low-power** states.
- [ ] The whole tile **links to the exact view**; at most **one** ≥ 44 px action; no interactive elements in **driving/hands-busy** contexts.
- [ ] Updates happen **only on change**; **one alert** per essential event; **no duplicate push**.
- [ ] The tile **ends immediately** when the task ends, shows a **15–30 min summary**, then disappears; users can **stop tracking** and **disable** the feature.
- [ ] A **large-display/night** variant is tested (2× scale, red-shifted check, standard margins).

## Related
- Ingested: App Shortcuts (✓), Controls (✓), Complications (✓), Managing notifications (✓), Feedback (✓ CRITICAL), Workouts (✓), Live viewing apps (✓), Color (✓ CRITICAL), Dark Mode (✓), Branding (✓), Typography (✓ CRITICAL), Layout (✓ CRITICAL), Privacy (✓), Motion (✓), Buttons (✓ CRITICAL).
- Not yet ingested (linked from this page): **Always On**; named in the text: **Widgets** (Smart Stack); **Notifications** is now ✓ (`notifications.md`).
- Developer docs: ActivityKit, SwiftUI, WidgetKit, "Developing a WidgetKit strategy".
- Videos: Live Activities essentials (WWDC26 223), Turbocharge your app for CarPlay (WWDC25 216), What's new in widgets (WWDC25 278).
