import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InventoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-white text-xl font-bold mb-4 text-center">
          Inventory
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-2">
              Equipment
            </Text>
            <Text className="text-gray-300">No items yet</Text>
          </View>
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-2">
              Consumables
            </Text>
            <Text className="text-gray-300">No items yet</Text>
          </View>
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-2">
              Treasure
            </Text>
            <Text className="text-gray-300">No items yet</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
