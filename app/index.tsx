import Button from "@/components/Button";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "@/assets/colors/colors";
const WomanImage = require("../assets/images/woman-shopping.png");
import { useRouter } from 'expo-router';
import LatoText from "@/components/LatoText";

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
        <LatoText
          style={{
            marginBottom: 50,
            color: colors.primary,
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: 'Lato_700Bold',
            boxShadow: "10px",
          }}
        >
          BEBO<LatoText style={{ color: "white" }}>STORE</LatoText>
        </LatoText>
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
