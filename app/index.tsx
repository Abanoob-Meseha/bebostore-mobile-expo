import Button from "@/components/Button";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "@/assets/colors/colors";
const WomanImage = require("../assets/images/woman-shopping.png");
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter()
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={WomanImage}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 30,
          backgroundColor: colors.background,
        }}
        resizeMode="cover"
      >
        <Text
          style={{
            marginBottom: 50,
            color: colors.primary,
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: "Inter",
            boxShadow: "10px",
          }}
        >
          BEBO<Text style={{ color: "white" }}>STORE</Text>
        </Text>
          <Button
            type="primary"
            icon={<MaterialIcons name="start" color={"white"} size={20} />}
            onPress={() => router.navigate('/auth')}
          >
            Let's Get Started
          </Button>
      </ImageBackground>
    </View>
  );
}
