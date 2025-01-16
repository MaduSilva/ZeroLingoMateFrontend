import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// TODO: Criar variáveis pras cores padrão do sistema

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#d2d7d5",
        tabBarStyle: {
          backgroundColor: "#011638",
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Montserrat",
          textTransform: "uppercase",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Translate",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "language-sharp" : "language-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="phrases"
        options={{
          headerShown: false,
          title: "Phrases",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="glossary"
        options={{
          headerShown: false,
          title: "Glossary",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
