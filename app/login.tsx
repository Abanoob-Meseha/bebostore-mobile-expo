import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "@/assets/colors/colors";
import globalStyle from "@/assets/styles/globalStyle";
import { Link, useRouter } from "expo-router";
import LatoText from "@/components/LatoText";

const login = () => {
  const router = useRouter();
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <LatoText style={globalStyle.title}>Login</LatoText>
      <LatoText style={globalStyle.description}>
        Welcome back you have been missed!
      </LatoText>
      {/* Login Form */}
      <View style={globalStyle.form}>
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
        <Link href={"/"} style={{ alignSelf: "center" }}>
          Forget Password ?
        </Link>
        <Button type="primary" onPress={() => {router.navigate("/home")}}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
