import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text-primary text-xl font-bold mb-4 text-center">
          Stats
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-2">
              Character Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Strength</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Dexterity</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Constitution</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Intelligence</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Wisdom</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Charisma</Text>
                <Text className="text-text-primary">--</Text>
              </View>
            </View>
          </View>
          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-2">
              Combat Stats
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Armor Class</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Hit Points</Text>
                <Text className="text-text-primary">--</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-text-secondary">Initiative</Text>
                <Text className="text-text-primary">--</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
