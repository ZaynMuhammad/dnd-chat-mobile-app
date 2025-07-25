import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../hooks/useColorScheme";

export function ThemeToggle() {
  const { themeMode, setThemeMode, colors } = useTheme();

  const options: Array<{
    mode: "light" | "dark" | "system";
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
  }> = [
    { mode: "light", label: "Light", icon: "sunny" },
    { mode: "dark", label: "Dark", icon: "moon" },
    { mode: "system", label: "System", icon: "settings" },
  ];

  return (
    <View className="p-4 bg-surface-primary rounded-lg border border-border-primary">
      <Text className="text-text-primary font-semibold text-lg mb-3">
        Theme
      </Text>
      <View className="space-y-2">
        {options.map((option) => (
          <TouchableOpacity
            key={option.mode}
            onPress={() => setThemeMode(option.mode)}
            className={`flex-row items-center justify-between p-3 rounded-lg border ${
              themeMode === option.mode
                ? "bg-primary-100 border-primary-300"
                : "bg-surface-secondary border-border-secondary"
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
                    ? "text-primary-700"
                    : "text-text-primary"
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
  const { toggleTheme, colorScheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className="p-2 rounded-full bg-surface-secondary border border-border-primary"
    >
      <Ionicons
        name={colorScheme === "dark" ? "sunny" : "moon"}
        size={20}
        color={colorScheme === "dark" ? "#fbbf24" : "#3b82f6"}
      />
    </TouchableOpacity>
  );
}
