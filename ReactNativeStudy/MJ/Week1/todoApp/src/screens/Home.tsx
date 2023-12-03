import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {useRecoilState, useRecoilValue} from 'recoil';
import EmptyTodoList from '../components/EmptyTodoList';
import TodoItem from '../components/TodoItem';
import colorState from '../store/color';
import todoState from '../store/todo';

const Home = () => {
  const color = useRecoilValue(colorState);
  const [todos, setTodos] = useRecoilState(todoState);
  const handlePressDone = (id: number) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo)),
    );
  };

  const handlePressDelete = (id: number) => {
    Alert.alert('정말 삭제하시겠습니까?', undefined, [
      {text: '취소'},
      {
        text: '확인',
        onPress: () => {
          setTodos(prev => prev.filter(todo => todo.id !== id));
        },
      },
    ]);
  };

  return (
    <View style={styles.Container}>
      {todos.length === 0 && <EmptyTodoList />}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          color={color}
          handlePressDone={handlePressDone}
          handlePressDelete={handlePressDelete}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    gap: 20,
  },
});

export default Home;
