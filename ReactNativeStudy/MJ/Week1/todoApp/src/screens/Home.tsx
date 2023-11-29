import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useRecoilState, useRecoilValue} from 'recoil';
import IconFactory from '../components/IconFactory';
import colorState from '../store/color';
import todoState from '../store/todo';
import palette from '../styles/palette';

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
      {todos.length === 0 && (
        <View style={styles.TodoList}>
          <Text>Todo가 없어요 ㅠ</Text>
        </View>
      )}
      {todos.map((todo, index) => (
        <View
          key={index}
          style={{
            ...styles.TodoItem,
            backgroundColor: todo.done ? palette[color] : palette.White,
          }}>
          <TouchableOpacity onPress={() => handlePressDone(todo.id)}>
            <IconFactory
              icon={todo.done ? 'Check' : 'Circle'}
              fill={todo.done ? palette.White : palette[color]}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.TodoContent,
              color: todo.done ? palette.White : palette.Black,
            }}>
            {todo.content}
          </Text>
          <TouchableOpacity onPress={() => handlePressDelete(todo.id)}>
            <IconFactory
              icon="Trash"
              fill={todo.done ? palette.White : palette[color]}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    gap: 20,
  },
  TodoList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TodoItem: {
    height: 60,
    paddingHorizontal: 30,
    marginHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TodoContent: {
    width: '75%',
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Home;
