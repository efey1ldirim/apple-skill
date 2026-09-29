# Charts
Source: https://developer.apple.com/design/human-interface-guidelines/charts · Section: Components › Content · Supported platforms: all six on the platform strip (**no additional considerations for iOS, iPadOS, macOS, tvOS, visionOS**; one watchOS rule) · Ingested: 2026-09-29 · Apple last updated: 2022-09-23 (new page; the change log has that single entry). One DocC fetch, read in full. 12 screenshots (light-mode page, hero → Developer documentation) were compared with the fetched text and image alt text line by line: everything matches; the twelve screenshots are contiguous. **The Videos list and the change-log row were read from the fetch only** (the last screenshot ends at the Swift Charts link). Text that exists only inside Apple's chart illustrations is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no rules with numbers**; the numbers below are examples read from the pictures.

This is the **component** page. The *strategy* page (what to chart, detail on demand, consistency) is `hig/patterns/charting-data.md`; read both for chart work.

## In one line
A chart shows a **few key facts**, not everything: pick the **mark type** for the question (bar to compare or sum, line for change, point for relationships), choose a **fixed or dynamic axis** on purpose, keep the axes and grid **quiet** so the data leads, write **descriptions before details**, never depend on **colour alone**, and make every chart **navigable and readable without seeing it**.

## Rules

### Framing (intro)
- An effective chart **highlights a few key pieces of information** in a dataset so people gain insight and make decisions. Examples: how coming **weather** may affect plans, **stock prices** and trends, **fitness data** and goals.
- Design strategy lives in **Charting data**; developer guidance is *Creating a chart using Swift Charts*.

### Anatomy (vocabulary, no rules)
- **Mark:** the visual form of one data value (bar, line, point). You supply one or more **series** and assign each value to a mark; the chart style comes from the mark type. Depicting values is **plotting**; the area holding the marks is the **plot area**.
- **Scale:** maps data values (numbers, dates, categories) to visual attributes (position, colour, height). A bar's height gives magnitude and its position gives when.
- **Axis:** a frame of reference; charts often show a horizontal and a vertical axis at the edges of the plot area, each standing for a variable (time, amount, category).
- **Tick:** a reference point on an axis (e.g. 0, 50 %, 100 %). **Grid line:** extends from a tick across the plot area so people can estimate values away from an axis.
- **Labels** name axes, grid lines, ticks or marks; **accessibility labels** describe elements for assistive technology; titles, subtitles and annotations add context; a **legend** explains properties that aren't position (colour or shape for categories).
- Clear, accurate descriptions make a chart more approachable and accessible.

### Marks
- **should** **Choose the mark type from what you want to say.**
  - **Bar:** compare values across categories, or show parts of a whole. For change over time, bars work best when each value can be a **sum** (steps per day).
  - **Line:** shows change over time; the **slope** reveals the size of change and the overall trend.
  - **Point:** shows individual values as distinct marks; a set of points can show how **two properties relate**, helping people inspect single values and spot **outliers and clusters**.
- **may** **Combine mark types when it adds clarity**, e.g. point marks on top of a line: the trend and the individual values both read.

### Axes
- **should** **Pick a fixed or dynamic range from the meaning.**
  - **Fixed** (bounds never change) when specific minimum/maximum values are meaningful for all data: a battery chart is **0 % to 100 %**.
  - **Dynamic** (bounds follow the data) when values vary widely and marks should fill the plot area: the Health Steps chart's upper bound changes so the largest value in the period sits **near the top**.
- **should** **Set the lower bound by mark type and use.**
  - **Bar charts** usually work with a **zero** lower bound, so bar heights compare honestly.
  - Zero can hide real differences: a heart-rate chart always starting at zero would **obscure resting vs active readings**, which sit far from zero.
- **should** **Prefer familiar tick and grid-line sequences**: 0, 5, 10… is understood at a glance; 1, 6, 11… follows the same rule but is uncommon, so people spend time working out the interval.
- **should** **Tailor grid lines and labels to the use case.** Too many are overwhelming and distract from the data; too few make values hard to estimate. Consider the chart's **context**, the **interactions** offered and the **tasks**. If people inspect single points by interacting, use **fewer grid lines and lighter label colours** so the data stays prominent.

