import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CategoryTab from "./CategoryTab";
import { tCategory } from "@/assets/types";
import HorizontalList from "./HorizontalList";

const categories: tCategory[] = [
  { id: "1", name: "All Products" },
  { id: "2", name: "Fashion" },
  { id: "3", name: "Food" },
  { id: "4", name: "Travel" },
  { id: "5", name: "Health" },
  { id: "6", name: "Education" },
  { id: "7", name: "Technology" },
];
const SearchFilterSection = () => {
  const [active, setActive] = useState(categories[0]);
  const handlePress = (item: tCategory) => {
    setActive(item);
  };
  return (
    <HorizontalList
      data={categories}
      addedStyle={{height: 30}}
      renderItemCallback={({ item }) => (
        <CategoryTab
          item={item}
          active={active}
          onPress={() => handlePress(item)}
        />
      )}
    />
  );
};

export default SearchFilterSection;

const styles = StyleSheet.create({});
