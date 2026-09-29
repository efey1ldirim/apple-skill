# Playing video
Source: https://developer.apple.com/design/human-interface-guidelines/playing-video · Section: Patterns · Supported platforms: all six on the platform strip (system players on iOS, iPadOS, macOS, tvOS, visionOS; watchOS has its own clip rules) · Ingested: 2026-09-28 · Apple last updated: 2023-09-12. Change log: 2023-06-21 visionOS guidance · 2023-09-12 corrected the recommended thumbnail width in visionOS. One DocC fetch, read in full. 11 screenshots (dark-mode page, hero → Videos) were compared with the fetched text, captions and image alt texts line by line: everything matches; the eleven screenshots are contiguous and show both tabs. **The change-log rows were read from the fetch only** (the last screenshot ends at the Change log heading). Text that exists only in the illustrations or thumbnails is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Use the **system player** (or copy its behaviour exactly), **never bake letterbox/pillarbox padding into the video**, start playback the moment people ask for it, resume without asking, keep audio from mixing, and respect each platform's limits (TV app hand-off, tvOS overlays, visionOS comfort, watchOS clip size).

## Rules

### Framing (intro)
- The system provides **video players** to embed playback in **iOS, iPadOS, macOS, tvOS and visionOS**. Content can also be offered through the **TV app** on these platforms for a consistent viewing experience.
- System players support **aspect-ratio playback modes** and, on most platforms, **Picture in Picture (PiP)**. People can switch modes during playback; by default the system picks one from the video's **aspect ratio**:
  - **Full-screen / aspect-fill**: the video **scales to fill the display**, and some **edge cropping** may occur. Default for **wide video, 2:1 through 2.40:1** (`resizeAspectFill`).
  - **Fit-to-screen / aspect**: the **whole video is visible**, with **letterboxing or pillarboxing** as needed. Default for **standard video (4:3, 16:9, anything up to 2:1)** and **ultrawide (above 2.40:1)** (`resizeAspect`).
- **visionOS and tvOS:** the built-in player adds **transport controls** (turn on subtitles, change audio language, add a show to a library, favourite a clip) and, below them, **content tabs** such as **Info, Episodes, Chapters** for supporting information and navigation. In **visionOS** the transport controls appear as an **ornament**.

### Best practices
- **should** **Use the system video player** for a familiar, convenient experience: consistent interactions that let people focus on the content.
  - If the app truly needs a **custom player**, copy the **behaviour and interface of the system player**. A custom player that differs slightly causes frustration because people don't know **which habitual interactions still work**.
- **must** **Always display video at its original aspect ratio.**
  - **Embedded letterbox/pillarbox padding** in the video frame stops the system from scaling correctly for the current mode: the video looks **smaller** in both full-screen and fit-to-screen, and it can't display correctly **edge to edge** in non-full-screen contexts such as **PiP on iPad**.
  - (Visuals **playing-video-01/-02**, on iPhone Xs in landscape; legend: blue = AVKit safe area, purple = video, pink = embedded padding.)
    - ✓ 4:3 video **without** padding in full-screen mode: per Apple's description the video area overlays the safe area and **extends beyond it on all sides**.
    - ✗ 4:3 video **with embedded pillarboxes** (pink bars attached left and right, reaching the device edges): the video area now extends beyond the safe area **only at the top and bottom**, so the actual picture is narrower.
    - ✓ 21:9 video without padding in fit-to-screen mode: the video area overlays the safe area and reaches the top and bottom edges of the device.
    - ✗ 21:9 video **with embedded letterboxes** (pink bars above and below): video plus bars reach the top and bottom of the device but **not the left and right edges of the safe area**, so the real picture is smaller.
- **may** **Provide additional information when it adds value.** On iOS, iPadOS, tvOS and visionOS you can supply an **image, title, description** and other useful information; keep it from **obscuring playback** (`externalMetadata`).
- **must** **Support the interactions people expect, whatever input device controls playback.** Example: **Space** plays/pauses on a connected keyboard on Vision Pro, Mac, iPhone, iPad and Apple TV; on Apple TV people move through media with familiar **Siri Remote** gestures (Apple links Keyboards and Remotes, not yet ingested).
- **may** **In a tvOS app, consider a transport control or a custom content tab** for playback options or content-specific information.
  - People open these **while watching**, so offer **only the most useful actions and information**; make actions take **a step or two** and content **succinct**, so they get back to viewing quickly.
  - Use a **transport control** for a playback-related action such as **favouriting**; use **content tabs** for supplementary information or recommendations.
