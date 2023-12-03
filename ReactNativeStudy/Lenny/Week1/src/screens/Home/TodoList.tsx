import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import IncompleteTodo from '../../assets/icons/incomplete-todo.svg';
import CompleteTodo from '../../assets/icons/complete-todo.svg';
import Delete from '../../assets/icons/delete.svg';
import {useStore} from '../../store/store';
import colors from '../../styles/color';
import {TodoProps} from '../../types/Home/Home';

import * as Style from '../../styles/Home/TodoList.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TodoList(props: TodoProps) {
  const [isDone, setIsDone] = useState<boolean>(props.isDone);
  const {color, todos, setTodos} = useStore();

  const checkTodo = async () => {
    setIsDone(!isDone);
    let oldTodos = [...todos];
    const findIndex = todos.findIndex(todo => todo.todo === props.todo);
    oldTodos[findIndex].isDone = !isDone;
    setTodos([...oldTodos]);
    await AsyncStorage.setItem('todos', JSON.stringify([...oldTodos]));
  };

  const DeleteTodo = () => {
    Alert.alert('정말 삭제하시겠습니까?', '', [
      {
        text: '취소',
        onPress: () => {
          return;
        },
      },
      {
        text: '확인',
        onPress: async () => {
          const delteIndex = todos.findIndex(todo => todo.todo === props.todo);
          const newTodos = [
            ...todos.slice(0, delteIndex),
            ...todos.slice(delteIndex + 1),
          ];
          setTodos([...newTodos]);
          await AsyncStorage.setItem('todos', JSON.stringify([...newTodos]));
        },
      },
    ]);
  };

  return (
    <Style.Container isDone={isDone} color={color}>
      <Style.Wrap>
        <TouchableOpacity activeOpacity={0.5} onPress={checkTodo}>
          {isDone ? (
            <CompleteTodo width={24} height={24} color={colors.white} />
          ) : (
            <IncompleteTodo width={24} height={24} color={color} />
          )}
        </TouchableOpacity>
        <Style.Text isDone={isDone}>{props.todo}</Style.Text>
      </Style.Wrap>
      <TouchableOpacity activeOpacity={0.5} onPress={DeleteTodo}>
        <Delete width={24} height={24} color={isDone ? colors.white : color} />
      </TouchableOpacity>
    </Style.Container>
  );
}