### Descriptive content
- **should** **Write descriptions that explain what the chart does before people view it.** Information-rich titles and labels give the purpose and function up front; especially important for **VoiceOver** users and some **cognitive disabilities**, who use them to decide whether to explore further.
- **should** **Summarise the main message** so the chart is approachable for everyone: e.g. Weather titles the next-hour rain chart with a short title and subtitle, so people get the point **without examining the details**.

### Best practices
- **should** **Establish a consistent visual hierarchy**: the **data is most prominent**; descriptions and axes give context **without competing** with it.
- **should** **In a compact environment, maximise plot-area width.** Keep **vertical-axis labels as short as possible without losing clarity**, describe **units elsewhere** (e.g. in a title), and consider placing a longer axis label (a category name) **inside the plot area** when it doesn't hide important information.
- **must** **Make every chart accessible** to everyone regardless of how they perceive content.
  - Support **VoiceOver**; supply accessibility labels for chart components; **Audio Graphs** additionally turns the data and trend into **tones** and lets you add **high-level text summaries**.
- **should** **Let people interact with the data when it makes sense, but don't require interaction for critical information.** Stocks shows the line graph for the chosen period up front (one day, three months, five years); dragging a **vertical indicator** reveals the value at a time.
- **should** **Make it easy for everyone to interact.** Marks can be too small for a finger or pointer, hard for people with reduced motor control and uncomfortable for everyone: consider **expanding the hit target to the whole plot area** and let people **scrub across it** to reveal values.
- **should** **Keep interactive charts navigable with keyboard commands (incl. full keyboard access) and Switch Control.** By default these inputs visit elements **linearly** (the order of values in a data file). Two ways to customise:
  1. specify a **logical, predictable path** through the information (e.g. move along the **X axis** instead of jumping back and forth);
  2. for **very large datasets**, let focus move among **subsets of values** rather than every point.
  Both also improve VoiceOver even when the chart isn't interactive.
- **should** **Help people notice important changes.** If marks or axes change unnoticed, people **misread** the chart. **Animation** helps but isn't enough: also convey changes to **VoiceOver users and people who turn animation off** (accessibility notifications).
- **should** **Align the chart with surrounding UI.** Often the chart's **leading edge** lines up with other views'. Ways to keep it clean: show each **vertical grid line's label on its trailing side**; consider moving the **Y axis to the trailing side** so tick labels don't stick out past the leading edge; if a label ends up attached to nothing, use a **tick** to anchor it to a grid line.

### Color
- Colour in a chart clarifies information, evokes the brand and gives continuity; see the general *Inclusive color* guidance.
- **must not** **Rely solely on colour** to tell pieces of data apart or to convey essential information; add **another channel**. Example: Health's blood-pressure chart uses a **red circle** for systolic and a **black (or white) diamond** for diastolic, so shape as well as colour distinguishes them.
- **should** **Add visual separation between contiguous colour areas.** In a stacked single-row/column bar with one colour per segment, **separators between the marks** help people tell segments apart (iPhone Storage shows a narrow **gap** between segments).

### Enhancing the accessibility of a chart
- With **Swift Charts** you get a default **Audio Graphs** implementation and a default accessibility element per mark (or group of marks) describing its value.
- **should** **Consider Audio Graphs for VoiceOver users**: customise it with a **chart title and descriptive summary** that VoiceOver speaks. **Without** Audio Graphs you must give an **overview** yourself: **chart type** (bar, line…), **what each axis represents**, and details such as the **upper and lower axis bounds**.
- **Important (callout):** unlike an image (one descriptive label), a chart often needs a label **per important or interactive element**. Decide from the chart's purpose and the **scope and density of marks** whether to describe **each mark** or **groups of marks**; sometimes **one succinct high-level label** is right, e.g. a **small chart inside a button** that reveals a detailed version.
- **should** **Write labels that serve the chart's purpose.** Maps' elevation chart conveys the **terrain of the whole route**, so its labels summarise elevation change over a **portion** of the route (the focused section reports its distance and elevation changes) instead of labelling each moment; Health's Steps chart gives a label **per bar** because its purpose is the **actual count per period**.
- **Label-writing guidelines** (each **should**):
  - **Prioritise clarity and completeness:** a bare value is rarely enough; add context (**date or location**) concisely, without repeating what an axis name or the overview already says; then a **succinct description** of the element's details.
  - **Avoid subjective terms** (*rapidly, gradually, almost*): they carry your interpretation; use **actual values**.
  - **Avoid ambiguous formats and abbreviations:** "June 6" over "6/6"; "60 minutes" or "60 meters" over "60m".
  - **Describe what the details mean, not what they look like:** identify what each series **represents**; describing red vs blue adds noise.
  - **Be consistent about axis references** across the app (e.g. always mention the X axis first).
