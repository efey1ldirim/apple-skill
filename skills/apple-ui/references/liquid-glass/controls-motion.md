# Liquid Glass controls — the slider thumb and the segmented control, measured and rebuilt
**Source.** The two videos in the *Controls* section of Apple's *Adopting Liquid Glass* page (`adoption-guide-slider.mp4`, 1080×318, 43 s; `adoption-guide-segmented-control.mp4`, 1080×334, 33 s; both 30 fps) · measured 2026-09-29 · **Read from the videos themselves, frame by frame** (1291 and 1001 frames), not from the page text. **What is committed is numbers only** — no Apple frames or artwork (`tokens/apple-glass-controls.json`, `tools/fixtures/glass-controls/measured.json`). Not marked critical, but it is the base for every other glass control (buttons, toggles, menus): **the same lens, bevel, rim, veil and press/release timing apply.**

**What is here.** A web kit: `tokens/apple-glass-controls.{json,css,js,global.js}` (`GlassControls.slider(el)`, `GlassControls.segmented(el)`), the demo `examples/glass-controls/index.html`, the checker `tools/check-glass-controls.mjs` (**19/19 PASS on 2026-09-29**), and this note. Rebuild after editing the JSON or `apple-glass-controls.src.js`: `node tools/build-glass-controls.mjs`.

## How the numbers were obtained
- **Frames** were extracted from the videos at 30 fps. Per frame: **rim mask** (near-white + cyan pixels) → the lens **bounding box** (width, height, centre), the **fill tip** (end of the blue track fill), **bright-pixel count** (glass interior on/off), area.
- **Look** was fitted by **analysis-by-synthesis**: a candidate lens is rendered in headless Chromium at 2× and compared with the video frame (mean absolute error, blurred MAE, blue-mask Dice) while a random search tunes the parameters (veil levels, rim width/colour, refraction strength/edge width/dispersion, shadow). **Static pressed lens: MAE ≈ 3.5 grey levels; rest pill: 1.4.**
- **Motion** was fitted from the per-frame series: press and release curves (tabulated, one sample per frame), an inertia law for the slider's aspect, a spring for the segmented control's travel and release.
- **Units.** All lengths are CSS px = video px ÷ 2 (the demo runs at the video's own scale); pass `scale` for other sizes. **Time** is in 1/30 s frames.
- **Accuracy (checker, 2026-09-29).** Slider drag: lens width/height rmse **3.7 / 2.6 px**, aspect correlation **0.90**; press-in max error **2.4 px** (frames 9–15), release **2.1 px** (frames 164–173). Segmented tap: width/height rmse **6.4 / 5.7 px** of a 160–210 px lens, centre rmse 5.9 px (the video repeats every second frame while the lens travels, so ±½ frame). Rest sizes exact; the segmented control settles within 1 px and its undershoot is within 0.5 px of the measured one.
- **Known gaps.** (1) **Refraction is Chromium-verified only** (SVG `feDisplacementMap` on an HTML element); Safari/Firefox get the same lens without the bend (`refraction:'off'` forces it). (2) **The slider's horn/crescent detail** where the blue fill meets the rim is close but not identical (Apple's is a wider, lighter streak; ours is a narrower bend plus an inner glow). (3) **Aspect law**: rmse 0.07 of aspect on the measured drag, but it was fitted on one scripted pointer path. (4) **Release times vary** in the videos (3–8 frames); the kit uses the mean. (5) **Only light appearance** is shown in the videos.

## The model (both controls)
1. **Rest = an opaque pill** (fill ≈ the stage colour, 1 px white inset rim, soft shadow) that hides what is under it.
2. **Press = it becomes a lens.** Its **size grows along a per-frame table** (`press.samples`); at first the pill just grows, then within 1–2 frames **the opaque fill fades out and the glass fades in**, the glass content **blurs ~3 px and sharpens over ~4 frames**.
3. **The lens is a veil + the control's own content drawn inside it and bent.** The content under the lens (slider track and fill / the labels) is **redrawn inside the lens** and pushed through a **thin bevel refraction**: displacement is 0 in the interior and **rises linearly to 21 px over the last 7 px next to the rim**, pointing inward, with **per-channel strength R 0.7, G 0.8, B 0.5** (chromatic fringe) and 0.5 px blur. That produces the curled blue horns at the rim and the smeared glyph edges ("For Yo|u", "Libra|ry").
4. **Material.** A **vertical grey veil** (slider: 197 at the top edge → 223 at 17 px → ~225 above the track → ~228 below it; segmented: 209 → 216 mid → 236 near the bottom → 250 rim), a **1 px conic rim** (electric blue at the left, cyan at the top and right, white at the bottom), a **soft inner glow** along the left cap, and a **blue-tinted shadow offset down** on the slider (neutral on the segmented control).
5. **Release = the lens shrinks back**, the rest pill fades in again **later than it faded out** (at p = 0.44 the glass is still visible behind a 60 % fill).

