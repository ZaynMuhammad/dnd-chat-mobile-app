## Onboarding Implementation Plan

This plan fits the current Drawer + Tabs architecture:
- Drawer layout: `app/(drawer)/_layout.tsx`
- Tabs layout: `app/(drawer)/(tabs)/_layout.tsx`
- Chat screen: `app/(drawer)/(tabs)/index.tsx`
- Stats tab: `app/(drawer)/(tabs)/stats.tsx`

### Flow
1. Initial login:
   - If no active adventure exists, start onboarding at class selection.
2. Class selection (Fighter, Rogue):
   - On select: set draft class, advance to stats, navigate to Stats tab.
3. Stat allocation (27-point buy) on Stats tab:
   - Render counters for STR, DEX, CON, INT, WIS, CHA; show points remaining.
   - Continue enabled only when all points are allocated (`pointsRemaining===0`).
4. Background selection (Noble, Street Urchin, Soldier):
   - On select: set background and advance to confirmation.
5. Confirm start:
   - Show summary; on confirm, create character and adventure, set active adventure, navigate to Chat.
6. New Adventure:
   - Action from Chat/Drawer to reset onboarding and rerun the flow.

### State and Types
- Hook/provider: `hooks/useOnboarding.ts` (created)
  - `step`: 'class' | 'stats' | 'background' | 'confirm' | 'idle'
  - `draft`: `{ class, background, abilities, pointsRemaining }`
  - Actions: `start, cancel, goToClass, goToStats, goToBackground, goToConfirm, setClass, setBackground, setAbility, adjustAbility`
  - Derived: `canContinueFromStats`
- Types (in hook for now):
  - `CharacterClass = 'Fighter' | 'Rogue'`
  - `Background = 'Noble' | 'Street Urchin' | 'Soldier'`
  - `AbilityScores = { str, dex, con, int, wis, cha }`

### Components to add
- `components/Onboarding/ClassSelect.tsx`
  - Two cards/buttons: Fighter, Rogue. On select: `setClass` then `goToStats()`.
- `components/Stats/StatsAllocation.tsx`
  - Six counters with +/-; enforce 8–15 range and 27-point buy; `Continue` -> `goToBackground()` when `canContinueFromStats`.
- `components/Onboarding/BackgroundSelect.tsx`
  - Three options; `Continue` -> `goToConfirm()`.
- `components/Onboarding/ConfirmStart.tsx`
  - Summary and `Start Adventure` button (calls Convex, then finishes onboarding and navigates to Chat).
- Optional: `components/Onboarding/OnboardingBanner.tsx` to show step/progress and allow cancel.

### Screen wiring
- Chat (`app/(drawer)/(tabs)/index.tsx`):
  - On mount: check active adventure (Convex). If none, call `start()`; render `ClassSelect` as overlay when `step==='class'`.
  - Add a header/Drawer action: "New Adventure" -> `cancel()` then `start()`.
- Stats (`app/(drawer)/(tabs)/stats.tsx`):
  - When onboarding is active: render `StatsAllocation` for `step==='stats'`, `BackgroundSelect` for `step==='background'`, and `ConfirmStart` for `step==='confirm'`.
  - Otherwise: show normal stats for the active character.

### Convex endpoints (to add)
- `convex/users.ts`: `getActiveAdventureForUser`, `setActiveAdventureForUser`
- `convex/characters.ts`: `createCharacter({ class, abilities, background })`
- `convex/adventures.ts`: `createAdventure({ characterId })`
- Confirm step flow:
  1) `characterId = createCharacter(draft)`
  2) `adventureId = createAdventure({ characterId })`
  3) `setActiveAdventureForUser({ adventureId })`

### Provider placement
- Wrap your app with `OnboardingProvider` in a high-level layout, e.g. `app/(drawer)/_layout.tsx` or `app/_layout.tsx` so all tabs can access onboarding state.

### Acceptance criteria
- First login with no active adventure triggers onboarding at class selection.
- Stat allocation occurs on the Stats tab and enforces 27-point buy; continue only when valid.
- Background choices: Noble, Street Urchin, Soldier.
- Confirm creates character and adventure, sets it active, navigates to Chat.
- "New Adventure" restarts onboarding from class selection.
