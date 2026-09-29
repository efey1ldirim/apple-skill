# Windows
Source: https://developer.apple.com/design/human-interface-guidelines/windows · Section: Components › Presentation · Supported platforms: **iPadOS, macOS, visionOS** ("Not supported in iOS, tvOS, or watchOS"; the iPhone, TV and Watch icons are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (best practices added, resizable-window guidance for iPadOS; earlier rows: June 10, 2024 volumes in visionOS 2 and game examples, June 21, 2023 visionOS). One DocC fetch, read in full. 15 screenshots (light-mode page, hero → the Resources › Related list) were compared with the fetched text and image alt text line by line: everything matches, including all visionOS windows and volumes paragraphs. **Read from the fetch only (not in screenshots):** the end of **Resources** (developer documentation list), the **video link** and the **change log** (screenshots end after the *Related* list: Layout, Split views, Multitasking); the two catalog image sets were read directly from the downloaded pictures. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **a few numbers** (visionOS default window 1280 × 720 pt, ≈ 2 m in front, ≈ 3 m apparent width).

## In one line
A window is the **visible boundary of an app's content** (iPadOS, macOS, visionOS): it separates the app from the rest of the system and enables **multitasking within and between apps**. Apps use **primary windows** (main navigation and content) and **auxiliary windows** (one focused task, closes when done). **Make windows adapt fluidly to any size**, **open new windows only when it helps** (offer it as an option), **don't build custom window chrome**, **call them "windows"**, and follow the platform's **states** (macOS main / key / inactive), **control placement** (iPadOS window controls vs toolbar items) and **glass/volume** rules (visionOS).

## Rules

### Framing (intro)
- On **iPadOS, macOS and visionOS**, windows **define the visual boundaries of app content**, separate it from other system areas, and **enable multitasking workflows** within and between apps. They include **system-provided frames and window controls** to **open, close, resize and move** them.
- **Two conceptual types:**
  - **Primary window**: presents the app's **main navigation and content**, and the **actions** tied to them.
  - **Auxiliary window**: presents **one specific task or area**; **doesn't allow navigation to other app areas** and typically has a **button to close it after the task**.
- Layout inside a window: see *Layout*; in Apple Vision Pro space: *Spatial layout*.

### Best practices
- **should** **Make windows adapt fluidly to different sizes** to support **multitasking and multiwindow** workflows (*Layout*, *Multitasking*).
- **should** **Open a new window at the right moment.** A separate window is good for **multitasking or preserving context**: Mail opens a **new window for Compose** so the **new message and the existing email are visible together**. **Excessive new windows clutter** and make navigation confusing: **don't open new windows by default** unless it suits the app.
- **may** **Offer viewing content in a new window as an option**, via a **context-menu command** or the **File menu** (`OpenWindowAction`).
- **should** **Avoid custom window UI.** System windows are **recognisable**; **custom frames or controls**, or replicas that don't match perfectly, **make the app feel broken**.
- **should** **Use the term "window" in user-facing content.** The system calls app windows **windows** whatever the type; other terms, including **"scene"** (an implementation term), **confuse people**.

### Platform considerations
- **iOS, tvOS, watchOS:** not supported.

#### iPadOS
- Windows appear **one of two ways**, by the person's **Multitasking & Gestures** setting:
  - **Full screen:** app windows **fill the screen**; people switch between windows (or windows of one app) with the **app switcher**. **No visible window border.**
  - **Windowed:** **freely resizable** windows; **several on screen**; people **reposition** them and **bring them forward**; the **system remembers size and placement even when the app is closed**.
- **should** **Don't let window controls cover toolbar items.** Windowed apps show **window controls at the leading edge of the toolbar**; **buttons at the leading edge can be hidden**, so **move toolbar buttons inward when the controls appear** instead of placing them directly on the edge.
- **may** **Let people use a gesture to open content in a new window** (pinch to expand a Notes item into a new window) (`sceneActivationConfigurationForItemAt`, `UIWindowScene.ActivationInteraction`).
- **Tip:** to let people **view a single file**, you can present it **without creating your own window**, but the app **must support multiple windows** (`QLPreviewSceneActivationConfiguration`).

