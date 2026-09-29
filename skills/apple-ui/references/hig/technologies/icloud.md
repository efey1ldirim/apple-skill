# iCloud
Source: https://developer.apple.com/design/human-interface-guidelines/icloud · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data and platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (the only Change log row: guidance added for **synchronising game data through iCloud**; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (34 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from the alt text only. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; it names **10 best practices**, two developer frameworks (**CloudKit**, **GameSave**) and one example of stored state (a magazine app's last page viewed).

## In one line
**iCloud** lets people **reach their photos, videos, documents and more from any device without explicit syncing**; its core value is **transparency**: **people needn't know where content lives and can assume they always see the latest version.** **Make iCloud use automatic (a single first-run choice, all data or none, at most), don't ask which documents to keep, keep content current within storage and bandwidth limits (for very large documents show that a newer version exists and give subtle progress after a few seconds), respect the finite paid storage (people-created content only, not regenerable resources; mind the Documents folder), behave quietly when iCloud is unavailable (no alert; a gentle note that changes won't reach other devices), sync app state and settings people want everywhere, warn before deletions that propagate, make conflict resolution early and easy, include iCloud content in search, and for games sync progress (GameSave with built-in alerts).** On the web: **iCloud has no web API for pages**; **the principles govern any cross-device sync (accounts, offline-first, conflict resolution, storage quotas)**, and **iCloud.com/CloudKit JS** exist only as Apple-run web surfaces.

## Rules

### Framing (intro)
- **iCloud** lets people **access the content they care about (photos, videos, documents and more) from any device without explicit synchronisation.**
- **A fundamental aspect is transparency**: **people don't need to know where content resides and can assume they always access the latest version.**

### Best practices
- **should** **Make it easy to use your app with iCloud.** **People turn on iCloud in Settings and expect apps to work with it automatically.** If people might want a choice, **show a simple option the first time the app opens: use iCloud for all data, or not at all.**
- **should** **Avoid asking which documents to keep in iCloud.** **Most people expect all their content in iCloud and don't want to manage storage per document**; **perform more file-management tasks automatically.**
- **should** **Keep content up to date when possible.** **People should always have the most recent content**, **balanced against device storage and bandwidth.** **For very large documents, let people control when updated content is downloaded**: **design a way to show that a more recent version exists in iCloud**; **while a document updates, give subtle feedback if the download takes more than a few seconds.**
- **should** **Respect iCloud storage space.** **iCloud is a finite resource people pay for**: **store information people create and understand; avoid app resources or content you can regenerate.** **Even without iCloud support, iCloud backups include the contents of every app's Documents folder**, so **be picky about what goes in the Documents folder.**
- **should** **Behave appropriately when iCloud is unavailable.** If someone **turns iCloud off or enables Airplane Mode**, **no alert is needed**; **it may still help to unobtrusively say that changes won't be available on other devices until iCloud access returns.**
- **should** **Keep app state in iCloud.** Besides documents and files, **store settings and app state**: e.g. **a magazine app stores the last page viewed so another device continues where the person left off.** **Only sync settings people want applied to all their devices** (some settings suit work more than home).
- **must** **Warn about the consequences of deleting a document.** **Deleting in an iCloud-enabled app removes the document from iCloud and from all other devices**: **show a warning and ask for confirmation before deleting.**
- **should** **Make conflict resolution prompt and easy.** **Detect and resolve version conflicts automatically where possible**; otherwise **an unobtrusive notification that makes it easy to tell the conflicting versions apart and choose**; **resolve as early as possible so time isn't wasted on the wrong version.**
- **should** **Include iCloud content in search results**: **people with iCloud accounts assume content is universally available and expect search to reflect that.**
- **should** **For games, consider saving player progress in iCloud.** You can implement it yourself, but the **GameSave framework** is **an efficient solution**: **it synchronises save data across devices and offers built-in alerts for syncing issues during offline play or conflicts**; **alternatively use custom UI with GameSave data to resolve those situations** (developer: GameSave).

### Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Principle | **transparency**: content location is invisible; people assume the latest version |
| First-run choice | at most one: **iCloud for all data, or not at all** |
| Per-document keep/skip questions | **avoid** |
| Update feedback | **subtle** feedback if a download takes **more than a few seconds** (large documents: show that a newer version exists, let people choose when to download) |
| Storage | finite and paid: store **created content**, not regenerable resources; backups include **each app's Documents folder** |
| Offline / unavailable | no alert; unobtrusive note that changes won't reach other devices |
| State and settings | sync last-viewed position and settings people want on all devices |
| Deletion | removed everywhere: **warn and confirm** |
| Conflicts | automatic where possible; otherwise an unobtrusive, easy-to-compare choice, early |
| Search | include iCloud content |
| Games | save progress in iCloud (**GameSave**: cross-device sync, built-in offline and conflict alerts, or custom UI) |
| Developer docs | **CloudKit** · **GameSave** |
| Videos / Related | none listed |
| Change log | Jun 9 2025: game-data synchronisation guidance |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of the **iCloud icon** over grid lines, **tinted blue** (alt). Light and dark variants exist.
- **No other images, videos, tables or callouts** on the page.
- **Mismatches / notes:**
  1. **"Avoid asking which documents to keep in iCloud"** is followed by **"let people control when updated content is downloaded" for very large documents**; **the two aren't in conflict** (**download timing vs storage choice**), but **the page doesn't say how to offer that choice**.
  2. **The unavailable-iCloud rule says no alert is needed**, while **the deletion and conflict rules** call for **warnings and notifications**: **the tone is "quiet by default, explicit when data is at risk"**.
  3. **The page mentions iCloud backups of the Documents folder** but **never mentions iCloud Drive, Keychain or Photos by name** (the abstract lists photos, videos, documents).
  4. **The game rule is the only 2025 addition**; **the page doesn't say what happens to game saves when iCloud is off.**
  5. **The page has no Related list and no videos.**
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **261**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**A web page can't use iCloud storage directly** (there is no browser API; Apple's **CloudKit JS** and **iCloud.com** are separate surfaces, and **Sign in with Apple JS** only signs people in). **The principles apply to any cross-device experience on the web**: **account-based sync, offline-first caching, quota management and conflict handling**. Statements about web storage are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Transparency; assume the latest version | **Sync is automatic and invisible**: **server as source of truth**, **push updates (SSE/WebSocket) or refetch on focus/`online`**, **no "Sync now" buttons in the primary flow**; **show a small sync status only when it matters** ("Saved", "Offline, changes will sync"). |
| Easy to use with the account's sync; one first-run choice | **Sync on by default for signed-in users**; **if a choice is needed, one simple first-run option** ("Sync across devices / Keep on this device only"); **remember it** (`settings.md`). |
| Don't ask which documents to sync | **All user content syncs**; **no per-file toggles**; **automate housekeeping** (archives, auto-cleanup) (`file-management.md`). |
| Keep content current within storage and bandwidth limits | **Lazy-load large items**; **show "A newer version is available" with a Download/Refresh action** for **big documents**; **background sync respects `navigator.connection.saveData` and metered connections**; **subtle progress (`<progress>`) after ~2–3 s** (**CONV**). |
| Respect the finite storage | **Store user-created content on the server, not regenerable assets**; **cache assets in the Cache API/HTTP cache**; **`navigator.storage.estimate()` and `persist()`** for **local quotas**; **show storage use and cleanup**; **don't put large blobs in `localStorage`** (use **IndexedDB** instead). |
| Behave when offline/unavailable | **Offline-first (service worker + IndexedDB queue)**; **no alert on `offline`**; **an unobtrusive banner/chip** ("You're offline. Changes will sync when you're back.") **via `aria-live="polite"`**; **Background Sync where supported (Chromium)**, otherwise **retry on `online`/`visibilitychange`**. |
| App state in the cloud | **Persist "last viewed position", drafts, filters and preferences server-side per account** (**"Continue where you left off"**), **only settings that make sense on every device** (**per-device settings stay local**: theme override, layout density) (`settings.md`). |
| Warn about deletion that propagates | **Confirm dialog** ("Delete 'Report' from all your devices?") **with the destructive action styled per `alerts.md`**; **prefer soft delete/Trash with restore** (`undo-and-redo.md`). |
| Prompt, easy conflict resolution | **Merge automatically when possible (CRDT/OT, field-level last-writer-wins with timestamps)**; **otherwise a non-modal notice with a side-by-side diff and "Keep mine / Keep theirs / Merge"**; **detect conflicts early (on open/focus)**; **keep both as copies as a safe fallback**. |
| Include synced content in search | **Search covers all synced content, including offline-cached and server-side items**, **with indexing status when incomplete** (`searching.md`). |
| Games: save progress; offline and conflict alerts | **Cloud saves per player** (**versioned, timestamped, device name**); **"Resume on this device / Use cloud save?" prompts on conflict** (**show playtime/date for each save**); **offline play queues saves**; **manual "Keep both" option**. |
| Native-only | **iCloud (CloudKit, iCloud Drive, key-value store, GameSave), the Documents-folder backup behaviour, Settings › iCloud** are native Apple services; **the web uses your own backend, IndexedDB/Cache API and sign-in (Sign in with Apple JS optional).** |

