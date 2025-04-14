import { FlatList, StyleSheet, StyleSheetProperties, Text, View, ViewStyle } from "react-native";
import React from "react";
type tHorizontalListProps = {
    data : any [] ,
    renderItemCallback : ({item}:{item  :any}) => React.JSX.Element ,
    addedStyle?: ViewStyle
}
const HorizontalList = ({data , renderItemCallback , addedStyle}:tHorizontalListProps) => {
  return (
    <View style={[styles.container , addedStyle]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItemCallback}
      ></FlatList>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  listContainer: {
    gap: 10,
  },
});
