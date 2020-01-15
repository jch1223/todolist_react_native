import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StartButton = ({ showAlert }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={showAlert}>
      <View style={styles.box}>
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
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    padding: 16
  }
});

export default StartButton;
