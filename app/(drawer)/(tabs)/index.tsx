import { ChatScreen } from "@/components/Chat/ChatScreen";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background.primary }}
    >
      <ChatScreen />
    </SafeAreaView>
  );
}
