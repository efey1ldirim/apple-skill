# Top Shelf
Source: https://developer.apple.com/design/human-interface-guidelines/top-shelf · Section: Components › System experiences · Supported platforms: **tvOS only** ("Not supported in iOS, iPadOS, macOS, visionOS, or watchOS"; only the TV icon is dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **not shown: the page has no Change log** (the table of contents ends with Resources **(from screenshot)**). One DocC fetch, read in full. **8 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text, image alt text and every size table line by line; they cover the **whole page**. Everything visible matches the fetch (all five size tables agree digit for digit). **Read from the fetch only (not in screenshots):** the alt text of the five diagrams and the dark variants; the single video link was read as a title only (video not watched, nothing from it is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **many numbers** (all captured in *Specs & values*) and three counts (buttons: 2; banner images: 3–8).

## In one line
The Apple TV Home Screen's **Top Shelf** shows **your content big and lively above the Dock** while a person has your app in focus. **Help people jump straight into content** (primary Play + More Info), **feature new content, personalise, avoid ads and prices**, use **dynamic, layered-image content** with **a static 2320 × 720 image as fallback that doesn't look interactive**. Dynamic layouts: **carousel actions** (full-screen video/images + two buttons, needs a title), **carousel details** (adds plot/cast metadata and a "currently playing" title), **sectioned content row** (poster 2:3, square 1:1 or 16:9, a full row of images + at least one label) and **scrolling inset banner** (3–8 images, auto-advancing, all text baked into the image + accessibility label). tvOS only; on the web the transferable idea is the **featured-content hero/carousel** with a safe fallback.

## Rules

### Framing (intro)
- The Apple TV Home Screen has an area called **Top Shelf**: it **showcases your content in a rich, engaging way** while people still reach **their favourite apps in the Dock**.
- With **full-screen Top Shelf** people can **swipe through several full-screen content views, play trailers and previews, and get more information**.
- Top Shelf is a chance to **highlight new, featured or recommended content and let people jump straight to your app or game**. Example: selecting Apple TV in the Dock **immediately starts full-screen previews** and **the Dock slides away**; while watching the first preview people can **swipe through previews of all other featured shows**, stopping to choose **Play** or **More Info**.
- The system defines **layout templates** for use when people select your app in the Dock; download them from **Apple Design Resources**.

### Best practices
- **should** **Help people jump right into your content.** Two system layouts, **carousel actions** and **carousel details**, each include **two buttons by default**: a **primary button meant to start playback** and a **More Info button meant to open your app on a details view** for the content.
- **should** **Feature new content**: new releases or episodes, **upcoming movies and shows**; **avoid promoting content people already bought, rented or watched**.
- **should** **Personalise for favourites.** People usually put the apps they use most into Top Shelf; show **targeted recommendations** so they can **resume media playback or return to active gameplay**.
- **should** **Avoid ads and prices.** People put your app there because **you've already sold them on it**; lots of ads won't be welcome. **Purchasable content is fine**, but **focus on new and exciting content** and **show prices only when people show interest**.
- **should** **Showcase compelling dynamic content** that draws people in and encourages them to view more; static images are allowed if necessary, but people prefer **a dynamic experience featuring the newest or highest-rated content**. To do this **prefer layered images** (see Images).
- **must** **Supply at least one static image as a fallback if you don't provide the recommended full-screen content.** The system shows a static image **when your app is in the Dock, in focus and full-screen content is unavailable**; **tvOS flips and blurs it** so it fits **a width of 1920 pixels at 16:9**. Guidance size: **2320 × 720 pt** (2320 × 720 px @1x, 4640 × 1440 px @2x).
- **must not** **Imply interactivity in a static image**: it **isn't focusable**, don't make people think it is.

### Dynamic layouts
- Dynamic Top Shelf images can appear as: **a carousel of full-screen video and images with two buttons and optional details**; **a row of focusable content**; **a set of scrolling banners**.

