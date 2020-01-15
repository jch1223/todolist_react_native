import React from "react";
import { StyleSheet, View, Alert, TextInput } from "react-native";

import StartButton from "./components/StartButton";

export default function App() {
  let content = "";
  let showAlert = () => {
    Alert.alert(content);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='입력하세요'
        onChangeText={text => {
          content = text;
        }}
      ></TextInput>

      <StartButton showAlert={showAlert} disabled={content.length > 0 ? false : true}></StartButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#6830cf",
    padding: 16
  },
  first: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    padding: 16
  },
  input: {
    width: "100%",
    textAlign: "center",
    paddingBottom: 10
  }
});
