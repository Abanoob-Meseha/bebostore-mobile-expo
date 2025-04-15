import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartHeader from "@/components/CartHeader";
import CartProduct from "@/components/CartProduct";
import { products } from "@/assets/data/products";
import ProductsWrapper from "@/components/ProductsWrapper";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const cart = () => {
  const { cartProducts , totalPrice } = useSelector((store: RootState) => store.cart);
  return (
    <View style={styles.conatiner}>
      {/* Cart Header */}
      <CartHeader totalPrice={totalPrice} itemsNum={cartProducts.length} />
      {/* Product Wrapper */}
      <ScrollView
        style={{ height: "70%" }}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 8 }}
      >
        <ProductsWrapper>
          {cartProducts.map((product, index) => {
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
