import { ChatScreen } from "@/components/ChatComponents/ChatScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ChatScreen />
    </SafeAreaView>
  );
}
