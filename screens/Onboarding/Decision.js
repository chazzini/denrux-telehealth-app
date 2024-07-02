import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.screenBg};
`;

const Top = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 3}px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  background-size: contain;
  margin-top: 40px;
`;

const Bottom = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 2}px;
  padding: 0 20px;
  flex-grow: 1;
`;

const Title = styled.Text`
  font-family: "RobotoSerif-SemiBold";
  font-size: 18px;
  color: #353535;
  font-weight: 300;
  width: 250px;
  text-align: center;
  align-self: center;
`;

const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  flex-grow: 2;
  margin-top: 60px;
`;

const ActionButton = styled.TouchableOpacity`
  height: 130px;
  width: 130px;
  border: 1px solid #ccc;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ActionText = styled.Text`
  color: #000;
  font-family: "RobotoSerif-SemiBold";
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
`;

const ActionInfo = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  width: 150px;
`;

const SiginText = styled(ActionInfo)`
  font-size: 16px;
  width: 100%;
`;

const ActionItem = styled.TouchableOpacity`
  width: 150px;
  align-items: center;
`;
const Span = styled.Text`
  color: #3c5bfa;
`;
const DecisionScreen = ({ navigation: { navigate } }) => {
  const theme = useTheme();

  const goToPatientOnboarding = () => {
    navigate("onboarding-patient");
  };
  const goToProviderOnboarding = () => {
    navigate("onboarding-provider");
  };
  const goToSignin = () => {
    navigate("sign-in");
  };

  return (
    <Container contentContainerStyle={{ justifyContent: "space-between" }}>
      <Top>
        <Logo source={require("../../assets/logo.png")} resizeMode="contain" />
      </Top>
      <Bottom>
        <Title>How would you want to use the app?</Title>
        <ActionContainer>
          <ActionItem>
            <ActionButton onPress={goToPatientOnboarding}>
              <Fontisto name="person" size={40} color="#3C5BFA" />
              <ActionText>Patient</ActionText>
            </ActionButton>
            <ActionInfo>
              Want to connect with doctors, nurses and other providers
            </ActionInfo>
          </ActionItem>
          <ActionItem>
            <ActionButton onPress={goToProviderOnboarding}>
              <Fontisto name="doctor" size={40} color="#3C5BFA" />
              <ActionText>Health Provider</ActionText>
            </ActionButton>
            <ActionInfo>Providing health services to patients</ActionInfo>
          </ActionItem>
        </ActionContainer>
        <SiginText onPress={goToSignin}>
          Already have a account? <Span>Sign in</Span>
        </SiginText>
      </Bottom>
    </Container>
  );
};

export default DecisionScreen;
