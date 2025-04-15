import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LatoText from "./LatoText";
import colors from "@/assets/colors/colors";

const AppLogo = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 25, height: 25 }}
      />
      <LatoText
        style={{
          color: colors.primary,
          fontSize: 19,
          fontWeight: "bold",
          fontFamily: "Lato_700Bold",
          elevation: 15,
        }}
      >
        BEBO<LatoText style={{ color: "black" }}>STORE</LatoText>
      </LatoText>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({});
