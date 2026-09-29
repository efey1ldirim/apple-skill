# Gauges
Source: https://developer.apple.com/design/human-interface-guidelines/gauges · Section: Components › Status · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS** ("No additional considerations for iOS, iPadOS, visionOS, or watchOS. Not supported in tvOS"; the TV icon is dimmed on the platform strip, the other five are lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 23, 2022** (new page; the only change-log row). One DocC fetch, read in full. 4 screenshots (hero → the change-log row, followed by the Apple site footer, ignored) were compared with the fetched text, captions and image alt text line by line: everything matches, with **one wording mismatch between an image and its alt text** (see *Visual notes*). **Read from the fetch only (not in screenshots):** the dark variants of the pictures and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but gauge colours and text meet the **Color gate** and status-only-by-colour rules. The page has **no numeric thresholds** (only proportions in alt texts and the tiered example: 1/8 red, 3/8 yellow, 1/4 green, 1/4 unfilled).

## In one line
A gauge **displays a specific numerical value within a range** along a **circular or linear path**, optionally with **labels for the current value and both endpoints** and a **gradient** that reinforces the meaning (red to blue for hot to cold). Styles: **standard** (an indicator marks the value's position), **capacity** (a fill stops at the value) and **accessory** (a variant that echoes watchOS complications, good for Lock Screen widgets). **Write succinct labels for the value and both endpoints** (VoiceOver reads visible labels) and **consider a gradient** for the path. macOS also has the **level indicator** (capacity continuous or discrete, rating, rarely relevance): **continuous for large ranges**, **tier the fill colour** to mark meaningful parts of the range; **discrete segments fill completely, never partially**.

## Rules

### Framing (intro)
- A gauge **displays a specific numerical value within a range of values**.
- Besides the current value, it can give **context about the range**: e.g. a **temperature gauge** can use **text for the highest and lowest temperatures** and a **spectrum of colours** that reinforces the changing values.

### Anatomy
- A gauge uses a **circular or linear path** to represent a range, **mapping the current value to a specific point on the path**.
  - **Standard** gauge: shows an **indicator** at the value's location.
  - **Capacity** style: shows **a fill that stops at the value's location** on the path.
- **Accessory** variant: **circular and linear gauges, in both standard and capacity styles**, are also available in a variant **visually similar to watchOS complications**; it suits **iOS Lock Screen widgets** and anywhere you want to **echo the appearance of complications**.
- **Note:** macOS also supports **level indicators**, some with visual styles similar to gauges (see *macOS*).

### Best practices
- **should** **Write succinct labels that describe the current value and both endpoints of the range.** Not every style shows all labels, but **VoiceOver reads the visible labels** so people can understand the gauge **without seeing the screen**.
- **may** **Consider filling the path with a gradient** to communicate the gauge's purpose: e.g. a temperature gauge using **red-to-blue** colours for **hot-to-cold**.

### Platform considerations
- **iOS, iPadOS, visionOS, watchOS:** no additional considerations. **tvOS:** not supported.

#### macOS
- macOS also defines a **level indicator** that shows a specific numerical value within a range; configure it to convey **capacity, rating** or (**rarely**) **relevance**.
- **Capacity style** can depict **discrete or continuous** values:
  - **Continuous:** a **horizontal translucent track** that **fills with a solid bar** to show the current value.
  - **Discrete:** a **horizontal row of separate, equally sized rectangular segments**; the **number of segments matches the total capacity**, and segments **fill completely, never partially**, with colour to show the current value.
- **should** **Consider the continuous style for large ranges**: a large range makes **discrete segments too small to be useful**.
- **may** **Consider changing the fill colour to inform people about significant parts of the range.** **By default the fill is green** for both capacity styles. You can change the fill **when the value reaches certain levels** (very low, very high, just past the middle): either **the whole indicator's colour**, or the **tiered state** to show **a sequence of colours in one indicator**. (Picture *Tiered level appearance*: **red 1/8, yellow 3/8, green 1/4, unfilled 1/4**.)
- **Rating style:** to help people **rank something**, see *Rating indicators*.
- **Relevance style** (**rarely used**): communicates **relevancy with a shaded horizontal bar**, e.g. in a **list of search results**, helping people **visualise relevancy when sorting or comparing multiple items**.

## Specs & values

| Item | Value |
|---|---|
| Path | circular or linear |
| Styles | standard (indicator) · capacity (fill) · accessory (complication-like, standard or capacity, circular or linear) |
| Labels | succinct: current value + both endpoints (VoiceOver reads visible labels) |
| Gradient | optional, to reinforce purpose (hot red → cold blue) |
| macOS level indicator | capacity (continuous / discrete) · rating · relevance (rare) |
| Continuous capacity | translucent track + solid fill; for large ranges |
| Discrete capacity | equally sized segments = total capacity; segments fill fully, never partially |
| Default fill | **green**; change at meaningful levels (very low, very high, just past the middle) or use the tiered state |
| Tiered example | red **1/8**, yellow **3/8**, green **1/4**, unfilled **1/4** |
| Sizes, spacing, hit regions | **none given on this page** |
| Platforms | iOS · iPadOS · macOS · visionOS · watchOS (no tvOS) |
| Developer docs | SwiftUI `Gauge` · AppKit `NSLevelIndicator` |
| Video | none |
| Apple's Related list | Ratings and reviews ✓ |
| Change log | September 23, 2022: new page |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **circular numeric gauge above a linear percentage gauge**: a **three-quarter arc** (open at the bottom) with a **round indicator dot near its upper right**, the **large value "67"** in the centre and the endpoint labels **"0" and "100"** at the arc's two ends; **vertical arrows** mark the height of the circular gauge and the gap to the bar; below, a **horizontal bar, dark-filled to about two thirds**, with **"0%" at its left end and "100%" at its right end** and horizontal arrows at both sides (margins) **(from screenshot)**. The alt text: *a circular numeric gauge above a linear percentage gauge*.
- **Capacity indicators (catalog `gauges-01`, screenshots):** on a light-grey card, **Continuous**: a **green bar** filling the left part of a **light-grey track**; **Discrete**: **eight rounded segments**, **six green and two light grey**. **Image/alt mismatch:** the alt text calls the continuous fill *about two-thirds* of the capacity, the picture shows **about three quarters**; the discrete one matches its alt (three quarters) **(from screenshot)**.
- **Tiered level appearance (screenshot):** a single horizontal bar with **red (leftmost eighth), yellow (next three eighths), green (next quarter)** and the **rest unfilled (light grey)**, captioned "Tiered level appearance" **(from screenshot)**.
- **Note callout (screenshot):** a grey outlined card titled **"Note"** about macOS level indicators **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Gauges · Anatomy · Best practices · Platform considerations · Resources · Change log; side navigation shows the **Status** group open (Activity rings, **Gauges** bold, Progress indicators, Rating indicators); the last screenshot also contains an OS notification banner over the browser toolbar (ignored).
- **Fetch script run:** 1 new comparison group (`gauges-01`: continuous vs discrete capacity); existing catalog IDs unchanged; total **166**. The hero, the tiered picture and the Note are not comparison sets.

## Web translation
The web has native semantics for this: **`<meter>`** (a scalar value within a known range) and **`role="meter"`**; use **`<progress>`** only for task completion (`progress-indicators` not yet ingested).

| HIG rule | Web implementation |
|---|---|
| A specific numerical value within a range | **`<meter min max value low high optimum>`** (native, exposes value/range to assistive tech) or **`role="meter"`** with **`aria-valuemin/max/now`** and **`aria-valuetext`**; use it for **battery, storage, temperature, score, usage**; **not** for task progress (`<progress>`). |
| Circular or linear path; standard indicator vs capacity fill | **Linear:** a track with either **a fill from the start** (capacity) or **a marker/thumb at the value** (standard); **circular:** an **SVG arc** (`<circle>` `stroke-dasharray`/`stroke-dashoffset`, three-quarter arc via `stroke-dasharray` and a rotation) with the same two styles; keep the geometry **fixed** and scale via `viewBox`. Direction: **min at inline-start** (mirrored in RTL: `right-to-left.md`). |
| Accessory (complication-like) variant | For **widget-like/compact tiles**, a **small circular gauge with the value inside** and a short label; keep it a **distinct compact component** rather than reusing full-size charts (`widgets` not yet ingested). |
| Succinct labels for the value and both endpoints | Show **value + min + max** (**"67"**, **"0"**, **"100"**, or **"0%" / "100%"**) as **visible text** and mirror them in **`aria-valuetext`** ("67 of 100 percent"), plus a **name** (`aria-label="Battery"`/`<label for>`); a **native `<meter>` needs a visible label** because browsers render it without text. |
| Gradient path for purpose | A **`linear-gradient`/SVG gradient** on the path for **spectra** (hot → cold), always with **text values** and **≥ 3:1 contrast** between path and surface (**Color gate**); a gradient **never carries the meaning alone**. |
| macOS level indicator: capacity continuous vs discrete | **Continuous:** `<meter>` or a track with a solid fill; **discrete:** **N equal `<span>` segments**, **each fully on or fully off** (no partial fills), **N = total capacity**, in a `role="meter"` container (`aria-valuemax=N`); **>~10–12 units → continuous** (Apple: large ranges → continuous); segments **≥ 3:1** between on and off states and a **visible gap**. |
| Default green fill; change at meaningful levels; tiered state | Default **green** (`--apple-green`) for "healthy"; use **`low`/`high`/`optimum`** on `<meter>` (browser applies green/yellow/red: **style `::-webkit-meter-optimum-value`, `-suboptimum-value`, `-even-less-good-value`**) or a **hard-stop gradient** for a **tiered bar** (`linear-gradient(to right, red 0 12.5%, yellow 12.5% 50%, green 50% 75%, track 75%)`); **also expose the state in text** ("Low", "OK") and via `aria-valuetext`, **never colour alone**. |
| Rating style | Rating stars/blocks are a separate component (`rating-indicators` not yet ingested; `ratings-and-reviews.md` ✓ for asking for reviews). |
| Relevance style (rare) | A **shaded bar per result** in search/sort lists, **decorative unless it changes ordering**: give **`aria-label` "Relevance 80 %"** or hide it if the list order already conveys relevance (CONV). |
| tvOS: not supported | On TV/D-pad web UIs use a **large linear meter with visible numbers**; nothing extra from Apple. |
| Activity rings vs gauges | **Don't draw a gauge as three concentric rings in Move/Exercise/Stand colours**: that look is Apple's Activity rings (`activity-rings.md`); a circular gauge is **one arc** with its own palette. |
| Accessibility and motion | `role="meter"` **announces on focus**, not live; update **`aria-valuenow`** as data changes; **don't animate needle/fill under `prefers-reduced-motion`**; text alternatives for the whole gauge in tables/dashboards; **200 % text** must not clip labels (Layout gate). |

Field-note cross-links:
- `hig/components/status/activity-rings.md` (✓): the three-ring Apple element and why a gauge is different; `hig/components/content/charts.md` (✓) and `hig/patterns/charting-data.md` (✓): charts, thresholds and the accessibility of numbers; `hig/patterns/ratings-and-reviews.md` (✓): Apple's Related page (asking for ratings, not the rating indicator).
- `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: contrast of fill vs track, state not by colour alone; `hig/foundations/accessibility.md` (✓): VoiceOver-visible labels; `hig/foundations/right-to-left.md` (✓): min at inline-start; `hig/foundations/writing.md` (✓): concise value and unit text.
- `hig/components/selection-and-input/sliders.md` (✓): a slider is an **input**, a gauge is **read-only**; don't make a gauge draggable.
- `field-notes/*`: no gauge/meter recipe (only slider fills and "black fill vanishes on dark: theme via variables" in `engineering-gotchas.md`, which applies to track/fill colours); **no conflict**.
- Progress indicators (✓ `progress-indicators.md`). Rating indicators (✓ `rating-indicators.md`). Not yet ingested: Widgets.

## Checklist
- [ ] A **read-only value in a range** uses **`<meter>`/`role="meter"`** (not `<progress>` and not a slider), with **min, max, value** and an **accessible name**.
- [ ] **Value and both endpoints are visible text** (or clearly implied) and mirrored in `aria-valuetext`.
- [ ] Path **and fill contrast ≥ 3:1** against the surface; **status (low/OK/high) is also stated in text**, not by colour alone.
- [ ] **Gradients** reinforce purpose only where they help; they **never replace numbers**.
- [ ] **Discrete gauges** use **equal segments that are fully on or off**; **large ranges use a continuous fill**.
- [ ] **Tiered colours** map to defined thresholds (`low`/`high`/`optimum`) and are documented in the UI.
- [ ] Circular gauges are **a single arc in your own palette**, **not three Activity-style rings**.
- [ ] Min sits at **inline-start** (RTL mirrored); labels survive **200 % text**; **reduced motion** disables fill/needle animation.
- [ ] Gauges are **not interactive** unless a real control (slider) sits next to them.

## Related
- Ingested: Activity rings (✓), Charts (✓), Charting data (✓), Ratings and reviews (✓), Sliders (✓), Color (✓ CRITICAL), Accessibility (✓), Right to left (✓), Writing (✓).
- Progress indicators (✓ `progress-indicators.md`). Rating indicators (✓ `rating-indicators.md`). Not yet ingested: Widgets.
- Developer docs: SwiftUI `Gauge`; AppKit `NSLevelIndicator`.
