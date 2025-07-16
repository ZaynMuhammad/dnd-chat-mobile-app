import React from "react";
import { Text, View } from "react-native";

interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  return (
    <View className={`flex-row ${isAI ? "justify-start" : "justify-end"} mb-3`}>
      <View
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isAI
            ? "bg-gray-800 border border-gray-700"
            : "bg-purple-600 border border-purple-500"
        }`}
      >
        <Text className={`text-sm ${isAI ? "text-white" : "text-white"}`}>
          {message}
        </Text>
        {timestamp && (
          <Text className="text-xs text-gray-400 mt-1">{timestamp}</Text>
        )}
      </View>
    </View>
  );
}
