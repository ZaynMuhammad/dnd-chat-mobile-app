import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useCampaigns } from "../../hooks/useCampaigns";
import { useChat } from "../../hooks/useChat";
import { useTheme } from "../../hooks/useColorScheme";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { SideMenu } from "./SideMenu";

export function ChatScreen() {
  const { colors } = useTheme();
  const { messages, isLoading, error, sendMessage } = useChat();
  const { campaigns, createCampaign, selectCampaign } = useCampaigns();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { width: screenWidth } = Dimensions.get("window");
  const translateX = useSharedValue(0);
  const MENU_WIDTH = 320;
  const SWIPE_THRESHOLD = 50;

  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const handleNewCampaign = async () => {
    try {
      await createCampaign("New Adventure");
      closeMenu();
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
    closeMenu();
  };

  // Pan gesture for swipe-to-open menu
  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10]) // Allow small horizontal movements before activating
    .failOffsetY([-20, 20]) // Fail if moving too much vertically
    .onUpdate((event) => {
      // Only allow rightward swipes from the left edge
      if (event.translationX > 0 && event.absoluteX < 50) {
        translateX.value = Math.min(event.translationX, MENU_WIDTH);
      }
    })
    .onEnd((event) => {
      const shouldOpen =
        event.translationX > SWIPE_THRESHOLD && event.velocityX > 0;

      if (shouldOpen) {
        translateX.value = withSpring(MENU_WIDTH);
        runOnJS(openMenu)();
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    const opacity = translateX.value / MENU_WIDTH;
    return {
      opacity: opacity * 0.3,
    };
  });

  return (
    <View className="flex-1 bg-background-primary">
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[{ flex: 1 }, animatedStyle]}
          className="px-4 pb-4"
        >
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
        </Animated.View>
      </GestureDetector>

      {/* Overlay */}
      {isMenuVisible && (
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "black",
            },
            overlayStyle,
          ]}
          pointerEvents="none"
        />
      )}

      {/* Side Menu */}
      <SideMenu
        isVisible={isMenuVisible}
        onClose={closeMenu}
        campaigns={campaigns}
        onSelectCampaign={handleSelectCampaign}
        onNewCampaign={handleNewCampaign}
      />
    </View>
  );
}
