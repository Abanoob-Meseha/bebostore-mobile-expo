import { Stack , Slot } from "expo-router";
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null; // أو <AppLoading /> لو عايز شاشة تحميل
  }
  return <Slot />;
}
