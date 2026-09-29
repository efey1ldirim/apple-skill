# Live Photos
Source: https://developer.apple.com/design/human-interface-guidelines/live-photos · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, or tvOS. **Not supported in watchOS**", plus a **visionOS** section: people can **view but not capture** Live Photos) · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data). **Link-only ingestion: one DocC fetch, read in full (40 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts and the catalog list. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; it names **7 best practices**, **2 badge forms** (with text "Live", without text) and **2 developer frameworks** (PhotoKit `PHLivePhoto`, LivePhotosKit JS).

## In one line
A **Live Photo** captures **audio and extra frames before and after the shutter**; **people press a Live Photo to see it spring to life.** **Apply edits to all frames (or offer conversion to a still), keep the content intact (never split frames or audio out), let people preview the whole Live Photo before sharing and always offer sharing as a still, show download progress and when it becomes playable, fall back to a plain still where Live Photos aren't supported (don't fake the experience), and make Live Photos recognisable by a hint of motion (custom effect) or, if motion isn't possible, a consistent system badge ("Live" with or without text). Never add a playback button that looks like video.** **visionOS: view only, no capture.** On the web: **LivePhotosKit JS or a still + short video pair, hover/press-to-play, poster fallback, badge, and preview/convert-to-still on share.**

## Rules

### Framing (intro)
- **Live Photos lets people capture favourite memories in a sound- and motion-rich interactive experience that adds vitality to still photos.**
- **When available, the Camera app captures additional content, including audio and extra frames, before and after the photo**; **people press a Live Photo to see it spring to life.**

### Best practices
- **must** **Apply adjustments to all frames.** If the app lets people apply **effects or adjustments** to a Live Photo, **apply them to the entire photo**; **if you can't, give people the option to convert it to a still photo.**
- **must not** **Break up a Live Photo.** People should **experience Live Photos consistently, with the same visual treatment and interaction model across apps**: **don't disassemble a Live Photo and present its frames or audio separately.**
- **should** **Implement a great sharing experience.** If the app supports sharing, **let people preview the entire contents of a Live Photo before sharing**, and **always offer to share it as a traditional photo.**
- **should** **Clearly indicate when a Live Photo is downloading and when it's playable**: **a progress indicator during download and an indication when it completes.**
- **should** **Show a traditional still in environments that don't support Live Photos.** **Don't try to replicate the Live Photos experience** where it isn't supported; **show a still representation.**
- **should** **Make Live Photos easily distinguishable from stills.** **The best way is a hint of movement.** **There are no built-in Live Photo motion effects** (such as the one when swiping through photos in the full-screen browser of the Photos app), so **design and implement custom motion effects.**
- **must** **Where movement isn't possible, show a system-provided badge above the photo, with or without text**, and **never include a playback button that can be read as a video play button.** (Illustrations: **a nighttime photo of an alpine lake with the Live Photo badge with the text "Live" in the upper-left corner**, and **the same photo with the badge without text**.)
- **should** **Keep badge placement consistent**: **the same location on every photo**, **typically a corner**.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS:** no additional considerations. **watchOS:** not supported.

#### visionOS
- **People can view a Live Photo but can't capture one.**

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Capture | audio and extra frames before and after the photo; press to play |
| Edits | apply to all frames, or offer conversion to a still |
| Sharing | preview the whole Live Photo; always offer "as a still photo" |
| Download | progress while downloading; indicator when playable |
| Unsupported environments | show a still; don't imitate |
| Recognition | custom motion hint (no built-in effect); or system badge (with text "Live", or glyph only); no playback button |
| Badge placement | same corner on every photo |
| visionOS | view only, no capture |
| Developer docs | **`PHLivePhoto`** (PhotoKit) · **LivePhotosKit JS** |
| Video (link only, not watched) | What's new in camera capture (WWDC21 10047) |
| Related list | none |
| Change log | none on the page |

## Visual notes (link-only: from alt text and the catalog list)
- **Hero:** a sketch of the **Live Photos icon** over grid lines, **tinted blue** (alt).
- **Badge pair (catalog `live-photos-01`, light only):** a **nighttime alpine-lake photo with the Live Photo badge "Live" (glyph and text) in the upper-left corner**, and **the same photo with the glyph-only badge**.
- **Mismatches / notes:**
  1. **The page mentions "no built-in Live Photo motion effects"** and says **to build custom ones**, but **gives no motion values** (durations, easing).
  2. **The badge rules cover appearance and placement only**; **the badge artwork and sizes are system-provided** (no numbers here).
  3. **macOS and tvOS are listed as supported** ("no additional considerations") but **the page never says what those platforms can do** (view only, like visionOS).
  4. **The page has no Related list, no Change log and one video**, so **its currency can't be checked.**
  5. **"Never include a playback button"** is stated for **the badge case**; **it isn't said whether a custom play affordance is acceptable in other cases.**
- **Catalog:** the script found **1 comparison** (the two badge photos). **Not catalogued:** the hero. Catalog total **263** (was 262); the 262 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **live-photos-01** (neutral pair, light only; rule "Make Live Photos easily distinguishable from still photos"): **badge with the text "Live"** vs **glyph-only badge**, both **in the upper-left corner**. The script reports **1 comparison** for this page.

