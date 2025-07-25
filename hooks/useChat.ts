import { useCallback, useState } from "react";
import { type ChatMessage, type ChatResponse } from "../app/api/ai+api";

interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hi! I'm your D&D Dungeon Master. Ready for an adventure?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: text.trim(),
        isAI: false,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: text.trim(),
            conversationHistory: messages,
          }),
        });
        const response: ChatResponse = await res.json();

        if (response.error) {
          throw new Error(response.error);
        }

        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: response.message,
          isAI: true,
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, aiMessage]);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to get response";
        setError(errorMessage);

        const errorResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I encountered an issue processing your request. Please try again.",
          isAI: true,
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: "1",
        text: "Hi! I'm your D&D Dungeon Master. Ready for an adventure?",
        isAI: true,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
}
