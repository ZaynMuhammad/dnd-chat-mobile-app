import { ThemeToggle } from "@/components/ThemeToggle";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text-primary text-xl font-bold mb-4 text-center">
          Settings
        </Text>
        <ScrollView className="flex-1">
          <ThemeToggle />

          <View className="mt-4 bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-4">
              Game Settings
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary">Difficulty Level</Text>
              <Text className="text-primary-600">Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary">Auto-Save</Text>
              <Text className="text-success-600">On</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary">Notifications</Text>
              <Text className="text-success-600">On</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-4">
              Account
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary">Profile</Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary">Save Data</Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary">Export Character</Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
          </View>

          <View className="bg-surface-primary rounded-lg p-4 mb-4 border border-border-primary">
            <Text className="text-text-primary text-lg font-semibold mb-4">
              About
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary">Version</Text>
              <Text className="text-text-tertiary">1.0.0</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary">Help & Support</Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
