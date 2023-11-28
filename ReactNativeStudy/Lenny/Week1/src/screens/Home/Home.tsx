import React from 'react';
import TodoList from './TodoList';

import * as Style from '../../styles/Home/Home.style';
import {useStore} from '../../store/store';
import {Text} from 'react-native';

export default function Home() {
  const {todos} = useStore();

  return (
    // any Type 알아봐야함
    <Style.Container>
      {todos.length === 0 ? (
        <Text>할일이 없습니다.</Text>
      ) : (
        <Style.FlatList
          data={todos}
          renderItem={({item}: any) => {
            return <TodoList todo={item.todo} isDone={item.isDone} />;
          }}
          keyExtractor={(item: any) => item.todo}
        />
      )}
    </Style.Container>
  );
}
