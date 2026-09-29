# Camera Control
Source: https://developer.apple.com/design/human-interface-guidelines/camera-control · Section: Inputs · Supported platforms: **iOS only, on iPhone 16 and iPhone 16 Pro models** ("Not supported in iPadOS, macOS, watchOS, tvOS, or visionOS"; only the iPhone icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 9, 2024** (new page; the only change-log row, visible in the last screenshot). One DocC fetch, read in full. **7 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text, image alt text and captions line by line; they cover the **whole page**. The browser was in **dark appearance**; the content is identical. Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the alt text of the images and the dark variants. The page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **no measurements**.

## In one line
The **Camera Control** is a **touch-sensitive button on iPhone 16 / 16 Pro** that **opens your app's camera** and, on a light press, shows an **overlay that extends from the device bezel**; a light **double press** shows the available controls and **sliding a finger** on the button adjusts the chosen value. You supply **sliders** (ranges) and **pickers** (discrete options) plus optional **system zoom and exposure controls**. Rules: **SF Symbols only** for control icons, **short names**, **units on slider values**, **prominent values** the slider snaps to, **leave room for the overlay and don't duplicate its controls in your UI**, **enable/disable controls by camera mode (no add/remove at runtime)**, **put common controls in the middle** (the last used control is remembered), and **let people launch your camera from anywhere via a locked camera capture extension**. Hardware input; on the web the nearest ideas are **on-screen camera controls, hardware-key shortcuts and value sliders with detents**.

## Rules

### Framing (intro)
- On **iPhone 16 and iPhone 16 Pro** the Camera Control **quickly opens your app's camera experience** to **capture moments as they happen**. A **light press** makes the system show **an overlay extending from the device bezel**.
- The overlay lets people **adjust controls quickly**: **lightly double-pressing** shows **the available controls**; after **selecting a control** people **slide their finger on the Camera Control** to **adjust a value** and capture the content as they want.

### Anatomy
- Two control types for **adjusting values or switching options**:
  - **Slider**: **a range of values**, e.g. **how much contrast** to apply.
  - **Picker**: **discrete options**, e.g. **turning a grid on and off** in the viewfinder.
- Besides your **custom controls**, the system offers **standard controls** you may include for **camera zoom and exposure** (**zoom factor** and **exposure bias**).

### Best practices
- **must** **Use SF Symbols to represent control functionality**: **custom symbols aren't supported**; choose a symbol that **clearly denotes the behaviour** (iOS offers thousands; browse the **Camera & Photos** section of the SF Symbols app). **Symbols for controls don't show current state.** Examples: **`bolt.fill`** = flash; **`camera.filters`** = filters.
- **should** **Keep control names short**: labels **follow Dynamic Type** and **longer names can cover the viewfinder**.
- **should** **Include units or symbols with slider values for context**: descriptive info such as **EV, %, or a custom string** tells people **what the slider controls** (developer: `localizedValueFormat`). (✓ "**1 EV**" vs ✗ "**1**" with no context.)
- **should** **Define prominent values for a slider**: values **people choose most often**, or **evenly spaced ones** like **major zoom increments**; while sliding, the system **more easily lands on them** (developer: `prominentValues`).
- **should** **Make space for the overlay in the viewfinder**: the overlay and control labels occupy the screen area **adjacent to the Camera Control in portrait and landscape**; **place your UI outside those areas**, **maximise the viewfinder's height and width** and **let the overlay appear and disappear over it**.
- **should** **Minimise viewfinder distractions**: people want **a large preview with as few distractions as possible**; **don't duplicate controls (sliders, toggles) in your UI and the overlay while the overlay is shown**. (✓ "Keep UI minimal." vs ✗ "Avoid showing controls in the viewfinder that people access in the overlay.")
- **should** **Enable or disable controls by camera mode** (disable video controls in photo mode); the overlay supports **multiple controls** but **you can't add or remove controls at runtime**.
- **should** **Arrange controls deliberately**: **commonly used controls toward the middle** for quick access, **lesser used on either side**; when the overlay opens again **the system remembers the last control used in your app**.
- **should** **Let people launch the experience from anywhere**: create a **locked camera capture extension** so people can set the Camera Control to open **your camera** from **a locked device, the Home Screen or inside other apps** (see Controls › Camera experiences on a locked device).

