# Game Center
Source: https://developer.apple.com/design/human-interface-guidelines/game-center · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, or visionOS", plus **tvOS** and **watchOS** sections) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (new guidance for **challenges and multiplayer activities**, considerations for the **Apple Games app and Game Overlay**, updated activity preview-image specifications; earlier rows: **February 2, 2024**, links for the access point and dashboard in visionOS games; **September 12, 2023**, iOS achievement layout artwork; **May 2, 2023**, one consolidated page). **Link-only ingestion: one DocC fetch, read in full (227 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **4 achievement states**, **2 leaderboard types**, **2-line** achievement title/description, **1–5 minute** challenges, **8-character** party codes, **4 corners** for the access point, and the **image-spec tables** (achievement, leaderboard, challenge, multiplayer activity, tvOS dashboard).

## In one line
**Game Center** is Apple's **social gaming network**: **discover what friends play, invite them, and see game activity across the system (Apple Games app, App Store, notifications)**, which **also surfaces your game to more players.** **Initialise the player at launch if not signed in** (best discovery, Top Played, friend recommendations). **Access point:** **a circular Apple control in a fixed corner** that opens the **Game Overlay (iOS, iPadOS, macOS)** or the **full-screen dashboard (tvOS, visionOS)**; **show it on menu screens, not during play, splash, cinematics or tutorials; keep controls away from it (collapsed and expanded); consider pausing while the overlay is open.** **Custom links** use **official artwork and exact terms** (Game Center, Game Center Profile, Achievements, Leaderboards, Challenges, Add Friends). **Achievements:** map to **four states**, choose the upload order, **title and description ≤ 2 lines (Title Case title, sentence-case description)**, progressive achievements with encouragement, **rich unique images (circular mask, keep content centred, 1024 px)**. **Leaderboards:** **classic vs recurring**, **sets**, **unique images (single on iOS/iPadOS/macOS, layered set on tvOS)**, mind cropping. **Challenges:** **1–5 minute** skill-based, **most recent score (not best or overall progress)**, **deep-link to the exact mode/level after any needed tutorial**, artwork not hiding under the title. **Multiplayer activities:** **party codes (about 8 characters, viewable, enterable, late join/leave/return)**, in-game invite UI, activity artwork. **tvOS:** optional **600×180 pt dashboard image (logo/word mark, not the app icon)**. **watchOS:** **no Game Center UI; it appears on the connected iPhone.** On the web: **Game Center is native-only; the patterns map to your own leaderboards, achievements, challenges, party codes, Web Share and deep links.**

## Rules

### Framing (intro)
- Supporting Game Center lets players **discover new games friends are playing**, **invite friends to play** and **see the latest activity from their games across the system (the Apple Games app, the App Store, notifications and more)**; this also **helps surface your game to more players across Apple platforms**.
- Add Game Center with the **GameKit framework**, which provides **a full-featured UI** for players to access their Game Center data **inside your game**, or use GameKit to **present the data in your own custom UI**.

### Accessing Game Center
- **should** **When the game launches, check whether the player is signed in to Game Center on the system; if not, initialise the player with Game Center then.** This gives **the most seamless experience** and **maximises discovery** (**Top Played chart, friend recommendations**).

