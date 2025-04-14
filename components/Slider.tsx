import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "@/assets/colors/colors";
import SliderCounter from "./SliderCounter";
import { tSlide } from "@/assets/types";
import Slide from "./Slide";

const WomanImg = require("../assets/images/woman-shopping.png");

const slides: tSlide[] = [
  {
    id: "1",
    title: "First Purchase Enjoy a special offer",
    imgUrl: WomanImg,
  },
  {
    id: "2",
    title: "Second Purchase Enjoy a special offer",
    imgUrl: WomanImg,
  },
  {
    id: "31",
    title: "Third Purchase Enjoy a special offer",
    imgUrl: WomanImg,
  },
];

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
