import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function StatsScreen() {
  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-white text-xl font-bold mb-4 text-center">
          Stats
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-2">
              Character Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Strength</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Dexterity</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Constitution</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Intelligence</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Wisdom</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Charisma</Text>
                <Text className="text-white">--</Text>
              </View>
            </View>
          </View>
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-2">
              Combat Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Armor Class</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Hit Points</Text>
                <Text className="text-white">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300">Initiative</Text>
                <Text className="text-white">--</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
