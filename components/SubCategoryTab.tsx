import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { tSubCategory } from "@/assets/types";
import colors from "@/assets/colors/colors";

const SubCategoryTab = ({ id ,title , imgUrl} : tSubCategory ) => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.img} resizeMode="stretch"/>
      <Text>{title}</Text>
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
