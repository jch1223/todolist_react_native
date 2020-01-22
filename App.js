import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";

export default class App extends React.Component {
  state = {
    todos: [
      {
        title: "클래스 101 커리큘럼 만들기",
        done: true
      },
      {
        title: "할일 어플 만들기",
        done: false
      }
    ]
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => {
            return <TodoItem title={item.title} done={item.done} />;
          }}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
        />
        <TaskModal isVisivle={false}></TaskModal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
