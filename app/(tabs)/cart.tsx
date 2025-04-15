import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartHeader from "@/components/CartHeader";
import CartProduct from "@/components/CartProduct";
import { products } from "@/assets/data/products";
import ProductsWrapper from "@/components/ProductsWrapper";

const cart = () => {
  return (
    <View style={styles.conatiner}>
      {/* Cart Header */}
      <CartHeader />
      {/* Product Wrapper */}
      <ScrollView style={{height: "70%" }} contentContainerStyle={{paddingVertical: 10 , paddingHorizontal: 8}}>
        <ProductsWrapper>
          {products.map((product, index) => {
            return <CartProduct {...product} key={product.id} />;
          })}
        </ProductsWrapper>
      </ScrollView>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  conatiner: {
    padding: 16,
  },
});
