import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title='리액트 네이티브 수강' done={true} />
      <TodoItem title='리액트 네이티브 배포' done={false} />
      <TaskModal isVisivle={false}></TaskModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