## Slider thumb (video 1)
| Item | Value (CSS px, 30 fps frames) | Tag |
|---|---|---|
| Stage / track / fill colours | `#d8d8d8` / `#c2c2c2` / `#328ce0`; track 12.5 px thick, 476.5 px long (x 28.5–505) | MEASURED |
| Thumb travel | centre 19.4 px inside the left end, 18.6 px inside the right end; **fill tip = 1.0869·cx − 47 (video px), residual 0.57 px** — a pure static mapping, no lag between thumb and fill | MEASURED |
| Rest pill | **58.5 × 40** (1.46 : 1), `#d9d9d9`, white 1 px inset rim, shadow `0 5px 14px rgb(0 0 0/.10), 0 1px 3px rgb(0 0 0/.06)`; centre 0.75 px above the track centre | MEASURED |
| Pressed lens | **area ≈ 5270 px² (2.25× the rest pill), constant while it moves** (dragged mean 5030 ± 60); static aspect **1.49 → 89.5 × 60**; centre 1.5 px above the track centre | MEASURED |
| Press-in | progress p per frame: **0, 0.10, 0.36, 0.62, 0.90, 0.97, 1** (0.18 s); rest fill 1 → 0.52 → 0.03 → 0 over frames 9–11 | MEASURED / FIT |
| Aspect while dragging | **asp = 1.507 + 0.445·tanh(a / 1787 px/s²)**, *a* = acceleration of the low-passed thumb velocity (τ 0.125 s), then a 0.066 s lag. Range **1.1 (tall)–1.9 (wide)**: wide while it accelerates to the right or brakes moving left, tall in the opposite cases — the glass "sloshes". Velocity alone fits worse (R² 0.45). | FIT (rmse 0.069) |
| Release | p per frame: **1, 0.93, 0.78, 0.62, 0.42, 0.22, 0.13, 0.07, 0.03, 0.01, 0** (≈ 0.33 s, **no overshoot**); measured releases took 3–8 frames | MEASURED |
| Refraction | max 21.3 px, edge width 7.1 px, linear (power 1.01), dispersion 0.7/0.8/0.5, blur 0.5 | FIT |
| Shadow | `rgb(50 140 223 / .125)`, offset 12.4 px, blur 12.7, spread −5.7 | FIT |

## Segmented control (video 2)
| Item | Value (CSS px) | Tag |
|---|---|---|
| Stage / track | `#dddddd` / `#d1d1d1`; track **357 × 77** (pill-shaped), x 71–428 | MEASURED |
| Segments | **not equal**: pill centres 96.5 and 275.25; pill widths **189 ("For You") and 159.5 ("Library")**, height 75, inset 2.5 from the track, 4 between pills; pill fill `#dddddd`, white 1.5 px rim | MEASURED |
| Labels | cap height 20 px; **width 95 px ("For You"), 85 px ("Library")** (ratio 1.118) → SF Pro Semibold ~26 px (kit: 27.3 px Helvetica/Arial fallback); selected `#000`, unselected `rgb(0 0 0/.373)` (`#838383`) | MEASURED |
| Lens | pill **+22.5 px wide, +28.5 px tall** (For You 189 × 75 → 211.5 × 103) — **taller than the track (77): it pops out above and below**; content magnified **1.15×**; shows the **black selected-state copy of both labels**, so the unselected label turns black under the lens | MEASURED |
| Press-in | p per frame: **0, 0.21, 0.33, 0.44, 0.67, 0.91, 0.95, 0.98, 1** (~8 frames); **glass on between p 0.67 and 0.91** (one frame) | MEASURED |
| Travel (tap on the other segment) | starts **0.29 s after finger-down**; spring **ω 6.82 rad/s, ζ 0.72** (rmse 0.034 of the distance; a slower drag fits ω ≈ 4.1); overshoots ~2 %; the lens **keeps its old segment's width until the last 45 % of the way**, then adopts the new width (209 → 155 px over ~5 frames) | FIT |
| Release | once the finger is up the lens **droops 0.03/frame (floor 0.75)** while it travels, then when 70 % of the way is covered p follows **0.84, 0.84, 0.79, 0.68, 0.40, 0.14, 0.05, −0.09, −0.16, −0.18, −0.16, −0.09, −0.02, 0, 0.05, 0.07, 0.07, 0.07, 0.04, 0.02, 0** — **it undershoots the rest size by 18 % of the growth (≈ 5 px), overshoots +7 %, settles in ~0.65 s** (half period 7 frames = 0.23 s ≈ spring ω 13.4, ζ 0.3). Glass switches off when p < 0.5. | MEASURED |
| Refraction | same bevel as the slider (21.3 / 7.1 / 0.7·0.8·0.5) | FIT |
| Shadow | `0 6px 16px rgb(0 0 0/.10)` on the lens, `0 3px 10px rgb(0 0 0/.05)` on the rest pill | FIT |

## Using it on other controls (buttons, toggles, menus)
- **Same layers, same order**: opaque rest surface → glass lens (veil + redrawn content + displacement filter) → rim → shadow; **same press table and blur/crossfade**; **release table by control kind** (no overshoot for a knob that is dragged, spring undershoot for a selection that slides).
- **Growth is measured per control**: slider thumb ×1.5 uniform; segmented lens +22.5 / +28.5 px (×1.12 wide, ×1.38 tall). For a new control, **measure the same way** (pill → lens size at p = 1, then reuse the tables).
- **Keep the content under the lens as a real copy** (`feDisplacementMap` warps only its own source): for buttons, the label; for toggles, the track.
- **One lens on screen at a time**; **don't stack glass on glass** (`adopting.md`, *Check for crowding or overlapping*).
- **Reduced motion**: no growth, stretch or spring; the selected pill moves with a 0.15 s crossfade; the thumb stays the rest pill.

## Provenance and limits
- Numbers are facts about motion and geometry (sizes, timings, colour levels); **Apple's frames are not in the repo** (`.gitignore`d scratch only). The videos are Apple's assets and are not committed.
- Rebuild or extend: re-measure with the same method (bounding box per frame → curve tables; render-and-compare for the look), write the numbers to `tokens/apple-glass-controls.json`, run `node tools/build-glass-controls.mjs` and `node tools/check-glass-controls.mjs`.
