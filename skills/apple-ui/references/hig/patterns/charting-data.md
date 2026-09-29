# Charting data
Source: https://developer.apple.com/design/human-interface-guidelines/charting-data · Section: Patterns · Supported platforms: all six (no platform-specific considerations) · Ingested: 2026-09-28 · Apple last updated: 2022-09-23 (new page; the change log has that single entry). One DocC fetch, read in full. 6 screenshots (dark-mode page, hero → Videos) were compared with the fetched text line by line: the body text matches. Text that exists only inside images is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Use a chart to **say something** about data people care about: keep it simple with detail on demand, prefer familiar chart types, add words that state the takeaway, size it to its job, keep it consistent across the app, and make it accessible. If people only need the raw data, a searchable/sortable list or table is the better answer.

## Rules

### Framing (intro)
- Charts convey complex information without making people read and interpret a lot of text.
- They also let a product show personality and add visual interest.
- A chart can be:
  - a simple, glanceable graphic, or
  - a rich, interactive experience that is the centrepiece of the app and invites exploring the data from several angles.
- Charts help with data-driven tasks such as:
  - analysing trends from historical or predicted values;
  - showing the current state of a process, system or quantity that changes over time;
  - evaluating items, or one item at different times, by comparing data across categories.
- **should** Don't chart everything. When the goal is only to *provide* data, with no message to convey and no analysis to support, offer a **list or table** that people can scroll, search and sort.
- Component-level guidance (marks, axes, gridlines, selection, accessibility APIs) lives in the separate **Charts** page (✓ ingested: `components/content/charts.md`).

### Best practices
- **should** **Use a chart to highlight important information about a dataset.**
  - Charts are visually prominent and attract attention, so use that prominence to state clearly what people can learn from data they care about.
- **should** **Keep a chart simple and let people opt into more detail.**
  - Resist packing in as much data as possible: too much data overwhelms, makes the chart hard to use and hides the relationships you want to show.
  - For large amounts of data or functionality, reveal it **gradually**: let people choose levels of detail or subsets that match their interest.
  - To teach an interactive chart, offer **several versions**, each with more functionality than the last.
- **must** **Make every chart accessible.**
  - A chart communicates through graphics and visual descriptions. Besides what is shown, provide:
    - **accessibility labels** describing chart values and components, and
    - **accessibility elements** that let people interact with the chart.
  - Apple points to *Enhancing the accessibility of a chart* (Charts page).

### Designing effective charts
- **should** **Prefer common chart types.** Familiar types (bar, line) are already readable to most people.
- **should** **Teach a novel chart.** If the data must be shown in an unfamiliar way, help people learn to read it.
  - Example: when a Watch is paired with an iPhone, Activity introduces the rings by **animating them one at a time**, showing how each ring maps to the move, exercise and stand metrics.
- **should** **Look at the data from several levels to find details worth showing.**
  - Macro level: high-level summaries such as totals and averages.
  - Mid level: useful subsets of the data.
  - Individual points: specific values or items to draw attention to.
  - Showing information from different perspectives encourages people to engage with the chart.
  - (Visual **charting-data-01**: the Stocks line chart and the Health › Activity bar charts, both as examples of this.)
- **should** **Add descriptive text to the chart.**
  - Titles, subtitles and annotations emphasise the most important information and can point at an action to take.
  - A short headline or summary lets people grasp the essentials at a glance. Example: Weather puts "Chance of light rain in the next hour" above the scrolling hourly forecast for the next 24 hours.
  - **must not** treat that text as a replacement for accessibility labels; it helps accessibility but does not replace them.
- **should** **Match the chart's size to its function, topic and level of detail.**
  - Large enough to show the needed details comfortably, and roomy enough for the interactivity you want to support.
  - Always make labels, annotations and other descriptive text easy to read.
  - If people may change the scope of the chart or explore other perspectives, give them the room for that.
  - A **small** chart is right for glanceable information about one item, or as a preview/snapshot of a larger version that people can open in another view.
- **should** **Be consistent across charts; deviate only to show a difference.**
  - Charts with a similar purpose should not look unrelated (different type or style for each).
  - A consistent visual approach lets people transfer what they learned from one chart to the next.
  - Use different types or styles only when it highlights a meaningful difference between charts.
- **should** **Keep continuity among charts of the same data.**
  - When several charts explore one dataset from different perspectives, use **one chart type** and consistent **colours, annotations, layouts and descriptive text**, to signal that the data is the same.
  - Example: in Health › Trends, each small chart has a specific visual style for a recent trend (steps, resting heart rate). Choosing one to see all its data opens an expanded chart with the **same style, colours, marks and annotations**, strengthening the link between the two versions.

## Specs & values
The page has **no numbers** (no sizes, ratios, colours, durations or thresholds). Concrete facts it does contain:

