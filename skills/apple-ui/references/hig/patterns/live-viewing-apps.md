# Live-viewing apps
Source: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps · Section: Patterns · Supported platforms: all six on the platform strip; the page states **no additional considerations** for any platform (written mainly with tvOS in mind: remotes, footer, EPG) · Ingested: 2026-09-28 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 5 screenshots (dark-mode page, hero → Related + Apple site footer) were compared with the fetched text line by line: everything matches. The page has no text inside images, no in-page images besides the hero and no videos. **The last screenshot shows an operating-system chat notification over the browser; it is not page content and is not recorded.** Only the page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Make live content the star: one tap (or none) from app start to playback, obviously *live* at a glance, with actions in a fixed order, browsing that never interrupts what is playing, instant feedback on every channel change, and audio that stops when people leave the live context.

## Rules

### Framing (intro)
- Live-viewing apps must **elevate and prioritise live content**. On **every screen**, draw attention to live content and let people tell it apart from **video on demand (VOD)** at a glance.

### Best practices
- **must** **Feature live content prominently and make it easy to reach.**
  - People come to watch, so minimise the time between starting the app and playing.
  - If live content is in the **first tab**, people need **no more than one tap** to start viewing.
- **should** **Let people tap once, or not at all, to start playback.**
  - Example: a **Watch Now** button on top of featured or recently viewed live content. On tap it **disappears at once** and playback begins, replacing the app's UI with a **full-screen, immersive** viewing experience.
- **must** **Make live content look live.**
  - Simply playing live content is the best way to make it feel live; you can also **mark** it.
  - Example: other channels in a collection row titled **"Live"**, each item carrying a **badge, symbol or sash** that identifies it as live.
- **may** **Show the progress of currently playing live content**, so people know where they'll land when they jump into something in progress: a **progress bar** or another indicator of how much remains.
- **should** **Give additional actions and viewing alternatives.**
  - **Playback is always the primary action.** Also make it easy to **record, restart, download** and any other supported actions.
  - Show these actions **in the same order throughout the app**, e.g. **Watch, Start Over, Record, Favorite**.
  - If the currently playing content **airs again later**, show that so people can **schedule** their viewing.
- **may** **Use a content footer for browsing channels during playback**, so people browse without leaving live playback. If used:
  - give it a **subtle treatment**, such as a **darkening**, so text stays legible and items stay visually distinct from the content behind;
  - make the **thumbnail for the currently playing content** easy to identify, for example by **badging** it or **tinting its progress bar**;
  - **match its categories to the EPG's**;
  - give it a **simple, predictable way to invoke and dismiss**: if swiping up invokes it, swiping down dismisses it.
- **must** **Give instant visual feedback when people change channels.** Two reasons: people need confirmation they've arrived at the channel they wanted, and the feedback **buys the stream time to load**.
- **must** **Match audio to the current context.**
  - When live content starts, people expect the audio to match even if they switch to **browsing while it plays in the background**.
  - When they **navigate away from the live tab**, they leave the live-viewing context, so **audio must stop**.

### EPG experience
- Live-viewing apps typically have an **electronic program guide (EPG)** of scheduled programming; make it feel designed for a live-viewing app.
- **should** **Show current information prominently and make it easy to return to playback.** On first open, the **current program, channel and time** must be easy to spot, so people can instantly return to the current channel.
- **should** **Make browsing effortless.** An EPG holds a lot of information: help people **page, scroll or jump** through it. Consider a **My Channels** or **Favorites** group for quick access to what they watch most.
- **should** **Group content into familiar categories.** Examples: Movies, TV Shows, Kids, Sports, Popular. If there's a content footer, organise its thumbnails by the **same categories**.
- **should** **Let people browse the EPG without leaving current content**, e.g. keep playing in **picture-in-picture (PiP)** or in the background while they browse.

### Cloud DVR
- For apps that support **digital video recording (DVR) in the cloud**:
- **should** **Let people start and stop recording from the info panel.** While streaming live, people want to reveal the panel and record immediately.
- **should** **Let people record a future program from a details view**, with the option to record **only that program or all future episodes**.
- **should** **Let people tailor what is recorded**: precisely, e.g. only the current episode, only new episodes, or only games that involve specific teams.
- **should** **Allow playback and other content-specific actions inside the cloud DVR area.** In a details view within the DVR section, let people **play or delete** content and, if applicable, **adjust recording settings**.
- **may** **Offer a control to manage cloud DVR settings.** Examples: delete recordings already watched, or content **older than a certain number of days**. Ideally, help people avoid running out of space with **automatic storage management** that **overwrites the oldest or already-viewed** content.

### Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
The page has **no numbers** (no durations, sizes or thresholds). Its concrete facts:

| Item | Value |
|---|---|
| Taps from app start to playback | ≤ 1 when live is in the first tab; ideally 0 (auto-start) |
| Primary action | playback, always |
| Example action order | Watch · Start Over · Record · Favorite (same order everywhere) |
| Live marker | a "Live" row + badge, symbol or sash per item |
| Footer treatment | subtle darkening; currently-playing thumbnail badged or its progress bar tinted; categories match the EPG; invoke/dismiss are opposite gestures |
| Channel change | instant visual confirmation (also masks loading) |
| Audio rule | continues while browsing inside the live tab; stops when leaving the live tab |
| EPG must show first | current program, channel, time; instant return to current channel |
| EPG grouping | My Channels/Favorites; categories such as Movies, TV Shows, Kids, Sports, Popular |
| Browse without interrupting | PiP or background playback |
| Cloud DVR choices | this program / all future episodes; only current, only new, only games with specific teams; play/delete/adjust; auto-delete watched or older than N days; auto-overwrite oldest/watched |
| Related HIG pages | Remotes (not yet ingested) · Playing video ✓ |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a rounded TV set containing a large play triangle, on a small stand bar, over construction circles.
- **Page chrome (from screenshot):** the platform strip lights all six devices. The TOC reads Live-viewing apps · Best practices · EPG experience · Cloud DVR · Platform considerations · Resources (**no Change log**). The last screenshot ends with the Apple developer site footer (site chrome, not content).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above. Every heading, bold lead-in, bullet, sentence and link in screenshots 55–59 is in the fetched text.

## Web translation
For any live video product on the web (sports, news, events, webinars, TV portals, live commerce, kiosks). The page is TV-centred, but the rules are about content priority and continuity.

| HIG rule | Web implementation |
|---|---|
| Live content first, one tap (or none) | The home/landing surface leads with the live item(s); a single **Watch live** (verb-led, `writing.md`) button on the live card, or autoplay after a moment (muted where browser policy requires, with a visible **unmute**; never full-volume audio on load). The button disappears on press and the player takes over. Persistent *Now playing* entry in the nav. |
| Looks live | A clear **LIVE** marker: text "Live" + a dot/sash, never colour alone (Feedback gate, `role`/text alternative); live items sit in a row titled "Live"; VOD items have a duration instead. Live player shows a live-edge indicator and a "Go to live" control when behind. |
| Progress of live content | A progress/time-remaining bar on the card ("34 min left"); in the player, the seek bar shows DVR window and live edge; announce nothing on every tick (no chatty live regions). |
| Actions in one order | The same action set and order on cards, player and details: **Watch · Start over · Record · Favorite** (`aria-label` on icon buttons); playback is the filled primary, others quiet (field note: one filled button). |
| Show later airings | On a details view: "Airs again Tue 20:00" with an **Add reminder** action (calendar link / notification). |
| Content footer during playback | A slim tray over the lower part of the player (functional layer → `.glass` or a darkened `material`, Materials gate) with channel thumbnails: subtle darkening for legibility, currently-playing thumbnail badged or its progress tinted, same categories as the EPG, opened/closed by opposite gestures and keys (swipe up/down, ↑/↓, a toggle button). Focus moves into it when opened and back to the player when closed. |
| Instant channel-change feedback | The instant a channel is chosen: show the new channel name/logo and a **skeleton or still frame** (never a black gap), announce via a polite `role="status"` ("Channel: Sports 1"), and time-out with a clear message if the stream fails (Feedback gate). Preload neighbouring channels' manifests where practical. |
| Audio matches context | Keep audio while browsing within the live area (PiP or mini-player); **stop** it when the person navigates out of the live area, closes the tab section or the tab is hidden for long (`visibilitychange`), unless they chose background play. Use the **Media Session API** for lock-screen/hardware controls and `pagehide` cleanup; one audio source at a time. |
| EPG: now, jump, page | A time-grid (channels × time) with a sticky **Now** marker and channel column; opens scrolled to now; **Jump to now** and **Back to live** buttons; horizontal paging by day/period; keyboard and remote/D-pad navigation (roving `tabindex`, arrow keys, Enter to tune) with a visible focus ring (TV-scale targets, `layout.md`). |
| Favourites and categories | **My channels** first, then categories (Movies, TV shows, Kids, Sports, Popular …) identical in EPG and footer. |
| Browse without leaving playback | `video.requestPictureInPicture()` (or a docked mini-player) while the guide is open; on small screens a bottom-sheet guide over a shrunken player rather than a full page navigation. |
| Cloud DVR | **Record** from the player's info panel and from a programme's details; choices "This programme / All future episodes"; rule builders for "new episodes only", "games with team X"; a DVR library with play, delete (confirm, or Undo: `feedback.md` — irreversible deletion of unwatched recordings is the case for a warning), and settings; storage meter with **auto-manage** ("Delete watched first / older than N days"). |
| Accessibility | Captions/subtitles and audio description toggles in the player, keyboard-operable controls, live-region use limited to channel/status changes, contrast ≥ 4.5:1 for guide text on the darkened background, respect `prefers-reduced-motion` for guide scrolling and footer transitions. |
| Launch | Live surfaces may start playback a few seconds after opening (`launching.md`, tvOS rule) with a visible way to stop it; restore the last channel on return. |

