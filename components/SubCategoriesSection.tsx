import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";
import { tSubCategory } from "@/assets/types";
import SubCategoryTab from "./SubCategoryTab";
import { subCategories } from "@/assets/data/subCategories";


const SubCategoriesSection = () => {
  return (
    <HorizontalList
      addedStyle={{ height: 90 }}
      data={subCategories}
      renderItemCallback={({ item }: { item: tSubCategory }) => (
        <SubCategoryTab {...item} />
      )}
    />
  );
};

export default SubCategoriesSection;

const styles = StyleSheet.create({});
