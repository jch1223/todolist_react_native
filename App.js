import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js </Text>
        <Text>to start working on your app!</Text>
      </View>
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
    backgroundColor: "#fff",
    padding: 16,
    margin: 64,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: "#e0e0e0"
  }
});