- **should** **Hide visible axis and tick text from assistive technology.** Those labels are for visual estimation; VoiceOver users get values and trend from accessibility labels and Audio Graphs.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.
#### watchOS
- **should** **Avoid requiring complex chart interactions.** Prefer **at-a-glance** information and **simple** interactions where they add value. If the app also exists on another platform, use it for **more detail and richer interaction**. Example: Heart Rate on watchOS charts the current day; the Health app on iPhone shows several periods and lets people inspect individual marks.

## Specs & values
The page states **no numeric rules**. Concrete facts and the numbers visible in Apple's examples **(from screenshot)**:

| Item | Value |
|---|---|
| Anatomy | mark · plot area · scale · axis (horizontal/vertical) · tick · grid line · axis value label (tick label) · labels · accessibility labels · title/subtitle/annotations · legend |
| Mark types | bar (compare, sum, parts of a whole) · line (change, trend) · point (relationships, outliers, clusters); combinable |
| Fixed range example | battery: 0 %–100 % (ticks 0 / 50 / 100 %) |
| Dynamic range example | Steps: top bound follows the largest value; weekly chart 0–6,000 with ticks every 2,000; monthly chart 0–10,000 with ticks every 5,000 |
| Bar lower bound | zero (honest comparison of heights) · not always for other marks |
| Tick sequences | familiar steps (0, 5, 10…) preferred over odd ones (1, 6, 11…) |
| Grid/label weight | fewer lines and lighter label colour when marks are interactive |
| Compact width | short Y-axis labels; units in the title; long category label inside the plot area if nothing important is hidden |
| Hit target | may extend to the whole plot area (scrub) |
| Keyboard/Switch | default linear order; custom logical path (along X) or subset focus for large datasets |
| Colour | never colour alone: shape (circle vs diamond), pattern; separators between stacked segments (a thin gap) |
| Accessibility | per-element labels or grouped/summary label by purpose; overview must give chart type, axis meaning, bounds; Audio Graphs (tones + text summary) |
| Label style | context + value; actual values, not "rapidly"; "June 6", "60 minutes"; meaning not appearance; consistent axis order |
| Hide from AT | visible axis and tick text |
| watchOS | glanceable, simple interactions; detail on iPhone |
| Developer docs | Swift Charts · *Creating a chart using Swift Charts* · Audio graphs · `accessibilityRespondsToUserInteraction(_:)` (SwiftUI) · `UIAccessibility.Notification` (UIKit) · `NSAccessibility.Notification` (AppKit) |
| Related HIG pages | Charting data ✓ · Inclusive color (Color ✓) · Accessibility ✓ · Vision (apple.com/accessibility) |
| Videos | *Bring Swift Charts to the third dimension* (WWDC25 313) · *Design app experiences with charts* (WWDC22 110342) · *Design an effective chart* (WWDC22 110340) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card holding a **bar histogram** (bars rising to a peak and falling), with dimension arrows around the plot area and axis values **0 / 50 / 100** on the trailing side and **9, 10, 11, 12 PM** along the bottom: a chart drawn as a blueprint. (The x labels sit just below the baseline, each left-aligned to its tick.)
- **Anatomy diagram:** a blue bar histogram with callouts **Grid line, Plot area, Mark** above, **Axis** on the trailing side, **Tick** and **Axis value label (tick label)** below. The **axis value labels sit on the trailing (right) side** with faint numbers **100 / 50 / 0**, the grid is **dotted vertical + hairline horizontal**, tick labels are **light grey**, and the x labels sit under the plot area.
- **Mark examples:** a **bar chart** of daily steps over a month (many thin blue bars, y 0–15,000, x 7/14/21/28); a **line chart** of a stock over five years (thin blue line with a soft filled area beneath, y 71–182, x 2018–2022); a **point chart** of heartbeats over 5½ months (a thin blue line with small hollow circle markers on every reading, y 50–80, x Apr–Sep), which doubles as the point-plus-line combination.
- **Axes examples:** Battery chart: **green** bars for the charged range, **grey** for the rest, a lightning glyph at charge periods, y **0% / 50% / 100%**. Health Steps pair (**"Weekly range"** and **"Monthly range"**): both cards have a segmented **D · W · M · 6M · Y** control (W or M selected), a small "AVERAGE" caption above a large **1,577 steps** (Jul 12–18, 2025) or **1,982 steps** (Jun 18–Jul 18, 2025), and **orange-red** bars; the weekly chart's y axis stops at **6,000**, the monthly one at **10,000**, so the tallest bar nearly reaches the top in each; y labels on the trailing side in very light grey, x labels light. Weekly x labels are **weekday names** (Sat–Fri), monthly x labels are **dates** (22, 29, 6, 13). *(The monthly card's date line reads "Jun 18 – Jul,18, 2025" with a stray comma; a typo in the picture.)*
- **Descriptive content:** Weather's next-hour card: a **dark slate** rounded card, bold title **"Heavy Rain Forecasted"**, one line **"Heavy rain in the next hour."**, then a dense row of **thin light-blue vertical bars** and small time labels **Now · 10m · 20m · 30m · 40m · 50m**. The title carries the message; the chart is the proof.
- **Colour:** Blood-pressure card: legend row **● SYSTOLIC 122–134** (red circle) and **◆ DIASTOLIC 63–74** (black diamond), "Feb 19–25, 2025", points on **50 / 100 / 150** with weekday labels. iPhone Storage card: **"iPhone" · "217.92 GB of 256 GB used"**, a single rounded **segmented bar** (red Photos, orange Applications, yellow Music, green Books, teal Messages/Podcasts, blue Mail, grey iOS, light grey System Data) with **thin gaps** between segments and a two-row **legend of dot + name**.
- **Accessibility:** the **Important** callout is a pale-yellow card with an **amber outline** and an amber "Important" title. Maps' elevation card shows **"8,737 ft · 3,296 ft"** with "Total Elevation", y **6,800 FT / 800 FT**, x **0 MI / 30.9 MI**, a black line with a **rectangular VoiceOver focus frame** over roughly the last fifth of the route (caption: VoiceOver reports distance and elevation changes for the focused section).
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Charts · Anatomy · Marks · Axes · Descriptive content · Best practices · Color · Enhancing the accessibility of a chart · Platform considerations · Resources · Change log. The side navigation shows **Components › Content** with **Charts, Image views, Text views, Web views**, then **Layout and organization** (Boxes, Collections, Column views, Disclosure controls, Labels, Lists and tables, Lockups, Outline views, Split views, Tab views), then **Menus and actions** and **Navigation and search**.
- The fetch script found **one comparison**: `charts-01` (Health Steps weekly vs monthly range). Catalog total is now **107**; existing ids unchanged. No ✗/✓ pairs. Nothing measured.
- **Text that is not in the fetch:** the strings inside the illustrations above and the sidebar/TOC chrome.

