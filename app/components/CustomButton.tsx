import { StyleSheet, TouchableOpacity, ViewStyle, Text } from "react-native";

type CustomButtonProps = {
  children: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function CustomButton({
  children,
  onPress,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 20,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#C2694D",
  },
  buttonText: {
    fontFamily: "Montserrat",
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 11,
  },
});
