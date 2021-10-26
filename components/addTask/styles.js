import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

export const WriteTaskWrapper = styled(KeyboardAvoidingView)`
  align-items: center;
  bottom: 60px;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
`;

export const Input = styled(TextInput)`
  background-color: #fff;
  border-color: #c0c0c0;
  border-radius: 60px;
  border-width: 1px;
  padding-horizontal: 15px;
  padding-vertical: 15px;
  width: 280px;
`;

export const Touchable = styled(TouchableOpacity)``;

export const AddWrapper = styled.View`
  align-items: center;
  background-color: #fff;
  border-color: #c0c0c0;
  border-radius: 60px;
  border-width: 1px;
  height: 60px;
  justify-content: center;
  width: 60px;
`;

export const AddText = styled.Text`
  font-size: 22px;
`;
