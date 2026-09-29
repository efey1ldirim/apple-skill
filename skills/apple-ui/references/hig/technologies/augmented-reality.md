# Augmented reality
Source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality · Section: Technologies · Supported platforms: **iOS, iPadOS, visionOS** (page data; the platform text: "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, or watchOS**", plus a **visionOS** section; the Note says the detailed guidance is for **iOS and iPadOS apps**) · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data). **Link-only ingestion: one DocC fetch, read in full (182 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **60 updates per second**, **100 reference images**, **about 1 second** (delay before removing objects attached to a lost image), **about 0.5 second** (face-tracking loss), **10 %** clear space (glyph and badge), **3 distance/interaction limits** (movement on a plane, rotation on one axis), **4 friendly-wording pairs**, **3 problem → fix pairs**.

## In one line
**AR** overlays **3D objects on the live camera view** so they look present in the room. **Offer AR only on capable devices (quietly, no error otherwise), give the screen to the scene, make objects believable (real scale, surface placement, lighting, grain, shadows, 60 fps), use sound and haptics for contact, keep text minimal and in screen space, and use translucent indirect controls only when persistent controls are needed.** **Prepare people:** state requirements up front, watch comfort, introduce movement gradually, protect safety. **Coaching:** use the system coaching view (hide other UI meanwhile) for initialisation and relocalisation. **Placement:** show when a surface is found (indicator aligned to the plane), **place instantly then refine gently**, guide to off-screen objects, don't align to edges, use plane classification. **Interaction:** direct manipulation with standard gestures, **move on the surface plane, rotate about one axis**, generous touch proximity, scale only when it makes sense (never to fake distance), test similar gestures, keep motion physically believable, and consider motion and proximity as inputs. **Multiuser:** occlusion by people, implicit map merging for late joiners. **Image/object detection:** delay removal ~1 s, ≤ 100 reference images, track only what moves. **Wording:** friendly ("Unable to find a surface. Try moving to the side…"), **3D hints over text overlays**, readable text (screen space or constant size facing the viewer), tappable labels. **Interruptions:** relocalise with coaching, hide objects meanwhile, allow cancel/reset, embed non-AR tasks inside AR, flag lost face tracking (> ~0.5 s). **Problems:** always allow reset and suggest fixes for lighting, motion and texture. **Marks:** the **AR glyph and AR badges are only for ARKit experiences**, unaltered except size and colour, **10 % clear space**, one consistent corner, only when a catalogue mixes AR and non-AR items. On the web: **WebXR (`immersive-ar`), `<model-viewer>`, AR Quick Look (USDZ), DOM overlay for screen-space UI**.

## Rules

### Framing (intro)
- With **the device camera showing the physical world live**, an app **superimposes 3D virtual objects, creating the illusion they exist**. Depending on the platform and experience, people **reorient the device to view objects from different angles, use gestures and movement to interact, and join other people in multiuser AR** (developer: ARKit).
- **should** **Offer AR features only on capable devices.** If **AR is the app's main purpose**, **make the app available only to ARKit-capable devices**. If **AR features need specific capabilities or are optional**, **don't show an error on an unsupported device**: **simply don't offer the feature** (developer: "Verifying Device Support and User Permission").
- **Note:** the guidance below is for **iOS and iPadOS**; for visionOS see ARKit's developer documentation (and the visionOS section).

### Best practices
- **should** **Let people use the entire display.** **As much of the screen as possible for the physical world and virtual objects**; **avoid clutter** from controls and information.
- **should** **Strive for convincing illusions when placing realistic objects.** **Detailed 3D assets with lifelike textures**; with ARKit information **scale objects properly**, **place them on detected surfaces**, **reflect the environment's lighting and simulate camera grain**, **cast top-down diffuse shadows on real surfaces**, and **update visuals as the camera moves**. **Update the scene 60 times per second** so objects don't jump or flicker.
- **should** **Mind reflective surfaces.** **Reflections in ARKit are approximations from the camera's view**; **prefer small or coarse reflective surfaces** that downplay the approximation.
- **should** **Use audio and haptics to enhance immersion:** a **sound or a bump confirms that a virtual object touched a physical surface or another virtual object**; **background music can envelop people** (→ Playing audio, Playing haptics).
- **should** **Minimise text in the environment**: **only what the experience needs**.
- **may** **Put extra information or controls in screen space.** **Screen-space content stays at a consistent location** (in the virtual world or, less commonly, on the device screen), so it is **easy to find while the AR environment moves with the device**.
- **should** **Use indirect controls for persistent controls.** **Indirect controls are 2D controls in screen space, not part of the virtual environment.** Place them so **people needn't change how they hold the device**, and **consider translucency so they don't block the scene**. Example: **the Measure app uses a mix of translucent and opaque screen-space controls**. (A screenshot: **Measure on iPhone with a bunch of carrots and a line across one carrot reading four and a half inches**.)
- **should** **Anticipate varied environments:** **little room to move, no large flat surfaces**. **State requirements and expectations up front** and consider **different feature sets for different environments**.
- **should** **Mind comfort.** **Holding a device at some distance or angle for long is tiring**: **place objects at a distance that reduces moving the device closer**; **in a game keep levels short with brief downtime**.
- **should** **Introduce movement gradually** if the app encourages movement (e.g. **don't make people dodge projectiles the moment they enter**; give time to adapt, then encourage movement progressively).
- **should** **Mind safety.** Immersed people **aren't necessarily aware of their surroundings**: **rapid, sweeping or expansive motions can be dangerous**; make the app **safe to operate** (e.g. **a game avoids large or sudden movements**).

### Providing coaching
- Before enjoying AR, people **move the device so ARKit can evaluate the surroundings and detect surfaces**. **Use the built-in coaching view** to show what to do and **give feedback during initialisation**; also to **relocalise** after an interruption (developer: `ARCoachingOverlayView`; see *Handling interruptions*). (An illustration: **a room corner through the camera with a translucent overlay: a white rounded square (surface-detection indicator) projected into the 3D space, a small iPhone scanning back and forth along its base, and a circle of dots trailing the phone**.)
- **should** **Hide unnecessary app UI during the coaching view.** By default it **appears automatically when initialisation or relocalisation starts**; be ready to **hide unrelated UI** so people focus on the instructions.
- **may** **Offer a custom coaching experience** if you need **extra information or a different style** (e.g. beyond **horizontal or vertical plane detection**); **use the system coaching view as a reference**.

### Helping people place objects
- **should** **Show when to find a surface and place an object.** The **coaching view can help find a horizontal or vertical flat surface**; once ARKit detects one, **display a custom indicator showing that placement is possible**, **aligned with the detected surface's plane** so people see how the object will look. (An illustration: **an app-specific indicator: a circle with centre and diameter markers inside right-angle shapes framing a square, in 3D perspective**.)
- **should** **Integrate the object into the environment immediately on placement.** **Don't wait for more accurate data**: **respond instantly with what's available, then subtly refine the position when detection completes** (e.g. **gently nudge an object placed beyond the detected surface back onto it**) (developer: `ARTrackedRaycast`).
- **may** **Guide people toward off-screen objects** with **visual or audible cues**, e.g. **an indicator along the left screen edge when the object is off to the left**.
- **should** **Avoid aligning objects precisely with detected surface edges**: **boundaries are approximations that change** as the surroundings are analysed.
- **should** **Use plane classification** to place objects: e.g. **furniture only on a plane classified "floor"**, **a game board only on "table"**.

### Designing object interactions
- **should** **Prefer direct manipulation.** **Touching 3D objects on screen is more immersive and intuitive than screen-space controls**, but **when people move around, indirect controls can work better**. (Illustrations: **a hand with a fingertip on a cube and a curved line showing movement to the right**; **a cube with two buttons below it, each with a circular arrow pointing opposite ways, for indirect rotation**.)
- **should** **Use standard, familiar gestures on objects:** e.g. **a single-finger drag to move, a two-finger rotation to spin** (→ Gestures).
- **should** **Keep interactions simple** (touch is 2D, AR is 3D): **limit movement to the 2D surface the object rests on** (an illustration: a sphere on a grid with two perpendicular lines parallel to the grid, arrows at the tips) and **limit rotation to a single axis** (an illustration: a sphere with a vertical dotted line and an arrow wrapping around it left to right).
- **should** **Respond to gestures within reasonable proximity of interactive objects.** **Small, thin or distant objects are hard to hit precisely**; **assume a gesture near an interactive object is meant for it**.
- **should** **Let people scale objects only when it fits the app.** **An imaginary environment: yes** (it needn't represent the real world); **a furniture-shopping app: no** (scaling a chair doesn't show how it looks in a room).
- **Tip:** **never use scaling to change an object's apparent distance**: **enlarging a distant object gives a larger object that still looks far away**.
- **should** **Be wary of conflicting gestures.** **Two-finger pinch resembles two-finger rotation**; if both exist, **test that they're interpreted correctly**.
- **should** **Keep object movement consistent with the AR environment's physics.** People don't expect smooth motion over rough surfaces, but **do expect objects to stay visible**; **keep moving objects attached to real surfaces and avoid objects jumping or vanishing and reappearing** while resizing, rotating or moving.
- **may** **Explore other interaction methods** such as **motion and proximity** (e.g. **a game character turns its head to look at a person walking toward it**).

### Offering a multiuser experience
- When several people share the AR experience, **each participant maps the environment independently and ARKit automatically merges the maps** (developer: `isCollaborationEnabled`).
- **may** **Allow occlusion by people**: if the app places virtual objects **behind people in the camera feed**, **let the people occlude the objects** to strengthen the illusion (developer: "Occluding virtual content with people").
- **should** **Let new participants join an ongoing experience when possible.** Unless **everyone must join before it starts**, use **implicit map merging** so people can **quickly join**.

### Reacting to real-world objects
- **Known images and objects can trigger virtual content**: e.g. **theatre posters for a sci-fi film make virtual spaceships fly out**; **an art-museum app shows a virtual tour guide when it recognises a sculpture**. The app supplies **2D reference images or 3D reference objects**, and **ARKit reports when and where it detects them** (developer: "Detecting Images in an AR Experience").
- **should** **When a detected image first disappears, delay removing attached virtual objects.** **ARKit doesn't track changes to each detected image's position or orientation**; **wait up to about one second before fading out or removing** to avoid flicker.
- **should** **Limit the number of reference images in use.** Detection works best with **100 or fewer distinct images**; **beyond that, change the active set by context** (e.g. a museum app **uses location (with permission) to look only for images in the visitor's area**).
- **should** **Limit reference images that need an accurate position.** **Updating an image's position costs more**; use **a tracked image when it may move or when the attached animation or object is small relative to the image**.

### Communicating with people
- **should** **Use approachable terms in instructional text.** AR can intimidate; **avoid technical terms like ARKit, world detection, tracking**. Do / Don't:
| Do | Don't |
|---|---|
| Unable to find a surface. Try moving to the side or repositioning your phone. | Unable to find a plane. Adjust tracking. |
| Tap a location to place the [name of object]. | Tap a plane to anchor an object. |
| Try turning on more lights and moving around. | Insufficient features. |
| Try moving your phone more slowly. | Excessive motion detected. |
- **should** **Prefer 3D hints in a 3D context**: e.g. **a 3D rotation indicator around an object beats text instructions in a 2D overlay**; **avoid textual overlay hints in 3D unless people don't respond to contextual hints**. (Illustrations: ✓ **a cube on a grid, its active side outlined in blue, arrows circling it to the right**; if needed **a cube with the word "Rotate" beneath**.)
- **should** **Make important text readable.** **Screen space for critical labels, annotations and instructions**; **text in 3D space must face people and keep the same type size regardless of distance to the labelled object**.
- **should** **Offer a way to get more information:** **a visual indicator that says people can tap**. (Illustrations: **an iPhone in landscape showing a room with a desk and a chair, each with a label attached by a vertical line and ending in a greater-than sign**; **a full-screen detail view of the chair: image left, a vertical separator, model number, price and size on the right**.)

### Handling interruptions
- **ARKit can't track device position and orientation during an interruption** (switching apps, a phone call); **afterwards placed objects are likely misplaced**. **With relocalisation supported, ARKit tries to restore the objects' real-world positions** (developer: "Managing Session Life Cycle and Tracking Quality").
- **should** **Consider the coaching view for relocalisation**: it helps **return the device to its previous position and orientation**. (The illustration repeats the coaching overlay.)
- **should** **Consider hiding placed objects during relocalisation** and **redisplaying them at their new positions** to avoid flicker.
- **should** **Minimise interruptions if the app has AR and non-AR experiences**: **embed the non-AR task in the AR experience** (e.g. **change upholstery without leaving AR**).
- **should** **Allow people to cancel relocalisation.** If the device isn't near its previous position, **relocalisation continues indefinitely**; **offer a reset button or another way to restart**.
- **should** **Indicate when the front camera can't track a face for more than about half a second**, with **a visual indicator**; **minimal text** if needed.

### Suggesting problem resolutions
- **should** **Let people reset the experience** if it doesn't meet expectations: **don't force them to wait for better conditions or struggle with placement**.
- (Illustrations: **a brightly lit office corner with a desk and chair (sufficient lighting)** vs **a dark one (insufficient lighting)**.)
- **should** **Suggest possible fixes** when analysis or surface detection **fails or takes too long** (**insufficient light, a very reflective surface, a surface with too little detail, too much camera motion**), **in straightforward, friendly language**:
| Problem | Suggestion |
|---|---|
| Insufficient features detected | Try turning on more lights and moving around |
| Excessive motion detected | Try moving your phone slower |
| Surface detection takes too long | Try moving around, turning on more lights, and making sure your phone is pointed at a sufficiently textured surface |

### Icons and badges
- Apps can show an **AR icon (glyph)** in **controls that launch ARKit-based experiences**, downloadable from Apple's resources. (Images: **the AR glyph** and **a button with the glyph and "View in AR"**.)
- **must** **Use the AR glyph as intended:** **only to start an ARKit-based experience**; **never alter it (other than size and colour), use it for other purposes, or use it with AR experiences not built with ARKit.**
- **must** **Keep minimum clear space of 10 % of the glyph's height**; **nothing may infringe or occlude it**. (An illustration: **the glyph centred in a frame showing the clear space**.)
- **AR badges** identify **items in a collection that can be viewed in AR using ARKit** (e.g. **a vintage-collectibles app marks items people can preview at home before buying**; an illustration: **four grey squares with a robot and three rocket ships, each with an AR badge in its upper-left corner**). Two forms: **AR badge (glyph + "AR")** and **glyph-only badge**.
- **must** **Use the badges as intended, unaltered:** **only to identify products or objects viewable in AR through ARKit**; **never alter them, change their colour, use them for other purposes or with non-ARKit AR.**
- **should** **Prefer the AR badge to the glyph-only badge**; **use the glyph-only badge in constrained spaces**; **both work at their default size**.
- **should** **Use badging only when the app mixes AR-capable and non-AR items**; **if all can be viewed in AR, badging is redundant.**
- **should** **Keep badge placement consistent and clear:** **in one corner of the object's photo, always the same corner**, **large enough to see but not hiding important detail**.
- **must** **Maintain minimum clear space of 10 % of the badge's height** (an illustration for each badge form with a surrounding frame).

### Platform considerations
- **iOS, iPadOS:** no additional considerations (the rules above). **macOS, tvOS, watchOS:** not supported.

#### visionOS
- **With the wearer's permission**, ARKit in a visionOS app can **detect surfaces around a person**, use **hand and finger positions to inform custom gestures**, and **support interactions that bring nearby physical objects into an immersive experience** (developer: ARKit; links to Privacy (visionOS), custom gestures and Immersive experiences). (A recording shows **a 3D model of a meteor rotating above a physical table**.)

## Specs & values
| Item | Value |
|---|---|
| Frame rate | scene updates **60 per second** |
| Reference images | ≤ **100** distinct at a time; use tracked images only when they move or the attached content is small |
| Image loss delay | wait up to **~1 s** before fading out or removing attached objects |
| Face tracking loss | show an indicator after **more than ~0.5 s** |
| Movement / rotation | move on the **2D surface** the object rests on; rotate about **one axis**; scale only when sensible; never scale to change distance |
| Text | screen space for critical text; 3D text faces the viewer at a **constant type size** whatever the distance |
| AR glyph / badge | ARKit experiences only; unaltered (size and colour aside); clear space **10 % of height**; badge preferred to glyph-only; one consistent corner |
| Friendly wording | 4 do/don't pairs and 3 problem → suggestion pairs (tables above) |
| Requirements | ARKit-capable devices; permission; camera; good light; textured, flat surfaces |
| Developer docs | **ARKit** · `ARCoachingOverlayView` · `ARTrackedRaycast` · `isCollaborationEnabled` · "Verifying Device Support and User Permission" · "Occluding virtual content with people" · "Detecting Images in an AR Experience" · "Managing Session Life Cycle and Tracking Quality" |
| Videos (links only, not watched) | Qualities of great AR experiences (WWDC22 10131) · Explore ARKit 5 (WWDC21 10073) |
| Apple's Related list | Playing haptics (✓) · Gestures (✓) · Apple Design Resources |
| Change log | none on the page |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of an **AR icon** over grid lines, **tinted blue** (alt).
- **Measure screenshot:** carrots with a measurement line, **4½ inches**.
- **Coaching overlay illustration** (used twice): a **room corner with the translucent surface-detection indicator (white rounded square) and a scanning phone with a dotted circle trail**.
- **Placement indicator:** a **circle with centre and diameter markers inside right-angle frame shapes, in perspective**.
- **Interaction illustrations (catalog `augmented-reality-01`, `-02`):** **direct manipulation** vs **indirect controls (two rotate buttons)**; **plane movement** and **single-axis rotation** spheres.
- **Hints (catalog `-03`):** **3D hint** (arrows circling a cube) vs **2D hint (the word "Rotate" under the cube)**.
- **Labels and detail view:** an iPhone landscape scene with **desk and chair labels ending in ">"**, and the **detail view**.
- **Lighting (catalog `-04`, light only):** **sufficiently lit** vs **dark** office corner.
- **Marks (catalog `-05`, `-06`, `-07`):** the **AR glyph** and **"View in AR" button**; the **AR badge** and **glyph-only badge**; each with a **clear-space frame**; **badge grid** of four toy photos.
- **visionOS recording:** a **meteor model rotating above a real table**.
- **Mismatches / notes:**
  1. **The page is written for iOS and iPadOS**, but the **platform data and the closing section add visionOS**, where the guidance is a **single paragraph** plus links; the **detailed visionOS AR guidance lives in ARKit documentation and in Immersive experiences/Gestures**.
  2. **The reference-image limit (100) and the timings (1 s, 0.5 s)** are **performance recommendations from ARKit's behaviour**, not UI values.
  3. **"Consider" and "avoid" wording dominates**; only the **glyph and badge rules** ("never alter", "only for ARKit") are absolute.
  4. **The coaching illustration is used twice** (once under *Providing coaching*, once under *Handling interruptions* with a differently named file), so **the interruption section has no unique picture**.
  5. **The AR glyph button example says "View in AR"**, while the page lists **no other approved button labels**.
  6. **The friendly-wording table pairs** show **"plane"** and **"anchor"** as jargon to avoid, though the **developer documentation** uses those terms.
- **Catalog:** the script found **7 comparisons** (below). **Not catalogued:** the hero, the Measure screenshot, the placement indicator, the coaching overlay, the labels/detail-view pair (a landscape phone pair) and the badge grid. Catalog total **250** (was 243); the 243 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **augmented-reality-01 … augmented-reality-07** (all neutral pairs):
- **-01** (light + dark): **direct manipulation** vs **indirect controls**.
- **-02** (light + dark): **move on the resting plane** vs **rotate around one axis**.
- **-03** (light + dark): **3D hint** vs **2D hint** in a 3D context.
- **-04** (light only): **sufficient** vs **insufficient lighting**.
- **-05** (light + dark): the **AR glyph** and the **"View in AR" button**.
- **-06** (light + dark): the **AR badge** vs the **glyph-only badge**.
- **-07** (light + dark): **clear-space frames** around both badges.
The script reports **7 comparisons** for this page.

## Web translation
The web can do AR through **WebXR (`immersive-ar` sessions)**, **`<model-viewer>`**, and **AR Quick Look on iOS (USDZ)**. **The design rules carry over almost unchanged**; **ARKit-specific APIs and the AR glyph/badge assets do not**. Support statements are background knowledge, not from the page; **WebXR AR support on iPhone and iPad is limited or absent in Safari; verify per browser and OS**.

| HIG rule | Web implementation |
|---|---|
| Offer AR only on capable devices; no error otherwise | **Feature-detect** `navigator.xr?.isSessionSupported("immersive-ar")`; for **`<model-viewer>`** read **`ar-status`/`canActivateAR`**; for **iOS AR Quick Look** test `document.createElement("a").relList.supports("ar")`. **Hide or omit the AR button when unsupported** (no error toast); if **AR is the product's core**, **say so on the landing page and gate by device**. |
| Entire display; minimal clutter | **Full-viewport canvas** in the session; **only essential DOM**; **no persistent chrome**. |
| Convincing illusion (scale, surfaces, light, shadows, 60 fps) | **Real-world scale (metres)**, **`hit-test` for surfaces**, **`light-estimation` (`XRLightProbe`)** for lighting, **contact shadows (`<model-viewer shadow-intensity>` or a shadow-catcher plane)**, **render at the display rate (`XRSession.requestAnimationFrame`, 60 fps target; optimise polygons and textures)**; **glTF/GLB with PBR textures**. |
| Reflective surfaces coarse | **Rough/low-reflectance materials**, **environment map from the light probe**, **avoid mirror-like shiny objects**. |
| Sound and haptics on contact | **Web Audio (spatial `PannerNode`)** after a gesture; **`navigator.vibrate`** (Android only; **never required**; `playing-haptics.md`); **visual contact cue** as a fallback. |
| Minimise text; screen space for extra info | **DOM overlay** (`optionalFeatures: ["dom-overlay"]`, `domOverlay: {root}`): **2D HUD/labels in screen space** over the camera; **3D labels as camera-facing billboards with constant apparent size** (scale by distance). |
| Indirect controls: reachable, translucent | **Bottom-of-screen translucent bars** (`backdrop-filter`, reduced opacity), **thumb-reachable** (`env(safe-area-inset-*)`), **doesn't cover the placement area**; **≥ 44 px targets** (`buttons.md`). |
| Varied environments; state requirements up front | **Pre-flight screen: "Needs a flat surface and good light, about 2 m of space"**; **alternate 3D viewer (no camera)** for cramped spaces. |
| Comfort, gradual movement, safety | **Short sessions and breaks**, **objects placed at arm's length or closer via placement**, **no sudden large-motion prompts**; **safety notice** ("Be aware of your surroundings") before immersive play. |
| Coaching (initialisation, relocalisation) | **Custom coaching overlay** ("Move your phone slowly to scan the floor") with an **animated hint**; **hide unrelated UI while `XRSession` has no tracked planes/hit results**; **`reducedMotion` → static hint**; **there's no system coaching view on the web**. |
| Show when placement is possible; align indicator to the plane | **Reticle** (a ring aligned to the hit-test pose's orientation) shown **only when a hit exists**; **press/tap (`select`) places**. |
| Place immediately, refine later | **Place at the first hit pose on `select`**; **`XRAnchor`** (`anchors` feature) to **keep it attached**, **ease toward the refined pose (lerp)** rather than snapping. |
| Off-screen object cues | **Edge arrow / HUD indicator** toward the object (project to screen, clamp to the edge), optional **spatial audio ping**. |
| Don't align to surface edges; plane classification | **`plane-detection` (`XRPlane.semanticLabel`: "floor", "table", "wall")** where supported; **restrict placement by label**; **don't snap to plane polygons**. |
| Direct manipulation; standard gestures; keep it simple | **Pointer/touch on the model**: **one-finger drag = translate on the plane** (raycast to the plane), **two-finger twist = rotate about the vertical axis**, **pinch = scale only when appropriate**; **two-finger pinch vs rotate** disambiguated by **thresholds and by locking the first recognised gesture** (`gestures.md`). |
| Proximity for touch | **Larger invisible hit volumes** (a bounding sphere/capsule scaled to ≥ 44 px screen size) so a **near-miss counts**. |
| Scaling rules | **Scale off for real-world-size product previews**; **on for imaginary scenes**; **never use scale to change distance**. |
| Physics-consistent movement; stay attached | **Constrain to the plane, keep the object visible, no teleporting**; **smooth (lerp/slerp) movement**. |
| Other interactions: motion, proximity | **Distance triggers** (`camera.position` vs object) and **gaze/orientation cues** for characters. |
| Multiuser | **WebRTC/WebSocket sharing of anchors (cloud anchors are platform-specific)** or **shared session via QR alignment**; **occlusion by people** needs **`depth-sensing`/person segmentation** (limited; **verify**); **late joiners** get **state snapshots**. |
| Reference images / objects | **`image-tracking` (WebXR image tracking, limited)** or **marker libraries (AR.js/MindAR)**; **≤ 100 active markers**, **swap sets by context** (location with permission); **keep content ~1 s after image loss** before fading. |
| Friendly wording | **Copy deck:** "Unable to find a surface. Try moving to the side or repositioning your phone." / "Tap a location to place the [object]." / "Try turning on more lights and moving around." / "Try moving your phone more slowly."; **never "plane", "anchor", "tracking", "features"** (`writing.md`). |
| 3D hints over 2D text | **3D rotation ring/arrows around the model** (mesh or sprite) **with a text fallback** for accessibility (`aria-live` announcements of state: "Surface found", "Model placed"). |
| Readable important text | **Screen-space DOM labels**; **3D text as camera-facing sprites at constant on-screen size**. |
| Tappable labels for more info | **Label ends with "›"**, **tap opens a detail sheet/page** (`sheets.md`). |
| Interruptions and relocalisation | **`XRSession` `visibilitychange` / `end` events**: **on `visibilityState` "hidden" pause; on return "relocalising" overlay**, **hide objects until tracking resumes (`XRFrame.getViewerPose` non-null / `emulatedPosition` false)**, **offer "Reset"**; **embed non-AR tasks (colour/variant pickers) in the DOM overlay** so **AR isn't exited**. |
| Face tracking lost > 0.5 s | **Show a "face not detected" indicator after 500 ms** (**timer**), minimal text (**face tracking is not in WebXR; use MediaPipe/Face Landmarker, background, verify**). |
| Reset the experience | **Always-visible "Reset" button** (**removes anchors, restarts hit-test**). |
| Problem suggestions | **Map failures to tips** (low light → "Try turning on more lights"; fast motion → "Move your phone slower"; slow surface detection → "Move around and point at a textured surface"). |
| AR glyph and badges | **ARKit-only marks**: **use Apple's AR glyph/badge only when the experience runs on ARKit, i.e. AR Quick Look on Apple devices**; **for WebXR/`model-viewer` on other platforms use a generic icon (Lucide `box`/`scan` or Phosphor `cube`)**, **never SF Symbols artwork** and **never Apple's glyph for non-ARKit AR**. Where the Apple assets are used: **unaltered (size and colour only), 10 % clear space, one consistent corner of the product photo, badge preferred over glyph-only, only when the catalogue mixes AR and non-AR items**, with an **accessible name ("View in AR")**. |
| Quick Look launch | **`<a rel="ar" href="model.usdz"><img src="thumb.jpg" alt="View in AR"></a>`** (iOS/iPadOS Safari; background). |
| Privacy | **Camera and motion/XR permission on user action**, **explain why next to the trigger**, **no frames uploaded without consent** (`privacy.md`). |
| visionOS | **WebXR immersive sessions on visionOS Safari** (background; **verify**) with **hand tracking permission**; keep **one code path** (`gestures.md`, `immersive-experiences.md`). |
| Native-only | **ARKit** (world tracking, plane classification, `ARCoachingOverlayView`, `ARTrackedRaycast`, collaboration, people occlusion, image/object detection, face tracking), **RealityKit/SceneKit**, **the AR glyph and badges** are native/Apple assets; the web has **WebXR, `<model-viewer>`, AR Quick Look**. |

Field-note cross-links:
- `field-notes/*`: **no AR recipe**; nothing conflicts.
- `hig/inputs/gestures.md` (✓): **Apple's Related page** (standard gestures, custom gestures in visionOS, hand-data permission, comfort); `hig/patterns/playing-haptics.md` (✓): **the haptic side of contact feedback**; `hig/patterns/playing-audio.md` (✓): **audio for immersion**; `hig/foundations/privacy.md` (✓): **camera and hand-data permissions**; `hig/foundations/immersive-experiences.md` (✓): **immersive visionOS design and comfort**; `hig/foundations/spatial-layout.md` (✓): **visionOS depth, scale and comfort**; `hig/foundations/motion.md` (✓): **gradual motion, comfort**; `hig/patterns/onboarding.md` (✓): **preparing people, requirements up front**; `hig/patterns/feedback.md` (✓ CRITICAL): **immediate feedback and friendly problem messages**; `hig/patterns/offering-help.md` (✓): **coaching/tips**; `hig/foundations/writing.md` (✓): **approachable wording**; `hig/foundations/accessibility.md` (✓): **non-visual alternatives and reduced motion**; `hig/technologies/app-clips.md` (✓): **AR content from codes at a museum**; `hig/inputs/nearby-interactions.md` (✓): **distance and direction cues, obstruction tips**.
- Not yet ingested (linked from this page): none (Apple Design Resources is external).

## Checklist
- [ ] **AR is offered only where supported** (feature-detected); **no error on unsupported devices**.
- [ ] **The camera view fills the screen**; **UI is minimal**; **critical text is in screen space or constant-size and camera-facing**.
- [ ] **Objects have real-world scale, sit on detected surfaces, respond to light, cast contact shadows and render at ~60 fps.**
- [ ] **Sound (and haptics where available) confirm contact**; **nothing depends on audio or vibration alone.**
- [ ] **Requirements (space, light, flat surface) are stated before entering AR**; **comfort and safety guidance** is shown for movement-heavy experiences.
- [ ] **Coaching guides initialisation and relocalisation, other UI hides meanwhile**; **a placement reticle appears only when placement is possible**; **placement is instant, refinement gentle**.
- [ ] **Interactions**: **direct manipulation with standard gestures; drag on the plane; rotate on one axis; scaling only when meaningful; near-miss taps count; pinch/rotate tested.**
- [ ] **Off-screen objects have edge cues; plane classification limits placement; no snapping to plane edges.**
- [ ] **Copy is friendly** (no "plane", "anchor", "tracking"); **3D hints preferred to 2D text**; **tappable labels lead to details.**
- [ ] **Interruptions**: **objects hide during relocalisation**, **cancel/reset is available**, **non-AR tasks stay inside AR**; **face-tracking loss shows an indicator after ~0.5 s.**
- [ ] **Problem suggestions cover low light, fast motion and slow detection; Reset is always available.**
- [ ] **Image tracking** keeps content ~1 s after loss, **uses ≤ 100 markers**, **tracks only what moves**.
- [ ] **AR glyph/badge** used **only for ARKit (AR Quick Look) experiences**, **unaltered, 10 % clear space, consistent corner**; **generic web icons otherwise**.
- [ ] **Camera/motion permissions are explained next to the trigger and requested from a user action.**

## Related
- Ingested: Gestures (✓), Playing haptics (✓), Playing audio (✓), Privacy (✓), Immersive experiences (✓), Spatial layout (✓), Motion (✓), Onboarding (✓), Feedback (✓ CRITICAL), Offering help (✓), Writing (✓), Accessibility (✓), App Clips (✓), Nearby interactions (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: ARKit (and its guides, see Specs).
- Videos: Qualities of great AR experiences (WWDC22 10131), Explore ARKit 5 (WWDC21 10073).
