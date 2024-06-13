import React from "react";
import { Text, View } from "react-native";

const DecisionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Check if fonts loaded in working</Text>
      <Text
        style={{
          fontFamily: "RobotoSerif-SemiBold",
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        DecisionScreen
      </Text>
    </View>
  );
};

export default DecisionScreen;
