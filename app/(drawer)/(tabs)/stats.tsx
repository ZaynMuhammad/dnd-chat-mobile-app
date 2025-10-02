import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatsScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background.primary }}
    >
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-4 text-center">
          Stats
        </Text>
        <ScrollView className="flex-1">
          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Character Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Strength
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Dexterity
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Constitution
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Intelligence
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Wisdom
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Charisma
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
            </View>
          </View>
          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Combat Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Armor Class
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Hit Points
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary dark:text-text-tertiary">
                  Initiative
                </Text>
                <Text className="text-text dark:text-text-dark">--</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