#### Integrating the access point
- The **access point** is **an Apple-designed UI element** that lets players **view their Game Center profile and information without leaving your game**. (A screenshot: **The Coast's title screen with a circular button showing a diagonal rocket symbol in the upper leading corner**.)
- **iOS, iPadOS, macOS:** the access point opens the **Game Overlay**, **a system overlay to view progress and start game activities**. (An illustration: **iPhone: the overlay covers the entire screen; iPad: it appears vertically along the trailing edge**.)
- **visionOS, tvOS:** it opens **the in-game dashboard, a full-screen view of the player's Game Center activity on top of your game**.
- **should** **Display the access point in menu screens** (**main menu or settings**). **Avoid it during active gameplay or in temporary splash screens, cinematic flows or tutorials** that precede the main menu.
- **should** **Avoid controls near the access point.** It can sit **in any of the four screen corners in a fixed position**; it has **collapsed and expanded** versions, so **check for overlap with important UI and controls and adjust the layout**.
- **Note:** **in visionOS the access point's location varies by game type (immersive or volume-based).**
- **may** **Consider pausing the game while the Game Overlay or dashboard is showing**, so players **view Game Center information without feeling the game continues without them**.

#### Using custom UI
- Your game can include **custom links into the Game Overlay (iOS, iPadOS, macOS) or the dashboard (visionOS, tvOS)**, **deep-linking to areas such as leaderboards or a player's Game Center profile**.
- **must** **Use the artwork Game Center provides in custom links** (official artwork from Apple Design Resources); **preserve its appearance and don't change its dimensions or visual effects.**
- **must** **Use the correct terminology** to avoid confusing players:
| Term | Incorrect terms | Localisation |
|---|---|---|
| Game Center | GameKit, GameCenter, game center | use the **system-provided translation** of *Game Center* |
| Game Center Profile | Profile, Account, Player Info | system-provided translation of *Game Center*, **localise "Profile"** |
| Achievements | Awards, Trophies, Medals | |
| Leaderboards | Rankings, Scores, Leaders | |
| Challenges | Competitions | |
| Add Friends | Add, Add Profiles, Include Friends | |

### Achievements
- Achievements **give players extra incentive to stay engaged**. They appear as **collectible cards that highlight progress and show your artwork** (developer: "Rewarding players with achievements"). (Screenshots: **Achievements overview** and **Achievement detail** in the Game Overlay.)

#### Integrating achievements into your game
- **should** **Align with Game Center's four achievement states: locked, in-progress, hidden, completed.** The system **groups by completion: completed achievements in Completed, all others in Locked**. Mapping yours to the four states **gives a consistent experience and lets players see at a glance the kinds of achievements you offer**.
- **should** **Determine the display order**: **the upload order is the display order** (e.g. **along the most common path through the game**), so decide **before uploading**.
- **should** **Be succinct.** **Title and description are limited to two lines each; longer text is truncated.** **Title Case for the title and sentence case for the description.** (A diagram labels **the achievement image, title and description** on the card.)
- **should** **Give a sense of progress.** **Progressive achievements** show player progress and **encouraging messages** such as "You're more than halfway to completing Great Lakes Freighter in The Coast. Keep going!"

#### Creating achievement images
- **should** **Design rich, high-quality images that make players feel rewarded.** Achievements are prominent in Game Center UI; **avoid reusing one asset for several achievements**. **With no asset, the card shows a placeholder.**
- **must** **Create artwork in the right size and format.** **The system applies a circular mask, so keep content centred.**
| Attribute | iOS, iPadOS, macOS, visionOS | tvOS |
|---|---|---|
| Format | PNG, TIF or JPG | PNG, TIF or JPG |
| Colour space | sRGB or P3 | sRGB or P3 |
| Resolution | 72 DPI minimum | 72 DPI minimum |
| Image size | **512 × 512 pt (1024 × 1024 px @2x)** | **320 × 320 pt (640 × 640 px @2x)** |
| Mask diameter | **512 pt (1024 px @2x)** | **200 pt (400 px @2x)** |

### Leaderboards
- Leaderboards **encourage friendly competition**: players **check their rank against friends and global players** and **get notifications when friends challenge them or pass their score**. Use **the system-designed UI or your own custom UI** (developer: "Encourage progress and competition with leaderboards"). (Screenshots: **Leaderboards overview** and **Leaderboard detail**.)
- **should** **Choose a leaderboard type: classic or recurring.**
  - **Classic:** **best all-time score, always active, never ends**. Examples: **the most perfect score in a rhythm game; most coins in a single dungeon run; longest continuous time in an endless runner**.
  - **Recurring:** **resets on an interval you define (weekly, daily)**; **more chances to take the lead, more engagement**. Examples: **daily rotating puzzles; seasonal or holiday events; weekly boards for different battle modes**.
- **should** **Use leaderboard sets for multiple leaderboards** to help players find a board; group by **theme or gameplay**: **difficulty modes (Easy, Standard, Hard)**, **activity types (Combat, Crafting, Farming)**, **genres and themes (Disco, Pop, Rock)**.
- **should** **Add leaderboard images.** A **unique image per leaderboard** reflecting **the gameplay behind the ranking**; boards **appear across the system** and compelling images **attract players**. **iOS, iPadOS, macOS: one image.** **tvOS: a set of layered images that animate when focused** (→ Focus and selection; a tvOS template is on Apple Design Resources).
| Attribute | iOS, iPadOS, macOS | tvOS |
|---|---|---|
| Format | JPEG, JPG or PNG | PNG, TIF or JPG |
| Colour space | sRGB or P3 | sRGB or P3 |
| Resolution | 72 DPI minimum | 72 DPI minimum |
| Image size | **512 × 512 pt (1024 × 1024 px @2x)** | **659 × 371 pt (1318 × 742 px @2x)** |
| Cropped area | **512 × 312 pt (1024 × 624 px @2x)** | — |
| Focused size | — | **618 × 348 pt (1236 × 696 px @2x)** |
| Unfocused size | — | **548 × 309 pt (1096 × 618 px @2x)** |
- **Note:** **mind cropping.** In **iOS, iPadOS, macOS the system crops artwork for boards that belong to a set**; in **tvOS the focus effect may crop the edges of some layers**. **Keep primary content comfortably visible in both cases.**

### Challenges
- **Challenges turn single-player activities into multiplayer ones with friends.** **Built on leaderboards**, they **let players compete with friends within time limits** (developer: "Creating engaging challenges from leaderboards"). (Screenshots: **Challenges overview** and **Challenge detail**.)
- **should** **Create engaging challenges:** **short, skill-based activities with a clear measure of achievement**, **taking 1–5 minutes** and **completable individually**. Examples: **the fastest lap in a racing level; defeating the most enemies in one round; solving a daily puzzle with the fewest mistakes**.
- **should not** **Create challenges that track overall progress or personal-best scores**: **they give regular players an unfair advantage.** **Track the most recent score after each attempt** to keep everyone on a level playing field.
- **should** **Make it easy to jump in.** Players reach challenges via **invitation links, the Game Overlay, or the Games app (iOS, iPadOS, macOS)**. **Always deep-link to the exact mode or level where the challenge begins**, and **help first-time players finish any initial onboarding first**: e.g. **if a tutorial level teaches the controls, launch it first and show UI saying the game will jump into the challenge afterwards.**
- **should** **Create high-quality artwork.** The system shows it **in the Game Overlay, the Games app and in the invitation-link preview**. **Keep primary content out of the area where the challenge's title and description may cover it**; **for text in the image, provide localised versions through App Store Connect or Xcode.** (A diagram labels the **challenge card: title, artwork, number of players and the system gradient at the bottom**.)
| Attribute | Value |
|---|---|
| Format | JPEG, JPG or PNG |
| Colour space | sRGB or P3 |
| Resolution | 72 DPI minimum |
| Image size | **1920 × 1080 pt (3840 × 2160 px @2x)** |
| Cropped area | **1465 × 767 pt (2930 × 1534 px @2x)** |

### Multiplayer activities
- Game Center supports **real-time and turn-based multiplayer activities**; players reach them through **party codes, the Game Overlay, the dashboard, or the Games app** (developer: "Creating activities for your game"). (Screenshots: **Multiplayer levels overview** and **Multiplayer level detail**.)
- **should** **Use party codes to invite players.** **Party codes coordinate real-time sessions whether you use Game Center matchmaking and networking or your own.** Game Center generates **alphanumeric codes typically eight characters long, like "2MP4-9CMF"**. Guidelines:
  - **Allow players to join late, leave early and return later.**
  - **Provide a way to view the current party code in the game.**
  - **Allow entering a party code manually.**
  (A screenshot shows **the in-game UI for setting up or joining an activity with a custom code**.)
- **should** **Support multiplayer through in-game UI.** The **Game Overlay and dashboard help players find others without leaving the game**; the **default interface lets a player invite nearby or recent players, Game Center friends and contacts**; you can also **present multiplayer in custom UI** (developer: "Finding multiple players for a game"). (A screenshot shows the **in-game UI starting a multiplayer activity**.)
- **should** **Provide engaging activity artwork.** Players see the preview image **throughout the system (party codes, the Games app, in-game UI)**. (A diagram labels **the activity card: title, artwork, number of players, system gradient at the bottom**.) Specs: **the same as challenge artwork** (table above): **1920 × 1080 pt (3840 × 2160 px @2x), cropped area 1465 × 767 pt (2930 × 1534 px @2x), JPEG/JPG/PNG, sRGB or P3, 72 DPI minimum**.

### Platform considerations
- **iOS, iPadOS, macOS, visionOS:** no additional considerations.

#### tvOS
- **should** **Display an optional image at the top of the dashboard** to **highlight your game's aesthetic**: **simple, easily recognised, good at a distance**; **consider your game's logo or word mark; don't use the app icon.**
| Attribute | Value |
|---|---|
| Image size | **600 × 180 pt (1200 × 360 px @2x)** |
| Format | PNG, TIF or JPG |
| Colour space | sRGB or P3 |
| Resolution | 72 DPI minimum |

#### watchOS
- **should** **Be aware of Game Center support on watchOS.** **GameKit features and APIs are available for watchOS games, but there is no system-supported Game Center UI to invoke on watchOS**; **Game Center content for watchOS games appears on a connected iPhone.**

## Specs & values
| Item | Value |
|---|---|
| Access point | fixed corner (any of 4); collapsed and expanded; menus only; opens Game Overlay (iOS/iPadOS/macOS) or dashboard (tvOS/visionOS) |
| Achievement states | **locked · in-progress · hidden · completed** (grouped Completed vs Locked) |
| Achievement text | title and description **≤ 2 lines**; Title Case title, sentence-case description |
| Achievement image | 512 × 512 pt (1024 px @2x), mask 512 pt; tvOS 320 × 320 pt, mask 200 pt |
| Leaderboard types | **classic** (best all-time) · **recurring** (resets daily/weekly…) |
| Leaderboard image | iOS/iPadOS/macOS 512 × 512 pt, crop 512 × 312 pt; tvOS 659 × 371 pt (focused 618 × 348, unfocused 548 × 309) |
| Challenge | **1–5 minutes**; most recent score, not personal best; deep link to the exact mode/level |
| Challenge / activity image | 1920 × 1080 pt (3840 × 2160 px @2x); crop 1465 × 767 pt (2930 × 1534 px @2x) |
| Party code | alphanumeric, about **8 characters** ("2MP4-9CMF"); viewable, enterable, join late/leave early/return |
| tvOS dashboard image | 600 × 180 pt (1200 × 360 px @2x); logo/word mark, not the app icon |
| Image files | JPEG/JPG/PNG (or PNG/TIF/JPG for achievements and tvOS), sRGB or P3, **72 DPI minimum** |
| Terms | Game Center · Game Center Profile · Achievements · Leaderboards · Challenges · Add Friends (never the "incorrect" variants) |
| watchOS | no system Game Center UI; content on the connected iPhone |
| Developer docs | **GameKit** · "Adding an access point to your game" · "Rewarding players with achievements" · "Encourage progress and competition with leaderboards" · "Creating engaging challenges from leaderboards" · "Creating activities for your game" · "Finding multiple players for a game" · Create games for Apple platforms · Game Porting Toolkit |
| Videos (links only, not watched) | Get started with Game Center (WWDC25 214) · Engage players with the Apple Games app (WWDC25 215) |
| Apple's Related list | Designing for games (✓) · Game controls (✓) · Apple Design Resources |
| Change log | Jun 9 2025 · Feb 2 2024 · Sep 12 2023 · May 2 2023 |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of the **Game Center icon** over grid lines, **tinted blue** (alt).
- **The Coast** (an Apple sample game) appears in **all screenshots**: the **title screen with the collapsed access point (circular, diagonal rocket symbol, upper leading corner)**; the **Game Overlay on iPhone (full screen) and iPad (vertical, trailing edge)**; **Achievements overview and detail**; **Leaderboards overview and detail**; **Challenges overview and detail**; **Multiplayer levels overview and detail**; **the custom-code UI** and **the in-game start UI** (catalog `game-center-01`, `-03`, `-05`, `-06`).
- **Anatomy diagrams:** **achievement card** (image, title, description), **challenge card** and **multiplayer activity card** (title, artwork, number of players, **system-provided gradient at the bottom**).
- **Spec diagrams (tabs, catalog `-02`, `-04`):** achievement image layout (iOS/iPadOS/macOS/visionOS vs tvOS), leaderboard image layout (iOS/iPadOS/macOS vs tvOS with focused and unfocused sizes); **challenge/activity image spec** and **tvOS dashboard image** diagrams.
- **Mismatches / notes:**
  1. **Achievement image size on iOS/iPadOS/macOS/visionOS equals the mask diameter (512 pt)**, so **the "circular mask" cuts the square's corners**; **on tvOS the image (320 pt) is larger than the mask (200 pt)**.
  2. **The leaderboard image size (512 × 512) and cropped area (512 × 312)** mean **the top and bottom (about 100 pt) may be cropped**, while **set boards crop by the system**.
  3. **Challenge and multiplayer artwork specs are identical**, though **the card overlays differ** (title, number of players, gradient).
  4. **The party code example "2MP4-9CMF" is shown with a hyphen** in the middle; **the page says "typically eight characters"** (the hyphen isn't counted).
  5. **"GameCenter" and "game center" are listed as incorrect**, but **the page itself writes "Game Center" only**.
  6. **The Change log mentions "challenges and multiplayer activities" as new (2025)**, yet **the intro's list of benefits doesn't mention them**.
  7. **The access point can go in any of four corners**, but **the screenshot shows the leading upper corner**; **right-to-left layouts aren't discussed**.
- **Catalog:** the script found **6 comparisons** (below). **Not catalogued:** the hero, the access-point screenshot, the Game Overlay illustration, the anatomy diagrams, the multiplayer in-game/custom-code screenshots, challenge image spec and tvOS dashboard image (single images). Catalog total **258** (was 252); the 252 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **game-center-01 … game-center-06** (neutral pairs, mostly light only; page-level examples):
- **-01** **Achievements overview** and **Achievement detail**. **-02 (tabs)** **achievement image layout: iOS/iPadOS/macOS/visionOS vs tvOS** (rule "Create artwork in the appropriate size and format").
- **-03** **Leaderboards overview** and **Leaderboard detail**. **-04 (tabs)** **leaderboard image layout: iOS/iPadOS/macOS vs tvOS** (rule "Add leaderboard images").
- **-05** **Challenges overview** and **Challenge detail**. **-06** **Multiplayer levels overview** and **Multiplayer level detail**.
The script reports **6 comparisons** for this page.

## Web translation
**Game Center is native-only** (GameKit, Apple accounts, the Apple Games app, the Game Overlay). **Web games use their own backend** (or a platform such as a game service) for **profiles, leaderboards, achievements, challenges and matchmaking**. **The design rules carry over** as **social-game UX patterns**; **Apple's artwork, terminology (Game Center, Achievements, Leaderboards…) and image specs apply only when you present Game Center itself.** Statements about web APIs are background knowledge.

| HIG rule | Web implementation |
|---|---|
| Initialise the player at launch if signed in elsewhere | **Restore the session at load** (token/passkey, **Sign in with Apple JS** if you offer it); **offer sign-in on the first menu screen, not mid-game** (`managing-accounts.md`). |
| Access point in menus only; corner fixed; no controls nearby; pause while open | **A "Profile / Leaderboards" button in the menu/settings**; **fixed corner, `position: fixed` with `env(safe-area-inset-*)`**, **reserve space (no overlapping controls)** in collapsed **and** expanded states; **auto-pause the game loop on `visibilitychange` and when the overlay opens**. |
| Overlay (phone: full screen; iPad: trailing side panel) / tvOS-visionOS dashboard | **Bottom sheet or full-screen sheet on phones, trailing side panel on tablets and desktop, full-screen view on TV/XR** (`sheets.md`, `split-views.md`); **focus trapped and restored** (`focus-and-selection.md`). |
| Custom links: official artwork, exact terminology | **When linking to Apple's Game Center from a web page (rare), use Apple's artwork unmodified**; **otherwise use your own icons** (**Lucide/Phosphor/Ionicons**, **no Apple marks or SF Symbols**) and **your own consistent terms** (**Achievements, Leaderboards, Challenges, Add Friends**; never "Trophies/Rankings" if you mirror Apple's vocabulary). |
| Achievement states; order; two-line text; progress | **Data model** `state: locked | in_progress | hidden | completed`; **explicit `order`**; **title Title Case, description sentence case, `-webkit-line-clamp: 2`**; **progress bar + encouraging line** ("More than halfway there. Keep going!"). |
| Achievement image: circle mask, 1024 px, unique | **`border-radius: 50%` mask on a square PNG/WebP (≥ 512 CSS px source, 2× for retina)**, **content centred in the inscribed circle**, **unique art per achievement**, **placeholder only when missing**. |
| Leaderboards: classic vs recurring; sets | **`all-time` and `daily/weekly` boards (reset by cron, timezone stated)**, **grouped tabs or a select for sets (difficulty, mode)**; **friends vs global filter**; **rank + score table** (`lists-and-tables.md`) with **your row pinned**. |
| Leaderboard image cropping | **`aspect-ratio` + `object-fit: cover` with a safe area**: **keep key content inside the central 512 × 312 region**. |
| Challenges: 1–5 min, skill-based, most-recent score, deep link | **Time-boxed challenge with `endsAt`**; **score = latest attempt**; **invite link `/challenge/abc` → `pushState` deep link into the exact level, after a skippable tutorial with a "then we'll jump to the challenge" banner**; **Web Share API (`navigator.share`) for invites**. |
| Challenge/activity artwork not hidden by text | **Card with a bottom gradient overlay**; **keep focal content in the top ~60 %**; **localised text baked into images only via per-locale assets**; **`og:image` at 1200 × 630 (CONV) for link previews** (the Apple spec is 1920 × 1080). |
| Party codes: ~8 alphanumeric characters, show, enter, late join | **`crypto.getRandomValues` → 8 chars from an unambiguous alphabet (no 0/O/1/I), shown as `XXXX-XXXX`**, **copy button**, **manual entry field that strips hyphens/spaces and uppercases**, **join/leave/rejoin supported (session state on the server)** (`entering-data.md`). |
| In-game invite UI | **Invite from a "Play with friends" sheet**: **recent players, friends, contacts (Contact Picker API where supported), share link/QR**; **no forced sign-up to join** (guest join). |
| tvOS dashboard image 600×180 | **A wordmark banner at the top of the TV layout**, **not the app icon**, **readable at 10 feet**. |
| watchOS: no Game Center UI | **Small screens/companion flows**: **defer the social hub to the phone**; **show a link/QR** ("Open on your phone"). |
| Accessibility | **Leaderboards as real tables with headers**; **achievements with text and state (not colour alone)**; **focus order and keyboard access to the overlay**; **reduced motion for reward animations** (`accessibility.md`). |
| Native-only | **GameKit (`GKAccessPoint`, `GKAchievement`, `GKLeaderboard`, `GKChallenge`, `GKMatchmaker`), the Game Overlay, the Apple Games app, Game Center party codes** are native; **the web has no Game Center API**. |

Field-note cross-links:
- `field-notes/*`: **no social-gaming recipe**; nothing conflicts.
- `hig/getting-started/designing-for-games.md` (✓): **Apple's Related page and the platform matrix**; `hig/inputs/game-controls.md` (✓): **Apple's Related page** (controllers, virtual controls, keyboards); `hig/inputs/focus-and-selection.md` (✓): **tvOS focus effects on layered leaderboard images**; `hig/technologies/apple-in-app-purchase.md` (✓): **games' store UX**; `hig/patterns/managing-accounts.md` (✓) and `hig/foundations/privacy.md` (✓): **sign-in and friend-data privacy**; `hig/foundations/writing.md` (✓): **Title Case titles, sentence-case descriptions**; `hig/components/presentation/sheets.md` (✓): **overlay/sheet behaviour**; `hig/patterns/collaboration-and-sharing.md` (✓): **invites and sharing**; `hig/patterns/onboarding.md` (✓): **tutorial before a challenge**; `hig/components/layout/lists-and-tables.md` (✓): **leaderboard tables**; `hig/patterns/playing-haptics.md` (✓): **game feedback**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Sign-in is restored at launch**; **a sign-in prompt appears on menu screens, not mid-play**.
- [ ] **The social hub button lives in menus/settings**, **fixed in one corner**, **no controls beside it (collapsed and expanded)**, **the game pauses when it opens**.
- [ ] **Achievements have four states, a set order, ≤ 2-line title (Title Case) and description (sentence case), progress with encouragement, unique circular art centred within the mask.**
- [ ] **Leaderboards: classic and recurring boards, sets by theme/difficulty, unique art with a safe crop area**, **your row visible**.
- [ ] **Challenges last 1–5 minutes, use the latest score, deep-link to the exact level after a tutorial, have art clear of title overlays.**
- [ ] **Party codes: ~8 unambiguous characters, viewable, enterable, copy/share, late join/leave/rejoin.**
- [ ] **Invite UI offers recent players, friends, contacts and a link/QR; guests can join.**
- [ ] **Terminology is consistent** (Achievements, Leaderboards, Challenges, Add Friends) and **Apple artwork/names are used only when referring to Apple's Game Center**.
- [ ] **Leaderboards and achievements are accessible** (tables, text states, keyboard, reduced motion).

## Related
- Ingested: Designing for games (✓), Game controls (✓), Focus and selection (✓), Apple In-App Purchase (✓), Managing accounts (✓), Privacy (✓), Writing (✓), Sheets (✓), Collaboration and sharing (✓), Onboarding (✓), Lists and tables (✓), Playing haptics (✓).
- Not yet ingested (linked from this page): none in the HIG (Apple Design Resources is external).
- Developer docs: GameKit (and its guides, see Specs) · Create games for Apple platforms · Game Porting Toolkit.
- Videos: Get started with Game Center (WWDC25 214), Engage players with the Apple Games app (WWDC25 215).
