# Symbol effects — SF Symbols animations, measured and re-built for the web

**What this is.** The eleven animation presets on Apple's HIG SF Symbols page (Appear, Disappear, Bounce,
Scale, Pulse, Variable color, Replace, Magic Replace, Wiggle, Breathe, Rotate), plus Draw On/Off. Their
timing was **measured frame by frame from Apple's own demo videos**, then rebuilt as a small kit you can use
on **any** icon set. The kit is `tokens/apple-symbol-effects.{json,css,js,global.js}` and the live demo is
`examples/symbol-effects/index.html`.

**What this is not.** It contains no SF Symbols artwork. SF Symbols are licensed for apps on Apple platforms
only, and they may not be redistributed, so this public repo cannot ship them. See `hig/foundations/sf-symbols.md`
§ Licence. The demo uses **Lucide** icons (ISC). Any stroke or fill SVG works.

## How the numbers were obtained (provenance)
- **Source.** The page's `sf-animation-*.mp4` videos: 1634×400, three symbols side by side, content at
  30 fps. They were played in a browser on developer.apple.com, and each frame was drawn to a canvas at 1/60 s
  steps.
- **Per symbol and per frame, the measurement recorded:**
  - ink bounding box → scale;
  - ink mass ÷ scale² → opacity;
  - ink centroid → translation;
  - a 24×24 mass grid → layer order and stagger;
  - a 120-bin angular histogram, cross-correlated between frames → rotation.
- **Accuracy.**
  - About ±0.01 in scale and ±1° in rotation.
  - Opacity estimates are about ±0.05 where layers overlap. These are tagged `MEASURED-APPROX` in the JSON.
- **Kept out of the repo.** The raw videos and frames are Apple's assets and are not committed. Only the
  numbers are: timings and scale factors are facts about motion.
- **Verification.** `node tools/check-symbol-effects.mjs` renders the kit in headless Chrome, freezes each
  animation at sample times and compares the rendered transform and opacity with the measured curves. Status on
  2026-09-28: **12/12 PASS** (max error 0 on the keyframes; tolerances ±0.01 scale, ±0.02 opacity, ±1°,
  ±0.5 px).
- **Rebuilding.** Edit only the JSON, then run `node tools/build-symbol-effects.mjs`. The CSS and JS are
  generated from it.

## The measured presets (what each one does, exactly)

| Effect | Duration | What moves | Key numbers (MEASURED) |
|---|---|---|---|
| **Appear** | 0.20 s total | each layer scales 0.78→1 and fades 0→1; layers staggered **0.033 s** | order = layer order (centre→outward, front→back, leading→trailing) |
| **Disappear** | ~0.13 s | each layer scales 1→0.87 and fades out; stagger ~0.02 s | much quicker than Appear |
| **Bounce up** | 0.567 s | scale 1 → **1.252** (0.20 s) → **0.908** (0.43 s) → 1 | plays once; opacity unchanged; by-layer stagger ~0.05 s |
| **Bounce down** | 0.667 s | scale 1 → **0.748** (0.20 s) → **1.109** (0.43 s) → 1 | |
| **Scale down / up** | 0.267 s | scale 1 → **0.50** / → **1.25**, then **holds** | restore takes 0.233 s |
| **Pulse** | 2.0 s loop | marked layer's opacity = 0.75 + 0.25·cos(πt): 1 → 0.5 → 1 | fit error ≤ 0.01 |
| **Variable color** | step **0.333 s** | one layer lights at a time; ramps 0.333 s up and 0.333 s down; inactive layers at **30 %** | iterative cycle (n+2)·step (speaker ≈ 1.67 s); reversing cycle 2(n−1)·step (Wi-Fi ≈ 1.33 s) |
| **Replace** | 0.25 s in | new symbol starts at **0.5×**, nearly opaque at once, eases to 1× | down-up: old shrinks and fades 0.233 s, then new; up-up: old grows to 1.19× and fades 0.167 s; off-up: old vanishes instantly. Old and new do not overlap |
| **Magic Replace** | ~0.5–0.75 s | slash draws from top-leading end (full at 0.33 s, ~4 % overshoot); badge springs 0 → 1.12× (0.25 s) → 1 (0.75 s) | falls back to down-up for unrelated symbols |
| **Wiggle** | 0.9 s | damped: **5 %** of icon size → −3 % → +2.3 % → −2.1 % → 0; rotational: +9.4° → −8° → +5.7° → −5.7° → 0 | first swing toward the named direction |
| **Breathe** | 3.0 s loop | scale 1 → **1.20** and opacity 1 → **~0.29** at 1.5 s, symmetric | |
| **Rotate** | 2.0 s | one clockwise turn; fast start (peak ~400°/s at 0.3–0.4 s), long ease-out tail | by-layer uses the same curve on the rotating layer |
| **Draw On/Off** | 0.6 / 0.45 s | stroke draws along its path | **CONV**: the page has no video for it |

## How to use it

### 1. Set up any icon so it has layers
- A **layer** is each direct child of the `<svg>`: `<path>`, `<circle>`, `<line>`, `<rect>` or `<g>`. You can
  also set an explicit order with `data-sfx-layer="0|1|2…"`.
- Order layers the way people should read the motion: primary shape first, then secondary details, from
  inner to outer or from leading to trailing.
- Mark special parts with:
  - `data-sfx-pulse` (the layer that pulses);
  - `data-sfx-badge` (a badge for Magic Replace);
  - `data-sfx-slash` (a `<line>` from top-leading to bottom-trailing).

