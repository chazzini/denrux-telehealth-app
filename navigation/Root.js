import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./Onboarding";

const Root = () => {
  const Nav = createStackNavigator();

  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="onboarding" component={Onboarding} />
    </Nav.Navigator>
  );
};

export default Root;
