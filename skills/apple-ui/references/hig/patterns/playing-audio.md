# Playing audio
Source: https://developer.apple.com/design/human-interface-guidelines/playing-audio · Section: Patterns · Supported platforms: all six on the platform strip (platform-specific guidance for iOS/iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-28 · Apple last updated: 2023-06-21 (the change log has that single entry). One DocC fetch, read in full. 8 screenshots (dark-mode page, hero → Developer documentation) were compared with the fetched text line by line: everything matches, including the audio-category table and the Important aside; the eight screenshots are contiguous. **The last documentation links, the Videos and the change-log row were read from the fetch only.** The page has no text inside images and no in-page videos. Only page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Sound must **obey the system**: the Ring/Silent switch, the system volume, headphone connect/disconnect and output routing. Choose the audio **category** that matches how the app uses sound, respond to interruptions deliberately, don't repurpose audio controls, and never make sound the only carrier of important information.

## Rules

### Framing (intro)
- Devices play audio through internal/external speakers, headphones, and wirelessly (Bluetooth, AirPlay). People control it with volume buttons, the **Ring/Silent switch** (iPhone), headphone controls, the Control Center volume slider and third-party accessory controls.
- **must** Whether sound is central or an embellishment, it **behaves as people expect** when volume or output changes.
- **Silence:** people set silent to avoid unexpected sounds (ringtones, message tones) and also want **nonessential sounds silenced**: keyboard clicks, sound effects, game soundtracks, other audible feedback. In silent mode the device plays **only audio people explicitly initiate**: media playback, alarms, audio/video messaging.
- **Volume:** people expect their volume setting to affect **all sound in the system** (music and in-app effects) **regardless of how they change it**. Exception: the **ringer volume** on iPhone is adjusted separately in Settings.
- **Headphones:** people use them for privacy and free hands. **Connecting:** sound **reroutes automatically without interruption**. **Disconnecting:** playback **pauses immediately**.

### Best practices
- **must** **Adjust levels automatically when necessary, but never the overall volume.** The app may set relative, independent levels for a good mix; the **system volume always governs the final output**.
- **should** **Permit rerouting of audio when possible** (living-room stereo, car radio, Apple TV) unless there is a compelling reason not to.
- **should** **Use the system volume view** for adjustments: it has a **volume slider** and an **output-rerouting control**; the slider's appearance can be customised (`MPVolumeView`).
- **must** **Choose an audio category that fits how the app or game uses sound.** The category decides whether sounds **mix with other audio**, **play in the background**, or **stop when the Ring/Silent switch is silent**. Pick the one that best meets expectations, e.g. **don't make people stop another app's music if you don't have to** (`AVAudioSession.Category`).

