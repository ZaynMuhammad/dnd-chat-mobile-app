import React from "react";
import { Text, View } from "react-native";

interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  return (
    <View
      className={`flex-row ${isAI ? "justify-center" : "justify-end"} mb-3`}
    >
      <View
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isAI
            ? "bg-surface-secondary dark:bg-surface-dark border border-border-secondary"
            : "bg-primary-600 dark:bg-primary-500 border border-primary-500 dark:border-primary-400"
        }`}
      >
        <Text
          className={`text-sm ${
            isAI
              ? "text-text dark:text-text-dark"
              : "text-white"
          }`}
        >
          {message}
        </Text>
        {timestamp && (
          <Text
            className={`text-xs mt-1 ${
              isAI
                ? "text-text-tertiary dark:text-text-tertiary"
                : "text-neutral-200 dark:text-neutral-300"
            }`}
          >
            {timestamp}
          </Text>
        )}
      </View>
    </View>
  );
}
