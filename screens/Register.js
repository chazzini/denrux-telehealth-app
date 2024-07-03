import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, Text } from "react-native";
import styled, { useTheme } from "styled-components/native";
import TextInput from "../components/onboarding/TextInput";
import DropDown from "react-native-input-select";
import TermsAndCondition from "../components/onboarding/Terms";
import TopBar from "../components/onboarding/TopBarBack";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.screenBg};
`;
const Title = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 24px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 300;
  margin-top: 10px;
  padding: 0px 20px;
`;

const SubTitle = styled.Text`
  color: #353535;
  font-size: 14px;
  font-family: "Roboto-Regular";
  margin-bottom: 20px;
  margin-top: 0px;
  padding: 0px 20px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 0 20px;
`;

const Bottom = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  width: 100%;
  font-family: "Roboto-Regular";
  align-self: center;
  padding: 15px 20px;
  color: #fff;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
`;

const BottomButtonText = styled.Text`
  font-family: "RobotoSerif-Regular";
  font-size: 14px;
`;

const HeaderLogo = styled.Image`
  height: 80px;
  width: 80px;
  margin-top: 10px;
`;

const Span = styled.Text`
  color: ${(props) => props.theme.primaryColor};
`;

const RowView = styled.View`
  flex-direction: row;
  padding: 0px 20px;
`;

const RegisterScreen = ({ navigation }) => {
  const [gender, setGender] = useState();
  const [agreement, setAgreement] = useState(false);
  const theme = useTheme();

  const EmailRef = useRef();

  const goToSigin = () => {
    navigation.navigate("sign-in");
  };

  useEffect(() => {
    //auto focus the textinput
    if (!EmailRef) return null;
    //EmailRef.current.focus();
  }, [EmailRef]);

  return (
    <Container keyboardDismissMode="on-drag">
      <TopBar />
      <HeaderLogo source={require("../assets/logo.png")} resizeMode="contain" />
      <Title>Sign Up</Title>
      <SubTitle>Again easy access to healthcare providers</SubTitle>
      <KeyboardAvoidingView>
        <TextInput placeholder="Enter your email" ref={EmailRef} />
        <TextInput placeholder="Phone" />
        <TextInput placeholder="password" secureTextEntry />
        <RowView>
          <DropDown
            placeholder="Gender..."
            options={[
              { label: "Male", value: "M" },
              { label: "Female", value: "F" },
            ]}
            selectedValue={gender}
            onValueChange={(value) => setGender(value)}
            primaryColor={theme.primaryColor}
            dropdownContainerStyle={{ width: "48%" }}
            dropdownStyle={{
              backgroundColor: theme.offWhite,
              borderWidth: 0,
              color: theme.text.gray,
            }}
            textInputStyle={{ borderwidth: 0, borderColor: theme.offWhite }}
          />
        </RowView>
      </KeyboardAvoidingView>

      <TermsAndCondition setAgreement={setAgreement} agreement={agreement} />
      <Button>
        <ButtonText>Sign up</ButtonText>
      </Button>

      <Bottom>
        <Button onPress={goToSigin}>
          <BottomButtonText>
            I aready have and account? <Span>Sign in.</Span>
          </BottomButtonText>
        </Button>
      </Bottom>
    </Container>
  );
};

export default RegisterScreen;
