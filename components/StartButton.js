import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StartButton = ({ showAlert, disabled }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={disabled ? null : showAlert}>
      <View style={disabled ? styles.disabled : styles.box}>
        <Text style={styles.text}>시작하기</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "#6830cf",
    padding: 16
  },
  disabled: {
    backgroundColor: "#9e9e9e",
    padding: 16
  },
  text: {
    color: "#fff"
  }
});

export default StartButton;