### 2. Pick the effect by meaning (HIG rules)
| You want to say… | Effect |
|---|---|
| "This just arrived / just left" | Appear / Disappear |
| "Your tap did something" / "act here" | Bounce (up by default; down for "pressed in") |
| "This is selected / chosen" (state that persists) | Scale up (or down), then restore when deselected |
| "Something is ongoing" (recording, connecting) | Pulse (subtle, opacity only) or Breathe (stronger: size + opacity) |
| "Progress / signal / level" | Variable color (iterative for activity, cumulative for fill level, reversing for scanning) |
| "State changed" (play ↔ pause, grid ↔ list) | Replace (down-up); up-up when the change is *forward progress*; off-up to emphasise the next action |
| "Same thing, now on/off/badged" (mute, alert on card) | Magic Replace (slash draws / badge springs) |
| "Look here" (easy-to-miss change, directional hint) | Wiggle, along the direction the symbol means |
| "Working…" / real-world spin (gear, fan) | Rotate (whole, or only the moving layer) |
| "Show a path / progress along a stroke" | Draw On / Off |

### 3. Call it

**Option A: CSS only.** Link `tokens/apple-symbol-effects.css`.
```html
<svg class="sfx sfx-bounce-up" …>…</svg>             <!-- plays once; remove + re-add class to replay -->
<svg class="sfx sfx-wiggle-forward" …>…</svg>        <!-- flips automatically in RTL -->
<svg class="sfx sfx-scale-up" …>…</svg>              <!-- holds at 1.25× until you swap to sfx-scale-restore-from-up -->
<svg class="sfx"><path class="sfx-layer sfx-appear" style="--sfx-i:0" …/><path class="sfx-layer sfx-appear" style="--sfx-i:1" …/></svg>
<path class="sfx-pulse" …/>                            <!-- on the pulsing layer only -->
```

**Option B: JS runtime.** It handles layers, stagger, replace, variable color and magic effects.
```js
import { SymbolEffects as SE } from "./tokens/apple-symbol-effects.js";   // or <script src="…global.js"> → window.SymbolEffects
await SE.appear(svg);                          // by layer, 0.033 s stagger
await SE.bounce(svg, { direction: "up" });     // byLayer: true by default
await SE.scale(svg, { direction: "up" }); …; await SE.unscale(svg);
const p = SE.pulse(svg);                       // Animation[]; p.forEach(a => a.cancel()) to stop
const v = SE.variableColor(svg, { layers: [...svg.children].slice(1) });          // iterative
SE.variableColor(wifiSvg, { reversing: true }); SE.variableColor(barsSvg, { mode: "cumulative" });
const newSvg = await SE.replace(oldSvg, nextSvg, { style: "downUp" });           // parent: display:inline-grid
await SE.magicSlash(micSvg, { on: true }); await SE.magicBadge(cardSvg, { on: true });
await SE.wiggle(svg, { direction: "forward" }); // up|down|left|right|forward|backward|clockwise|counterClockwise
const b = SE.breathe(svg); b.cancel();
SE.rotate(fanSvg, { layers: ".blades", iterations: Infinity });                  // spin one layer about its own centre
await SE.drawOn(svg, { stagger: "layer" });    // all | layer | sequential
```

**React.** Keep a `ref` to the `<svg>` and call the runtime in the event handler or in an effect keyed on the
state change. Cancel returned animations on unmount. Don't re-mount the SVG to replay.

### 4. Adapting an effect to a new icon (the "how to make it" checklist)
1. **Split the icon into meaningful layers.**
   - Base shape, then accents: waves, badge, slash, moving part.
   - With Lucide, most icons are already one element per stroke. Group strokes that belong together in a `<g>`.
2. **Decide what may move.**
   - Only the part that carries meaning moves. Examples: fan blades rotate, the base doesn't; speaker waves
     vary, the speaker body doesn't.
   - The HIG asks for exactly this: "Optimize layers", "Test animations for custom symbols".
3. **Anchor transforms correctly.**
   - Whole-symbol effects scale about the icon's centre: `transform-box: view-box; transform-origin: 50% 50%`.
   - A spinning layer rotates about its own centre: `transform-box: fill-box`.
4. **Keep the timing.** Use the kit's durations and curves as they are. If you need a new effect, copy the
   closest preset's JSON entry and change only the **amplitude**. Keep the duration and the curve shape; that
   is what makes it read as Apple.
5. **Direction.**
   - Wiggle toward what the symbol means: a download arrow wiggles down, "next" wiggles forward (mirrored in
     RTL).
   - Rotate clockwise unless the object turns the other way in reality.
6. **One effect per moment.**
   - Don't stack Bounce + Wiggle + Pulse on one symbol.
   - Don't animate every icon in a list (HIG: apply judiciously; avoid motion on frequent interactions —
     `motion.md`).
7. **Reduced Motion.** The kit already switches automatically:
   - Appear, Disappear and Replace become 0.15 s fades.
   - Bounce, Wiggle, Breathe and Rotate stop.
   - Pulse and Variable color show a static state.
   - Scale jumps to its end state.
   - Also expose the state in text/ARIA; motion is never the only signal.
8. **Verify.** Run `node tools/check-symbol-effects.mjs` after changing the JSON. Watch the demo in light and
   dark mode, and with Reduce Motion on.

## Related
- `hig/foundations/sf-symbols.md`: the page note, including licence, rendering modes, variants and
  custom-symbol rules.
- `hig/foundations/motion.md`: purpose, brevity, cancellability, Reduce Motion.
- `hig/foundations/icons.md`: standard action → symbol table (with open-licence web equivalents).
- `hig/foundations/right-to-left.md`: which symbols flip in RTL. Wiggle `forward`/`backward` follows the
  direction automatically.
