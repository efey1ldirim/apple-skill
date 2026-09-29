# Activity rings
Source: https://developer.apple.com/design/human-interface-guidelines/activity-rings · Section: Components › Status · Supported platforms: **iOS, iPadOS, watchOS** ("No additional considerations for iPadOS or watchOS. Not supported in macOS, tvOS, or visionOS"; the iPhone, iPad and Watch icons are lit, Mac, TV and Vision dimmed on the platform strip **(from screenshot)**; the iOS section is the only platform-specific one) · Ingested: 2026-09-29 · Apple last updated: **March 29, 2024** (enhanced guidance for displaying Activity rings and listed specific colours for related content; earlier row: December 5, 2023, artwork for Activity rings in iOS). One DocC fetch, read in full. 5 screenshots (hero → the "Videos" heading) were compared with the fetched text, captions and image alt text line by line: everything matches, including the RGB swatch table. **Read from the fetch only (not in screenshots):** the three **video links** under *Videos*, the **change-log rows**, the dark variants of the pictures and the image alt texts. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but its colour rules relate to the **Color gate** (contrast on black). **This page is a "don't" page for the web**: the rings are an Apple-designed, fixed element (*see Web translation*). The page has **a few numbers**: the RGB values of the three colours and a **minimum outer margin equal to the distance between rings**.

## In one line
**Activity rings show one person's daily progress toward Move, Exercise and Stand goals.** They are a **fixed, Apple-designed element** with **three rings** on watchOS (**one Move ring, or all three with a paired Apple Watch, on iOS**). **Use them only for Move, Exercise and Stand** (never other data, never replicated in another ring-like element), **for one person** (say whose), **always with the same appearance** (unchanged colours, **black background**, visible black margin, no effects, scaled sensibly), **use the matching RGB colours for related labels and values**, **keep a margin at least the ring gap**, **differentiate other rings**, **don't repeat the system's Activity notifications** and **never use them for decoration or branding**.

## Rules

### Framing (intro)
- **watchOS:** the Activity ring element **always contains three rings**, whose **colours and meanings match those of the Activity app**.
- **iOS:** the element contains **either a single Move ring** representing an **approximation of activity**, **or all three rings if an Apple Watch is paired**.

### Best practices
- **should** **Display Activity rings when relevant to the app's purpose.** Health or fitness apps, **especially those contributing to HealthKit**, are expected to show them. Examples: on a **workout metrics screen** so people can **track progress during the session**; on a **summary screen at the end of a workout** to check **progress toward daily goals**.
- **must** **Use Activity rings only to show Move, Exercise and Stand information.** They **consistently represent progress in these specific areas**: **don't replicate or modify them for other purposes**, **never display other types of data** and **never show Move/Exercise/Stand progress in another ring-like element**.
- **must** **Use Activity rings to show progress for a single person.** **Never** represent data for **more than one person**, and make it **obvious whose progress is shown** with **a label, a photo or an avatar**.
- **must** **Always keep the visual appearance the same, wherever displayed:**
  - **Never change the colours** of the rings (no **filters**, no **opacity changes**).
  - **Always display them on a black background.**
  - **Prefer enclosing the rings and background within a circle**, by **adjusting the corner radius of the enclosing view rather than applying a circular mask**.
  - **Keep the black background visible around the outermost ring**; if necessary add **a thin black stroke around the outer edge** and **avoid a gradient, shadow or any other visual effect**.
  - **Scale the rings appropriately** so they don't look **disconnected or out of place**.
  - **Design the surrounding interface to blend with the rings; never change the rings to blend with the surrounding interface.**
