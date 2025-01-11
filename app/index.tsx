import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={[styles.view]}>
      <Text>Início</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2d7d5",
  },
});
