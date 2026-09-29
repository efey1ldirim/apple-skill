# Maps
Source: https://developer.apple.com/design/human-interface-guidelines/maps · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS", plus a **watchOS** section: static snapshot maps) · Ingested: 2026-09-29 · Apple last updated: **December 18, 2024** (place cards and more artwork; earlier rows: Sep 12 2023 artwork; Sep 23 2022 custom information guidance, refined best practices, one page). **Link-only ingestion: one DocC fetch, read in full (139 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **2 emphasis styles**, **Apple logo padding 7 pt sides / 10 pt above and below**, **logo and legal link hidden on maps smaller than 200 × 100 px**, **icon string 2–3 characters**, **2 overlay levels**, **4 place-card styles** (+ callout sub-styles), **up to 5 annotations on watchOS**.

## In one line
**A map shows outdoor or indoor geography; keep it interactive (zoom, pan, rotate), choose default (saturated) or muted (desaturated, so your own content stands out) emphasis, help people find places (search plus category filters), style the selection distinctly, cluster overlapping pins, keep the Apple logo and legal link visible (7 pt side and 10 pt top/bottom padding, fixed to the map, not shown on maps under 200 × 100), match annotations and overlays to your app, keep custom controls legible against the map, present place cards in a style that fits the map (never repeating what you already show, keeping the place visible), and for indoor maps add detail progressively by zoom level, use a floor picker with short floor numbers, show dimmed surroundings and limit scrolling away from the venue.** **watchOS: a static, non-interactive snapshot (tap opens Maps), at most 5 annotations, smallest region that fits the points.** On the web: **MapKit JS (Apple) or any web map library, with the same rules for controls, contrast, clusters, selection, place details and indoor floors.**

## Rules

### Framing (intro)
- **A map shows outdoor or indoor geographic data in an app or on a website**, with **familiar behaviour: zooming, panning, rotation**, **annotations, overlays and routes**, in **standard, satellite or hybrid** presentation.

### Best practices
- **should** **Make the map interactive.** People expect **zoom, pan and other familiar gestures**; **non-interactive elements that cover the map break those expectations.**
- **should** **Pick the emphasis style that fits the app.**
  - **Default:** **fully saturated colours**; **good for standard maps without many custom elements**, and **keeps visual alignment with the Maps app** when people switch between them.
  - **Muted:** **desaturated map**; **good when information-rich content should stand out against the map.**
  - (Developer: `MKStandardMapConfiguration.EmphasisStyle`.)
- **should** **Help people find places**: **a search feature combined with category filters** (e.g. a mall map with clothing, housewares, electronics, jewellery, toys).
- **must** **Clearly identify selected elements**: **when an area or element is selected, use distinct styling such as an outline and a colour change.**
- **should** **Cluster overlapping points of interest**: **one pin represents several nearby points, and clusters expand as people zoom in.** (Illustrations: **a pin with the number three** vs **three orange pins when zoomed in**.)
- **must** **Keep the Apple logo and legal link visible.** **Temporary coverage by your UI is fine; not all the time.**
  - **Padding:** **7 pt at the sides, 10 pt above and below** (example values).
  - **Fix them to the map**: **they shouldn't move with your interface.**
  - **If your UI moves relative to the map, place them using the lowest position of the custom element** (e.g. **10 pt above the lowest resting position of a bottom card**).
  - **Note:** **they aren't shown on maps smaller than 200 × 100 px.**

### Custom information
- **should** **Match annotations to the app's visual style.** The **default marker is a red-tinted pin with a white pin icon**; **you can change the tint and replace the icon with a string or an image such as a logo.** **An icon string can contain any characters (including Unicode) but keep it to 2–3 characters for readability** (`MKAnnotationView`).
- **may** **Make custom information about standard map features independently selectable.** **The system then treats Apple-provided features (points of interest, territories, physical features) separately from your annotations**, and **you can style the information shown when they're selected** (`MKMapFeatureOptions`).
- **should** **Use overlays to define map areas related to your content.** Two levels:
  - **Above roads (default):** **above roads but below buildings, trees and other features**; **people still see what's underneath, but the area reads as defined.**
  - **Above labels:** **above roads and labels, hiding what's beneath**; **for content that should be fully abstracted from the map, or to hide irrelevant areas.**
