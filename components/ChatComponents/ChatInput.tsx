import { IconSymbol } from "@/components/ui/IconSymbol";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  placeholder = "Type your message...",
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <View className="flex-row items-center px-4 py-3 bg-gray-900 border-t border-gray-800">
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-full border border-gray-700 mr-3"
        multiline
        maxLength={500}
      />
      <TouchableOpacity
        onPress={handleSend}
        disabled={!message.trim()}
        className={`w-10 h-10 rounded-full items-center justify-center ${
          message.trim() ? "bg-purple-600" : "bg-gray-700"
        }`}
      >
        <IconSymbol size={20} name="arrow.up" color="white" />
      </TouchableOpacity>
    </View>
  );
}
