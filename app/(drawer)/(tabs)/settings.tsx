import { ThemeToggle } from "@/components/ThemeToggle";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background.primary }}
    >
      <View className="flex-1 px-4 pt-4">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-4 text-center">
          Settings
        </Text>
        <ScrollView className="flex-1">
          <ThemeToggle />

          <View
            className="mt-4 rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-4">
              Game Settings
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Difficulty Level
              </Text>
              <Text className="text-primary-600">Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Auto-Save
              </Text>
              <Text className="text-success-600">On</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Notifications
              </Text>
              <Text className="text-success-600">On</Text>
            </TouchableOpacity>
          </View>

          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-4">
              Account
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Profile
              </Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Save Data
              </Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Export Character
              </Text>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={colors.primary[500]}
              />
            </TouchableOpacity>
          </View>

          <View
            className="rounded-lg p-4 mb-4 border border-border-primary dark:border-border-secondary"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <Text className="text-text dark:text-text-dark text-lg font-semibold mb-4">
              About
            </Text>
            <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-border-secondary">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Version
              </Text>
              <Text className="text-text-tertiary dark:text-text-secondary">
                1.0.0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-3">
              <Text className="text-text-secondary dark:text-text-tertiary">
                Help & Support
              </Text>
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
