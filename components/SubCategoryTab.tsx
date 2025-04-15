import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { tSubCategory } from "@/assets/types";
import colors from "@/assets/colors/colors";
import LatoText from "./LatoText";

const SubCategoryTab = ({ id ,title , imgUrl} : tSubCategory ) => {
  return (
    <View style={styles.container}>
      <Image source={imgUrl} style={styles.img} resizeMode="stretch"/>
      <LatoText>{title}</LatoText>
    </View>
  );
};

export default SubCategoryTab;

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",
        gap: 5 ,
    },
    img:{
        width: 60 ,
        height: 60 ,
        borderRadius: 50,
        backgroundColor: colors.secondary
    }
});
