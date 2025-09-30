# Agent Documentation for D&D Dungeon Master App

## Project Overview

This is a React Native/Expo D&D Dungeon Master app that provides an AI-powered Dungeon Master experience for single-player D&D campaigns. The app uses modern web technologies to create an immersive, chat-based interface for D&D gameplay.

### Key Features

- AI-powered Dungeon Master using Google Gemini 2.5 Flash
- Chat-based interface for player-DM interaction
- Character management and campaign tracking
- PDF document processing for D&D rule books
- Vector search for contextual rule retrieval
- Authentication with Better Auth
- Real-time database with Convex

## Technology Stack

### Core Technologies

- **Runtime**: React Native 0.79.5 with Expo 53.0.20
- **Language**: TypeScript 5.8.3
- **Package Manager**: Bun
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router with React Navigation Drawer
- **State Management**: React hooks and context

### Backend & AI

- **Database**: Convex (real-time database with vector search)
- **AI Provider**: Google Gemini 2.5 Flash via @google/genai
- **Authentication**: Better Auth with Google OAuth
- **Vector Search**: Convex vector embeddings for D&D rules

### Key Dependencies

- `@react-navigation/drawer` - Drawer navigation
- `@react-navigation/bottom-tabs` - Tab navigation
- `convex` - Real-time database
- `nativewind` - Tailwind CSS for React Native
- `expo-router` - File-based routing
- `@google/genai` - Google AI integration
- `valibot` - Schema validation

## Development Environment Setup

### Prerequisites

- Node.js 18+ (recommended: use Bun for faster package management)
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun start

# Run on specific platforms
bun run ios
bun run android
bun run web
```

### Environment Variables

Create a `.env` file with:

```
EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
CONVEX_DEPLOYMENT=your_convex_deployment_url
```

## Project Structure

```
app/
├── _layout.tsx                 # Root layout with theme provider
├── (auth)/                    # Authentication screens
│   ├── _layout.tsx
│   ├── login.tsx
│   └── register.tsx
├── (drawer)/                  # Main app with drawer navigation
│   ├── _layout.tsx           # Drawer layout configuration
│   └── (tabs)/               # Tab navigation
│       ├── _layout.tsx       # Tab layout
│       ├── index.tsx         # Chat screen (main)
│       ├── inventory.tsx     # Character inventory
│       ├── settings.tsx      # App settings
│       └── stats.tsx         # Character stats
└── api/
    └── ai+api.ts            # AI API endpoint

components/
├── Chat/                     # Chat interface components
│   ├── ChatScreen.tsx       # Main chat interface
│   ├── ChatInput.tsx        # Message input component
│   ├── ChatMessage.tsx      # Individual message component
│   └── SideMenu.tsx         # Campaign selection drawer
└── ui/                      # Reusable UI components

lib/
├── ai/                      # AI integration
│   ├── context-manager.ts   # Context management for AI
│   └── batch-actions.ts     # Batch AI operations
├── auth/                    # Authentication services
│   ├── authService.ts       # Auth service implementation
│   ├── client.ts           # Auth client configuration
│   └── types.ts            # Auth type definitions
└── database/               # Database operations (Convex)

hooks/                      # Custom React hooks
├── useAuth.tsx            # Authentication hook
├── useChat.ts             # Chat functionality hook
├── useCampaigns.ts        # Campaign management hook
└── useColorScheme.ts      # Theme management hook

