import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import styled from "styled-components/native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { onboardingData } from "../../demo-data";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.screenBg};
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

const TopBar = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
const TopBarButton = styled.TouchableOpacity`
  padding: 10px 20px;
  color: #3c5bfa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TopBarButtonText = styled.Text`
  line-height: 20px;
  font-size: 16px;
  font-family: "Roboto-Light";
`;

const Button = styled.TouchableOpacity`
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  width: 90%;
  font-family: "Roboto-Regular";
  align-self: center;
  padding: 10px 20px;
  color: #fff;
  background-color: #3c5bfa;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
`;

const SlideContainer = styled.View`
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT / 2}px;
  padding-bottom: 100px;
  align-items: center;
  flex-grow: 2;
`;

const Description = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 14px;
  text-align: center;
`;

const Bottom = styled.View`
  padding: 20px 0;
  flex: 1;
`;

const OnboardingPatient = ({ navigation }) => {
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const gotoPatientSignin = () => {};

  const colors = ["tomato", "thistle", "skyblue", "teal"];

  return (
    <Container>
      <TopBar>
        <TopBarButton onPress={goBack}>
          <Ionicons name="close-outline" size={20} color="#3c5bfa" />
        </TopBarButton>
        <TopBarButton>
          <TopBarButtonText>Skip</TopBarButtonText>
          <Ionicons name="chevron-forward-outline" size={16} />
        </TopBarButton>
      </TopBar>

      <SwiperFlatList
        contentContainerStyle={{
          height: SCREEN_HEIGHT / 2,
          marginBottom: 40,
          marginTop: 40,
          position: "relative",
        }}
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={1}
        showPagination
        paginationActiveColor="#3c5bfa"
        paginationinActiveColor="#D9D9D9"
        data={onboardingData}
        paginationStyle={{
          position: "absolute",
          top: SCREEN_HEIGHT / 2 + 90,
        }}
        renderItem={({ item }) => {
          const image = item.image;
          console.log(image);
          return (
            <SlideContainer style={[{ backgroundColor: item }]} key={item.id}>
              <Image
                source={require("../../assets/p-03.png")}
                resizeMode="contain"
                style={{
                  height: 300,
                  width: 300,
                }}
              />
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </SlideContainer>
          );
        }}
      />
      <Bottom style={{}}>
        <Title>I'm a patient</Title>

        <Button onPress={gotoPatientSignin}>
          <ButtonText>Sign in</ButtonText>
        </Button>
        <Button onPress={gotoPatientSignin}>
          <ButtonText style={{ backgroundColor: "#FA3C6A" }}>
            Register
          </ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
};

export default OnboardingPatient;
