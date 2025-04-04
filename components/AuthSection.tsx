import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "@/assets/colors/colors";
const thirdPartyAuth: { name: string; onPress: () => void }[] = [
  {
    name: "Google",
    onPress: () => {},
  },
  {
    name: "Apple",
    onPress: () => {},
  },
  {
    name: "Facebook",
    onPress: () => {},
  },
];
const AuthSection = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <Button type="primary" onPress={() => router.navigate("/login")} style={{width:"40%"}}>
          Login
        </Button>
        <Button type="secondery" onPress={() => router.navigate("/signup")} style={{width:"40%"}}>
          Signup
        </Button>
      </View>
      <Text style={styles.orText}>
        {" "}
        ------------------------------ OR ------------------------------{" "}
      </Text>
      <View style={styles.thirdPartyContainer}>
        {thirdPartyAuth.map((provider, index) => {
            const providerName = provider.name.toLowerCase();
          return (
            <Button
              type="secondery"
              onPress={provider.onPress}
              key={index}
              style={{flexDirection: "row-reverse" , width: "100%" , justifyContent: "flex-end" , gap: 35}}
              icon={
                <FontAwesome name={providerName || "google"} size={30} color={colors.primary} />
              }
            >
              Continue with {provider.name}
            </Button>
          );
        })}
      </View>
    </View>
  );
};

export default AuthSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 50,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    paddingHorizontal: 10,
    paddingTop: 35,
    height: "55%",
    width: "100%",
  },
  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
  },
  thirdPartyContainer: {
    marginHorizontal: "auto",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
