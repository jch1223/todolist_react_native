import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome } from "@expo/vector-icons";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ title, done, remove, toggle }) => {
  return (
    <Swipeable
      //  overshootLeft={false} overshootRight={false} rightThreshold={20}
      renderRightActions={e => <DeleteButton onPress={remove} />}
    >
      <View style={styles.container}>
        <View style={styles.todo}>
          <TouchableOpacity activeOpacity={0.8} style={done ? styles.done : styles.check} onPress={toggle}>
            <FontAwesome name='check' color={done ? "#fff" : "#e0e0e0"} size={14}></FontAwesome>
          </TouchableOpacity>
          <Text stlye={styles.title}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff"
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  title: {
    fontSize: 16,
    color: "#424242"
  },
  check: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
  done: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#6830cf"
  }
});

export default TodoItem;
