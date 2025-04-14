import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, RelativePathString } from "expo-router";
import colors from "@/assets/colors/colors";

const SectionTitle = ({
  title,
  href,
}: {
  title: string;
  href: RelativePathString;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Link href={href} style={styles.link}>See All</Link>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title:{
    fontSize: 20 ,
    fontWeight: "bold",
  },
  link:{
    color: colors.primary
  }
});