## Web translation
Everything here applies to **SVG/canvas/HTML charts** (D3, Chart.js, Recharts, ECharts, Highcharts, Vega, Tailwind dashboards). Swift Charts and Audio Graphs are native; the web analogues are ARIA, a data table and (optionally) sonification.

| HIG rule | Web implementation |
|---|---|
| Choose the mark from the question | **Bar** to compare categories or show per-period sums and parts of a whole; **line** for trend over ordered time; **point/scatter** for two variables, outliers, clusters. A line with dots on top is the standard "trend plus individual values" combo. Never use a pie/3D for precision comparisons (`charting-data.md`). |
| Fixed vs dynamic range | Set `domain` explicitly. **Fixed** for bounded quantities (percent, battery, score out of 10); **dynamic** (`nice()`-rounded to the data max, plus small headroom) for open-ended counts. State the choice in the code, not by library default. Remember the range must be recomputed when the period control changes (weekly vs monthly in the picture). |
| Lower bound | **Bars start at zero, always** (the honest-height rule); lines and points may use a tight range when differences live far from zero, and then show the range clearly (axis labels, maybe a "starts at 60" note). Never truncate a bar axis. |
| Familiar tick sequences | Use "nice" tick generators: multiples of **1, 2, 5** × 10ⁿ (`d3.ticks`, `nice()`); avoid odd steps (1, 6, 11…); show a tick for min, mid and max at least; format with `Intl.NumberFormat` (compact notation only when space forces it: "10K"). |
| Quiet grid and labels | Grid: **1 px, low-contrast, dotted or hairline**, drawn behind the marks; horizontal hairlines + faint verticals as in the anatomy image; axis/label text **secondary colour and small**; fewer lines when the chart is interactive (tooltips/scrubbing). Data marks use the **strongest colour and weight** (visual hierarchy). Check contrast: graphical marks ≥ 3 : 1 against the background (WCAG 1.4.11), axis text as decorative-but-legible (`color.md` gate). |
| Descriptions first | Above every chart put a **title that states the message** and a **subtitle** (range, unit, source): "Heavy rain in the next hour" beats "Precipitation". Real DOM text, not canvas pixels; `<figure>` + `<figcaption>`, `aria-labelledby` / `aria-describedby` pointing at them (`writing.md`, `charting-data.md`). |
| Compact widths | On phones widen the plot: **short Y labels** (compact numbers), **units in the title/subtitle**, category labels **inside** the plot when they don't cover marks, legend below, horizontal scrolling only if unavoidable (never clip labels; Layout gate at 320 px and 200 % text). Prefer a **trailing-side Y axis** with the plot's leading edge aligned to the page's text edge (flip in RTL, `right-to-left.md`). |
| Accessible by default | Provide **all three**: (1) `role="img"` with an `aria-label`/`aria-labelledby` **overview** giving **chart type, what each axis means and the bounds** ("Bar chart. X axis: day of week. Y axis: steps, 0 to 6,000."), (2) a **data table** alternative (visible toggle "View as table" or `<details>`), (3) keyboard-navigable **points** (below). Optional: a **sonification** ("Play chart") via Web Audio mapping value → pitch, the web counterpart of Audio Graphs. |
| Per-element vs grouped labels | Decide by purpose: **exact values matter** (steps per day) → each bar is focusable with a label ("Saturday, July 12: 2,700 steps"); **shape matters** (elevation profile, sparkline) → label **groups/segments** ("Miles 24 to 30: climbs from 3,300 to 8,700 feet") or a single summary. A **tiny chart inside a button** carries one succinct label (the button's) and hides its internals (`aria-hidden`). |
| Label wording | **Context + value** (date/place first, then figure); **actual numbers, no subjective words** ("rose from 61 to 70", not "climbed rapidly"); **no ambiguous formats or abbreviations** ("June 6", "60 minutes", "60 meters"; use `Intl.DateTimeFormat` with `dateStyle: "long"`); describe **what a series represents, never its colour**; always mention axes in the same order. Don't repeat what the overview already says. |
| Hide visible tick text from AT | Put axis/tick text in `aria-hidden="true"` groups (SVG `<g aria-hidden="true">`); the accessible name lives on the chart/mark labels. Keep axis **titles** available via the overview. |
| Interaction, but never required | Critical numbers **visible without interaction** (headline value and range in the header, as Health's "AVERAGE 1,577 steps"); hover/focus/tap reveals per-point details in a tooltip **and** a selected-point readout that is not hover-only. Range control = segmented control (D · W · M · 6M · Y). |
| Big hit targets and scrubbing | Make the **entire plot area** the pointer target (`pointermove`/`pointerdown` on an overlay `<rect>`), snap to the **nearest point**, show a vertical guide + readout, work with touch drag and `setPointerCapture`; keep marks ≥ 24 × 24 CSS px effective target where possible (WCAG 2.5.8) or rely on the overlay. Don't require a drag: also offer tap/click and keyboard. |
| Keyboard and Switch Control | The chart is **one tab stop**; inside use **← →** to move along the X axis, **↑ ↓** between series, **Home/End** first/last, **PageUp/PageDown** to jump by a subset (week, page of 10 points) for large data (roving `tabindex` or `aria-activedescendant`); the active mark gets a visible focus ring and its label is announced (polite live region or focus on a real element). `Esc` leaves. Document the keys in a hint (`aria-describedby`). |
| Notice changes | When data or axes change (new period, live update): **animate briefly** (`prefers-reduced-motion` respected: no animation then) **and** announce it: a polite live region ("Weekly view. Average 1,577 steps, axis now 0 to 6,000") and a visible header update. Never rely on the animation alone. |
| Alignment | Chart's leading edge matches the container grid (`layout.md`); Y labels on the **trailing side** keep the left edge clean; anchor orphan labels with a tick. |
| Colour never alone | Series are distinguished by **shape/marker (circle vs diamond), dash pattern, direct labels or SVG patterns** in addition to hue; legend keys show the same shape; for stacked bars add a **1–2 px gap in the surface colour** between segments (Apple's "separators"). Per-theme series colours (`--chart-series-*`, `field-notes/engineering-gotchas.md`); test with a colour-blindness simulation. |
| Direct labelling | Where there are ≤ ~3–4 series, prefer **direct labels at line ends** over a distant legend (CONV, not on the page) and keep the legend as dot + name rows as in the Storage card. |
| Small screens ≈ watchOS rule | On glanceable surfaces (widgets, tiles, wearables, embedded cards) show **the answer at a glance** with **minimal interaction**; put deep exploration (multiple periods, per-mark inspection) on the larger surface ("View details"). |
| Other platforms | No differences: desktop, tablets, TV-style large screens and headsets all follow the same rules; large TV layouts need bigger text and focus-driven navigation (`designing-for-tvos.md`). |

Field-note cross-links:
- `hig/patterns/charting-data.md` (✓): the strategy layer; this page supplies the component rules it points to. Its "Charts (not yet ingested)" notes are now ✓.
- `field-notes/components.md` § Dashboard tiles: neutral single bar colour with the largest bar opaque and the rest ~35 %, fixed max bar width and "no verdict when data is thin" are **compatible** with "data first, axes quiet" and the fixed/dynamic-range choice; the one-neutral-colour tile is a highlight technique, not colour-only encoding (labels still name values).
- `field-notes/engineering-gotchas.md`: `--chart-series-*` per theme matches the colour rows.
- `hig/foundations/color.md` (CRITICAL colour gate), `accessibility.md`, `dark-mode.md`, `typography.md`, `layout.md`: contrast, non-colour cues, label scaling, no clipped labels.
- `hig/foundations/motion.md` and `hig/patterns/feedback.md` (CRITICAL): change notifications are quiet status messages, not alerts; animation is never the only cue.
- `hig/foundations/writing.md`: descriptions and accessibility labels are writing; no "we", plain numbers.
- `hig/patterns/loading.md`: skeleton axes while data loads; keep the plot area's size stable.
- `hig/patterns/workouts.md`: summary charts and Activity-style progress; keep Apple's rings out of your own metrics.
- No conflict with a field note.

## Checklist
- [ ] The chart supports one stated message; the title says it and the subtitle gives range, unit and source (real text, not canvas).
- [ ] Mark type matches the question (bar = compare or sum, line = trend, point = relationship); combined marks only when they add clarity.
- [ ] Axis domain is deliberate: fixed for bounded values, dynamic for open-ended ones; bar charts start at zero; ticks use familiar steps (0, 5, 10 / 1-2-5).
- [ ] Grid and axis text are quiet (thin, low contrast, small) and the data is the strongest element; fewer lines when interactive.
- [ ] On narrow screens the plot area is maximised: short Y labels, units in the title, no clipped or overlapping labels at 320 px and 200 % text.
- [ ] Colour is never the only channel: shapes/patterns/labels differ per series; stacked segments have separators; series colours pass 3 : 1 in light and dark.
- [ ] Accessible overview (chart type, axis meanings, bounds), per-element or grouped labels by purpose, and a data-table alternative; optional sonification.
- [ ] Labels give context + actual values, no subjective words, no ambiguous dates or abbreviations, describe meaning not appearance, and name axes consistently.
- [ ] Visible axis/tick text is hidden from assistive tech; the chart is one tab stop with arrow-key/PageUp/PageDown navigation and a focus ring.
- [ ] Critical numbers show without interaction; hover/tap details also exist for keyboard and touch; the whole plot area is the hit target for scrubbing.
- [ ] Changes to data or axes are animated (reduced-motion safe) and announced in text.
- [ ] Glanceable surfaces show the answer with minimal interaction; details live on the larger surface.

## Related
- Ingested: Charting data (✓), Color (✓ CRITICAL), Accessibility (✓), Feedback (✓ CRITICAL), Writing (✓), Motion (✓), Loading (✓), Workouts (✓), Layout (✓), Typography (✓).
- Not yet ingested: Gauges and Progress indicators (Status), Segmented controls, Activity rings. Ingested since: Lists and tables ✓.
- Developer docs: see Specs & values. Videos: see Specs & values.