- **must** **Avoid letting audio from different sources mix as viewers switch between modes.**
  - Mixed audio is unpleasant and happens when a source **fails to handle secondary audio correctly**.
  - Scenario: a full-screen video is moved to **PiP**, where the system **mutes** it; in the full-screen window the viewer starts a **game with background music**; then they switch to the PiP window and **unmute** the video; if the game doesn't handle secondary audio, **both play** (`silenceSecondaryAudioHintNotification`).

### Integrating with the TV app
- The **TV app** gives system-wide access to favourite, recently played and recommended video. When people start playback in your app, **the TV app opens your app and transitions to it**.
- **should** **Ensure a smooth transition.** The TV app **fades to black** when handing over and **doesn't show your launch screen**. Keep continuity: **immediately present your own black screen** before starting or resuming content.
- **must** **Show the expected content immediately.** Jump from your black screen into content. **No splash screens, detail screens, intro animations or other barriers.** In rare cases where an **interstitial** is unavoidable, people can press **Select to step through it** or **Play to skip it** and start playback.
- **must not** **Ask people whether to resume.** If playback can resume, **do it automatically**.
- **should** **Play/pause on Space** from a connected **Bluetooth keyboard** (expected regardless of keyboard).
- **should** **Play for the correct viewer.** If the app has **multiple user profiles**, the TV app can name a profile in the playback request; **switch to that profile automatically before playing**. If none is named, **ask the viewer to choose one before playback** so the information is available later.
- **should** **Use the previous end time when resuming a long clip** so people continue where they left off.
- **Loading content:**
  - **should** **Avoid loading screens when possible.** If loading takes **more than two seconds**, consider a **black loading screen with a centred activity spinner and nothing around it**.
  - **should** **Start playback immediately**: keep the loading screen only until **enough content loads to begin**; continue loading the rest **in the background**.
  - **should** **Minimise loading-screen content.** If you add branding or images, do it **minimally** and keep the **black background** for a seamless transition.
