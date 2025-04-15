import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/assets/colors/colors";
import LatoText from "./LatoText";
import AppLogo from "./AppLogo";

const CartHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* App Logo Section */}
        <AppLogo />
        <LatoText
          style={{
            marginTop: 6,
            fontSize: 15,
            color: colors.primary,
            fontWeight: "bold",
          }}
        >
          {" "}
          0 items
        </LatoText>
      </View>
      {/* Total Price Section */}
      <TotalPriceSection price={0}/>
    </View>
  );
};

export default CartHeader;

const TotalPriceSection = ({price}:{price : number}) => {
  return (
    <View>
      <LatoText style={{ marginTop: 6, fontSize: 15, fontWeight: "bold" }}>
        Total Price
      </LatoText>
      <LatoText
        style={{
          marginTop: 6,
          fontSize: 15,
          color: colors.primary,
          fontWeight: "bold",
        }}
      >
        {" "}
        {price} EGP
      </LatoText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    elevation: 15,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
