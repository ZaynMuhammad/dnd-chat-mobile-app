import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useChat } from "../../hooks/useChat";
import { useTheme } from "../../hooks/useColorScheme";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";

export function ChatScreen() {
  const { colors } = useTheme();
  const { messages, isLoading, error, sendMessage } = useChat();

  return (
    <View className="flex-1 bg-background-primary px-4 pb-4">
      <Text className="text-text-primary text-xl font-bold mb-4 text-center">
        Chat
      </Text>

      {error && (
        <View className="bg-error-50 border border-error-200 rounded-lg p-3 mb-4">
          <Text className="text-error-700 text-sm">{error}</Text>
        </View>
      )}

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isAI={message.isAI}
            timestamp={message.timestamp}
          />
        ))}

        {isLoading && (
          <View className="flex-row items-center space-x-2 p-4 bg-surface-secondary rounded-lg mt-2">
            <ActivityIndicator size="small" color={colors.primary[500]} />
            <Text className="text-text-secondary text-sm">
              Dungeon Master is thinking...
            </Text>
          </View>
        )}
      </ScrollView>

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </View>
  );
}
