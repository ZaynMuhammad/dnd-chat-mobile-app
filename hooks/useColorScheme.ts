import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";
import type { ColorScheme, ThemeColors } from "../constants/Colors";
import { Colors } from "../constants/Colors";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  colors: ThemeColors;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "@dnd_theme_mode";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useSystemColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const [isLoaded, setIsLoaded] = useState(false);

  const colorScheme: ColorScheme =
    themeMode === "system"
      ? (systemColorScheme as ColorScheme) || "light"
      : themeMode;

  const colors = Colors[colorScheme];

  useEffect(() => {
    loadThemeMode();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveThemeMode(themeMode);
    }
  }, [themeMode, isLoaded]);

  const loadThemeMode = async () => {
    try {
      const savedMode = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedMode && ["light", "dark", "system"].includes(savedMode)) {
        setThemeModeState(savedMode as ThemeMode);
      }
    } catch (error) {
      console.warn("Failed to load theme mode:", error);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveThemeMode = async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.warn("Failed to save theme mode:", error);
    }
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
  };

  const toggleTheme = () => {
    if (themeMode === "system") {
      setThemeModeState(systemColorScheme === "dark" ? "light" : "dark");
    } else {
      setThemeModeState(themeMode === "light" ? "dark" : "light");
    }
  };

  const value: ThemeContextType = {
    colorScheme,
    themeMode,
    colors,
    setThemeMode,
    toggleTheme,
  };

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useColorScheme() {
  const { colorScheme } = useTheme();
  return colorScheme;
}
