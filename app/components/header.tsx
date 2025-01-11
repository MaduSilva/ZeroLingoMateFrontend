import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Staatliches_400Regular,
} from "@expo-google-fonts/staatliches";
import AppLoading from "expo-app-loading";
import { Image } from "expo-image";

const imagePath = require("../../assets/images/logo-zerolingomate.png");

export default function Header() {
  let [fontsLoaded] = useFonts({
    Staatliches_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styles.header]}>
        <Text style={[styles.logoText]}>ZeroLingoMate</Text>
        <Image style={styles.logoImage} source={imagePath} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#84b8e4",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoText: {
    fontFamily: "Staatliches_400Regular",
    color: "#2C3E50",
    fontSize: 18,
  },
  logoImage: {
    top: 1,
    width: 70 * 0.7,
    height: 50 * 0.7,
  },
});
