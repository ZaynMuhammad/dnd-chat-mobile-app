import { IconSymbol } from "@/components/ui/IconSymbol";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-white text-xl font-bold mb-4 text-center">
          Settings
        </Text>
        <ScrollView className="flex-1">
          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-4">
              Game Settings
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-800">
              <Text className="text-gray-300">Difficulty Level</Text>
              <Text className="text-purple-400">Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-800">
              <Text className="text-gray-300">Auto-Save</Text>
              <Text className="text-purple-400">On</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-gray-300">Notifications</Text>
              <Text className="text-purple-400">On</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-4">
              Account
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-800">
              <Text className="text-gray-300">Profile</Text>
              <IconSymbol size={16} name="chevron.right" color="#8B5CF6" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-800">
              <Text className="text-gray-300">Save Data</Text>
              <IconSymbol size={16} name="chevron.right" color="#8B5CF6" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-gray-300">Export Character</Text>
              <IconSymbol size={16} name="chevron.right" color="#8B5CF6" />
            </TouchableOpacity>
          </View>

          <View className="bg-gray-900 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-4">About</Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-800">
              <Text className="text-gray-300">Version</Text>
              <Text className="text-gray-400">1.0.0</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-gray-300">Help & Support</Text>
              <IconSymbol size={16} name="chevron.right" color="#8B5CF6" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
