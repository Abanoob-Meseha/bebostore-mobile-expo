import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { products } from "@/assets/data/products";
import ProductCard from "./ProductCard";

const ProductsWrapper = () => {
  return (
    <View style={styles.container}>
      {products.map((product, index) => {
        return <ProductCard {...product} key={product.id} />;
      })}
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
