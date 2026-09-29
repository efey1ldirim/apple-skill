# AirPlay
Source: https://developer.apple.com/design/human-interface-guidelines/airplay · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** (the page text: "No additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS. **Not supported in watchOS**"; the page data also lists watchOS, see Mismatches) · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data alert). **Link-only ingestion: one DocC fetch, read in full (84 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. Numbers on the page: **720p vs 4K** (resolution example), **iOS 16 / iPadOS 16** (icon position), **3 icon colour options**, **2 AirPlay icons** (audio, video).

## In one line
AirPlay **streams media wirelessly from iOS, iPadOS, macOS and tvOS devices to Apple TV, HomePod and AirPlay-capable TVs and speakers**. **Use the system media player** (it already has AirPlay), **offer every resolution in your HLS playlist**, **stream only what people expect, support both streaming and mirroring, support remote control events, keep playing in the background and on lock, never interrupt other apps' playback (unless immersive), and keep the app usable while streaming.** If you must build a custom player, **copy the system buttons' looks, states and the lower-right icon position, and use only Apple-provided symbols to start AirPlay.** **Branding rules:** use the AirPlay icon and name **only non-interactively**, in black, white or a matching custom colour, **secondary to your own name**, spelled **"AirPlay"**, used as a **noun**, with words like **works with, use, supports, compatible**. On the web: **Remote Playback API / `x-webkit-airplay`, HLS renditions, Media Session, no interruption of other audio, and a generic "play on another device" button instead of AirPlay branding**.

## Rules

### Framing (intro)
- AirPlay lets people **stream media content wirelessly from iOS, iPadOS, macOS and tvOS devices** to **Apple TV, HomePod and TVs and speakers that support AirPlay**.

### Best practices
- **should** **Prefer the system media player.** It gives a **standard set of controls** and supports **chapter navigation, subtitles, closed captioning and AirPlay streaming**; it is **easy to implement, consistent and familiar**, and **fits most media apps**. **Design a custom video player only if it doesn't meet your needs** (developer: `AVPlayerViewController`). (An image shows the system player paused on a video.)
- **should** **Provide content in the highest resolution possible.** The **HLS playlist must include the full range of available resolutions** so people get **the resolution suited to the device** (**AVFoundation picks it automatically**). **Without a range, content looks low quality on a bigger screen**: video that looks great at **720p** on iPhone looks poor when AirPlayed to a **4K TV**.
- **should** **Stream only the content people expect.** **Don't stream background loops or short video experiences that only make sense inside the app** (developer: `usesExternalPlaybackWhileExternalScreenIsActive`).
- **should** **Support both AirPlay streaming and mirroring**, which gives people **the most flexibility**.
- **should** **Support remote control events.** People can then **play, pause and fast-forward from the lock screen and through Siri or HomePod** (developer: Remote command center events).
- **must** **Don't stop playback when the app goes to the background or the device locks.** People expect a **streamed show to continue while they check mail or put the device to sleep**; in that case **avoid automatic mirroring**, because people don't want other content on their device streamed without choosing to.
- **must** **Don't interrupt another app's playback unless your app starts playing immersive content.** E.g. an app that **plays a video at launch or auto-plays inline videos** should **play it on the local device only** and **let current playback continue** (developer: the `ambient` audio session category).
- **should** **Let people use other parts of the app during playback.** While AirPlay is active **the app must stay functional**; if people leave the playback screen, **other in-app videos must not start and interrupt the stream**.
- **should** **If needed, provide a custom interface to control playback.** Only when the system player can't be used, offer **an intuitive way to enter AirPlay** with **custom buttons matching the system buttons in appearance and behaviour, with distinct visual states for playback starting, playing and unavailable**. **Use only Apple-provided symbols in custom controls that start AirPlay**, and **place the AirPlay icon in the lower-right corner (iOS 16 / iPadOS 16 and later)**.