#### macOS
- People **run several apps at once**, view windows from **multiple apps on one desktop**, and **switch often** (moving, resizing, minimising, revealing) to suit their work style. Games: *Managing your game window for Metal in macOS*.
- **Window anatomy:** a **frame** and a **body area**. People **move** a window by **dragging the frame** and often **resize** by dragging **edges**. The **frame** sits **above the body** and can hold **window controls and a toolbar**; rarely a **bottom bar** (part of the frame **below** the body).
- **Window states (three):**
  - **Main:** the **frontmost window** of the app; **only one main window per app**.
  - **Key** (the **active window**): **accepts input**; **only one key window on screen at a time**. Usually the front app's main window, but a **panel floating above** may be key instead. People **click a window to make it key**; clicking the Dock icon **brings all the app's windows forward** but **only the most recently used becomes key**.
  - **Inactive:** a window **not in the foreground**.
  - **Appearance differs by state:** the **key** window uses **colour** in the title-bar close/minimise/zoom controls; **inactive** windows and **main windows that aren't key** use **gray** there; **inactive windows have no vibrancy** (colour pulled from the content beneath), so they look **subdued and farther away**.
  - **Note:** some windows (typically **panels like Colors or Fonts**) become key **only when people click the title bar or a component that needs keyboard input** (a text field).
- **should** **Make custom windows use the system-defined appearances**: people rely on the differences to find the **foreground** window and know **which accepts input**. System components **update automatically** with state; **custom implementations must do it themselves**.
- **should** **Avoid critical information or actions in a bottom bar**: people often **move a window so its bottom edge is hidden**. If you need one, show **only a small amount of information tied to the window's contents or selection**: Finder's **status bar** shows **the number of items, the number selected and free disk space**. For more, use an **inspector** (usually on the **trailing side of a split view**).

#### visionOS
- **Two main styles: default and volumetric.** A **window** (default style) and a **volume** (volumetric style) can both show **2D and 3D content**, several at once in the **Shared Space** and in a **Full Space**. (Also a **plain** style: like default but the upright plane has **no glass background**, `PlainWindowStyle`.) The **system sets the initial position** of the first window/volume; people can **move** them anywhere.
- **Windows (default style):** an **upright plane** with an **unmodifiable glass background material**, a **close button, window bar and resize controls**; may add a **Share button, tab bar, toolbar and ornaments**. **Dynamic scale** keeps apparent size consistent regardless of distance.
  - **should** **Prefer a window for familiar interfaces and tasks**; keep immersive experiences for meaningful content; use a **volume** for **bounded 3D content** (a game board).
  - **should** **Keep the glass background.** It makes content feel part of the surroundings and **adapts to lighting**, with **specular reflections and shadows** showing scale and position. **Removing it hurts legibility and unity; an opaque background hides the surroundings and feels heavy.**
  - **should** **Pick an initial size that minimises empty space.** **Default: 1280 × 720 pt.** On first open the system places it **about 2 m in front** of the wearer, **apparent width about 3 m**. Too much empty space looks needlessly big and hides other content.
  - **should** **Choose an initial shape suited to the content** (Keynote wide, Safari tall; a tower-building game taller than a driving game).
  - **should** **Set minimum and maximum sizes** so **UI can't overlap when tiny or become unusable when huge** (*Positioning and sizing windows*).
  - **should** **Minimise 3D depth in a window.** The system adds **highlights and shadows** for depth, but **clips 3D content that extends too far from the window surface**; for deeper 3D use a **volume**.
