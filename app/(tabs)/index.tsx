import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import TextArea from "../components/TextArea";

export default function Index() {
  return (
    <View style={[styles.view]}>
      <TextArea languageName={"한국어"} showTranslateButton={true} />
      <TextArea languageName={"English"} />
      <TextArea languageName={"Português"} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
