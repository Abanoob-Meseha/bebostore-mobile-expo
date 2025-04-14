import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/assets/colors/colors";
import { tProduct } from "@/assets/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "./Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductCard = ({
  id,
  name,
  price,
  imgUrl,
  offerPercentage,
  priceBeforeOffer,
  rating,
}: tProduct) => {
  return (
    <View style={styles.container}>
      {/* offer & favorite absolute Section */}
      <View style={styles.header}>
        <Text style={styles.offerTxt}> -{offerPercentage}%</Text>
        <FontAwesome
          name="cart-plus"
          size={24}
          color={colors.primary}
          style={{ elevation: 15 , backgroundColor: "white" , padding: 5 , borderRadius: 50 }}
        />
      </View>
      <Image
        resizeMode="cover"
        source={require("@/assets/images/products/airbuds.png")}
        alt={name}
        style={styles.img}
      />
      {/* name and price Section */}
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rating_price}>
            {/* rating */}
          <View style={{ display: "flex",flexDirection: "row" ,alignItems: "center" , gap: 2 }}>
            <AntDesign name="star" size={24} color="gold" />
            <Text>{rating}</Text>
          </View>
          {/* prices */}
          <View>
            <Text style={{color: colors.primary , fontSize: 16}}>{price} EGP</Text>
            <Text style={{color: "red" , textDecorationLine: "line-through"}}>{priceBeforeOffer}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    elevation: 12,
    position: "relative",
    width: 170,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 160,
    position: "absolute",
    top: 15,
    zIndex: 20,
  },
  offerTxt: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
    fontSize: 15,
    color: "white",
    elevation: 15,
  },
  img: {
    width: "100%",
    height: 180,
    marginTop: 10,
    zIndex: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rating_price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