Field-note cross-links:
- `field-notes/*`: **no sync recipe**; nothing conflicts. 
- `hig/patterns/file-management.md` (✓): **automatic file handling, cloud documents, versions**; `hig/patterns/undo-and-redo.md` (✓): **soft delete and recovery**; `hig/patterns/collaboration-and-sharing.md` (✓): **shared documents and conflicts**; `hig/patterns/settings.md` (✓): **which settings sync**; `hig/patterns/searching.md` (✓): **search across synced content**; `hig/patterns/loading.md` (✓): **subtle progress after a delay**; `hig/components/presentation/alerts.md` (✓): **deletion confirmations**; `hig/getting-started/designing-for-games.md` (✓): **Apple's Related tile** (Game Center, iCloud, In-App Purchase); `hig/technologies/game-center.md` (✓): **game progress and multiplayer**; `hig/patterns/managing-accounts.md` (✓): **accounts and sign-in**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] **Sync is automatic for signed-in people**; **at most one first-run choice** (all or nothing); **no per-document sync questions**.
- [ ] **Content is current on open/focus; big items show "newer version available" and subtle progress after a few seconds.**
- [ ] **Only user-created content is stored server-side; regenerable assets are cached, not synced; storage use is visible and quota-aware.**
- [ ] **Offline and unavailable states are quiet** (no alert), **with a gentle note that changes will sync later**.
- [ ] **Last-viewed position and cross-device settings sync**; **device-specific settings stay local.**
- [ ] **Deleting a synced document warns that it disappears everywhere and confirms (or uses Trash with restore).**
- [ ] **Conflicts are auto-merged when possible; otherwise a non-modal, side-by-side choice, detected early, with a safe "keep both".**
- [ ] **Search includes all synced content.**
- [ ] **Game saves sync with clear resume/conflict prompts (dates, playtime) and offline queuing.**

## Related
- Ingested: File management (✓), Undo and redo (✓), Collaboration and sharing (✓), Settings (✓), Searching (✓), Loading (✓), Alerts (✓), Designing for games (✓), Game Center (✓), Managing accounts (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: CloudKit · GameSave.
- Videos: none listed.
