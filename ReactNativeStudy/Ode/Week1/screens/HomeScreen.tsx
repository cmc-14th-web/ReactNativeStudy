import React from "react";
import Container from "../components/Container";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import useTodoStorage from "../@hooks/useAsyncStorage";
import { todoStyles } from "./CreateTodoScreen";
import SvgIcon, { SvgLabelType } from "../components/SvgIcon";
import { useTheme } from "../styles/@hooks/useTheme";
import Colors from "../styles/colors";

export default function HomeScreen() {
  const { primaryColor } = useTheme();
  const { storedValue, deleteTodo, updateTodo } = useTodoStorage();

  return (
    <Container>
      {Object.entries(storedValue).map(([key, todo]) => {
        const isChecked = todo.done;
        return (
          <View
            key={key}
            style={{
              ...todoStyles,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: isChecked ? primaryColor : Colors.white,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <TouchableOpacity onPress={() => updateTodo(key, { ...todo, done: !isChecked })}>
                <SvgIcon
                  label={isChecked ? SvgLabelType.Check : SvgLabelType.Circle}
                  fill={isChecked ? Colors.white : primaryColor}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: isChecked ? Colors.white : Colors.black,
                }}
              >
                {todo.text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteTodo(key)}>
              <SvgIcon label={SvgLabelType.Trash} fill={isChecked ? Colors.white : primaryColor} />
            </TouchableOpacity>
          </View>
        );
      })}
    </Container>
  );
}