- **should** **To display a label or value directly associated with an Activity ring, use the matching colours.** For the ring-specific labels *Move*, *Exercise*, *Stand*, or a person's **current and goal values** for each ring, use these **RGB** values: **Move R 250, G 17, B 79** · **Exercise R 166, G 255, B 0** · **Stand R 0, G 255, B 246**.
- **must** **Maintain Activity ring margins.** The element needs a **minimum outer margin no less than the distance between rings**; **never let other elements crop, obstruct or encroach** on this margin or on the rings.
- **should** **Differentiate other ring-like elements from Activity rings.** Mixing ring styles **can confuse**; if other rings are necessary, **separate them with padding, lines or labels**; **colour and scale** can also help.
- **must not** **Send notifications that repeat the information the Activity app sends.** The system already delivers **Move, Exercise and Stand progress updates**; redundant ones are **confusing**. **Don't show an Activity ring element in your app's notifications**. **Referencing Activity progress in a notification is fine** if it is **unique to your app** and **doesn't replicate the system's information**.
- **must not** **Use Activity rings for decoration**: they **provide information**; **never display them in labels or background graphics**.
- **must not** **Use Activity rings for branding**: **strictly for Activity progress in your app**; **never in the app's icon or marketing materials**.

### Platform considerations
- **iPadOS, watchOS:** no additional considerations. **macOS, tvOS, visionOS:** not supported.

#### iOS
- Activity rings are available with **`HKActivityRingView`** (HealthKit). **The appearance changes automatically** by whether an Apple Watch is paired:
  - **Apple Watch paired:** iOS shows **all three** rings.
  - **No Apple Watch paired:** iOS shows the **Move ring only**, an **approximation of activity from steps and workout information from other apps**.
- Because iOS shows rings either way, **activity history can combine both styles**: Fitness shows **three rings** when a person exercised with the Watch paired and **only the Move ring** when they exercised without it.

## Specs & values

| Item | Value |
|---|---|
| Purpose | one person's daily Move · Exercise · Stand progress |
| Rings | watchOS: 3 always · iOS: Move only, or 3 with a paired Watch |
| Move colour | **RGB 250, 17, 79** (red-pink) |
| Exercise colour | **RGB 166, 255, 0** (lime green) |
| Stand colour | **RGB 0, 255, 246** (cyan) |
| Background | **black** always; black visible around the outer ring (thin black stroke if needed); no gradient, shadow or effect |
| Enclosure | prefer a circle via corner radius, not a circular mask |
| Margin | outer margin **≥ the distance between rings**; nothing crops or encroaches |
| Colour changes | never (no filters, no opacity change) |
| Notifications | don't repeat system Activity updates; don't put rings in notifications |
| Never for | other data, several people, decoration, branding (app icon, marketing) |
| Platforms | iOS · iPadOS · watchOS (no macOS, tvOS, visionOS) |
| Developer docs | HealthKit UI `HKActivityRingView` |
| Videos | Track workouts with HealthKit on iOS and iPadOS (WWDC25) · Build a workout app for Apple Watch (WWDC21) · Build custom workouts with WorkoutKit (WWDC23) |
| Apple's Related list | Workouts ✓ |
| Change log | March 29, 2024: enhanced guidance, listed colours · December 5, 2023: iOS artwork |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **large black disc** containing **three concentric arcs** (outer red-pink, middle lighter, inner pale) each ending in a **small round cap with a glyph** (→ on the outer, ⇉ on the middle, ↑ on the inner), with **leader lines and monospaced labels**: **"Move 75% · 450/600 CAL"** at the left, **"Stand 50% · 5/10 HR"** at the right and **"Exercise 63% · 18/30 MIN"** at the bottom. The rings are drawn in the card's tint; their glyphs identify Move, Exercise and Stand **(from screenshot)**.
- **Workout metrics screen (screenshot):** an Apple Watch: a **green running glyph** and **10:09** at the top, a **large yellow timer "00:04.88"**, then **"MOVE 102/380"** (red), **"EXERCISE 14/30"** (green) and **"STAND 2/12"** (cyan) at the left and the **three-ring element** at the right, page dots underneath **(from screenshot)**.
- **Colour swatches (screenshot):** a three-column table **Move / Exercise / Stand** with **rounded-square swatches** and their values **"R 250 G 17 B 79" (red-pink)**, **"R 166 G 255 B 0" (lime)**, **"R 0 G 255 B 246" (cyan)** **(from screenshot)**.
- **iOS Fitness Summary (catalog `activity-rings-01`, screenshots):** two black iPhone screens **"Summary · Tuesday, Sep 9"** with an avatar and a grey card **"Activity Rings"**: **Apple Watch paired**: three full rings (pink/red, lime, cyan; all complete) and **Move 300/300 CAL**, **Exercise 30/30 MIN**, **Stand 12/12 HRS** in matching colours; **No Apple Watch paired**: **one Move ring partly filled** (dark track visible) and **Move 228/300 CAL** in red, then **Steps 6,290** and **Distance 3.7 MI in grey** (values not tied to a ring use neutral text) **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Activity rings · Best practices · Platform considerations · Resources · Change log; platform strip lights iPhone, iPad and Watch; side navigation shows the **Status** group open (Activity rings bold, Gauges, Progress indicators, Rating indicators), **Selection and input** collapsed, and the **System experiences** and **Inputs** groups below.
- **Fetch script run:** 1 new comparison group (`activity-rings-01`: Watch paired vs not); existing catalog IDs unchanged; total **165**. The hero, the Watch screen and the colour swatches are not comparison sets.

