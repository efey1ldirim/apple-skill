# ShazamKit
Source: https://developer.apple.com/design/human-interface-guidelines/shazamkit · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data). **Link-only ingestion: one DocC fetch, read in full (31 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **3 example features**, **1 permission (microphone)** and **2 best practices**.

## In one line
**ShazamKit recognises audio by matching a sample against the ShazamKit catalog or a custom audio catalog.** Example uses: **visuals that match the genre of the music playing, closed captions or sign language synced to the audio (accessibility), and in-app experiences synced with virtual content (online learning, retail).** **If the microphone supplies the sample, request access and explain why (`privacy.md`); stop recording as soon as you have the sample you need; and let people opt in before the app stores recognised songs to their iCloud library.** On the web: **`getUserMedia` for the microphone, a recognition service or your own fingerprinting, a specific purpose string, a visible recording indicator, stop tracks right after matching, and an explicit "Save to library" choice.**

## Rules

### Framing (intro)
- **Audio recognition: match an audio sample against the ShazamKit catalog or a custom audio catalog.**
- **Example features:**
  - **Graphics that correspond with the genre of currently playing music.**
  - **Accessible media: closed captions or sign language synced with the audio, for people with hearing disabilities.**
  - **In-app experiences synchronised with virtual content (online learning, retail).**
- **must** **Request microphone access if the device microphone supplies the samples**, and **help people understand why you're asking** (**`privacy.md`**). (Illustration: **a "Math School" permission alert on iPhone: "Math School would like to access your microphone. Synchronize reading and math exercises with videos played by your teacher."**; buttons **Not Now** and **Allow**.)

### Best practices
Once microphone permission is granted for ShazamKit features:
- **must** **Stop recording as soon as possible.** **People don't expect the microphone to stay on**; **record only as long as it takes to get the sample you need** (privacy).
- **should** **Let people opt in to storing recognised songs in their iCloud library.** **If the app can store recognised songs to iCloud, let people approve first**; **both the Music Recognition control and the Shazam app show your app as the source, but people want control over which apps add to their library.**

### Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS, watchOS.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Function | match an audio sample to the ShazamKit catalog or a custom catalog |
| Example features | genre-matched graphics · captions or sign language synced to audio · in-app content synced to virtual content |
| Permission | microphone (when the device mic gives the samples), with a purpose explanation |
| Recording | stop as soon as the needed sample is captured |
| Library storage | opt-in before saving recognised songs to iCloud |
| Permission alert example | "… would like to access your microphone. Synchronize reading and math exercises with videos played by your teacher." · Not Now / Allow |
| Developer docs | ShazamKit |
| Video (link only, not watched) | Explore ShazamKit (WWDC21 10044) |
| Apple's Related list | none |
| Change log | none on the page |

## Visual notes (link-only: from alt texts)
- **Hero:** a sketch of **the ShazamKit icon** over grid lines, **tinted blue** (alt).
- **Permission alert (light only):** **iPhone alert with a purpose sentence naming the benefit ("Synchronize reading and math exercises with videos played by your teacher"), buttons "Not Now" and "Allow".**
- **Mismatches / notes:**
  1. **The alert's purpose string describes the benefit for the person**, **not the technology**; **it names no "ShazamKit" or "audio recognition".**
  2. **The page says "stop recording as soon as possible" but gives no duration.**
  3. **It states that both the Music Recognition control and the Shazam app show the app as the source**, **but doesn't show either UI.**
  4. **No guidance on showing results (song title, artwork), listening states or errors** (no match, noisy audio); **see `feedback.md`.**
  5. **The accessibility example (captions or sign language synced with audio) is a use case, not a requirement**, **and gives no caption styling**; **see `playing-video.md` and `accessibility.md`.**
  6. **There is no Change log, Related list or screenshots beyond the alert**, so **its currency can't be checked.**
