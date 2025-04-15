import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { tCategory } from "@/assets/types";
import colors from "@/assets/colors/colors";
import LatoText from "./LatoText";

type tCategoryTabProps = {
  onPress: () => void;
  active: tCategory;
  item: tCategory;
};
const CategoryTab = ({ item, active, onPress }: tCategoryTabProps) => {
  return (
    <TouchableOpacity
      style={
        active === item
          ? [styles.categoryTab, styles.activeTab]
          : styles.categoryTab
      }
      onPress={onPress}
    >
      <LatoText style={active === item ? styles.activeTxt : styles.txt}>
        {item.name}
      </LatoText>
    </TouchableOpacity>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  categoryTab: {
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  txt: {
    color: "black",
  },
  activeTxt: {
    color: colors.primary,
  },
});