## Web translation
**Live Photos have web support only through Apple's LivePhotosKit JS** (a `<live-photo>`/`LivePhotosKit.Player` for playing a photo + video pair), **or by treating the pair as a still image plus a short video.** The design rules carry over to **any "photo with motion" content** (short looping clips, animated posters). Statements about the format and libraries are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Press to see it come to life | **Press-and-hold/hover to play** (`pointerdown`/`pointerenter` → `video.play()`, `pointerup`/`pointerleave` → pause and rewind), **plus a keyboard route** (Enter/Space toggles) and **a visible affordance**; **muted by default, sound on explicit unmute** (autoplay policy). |
| Apply adjustments to all frames; else convert to still | **Filters/crops in an editor must apply to both the still and the motion clip** (**same crop and filter pipeline, e.g. WebGL/canvas or server-side re-encode**); **if unsupported, offer "Convert to still photo" before editing.** |
| Keep content intact; don't split frames/audio | **Serve and cache the photo + clip as one asset** (**one component, one download**); **don't expose frames or audio tracks separately in the UI**; **no frame-scrubbing unless it's a video feature.** |
| Sharing: preview the whole Live Photo; option to share as still | **A share sheet with a preview that plays the motion** and **a toggle "Share as still photo"**; **`navigator.share({files})` with the still (JPEG/HEIC) or the pair**; **default to the safer, smaller option if the target can't play it** (`activity-views.md`). |
| Download progress; playable indicator | **`<progress>` or a ring while the clip loads** (**`preload="none"` until intent**), **a "Live" badge changes from dim to solid when ready (`canplaythrough`)**; **`aria-busy` and an `aria-live="polite"` "Ready to play"**. |
| Still fallback where unsupported | **Feature-detect** (`LivePhotosKit`, `HTMLVideoElement`, `prefers-reduced-motion`, `Save-Data`) **and render `<img>` only**; **no fake motion**; **`prefers-reduced-motion: reduce` → still, play only on explicit press.** |
| Distinguish from stills: hint of motion; custom effect | **A subtle "breathing" or Ken-Burns micro-motion on hover/focus for the poster** (short, ≤ 1 s, **CONV**), **under reduced-motion: none**; **or the badge below.** |
| Badge (with/without text); never a video play button | **A "Live" badge: a concentric-circles glyph (Lucide `circle-dot`/`aperture`, **not SF Symbols artwork and not Apple's badge**) with optional text "Live"**; **one consistent corner (top-left in Apple's examples), same size on all photos**, **contrast ≥ 3:1 over any photo (translucent dark chip)**; **`aria-label="Live Photo"`**; **no ▶ icon** (**it reads as video**). |
| Keep badge placement consistent | **A shared component with fixed corner and offset (`inset: 8px`, CONV)**, **mirrored in RTL** (`right-to-left.md`). |
| visionOS: view only | **Don't offer capture on unsupported clients**; **show playback controls only.** |
| Native-only | **`PHLivePhoto`, `PHLivePhotoView`, PhotoKit capture/editing, system Live badge assets** are native; **the web has LivePhotosKit JS, `<video>`/poster, and file inputs (`accept="image/*,video/*"`).** |

Field-note cross-links:
- `field-notes/*`: **no media-with-motion recipe**; nothing conflicts.
- `hig/foundations/images.md` (✓): **image formats, still/poster behaviour**; `hig/patterns/playing-video.md` (✓): **autoplay, muted playback, player conventions** (**don't make a Live Photo look like a video player**); `hig/foundations/motion.md` (✓) and `accessibility.md` (✓): **reduced motion, alternatives**; `hig/patterns/loading.md` (✓): **download progress and readiness**; `hig/components/menus/activity-views.md` (✓) and `hig/patterns/collaboration-and-sharing.md` (✓): **preview before sharing, share options**; `hig/components/content/image-views.md` (✓): **displaying photos**; `hig/foundations/right-to-left.md` (✓): **badge placement mirroring**; `hig/patterns/feedback.md` (✓ CRITICAL): **progress and state feedback**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Press/hover/keyboard plays the motion**, **muted by default**, **with a visible affordance**.
- [ ] **Edits apply to both still and motion**, **or the person can convert to a still first.**
- [ ] **The photo and clip stay one asset**; **frames and audio are never presented separately.**
- [ ] **Sharing previews the motion and always offers "as still photo".**
- [ ] **Loading shows progress, and a clear "ready" state.**
- [ ] **Unsupported or reduced-motion contexts show a plain still** (no imitation).
- [ ] **A badge or a subtle motion hint identifies Live Photos**, **in one consistent corner**, **with contrast and an accessible name**, **and never a video play button.**
- [ ] **Capture isn't offered where it isn't possible (view-only clients).**

## Related
- Ingested: Images (✓), Playing video (✓), Motion (✓), Accessibility (✓), Loading (✓), Activity views (✓), Collaboration and sharing (✓), Image views (✓), Right to left (✓), Feedback (✓ CRITICAL).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: `PHLivePhoto` (PhotoKit) · LivePhotosKit JS.
- Videos: What's new in camera capture (WWDC21 10047).