- **Catalog:** the script found **0 comparisons** (the alert and hero are single images). Catalog stays **269**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**ShazamKit is native** (with Shazam apps and Music Recognition); **the web has no ShazamKit** (Apple offers ShazamKit for Android, not a web SDK; verify current availability). **Audio recognition on the web** uses **`getUserMedia({ audio: true })`** plus **your own fingerprinting/recognition service**; **the design rules apply unchanged.** Statements about APIs are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Request microphone access with a clear reason | **Ask on a user action ("Listen")**, **with a short purpose sentence before the browser prompt** ("Match the music playing nearby to show its lyrics."); **allow "Not now"**; **handle denied/blocked with instructions to change site settings** (`privacy.md`, `alerts.md`). |
| Purpose text about the benefit | **Describe what people get, not the technology** ("Sync the exercises with your teacher's video"), **like the Math School alert.** |
| Stop recording as soon as possible | **Stop all tracks (`track.stop()`) and close the `AudioContext` right after the sample is captured or the match returns**; **cap listening time (e.g. ≤ 10–15 s, CONV)** and **show a visible "Listening…" state with a Stop button**; **the browser's recording indicator stays honest.** |
| Recording state and results | **A clear listening state (animated indicator plus text, `aria-live="polite"`)**, **a result card (title, artist, artwork), and a calm "No match. Move closer and try again." error** (`feedback.md`, `loading.md`, `field-notes/principles.md` §16). |
| Accessible synced media | **Captions/subtitles synced to the audio (`<track kind="captions">`) or a sign-language video layer**; **respect user caption preferences** (`playing-video.md`, `accessibility.md`). |
| Genre-matched or synced visuals | **Drive visuals from the recognised metadata**; **`prefers-reduced-motion`: static graphics** (`motion.md`). |
| Opt in before saving recognised songs to a library | **A per-result "Add to library" button or a one-time setting with an explicit choice**, **never automatic**; **say which library/service**, **allow later removal** (`settings.md`, `privacy.md`). |
| Data handling | **Prefer on-device fingerprinting or send only the fingerprint, not raw audio**; **state what leaves the device and how long it's kept.** |
| Native-only | **ShazamKit (`SHSession`, custom catalogs), Music Recognition control, Shazam library storage in iCloud** are native/Apple services; **the web uses `getUserMedia` plus a recognition provider.** |

Field-note cross-links:
- `field-notes/*`: **no audio-recognition recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** the listening and error messages.
- `hig/foundations/privacy.md` (✓): **Apple's linked page; permission requests, purpose strings, minimum recording**; `hig/components/presentation/alerts.md` (✓): **the permission alert**; `hig/patterns/feedback.md` (✓ CRITICAL) and `hig/patterns/loading.md` (✓): **listening and result states**; `hig/patterns/playing-audio.md` (✓) and `playing-video.md` (✓): **audio context, captions**; `hig/foundations/accessibility.md` (✓): **captions and sign language**; `hig/technologies/icloud.md` (✓): **library storage and sync**; `hig/patterns/settings.md` (✓): **library opt-in**; `hig/technologies/machine-learning.md` (✓): **confidence, wrong matches, corrections**; `hig/technologies/augmented-reality.md` (✓): **synced virtual content contexts**; `hig/foundations/motion.md` (✓).
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Microphone access is requested on a user action, with a purpose sentence describing the benefit.**
- [ ] **Recording stops as soon as the sample is captured** (**tracks stopped, listening state visible, capped duration**).
- [ ] **Results and "no match" states are clear and calm.**
- [ ] **Saving recognised songs to a library is opt-in and reversible.**
- [ ] **Synced captions or sign language are offered where the feature supports accessibility.**
- [ ] **Only the fingerprint or the minimum audio leaves the device, and this is stated.**

## Related
- Ingested: Privacy (✓), Alerts (✓), Feedback (✓ CRITICAL), Loading (✓), Playing audio (✓), Playing video (✓), Accessibility (✓), iCloud (✓), Settings (✓), Machine learning (✓), Augmented reality (✓), Motion (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: ShazamKit.
- Videos: Explore ShazamKit (WWDC21 10044).
