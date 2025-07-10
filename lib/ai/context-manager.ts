// lib/ai/context-manager.ts
export class ContextManager {
  private maxTokens = 8000; // Leave room for response

  async buildContext(userMessage: string, characterId: string) {
    const relevantRules = await this.retrieveRelevantRules(userMessage);
    const recentEvents = await this.getRecentEvents(characterId, 5);
    const characterSheet = await this.getCharacterSheet(characterId);

    return this.optimizeContext({
      rules: relevantRules,
      events: recentEvents,
      character: characterSheet,
      currentMessage: userMessage,
    });
  }
}
