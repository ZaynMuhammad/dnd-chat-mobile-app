import React, { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../hooks/useColorScheme";
import { IconSymbol } from "../ui/IconSymbol";

import type { Campaign } from "../../hooks/useCampaigns";

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
  campaigns: Campaign[];
  onSelectCampaign: (campaignId: string) => void;
  onNewCampaign: () => void;
}

export function SideMenu({
  isVisible,
  onClose,
  campaigns,
  onSelectCampaign,
  onNewCampaign,
}: SideMenuProps) {
  const { colors } = useTheme();

  const translateX = useSharedValue(-320);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      translateX.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      translateX.value = withSpring(-320, {
        damping: 20,
        stiffness: 90,
      });
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [isVisible]);

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value * 0.5,
    };
  });

  if (!isVisible) return null;

  return (
    <View className="absolute inset-0 z-50 flex-row">
      {/* Menu Content */}
      <Animated.View
        style={[{ width: 320 }, menuAnimatedStyle]}
        className="bg-surface-primary border-r border-border-primary shadow-lg"
      >
        {/* Header */}
        <View className="flex-row items-center justify-between p-4 border-b border-border-secondary">
          <Text className="text-text-primary text-lg font-semibold">
            Adventures
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="w-8 h-8 items-center justify-center rounded-full bg-surface-secondary"
          >
            <IconSymbol name="xmark" size={16} color={colors.text.primary} />
          </TouchableOpacity>
        </View>

        {/* New Campaign Button */}
        <View className="p-4 border-b border-border-secondary">
          <TouchableOpacity
            onPress={onNewCampaign}
            className="flex-row items-center p-3 bg-primary-600 rounded-lg"
          >
            <IconSymbol name="plus" size={16} color="white" />
            <Text className="text-white font-medium ml-2">New Adventure</Text>
          </TouchableOpacity>
        </View>

        {/* Campaigns List */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {campaigns.length === 0 ? (
            <View className="p-4">
              <Text className="text-text-secondary text-center">
                No previous adventures found.
              </Text>
              <Text className="text-text-tertiary text-sm text-center mt-1">
                Start a new adventure to begin your journey!
              </Text>
            </View>
          ) : (
            campaigns.map((campaign) => (
              <TouchableOpacity
                key={campaign.id}
                onPress={() => onSelectCampaign(campaign.id)}
                className="p-4 border-b border-border-secondary"
              >
                <View className="flex-row items-start justify-between">
                  <View className="flex-1">
                    <Text
                      className="text-text-primary font-medium"
                      numberOfLines={1}
                    >
                      {campaign.name}
                    </Text>
                    {campaign.setting && (
                      <Text
                        className="text-text-secondary text-sm mt-1"
                        numberOfLines={1}
                      >
                        {campaign.setting}
                      </Text>
                    )}
                    <Text className="text-text-tertiary text-xs mt-1">
                      {campaign.lastMessageAt}
                    </Text>
                  </View>
                  <IconSymbol
                    name="chevron.right"
                    size={14}
                    color={colors.text.tertiary}
                  />
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </Animated.View>

      {/* Overlay */}
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: "black",
          },
          overlayAnimatedStyle,
        ]}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={onClose}
          activeOpacity={1}
        />
      </Animated.View>
    </View>
  );
}
