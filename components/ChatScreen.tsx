import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

export function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your D&D Dungeon Master. Ready for an adventure?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's an interesting choice! Let me think about how this affects your adventure...",
        isAI: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-white text-xl font-bold mb-4 text-center">
          Chat
        </Text>
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
        </ScrollView>
      </View>
      <ChatInput onSend={handleSendMessage} />
    </View>
  );
}
