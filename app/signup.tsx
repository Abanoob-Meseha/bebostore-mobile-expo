import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyle from "@/assets/styles/globalStyle";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "@/assets/colors/colors";

const signup = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Text style={globalStyle.title}>Create Account</Text>
      <Text style={globalStyle.description}>
        Create an account so you can explore all products and offers
      </Text>
      {/* Login Form */}
      <View style={globalStyle.form}>
        <Input mode="text" placeholder="First Name" />
        <Input mode="text" placeholder="Last Name" />
        <Input
          mode="email"
          placeholder="Email"
          icon={<Entypo name="mail" size={24} color={colors.primary} />}
        />
        <Input
          mode="text"
          placeholder="Password"
          icon={<Entypo name="key" size={24} color={colors.primary} />}
        />
        <Input
          mode="text"
          placeholder="Confirm Password"
          icon={<Entypo name="key" size={24} color={colors.primary} />}
        />
        <Button type="primary" onPress={() => {}}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({});