Field-note cross-links:
- `hig/patterns/launching.md`: the tvOS "start live playback after a few seconds of inactivity" rule and restoring the last state are this page's other half.
- `hig/patterns/feedback.md` (CRITICAL): channel-change feedback, stream errors, DVR deletion and "recording started" are messages on the delivery ladder; the LIVE badge needs text, not colour alone.
- `hig/patterns/going-full-screen.md`: the immersive playback screen; keep essential controls reachable, pause/resume, don't exit by itself.
- `hig/foundations/materials.md` (CRITICAL): the content footer and info panel float over video, so they are functional-layer glass/dimmed surfaces with vibrant text; `.glass-clear` needs the 35 % dim over bright video.
- `hig/foundations/layout.md` (CRITICAL) and `designing-for-tvos.md` (✓): 10-foot targets, focus, and the safe area for TV-scale UIs.
- `field-notes/components.md` (one filled button, segmented controls): playback is the single filled action; actions are otherwise quiet.
- `hig/foundations/motion.md`: footer and guide transitions are short, cancellable and never edge-triggered.
- No conflict with a field note.

## Checklist
- [ ] Live content leads the first screen; at most one tap (or an auto-start with visible controls) reaches playback.
- [ ] Live items carry a text + shape marker (not colour alone); VOD is distinguishable at a glance; a "Live" row groups live items.
- [ ] Actions appear in the same order everywhere (Watch · Start over · Record · Favorite) with playback as the primary action; later airings can be scheduled.
- [ ] A content footer (if any) is subtly darkened/glass, marks the current item, mirrors the EPG categories and uses opposite gestures to open and close.
- [ ] Every channel change gives instant visual and announced feedback and never a black gap; failures are reported (Feedback gate).
- [ ] Audio continues while browsing inside the live area and stops on leaving it; only one audio source plays.
- [ ] The EPG opens on the current program/channel/time with a one-step return to live, is pageable and keyboard/remote navigable, has favourites and shared categories.
- [ ] Browsing the guide does not stop playback (PiP or mini-player).
- [ ] Cloud DVR offers record from the info panel and details view, series options, per-content actions, and storage auto-management; destructive deletion is confirmed or undoable.
- [ ] Captions and audio description are available; focus rings and contrast pass the Layout/Color gates.

## Related
- Ingested: Launching (✓), Feedback (✓ CRITICAL), Going full screen (✓), Materials (✓ CRITICAL), Layout (✓ CRITICAL), Motion (✓), Designing for tvOS (✓), Accessibility (✓), Writing (✓).
- Sliders (✓ `components/selection-and-input/sliders.md`). Not yet ingested: **Remotes**, Progress indicators, Collections.
