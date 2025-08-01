import { defineSchema, defineTable } from "convex/server";
import { v as convexVal } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: convexVal.string(),
    name: convexVal.string(),
    createdAt: convexVal.number(),
  }),

  characters: defineTable({
    userId: convexVal.id("users"),
    name: convexVal.string(),
    level: convexVal.number(),
    stats: convexVal.object({
      strength: convexVal.number(),
      dexterity: convexVal.number(),
      constitution: convexVal.number(),
      intelligence: convexVal.number(),
      wisdom: convexVal.number(),
      charisma: convexVal.number(),
    }),
    hitPoints: convexVal.object({
      current: convexVal.number(),
      max: convexVal.number(),
    }),
    inventory: convexVal.array(
      convexVal.object({
        name: convexVal.string(),
        quantity: convexVal.number(),
        description: convexVal.string(),
      })
    ),
  }),

  campaigns: defineTable({
    userId: convexVal.id("users"),
    characterId: convexVal.id("characters"),
    name: convexVal.string(),
    setting: convexVal.string(),
    currentLocation: convexVal.string(),
    startedAt: convexVal.number(),
  }),

  messages: defineTable({
    campaignId: convexVal.id("campaigns"),
    role: convexVal.union(
      convexVal.literal("user"),
      convexVal.literal("assistant")
    ),
    content: convexVal.string(),
    timestamp: convexVal.number(),
    messageType: convexVal.union(
      convexVal.literal("chat"),
      convexVal.literal("combat"),
      convexVal.literal("dice-roll"),
      convexVal.literal("choice")
    ),
  }),

  events: defineTable({
    campaignId: convexVal.id("campaigns"),
    type: convexVal.union(
      convexVal.literal("combat"),
      convexVal.literal("npc-interaction"),
      convexVal.literal("location-change"),
      convexVal.literal("item-found"),
      convexVal.literal("quest-update")
    ),
    description: convexVal.string(),
    location: convexVal.string(),
    npcsInvolved: convexVal.array(convexVal.string()),
    timestamp: convexVal.number(),
    importance: convexVal.number(), // 1-10 for context prioritization
  }),

  ruleChunks: defineTable({
    source: convexVal.string(), // "dnd-5e" or "fantasy-setting"
    chunkId: convexVal.string(),
    content: convexVal.string(),
    embedding: convexVal.array(convexVal.number()),
    category: convexVal.string(), // "combat", "spells", "lore", etc.
  }),

  pdfDocuments: defineTable({
    userId: convexVal.id("users"),
    title: convexVal.string(),
    author: convexVal.optional(convexVal.string()),
    totalPages: convexVal.number(),
    fileSize: convexVal.number(),
    uploadedAt: convexVal.number(),
    originalFileName: convexVal.string(),
    processedData: convexVal.string(), // JSON string of ProcessedPDF
  }),

  pdfChunks: defineTable({
    documentId: convexVal.id("pdfDocuments"),
    chunkId: convexVal.string(),
    content: convexVal.string(),
    embedding: convexVal.array(convexVal.number()),
    pageNumber: convexVal.number(),
    title: convexVal.optional(convexVal.string()),
    chapter: convexVal.optional(convexVal.string()),
    paragraphIndex: convexVal.optional(convexVal.number()),
    source: convexVal.string(),
  })
    .index("by_document", ["documentId"])
    .index("by_chapter", ["documentId", "chapter"]),
});
