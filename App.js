import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import Root from "./navigation/Root";
import Splash from "./screens/Splash";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appLoading, setAppLoading] = useState(false);
  //check if user has onboarded on the app previously

  const LoadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),

      "RobotoSerif-Regular": require("./assets/fonts/RobotoSerif-Regular.ttf"),

      "RobotoSerif-SemiBold": require("./assets/fonts/RobotoSerif-SemiBold.ttf"),

      "RobotoSerif-Light": require("./assets/fonts/RobotoSerif-Light.ttf"),
      ...Ionicons.font,
    });
  };

  const LoadAssets = async () => {
    await Asset.loadAsync([require("./assets/splash-logo.png")]);
  };

  if (appLoading) return <Splash />;

  useEffect(() => {
    (async () => {
      await Promise.all(LoadFonts(), LoadAssets());
      await SplashScreen.hideAsync();
    })();
    setAppLoading(false);
  }, []);

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
