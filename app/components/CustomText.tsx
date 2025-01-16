import { View, Text, StyleSheet, TextStyle } from "react-native";

type CustomTextProps = {
  children: string;
  style?: TextStyle;
};

export default function CustomText({ children, style }: CustomTextProps) {
  return (
    <View>
      <Text style={[styles.mainText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#011638",
    textAlign: "center",
  },
});
