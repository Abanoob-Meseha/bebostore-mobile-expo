import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import SliderCounter from "./SliderCounter";
import Slide from "./Slide";
import { slides } from "@/assets/data/slides";


const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < slides.length - 1) {
        counter++;
        setActiveSlide(slides[counter]);
      } else {
        counter = 0;
        setActiveSlide(slides[counter]);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.sliderContainer}>
      {/* active Slide */}
      <Slide activeSlide={activeSlide} />
      {/* slider counter bullets */}
      <SliderCounter slides={slides} activeSlide={activeSlide} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 10,
    width: "94%",
    alignSelf: "center",
    position: "relative",
    height: 220,
  },
});
