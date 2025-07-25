import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY || "",
});

const DND_SYSTEM_PROMPT = `You are an experienced Dungeon Master for a D&D 5e campaign. Your role is to:

1. Create immersive and engaging storytelling experiences
2. Guide players through their adventures with descriptive narration
3. Help with rules clarifications and character development
4. Adapt to player choices and create dynamic scenarios
5. There will be only one player
6. Maintain game balance while ensuring fun for the player
7. You can ask clarifying questions to the player to better understand their intentions.
8. Do not ask more than 2 clarifying questions.

Keep responses concise but engaging. Use descriptive language to set the scene and create atmosphere. When appropriate, ask clarifying questions to better understand player intentions.`;

export interface ChatMessage {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

export async function generateResponse(
  prompt: string,
  systemPrompt?: string,
  conversationHistory?: ChatMessage[]
): Promise<ChatResponse> {
  try {
    if (!process.env.EXPO_PUBLIC_GEMINI_API_KEY) {
      throw new Error("Gemini API key not configured");
    }

    const fullSystemPrompt = systemPrompt || DND_SYSTEM_PROMPT;

    const aiChat = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "model", parts: [{ text: fullSystemPrompt }] },
        { role: "user", parts: [{ text: prompt }] },
      ],
      config: {
        temperature: 0.6,
      },
    });

    return {
      message: aiChat.text || "No response generated",
    };
  } catch (error) {
    console.error("Error generating AI response:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate response";

    return {
      message:
        "I apologize, but I encountered an issue processing your request. Please try again.",
      error: errorMessage,
    };
  }
}

export async function GET(request: Request) {
  try {
    const response = await generateResponse(
      "Hello! I'm ready to start our D&D adventure.",
      DND_SYSTEM_PROMPT
    );
    return Response.json(response);
  } catch (error) {
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { prompt, systemPrompt, conversationHistory } = await request.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await generateResponse(
      prompt,
      systemPrompt,
      conversationHistory
    );
    return Response.json(response);
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
