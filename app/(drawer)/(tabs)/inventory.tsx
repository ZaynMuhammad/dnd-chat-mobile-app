import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InventoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text-primary text-xl font-bold mb-4 text-center">
          Inventory
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-2">
              Equipment
            </Text>
            <Text className="text-text-secondary">No items yet</Text>
          </View>
          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-2">
              Consumables
            </Text>
            <Text className="text-text-secondary">No items yet</Text>
          </View>
          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-2">
              Treasure
            </Text>
            <Text className="text-text-secondary">No items yet</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
