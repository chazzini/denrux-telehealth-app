import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DecisionScreen from "../screens/Onboarding/Decision";
import PatientScreen from "../screens/Onboarding/Patient";
import ProviderScreen from "../screens/Onboarding/Provider";
import OnboardingPatient from "../screens/Onboarding/Patient";

const Onboarding = () => {
  const OnboardingScreens = createStackNavigator();

  return (
    <OnboardingScreens.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingScreens.Screen
        name="onboarding-patient"
        component={OnboardingPatient}
      />
      <OnboardingScreens.Screen
        name="select-account-type"
        component={DecisionScreen}
      />
      <OnboardingScreens.Screen
        name="selected-health-provider"
        component={ProviderScreen}
      />
    </OnboardingScreens.Navigator>
  );
};

export default Onboarding;
