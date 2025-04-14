import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import colors from "@/assets/colors/colors";
import { tSlide } from "@/assets/types";

type tSliderCounterProps = {
    slides : tSlide[] ,
    activeSlide : tSlide ,

}
const SliderCounter = ({slides , activeSlide}: tSliderCounterProps) => {
  return (
    <View style={styles.sliderCounter}>
      {slides.map((slide) => (
        <Octicons
          name={"dot-fill"}
          size={slide === activeSlide ? 18 : 14}
          color={slide === activeSlide ? colors.primary : "grey"}
          key={slide.id}
        />
      ))}
    </View>
  );
};

export default SliderCounter;

const styles = StyleSheet.create({
  sliderCounter: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    zIndex: 20,
    alignItems: "center",
  },
});
