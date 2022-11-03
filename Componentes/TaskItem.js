import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default TaskItem = (props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.indexContainer,{ backgroundColor: colors.primary}]}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={[styles.taskContainer,{ backgroundColor: colors.primary}]}>
        <Text style={styles.task}>{props.task}</Text>
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={18}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingTop: 15,

  },
  indexContainer: {
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  index: {
    color: "#fff",
    fontSize: 20,
  },
  taskContainer: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: "#fff",
    width: "90%",
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
    paRight: 15,
  },
});
