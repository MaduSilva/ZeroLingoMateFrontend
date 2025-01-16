import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import CustomButton from "./CustomButton";

const { width, height } = Dimensions.get("window");

type TextAreaProps = {
  languageName: string;
  showTranslateButton?: boolean;
};

// TODO: Deixar esse TextArea mais reutilizável/abstrato

export default function TextArea({
  languageName,
  showTranslateButton,
}: TextAreaProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Text style={[styles.languageName]}>{languageName}</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText={(text: any) => setText(text)}
        value={text}
        placeholder="Type the text to translate"
      />
      {showTranslateButton && (
        <View style={[styles.translateButton]}>
          <CustomButton>Translate</CustomButton>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width * 0.9,
    height: height * 0.2,
    padding: width * 0.02,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: "#FFFF",
    marginBottom: 5,
  },
  languageName: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#FFFF",
    fontSize: 14,
    width: 100,
    height: 25,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2C3E50",
  },
  translateButton: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 5,
    flex: 1,
  },
});
