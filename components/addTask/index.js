import React from "react";
import { Platform } from "react-native";
import {
  Input,
  AddText,
  Touchable,
  AddWrapper,
  WriteTaskWrapper,
} from "./styles";

const AddTask = ({ task, onChangeText, buttonAddTask }) => {
  return (
    <WriteTaskWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Input
        value={task}
        placeholder={"Write a task"}
        onChangeText={onChangeText}
      />
      <Touchable onPress={buttonAddTask}>
        <AddWrapper>
          <AddText>+</AddText>
        </AddWrapper>
      </Touchable>
    </WriteTaskWrapper>
  );
};

export default AddTask;
