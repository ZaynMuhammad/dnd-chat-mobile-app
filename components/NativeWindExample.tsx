import { Pressable, Text, View } from "react-native";

export function NativeWindExample() {
  return (
    <View className="flex-1 items-center justify-center bg-background dark:bg-background-dark p-4">
      <View className="bg-surface dark:bg-surface-dark rounded-lg p-6 shadow-lg">
        <Text className="text-text dark:text-text-dark text-xl font-bold mb-2">
          NativeWind is working! 🎉
        </Text>
        <Text className="text-text-secondary dark:text-text-tertiary text-sm">
          This component uses Tailwind CSS classes
        </Text>
      </View>

      <View className="mt-6 space-y-3">
        <Pressable className="bg-green-500 px-6 py-3 rounded-lg active:bg-green-600">
          <Text className="text-white font-semibold text-center">
            Success Button
          </Text>
        </Pressable>

        <Pressable className="bg-red-500 px-6 py-3 rounded-lg active:bg-red-600">
          <Text className="text-white font-semibold text-center">
            Danger Button
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