## Web translation
**Apple's Activity rings are a protected, single-purpose Apple element; on the web the correct move is to *not* imitate them.** They apply only when a web app **actually shows a person's Apple Activity data** (e.g. from an authorised HealthKit export or Apple Health integration).

| HIG rule | Web implementation |
|---|---|
| Fixed, Apple-designed element for Move/Exercise/Stand only | **Don't clone the three-ring look for your own metrics** (steps, revenue, tasks, sleep): use a **different progress style** (bar, single ring in your own palette and thickness, `<progress>`/`<meter>`, `progress-indicators` not yet ingested) so people don't mistake it for Apple Activity. Show real Activity data only when the source is genuinely Apple Activity (authorised, accurate, current). |
| One person only; say whose | One ring set **per person**, with **a visible name/avatar/label next to it** (`aria-label="Efe's Activity"`); never combine several people into one set; a family view = several separately labelled sets. |
| Same appearance everywhere | If you do render real Activity data, **don't recolour, filter or fade the rings** (no CSS `filter`, `opacity`, blend modes); render them from **fixed SVG** (three `<circle>` strokes with `stroke-linecap: round`) on a **black background**, **not restyled by dark/light themes** (keep the black plate in light mode too). |
| Black background, black margin, circle enclosure via radius | Wrap the SVG in a **black rounded container** (`border-radius: 50%` on a **square box**, **not** `clip-path`/mask), keep **a black ring of padding visible** outside the outermost ring (SVG stroke or padding), **no gradient, shadow or glow** on the element. |
| Scale appropriately; blend the surroundings, not the rings | Scale the **whole SVG uniformly** (`width` in `em`/`rem`, `viewBox` fixed); design the page around the black plate (e.g. dark card, matching corner radii) rather than altering the rings. |
| Matching label/value colours | Use exactly **`rgb(250, 17, 79)` (Move)**, **`rgb(166, 255, 0)` (Exercise)**, **`rgb(0, 255, 246)` (Stand)** for the *Move / Exercise / Stand* labels and current/goal values, **on black or a very dark surface** (all three exceed 4.5:1 on black: **Color gate**); **never** use these three colours for unrelated status meanings; values **not tied to a ring** (steps, distance) use neutral text (as the Fitness card does). Don't rely on colour alone: **also print the label word and the numbers** ("Move 300/300 CAL"). |
| Margin ≥ ring gap; nothing overlaps | Reserve **padding ≥ the gap between rings** around the element (CSS `padding`/SVG margin); no badge, tooltip or text overlays crop it (`z-index`, `overflow: visible` checks). |
| Differentiate other rings | Any **other circular progress** on the same screen gets **its own colour family, thickness and size**, and is **separated by padding, a divider or a label**; never place a look-alike next to real Activity rings (**Feedback/Color gate**: distinguishable by more than colour). |
| Don't repeat the system's Activity notifications; no rings in notifications | Web push/emails **must not duplicate Move/Exercise/Stand updates** the Fitness app sends; **no ring artwork in notification images/emails**; referencing Activity in your own words ("You hit your run goal today") is fine (`managing-notifications.md`). |
| Not for decoration or branding | **Never use the rings as a hero graphic, background pattern, logo or favicon, or in marketing pages** (`branding.md`, `app-icons.md`); charts and illustrations of "rings" for your own product are OK only in a **clearly different style**. |
| iOS: Move ring only without a Watch; history mixes styles | If your web view shows data from a source **without Exercise/Stand** (steps/workouts only), **draw a single Move-style ring only when it really is the Move approximation**, otherwise use another component; in history lists, **show three rings or one ring per day depending on the data** and label which; **empty** goals show the dark track. |
| Accessibility | The element is **`role="img"`** with a **text alternative** ("Move 300 of 300 calories, Exercise 30 of 30 minutes, Stand 12 of 12 hours") and the same values in **visible text**; **`prefers-reduced-motion`**: no ring-closing animation; contrast of arcs against the black plate and of text **≥ 4.5:1**; no reliance on colour alone. |

