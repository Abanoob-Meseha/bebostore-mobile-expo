import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { products } from "@/assets/data/products";
import ProductCard from "./ProductCard";

const ProductsWrapper = ({children}:{children: ReactNode}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default ProductsWrapper;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 15,
    alignSelf: "center",
    marginTop: 10
  },
});