- **Exiting playback:** people **stay in your app** (they don't return to the TV app), so avoid disorientation.
  - **should** **Show a contextually relevant screen**: a **detail view** for what they were watching **with an option to resume**; if there is none, a **menu listing that content** or the app's **main menu**.
  - **should** **Be prepared for an immediate exit**: prepare the exit view **as soon as you receive the playback notification**, in case people exit right after playback starts.

### Platform considerations
- **iOS, iPadOS, macOS:** no additional considerations.
#### tvOS
- **should** **Defer to content when showing logos or noninteractive overlays above video.**
  - A **small, unobtrusive logo or countdown timer** may fit; avoid **large, distracting overlays** that don't improve viewing.
  - Some displays are prone to **image retention**: keep overlays **short** and prefer **translucent graphics in SDR** to **bright, opaque** content.
- **should** **Show interactive overlays gracefully** (quizzes, surveys, progress check-ins): a **minimum delay of 0.5 seconds** before pausing the media and showing the overlay; give a **clear way to dismiss it and resume**.
#### visionOS
- **should** **Help people stay comfortable.** Often the app doesn't control the video's content; still:
  - let people **choose when to start** playing;
  - use a **small window** for playback and let people **resize** it;
  - make sure people **can see their surroundings** during playback.
- **should** **In a fully immersive experience, don't let virtual content cover playback or transport controls.** The system places the player at a **predictable location** with the optimal view; use that location so nothing occludes the **default controls in the ornament near the bottom** of the player.
- **must not** **Auto-start a fully immersive video playback.** People need control; being launched into fully immersive video without warning is unwelcome.
- **may** **Create a thumbnail track to support scrubbing.** The system shows **thumbnails while people scrub**. For performance, supply a set where **each thumbnail is 160 px wide** (HLS *Trick Play*; the page's 2023 correction changed this width).
- **should** **Don't expand an inline video player to fill a window.** In a window, the system player's controls sit **in the same plane** as the player, **not in a floating ornament**. Inline video should be **2D** and window content should stay visible around it so people **don't expect a more immersive playback** (`AVPlayerViewController`).
- **may** **Use a RealityKit video player for splash or transitional views.** People expect such video to **lead into the next experience**, so it needs **no controls or system integration** (dimming, view anchoring). It uses the **right aspect ratio for 2D and 3D** video, supports **closed captions**, and can play video as a **special effect on a custom view or object** (RealityKit).
#### watchOS
- The system manages video playback. Apps play **short clips while the app is active in the foreground**: **inline** with a movie element, or in a **separate interface** (`VideoPlayer`).
- **should** **Keep clips short: no longer than 30 seconds.** Long clips use more disk and make people **keep their wrists raised**, which causes **fatigue**.
- **should** **Use the recommended sizes and encoding; don't scale clips** (hurts performance and looks worse). The audio row also applies to audio-only assets:

| Attribute | Value |
|---|---|
| Video codec | **H.264 High Profile** |
| Video bit rate | **160 kbps at up to 30 fps** |
| Resolution (full screen) | **208 × 260 px** (portrait) |
| Resolution (16:9) | **320 × 180 px** (landscape) |
| Audio | **64 kbps HE-AAC** |

- **should not** **Make a poster image look like a system control** (people should understand they can tap a movie element).
- **may** **Use a poster image that represents the clip's contents**: tapping replaces it with the video and starts inline playback; a relevant poster helps people decide; avoid unrelated images or ones mistakable for a control.

## Specs & values
| Item | Value |
|---|---|
| Default playback mode by aspect ratio | 2:1 – 2.40:1 → **aspect-fill** (full screen, edges may crop) · ≤ 2:1 (4:3, 16:9…) and > 2.40:1 → **aspect fit** (letter/pillarbox) |
| Player modes | full-screen (aspect-fill) · fit-to-screen (aspect) · PiP (most platforms) |
| System-player extras | visionOS/tvOS: transport controls + content tabs (Info, Episodes, Chapters); visionOS: controls in an ornament |
| Embedded padding | never; scaling breaks in every mode and in PiP |
| Loading screen threshold (tvOS/TV app) | show one only if loading takes **> 2 s**: black, centred spinner, nothing else |
| TV app hand-off | black screen at once; no splash, detail or intro; resume automatically; switch to the requested profile |
| Interstitial keys | **Select** steps through · **Play** skips |
| Interactive overlay delay (tvOS) | **≥ 0.5 s** before pausing and showing it; clear dismiss and resume |
| Overlay guidance (tvOS) | small, short, translucent SDR; avoid bright opaque (image retention) |
| visionOS thumbnail track | **160 px** wide thumbnails |
| watchOS clip | ≤ **30 s**; H.264 High Profile · 160 kbps ≤ 30 fps · 208×260 (portrait) or 320×180 (16:9) · 64 kbps HE-AAC |
| Keyboard | **Space** = play/pause |
| Developer docs | *Configuring your app for media playback* · AVKit · HTTP Live Streaming · `AVPlayerViewController` · `externalMetadata` · `resizeAspect` / `resizeAspectFill` · `silenceSecondaryAudioHintNotification` · RealityKit · `VideoPlayer` |
| Related HIG pages | Playing audio ✓ · Feedback ✓ · Ornaments ✓ · Keyboards · Remotes (last two not yet ingested) |
| Videos | *Create a great video playback experience* (WWDC22 10147) · *Explore video experiences for visionOS* (WWDC25 304) · *Deliver a great playback experience on tvOS* (WWDC21 10191) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large round play button (a triangle inside a solid disc), over construction circles.
- **Padding illustrations (from screenshot, tabbed: "Result of padding a 4:3 video" and "Result of padding a 21:9 video"):**
  - Each tab shows two iPhones in **landscape**; the ✓ phone on the left, the ✗ on the right, each with a blue AVKit-safe-area rectangle, a purple video rectangle and a video-camera glyph. **✗ images add pink bands**: two vertical bands (pillarboxes) around the 4:3 video, two horizontal bands (letterboxes) above and below the 21:9 video. Captions under each pair name the case, e.g. "4:3 video in full-screen viewing mode" / "…with embedded padding, in full-screen viewing mode".
  - A legend row (from screenshot) reads **AVKit safe area · Video · Embedded padding** with blue, purple and pink dots.
  - (Visuals **playing-video-01** (4:3, full-screen) and **playing-video-02** (21:9, fit-to-screen), each a ✓/✗ pair.)
- **Video thumbnails (from screenshot):** *Create a great video playback experience*: a phone playing a nature scene with player controls over it; *Explore video experiences for visionOS*: a presenter in a room, WWDC25 badge; *Deliver a great playback experience on tvOS*: a TV frame with a herd of elephants and a control bar.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Playing video · Best practices · Integrating with the TV app · Platform considerations · Resources · Change log.
- The page has **no in-page videos** (all "video" images are illustrations); nothing to measure.
- **Text that is not in the fetch:** the legend labels (also in the legend image's alt text) and the thumbnail scenes above.

## Web translation
Web video is `<video>` (plus HLS/DASH via MSE or native HLS on Apple browsers). The system-player advice becomes **use the native `<video controls>` (or a player that copies it)** and follow the platform's keyboard, PiP, fullscreen and Media Session behaviour.

| HIG rule | Web implementation |
|---|---|
| Use the system player / copy it | Prefer native `<video controls playsinline>`; a custom UI must keep every native behaviour: **Space** and **K** toggle play, **←/→** seek 5–10 s, **↑/↓** volume, **M** mute, **F** fullscreen, **Esc** exit; focusable controls with names, captions menu, PiP button (`requestPictureInPicture()`), fullscreen button, AirPlay/Cast picker (`webkitShowPlaybackTargetPicker`, Remote Playback API). Don't invent new gestures for play/pause/seek. |
| Playback modes | `object-fit: contain` = **aspect fit** (letterbox by CSS, the video itself has no bars); `object-fit: cover` = **aspect fill** (crop edges). CONV default from the page's thresholds: use **cover** only for hero/ambient video **2:1 – 2.40:1** where cropping is acceptable and **contain** for everything else, especially standard 16:9/4:3 and ultrawide; let the person switch (double-tap/zoom) in a full player. |
| Original aspect ratio, no baked padding | Encode and upload the **exact picture area** (crop black bars before encoding); set `width`/`height` or `aspect-ratio` on the element from the real ratio; never letterbox in the file. Verify against `playing-video-01/02` ✗: a padded 21:9 becomes a smaller picture in PiP and in every fit/fill mode. Check `videoWidth/videoHeight` against the stream's display aspect ratio. |
| Additional information | Title, description and image belong **next to** the player or in a collapsed panel, never over the picture during playback; also feed the OS via **Media Session `metadata`** (title, artist, artwork). |
| Input devices | **Space** on a focused player toggles play/pause; make the **whole player** focusable for TV/kiosk browsers, and support D-pad/remote arrows for seek and menu; media keys via Media Session `setActionHandler`. |
| Playback options / content tabs (tvOS idea) | A small panel over the video with **≤ 1–2 steps** actions (favourite, audio/subtitles) and a "More" tab strip (Info · Episodes · Chapters) below the transport bar; closes quickly and returns to viewing; keyboard/focus managed (`live-viewing-apps.md` content footer). |
| No audio mixing on mode switches | One audio source at a time: when the video goes to PiP or a tab hides, don't start a second audio track; when other in-page audio (a game, a sound effect) starts, **duck or pause** the video via `navigator.audioSession.type` and Media Session, and restore only on explicit resume (`playing-audio.md`). |
| TV-app hand-off = deep link into playback | The link from a catalogue/home/notification goes **straight to the player** with content ready (no landing page, no splash, no interstitial); the player page paints a **black background at once** (inline CSS) then plays/resumes; an unavoidable interstitial (pre-roll) has **Skip** and shows immediately. |
| No "Resume?" prompt | Store `position` per profile/video (server-side and local) and resume automatically at the last position (minus a couple of seconds for context); offer **Start over** as a quiet secondary action; only for very long content use the previous end time. |
| Right viewer / profile | When a deep link names a profile, switch to it before playback; if none, ask once before playing and remember it; store history per profile. |
| Loading | Show **nothing** for fast loads; if startup takes **> 2 s** show a **black player background with a centred spinner and no other content**; start as soon as enough is buffered (`preload="metadata"`/`auto`, low-latency start, adaptive bitrate starting low); keep buffering in the background. Name the spinner (Feedback gate). |
| Exiting playback | On exit (Esc, back, swipe down) go to the **detail page for that title with Resume** (or a list/menu), not to a blank or the home page; prepare that view early in case of immediate exit; keep scroll/route state (`multitasking.md`). |
| Overlays over video (tvOS) | Keep logos/timers small, translucent and short-lived (burn-in on some TVs); interactive overlays (polls, quizzes): pause after a **≥ 0.5 s delay**, give an obvious dismiss that resumes, move focus into the overlay and back (`modality.md`: non-modal where possible). |
| visionOS Safari / WebXR | Start video **only on user action**; default to a **small, resizable inline player** that leaves the page visible; never autoplay an immersive/360 video; don't stretch an inline player over the whole window; keep custom UI out of the bottom controls area of an immersive player. Thumbnails for scrubbing: an **HLS trick-play/I-frame playlist** or a **WebVTT thumbnail sprite with 160 px-wide tiles**. |
| RealityKit-style transitional video | A splash/transition video is a **decorative `<video muted autoplay playsinline loop>`** with no controls, `aria-hidden`, a poster, and `prefers-reduced-motion` fallback to the poster. |
| watchOS clip limits (small/glanceable) | For glanceable/low-power surfaces ship **≤ 30 s** clips, H.264 High (or AV1/VP9 where supported) at about **160 kbps ≤ 30 fps**, native sizes (**208 × 260** portrait, **320 × 180** landscape) so the device doesn't rescale, audio **64 kbps HE-AAC**; never rescale in the browser. |
| Poster images | `poster` must show **real content from the clip**, never a fake play button, control or UI (a poster that looks like a control confuses); the native play button overlays it; provide `alt` text/labels on the surrounding card. |
| Accessibility | Captions/subtitles and audio description tracks (`<track kind>`), transcript link, keyboard operability, visible focus, no autoplay with sound, respect `prefers-reduced-motion` for autoplaying background video (pause/poster). |

Field-note cross-links:
- `hig/patterns/live-viewing-apps.md`: the tvOS content footer, instant channel feedback and "tap once or not at all" are the live version of this page's transport controls and instant start.
- `hig/patterns/playing-audio.md` and `multitasking.md`: no audio mixing between modes, PiP, ducking, Media Session; one audio source at a time.
- `hig/patterns/loading.md`: >2 s → black loader with spinner, start when enough is buffered, background loading; `launching.md`: black first screen, no splash for hand-offs.
- `hig/patterns/going-full-screen.md`: fit/fill modes, controls stay reachable, pause/resume, person controls exit.
- `hig/patterns/feedback.md` (CRITICAL): named spinners, quiet status; interactive overlays follow the modal/alert rules.
- `hig/foundations/images.md`: aspect ratios and "provide assets at the right size" apply to poster images and thumbnails (never scale in the browser).
- `hig/foundations/layout.md` (CRITICAL): the video area vs safe area illustrations are the same safe-area logic (`env(safe-area-inset-*)`, `viewport-fit=cover`).
- `hig/foundations/accessibility.md`: captions and alternatives.
- No conflict with a field note.

## Checklist
- [ ] The native player (or an exact behavioural copy: Space, arrows, F, M, PiP, AirPlay, captions) is used.
- [ ] Video files contain **no embedded letterbox/pillarbox**; the element uses the true aspect ratio; contain vs cover is chosen deliberately (cover only for 2:1–2.40:1 ambient/hero).
- [ ] Compared with `playing-video-01` and `-02`: no ✗ pattern (padded 4:3 in fill, padded 21:9 in fit).
- [ ] Extra info (title, description, artwork) never covers the picture and is mirrored in Media Session metadata.
- [ ] Playback starts as soon as requested, with a black, spinner-only loader after 2 s; resume is automatic and per profile; exit lands on a relevant detail view with Resume.
- [ ] Only one audio source plays across PiP/tab/mode switches; other in-page audio ducks or pauses the video.
- [ ] Overlays over video are small, translucent and short; interactive ones pause after ≥ 0.5 s and can be dismissed to resume.
- [ ] Immersive/360 video never auto-starts; inline players stay inline and resizable.
- [ ] Scrubbing has thumbnails (160 px tiles) where scrubbing is supported.
- [ ] Glanceable/watch-class clips: ≤ 30 s, native size, H.264 High ~160 kbps ≤ 30 fps, 64 kbps HE-AAC; posters show the clip's content, not a fake control.
- [ ] Captions and transcripts are available; no autoplay with sound.

## Related
- Ingested: Playing audio (✓), Feedback (✓ CRITICAL), Live-viewing apps (✓), Multitasking (✓), Loading (✓), Launching (✓), Going full screen (✓), Images (✓), Layout (✓ CRITICAL), Accessibility (✓).
- Ingested since: Ornaments (✓). Windows (✓ `components/presentation/windows.md`). Focus and selection (✓ `inputs/focus-and-selection.md`). Not yet ingested: **Keyboards**, **Remotes**.
- Developer docs and videos: listed in Specs & values.