- **must** **Give custom controls enough contrast with the map.** **Consider a thin stroke or light drop shadow, or blend modes on the map area**, so controls don't blend in.

### Place cards
**Rich place information (hours, phone numbers, addresses, …)** in an app or website: **structured, current data for places you specify, adding depth to search results.**

#### Displaying place cards in a map
- **A place card can appear directly in the map whenever someone selects a place** (good for a map of specific places, e.g. bookstores on a book tour), **and for other places (points of interest, territories, physical features)** to give context. **Websites can embed a map that shows a place card by default for one specified place** (Maps Embed API).
- **Styles** (size, appearance and included information):

| Style | What it shows |
|---|---|
| **Automatic** | **The system picks the style from the map view's size** |
| **Callout** | **A popover-style card next to the selected place**; **full** (**large, detailed**) or **compact** (**concise, space-saving**); **default is automatic callout**, which picks by the map's size |
| **Caption** | **An "Open in Apple Maps" link** |
| **Sheet** | **The place card in a sheet** (`sheets.md`) |

- **The full callout** shows as **a popover in iPadOS and macOS** and **a sheet in iOS.** (Illustrations: **full callout on iPad: header image, place name, category, rating, tiles for hours, website/phone/address, and an "Open in Apple Maps" tile**; **compact: name, category, shortened address, rating, link**; **caption: link only**; **sheet: the same content as full, over the map**; **iPhone full callout: a sheet from the bottom edge**.)
- **should** **Choose the style for your map presentation.** **Full offers the richest experience, but for a small map with many annotations use compact** to keep context of the other places.
- **should** **Make the card look good on all devices and window sizes**; **for full callouts, set a minimum width to prevent text overflow on small devices.**
- **should** **Avoid duplicating information**: **if the app already shows details, prefer compact or caption.**
- **should** **Keep the location visible while a card is shown**: **set an offset and point the card to the selected place** (`offset`, `accessoryOffset`, `selectionAccessoryOffset`).

#### Adding place cards outside of a map
- **Place information can also appear outside a map** (a list of places, search results, a store locator) **with a place card when someone selects one.**
- **must** **If the card isn't displayed inside a map view, it must include a map** (`mapItemDetailSheet(item:displaysMap:)`, `init(mapItem:displaysMap:)`).
- **should** **Use location cues in surrounding content to signal that a place card can open**: **place name and address next to a "more details" button**, or **a map-pin icon beside the place name** for a compact design.

### Indoor maps
For **venue apps (malls, stadiums)**: **interactive maps that help people locate and navigate to indoor points of interest**, with **overlays highlighting rooms and kiosks, text labels, icons and routes.** (Illustrations, San Jose airport: **an overview with a card of actions (share, close, directions, call, website)**; **Terminal B with gate numbers and a minimised card**; **a close-up with a security checkpoint, first aid stations, restrooms, an escalator and a gate number, plus a minimised card with a search field and a "Browse SJC" button**.)
- **should** **Adjust detail to the zoom level**: **too much detail is cluttered**; **show large areas (rooms, buildings) at all zoom levels and add features and labels progressively.** (An airport shows only terminals and gates zoomed out; stores and restrooms when zoomed in.)
- **should** **Differentiate features with distinctive styling**: **colour plus icons to tell apart areas, stores and services.**
- **should** **Offer a floor picker for multi-level venues**: **keep floor numbers concise**, **usually a list of numbers rather than names.**
- **should** **Include surrounding areas for context** (streets, playgrounds, nearby locations); **if they aren't interactive, dim them and give them a distinct colour so they look supplemental.** (Illustration: **gates with numbers and locations while parking structures are shown without detail**.)
- **should** **Consider routing between the venue and nearby transit** (bus stops, train stations, parking lots, garages) **and a quick switch to Apple Maps for more navigation options.**
- **should** **Limit scrolling outside the venue**: **keep at least part of the indoor map on screen**; **adapt the allowed scroll to the zoom level.**
- **should** **Design the indoor map as a natural extension of the app**: **don't copy Apple Maps' look**; **overlays, icons and text match the app's style** (Indoor Mapping Data Format). (Illustration: **an airport concourse tinted green to match the app UI with custom icons for gates, security and an information booth**.)

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.

