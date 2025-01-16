import React, { useCallback } from "react";
import { View, StyleSheet, Linking, Image } from "react-native";
import { Stack, router } from "expo-router";
import CustomText from "./components/CustomText";
import CustomButton from "./components/CustomButton";

export default function NotFoundScreen() {
  const imagePath = require("../assets/images/image-error.png");
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <CustomText style={styles.errorTitle}>Oops!</CustomText>
        <CustomText style={styles.errorMessage}>
          Something didn't go as expected.
        </CustomText>
        <CustomText style={styles.errorMessage}>
          We are investigating and
        </CustomText>
        <CustomText style={styles.errorMessage}>
          will get back to you soon.
        </CustomText>
        <Image style={styles.errorImage} source={imagePath} />
        <CustomText style={styles.errorLog}>
          Error log: The request was aborted due to an unexpected server error.
        </CustomText>
        {/* FIXME: Entender o porque o erro nesse router  */}
        <CustomButton
          onPress={() => router.dismissTo("/")}
          style={styles.button}
        >
          Back to Home
        </CustomButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
  },
  errorTitle: {
    marginBottom: 10,
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 11,
  },
  errorImage: {
    width: 200 * 0.6,
    height: 200 * 0.6,
    marginBottom: 20,
    marginTop: 20,
  },
  errorLog: {
    fontSize: 7,
    width: 130,
    opacity: 0.4,
  },
  button: {
    marginTop: 20,
  },
});