| Item | Value |
|---|---|
| Example task types for a chart | trends (historical/predicted) · current state of a changing quantity · comparison across categories or over time |
| Alternative when a chart isn't needed | list or table that people can scroll, search and sort |
| Named common chart types | bar chart, line chart |
| Accessibility parts to provide | accessibility labels (values, components) + accessibility elements (interaction) |
| Consistency set for charts of one dataset | one chart type + colours + annotations + layouts + descriptive text |
| Example descriptive headline | "Chance of light rain in the next hour" (Weather, above a 24-hour list) |
| Developer documentation | *Swift Charts* |
| Videos | *Bring Swift Charts to the third dimension* (WWDC25 313) · *Design app experiences with charts* (WWDC22 110342) · *Design an effective chart* (WWDC22 110340) |
| Change log | Sept 23 2022: new page |

## Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Visual notes (from screenshots)
- **Hero:** an orange grid card with four rounded vertical bars of different heights standing on a rounded baseline bar, drawn over construction circles and guide lines.
- **charting-data-01 (two iPhone screens side by side, dark mode):**
  - **Stocks** **(from screenshot)**:
    - Header: ticker "AAPL", company "Apple Inc.", price 298.97, change +25.07 in green, "Past Month", "NASDAQ · USD".
    - Range selector: 1D 1W **1M** 3M 6M YTD 1Y and one more entry cut off at the screen edge, with the selected range in a soft pill.
    - Chart: one green line with a green gradient area below it; thin horizontal grid lines; y-axis values 312 / 300 / 289 / 277 at the trailing edge; x-axis day labels 23 · 30 · 7 · 14 · 21.
    - Under the chart: a thin strip of volume bars, then a two-line-per-column key-statistics table (Open 306.06, High 311.40, Low 305.85; Vol 43.61M, P/E 37.43, Mkt Cap 4.391T; 52W H / 52W L / Avg Vol). "Market Closed" sits at the bottom.
    - Above the sheet, a row of index tickers with tiny sparklines (S&P 500 6,217.92 +19.91; AAPL 298.97 +1.13).
    - Reading: one big number and change first, the range control, the chart, then details. That is the macro → mid → point ladder in one screen.
  - **Activity (Health)** **(from screenshot)**:
    - Header: back button, title "Activity", an "Add Data" pill; a segmented control D · W · M · 6M · Y with **D** selected.
    - Summary row: a small ring glyph and three big numbers with units: Move 116 cal, Exercise 10 min, Stand 3 hr, and "Today".
    - **Three stacked bar charts**, each with its own colour: Move (pink-red), Exercise (lime), Stand (cyan). Each has a coloured label at the top-leading corner and a value line such as "116 of 300 cal", "10 of 30 min", "3 of 12 hr" at the top-trailing corner; a "0 cal / 0 min / 0 hrs" baseline label at the trailing edge; shared dashed vertical gridlines; a time axis 12 AM · 6 · 12 PM · 6 below.
    - Below: an "About Activity" heading and a rounded grey card of explanatory text ("Activity rings give you a quick visual reference of how active you are each day…"), partly under the floating tab bar (Summary, Sharing, Browse).
    - Reading: three charts of the same kind at the same scale, one colour per metric, sharing one time axis; a plain-language explanation under the data.
- **Video thumbnails (from screenshot):**
  - *Bring Swift Charts to the third dimension*: a WWDC25 badge, a 3D surface plot in a living room.
  - *Design app experiences with charts*: a 4 × 3 grid of small chart glyphs in different colours (bars, dotted line, ring, area, heat-map).
  - *Design an effective chart*: a blue bar chart titled "Total Sales", "1,234 Pancakes" **(from screenshot)**.
- **Text that is not in the fetch:** only what is inside the two app screenshots, the video thumbnails and the page chrome (the TOC reads Charting data · Best practices · Designing effective charts · Platform considerations · Resources · Change log). Every heading, bold lead-in, body paragraph, bullet and link in screenshots 7–12 is in the fetched text.

## Web translation
Apple's charts guidance is written for Swift Charts, but every rule is about content and clarity and carries over to web charts (SVG, canvas, Recharts, Chart.js, D3, Tailwind dashboards).

