import Entypo from "@expo/vector-icons/Entypo";
import { useDrawerStatus } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCampaigns } from "../../hooks/useCampaigns";
import { useChat } from "../../hooks/useChat";
import { useTheme } from "../../hooks/useColorScheme";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";

export function ChatScreen() {
  const { colors } = useTheme();
  const { messages, isLoading, error, sendMessage } = useChat();
  const { campaigns, createCampaign, selectCampaign } = useCampaigns();
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";

  const handleNewCampaign = async () => {
    try {
      await createCampaign("New Adventure");
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  const handleSelectCampaign = (campaignId: string) => {
    const campaign = selectCampaign(campaignId);
    if (campaign) {
      // TODO: Load campaign messages
      console.log("Selected campaign:", campaign);
    }
  };

  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
      {/* Floating menu button (disabled when drawer is open) */}
      <TouchableOpacity
        accessibilityLabel="Open menu"
        disabled={isDrawerOpen}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        className="absolute top-3 left-3 w-9 h-9 rounded-full bg-surface-secondary dark:bg-surface-dark items-center justify-center z-10"
        style={{ opacity: isDrawerOpen ? 0.5 : 1 }}
      >
        <Entypo name="menu" size={18} color={colors.text.secondary} />
      </TouchableOpacity>

      <View className="flex-1 px-4 pb-4">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-4 text-center">
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
            <View className="flex-row items-center space-x-2 p-4 bg-surface-secondary dark:bg-surface-dark rounded-lg mt-2">
              <ActivityIndicator size="small" color={colors.primary[500]} />
              <Text className="text-text-secondary dark:text-text-tertiary text-sm">
                Dungeon Master is thinking...
              </Text>
            </View>
          )}
        </ScrollView>

        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </View>
    </View>
  );
}
