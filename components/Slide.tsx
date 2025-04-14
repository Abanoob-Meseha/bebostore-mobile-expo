import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/assets/colors/colors";
import { tSlide } from "@/assets/types";

const Slide = ({activeSlide } : {activeSlide : tSlide}) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.slideTxt}>{activeSlide.title}</Text>
      <Image
        source={require("../assets/images/woman-shopping.png")}
        style={{ width: 200, height: 150 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    backgroundColor: colors.secondary,
    zIndex: 10,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    paddingBottom: 50,
    position: "absolute",
  },
  slideTxt: {
    fontSize: 25,
    fontWeight: "bold",
    width: "50%",
    color: colors.primary,
  },
});