### Using AirPlay icons
- **AirPlay icons** are downloaded from Apple's **Resources** page. Two glyphs exist: **audio** (a **triangle below three concentric lines**) and **video** (a **triangle below a rounded rectangle**).
- **Black icon:** **on white or light backgrounds** when **other technology icons also appear in black**.
- **White icon:** **on black or dark backgrounds** when **other technology icons are white**.
- **Custom colour icon:** **when other technology icons use the same colour** (illustrated in blue).
- **should** **Position the AirPlay icon consistently with other technology icons.** If others sit **inside shapes**, **put AirPlay in the same kind of shape**.
- **must not** **Use the AirPlay icon or name in custom buttons or interactive elements.** Use the icon and the name **only in non-interactive ways**.
- **should** **Pair the icon with the name "AirPlay" correctly.** The name may sit **below or beside** the icon **if other technologies are shown the same way**, in **the same font as the rest of your layout**. **Don't use the icon inside text or in place of the name.**
- **should** **Emphasise your app over AirPlay**: references to AirPlay must be **less prominent than your app name or main identity**.

### Referring to AirPlay
- **must** **Capitalise correctly:** **"AirPlay" is one word with an uppercase A and P** and lowercase letters after each. **If the layout only shows all-uppercase designations, AirPlay may be set in all caps** to match.
- **must** **Always use "AirPlay" as a noun.** ✓ "Use AirPlay to listen on your speaker" · ✗ "AirPlay to your speaker" · ✗ "You can AirPlay with [App Name]".
- **should** **Use words like "works with", "use", "supports", "compatible".** ✓ "[App Name] is compatible with AirPlay" · ✓ "AirPlay-enabled speaker" · ✓ "You can use AirPlay with [App Name]" · ✗ "[App Name] has AirPlay".
- **may** **Use "Apple" with "AirPlay"** ✓ "Compatible with Apple AirPlay".
- **may** **Refer to AirPlay when it adds clarity**: content that is **specific to AirPlay**, or **technical specifications**. ✓ "[App Name] now supports AirPlay".

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations. **watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Streams from → to | iOS, iPadOS, macOS, tvOS → Apple TV, HomePod, AirPlay-capable TVs and speakers |
| Resolution rule | HLS playlist with the **full range of renditions**; example **720p on iPhone vs 4K on a TV** |
| Icon set | **2 glyphs** (audio: triangle under three concentric lines; video: triangle under a rounded rectangle) × **3 colour options** (black, white, custom) |
| Icon position in custom players | **lower-right corner**, iOS 16 / iPadOS 16 and later |
| Icon use | **non-interactive only**; never in custom buttons; not in text or replacing the name |
| Name | **AirPlay** (one word, capital A and P); noun; all caps only in all-caps layouts |
| Wording | works with · use · supports · compatible (✗ "has AirPlay", "AirPlay to…", "AirPlay with…") |
| Playback | continues in background / on lock; no auto-mirroring; other apps' playback not interrupted (unless immersive) |
| Developer docs | AVFoundation · AVKit (`AVPlayerViewController`) · `usesExternalPlaybackWhileExternalScreenIsActive` · `ambient` audio category · Remote command center events · HTTP Live Streaming |
| Video (link only, not watched) | Reaching the Big Screen with AirPlay 2 (WWDC19 501) |
| Related | Apple Design Resources · Apple Trademark List · Guidelines for Using Apple Trademarks and Copyrights |
| Change log | May 2 2023: guidance consolidated into one page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of the **AirPlay icon** over grid lines, **tinted blue** (Technologies pages use blue where Inputs used purple; alt).
- **System player image:** a **screenshot of the system media player paused on a video** (no detail beyond the alt).
- **Icon sets (3 images):** each shows **two icons side by side, audio on the left and video on the right**, in **black**, **white** and **blue** (custom colour); the custom-colour image has a dark variant.
- **Wording examples:** three small tables of example phrases, each row marked with a **checkmark in a circle** (correct) or an **X in a circle** (incorrect); they are **text examples, not comparison images**.
- **Mismatches / notes:**
  1. **The page data lists watchOS among the supported platforms**, but the platform section says **"Not supported in watchOS"**; follow the text.
  2. **The intro lists the source devices as iOS, iPadOS, macOS and tvOS**; visionOS is named only in the platform section.
  3. **Best practices say to use only Apple-provided symbols in custom controls that start AirPlay**, while the icon rules say **not to use the AirPlay icon or name in custom buttons**. The two apply to different cases: the first to **AirPlay-launching controls (the system route picker icon)**, the second to **branding and marketing UI**.
  4. **"Airplay"** (lowercase p) appears once in the source (*Referring to AirPlay*, last rule): a **typo** against the page's own capitalisation rule.
  5. **The rule "don't stop playback in the background" is written as a best practice, not a hard rule**, yet the surrounding text calls it "crucial" for avoiding automatic mirroring.
