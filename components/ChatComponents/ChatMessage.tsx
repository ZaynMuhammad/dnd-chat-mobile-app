import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../hooks/useColorScheme";

interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  const { colors } = useTheme();

  return (
    <View className={`flex-row ${isAI ? "justify-start" : "justify-end"} mb-3`}>
      <View
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isAI
            ? "bg-surface-secondary border border-border-secondary"
            : "bg-primary-600 border border-primary-500"
        }`}
      >
        <Text
          className={`text-sm ${isAI ? "text-text-primary" : "text-white"}`}
        >
          {message}
        </Text>
        {timestamp && (
          <Text
            className="text-xs mt-1"
            style={{ color: isAI ? colors.text.tertiary : colors.neutral[200] }}
          >
            {timestamp}
          </Text>
        )}
      </View>
    </View>
  );
}
