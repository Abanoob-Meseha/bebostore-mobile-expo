import { Text, TextProps } from "react-native";
import React from "react";

const LatoText = (props: TextProps) => {
  return (
    <Text {...props} style={[{ fontFamily: "Lato_400Regular" }, props.style]} />
  );
};

export default LatoText;

