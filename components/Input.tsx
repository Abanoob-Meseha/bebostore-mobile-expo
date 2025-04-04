import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { ReactNode } from "react";
import colors from "@/assets/colors/colors";

interface inputProps {
  mode: "text" | "email" | "numeric";
  placeholder: string;
  icon?: ReactNode;
}
const Input = ({ mode, placeholder, icon }: inputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        inputMode={mode ?? "text"}
        placeholder={placeholder}
        style={styles.input}
      />
      {icon && <View style={styles.iconContainer}>{icon}</View>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontSize: 20,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
  },
});