#### watchOS
- **Maps are static snapshots of geographic locations.** **Place a map at design time and show the appropriate region at runtime.** **The region isn't interactive; tapping opens the Maps app on Apple Watch.**
- **You can add up to five annotations** for points of interest or other information (`WKInterfaceMap`).
- **must** **Fit the map element on the screen** (**the whole element visible without scrolling**).
- **should** **Show the smallest region that encompasses the points of interest**, since **the content doesn't scroll**, so **all key content must be visible in the displayed region.**
- Illustration (alt): **a map on Apple Watch showing Apple Park and some surrounding area.**

## Specs & values
| Item | Value |
|---|---|
| Interaction | zoom, pan, rotate; keep the map interactive |
| Emphasis styles | **default** (saturated; aligned with Maps) · **muted** (desaturated; content stands out) |
| Apple logo + legal link | padding **7 pt sides**, **10 pt above/below**; fixed to the map; **10 pt above the lowest resting position** of a moving custom card; **not shown on maps < 200 × 100 px** |
| Annotation icon string | **2–3 characters** (any characters incl. Unicode) or an image; default red tint + white pin icon |
| Overlay levels | **Above roads** (default; below buildings/trees) · **Above labels** (hides roads and labels) |
| Place card styles | automatic · callout (full / compact / automatic) · caption · sheet |
| Full callout presentation | popover on iPadOS and macOS · sheet on iOS |
| Place card outside a map | **must include a map** |
| Indoor detail | large areas at all zooms; features and labels added as people zoom in; floor picker with concise numbers; dimmed surroundings; limited scrolling |
| watchOS | static snapshot; **≤ 5 annotations**; whole element visible; smallest region that covers the points; tap opens Maps |
| Developer docs | MapKit · MapKit JS · Indoor Mapping Data Format · `MKStandardMapConfiguration.EmphasisStyle` · `MKAnnotationView` · `MKMapFeatureOptions` · `MKOverlayLevel` · `WKInterfaceMap` |
| Videos (link only, not watched) | Go further with MapKit (WWDC25 204) · Unlock the power of places with MapKit (WWDC24 10097) |
| Apple's Related list | none (Resources list developer docs and videos only) |
| Change log | Dec 18 2024 place cards + artwork; Sep 12 2023 artwork; Sep 23 2022 custom information and consolidation |

## Visual notes (link-only: from alt texts, captions and the catalog list)
- **Hero:** a sketch of a **tri-fold map** over grid lines, **tinted blue** (alt).
- **Emphasis pair (`maps-01`, light only):** **a Coit Tower map on iPhone in the default style vs the muted style.**
- **Cluster pair (`maps-02`, light and dark):** **a single pin with the number 3** vs **three orange pins zoomed in.**
- **Place-card tabs (`maps-03`, light and dark):** **full callout, compact callout, caption, sheet** (iPad); **plus an iPhone full callout sheet** (single image, not catalogued).
- **Indoor tabs (`maps-04`, light and dark):** **airport overview with an action card, Terminal B with gate numbers, close-up with checkpoint, first aid, restrooms, escalator and gate number.** **Not catalogued:** **the elevator close-up, the surroundings example, the custom green-tinted design, the Watch map, and the hero.**
- **Mismatches / notes:**
  1. **The 7 pt / 10 pt logo padding is given as "for example... works well"**, **while the rule (keep the logo visible) is firm**; **treat the numbers as recommended defaults.**
  2. **"Not shown on maps smaller than 200 × 100 px"** is a note, **not a design rule**: **don't rely on the logo appearing on small maps and check MapKit's attribution requirements.**
  3. **The default annotation is red, but the emphasis pair uses orange pins for points of interest** (illustration), **so colours vary by feature type**; **the page gives no colour values.**
  4. **The full callout is a popover on iPadOS/macOS and a sheet on iOS**, **but the page doesn't say how the sheet on iPhone is sized.**
  5. **"Consider... floor numbers rather than floor names"** is **the rule**, **but real venues with named levels ("Mezzanine") need a judgement call** the page doesn't cover.
  6. **The page doesn't cover routing UI or turn-by-turn navigation** (routes are mentioned only as a possible map element), **and has no accessibility section for maps.**
