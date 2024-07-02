import React, { useState } from "react";
import styled from "styled-components/native";

const Input = styled.TextInput`
  background-color: #f0f0f0;
  color: ${({ theme }) => theme.text.gray};
  padding: 18px 20px;
  border-radius: 5px;
  margin-top: 20px;
  margin: 0 20px 20px 20px;
  font-family: "Roboto-Regular";
  font-size: 16px;
`;

const TextInput = ({
  placeholder,
  style = {},
  ref,
  onChangeText,
  secureTextEntry = false,
}) => {
  const onFocus = (e) => {
    setInputFocus({
      backgroundColor: "#fff",
      borderWidth: 0.5,
      borderColor: "#3c5bfa",
    });
  };
  const onBlur = (e) => {
    setInputFocus({
      backgroundColor: "#f0f0f0",
    });
  };

  const [inputFocus, setInputFocus] = useState({
    backgroundColor: "#f0f0f0",
  });
  return (
    <Input
      placeholder={placeholder}
      style={{ ...inputFocus, ...style }}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;
