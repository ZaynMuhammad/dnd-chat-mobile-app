Great—if this agent.md is intended for Codex-style code generation/agent orchestration, the most useful optimization is to make it machine-scannable with:

- Clear capability declarations

- Deterministic commands and interfaces

- Concise constraints/rules

- Minimal prose

- Stable headings and keywords

- Copy-pasteable commands and env blocks

- Explicit file paths and responsibilities

Below is a Codex-optimized agent.md. It keeps your meaning but restructures into a spec Codex can reliably condition on.

---

Agent Spec: D&D Dungeon Master App

Purpose

- Single-player D&D chat app with an AI Dungeon Master.

Capabilities

- Chat-based gameplay

- Character and campaign management

- PDF rulebook ingestion and chunking

- Vector search for contextual rule retrieval

- Authentication (Google OAuth via Better Auth)

- Real-time DB (Convex)

- AI responses via Google Gemini 2.5 Flash

Non-Goals

- Multi-user synchronous sessions (planned)

- Full combat/dice system (planned)

Tech Stack

- React Native 0.79.5, Expo 53.0.20

- TypeScript 5.8.3

- Bun (package manager)

- NativeWind (Tailwind for RN)

- Expo Router + React Navigation (Drawer + Tabs)

- Convex (DB + vector search)

- @google/genai (AI)

- Valibot (validation)

Environment

- Node 18+, Expo CLI, iOS Simulator, Android Studio

- macOS supported

Environment Variables (.env)

- EXPO_PUBLIC_GEMINI_API_KEY=string

- CONVEX_DEPLOYMENT=string

Install/Run (deterministic)

- bun install

- bun start

- bun run ios

- bun run android

- bun run web

- npx convex dev

- npx convex deploy

- bun run lint

- bun run reset-project

Project Structure (authoritative)

app/

- \_layout.tsx

- (auth)/[_layout.tsx, login.tsx, register.tsx]

- (drawer)/\_layout.tsx
  - (tabs)/[_layout.tsx, index.tsx, inventory.tsx, settings.tsx, stats.tsx]

api/

- ai+api.ts

components/

- Chat/[ChatScreen.tsx, ChatInput.tsx, ChatMessage.tsx, SideMenu.tsx]

- ui/

lib/

- ai/[context-manager.ts, batch-actions.ts]

- auth/[authService.ts, client.ts, types.ts]

- database/

hooks/

- useAuth.tsx, useChat.ts, useCampaigns.ts, useColorScheme.ts

convex/

- schema.ts

Navigation Contract

- Root: app/\_layout.tsx

- Drawer active only on Chat (tabs/index.tsx)

- Full-width swipe enabled on Chat

- Floating action toggles drawer

- Drawer disabled on other tabs

Data Model (Convex tables)

- users

- characters

- campaigns

- messages

- events

- ruleChunks (embeddings)

- pdfDocuments

- pdfChunks (embeddings)

AI Contract

- Provider: Google Gemini 2.5 Flash (@google/genai)

- Temperature: 0.6

- System role: D&D Dungeon Master

- Context assembly:
  - recent messages (windowed)

  - recent events

  - character snapshot

  - top-K ruleChunks/pdfChunks via vector search

- ContextManager responsibilities:
  - query embeddings

  - budget tokens

  - trim history

  - return prompt payload

Coding Guidelines (enforceable)

- Components: extract instead of nested ternaries

- State: prefer derived; minimal local state

- useRef for non-reactive vars

- useEffect only for external sync/I/O

- Avoid unnecessary useMemo/useCallback

- NativeWind for all styles; semantic tokens from tailwind.config.js

- TypeScript: strict, defined interfaces, prefer inference

- Runtime validation: Valibot

- Comments only for races, long-lived TODOs, or tricky logic

Common Tasks (step-by-step)

Add Screen

1. Create file under app/(drawer)/(tabs)/

2. Register in app/(drawer)/(tabs)/\_layout.tsx

3. Update navigation types if needed

Add Component

1. Place under components/

2. PascalCase, typed props

3. Style with NativeWind

DB Operation

1. Define schema in convex/schema.ts

2. Implement Convex functions

3. Consume with Convex hooks; handle loading/error

Extend AI

1. Extend lib/ai/context-manager.ts

2. Update system prompt/handlers in api/ai+api.ts

3. Add message/event types to schema

4. Implement error handling

Troubleshooting (decision tree)

- Metro issues → bun run reset-project

- Convex connection → verify .env and CONVEX_DEPLOYMENT

- AI errors → check EXPO_PUBLIC_GEMINI_API_KEY and quotas

- Navigation errors → validate route names and layout files

Performance/Cost Rules

- Virtualize long chat lists

- Cache images

- Keep state flat to minimize re-renders

- Trim AI context aggressively via ContextManager

- Use vector search to narrow retrieved rules

- Cache frequent queries; monitor AI usage

Security Rules

- Secrets live server-side (Convex)

- Use env vars for keys

- Enforce auth on all server routes

- Validate all inputs (Valibot)

- HTTPS everywhere

Roadmap (planned)

- Dice rolling

- Combat mechanics

- Character creation wizard

- PDF rulebook integration

- Multiplayer + campaign sharing

Tech Debt Targets

- Error boundaries

- Test suite

- Bundle size

- Accessibility

- Optional: pnpm workspaces

PR Process

- Branch from main

- Follow style and guidelines

- Test iOS + Android

- Update docs

- Submit PR with clear description

Review Checklist (binary)

- Patterns followed

- Robust error handling

- Types defined

- NativeWind styles used

- No console.log in production

- Sensible component structure

Quickstart (copy-paste)

- bun install

- echo "EXPO_PUBLIC_GEMINI_API_KEY=..." >> .env

- echo "CONVEX_DEPLOYMENT=..." >> .env

- npx convex dev

- bun start

- bun run ios

Notes

- Keep this spec updated. Source code and inline comments are the ground truth.
