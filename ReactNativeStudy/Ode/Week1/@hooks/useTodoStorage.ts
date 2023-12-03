import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { Alert } from "react-native";
import { StorageKeys } from "../libraries/recoil/storageKeys";
import { todoState } from "../libraries/recoil/todo";
import { Todos, Todo } from "../types/todo";

const useTodoStorage = () => {
  const [storedValue, setStoredValue] = useRecoilState(todoState);

  const loadFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem(StorageKeys.TodoList);
      if (value !== null) {
        setStoredValue(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeTodo = async (newTodo: Todos) => {
    try {
      const jsonValue = JSON.stringify(newTodo);
      await AsyncStorage.setItem(StorageKeys.TodoList, jsonValue);
      setStoredValue(newTodo);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (text: string) => {
    const value: Todos = {
      ...storedValue,
      [Date.now().toString()]: { text, done: false },
    };
    onChangeTodo(value);
  };

  const updateTodo = async (key: string, todo: Todo) => {
    const value = { ...storedValue };
    value[key] = todo;
    onChangeTodo(value);
  };
  const deleteTodo = async (key: string) => {
    Alert.alert("정말 삭제하시겠습니까?", null, [
      { text: "취소" },
      {
        text: "확인",
        onPress: () => {
          const value: Todos = { ...storedValue };
          delete value[key];
          onChangeTodo(value);
        },
      },
    ]);
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return { storedValue, addTodo, updateTodo, deleteTodo };
};

export default useTodoStorage;