| Category | Meaning | Behaviour |
|---|---|---|
| Solo ambient | Sound isn't essential, but it **silences** other audio (e.g. a game with a soundtrack). | Responds to the silence switch. **Doesn't mix.** **Doesn't play in the background.** |
| Ambient | Sound isn't essential and **doesn't silence** other audio (e.g. a game that lets people play another app's music during gameplay instead of its soundtrack). | Responds to the silence switch. **Mixes.** **Doesn't play in the background.** |
| Playback | Sound is **essential** and might mix (e.g. an audiobook, or a foreign-language teaching app people may listen to after leaving it). | **Doesn't** respond to the silence switch. **May or may not mix.** **Can play in the background.** |
| Record | Sound is **recorded** (e.g. a note-taking app's audio mode; may switch to playback to replay recordings). | **Doesn't** respond to the silence switch. **Doesn't mix.** **Can record in the background.** |
| Play and record | Sound is recorded **and** played, possibly at once (e.g. audio messaging, video calling). | **Doesn't** respond to the silence switch. **May or may not mix.** **Can record and play in the background.** |

- **should** **Respond to audio controls only when it makes sense.**
  - People control playback from outside the app (Control Center, headphone controls) whether it's foreground or background.
  - Respond if the app is **actively playing audio**, in a **clear audio-related context**, or **connected to a Bluetooth/AirPlay device**; **otherwise** don't halt audio that another app is playing when a control is activated.
- **must not** **Repurpose audio controls.** People expect them to behave the same in every app; if the app doesn't support a control, **don't respond to it**.
- **may** **Create custom audio player controls only for commands the system doesn't support**, e.g. custom skip increments, or content related to the audio such as a sports score.
- **should** **Tell other apps when you've finished temporary audio.** If the app can briefly interrupt others, flag the session so they know when they can resume (`notifyOthersOnDeactivation`).

### Handling interruptions
- Most apps use the system's default interruption behaviour; it can be customised.
- **should** **Decide how to respond to audio-session interruptions.**
  - Example: an app that records or does other work people don't want interrupted can tell the system **not to interrupt the current audio for an incoming call unless the person accepts it**.
  - Example: a **VoIP app** must **end a call when people close the iPad Smart Folio** while using the built-in mic. Closing the Folio **mutes the microphone** and by default **interrupts the audio session**; if the app **restarts the session when the Folio reopens**, it **unmutes the microphone without the person knowing**, which is a **privacy** risk.
  - Inspect the interruption to choose the right response (*Handling audio interruptions*).
- **should** **When an interruption ends, decide whether to resume automatically.**
  - Interruptions are **resumable** (an incoming phone call) or **nonresumable** (people start a new music playlist).
  - Use the interruption type **and the app's type**: a **media playback app** that was actively playing should **check that it's resumable** before continuing; a **game** doesn't need to check, because it plays audio **without an explicit user choice** (`shouldResume`).

### Platform considerations
#### iOS, iPadOS
- **should** **Use the system's sound services for short sounds and vibrations** (Audio Services).
#### macOS
- **Notification sounds mix with other audio by default.**
#### tvOS
- The system plays audio **only when people initiate it** (interactions in apps and games, or device calibrations). Example: tvOS **doesn't play sounds for alerts or notifications**.
#### visionOS
- Subtle, expressive sounds are everywhere: they enhance experiences and give **essential feedback** when people look at virtual objects and use gestures. The system combines audio algorithms with information about the **physical surroundings** to produce **Spatial Audio**: sound perceived as coming from **specific locations in space**, not just from speakers.
- **Important (aside):** as on **every** platform, **don't communicate important information by sound alone**; always provide additional ways to understand the app (Accessibility ✓).
- Audio from the **Now Playing** app **pauses when its window is closed**; audio from an app that **isn't** Now Playing can **duck** when people look away to another app (Multitasking ✓).
- **should** **Prefer playing sound.** People usually keep sound on while wearing the device, so an app with **no sound, especially in an immersive moment, feels lifeless and may seem broken**. Look for meaningful sounds that aid **navigation** and convey **spatial qualities**.
- **should** **Design custom sounds for custom UI elements.** System elements play sound to help people **find them and confirm interaction**; custom ones need sounds that provide feedback and support the spatial experience.
- **should** **Use Spatial Audio for an intuitive, engaging experience**, especially in **fully immersive** contexts. Use both types: **ambient audio** (pervasive sound that anchors people in a virtual world) and **audio sources** (sound that seems to come from a specific object).
- **may** **Define a range of places sounds can come from.** Spatial Audio helps people locate a sound-making object, still or moving; e.g. when people move a window that's playing audio, the sound **keeps coming directly from the window**.
- **may** **Vary sounds that could feel repetitive.** The system subtly varies the pitch and volume of the virtual keyboard's sounds, like a physical keyboard's variation with typing speed and force. An efficient way: **randomise a sound file's pitch and volume at playback** instead of making several files.
- **should** **Decide whether a sound is fixed to the wearer or tracked.** **Fixed** sound seems pointed at the person regardless of where they look or what objects move; **tracked** sound seems to come from a particular object, so moving it closer or farther changes what they hear. Use **tracked** in general to increase realism; **fixed** can be right (Mindfulness uses fixed sound to envelop the wearer).
#### watchOS
- The system **manages audio playback**. An app can play **short clips while active in the foreground**, or **longer audio that continues** when people lower their wrist or switch apps (*Playing Background Audio*).
- **should** **Use the recommended encoding for media assets: 64 kbps HE-AAC** (High-Efficiency AAC): good quality at lower data cost.
- **may** **Present a Now Playing view** so people control current or recent audio without leaving the app; the system view shows the **current audio source** (which may be another app on the watch or iPhone) and picks the current or most recently used source (*Adding a Now Playing View*).

## Specs & values
| Item | Value |
|---|---|
| Silent mode plays | only explicitly initiated audio: media playback, alarms, audio/video messaging |
| Volume | one system volume governs all sound; iPhone ringer volume is separate; apps must not change the overall volume |
| Headphones | connect → reroute without interruption; disconnect → pause immediately |
| Categories | Solo ambient · Ambient · Playback · Record · Play and record (table above) |
| Interruption types | resumable (call) · nonresumable (new playlist) |
| Resume rule | media playback: check resumable first; game: resume without checking |
| Privacy example | VoIP app must not re-enable the mic when the iPad Smart Folio reopens |
| macOS | notification sounds mix by default |
| tvOS | audio only when initiated; no alert/notification sounds |
| visionOS | Spatial Audio: ambient audio + audio sources; fixed vs tracked; vary repetitive sounds by randomising pitch/volume; never sound-only information; Now Playing pauses on window close; non-Now-Playing audio may duck |
| watchOS asset format | **64 kbps HE-AAC** |
| Developer docs | *Configuring your app for media playback* · `AVAudioSession` · `AVAudioSession.Category` · `MPVolumeView` · `notifyOthersOnDeactivation` · `shouldResume` · *Handling audio interruptions* · Audio Services · MusicKit · *Playing Background Audio* · *Adding a Now Playing View* |
| Related HIG pages | Playing video · Feedback ✓ · Accessibility ✓ · Multitasking ✓ |
| Videos | *Integrate MusicKit into your app* (WWDC26 254) · *Explore immersive sound design* (WWDC23 10271) · *Immerse your app in Spatial Audio* (WWDC21 10265) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large speaker glyph emitting three curved sound waves, over construction circles.
- **Table (from screenshot):** the category table has three columns (Category, Meaning, Behavior) and five rows separated by thin rules; long cells hyphenate words at line breaks (e.g. "si-lences", "dur-ing"); the wording on screen matches the fetch.
- **Important aside (from screenshot):** a box with an **amber border and tinted fill** and an amber title, about not relying on sound alone in visionOS.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Playing audio · Best practices · Handling interruptions · Platform considerations · Resources · Change log. The side navigation now shows the Components group expanded (Content, Layout and organization, Menus and actions, Navigation…).
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 103). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
Web audio = `<audio>`/`<video>`, Web Audio API, Media Session API, `navigator.audioSession`, autoplay policy, Bluetooth/AirPlay/Cast output. The browser and OS own the volume and switches; the page must behave as a good citizen.

| HIG rule | Web implementation |
|---|---|
| Sound behaves as expected on change | Don't fight the OS: no own master-volume that overrides the system; provide a relative **in-app** volume/mute only (e.g. per-source gain), with the system volume still final. |
| Silent switch and nonessential sound | On iOS Safari the **Ring/Silent switch mutes Web Audio and `<audio>` unless the audio session is "playback"** (`navigator.audioSession.type = "playback"` for media the person started; `"ambient"` for effects that should respect silent). Nonessential UI sounds/game soundtracks/keyboard clicks **respect silent** and are **off by default** or behind a setting; only explicit media, alarms, calls play in silent mode. Never autoplay sound on load (browser policy anyway); start audio from a user gesture; provide a visible mute. |
| Category table → web mapping (CONV) | **Solo ambient/Ambient** → `audioSession.type = "ambient"` (mixes, respects silent; for games/effects) · **Playback** → `"playback"` (audiobook/podcast/music; background OK; doesn't mix by default) · **Play and record** → `"play-and-record"` (calls, voice chat) · **Record** → `"auto"`/`getUserMedia` capture only · **Transient** → `"transient"` / `"transient-solo"` for short prompts that duck or pause others. Choose the least intrusive: don't stop the person's music if you don't need to. |
| Headphones and routing | Handle device changes: `navigator.mediaDevices` `devicechange`; on **headphone disconnect pause** (the browser often pauses media elements automatically; do it for Web Audio too); on connect, don't restart. Let people pick output where supported: `HTMLMediaElement.setSinkId()` / `selectAudioOutput()`; **AirPlay** via `webkitShowPlaybackTargetPicker` / `x-webkit-airplay`, **Remote Playback API** (`video.remote.prompt()`), Cast SDK. |
| System volume view | Don't build a fake system volume; if you show a slider it controls only **your** gain. On iOS the hardware buttons handle the rest; give a mute and an output picker (above). |
| Respond to audio controls sensibly | Use the **Media Session API**: `navigator.mediaSession.metadata` and `setActionHandler("play"|"pause"|"seekbackward"|"seekforward"|"previoustrack"|"nexttrack"|"stop")`; register handlers **only** while your page is the active player, and **clear** them when it isn't so your page doesn't grab hardware keys or halt another tab's audio. Don't redefine keys (space/media keys): pause = pause. |
| Custom controls only for extras | Use the native controls or standard behaviours; custom skip increments (e.g. 15 s/30 s) or related content (scores) may extend, never replace, play/pause/seek. |
| Finishing temporary audio | For short prompts (notification chime, TTS): set the transient session type so others duck and **resume**, then release: `audioSession.type` back / stop the context (`audioContext.close()` or `suspend()`). Don't leave an idle `AudioContext` running (it can keep other audio ducked). |
| Interruptions | Listen to `audioSession.onstatechange` (`interrupted`) and media `pause`/`ended` events; save position; on `interrupted` end, **resume only for resumable cases** (call ended) and only if the person had been playing; for media apps prefer a visible **Resume** button over surprise sound; games may resume automatically when the tab is visible again. Never resume a recording/microphone after an interruption without an indicator and consent (VoIP privacy case): re-request or show "Microphone off. Tap to unmute" (`privacy.md`: mic indicator, permission). |
| visionOS Safari / immersive web | Provide sound for immersive scenes (WebXR): **Web Audio `PannerNode`** with HRTF for **spatial sound** (audio sources attached to objects = tracked; a stereo bed = fixed/ambient); vary repetitive sounds by **randomising `playbackRate` (pitch) and gain** per play; keep a sound for custom UI elements' hover/press feedback; never sound-only information. |
| watchOS encoding | For low-bandwidth/glanceable surfaces use **AAC (HE-AAC, ~64 kbps)** or Opus at similar rates; serve `audio/mp4; codecs=mp4a.40.5` (HE-AAC) or Opus, with a fallback list of `<source>`s. |
| Now Playing view | Show a persistent mini-player / Now Playing surface (title, source, play/pause, seek) in your app and mirror it with Media Session metadata so OS surfaces show the same; it never leaves the person without a way to stop the sound. |
| Accessibility | Captions/transcripts for speech; visual equivalents of audio cues (`feedback.md`: text + icon); don't autoplay; keyboard-operable player; `prefers-reduced-motion` unrelated; respect `prefers-reduced-data` for large audio. |

Field-note cross-links:
- `hig/patterns/multitasking.md` (✓): audio interruptions, media keeps playing in background, ducking and Now Playing are the same rules seen from the multitasking side (see there for Media Session/PiP).
- `hig/patterns/live-viewing-apps.md`: "match audio to context" (audio stops when leaving the live area) and muted autoplay with a visible unmute.
- `hig/patterns/feedback.md` (CRITICAL): sound is never the only channel; sounds accompany text/icon; audio feedback is optional and silenceable.
- `hig/foundations/accessibility.md`: sound must have alternatives (already required); `privacy.md`: microphone use indicators, never re-enable the mic silently.
- `hig/patterns/managing-notifications.md`: notification sounds respect silent/Focus (web push `silent` option).
- `hig/foundations/motion.md` and `symbol-effects.md`: motion and sound are both optional feedback channels; keep them off by default when the person prefers reduced stimulation.
- No conflict with a field note.

## Checklist
- [ ] Nonessential sounds respect silent mode and are off by default or configurable; audio starts only from a user gesture; a visible mute exists.
- [ ] The app never overrides the system volume; in-app gain is relative; an output picker is offered where the platform supports it.
- [ ] The audio-session type (ambient / playback / play-and-record / transient) matches the use; the app doesn't stop other audio unless it must.
- [ ] Headphone disconnect pauses playback; connect doesn't restart it.
- [ ] Media Session handlers are registered only while the page is the active player and use standard meanings; unsupported controls are ignored.
- [ ] Temporary audio releases the session/context so other audio can resume.
- [ ] Interruptions pause; resume is automatic only in resumable cases and for games, otherwise via a Resume button; the microphone is never reactivated silently.
- [ ] Sound is never the only carrier of important information; captions/visual equivalents exist.
- [ ] Immersive/spatial scenes use HRTF panning (tracked sources), an ambient bed, varied repetitive sounds and UI-element sounds.
- [ ] Low-bandwidth targets use HE-AAC/Opus at modest bitrates.

## Related
- Ingested: Multitasking (✓), Feedback (✓ CRITICAL), Accessibility (✓), Live-viewing apps (✓), Managing notifications (✓), Privacy (✓), Motion (✓).
- Not yet ingested: **Playing video**, Playing haptics.
- Developer docs and videos: listed in Specs & values.
