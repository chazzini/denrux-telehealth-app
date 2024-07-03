import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled, { useTheme } from "styled-components/native";
import { StatusBar } from "react-native";

const RowView = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
const TopBarButton = styled.TouchableOpacity`
  padding: 10px 10px;
  color: ${(props) => props.theme.primaryColor};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TopBar = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <RowView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TopBarButton onPress={goBack}>
        <Ionicons
          name="chevron-back-outline"
          size={20}
          color={theme.primaryColor}
        />
      </TopBarButton>
    </RowView>
  );
};

export default TopBar;
