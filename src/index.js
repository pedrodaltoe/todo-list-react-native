import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import AddTask from "../components/addTask";

export default function Root() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <AddTask
        task={task}
        buttonAddTask={handleAddTask}
        onChangeText={(text) => setTask(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
