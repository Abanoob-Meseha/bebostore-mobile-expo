import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { tCartProduct, tProduct } from "@/assets/types";
import LatoText from "./LatoText";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "@/assets/colors/colors";
import { useDispatch } from "react-redux";
import { decreaseProductCount, increaseProductCount } from "@/redux/slices/cartSlice";

const CartProduct = ({ id,imgUrl, name, price , count }: tCartProduct) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image
        source={imgUrl}
        alt={name}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <View style={{width: "65%"}}>
        <LatoText
          style={{ fontSize: 18, fontWeight: "bold" }}
        >
          {name}
        </LatoText>
        <View style={{display: "flex" , flexDirection: "row" , justifyContent: "space-between", marginTop: 15}}>
          <LatoText
            style={{ fontSize: 15, color: colors.primary, fontWeight: "bold" }}
          >
            {price} EGP
          </LatoText>
          {/* product counter */}
          <View style={{ display: "flex", flexDirection: "row", gap: 10 , alignItems: "center" }}>
            <TouchableOpacity style={styles.counterBtn}>
              <AntDesign name="minus" size={15} color="white" onPress={()=>dispatch(decreaseProductCount({productId:id}))}/>
            </TouchableOpacity>
            <LatoText style={{width: 30 , textAlign: "center"}}>{count}</LatoText>
            <TouchableOpacity style={styles.counterBtn}>
              <AntDesign name="plus" size={15} color="white"  onPress={()=>dispatch(increaseProductCount({productId:id}))}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 25,
    elevation: 15,
    padding: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  counterBtn: {
    padding: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 15,
    backgroundColor: colors.primary,
  },
});