#### Carousel actions
- Focuses on **full-screen video and images** with **a few unobtrusive controls** to see more; suits **content people already know something about** (user-generated content such as photos; new content from a franchise or show they'll likely enjoy).
- **should** **Provide a title**: succinct (show or movie title, photo-album title) and, if needed, a **brief subtitle** (album: a range of dates; episode: the show's name).

#### Carousel details
- **Extends carousel actions** with **information about the content**: plot summary, cast list and other metadata that helps people decide.
- **should** **Provide a title that identifies the currently playing content.** It appears **near the top of the screen** for reading at a glance; **above it** you may add **a succinct phrase or app attribution such as "Featured on *My App*"**.

#### Sectioned content row
- **A single labelled row of sectioned content**, good for **recently viewed, new or favourite content**. **Row content is focusable** (quick scrolling); **a label appears when an item comes into focus**; **small movements on the remote's Touch surface bring the focused image to life**; you may configure **multiple labels**.
- **should** **Provide enough content for a complete row**: **at least enough images to span the full screen width**, plus **at least one label** for consistency and context.
- **Image sizes** (poster 2:3, square 1:1, 16:9) are in the tables below; each has **actual size**, **focused/safe-zone size** and **unfocused size**.
- **should** **Be aware of extra scaling when mixing sizes**: images **scale up automatically to the height of the tallest image**; e.g. a **16:9 image scales to 500 pixels high** in a row with a poster or square image.

#### Scrolling inset banner
- A **series of large images, each spanning almost the whole screen width**. Apple TV **scrolls through them automatically on a preset timer until someone focuses one**; after the last it **loops to the first**. When a banner is **in focus**, **a small circular gesture on the Touch surface** triggers the **system focus effect** (animation, lighting, and **a 3D effect if the banner has layered images**); **swiping pans to the next/previous banner**. Use it for **rich, captivating content** such as a popular new movie.
- **should** **Provide three to eight images**: **at least three** for it to feel effective; **more than eight** makes reaching a specific image hard.
- **should** **Put text inside the image**: this layout **shows no labels under content**, so **all text must be part of the image**; in layered images **raise text onto a dedicated layer above the others**; **also add the text to the image's accessibility label so VoiceOver reads it**.

### Platform considerations
- **tvOS only.** Not supported in iOS, iPadOS, macOS, visionOS, watchOS.

## Specs & values
Units: pt = px @1x; @2x doubles both. Image size relations: **Actual size ⊃ Focused/Safe zone ⊃ Unfocused** (diagrams show three nested rectangles).

### Static fallback image
| Item | Size |
|---|---|
| Static image | **2320 × 720 pt** (2320 × 720 px @1x, 4640 × 1440 px @2x); tvOS flips and blurs it to fit **1920 px wide at 16:9** |

### Sectioned content row images
| Aspect | Actual size | Focused/Safe zone | Unfocused |
|---|---|---|---|
| Poster (2:3) | 404 × 608 pt (808 × 1216 px @2x) | 380 × 570 pt (760 × 1140 px @2x) | 333 × 570 pt (666 × 1140 px @2x) |
| Square (1:1) | 608 × 608 pt (1216 × 1216 px @2x) | 570 × 570 pt (1140 × 1140 px @2x) | 500 × 500 pt (1000 × 1000 px @2x) |
| 16:9 | 908 × 512 pt (1816 × 1024 px @2x) | 852 × 479 pt (1704 × 958 px @2x) | 782 × 440 pt (1564 × 880 px @2x) |

### Scrolling inset banner image
| Aspect | Size |
|---|---|
| Actual size | 1940 × 692 pt (1940 × 692 px @1x, 3880 × 1384 px @2x) |
| Focused/Safe zone size | 1740 × 620 pt (1740 × 620 px @1x, 3480 × 1240 px @2x) |
| Unfocused size | 1740 × 560 pt (1740 × 560 px @1x, 3480 × 1120 px @2x) |

### Other facts
| Item | Value |
|---|---|
| Default buttons (carousel actions / details) | **2**: primary (start playback) + **More Info** |
| Scrolling banner image count | **3–8** |
| Mixed-size scaling | images scale to the height of the tallest; a 16:9 image becomes **500 px** high beside a poster or square |
| Layout styles | carousel actions · carousel details · sectioned content row · scrolling inset banner |
| Assets | layout templates from Apple Design Resources (tvOS apps) |
| Video (link only, not watched) | Mastering the Living Room With tvOS (WWDC19 211) |
| Apple's Related list | Apple Design Resources |
| Change log | none on this page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** the red-orange card shows, above a Dock band, a row headed **"Featured Content"** (top left) with **three large light-pink image placeholders** (each with a picture glyph) and **a fourth cut off at the right edge**; beneath is a **rounded Dock band with five square app tiles** carrying the App Store glyph, **the second tile enlarged (focused)**. The heading and the focused tile are **(from screenshot)**; the alt only says a horizontal list of media previews above rows of Apple TV apps.
- **Page chrome (from screenshot):** TOC = Top Shelf · Best practices · Dynamic layouts · Platform considerations · Resources (**no Change log**); the platform strip has **only the TV icon dark**; side navigation shows **System experiences** with **Top Shelf** bold.
- **Size diagrams (screenshots 4–7):** one small **light-blue frame diagram per aspect**: **Poster (2:3)** tall, **Square (1:1)**, **16:9** wide, and the **extra-wide banner**; each shows **nested rectangles** with leader-line labels **"Actual size"**, **"Focused/Safe zone size"** and **"Unfocused size"** **(from screenshot: the labels are baked into the images; the alts describe the nesting)**. In the **banner** diagram the **labels appear in a different order** (Focused/Safe zone size first, then Actual size, then Unfocused size), and the safe zone is drawn as **thin bands at the top and bottom** of the image **(from screenshot)**.
- **Videos (screenshot 8):** one card "Mastering the Living Room With tvOS" (WWDC19): a **photo of Earth from space** with a **tvOS side panel** (time 9:41, three round avatars, list rows, small icons). The screenshots end at the site footer; the page has **no Change log**.
- **Mismatches / notes:** none between text, tables and images. Note that the **banner diagram's label order** differs from the other three diagrams.
- **No catalog images:** the fetch script reports **0 comparisons**; the catalog is unchanged (**193**, existing IDs unchanged).

## Web translation
Top Shelf is **tvOS-only** and can't be reproduced on the web. What transfers is the design of a **featured-content surface on a launch/home screen**: a **hero carousel or row** that puts **new, personal content** first, **starts from a fixed set of layouts**, has **primary + "more info" actions**, and **degrades to a static image**. On big-screen web (TV browsers, kiosk, `10-foot UI`) the **focus** rules apply (`layout.md`, `lockups.md`, `collections.md`).

| HIG rule | Web implementation |
|---|---|
| Showcase content richly above the app list; jump straight in | A **hero region above the list of apps/sections** on a home or launcher page; the **primary action goes directly to the content** (Play/Resume), not to a landing page. |
| Two default buttons: primary (playback) + More Info | Each hero item has **one prominent primary** (`Play`, `Resume`, `Open`) and **one secondary "More Info"** that opens the detail view (`/title/123`); one prominent button per view (Buttons GATE). |
| Feature new content; avoid promoting what's already consumed | **Server-side filter** out items the user already bought/watched/completed (`seen`, `owned`); order by **new** and **recommended**; refresh on visit. |
| Personalise; resume playback or gameplay | First slot = **Continue watching/playing** with a **progress bar** (`<progress>`), then targeted recommendations (privacy: `privacy.md`; explain "Because you watched…"). |
| No ads or prices (unless interest is shown) | **Don't place promos or price tags in the hero**; show **price/CTA only on focus/hover or in the detail view**, or as a small secondary line if the item is purchasable. |
| Dynamic layered content; static fallback | Use **video or layered art (parallax via `transform` on stacked layers)**, and always ship a **static `<img>`/poster** (`poster` attribute for video, `<picture>` for art) so slow or reduced-motion clients get a sharp still; **`prefers-reduced-motion` → no autoplay/parallax**. Fallback is **not focusable**, **no hover/focus affordances** (`pointer-events: none`, no button styling) so it doesn't suggest interactivity. |
| Static image fits 16:9 / 1920 px width | Keep art in a **16:9 (or 2320:720 ≈ 3.2:1 banner) safe frame**, `object-fit: cover` with a **focal point** (`object-position`) and a blurred/flipped extension for wider viewports; **don't bake in critical content near the edges**. |
| Carousel actions: full-screen media + few unobtrusive controls; title (+ subtitle) | Media fills the region; controls are **compact and low-emphasis**; each slide has **`<h2>` title** and an optional **subtitle** (year range, show name). |
| Carousel details: metadata, "currently playing" title above the content, attribution ("Featured on My App") | A **metadata block** (synopsis, cast, rating, duration) that **updates with the active slide** (`aria-live="polite"` only on slide change by user action), the **title near the top**, an **eyebrow phrase above it** ("Featured on My App") in **normal case, small** (Apple writes it as a plain phrase; avoid a spaced-out all-caps label). |
| Sectioned row: complete row, ≥ 1 label, label on focus | A **horizontal scroller** with **enough cards to overflow the width** (peek the next card), **a visible section label**, per-item **label on hover/focus** (`:focus-visible`), keyboard arrows (roving tabindex), scroll-snap (`scroll-snap-type: x mandatory`). |
| Image ratios: 2:3, 1:1, 16:9; safe and unfocused sizes | `aspect-ratio: 2 / 3`, `1 / 1`, `16 / 9`; the **focused state is slightly larger** (Apple: safe zone ≈ **94 % of the actual width** for a poster, unfocused ≈ **88 % of the safe zone**; derived, CONV): use `transform: scale(1.06)` on focus over an unscaled resting state, and keep **extra bleed** so scaling never crops content. |
| Mixed sizes scale to the tallest | Give a row **one shared height** (CSS grid `grid-auto-rows` / `align-items: stretch`) and let items **scale by height**, or keep **one aspect per row** to avoid unexpected scaling. |
| Scrolling inset banner: 3–8 images, auto-advance, loop, focus effect, pan | **3–8 slides**; auto-advance **must be pausable** (**WCAG 2.2.2**): a visible **Pause/Play** button, **pause on hover/focus/touch**, stop when the tab is hidden, and **no auto-advance under `prefers-reduced-motion`**; `role="region"` + `aria-roledescription="carousel"`, slide `aria-label="2 of 5"`, prev/next buttons, swipe/arrow-key panning, loop only if the position is announced. |
| Text lives inside the banner image + accessibility label | **On the web keep text as live HTML over the image** (translatable, selectable, crisp at any scale; `writing.md`: no text baked into images) and put the same words in the **accessible name** if the whole slide is one link (`aria-label`). This **deliberately differs** from tvOS, where text must be in the image. |
| Templates from Apple Design Resources | Keep **design templates and safe-zone overlays** in your design files, and **test at 1920 × 1080 and 3840 × 2160**, plus a **5 %-inset "TV safe area"** for TV browsers (CONV). |
| tvOS only | For phones/desktop the equivalent hero follows normal responsive rules; **don't imitate the Apple TV Dock**. |

Field-note cross-links:
- `hig/getting-started/designing-for-tvos.md` (✓): Top Shelf is listed among tvOS system experiences; `hig/components/layout/lockups.md` (✓) and `hig/components/layout/collections.md` (✓): the same focusable, label-on-focus, poster/square rows; `hig/foundations/images.md` (✓): **layered images and parallax** (tvOS); `hig/foundations/materials.md` (✓ CRITICAL): Liquid Glass on Top Shelf and the Dock; `hig/components/presentation/scroll-views.md` (✓): peek, snap, no nested same-axis scroll; `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: one prominent button; `hig/foundations/accessibility.md` (✓): pausable motion, accessible names; `hig/patterns/playing-video.md` (✓): autoplay and previews.
- **Tension to note (not a conflict with a field note):** tvOS asks that banner **text be part of the image**; `hig/foundations/writing.md` (and localisation practice) says **don't bake text into images**. On the web the writing rule wins (live text + `aria-label`).
- `field-notes/*`: no featured-carousel recipe; **no conflict**.
- Ingested since: VoiceOver (✓ `technologies/voiceover.md`). **Apple Design Resources** is external.

## Checklist
- [ ] The hero has **one primary action that goes straight to the content** and a **More Info** secondary.
- [ ] Items are **new or personal** (resume, recommended); **already-consumed items are excluded**; **no ads/prices** unless the user shows interest.
- [ ] Every dynamic slide has a **static poster/fallback** that is **not interactive-looking**; motion respects **`prefers-reduced-motion`**.
- [ ] Art uses **fixed aspect ratios (2:3, 1:1, 16:9, banner)** with **safe-zone padding**; focus scales **without cropping**.
- [ ] Rows have **enough items to overflow**, **a visible label**, and a **label on focus**; mixed heights are handled deliberately.
- [ ] Banners have **3–8 slides**; **auto-advance is pausable** and stops on interaction/hidden tab; prev/next and swipe/arrow keys work.
- [ ] Text over banners is **live HTML** with a matching accessible name; contrast **≥ 4.5:1** over the art (Color gate).
- [ ] TV/large-screen builds use **10-foot sizes** and a **TV safe area**.

## Related
- Ingested: Designing for tvOS (✓), Lockups (✓), Collections (✓), Images (✓), Materials (✓ CRITICAL), Scroll views (✓), Buttons (✓ CRITICAL), Accessibility (✓), Playing video (✓), Writing (✓), Color (✓ CRITICAL).
- Ingested since: VoiceOver (✓ `technologies/voiceover.md`). Apple Design Resources is an external download.
- Videos: Mastering the Living Room With tvOS (WWDC19 211).
