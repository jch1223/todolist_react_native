import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import Modal from "react-native-modal";

const TaskModal = ({ isVisivle }) => {
  return (
    <Modal style={styles.modal} isVisible={isVisivle} avoidKeyboard>
      <View style={styles.container}>
        <TextInput placeholder='새로운 할 일을 추가해 주세요' placeholderTextColor='#212121'></TextInput>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
});

export default TaskModal;
