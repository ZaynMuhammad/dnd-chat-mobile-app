import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InventoryScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background.primary }}
    >
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-4 text-center">
          Inventory
        </Text>
        <ScrollView className="flex-1">
          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Equipment
            </Text>
            <Text className="text-text-secondary dark:text-text-tertiary">
              No items yet
            </Text>
          </View>
          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Consumables
            </Text>
            <Text className="text-text-secondary dark:text-text-tertiary">
              No items yet
            </Text>
          </View>
          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Treasure
            </Text>
            <Text className="text-text-secondary dark:text-text-tertiary">
              No items yet
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
