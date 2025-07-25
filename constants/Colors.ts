/**
 * Comprehensive color system for the D&D Dungeon Master app
 * Supports light and dark modes with semantic color naming
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#8B5CF6";

export const Colors = {
  light: {
    // Primary colors
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },

    // Accent colors
    accent: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
    },

    // Neutral colors
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },

    // Semantic colors
    text: {
      primary: "#11181C",
      secondary: "#475569",
      tertiary: "#64748b",
      inverse: "#ffffff",
    },

    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#f1f5f9",
      inverse: "#0f172a",
    },

    surface: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      elevated: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.5)",
    },

    border: {
      primary: "#e2e8f0",
      secondary: "#cbd5e1",
      focus: "#3b82f6",
    },

    // Status colors
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },

    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },

    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },

    // Legacy support
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },

  dark: {
    // Primary colors
    primary: {
      50: "#1e3a8a",
      100: "#1e40af",
      200: "#1d4ed8",
      300: "#2563eb",
      400: "#3b82f6",
      500: "#60a5fa",
      600: "#93c5fd",
      700: "#bfdbfe",
      800: "#dbeafe",
      900: "#eff6ff",
    },

    // Accent colors
    accent: {
      50: "#701a75",
      100: "#86198f",
      200: "#a21caf",
      300: "#c026d3",
      400: "#d946ef",
      500: "#e879f9",
      600: "#f0abfc",
      700: "#f5d0fe",
      800: "#fae8ff",
      900: "#fdf4ff",
    },

    // Neutral colors
    neutral: {
      50: "#0f172a",
      100: "#1e293b",
      200: "#334155",
      300: "#475569",
      400: "#64748b",
      500: "#94a3b8",
      600: "#cbd5e1",
      700: "#e2e8f0",
      800: "#f1f5f9",
      900: "#f8fafc",
    },

    // Semantic colors
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      tertiary: "#94a3b8",
      inverse: "#0f172a",
    },

    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
      inverse: "#ffffff",
    },

    surface: {
      primary: "#1e293b",
      secondary: "#334155",
      elevated: "#475569",
      overlay: "rgba(0, 0, 0, 0.7)",
    },

    border: {
      primary: "#334155",
      secondary: "#475569",
      focus: "#60a5fa",
    },

    // Status colors
    success: {
      50: "#14532d",
      100: "#166534",
      200: "#15803d",
      300: "#16a34a",
      400: "#22c55e",
      500: "#4ade80",
      600: "#86efac",
      700: "#bbf7d0",
      800: "#dcfce7",
      900: "#f0fdf4",
    },

    warning: {
      50: "#78350f",
      100: "#92400e",
      200: "#b45309",
      300: "#d97706",
      400: "#f59e0b",
      500: "#fbbf24",
      600: "#fcd34d",
      700: "#fde68a",
      800: "#fef3c7",
      900: "#fffbeb",
    },

    error: {
      50: "#7f1d1d",
      100: "#991b1b",
      200: "#b91c1c",
      300: "#dc2626",
      400: "#ef4444",
      500: "#f87171",
      600: "#fca5a5",
      700: "#fecaca",
      800: "#fee2e2",
      900: "#fef2f2",
    },

    // Legacy support
    tint: tintColorDark,
    icon: "#94a3b8",
    tabIconDefault: "#94a3b8",
    tabIconSelected: tintColorDark,
  },
};

export type ColorScheme = keyof typeof Colors;
export type ThemeColors = typeof Colors.light;
