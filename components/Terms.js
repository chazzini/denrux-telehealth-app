import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme, styled } from "styled-components/native";

const Text = styled.Text`
  color: #353535;
  font-size: 14px;
  font-family: "Roboto-Regular";
  margin-bottom: 20px;
  margin-top: 0px;
  padding: 0px 20px;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
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

const Modal = styled.Modal`
  position: absolute;
`;

const ModalContainerOuter = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  flex: 1;
  line-height: 24px;
`;
const ModalContainer = styled.View`
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.offWhite};
  position: absolute;
  bottom: 0;
  z-index: 999;
  right: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  elevation: 5;
`;

const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
  font-family: "Roboto-Bold";
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
`;

const ModalTopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity``;

const TermsAndCondition = ({ agreement, setAgreement }) => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();

  const agreeModal = () => {
    setShowModal((prev) => !prev);
  };

  const onDismiss = () => {
    setShowModal((prev) => !prev);
  };

  const dismiss = () => {
    setShowModal(false);
  };

  const agree = () => {
    setAgreement(true);
    dismiss();
  };

  return (
    <>
      <RowView>
        <BouncyCheckBox
          size={20}
          fillColor={theme.primaryColor}
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: theme.primaryColor }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "Roboto-Bold" }}
          textComponent={
            <Button onPress={agreeModal} style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: theme.text.light,
                  fontSize: 16,
                  marginTop: 15,
                }}
              >
                I agree to the{" "}
                <Text
                  style={{
                    color: theme.text.light,
                    fontSize: 16,
                    marginTop: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  terms and conditions
                </Text>
              </Text>
            </Button>
          }
          onPress={(isChecked) => {
            setAgreement((prev) => !prev);
          }}
          isChecked={agreement}
        />
      </RowView>
      <Modal
        visible={showModal}
        onDismiss={onDismiss}
        transparent={true}
        animationType="fade"
      >
        <ModalContainerOuter>
          <ModalContainer>
            <ModalTopRow>
              <ModalTitle>Terms and Conditions</ModalTitle>
              <Button onPress={dismiss}>
                <Ionicons name="close" size={24} color={theme.text.gray} />
              </Button>
            </ModalTopRow>
            <View style={{ height: 200, marginBottom: 10 }}>
              <ScrollView>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </ScrollView>
            </View>
            <Button onPress={agree}>
              <ButtonText>I Agree</ButtonText>
            </Button>
          </ModalContainer>
        </ModalContainerOuter>
      </Modal>
    </>
  );
};

export default TermsAndCondition;
