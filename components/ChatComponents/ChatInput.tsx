import { IconSymbol } from "@/components/ui/IconSymbol";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useColorScheme";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  onSend,
  placeholder = "Type your message here...",
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();




  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const isSendDisabled = !message.trim() || disabled;

  return (
    <View
      className="flex-row items-center px-4 py-4 bg-surface-primary border-t border-border-primary"
      style={{ paddingBottom: insets.bottom > 0 ? insets.bottom + 12 : 0 }}
    >
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        className="flex-1 bg-surface-secondary text-text-primary px-4 py-3 rounded-full border border-border-secondary mr-3"
        multiline
        maxLength={500}
        editable={!disabled}
      />
      <TouchableOpacity
        onPress={handleSend}
        disabled={isSendDisabled}
        className={`w-10 h-10 rounded-full items-center justify-center ${
          isSendDisabled ? "bg-neutral-300" : "bg-primary-600"
        }`}
      >
        <IconSymbol
          size={20}
          name="arrow.up"
          color={isSendDisabled ? colors.text.tertiary : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}
