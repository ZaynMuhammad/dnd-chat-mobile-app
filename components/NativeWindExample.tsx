import { Pressable, Text, View } from "react-native";

export function NativeWindExample() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900 p-4">
      <View className="bg-blue-500 rounded-lg p-6 shadow-lg">
        <Text className="text-white text-xl font-bold mb-2">
          NativeWind is working! 🎉
        </Text>
        <Text className="text-blue-100 text-sm">
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