- **Catalog:** the script found **4 comparisons** (emphasis pair, cluster pair, 4 place-card tabs, 3 indoor tabs). **Not catalogued:** **the iPhone place card sheet, the elevator close-up, the surroundings image, the custom map, the Watch map and the hero.** Catalog total **268** (was 264); the 264 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **maps-01** (neutral pair: default vs muted emphasis; light only), **maps-02** (neutral pair: one cluster pin vs three individual pins), **maps-03** (4 neutral tabs: full callout, compact callout, caption, sheet) and **maps-04** (3 neutral tabs of the airport indoor map). The script reports **4 comparisons** for this page.

## Web translation
**MapKit JS** (Apple) **provides maps, annotations, overlays, place cards (`selectionAccessory`, `PlaceDetail`) and the Maps Embed API on the web**; **Leaflet, MapLibre GL, Google Maps or OpenStreetMap-based tiles are alternatives** (statements about libraries are background knowledge; the page itself mentions MapKit JS and the Maps Embed API). The **interaction, contrast, clustering, selection and place-card rules carry over to any web map.**

| HIG rule | Web implementation |
|---|---|
| Keep the map interactive | **Wheel/pinch zoom, drag pan, double-tap zoom, rotate where the engine supports it**; **don't cover the map with non-interactive layers** (`pointer-events: none` on decorative overlays); **keep page scroll from being trapped** (**two-finger pan on touch, or a "use ctrl + scroll to zoom" hint, and a way past the map**); **keyboard: arrow keys pan, +/− zoom** (WCAG 2.1.1). |
| Emphasis style (default vs muted) | **Choose the base map style** (**full colour or a desaturated style**); **use a muted basemap when your own markers and overlays carry the information**; **keep the light/dark basemap in step with the page theme** (`dark-mode.md`). |
| Search plus category filters | **A search field (`role="search"`) with filter chips** (**category tokens**) **above or beside the map**; **results list and map stay in sync** (`search-fields.md`, `token-fields.md`, `searching.md`). |
| Selected element styling | **Outline plus fill-colour change and a raised z-order** (**not colour alone; WCAG 1.4.1**), **plus `aria-pressed`/`aria-current` on the matching list item**; **focus moves to the details when selected.** |
| Clustering | **Supercluster or the library's built-in clustering**; **a count badge; click/tap zooms in and expands the cluster**; **the cluster announces "3 places" to assistive tech.** |
| Apple logo and legal link visible | **Keep the map provider's attribution visible** (**MapKit JS, OSM ("© OpenStreetMap contributors") and tile providers require it**); **fixed to a corner of the map, ≥ 7 px from edges/controls (CONV mapping of 7 pt)**, **moves with the lowest overlapping panel** (e.g. `bottom: calc(var(--sheet-height) + 10px)`); **never permanently covered.** |
| Annotations matching the app style | **Custom markers as SVG/HTML** (**brand tint, a 2–3 character label or a logo image**); **keep default marker semantic (a button with an `aria-label`)**; **icons from Lucide/Phosphor (`map-pin`), not SF Symbols artwork.** |
| Independently selectable standard features | **Enable the provider's POI/feature selection** (**MapKit JS `selectableMapFeatures`**) **and render your own details for the selection**, **separate from your markers.** |
| Overlays: above roads vs above labels | **Polygon/GeoJSON layers ordered under or over the label layer** (**MapLibre layer order: insert before the label layer or above it**); **semi-transparent fills for "above roads"; opaque for "above labels".** |
| Contrast between custom controls and the map | **Controls get a 1 px stroke or soft shadow, or a translucent panel** (`materials.md`); **≥ 3:1 against the map (WCAG 1.4.11)**; **≥ 44 px targets** for touch. |
| Place cards (automatic, callout, caption, sheet) | **A popover next to the marker on wide screens, a bottom sheet on narrow ones** (`popovers.md`, `sheets.md`), **a compact callout for dense maps, a caption link "Open in Maps" (universal link)**; **minimum width for the card**; **an offset so the pin stays visible**; **don't repeat info already on the page.** |
| Place card outside a map must include a map | **A store-locator list item opens a detail panel with a small map** (**or the Maps Embed iframe**); **use a `<a href>` to a maps URL as a caption fallback.** |
| Cues that a card can open | **Place name + address + "Details" button, or a pin icon beside the name** (`buttons.md`). |
| Indoor maps: detail by zoom, floor picker, dimmed surroundings, limited scrolling, transit routing | **Vector/IMDF-derived layers with `minzoom` per feature class** (**rooms at all zooms; POI labels above a threshold**); **a vertical segmented floor picker with short labels ("1", "2", "G")** (`segmented-controls.md`, `pickers.md`); **surroundings at reduced opacity and a neutral colour**; **`maxBounds` with padding, scaled by zoom**; **links out to a transit route or "Open in Apple Maps".** |
| Indoor map as an extension of the app | **Tint areas and icons with the app's tokens** (`color.md`); **don't copy Apple Maps' style.** |
| watchOS static map | **On tiny or low-power contexts (email, widgets, print) use a static map image with a link to the interactive map**; **provide alt text** (`accessibility.md`). |
| Accessibility | **Text alternative: a list or table of the places** (**map is never the only way**); **labels for markers; a visible focus ring; respect `prefers-reduced-motion` for fly-to animations**; **announce result counts via `aria-live="polite"`.** |
| Native-only | **`MKMapView`, SwiftUI `Map`, `MKMapItemDetailViewController`, `WKInterfaceMap` and the system Maps app** are native; **MapKit JS and the Maps Embed API cover the web** (a token/key is required; **verify current terms**). |

