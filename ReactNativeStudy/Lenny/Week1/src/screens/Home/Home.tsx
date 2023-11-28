import React from 'react';
import TodoList from './TodoList';
import {TodoProps} from '../../types/Home/Home';

import * as Style from '../../styles/Home/Home.style';

export default function Home() {
  const mockTodos: TodoProps[] = [
    {
      todo: '졸리다',
      isDone: false,
    },
    {
      todo: '집 가고 싶다.',
      isDone: false,
    },
    {
      todo: '자고 싶다.',
      isDone: false,
    },
    {
      todo: '졸리다1',
      isDone: false,
    },
    {
      todo: '집 가고 싶다.1',
      isDone: false,
    },
    {
      todo: '자고 싶다.1',
      isDone: false,
    },
    {
      todo: '졸리다2',
      isDone: false,
    },
    {
      todo: '집 가고 싶다.2',
      isDone: false,
    },
    {
      todo: '자고 싶다.2',
      isDone: false,
    },
    {
      todo: '졸리다3',
      isDone: false,
    },
    {
      todo: '집 가고 싶다.3',
      isDone: false,
    },
    {
      todo: '자고 싶다.3',
      isDone: false,
    },
  ];

  return (
    // any Type 알아봐야함
    <Style.Container>
      <Style.FlatList
        data={mockTodos}
        renderItem={({item}: any) => {
          console.log(item);
          return <TodoList todo={item.todo} isDone={item.isDone} />;
        }}
        keyExtractor={(item: any) => item.todo}
      />
    </Style.Container>
  );
}