### Platform considerations
- **iOS (iPhone 16 / 16 Pro) only.** Not supported in iPadOS, macOS, watchOS, tvOS, visionOS.

## Specs & values
| Item | Value |
|---|---|
| Devices | **iPhone 16, iPhone 16 Pro** (models) |
| Gestures | **light press** (open app / show overlay), **light double press** (show controls), **slide** on the button (adjust value) |
| Control types | **slider** (range), **picker** (discrete) |
| System controls | **zoom factor**, **exposure bias** |
| Icon source | **SF Symbols only** (no custom symbols); icons don't reflect state |
| Labels | short, **Dynamic Type** |
| Slider value context | units/symbols such as **EV, %, custom string** |
| Prominent values | **frequent or evenly spaced** values the slider snaps to |
| Runtime changes | **can't add/remove controls at runtime**; enable/disable by mode |
| Order | common controls **in the middle**; last used is remembered |
| Launch | locked camera capture extension (locked device, Home Screen, other apps) |
| Developer APIs named | `AVCaptureControl`, `AVCaptureSlider` (`localizedValueFormat`, `prominentValues`), "Enhancing your app experience with the Camera Control", `LockedCameraCapture` |
| Apple's Related list | SF Symbols (✓), Controls (✓) |
| Change log | Sep 9 2024: new page |
| Videos | none |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple gradient card** with a **pale-lilac phone in landscape** drawn over **construction lines**; **a downward arrow** above the top edge points at **a small bump on the top bezel (the Camera Control's position in landscape)**; a small **rounded pill on the left edge** (the Action button side) **(from screenshot)**. Alt: "A stylized representation of the Camera Control."
- **Callout diagram (screenshot 1–2):** a dark landscape iPhone with **two leader lines**: **"Camera Control"** at the top bezel and **"Camera Control overlay"** at the notch-like recess just below it **(from screenshot: the two labels are baked into the picture; the alt says callouts to the Camera Control and the overlay)**.
- **Controls in the overlay (screenshot 2):** the top strip of a phone with **five small symbols** (a ± exposure, an *f* aperture, a **focus-square in yellow**, a **filters trio**, a **frame**) and the **yellow label "ZOOM"** under the selected one; caption "Controls in the overlay" **(from screenshot: the symbols and "ZOOM")**.
- **Slider vs picker (screenshot 3):** slider = a **row of fine tick marks** with a **yellow "1x"** under it; picker = **a few dots with one yellow dot** and the yellow label **"STARK B&W"**; **zoom factor** = ticks + "1x"; **exposure bias** = ticks + "**0 EV**"; **flash** = symbol strip with the bolt highlighted and the yellow label "**FLASH**"; **filters** = the filters symbol highlighted and "**FILTERS**" **(from screenshot: all these yellow labels)**.
- **Context pair (screenshot 5):** ✓ ticks with "**1 EV**", ✗ ticks with just "**1**".
- **Viewfinder examples (screenshots 6–7):** a **night lake photo** with stars in a **landscape phone** (overlay strip with "ZOOM" at the top edge, a white shutter circle at the right) and a **portrait phone** (overlay strip **vertical along the right edge**, "ZOOM" beside it, shutter at the bottom); then **✓ minimal**: only the overlay's "1x" slider; **✗ duplicated**: the same overlay **plus an on-screen zoom column "2 / 1x / .5"** in the viewfinder **(from screenshot)**. Captions: "Keep UI minimal." and "Avoid showing controls in the viewfinder that people access in the overlay."
- **Page chrome (from screenshot):** TOC = Camera Control · Anatomy · Best practices · Platform considerations · Resources · Change log; the platform strip has **only the iPhone icon lit**; side navigation: **Inputs** open with **Camera Control** ringed (browser focus), **Technologies** below.
- **Resources (last screenshot):** Related **SF Symbols, Controls**; developer docs **Enhancing your app experience with the Camera Control** (AVFoundation), **AVCaptureControl** (AVFoundation), **LockedCameraCapture**; Change log "September 9, 2024 · New page."
- **Mismatches / notes:**
  1. The **portrait/landscape example** (one image with two phones) is **not a do/don't**; it shows the overlay's label in both orientations.
  2. The **"Make space for the overlay"** rule has **no ✓/✗ pair**; the ✓/✗ pair that follows belongs to **"Minimize distractions"**.
  3. The overlay drawings show the strip **at the top in landscape** and **at the right edge in portrait**, consistent with "adjacent to the Camera Control in both orientations".
  4. The screenshots were taken in **dark appearance**.

## Visual examples (catalog)
`visual-examples` gains **5 sets**: **camera-control-01** slider vs picker · **-02** system zoom factor vs exposure bias · **-03** SF Symbols in controls (flash `bolt.fill`, filters `camera.filters`) · **-04** ✓/✗ slider value with vs without context ("1 EV" vs "1") · **-05** ✓/✗ minimal viewfinder vs duplicated controls. Not in the catalog: the hero, the callout diagram, the "Controls in the overlay" strip, the portrait/landscape example. Catalog total: **214** (was 209); existing IDs unchanged.

## Web translation
The Camera Control is **hardware**; nothing on the web exposes it. The transferable design is **a capture UI with a tiny set of controls that appear on demand over a clean viewfinder**, with **sliders that snap to meaningful values, contextual value labels and icon-only controls named for the mode**. Web equivalents: **`getUserMedia` capture screens**, **`ImageCapture` settings (zoom, exposure compensation, torch)**, **hardware keys** (volume keys are not exposed; use `Space`/`Enter`), **`<input type="range">` with `list`/detents**, **PWA capture shortcuts**.

| HIG rule | Web implementation |
|---|---|
| Open the camera quickly | A **direct route** (`/capture`, manifest shortcut, deep link) that **starts the camera on load** after the permission prompt; **one primary shutter button** (`controls.md` locked-camera pattern, `home-screen-quick-actions.md`). |
| Overlay appears on light press; disappears over the viewfinder | Controls **overlay the video** and **auto-hide after ~3 s of inactivity** (CONV), **reappear on tap/hover/keypress**; **the video element keeps its full size** (no layout shift when controls show). |
| Slider vs picker | **`<input type="range">`** (`aria-valuetext` with units) for ranges; **`role="radiogroup"` / segmented control** or a **stepper** for discrete options (grid on/off = `role="switch"`) (`sliders.md`, `pickers.md`, `toggles.md`). |
| System zoom and exposure controls | Use **`MediaStreamTrack.getCapabilities()`** (`zoom`, `exposureCompensation`, `torch`) and **`applyConstraints()`**; only render a control when the capability exists (Chrome/Android; iOS Safari exposes little). |
| SF Symbols only; symbols don't show state | Icons are **Lucide/Phosphor/Ionicons** (never SF Symbols artwork on the web) with a **consistent, single-weight set**; **state is shown by the value label/pressed state, not by swapping the icon** for pickers; icon-only buttons have an **accessible name** (`aria-label`). |
| Short names; Dynamic Type | **One-word labels** ("Zoom", "Flash", "Filters"), in **`rem`** so user text size scales; never cover more than a strip of the viewfinder. |
| Units/symbols on slider values | **Always show the unit**: "1× ", "0 EV", "50 %", "f/1.8"; expose it in **`aria-valuetext`**; **avoid a bare number**. |
| Prominent values the slider snaps to | **Detents** at the common values (`list`/`<datalist>` ticks, or **snap in JS within ±3 % of the detent**, CONV) and a **haptic/visual tick** when landing (`navigator.vibrate` where available); evenly spaced major ticks for zoom (0.5×, 1×, 2×). |
| Leave room for the overlay; maximise the viewfinder | Position controls in **an edge strip** (the side where the thumb rests) **outside the important frame area**; the video **fills the viewport** (`100dvh`, `object-fit: cover`); **safe-area insets** in both orientations (Layout gate); rotate the strip with `screen.orientation`. |
| Don't duplicate controls in the UI and the overlay | **One control set**: if the overlay shows zoom, **remove the on-screen zoom column** at the same time (hide the duplicate rather than showing both). |
| Enable/disable by mode; no runtime add/remove | Keep **a fixed control set per mode**; **disable (aria-disabled, dimmed but focusable)** what doesn't apply (video controls in photo mode) instead of adding/removing elements, so **layout and focus order stay stable**. |
| Common controls in the middle; remember the last | **Order by frequency** (center-out); **persist the last selected control** (`localStorage`, per user) and **reselect it** when the strip reopens. |
| Launch from anywhere (locked camera extension) | **Installable PWA + capture shortcut**, and a **share-target/`capture` input** (`<input type="file" accept="image/*" capture>`) for one-tap capture from other pages; **save first, require sign-in for anything beyond capture** (`controls.md`). |
| Hardware-only input | Mention **AVFoundation `AVCaptureControl`** for native iOS teams; on the web offer **keyboard shortcuts** (`Space` shutter, `+/-` zoom, `[`/`]` exposure) and **visible on-screen controls**; don't depend on a physical control. |
| Accessibility | Every control **operable without sliding gestures** (buttons for ±), **announced value changes** (`aria-live="polite"` on the value label), **≥ 44 px targets** (Buttons GATE), **reduced motion** for overlay fades. |

Field-note cross-links:
- `hig/components/system-experiences/controls.md` (✓): the **Controls** page also covers **camera experiences on a locked device** (LockedCameraCapture); this page's "launch from anywhere" rule links there; **consistent**. `hig/foundations/sf-symbols.md` (✓): symbol choice (the Camera Control accepts SF Symbols only); `hig/components/selection-and-input/sliders.md` (✓), `pickers.md` (✓) and `toggles.md` (✓): slider tick marks and discrete pickers; `hig/patterns/playing-haptics.md` (✓): detent feedback; `hig/inputs/action-button.md` (✓): sibling hardware trigger (also a quick-launch input); `hig/foundations/typography.md` (✓ CRITICAL): Dynamic Type labels; `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: safe areas and orientation.
- `field-notes/*`: no camera or capture recipe; **no conflict**.
- Not yet ingested (linked from this page): none (SF Symbols ✓, Controls ✓).

## Checklist
- [ ] The capture route **opens the camera directly** and shows **one shutter**; on-screen controls **overlay** the video and **auto-hide**.
- [ ] Only **a few controls**, **fixed per mode**; unavailable ones are **disabled, not removed**.
- [ ] Sliders show **units** (aria-valuetext) and **snap to prominent values** with tick feedback.
- [ ] **No duplicated controls** in the viewfinder and the overlay at the same time; the viewfinder is **as large as possible**.
- [ ] Controls sit in **an edge strip outside the key frame area** in **both orientations**, with safe-area padding.
- [ ] Common controls are **in the middle**; the **last-used control is remembered**.
- [ ] Icons are a **single consistent set**, controls have **accessible names** and **±/keyboard alternatives** to sliding.
- [ ] Capture can be **launched from anywhere** (shortcut/deep link/file input) and **saves before requiring sign-in**.

## Related
- Ingested: SF Symbols (✓), Controls (✓), Sliders (✓), Pickers (✓), Toggles (✓), Playing haptics (✓), Action button (✓), Typography (✓ CRITICAL), Layout (✓ CRITICAL), Buttons (✓ CRITICAL).
- Not yet ingested (linked from this page): none.
- Developer docs: "Enhancing your app experience with the Camera Control", `AVCaptureControl`, `LockedCameraCapture`.