convex/                    # Convex backend
└── schema.ts             # Database schema definitions
```

## Architecture Patterns

### Navigation Architecture

- **Root Stack**: `app/_layout.tsx` renders the `(drawer)` segment
- **Drawer Layout**: `app/(drawer)/_layout.tsx` wraps the Tabs
- **Tabs Layout**: `app/(drawer)/(tabs)/_layout.tsx` manages tab navigation
- **Chat Screen**: Primary interaction point with AI Dungeon Master

### Drawer Behavior

- Drawer is enabled only on Chat screen (index tab)
- Full-width swipe gesture on Chat screen
- Disabled on other tabs
- Floating button toggles drawer on Chat screen

### State Management

- Prefer derived state over `useState` when possible
- Use `useRef` for non-reactive values
- Minimize `useEffect` usage - only for external system synchronization
- Avoid `useMemo` and `useCallback` (React compiler handles optimization)

## Code Style Guidelines

### React/React Native Best Practices

- **Component Creation**: Create new components for complex conditional rendering instead of nested ternaries
- **State Management**: Treat UI as thin layer over data, minimize local state
- **Effects**: Use `useEffect` only for external system synchronization
- **Timeouts**: Use `setTimeout` as last resort with explanatory comments
- **Comments**: Only add comments for race conditions, long-term TODOs, or confusing code

### Styling Guidelines

- Use NativeWind (Tailwind CSS) for all styling
- Follow the defined color system in `tailwind.config.js`
- Use semantic color names (primary, secondary, text, background, surface)
- Maintain consistent spacing and typography

### TypeScript Guidelines

- Use strict type checking
- Define interfaces for all data structures
- Use Valibot for runtime validation
- Prefer type inference where possible

## Database Schema (Convex)

### Core Tables

- **users**: User authentication and profile data
- **characters**: D&D character sheets with stats and inventory
- **campaigns**: Campaign instances linking users and characters
- **messages**: Chat messages between player and AI
- **events**: Game events for context tracking
- **ruleChunks**: D&D rules with vector embeddings
- **pdfDocuments**: Uploaded PDF documents
- **pdfChunks**: Processed PDF content with embeddings

### Vector Search

- Uses Convex vector search for contextual rule retrieval
- Embeddings generated for D&D rules and PDF content
- Context manager optimizes token usage for AI responses

## AI Integration

### Google Gemini Integration

- Primary model: Gemini 2.5 Flash
- System prompt optimized for D&D Dungeon Master role
- Temperature: 0.6 for balanced creativity and consistency
- Context management for conversation history

### Context Management

- `ContextManager` class handles token optimization
- Retrieves relevant rules based on user input
- Manages recent events and character data
- Optimizes context for AI model limits

## Build and Test Commands

```bash
# Development
bun start                    # Start Expo development server
bun run ios                 # Run on iOS simulator
bun run android             # Run on Android emulator
bun run web                 # Run on web browser

# Code Quality
bun run lint               # Run ESLint
bun run reset-project      # Reset project to clean state

# Database
npx convex dev             # Start Convex development server
npx convex deploy          # Deploy to production
```

## Common Development Tasks

### Adding New Screens

1. Create new file in `app/(drawer)/(tabs)/`
2. Add tab configuration in `app/(drawer)/(tabs)/_layout.tsx`
3. Update navigation types if needed

### Adding New Components

1. Create component in appropriate `components/` subdirectory
2. Follow naming convention: PascalCase for components
3. Use TypeScript interfaces for props
4. Apply NativeWind styling

### Database Operations

1. Define schema in `convex/schema.ts`
2. Create Convex functions in `convex/` directory
3. Use Convex hooks in React components
4. Handle loading and error states

### AI Features

1. Extend `ContextManager` for new context types
2. Update system prompts in `app/api/ai+api.ts`
3. Add new message types to database schema
4. Implement proper error handling

## Troubleshooting

### Common Issues

- **Metro bundler issues**: Run `bun run reset-project`
- **Convex connection**: Check environment variables
- **AI API errors**: Verify Gemini API key configuration
- **Navigation issues**: Check route naming and layout structure

### Debug Tools

- Expo DevTools for debugging
- Convex Dashboard for database inspection
- React Native Debugger for state inspection
- Flipper for advanced debugging

## Performance Considerations

### Optimization Strategies

- Use React Native's built-in optimizations
- Implement proper list virtualization for long chat histories
- Optimize image loading and caching
- Minimize re-renders with proper state management

### Cost Optimization

- Implement context management to reduce AI token usage
- Use vector search to retrieve only relevant rules
- Cache frequently accessed data
- Monitor API usage and costs

## Security Considerations

- Store sensitive data in Convex (server-side)
- Use environment variables for API keys
- Implement proper authentication checks
- Validate all user inputs with Valibot
- Use HTTPS for all API communications

## Future Development

### Planned Features

- Dice rolling system
- Combat mechanics
- Character creation wizard
- PDF rule book integration
- Multiplayer support
- Campaign sharing

### Technical Debt

- Migrate to pnpm workspaces for monorepo if need arises
- Implement comprehensive error boundaries
- Add comprehensive testing suite
- Optimize bundle size
- Improve accessibility

## Contributing Guidelines

### Pull Request Process

1. Create feature branch from main
2. Follow code style guidelines
3. Test on both iOS and Android
4. Update documentation if needed
5. Submit PR with clear description

### Code Review Checklist

- [ ] Follows established patterns
- [ ] Proper error handling
- [ ] TypeScript types defined
- [ ] NativeWind styling applied
- [ ] No console.log statements in production code
- [ ] Proper component structure

---

This documentation should be updated as the project evolves. For specific implementation details, refer to the source code and inline comments.