- **Volumes:** show **2D or 3D content viewable from any angle**, with window-management controls; **the close button and window bar move to face the viewer** as they walk around (`VolumetricWindowStyle`).
  - **should** **Prefer a volume for rich 3D content**; a familiar UI-centric interface fits a window better.
  - **should** **Place 2D content so it looks right from several angles**; **pin it to 3D content with an attachment**.
  - **should** **Use dynamic scaling in general** (keeps content legible at a distance); **fixed scaling** (the default) when the content represents a **real-world object** (a retail product).
  - **should** **Use the default baseplate appearance** (**visionOS 2+**): a gentle **glow around the volume's border when looked at** helps people see the edges and find the **resize control**; skip it if the content is **full bleed** or you use a **custom baseplate**.
  - **may** **Offer high-value content in an ornament** (visionOS 2+): reduces clutter; an **attachment anchor** (`topBack`, `bottomFront`) keeps it **in the same place relative to the viewer**; **not on the same edge as a toolbar or tab bar**; **prefer only one extra ornament**.
  - **should** **Choose the alignment that fits the interaction**: **baseplate parallel to the floor** for content people rarely interact with; **tilting to match the gaze** for comfortable use, even **reclining**.

## Specs & values

| Item | Value |
|---|---|
| Window types | primary (main navigation + content) · auxiliary (one task, close button) |
| iPadOS modes | full screen (app switcher) · windowed (resizable, several at once; system remembers size/placement) |
| iPadOS window controls | leading edge of the toolbar when windowed; move toolbar buttons inward |
| macOS anatomy | frame (controls, toolbar, rare bottom bar) + body; drag frame to move, edges to resize |
| macOS states | **main** (one per app) · **key** (one on screen, takes input) · **inactive** |
| State appearance | key: coloured title-bar controls; inactive / non-key main: gray controls; inactive: no vibrancy |
| Bottom bar | small info only (Finder status bar); no critical actions; use an inspector for more |
| visionOS styles | default window (glass) · volume · plain window (no glass) |
| visionOS default window size | **1280 × 720 pt**, placed **≈ 2 m** in front, apparent width **≈ 3 m** |
| visionOS window rules | keep glass; minimal empty space; shape suits content; set min/max sizes; minimal depth |
| visionOS volume rules | 2D/3D from any angle; controls face the viewer; dynamic (or fixed for real objects) scaling; baseplate glow (v2+); one extra ornament max; alignment floor vs tilt |
| Terms | "window", not "scene" |
| New windows | not by default; offer via context menu / File menu; iPadOS pinch-to-open |
| Developer docs | SwiftUI `Windows`, `WindowGroup`, `OpenWindowAction`, `DefaultWindowStyle`, `PlainWindowStyle`, `VolumetricWindowStyle`, `ornament(…)` · UIKit `UIWindow` · AppKit `NSWindow` |
| Video | "Elevate the design of your iPad app" (WWDC25) |
| Apple's Related list | Layout ✓ · Split views ✓ · Multitasking ✓ |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **pale window**: three **red traffic-light dots** at the top-left over a **lighter sidebar strip** on the left, and at the top of the body **one round control, then (at the right) a round control, a capsule and another round control** (toolbar items); a **vertical double arrow** at the right (height) and a **horizontal one** below (width): a window with **frame controls, sidebar and toolbar** and adjustable size, no numbers **(from screenshot)**.
- **iPadOS full screen vs windowed (catalog `windows-01`, screenshots):** the **Notes** app with the note **"Nature Walks"** (hand-lettered plant drawings: **"RED DRAGON (ACER PALMATUM 'DISSECTUM ATROPURPUREUM') SMALLISH CULTIVAR, 6–8 FT., UPRIGHT PENDULOUS GROWTH HABIT"** with a magenta plant, **"FULL MOON (ACER SHIRASAWANUM 'AUREUM') 16–20 FT., GROWS ON MULTISTEMMED…"** with a yellow maple leaf). **Full screen:** the iPad status bar "9:41 Tue Apr 1 … 100 %", the toolbar with **a shrink-arrows icon and a compose button at the leading edge**, formatting buttons in the middle, **search with a mic** at the trailing edge; the app **fills the screen with no visible border**. **Windowed:** the same note in a **rounded window centred over a beige wallpaper with the Dock at the bottom** (Messages, Safari, Music, Mail, Calendar "Tue 1", Photos, Notes, a folder); **three tiny traffic-light dots at the leading edge of the toolbar, and the toolbar buttons moved inward** (shrink-arrows, compose) **(from screenshot)**. This is the "move buttons inward" rule in a picture.
- **macOS window states diagram (screenshot):** three overlapping windows with leader labels: **Inactive window state** (a **Finder** "Documents" window in the back: **grey dots, faded toolbar and sidebar** with Favorites: Applications, Desktop, Applications, Documents, Downloads; Locations: Network, iCloud Drive), **Main window** (a **Notes** window with **coloured dots** and the plant drawing), and **Key window** (a **Colors** panel in front: **coloured dots**, a colour wheel, a slider with **"HDR Boost" 100 %**, **"Opacity" 100 %** and a swatch grid) **(from screenshot)**. **Note callout** about panels becoming key only when the title bar or a text field is clicked (grey outlined card); a **Tip callout** with a teal outline about presenting a single file without your own window **(from screenshot)**.
- **visionOS style illustrations (catalog `windows-02`):** a **blue upright rounded plane, slightly angled, with a dotted duplicate behind it and a small window bar (dot + pill) under its bottom edge** = window; a **translucent cube with dashed edges and a darker solid base, window bar under the front** = volume. Both light and dark exist; shown side by side on the page with the captions "A window" and "A volume" **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Windows · Best practices · Platform considerations · Resources · Change log; platform strip with iPhone/TV/Watch dimmed; side navigation shows **Presentation** open with **Windows** ringed then bold, and the **Selection and input** group below.
- **visionOS pictures (screenshots):** **"A window"**: the Hello World app, a wide **glass window** floating in a living room with a **sunset-coloured planet arc on its upper edge**, the title **"Hello World"** ("Discover a new way of looking at the world.") and **three columns**: Planet Earth, Objects in Orbit, The Solar System **(from screenshot)**. **"A window containing 3D content"**: a grey glass window "Our Nearby Neighbors / Objects in Orbit" with body text, a **View Orbits** button, a **satellite model standing out to the right of the window** and a **segmented pill (Satellite · Moon · Telescope)** at the bottom, i.e. depth kept modest. **"A volume"**: a **3D globe** floating above a coffee table **beside a translucent window**, with a **small four-button control pill under the globe** and a **dot + bar (window bar) at the front edge** **(from screenshot)**.
- The page has **2 catalog image sets** (`windows-01` tab pair full screen/windowed; `windows-02` window vs volume); other pictures (macOS states diagram, visionOS Hello World window and volume screenshots) are **not in the catalog**. Fetch script run; existing catalog IDs unchanged, total 151.