Field-note cross-links:
- `hig/patterns/workouts.md` (✓): the workout summary/metrics guidance and its own **"Use Activity rings correctly"** rule (colours and meanings belong to Apple's Activity app: don't copy them for your own metrics): **consistent with, and now backed by, this page**; its "not yet ingested" mention points here.
- `hig/components/content/charts.md` (✓) and `hig/patterns/charting-data.md` (✓): the Health/Fitness charts and the D · W · M · 6M · Y range control; `hig/components/selection-and-input/segmented-controls.md` (✓): that control's Health example.
- `hig/patterns/managing-notifications.md` (✓): no duplicate system notifications; `hig/foundations/branding.md` (✓) and `app-icons.md` (✓): no rings in icons or marketing; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: contrast on black and colour-not-alone; `hig/foundations/writing.md` (✓): number/unit text ("300/300 CAL").
- No field note mentions Activity rings; **no conflict**. (`screenshots-described/curated-references.md` cites the Fitness rings only as a visual reference.)
- Gauges (✓ `gauges.md`). Progress indicators (✓ `progress-indicators.md`). Rating indicators (✓ `rating-indicators.md`).

## Checklist
- [ ] Rings show **only Move, Exercise and Stand** for **one labelled person**, from **genuine Apple Activity data**; otherwise a **different progress component** is used.
- [ ] Rings keep the **exact colours** (`rgb(250,17,79)`, `rgb(166,255,0)`, `rgb(0,255,246)`), **no filters, opacity or effects**, on **black**, enclosed by **corner radius (not a mask)** with the **black margin visible**.
- [ ] Margin **≥ the gap between rings**; nothing crops or overlaps; scaled uniformly.
- [ ] Ring-related labels/values use the **matching colours** and **also print the label and numbers**; unrelated values use neutral text.
- [ ] Other ring-like elements are **visibly different** and **separated** by padding, lines or labels.
- [ ] **No duplicate Activity notifications, no rings in notifications**, **no rings in icons, decoration or marketing**.
- [ ] `role="img"` with a text alternative and visible numbers; **reduced motion** respected; contrast **≥ 4.5:1** for text.
- [ ] History views show **three rings or a single Move ring per day** according to the data, labelled.

## Related
- Ingested: Workouts (✓), Charts (✓), Charting data (✓), Segmented controls (✓), Managing notifications (✓), Branding (✓), App icons (✓), Color (✓ CRITICAL), Writing (✓).
- Gauges (✓ `gauges.md`). Progress indicators (✓ `progress-indicators.md`). Rating indicators (✓ `rating-indicators.md`).
- Developer docs: HealthKit UI `HKActivityRingView`.
- Videos: Track workouts with HealthKit on iOS and iPadOS (WWDC25); Build a workout app for Apple Watch (WWDC21); Build custom workouts with WorkoutKit (WWDC23).
