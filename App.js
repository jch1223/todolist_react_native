import React from "react";
import { StyleSheet, FlatList, SafeAreaView, AsyncStorage } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";

export default class App extends React.Component {
  state = {
    todos: [
      {
        title: "우측 상단 + 버튼을 누르면 할 일을 추가 합니다",
        done: true
      },
      {
        title: "왼쪽으로 스와이프 하면 삭제 할 수 있습니다",
        done: false
      }
    ],
    showModal: false
  };

  componentDidMount() {
    AsyncStorage.getItem("@todo:state").then(state => {
      this.setState(JSON.parse(state));
    });
  }

  save = () => {
    AsyncStorage.setItem("@todo:state", JSON.stringify(this.state));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true });
          }}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                remove={() => {
                  this.setState(
                    {
                      todos: this.state.todos.filter((_, i) => i !== index)
                    },
                    this.save
                  );
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos];
                  newTodos[index].done = !newTodos[index].done;
                  this.setState(
                    {
                      todos: newTodos
                    },
                    this.save
                  );
                }}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return `${item.title}-${index}`;
          }}
        />
        <TaskModal
          add={title => {
            this.setState(
              {
                todos: this.state.todos.concat({
                  title: title,
                  done: false
                }),
                showModal: false
              },
              this.save
            );
          }}
          hide={() => {
            this.setState({ showModal: false });
          }}
          isVisivle={this.state.showModal}
        ></TaskModal>
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
