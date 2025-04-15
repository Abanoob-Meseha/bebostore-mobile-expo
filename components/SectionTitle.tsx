import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, RelativePathString } from "expo-router";
import colors from "@/assets/colors/colors";
import LatoText from "./LatoText";

const SectionTitle = ({
  title,
  href,
}: {
  title: string;
  href: RelativePathString;
}) => {
  return (
    <View style={styles.container}>
      <LatoText style={styles.title}>{title}</LatoText>
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
