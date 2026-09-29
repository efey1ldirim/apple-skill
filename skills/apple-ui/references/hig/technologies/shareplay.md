# SharePlay
Source: https://developer.apple.com/design/human-interface-guidelines/shareplay · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** (page data; the platform text: "No additional considerations for tvOS. **Not supported in watchOS**", plus an **iOS, iPadOS, macOS** section (Picture in Picture) and a long **visionOS** section) · Ingested: 2026-09-29 · Apple last updated: **September 9, 2026** ("Reorganized best practices, expanded visionOS guidance, and added a section on custom templates"; earlier rows: Dec 5 2023 visionOS artwork; Jun 21 2023 visionOS guidance; Dec 19 2022 clarified help for nonsubscribers to join). **Link-only ingestion: one DocC fetch, read in full (94 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **up to 5 spatial Personas**, **seats at least 1 m apart**, **3 system spatial templates** (side-by-side, surround, conversational), **8 general best practices**.

## In one line
**SharePlay lets people take part in your app's activities together from their own devices; the system keeps the activity in sync and works alongside FaceTime or Messages.** **Use it for real-time experiences (and let people share or save the result afterwards for asynchronous work); pick shared view or per-role views; work across Apple platforms; give a clear start control (a button with the SharePlay symbol, e.g. "Start Activity"; also the share sheet; on visionOS the Share button next to the window bar); let people join without friction (guide sign-in, download or subscription in a view that dismisses at once, offer provisional access or Family Sharing, defer nonessential steps); describe activities briefly (title, summary, poster); show who did what; and use the word "SharePlay" correctly (noun or verb; no adjectives such as "virtual" or "spatial"; no "SharePlayed", "SharePlays", "SharePlaying").** **iOS/iPadOS/macOS: support Picture in Picture for shared video.** **visionOS: shared context, window-first start, natural conflict rules (last change wins), opt-in immersion changes, per-person comfort settings, easy leave and rejoin, Persona alternatives, spatial templates (side-by-side, surround, conversational) in stages with person-initiated, smooth transitions, and custom templates (5 seats, ≥ 1 m apart, fixed seat order, roles independent of seats).** On the web: **a shared-session feature (WebRTC/WebSocket) with an invite link, presence, roles, conflict rules and synced playback; the wording and join-flow rules carry over.**

## Rules

### Framing (intro)
- **People take part in an app's activities together, from their own devices, even when not in the same room.** **An activity is a shareable experience the app offers.** **The system keeps each activity in sync across devices and works alongside FaceTime or Messages so people can talk.**
- **An activity can start** **from a control in the app, from a FaceTime call, or from a shared link.** **The system asks each participant to open the app on their device, and invites anyone without the app to download it from the App Store.**
- (Illustrations, iPhone: **a shared video with a banner at the top showing who started the activity and a video thumbnail of that person in the lower-right corner**; **the same video on the starter's iPhone, a banner confirming the activity and the other participant's thumbnail lower right**.)
- **Note:** **each participant needs their own copy or subscription for content people buy or subscribe to**; **the system prompts anyone without access to download or subscribe.**

