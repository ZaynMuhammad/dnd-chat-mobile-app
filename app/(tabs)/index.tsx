import { Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ChatsScreen from './screens/ChatsScreen';
import CharacterScreen from './src/screens/CharacterScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ChatDetailScreen from './src/screens/ChatDetailScreen';
import { AdventureProvider } from './src/context/AdventureContext';
import { CharacterProvider } from './src/context/CharacterContext';

const Tab = createBottomTabNavigator();


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Hello</Text>
    </View>
  );
}
