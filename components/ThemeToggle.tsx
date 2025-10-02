import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../hooks/useColorScheme";

export function ThemeToggle() {
  const { themeMode, setThemeMode, colors } = useTheme();

  const options: {
    mode: "light" | "dark" | "system";
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
  }[] = [
    { mode: "light", label: "Light", icon: "sunny" },
    { mode: "dark", label: "Dark", icon: "moon" },
    { mode: "system", label: "System", icon: "settings" },
  ];

  return (
    <View className="p-4 bg-surface dark:bg-surface-dark rounded-lg border border-border-primary dark:border-border-secondary">
      <Text className="text-text dark:text-text-dark font-semibold text-lg mb-3">
        Theme
      </Text>
      <View className="space-y-2">
        {options.map((option) => (
          <TouchableOpacity
            key={option.mode}
            onPress={() => setThemeMode(option.mode)}
            className={`flex-row items-center justify-between p-3 rounded-lg border ${
              themeMode === option.mode
                ? "bg-primary-100 border-primary-300 dark:bg-primary-900/40 dark:border-primary-500"
                : "bg-surface-secondary dark:bg-surface-dark border-border-secondary dark:border-border-primary"
            }`}
          >
            <View className="flex-row items-center space-x-3">
              <Ionicons
                name={option.icon}
                size={20}
                color={
                  themeMode === option.mode
                    ? colors.primary[600]
                    : colors.text.secondary
                }
              />
              <Text
                className={`font-medium ${
                  themeMode === option.mode
                    ? "text-primary-700 dark:text-primary-300"
                    : "text-text dark:text-text-dark"
                }`}
              >
                {option.label}
              </Text>
            </View>
            {themeMode === option.mode && (
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={colors.primary[600]}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export function QuickThemeToggle() {
  const { toggleTheme, colorScheme, colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className="p-2 rounded-full bg-surface-secondary dark:bg-surface-dark border border-border-primary dark:border-border-secondary"
    >
      <Ionicons
        name={colorScheme === "dark" ? "sunny" : "moon"}
        size={20}
        color={
          colorScheme === "dark" ? colors.warning[400] : colors.primary[500]
        }
      />
    </TouchableOpacity>
  );
}