### Best practices
- **should** **Use SharePlay for real-time experiences** (**things done at the same moment**). **For asynchronous collaboration, give people a way to share or save the activity after the session** (e.g. **view and edit a Freeform board together live, then share a link afterward**).
- **should** **Fit the experience to what people do together**: **one shared view for watching or browsing**; **role-adapted views for richer experiences (a game with a perspective per player).**
- **should** **Work across Apple platforms**: **people share across devices, settings and communication methods**; **build adaptable experiences.**
- **should** **Make it easy to start**: **a clear, recognisable control such as a button with the SharePlay symbol** (illustration: **a blue "Start Activity" button with the SharePlay symbol**), **and system routes such as the share sheet**; **in visionOS, the Share button next to the window bar.**
- **should** **Let people join without friction**: **get them to the shared content quickly and avoid unrelated views**; **if sign-in, download or subscription is needed, guide them in a view that dismisses as soon as they finish**; **for purchases or subscriptions, lower the barrier with provisional access for nonsubscribers or Family Sharing**; **defer nonessential steps (a game lets people join a match, then set up profiles once connected).**
- **should** **Describe activities clearly and concisely** in the invitation (**a movie: title, short summary, poster image**); **short enough to avoid truncation.**
- **should** **Keep people oriented as an activity changes**: **explain why when one person's action changes it for everyone**; **media playback is coordinated by the system (pause for one pauses for all)**; **for other changes, use in-app cues to show who's doing what** (Freeform shows a participant's initials next to their contribution).
- **must** **Use the term SharePlay correctly**: **as a noun ("Join SharePlay") or as a verb-like label ("SharePlay Movie" button)**; **don't pair it with an adjective** (**in visionOS avoid "virtual" or "spatial"**); **don't alter the term** (**"SharePlayed", "SharePlays", "SharePlaying"**).

### Platform considerations
- **tvOS:** no additional considerations. **watchOS:** not supported.

#### iOS, iPadOS, macOS
- **should** **Support Picture in Picture for shared video**: **people keep watching together while doing other things**; **iPhone and iPad: a PiP window**; **Mac: a window people bring forward when they want to watch.**

#### visionOS
**SharePlay adds presence to shared activities** (**same room, distant friends, FaceTime**). **Standard windows are shareable through screen mirroring by default via the Share button**; **adopt SharePlay to share volumetric windows and immersive content.**

##### Designing shared activities
- **The system creates a shared context** so **everyone experiences the content at the same relative location**; **people discuss, point to and interact with content as if it were in the room.** **Aligning windows and volumes across devices builds confidence they're looking at the same thing**; **position 3D objects, play sounds and support interactions to strengthen togetherness.**
- **should** **Prefer starting from a window** (**shareable via the Share button next to the window bar**); **an activity that begins in an immersive space needs custom UI to start it.**
- **should** **Resolve conflicts naturally**: **when several people may act on the same thing, avoid UI that lets another person take control if only one can use it at a time**; **let people speak or gesture to ask for a turn**; **consider a simple rule such as "last change wins".**
- **should** **Reserve unique views for moments that need them**: **keep views and immersion levels in sync generally**; **when someone enters their own immersive view, replace their spatial Persona with a contact photo so others know they've stepped away, and keep talking over FaceTime Audio.**
- **should** **Let people opt in to immersion changes when mid-task**: **when one person changes immersion, the app can bring everyone along, but first check whether it would interrupt someone**; **if so, let them choose when to join** (example: **Apple TV app: others in another window see a prompt to join when ready; everyone else transitions at once**) (`immersive-experiences.md`).
- **should** **Let participants customise for comfort and accessibility** (**volume, subtitles**), **unique to each participant** (one person's change must not affect others).
- **should** **Make it easy to leave and rejoin**: **a clear control to rejoin quickly**; **a windowed version lets people keep multitasking while staying connected to the activity and FaceTime Audio.**

##### Personas
- **How someone appears depends on device and place**: **remote Apple Vision Pro users appear as a spatial Persona** (**eye contact, gestures, moving around, interacting with content**) **or a contact photo if no Persona is set up**; **iPhone, iPad, Mac and Apple TV participants appear in a 2D video window**; **people wearing Vision Pro in the same room see shared content in the same physical place and see each other through passthrough.**
- **must** **Support people who aren't represented by a spatial Persona** (other devices, Persona turned off, windowed FaceTime): **make the activity work for all of them**; **if it relies on facial expressions or gestures, offer alternatives in the UI.**

##### Spatial templates
**A spatial template arranges participants around your content automatically; each person has a seat that fixes where they appear and which way they face.** **Adopt the template that best fits, or create a custom one.**

| Template | Arrangement | Best for |
|---|---|---|
| **Side-by-side** | **Participants next to each other along a curve, all facing the shared content** | **Viewing or watching**; **less nonverbal interaction, focus on content** |
| **Surround** | **A circle around the content**; **participants face each other like around a table** | **Tabletop games and centralised experiences**; **3D or per-participant content**; **verbal and nonverbal interaction** |
| **Conversational** | **A circle/semi-circle around a centre point with content along the edge** | **People being together while the app works in the background (music)**; **not everyone has the same view, so interaction may be inconvenient** |

- **should** **Divide a complex activity into stages**, **each with its own template** (a game: one template to choose teams, another for play); **mix system and custom templates rather than building one complex custom template.**
- **should** **Let people initiate template transitions**: **tie changes to an explicit action** (choosing a team triggers the role and seat change); **unexpected moves are disorienting.**
- **should** **Keep transitions smooth**: **avoid frequent or large moves**; **fade out and back in and give visual cues to reorient.**
- (Illustrations: **side-by-side: participants next to one another facing a shared screen**; **surround: participants in a circle around shared content**; **conversational: participants in a semi-circle around shared content**.)

##### Custom templates
**Seats apply only to people with a spatial Persona in visionOS**; **others on other platforms take part without a seat.**
- **must** **Account for people who are physically together**: **they see each other through passthrough and a template can't move someone who's physically present**; **if the activity depends on positions, guide people with visual cues such as position markers** (a tabletop game shows each player which seat to take).
- **should** **Provide the best seat orientation**: **seats face the content's centre by default, and you control the direction** (`SpatialTemplateSeatElement`).
- **should** **Support the maximum number of seats**: **Vision Pro supports up to 5 spatial Personas in an activity**, **so include 5 seats when the activity allows**; **define every seat up front and keep a seat after someone leaves, so anyone can take a spot at once**; **for participant limits (a two-player game), consider spectator seats.**
- **should** **Place seats at least 1 metre apart**: **enough room to interact**; **handshakes and high fives still work**, **but a spatial Persona that gets too close to another is replaced with a contact photo, breaking presence.**
- **should** **Define the order in which people take seats**: **seats fill in order of joining**; **order them so the arrangement stays balanced when only some are occupied** (left-to-right filling can look unbalanced).
- **must** **Keep roles independent of seats**: **a role (player, spectator, team member) must work for everyone, including people without a seat**; **let people fill any open seat**; **reserve a spot only for a role that truly needs it (a game host at the head of a table).**

## Specs & values
| Item | Value |
|---|---|
| Start routes | in-app control (SharePlay symbol) · FaceTime call · shared link · share sheet · visionOS Share button next to the window bar |
| Purchases | each participant needs their own copy or subscription; provisional access or Family Sharing lowers the barrier |
| Invitation text | title, short summary, poster image; no truncation |
| Term | noun or verb-like label; no adjectives; no variations (SharePlayed / SharePlays / SharePlaying) |
| iOS/iPadOS/macOS | Picture in Picture (Mac: a window brought forward) |
| visionOS sharing | standard windows via screen mirroring by default; SharePlay for volumes and immersive content |
| Spatial Personas | **up to 5** in an activity |
| Seat spacing | **≥ 1 m** apart |
| System templates | side-by-side · surround · conversational |
| Seats | define all up front; keep a seat after leaving; balanced fill order; spectator seats for limits; roles not tied to seats |
| Transitions | person-initiated; infrequent; fade out/in with cues |
| Conflict rule example | last change wins |
| Developer docs | Group Activities |
| Videos (link only, not watched) | Share visionOS experiences with nearby people (WWDC25 318) · Design spatial SharePlay experiences (WWDC23 10075) · Add SharePlay to your app (WWDC23 10239) |
| Apple's Related list | none (Resources list developer docs and videos only) |
| Change log | Sep 9 2026 reorganised, visionOS expanded, custom templates; Dec 5 2023 visionOS art; Jun 21 2023 visionOS; Dec 19 2022 nonsubscriber join guidance |

## Visual notes (link-only: from alt texts and the catalog list)
- **Hero:** a sketch of **the SharePlay icon** over grid lines, **tinted blue** (alt).
- **Shared-video pair (catalog `shareplay-01`, light only):** **a participant's iPhone with a banner showing who started the activity and the starter's thumbnail lower right**, and **the starter's iPhone with a confirming banner and the other participant's thumbnail lower right.**
- **Start button (single, light and dark):** **a blue "Start Activity" button with the SharePlay symbol.**
- **Template illustrations (single, light only):** **side-by-side, surround, conversational** (see above).
- **Mismatches / notes:**
  1. **The page says the term can be a verb, but its example is a button label ("SharePlay Movie")**, **so use it as a noun or as a modifier-free label, not a full verb ("let's SharePlay")** (check with Apple's Trademark guidelines).
  2. **"Use SharePlay for real-time experiences" lists asynchronous collaboration as a follow-up**, **but the page doesn't specify how to share or save** (a link is the example).
  3. **The "Seats ≥ 1 m apart" and "5 Personas" values apply to Vision Pro custom templates only**; **the page gives no seat geometry for the system templates.**
  4. **"Prefer starting from a window" is a preference**; **for immersive starts the page requires custom UI without describing it.**
  5. **"Last change wins" is an example rule**, **not a requirement.**
  6. **The page doesn't say how to handle latency, reconnection or state resync failures**; **details live in the Group Activities docs.**
  7. **The page doesn't cover accessibility beyond per-participant comfort settings** (**volume, subtitles**).
- **Catalog:** the script found **1 comparison** (the two iPhone screenshots of a shared video). **Not catalogued:** **the hero, the Start Activity button and the three template illustrations.** Catalog total **269** (was 268); the 268 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **shareplay-01** (neutral pair, light only; no rule text on the page): **a participant's view and the starter's view of the same shared video**, each with **a banner at the top and the other person's thumbnail in the lower-right corner**. The script reports **1 comparison** for this page.

## Web translation
**SharePlay (Group Activities) is native to Apple platforms and FaceTime/Messages.** **On the web, a shared-session feature uses an invite link plus real-time sync (WebRTC data channels/media, WebSocket, or a CRDT service) and `Media Session`/synchronised playback for video**; **the Web Share API can start the invite.** **A "Watch together" button may use a generic icon; don't imitate the SharePlay symbol or claim SharePlay.** Statements about web APIs are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Real-time experiences; async afterwards | **A live session with a "Save/Share link" at the end** (**session summary or shareable board**); **presence and live cursors while together**; **persistent artefact after** (`collaboration-and-sharing.md`). |
| Shared view vs role-adapted view | **Sync one view state for watch/browse** (**position, page, selection**); **per-role UIs for games and tools** (**host, player, spectator**) driven by role data. |
| Works across platforms | **Responsive, browser-independent client**; **feature-detect** (`getUserMedia`, `RTCPeerConnection`, `navigator.share`); **degrade to view-only** on unsupported browsers. |
| Clear start control | **A primary button "Watch together" / "Start session" with a Lucide/Phosphor `users`/`video` icon** (**not SharePlay's symbol**), **and `navigator.share()` for the invite link, with a copy-link fallback** (`activity-views.md`, `buttons.md`). |
| Join without friction | **The invite link opens directly to the session**; **sign-in/subscribe/download steps in a dialog that closes on completion and returns to the session (`returnTo`)**; **guest or preview access** for nonmembers (**provisional access**) and **family/household plans**; **defer profile setup** (`managing-accounts.md`, `sheets.md`). |
| Describe activities in the invite | **A link preview (Open Graph title, description, poster image) and an in-page invite card**; **short to avoid truncation** (`writing.md`). |
| Keep people oriented | **A banner "Sam started 'Movie night'"**, **avatars/initials on contributions**, **a live participant list**, **toasts for shared actions ("Sam paused for everyone")** with `aria-live="polite"` (`feedback.md`). |
| Correct use of the term SharePlay | **On Apple-related pages, use "SharePlay" only for Apple's feature**, **as a noun or button label, without adjectives or variations**; **use your own name ("Watch together") for your web feature.** |
| Picture in Picture for shared video | **`video.requestPictureInPicture()` or the Document PiP API** (**verify support**) so people keep watching while multitasking (`playing-video.md`, `multitasking.md`). |
| Spatial templates and Personas (visionOS) | **Native/WebXR only**; **on flat web: a participant grid or side panel**; **offer non-facial alternatives** (**chat, reactions, emoji, hand-raise**) for people without cameras (`eyes.md`, `immersive-experiences.md`). |
| Conflict resolution | **Server-authoritative "last write wins" or CRDT**; **"request control" gestures (raise hand)**; **lock UI for single-user tools** rather than letting people fight (`entering-data.md`). |
| Per-person comfort settings | **Volume, captions, reduced motion stored per participant, never broadcast** (`accessibility.md`, `motion.md`). |
| Leave and rejoin | **A "Leave" and a "Rejoin" button, session state preserved on the server**; **reconnect automatically after network loss** (`modality.md`). |
| Native-only | **`GroupActivities`, FaceTime/Messages integration, spatial Personas/templates, system coordination of playback** are native; **web builds use their own sync services.** |

Field-note cross-links:
- `field-notes/*`: **no shared-session recipe**; nothing conflicts.
- `hig/patterns/collaboration-and-sharing.md` (✓): **its "SharePlay" row now points here**; `hig/components/menus/activity-views.md` (✓): **starting via the share sheet**; `hig/getting-started/designing-for-visionos.md` (✓), `hig/foundations/immersive-experiences.md` (✓), `hig/foundations/spatial-layout.md` (✓), `hig/inputs/eyes.md` (✓): **spatial context, immersion changes, gaze/gesture alternatives**; `hig/patterns/playing-video.md` (✓): **shared playback and Picture in Picture**; `hig/patterns/multitasking.md` (✓): **staying connected while multitasking**; `hig/patterns/managing-accounts.md` (✓) and `hig/technologies/apple-in-app-purchase.md` (✓): **sign-in, subscriptions, provisional access, Family Sharing**; `hig/technologies/game-center.md` (✓) and `hig/inputs/game-controls.md` (✓): **multiplayer games, roles and spectators**; `hig/technologies/app-clips.md` (✓): **fast joining from a link**; `hig/foundations/privacy.md` (✓): **who can see who; Persona and camera data**; `hig/foundations/accessibility.md` (✓): **per-participant comfort**; `hig/patterns/feedback.md` (✓ CRITICAL): **status banners**; `hig/getting-started/designing-for-tvos.md` (✓): **SharePlay on tvOS.**
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **A clear start control exists (button with a recognisable icon, plus the share sheet or invite link).**
- [ ] **Joining is quick**: **sign-in, download or subscription steps happen in a view that closes when done**, **nonessential steps are deferred**, **provisional access or family plans are considered.**
- [ ] **Invitations describe the activity briefly** (**title, summary, poster**).
- [ ] **Everyone sees who did what**; **shared actions explain themselves.**
- [ ] **The wording "SharePlay" follows the rules** (**noun or label, no adjectives, no variants**) **or the feature has its own name.**
- [ ] **Shared video supports Picture in Picture.**
- [ ] **(visionOS) Windows start the experience**, **conflicts resolve naturally**, **immersion changes are opt-in mid-task**, **comfort settings are per person**, **leave and rejoin is easy**, **non-Persona participants can take part fully.**
- [ ] **(visionOS templates) Stages use fitting templates**, **transitions are person-initiated and smooth**, **custom templates define 5 seats ≥ 1 m apart in a balanced fill order with roles independent of seats and cues for people who are physically together.**

## Related
- Ingested: Collaboration and sharing (✓), Activity views (✓), Designing for visionOS (✓), Immersive experiences (✓), Spatial layout (✓), Eyes (✓), Playing video (✓), Multitasking (✓), Managing accounts (✓), Apple In-App Purchase (✓), Game Center (✓), Game controls (✓), App Clips (✓), Privacy (✓), Accessibility (✓), Feedback (✓ CRITICAL), Designing for tvOS (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Group Activities.
- Videos: Share visionOS experiences with nearby people (WWDC25 318) · Design spatial SharePlay experiences (WWDC23 10075) · Add SharePlay to your app (WWDC23 10239).
