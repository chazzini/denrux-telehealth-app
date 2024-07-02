import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import TextInput from "../components/TextInput";
import TopBar from "../components/TopBarBack";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.screenBg};
`;
const Title = styled.Text`
  font-family: "RobotoSerif-SemiBold";
  font-size: 32px;
  color: #3c5bfa;
  font-weight: 300;
  margin-top: 40px;
  padding: 0px 20px;
`;

const SubTitle = styled.Text`
  color: #353535;
  font-size: 14px;
  font-family: "Roboto-Regular";
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 0px 20px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 0 20px;
`;

const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const ButtonText = styled.Text`
  width: 100%;
  font-family: "Roboto-Regular";
  align-self: center;
  padding: 10px 20px;
  color: #fff;
  background-color: #3c5bfa;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
`;

const BottomButtonText = styled.Text`
  font-family: "RobotoSerif-Regular";
  font-size: 14px;
  width: 150px;
`;

const HeaderLogo = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 40px;
`;

const Span = styled.Text`
  color: #3c5bfa;
`;

const SiginScreen = ({ navigation }) => {
  const EmailRef = useRef();

  const goToRegisterScreen = () => {
    console.log(navigation);
    navigation.navigate("sign-up");
  };

  useEffect(() => {
    //auto focus the textinput
    if (!EmailRef) return null;
    //EmailRef.current.focus();
  }, [EmailRef]);

  return (
    <Container>
      <TopBar />
      <HeaderLogo source={require("../assets/logo.png")} resizeMode="contain" />
      <Title>Welcome Back</Title>
      <SubTitle>Again easy access to healthcare providers</SubTitle>
      <KeyboardAvoidingView>
        <TextInput placeholder="Enter your email" ref={EmailRef} />
        <TextInput placeholder="password" secureTextEntry />
      </KeyboardAvoidingView>

      <Button>
        <ButtonText>Sign in</ButtonText>
      </Button>

      <Bottom>
        <Button>
          <BottomButtonText>
            Forgot password?
            <Span>recover account.</Span>
          </BottomButtonText>
        </Button>
        <Button onPress={goToRegisterScreen}>
          <BottomButtonText>
            Are you new?
            <Span> Please Sign up.</Span>
          </BottomButtonText>
        </Button>
      </Bottom>
    </Container>
  );
};

export default SiginScreen;
