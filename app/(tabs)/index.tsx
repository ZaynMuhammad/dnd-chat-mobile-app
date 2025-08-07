import { ChatScreen } from "@/components/Chat/ChatScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <ChatScreen />
    </SafeAreaView>
  );
}
