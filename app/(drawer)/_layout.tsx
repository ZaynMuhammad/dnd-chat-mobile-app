import Entypo from "@expo/vector-icons/Entypo";
import {
  DrawerActions,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { TouchableOpacity } from "react-native";

function HeaderMenuButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginLeft: 12, padding: 4 }}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      accessibilityLabel="Open menu"
    >
      <Entypo name="menu" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEdgeWidth: 50,
        headerLeft: () => <HeaderMenuButton />,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={({ route }) => {
          const focused = getFocusedRouteNameFromRoute(route as any) ?? "index";
          const isChat = focused === "index";
          return {
            title: "Home",
            swipeEnabled: isChat,
          } as const;
        }}
      />
    </Drawer>
  );
}