- **Catalog:** the script found **0 comparisons** (the ✓/✗ items are text rows, the icons are single images). Catalog stays **220**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images; the wording examples are text). The script reports **0 comparisons** for this page.

## Web translation
Web pages can **hand playback to an AirPlay (or other) device** but **can't stream or mirror the screen** themselves. Support statements are background knowledge, not from the page; **verify per browser**.

| HIG rule | Web implementation |
|---|---|
| Prefer the system player | **Use a native `<video controls>` / `<audio controls>`**: Safari shows the **AirPlay button** automatically; Chromium shows **cast** controls. Add **`x-webkit-airplay="allow"`** for older WebKit and keep **`disableRemotePlayback` absent** (it hides the picker). Custom skins only if the native player doesn't meet the need (`playing-video.md`). |
| Full range of resolutions | **Adaptive streaming with a full rendition ladder**: **HLS (`.m3u8`)** works natively in Safari and via **hls.js/Media Source Extensions** elsewhere; include **low → 4K** renditions so a TV receiving the stream is sharp (720p only looks poor on 4K). Use **`<source type="application/vnd.apple.mpegurl">`**. |
| Stream only what people expect | **Mark decorative loops as non-remotable**: `<video muted loop playsinline disableRemotePlayback>` for **background/ambient video**, so the picker isn't offered. |
| Support both streaming and mirroring | **Nothing to implement**: **mirroring is a system feature**; keep **DRM/protected content rules** in mind (some content blocks mirroring). Do **not** hide content behind a "cast only" mode. |
| Remote control events (lock screen, Siri, HomePod) | **Media Session API**: `navigator.mediaSession.metadata` (title, artist, artwork) and **`setActionHandler("play" | "pause" | "seekbackward" | "seekforward" | "previoustrack" | "nexttrack" | "seekto")`**, plus **`playbackState`** so lock-screen and OS controls work (`remotes.md` for the TV key side). |
| Don't stop playback on background or lock | **Don't pause on `visibilitychange`/`pagehide` for media playback**; browsers keep **audio** playing in the background for a normal `<audio>`/`<video>`; pause only when the **user** asks. **Never start mirroring/casting automatically**; a cast starts only from an explicit user action on the picker. |
| Don't interrupt other apps' playback unless immersive | **Autoplay only muted** (`<video autoplay muted playsinline>`), **no autoplay audio**; use the **Web Audio `AudioContext` only after a gesture** and **don't grab audio focus for UI sounds**; a page's own intro video should be **muted or local-only** (`loading.md` / `launching.md`). |
| Keep the app usable during playback | **The remote session survives navigation only in a single-page app** (keep the `<video>` element mounted, e.g. in a persistent shell or use **Picture-in-Picture**); **don't auto-play other videos** while `video.remote.state === "connected"`; listen to **`video.remote.onconnect` / `ondisconnect`** (**Remote Playback API**) to adjust the UI. |
| Custom playback UI: match system buttons, distinct states, only Apple symbols to start AirPlay, lower-right position | **Prefer letting the browser draw the picker**; a custom button can call **`video.remote.prompt()`** (Remote Playback API, Chrome/Edge/Safari) or **`video.webkitShowPlaybackTargetPicker()`** (Safari), with **`aria-label="Play on another device"`**, **distinct `:disabled` / connecting / connected states** (**`video.remote.state`** = `disconnected` / `connecting` / `connected`, and **`video.remote.watchAvailability()`** to hide it when no device exists), placed at the **trailing end (lower-right in LTR) of the control bar**. **Web icon rule (skill):** **no SF Symbols and no AirPlay artwork**: use **Lucide `cast`** or an **Ionicons/Phosphor** equivalent (**generic device-stream icon**). |
| Don't use the AirPlay icon or name in custom buttons | **Web deviation of scope:** **a custom "play on another device" button is fine**, but **label it generically** ("Play on another device" / "Cast") and **don't use Apple's AirPlay icon or name on interactive elements**; reserve the **AirPlay name and icon for non-interactive compatibility statements** (a footer "Compatible with AirPlay", a features page). |
| Icon colours (black / white / custom) | On a **marketing/compatibility strip** pick the **variant that matches the other partner logos** (**dark-on-light, light-on-dark, or one brand colour**); use **`currentColor` SVG** so it follows the theme; download the artwork from **Apple Design Resources** (don't redraw). |
| Pair icon with name; name below or beside; same font | **Caption in the layout's font** (`font: inherit`), **same size and weight as other partners' captions**, never inside running text. |
| Emphasise your app over AirPlay | The AirPlay mark **smaller/quieter than your logo** (**CONV**: no bigger than a third of the wordmark height). |
| Correct capitalisation ("AirPlay"); noun; wording | **Copy deck rule**: **"AirPlay"** (never "Airplay" or "airplay"); **noun only**: "Use AirPlay to listen on your speaker", **not** "AirPlay to your speaker" / "You can AirPlay with [App]"; **"works with / compatible with / supports"**, not "[App] has AirPlay". Add to the **term list** (`writing.md`). **In an all-caps layout, `text-transform: uppercase` is acceptable for this fixed brand name** only when **the whole design is uppercase** (write the case in the string elsewhere). |
| Trademark use | Follow Apple's **trademark list and guidelines** for third parties (linked on the page) in marketing pages. |
| Native-only | **`AVPlayerViewController`, `AVRoutePickerView`, `usesExternalPlaybackWhileExternalScreenIsActive`, remote command center, `AVAudioSession` ambient** are native; the web equivalents are **`<video controls>`, Remote Playback API, Media Session API, HLS**. |

Field-note cross-links:
- `field-notes/*`: **no media or casting recipe**; nothing conflicts. **Web icon rule:** the skill's ban on SF Symbols artwork and Apple marks in UI applies: **Lucide `cast`** for a generic button, **Apple's downloadable AirPlay artwork** only for **non-interactive** compatibility statements.
- `hig/patterns/playing-video.md` (✓): **system player first, remote control events, don't interrupt other audio**, HLS quality; `hig/patterns/playing-audio.md` (✓): **background playback, audio session categories, interruptions**; `hig/patterns/live-viewing-apps.md` (✓): streaming behaviour; `hig/inputs/remotes.md` (✓): the **TV-side Play/Pause and Back**; `hig/foundations/branding.md` (✓): **using Apple marks and partner logos**; `hig/foundations/writing.md` (✓): **term list and capitalisation**; `hig/patterns/launching.md` (✓) and `loading.md` (✓): **launch/auto-play video should not disturb other apps**.
- Not yet ingested (linked from this page): none in the HIG (Apple Design Resources and trademark pages are external).

## Checklist
- [ ] **Native `<video>`/`<audio>` controls** are used unless there is a real need for a custom player.
- [ ] **HLS with a full rendition ladder** (up to the highest available resolution).
- [ ] **Decorative/short in-app loops** are muted and **`disableRemotePlayback`**.
- [ ] **Media Session** metadata and actions are set; **lock-screen and voice controls work**.
- [ ] **Playback continues** in the background and on lock; **no auto-mirroring/casting**.
- [ ] **No autoplay audio; other apps' playback is not interrupted**.
- [ ] While **`video.remote.state` is connected**, **other videos don't autoplay** and the app **stays fully usable** (player persists across navigation).
- [ ] A custom device button uses **`remote.prompt()`**, has **distinct states**, sits at the **trailing end of the control bar**, is **labelled generically**, and uses a **Lucide/Phosphor/Ionicons icon, never SF Symbols or AirPlay artwork**.
- [ ] **AirPlay name/icon appear only non-interactively**, in a **matching colour**, in the **layout font**, **less prominent than the app**.
- [ ] Copy says **"AirPlay"** (spelling), as a **noun**, with **works with / compatible / supports**; **never "has AirPlay"**.

## Related
- Ingested: Playing video (✓), Playing audio (✓), Live-viewing apps (✓), Remotes (✓), Branding (✓), Writing (✓), Launching (✓), Loading (✓).
- Not yet ingested (linked from this page): none.
- External: Apple Design Resources; Apple Trademark List; Guidelines for Using Apple Trademarks and Copyrights.
- Developer docs: AVFoundation · AVKit (`AVPlayerViewController`) · HTTP Live Streaming · Remote command center events.
- Videos: Reaching the Big Screen with AirPlay 2 (WWDC19 501).
