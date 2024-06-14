import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.screenBg};
`;

const OnboardingPatient = () => {
  return <Container></Container>;
};

export default OnboardingPatient;
