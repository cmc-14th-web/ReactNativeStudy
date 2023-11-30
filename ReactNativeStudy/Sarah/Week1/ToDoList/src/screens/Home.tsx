import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import {useRecoilValue} from 'recoil';
import {todoListState} from '../state/todoAtom';
import TodoList from '../components/ToDoList';

const Home = () => {
  const storedTodos = useRecoilValue(todoListState);

  return (
    <View>
      <Header title="today" hasButton={false} />
      <TodoList todos={storedTodos} />
    </View>
  );
};

export default Home;