Field-note cross-links:
- `field-notes/*`: **no map recipe**; nothing conflicts.
- `hig/components/presentation/sheets.md` (✓) and `popovers.md` (✓): **place card presentation (sheet on iOS, popover on iPadOS/macOS)**; `hig/components/navigation/search-fields.md` (✓), `token-fields.md` (✓) and `hig/patterns/searching.md` (✓): **search plus category filters**; `hig/components/selection-and-input/segmented-controls.md` (✓) and `pickers.md` (✓): **floor picker**; `hig/foundations/color.md` (✓ CRITICAL) and `dark-mode.md` (✓): **map tinting, contrast, basemap theming**; `hig/foundations/materials.md` (✓ CRITICAL): **translucent controls over a map**; `hig/foundations/accessibility.md` (✓): **map alternatives**; `hig/foundations/icons.md` (✓): **annotation icons**; `hig/patterns/multitasking.md` (✓): **map resizing with window size**; `hig/technologies/app-clips.md` (✓): **Maps as a launch route**; `hig/technologies/augmented-reality.md` (✓) and `carplay.md` (✓): **navigation and location contexts**; `hig/technologies/machine-learning.md` (✓): **Maps' diverse route options as a multiple-options example**; `hig/inputs/gestures.md` (✓) and `pointing-devices.md` (✓): **zoom, pan, rotate input**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **The map is interactive (zoom, pan, rotate where supported), with keyboard and touch parity**; nothing non-interactive covers it.
- [ ] **The basemap emphasis is a deliberate choice** (**default vs muted**) **and follows the page theme.**
- [ ] **Search and category filters find places; selection is styled with more than colour.**
- [ ] **Overlapping points cluster and expand on zoom**, **with counts and accessible names.**
- [ ] **The provider's logo/attribution and legal link stay visible**, **fixed to the map, padded (≈ 7 / 10 px), and repositioned above moving panels.**
- [ ] **Markers, overlays and (indoor) features match the app's style**; **custom controls keep ≥ 3:1 contrast against the map.**
- [ ] **Place cards use a style that fits the map size** (**popover, sheet, compact, caption**), **don't repeat page content, keep the pin visible, and outside a map include a map.**
- [ ] **Indoor maps add detail by zoom, offer a floor picker with short labels, dim surroundings, limit scrolling away from the venue and offer transit links.**
- [ ] **A text/list alternative exists for the map's content.**

## Related
- Ingested: Sheets (✓), Popovers (✓), Search fields (✓), Token fields (✓), Searching (✓), Segmented controls (✓), Pickers (✓), Color (✓ CRITICAL), Dark Mode (✓), Materials (✓ CRITICAL), Accessibility (✓), Icons (✓), Multitasking (✓), App Clips (✓), Augmented reality (✓), CarPlay (✓), Machine learning (✓), Gestures (✓), Pointing devices (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: MapKit · MapKit JS · Indoor Mapping Data Format (IMDF).
- Videos: Go further with MapKit (WWDC25 204); Unlock the power of places with MapKit (WWDC24 10097).
