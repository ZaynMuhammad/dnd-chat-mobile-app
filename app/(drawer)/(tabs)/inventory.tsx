import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InventoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-4 text-center">
          Inventory
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-surface dark:bg-surface-dark rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary">
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Equipment
            </Text>
            <Text className="text-text-secondary dark:text-text-tertiary">
              No items yet
            </Text>
          </View>
          <View className="bg-surface dark:bg-surface-dark rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary">
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-2">
              Consumables
            </Text>
            <Text className="text-text-secondary dark:text-text-tertiary">
              No items yet
            </Text>
          </View>
          <View className="bg-surface dark:bg-surface-dark rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary">
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
