import { Stack } from "expo-router";
import Header from "./components/Header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
        contentStyle: { backgroundColor: "#d2d7d5" },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
