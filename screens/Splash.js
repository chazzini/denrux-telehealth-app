import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

const ActivityIndicator = styled.ActivityIndicator`
  color: #3c5bfa;
`;
const Brand = styled.Text`
  color: #3c5bfa;
  font-size: 30px;
  margin-top: 0;
`;

const Splash = () => {
  return (
    <Container>
      <Logo source={require("../assets/logo.png")} resizeMode="contain" />

      <ActivityIndicator size={24} color="#3c5bfa" />
    </Container>
  );
};

export default Splash;
