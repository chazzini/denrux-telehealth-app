import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DecisionScreen from "../screens/Onboarding/Decision";
import ProviderScreen from "../screens/Onboarding/Provider";
import OnboardingPatient from "../screens/Onboarding/Patient";
import SiginScreen from "../screens/SignIn";
import RegisterScreen from "../screens/Register";
import ForgottenPasswordScreen from "../screens/ForgottenPassword";

const Onboarding = () => {
  const OnboardingScreens = createStackNavigator();

  return (
    <OnboardingScreens.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingScreens.Screen
        name="select-account-type"
        component={DecisionScreen}
      />
      <OnboardingScreens.Screen
        name="onboarding-patient"
        component={OnboardingPatient}
      />
      <OnboardingScreens.Screen
        name="onboarding-provider"
        component={ProviderScreen}
      />
      <OnboardingScreens.Screen name="sign-in" component={SiginScreen} />
      <OnboardingScreens.Screen name="sign-up" component={RegisterScreen} />
      <OnboardingScreens.Screen
        name="forgotten-password"
        component={ForgottenPasswordScreen}
      />
    </OnboardingScreens.Navigator>
  );
};

export default Onboarding;