| HIG rule | Web implementation |
|---|---|
| Chart only when there is a message; otherwise a table | Ask "what should someone learn?" before adding a chart. For raw records use a `<table>` / data grid with search, sort and pagination. Never use a chart as decoration. |
| Simple chart, detail on demand | Start with the overview series only. Reveal detail through a range control (segmented control, see field notes), hover/focus tooltips, a "View all data" link that opens the full chart, or a drill-down. Do not plot ten series at once. |
| Teach an interactive/novel chart | First use: a one-line hint or a brief staged reveal (animate series in one at a time, respecting `prefers-reduced-motion`). Offer a simple version first, then richer versions. |
| Common chart types | Bar and line by default. Choose a rarer type (radar, Sankey, treemap) only with an explicit legend or explainer. |
| Levels of detail | Give three tiers: headline number (macro: total/average/latest), the chart with range (mid: subset), and per-point values (tooltip, selected-point readout, key-statistics grid). Show units next to numbers. |
| Descriptive text | Put a title, a subtitle (range, unit, source) and a **takeaway sentence** above or beside the chart ("Revenue is up 12 % on last month"). Text in the DOM, not in the canvas. Follow `hig/foundations/writing.md` (short, plain, no "we"). |
| Accessibility | Provide all of: `role="img"` + `aria-label` summarising the chart (or `<figure>` + `<figcaption>`); a visible or expandable **data table alternative** (`<table>`); keyboard-focusable points or a keyboard-navigable series with `aria-label`s such as "12 March, 4,300 visitors"; not colour alone (labels, patterns, shapes; see `accessibility.md` and `color.md`); text and marks meeting contrast (4.5:1 text, 3:1 marks). The takeaway sentence never replaces these. |
| Size to purpose | Detail charts: wide enough for legible labels (use the LAYOUT GATE probe, no clipped axis labels at 200 % text). Small charts (sparklines/tiles) show one item and link to the larger version; they carry no axes but do carry an accessible name and value. |
| Consistency across charts | One chart style guide: same axis label style, same grid weight (thin, low contrast), same series colour for the same metric everywhere, same number formatting and date format. Deviate only to mark a real difference. |
| Continuity of the same data | A small "trend" chart and its expanded version share type, colours, marks, annotations and text; the colour that meant "steps" in the tile means "steps" in the detail view (see `--chart-series-*` tokens in `field-notes/engineering-gotchas.md`). |
| Dark mode | Each series colour has a light and a dark variant (`color.md`); grid lines and axes stay low-contrast on both; avoid pure white text on saturated bars. |
| RTL / i18n | Format numbers and dates with `Intl`; axis text and legends follow `dir`; time still runs in the reading direction (`right-to-left.md`, progress controls reverse). |
| Motion | Charts may animate in once; never animate on every data refresh; no motion when Reduce Motion is on (`motion.md`). |

Field-note cross-links:
- `field-notes/components.md` § Dashboard tiles: one neutral bar colour with the largest bar opaque and the rest ~35 %, a fixed maximum bar width, and "no verdict when data is thin" **agree** with "keep it simple" and "highlight what matters". Its rule that colour comes from status and content, never from chrome, fits the one-colour-per-metric pattern in the Activity screen.
- `field-notes/engineering-gotchas.md`: chart series colours must be defined per theme (`--chart-series-*`), matching the consistency and dark-mode rows above.
- `hig/foundations/accessibility.md`: "not colour alone" and chart colour customisation are **confirmed** here; this page adds the accessibility-labels-plus-elements requirement.
- `hig/foundations/writing.md`: the descriptive-text rule is the writing rules applied to charts.
- `hig/foundations/motion.md`: the animated Activity-rings introduction is the "teach a novel chart" example; it is brief and purposeful.
- Not in conflict with any field note.

## Checklist
- [ ] The chart has one stated message; if the goal is just to provide data, a searchable/sortable table is used instead.
- [ ] Only the essential data is shown by default; detail is revealed on demand (range, tooltip, drill-down, expanded version).
- [ ] A common chart type is used, or a novel one comes with a way to learn it.
- [ ] Macro (summary), mid-level (subset/range) and point-level information are each available.
- [ ] A title, subtitle and takeaway sentence sit with the chart; they don't replace accessibility labels.
- [ ] Accessible name/summary, data-table alternative and keyboard/screen-reader access to values exist; colour is never the only carrier.
- [ ] Size fits the job: labels and annotations readable; small charts link to a larger one.
- [ ] Charts in the app share one style; different styles mean a real difference.
- [ ] Charts of the same dataset keep the same type, colours, annotations, layout and descriptive text between summary and expanded views.
- [ ] Series colours, gridlines and text pass contrast in light, dark and increased-contrast; the Colour gate passes for chart colours.
- [ ] Compared with Apple's `charting-data-01` (Stocks and Activity).

## Related
- Ingested since: **Charts** (✓ `components/content/charts.md`: marks, axes, accessibility of charts). Lists and tables ✓ (`components/layout/lists-and-tables.md`). Segmented controls (✓ `components/selection-and-input/segmented-controls.md`). Activity rings (✓ `components/status/activity-rings.md`). Not yet ingested: Progress indicators, Gauges, Rating indicators.
- Ingested: Color (✓ CRITICAL), Accessibility (✓), Motion (✓), Writing (✓), Layout (✓ CRITICAL), Typography (✓ CRITICAL), Dark Mode (✓).
- Developer docs: Swift Charts. Videos: see Specs & values.
