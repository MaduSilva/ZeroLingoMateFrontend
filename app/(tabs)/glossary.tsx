import { View, Text, StyleSheet } from "react-native";

export default function GlossaryScreen() {
  return (
    <View style={[styles.view]}>
      <Text>Glossary</Text>
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