## Web translation
On the web the browser owns the window, so this page applies to **installed PWAs (windows and Window Controls Overlay), multi-window apps, and desktop-style shells with in-page windows**.

| HIG rule | Web implementation |
|---|---|
| Windows define boundaries and enable multitasking | Treat each **browser/PWA window** as an independent session of the same app: **shared state via `BroadcastChannel`/storage events**, deep-linkable URLs per window, no assumption that only one window exists (`multitasking.md`). |
| Adapt fluidly to any size | **Container queries** and fluid layout down to **narrow split-view widths** (CONV: usable at **320 px** wide and at **50 %** of a tablet screen), no fixed heights, `100dvh`, reflow at 200 % text (**Layout gate**); test at half-width, third-width and full screen. |
| Primary vs auxiliary windows | **Primary** = the app shell with navigation; **auxiliary** = a focused window/route (Compose, Inspector, Player, Print preview) with **no app navigation** and a **Done/Close** control; open with `window.open(url, name, "popup,width=…,height=…")` (or `launch_handler`/`openWindow` in PWAs) and **close with `window.close()`** after the task. |
| Open a new window only when it helps; offer it as an option | Default: **navigate in place**. Open a new window for **Compose alongside the message**, comparing items, a live preview. Provide **"Open in New Window"** (context menu, `File` menu, `Shift`+click) and mark such links (**`rel="noopener"`**, visually/aria-labelled "opens in a new window") (`context-menus.md`, `the-menu-bar.md`). |
| Gesture to open in a new window (iPad pinch) | Optional **drag an item out** of the list or a **"pop out" button** (`popovers.md` detach, `panels.md`); touch pinch-to-window is a platform feature: don't fake it. |
| Window controls must not overlap toolbar items (iPadOS) | In PWAs with **Window Controls Overlay** (`display_override: ["window-controls-overlay"]`) **pad the toolbar with `env(titlebar-area-x)`, `env(titlebar-area-width)` and `titlebar-area-*` insets** (or `navigator.windowControlsOverlay.getTitlebarAreaRect()`); **`-webkit-app-region: drag`** on empty toolbar areas only, `no-drag` on buttons; **move leading buttons inward** when controls appear (`toolbars.md`). |
| Remember size and placement | **Persist window geometry** (`screenX/Y`, `outerWidth/Height`, maximised) per window name in `localStorage`/IndexedDB and **restore it on next open** (PWAs restore automatically in most browsers); validate against current screen bounds (`getScreenDetails()` where available). |
| macOS: frame + body; drag frame, resize edges | For **in-page windows**: a **title bar** (drag handle with `pointerdown` + `setPointerCapture`), **edge/corner resize handles**, **double-click title bar = maximise/restore**; keyboard move/resize (`Alt`+arrows, CONV); minimum/maximum sizes; never let the frame leave the viewport (`panels.md`). |
| Window states: main / key / inactive | In a multi-window shell keep **one active (key) window**: `data-state="key\|main\|inactive"`; **key** = accent/colored title-bar controls + full-strength shadow, **inactive** = **gray controls, no backdrop blur ("no vibrancy"), lower contrast and smaller shadow** so it recedes; update on `focusin`/`pointerdown`, and for the **browser window** use `window` `focus`/`blur` + `document.hasFocus()` to dim the toolbar when the window is inactive (CONV). Contrast of controls and text still meets **≥ 4.5:1 / 3:1** in the inactive state (`color.md`). |
| Panels become key only when needed | Utility panels **don't steal focus on click of chrome**; they take focus when the **title bar** or a **text field** is used (`tabindex="-1"` + `pointerdown` logic) (`panels.md`). |
| Custom windows must use the system appearances | If you build window chrome: **match the host platform's controls** (position, colours, states) or **don't render fake traffic lights on non-Mac platforms**; prefer the **native title bar** (no custom frame) whenever possible; drop **fake OS chrome mockups** in product UI. |
| No critical content in a bottom bar | A **status bar** (footer of a pane) may show **counts/selection/free space**; **never Save/Delete/primary actions**; use an **inspector** on the trailing side (`split-views.md`, `panels.md`); mobile browsers and short windows can hide the bottom edge (`100dvh`, safe areas). |
| Use the term "window" | UI copy and help say "window" only for real windows; say **"tab"** for browser tabs and **"panel/pane"** for in-page regions (CONV); avoid "scene", "instance", "session" (`writing.md`). |
| visionOS: default window with glass, minimal empty space, initial size | Floating in-page windows and spatial-style UIs keep a **glass/translucent surface with a solid fallback** (`materials.md`), **open at a content-fitting size** (**CONV default ~ 16:9 at ≈ 1280 × 720 CSS px on desktop**, smaller on tablets; shape suited to content: wide for media, tall for documents), **min/max sizes** (`min-width`, `max-width`), and **no oversized empty areas**. |
| Minimal depth in a window; volumes for deep 3D | Keep **3D viewers inside the window bounds** (`<model-viewer>`, WebGL canvas with a clear frame); for true depth/around-the-object viewing use a **dedicated viewer or WebXR**, not deeper transforms that get clipped. |
| Volumes: face the viewer, dynamic vs fixed scaling, baseplate, ornament, alignment | For 3D previews: **controls stay screen-facing** (billboarded/HUD, not on the model), **fit-to-view zoom** (dynamic) vs **true-scale AR** for products (fixed), a **visible floor/grid or soft edge glow** so the volume's bounds are clear, **one** extra floating control group (ornament analogue) not on the same edge as the toolbar, and a **"level/tilt to view"** option (CONV). |
| Term hygiene and accessibility | Announce new windows/routes (`document.title`, `aria-live` status, focus to the new window's heading), ensure **keyboard switching between windows** (`Alt+Tab` is OS-level; in shells add `Ctrl+\`` cycling: CONV), visible focus, reduced motion for window open/close. |

Field-note cross-links:
- `hig/patterns/multitasking.md` (✓): windows, split-view widths and the frontmost-window cue; `hig/patterns/going-full-screen.md` (✓): full-screen as the alternative to a new window for media.
- `hig/components/presentation/panels.md` (✓): key-window behaviour, Window menu list, HUD panels; `sheets.md` (✓): sheets vs windows for long/complex flows; `popovers.md` (✓): detached popover → panel.
- `hig/components/menus/toolbars.md` (✓): toolbar items and window controls; `the-menu-bar.md` (✓): Window and File menu commands; `context-menus.md` (✓): "Open in New Window".
- `hig/components/layout/split-views.md` (✓): the inspector for bottom-bar overflow; `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: fluid resizing, `dvh`, 200 % text.
- `hig/foundations/spatial-layout.md` (✓) and `hig/components/menus/ornaments.md` (✓): windows/volumes, ornaments, depth; `materials.md` (✓ CRITICAL): glass and fallback; `immersive-experiences.md` (✓): Full Space.
- Not yet ingested: none linked beyond the above.
- No conflict with a field note.

## Checklist
- [ ] The app works at **any window width** (down to narrow split-view sizes), with no fixed heights; **two windows of the app can run at once**.
- [ ] **New windows are opt-in** ("Open in New Window"), not the default navigation; auxiliary windows have **one task and a Done/Close**.
- [ ] Toolbar controls are **inset from window controls** (Window Controls Overlay insets), and a drag region doesn't swallow button clicks.
- [ ] **Window size/position are restored**; sizes are validated against the current screen.
- [ ] Multi-window shells show **key / main / inactive** states (colour vs gray, no blur when inactive) and **exactly one key window**.
- [ ] Panels/utility windows **don't steal focus** except via title bar or text input.
- [ ] **No critical actions in a bottom/status bar**; extra info goes to an **inspector**.
- [ ] No custom fake OS window chrome; where custom chrome exists it **matches the host's states and behaviour**.
- [ ] UI copy says **"window"** (not "scene"); browser tabs are called tabs.
- [ ] Spatial/floating windows keep **glass with a solid fallback**, **fit their content**, have **min/max sizes**, and keep 3D **within bounds** (deeper 3D in a dedicated viewer).
- [ ] 3D previews keep controls screen-facing, show their bounds, and offer fit-to-view vs true-scale as appropriate.

## Related
- Ingested: Layout (✓ CRITICAL), Split views (✓), Multitasking (✓), Panels (✓), Sheets (✓), Popovers (✓), Toolbars (✓), The menu bar (✓), Context menus (✓), Going full screen (✓), Spatial layout (✓), Ornaments (✓), Immersive experiences (✓), Materials (✓ CRITICAL), Color (✓ CRITICAL), Writing (✓).
- Not yet ingested: none linked beyond the above.
- Developer docs: SwiftUI `Windows`, `WindowGroup`; UIKit `UIWindow`; AppKit `NSWindow`.
- Video: "Elevate the design of your iPad app" (WWDC25).
