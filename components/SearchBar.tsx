import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "./Input";
import Feather from "@expo/vector-icons/Feather";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Input
        mode="text"
        placeholder="Search"
        icon={<Feather name="search" size={24} color="black" />}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        width: "95%"
    }
});
