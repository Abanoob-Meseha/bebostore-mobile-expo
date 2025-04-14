import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";
import { tSubCategory } from "@/assets/types";
import SubCategoryTab from "./SubCategoryTab";

const subCategories: tSubCategory[] = [
  {
    id: "1",
    title: "cloths",
    imgUrl: "",
  },
  {
    id: "2",
    title: "wear",
    imgUrl: "",
  },
  {
    id: "3",
    title: "Laptops",
    imgUrl: "",
  },
  {
    id: "4",
    title: "Laptops",
    imgUrl: "",
  },
  {
    id: "5",
    title: "Laptops",
    imgUrl: "",
  },
  {
    id: "6",
    title: "Laptops",
    imgUrl: "",
  },
];
const SubCategoriesSection = () => {
  return (
    <HorizontalList
      addedStyle={{ height: 90 }}
      data={subCategories}
      renderItemCallback={({ item }: { item: tSubCategory }) => (
        <SubCategoryTab title={item.title} imgUrl={"/"} />
      )}
    />
  );
};

export default SubCategoriesSection;

const styles = StyleSheet.create({});
