import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    createdAt: v.number(),
  }),

  characters: defineTable({
    userId: v.id("users"),
    name: v.string(),
    level: v.number(),
    stats: v.object({
      strength: v.number(),
      dexterity: v.number(),
      constitution: v.number(),
      intelligence: v.number(),
      wisdom: v.number(),
      charisma: v.number(),
    }),
    hitPoints: v.object({
      current: v.number(),
      max: v.number(),
    }),
    inventory: v.array(
      v.object({
        name: v.string(),
        quantity: v.number(),
        description: v.string(),
      })
    ),
  }),

  campaigns: defineTable({
    userId: v.id("users"),
    characterId: v.id("characters"),
    name: v.string(),
    setting: v.string(),
    currentLocation: v.string(),
    startedAt: v.number(),
  }),

  messages: defineTable({
    campaignId: v.id("campaigns"),
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    timestamp: v.number(),
    messageType: v.union(
      v.literal("chat"),
      v.literal("combat"),
      v.literal("dice-roll"),
      v.literal("choice")
    ),
  }),

  events: defineTable({
    campaignId: v.id("campaigns"),
    type: v.union(
      v.literal("combat"),
      v.literal("npc-interaction"),
      v.literal("location-change"),
      v.literal("item-found"),
      v.literal("quest-update")
    ),
    description: v.string(),
    location: v.string(),
    npcsInvolved: v.array(v.string()),
    timestamp: v.number(),
    importance: v.number(), // 1-10 for context prioritization
  }),

  ruleChunks: defineTable({
    source: v.string(), // "dnd-5e" or "fantasy-setting"
    chunkId: v.string(),
    content: v.string(),
    embedding: v.array(v.number()),
    category: v.string(), // "combat", "spells", "lore", etc.
  }),
});
