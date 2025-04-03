import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "@/assets/colors/colors";
import AuthSection from "@/components/AuthSection";
const WomanImage = require("@/assets/images/woman-shopping2.png");

const auth = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={WomanImage}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <AuthSection/>
      </ImageBackground>
    </View>
  );
};

export default auth;

const styles = StyleSheet.create({});
