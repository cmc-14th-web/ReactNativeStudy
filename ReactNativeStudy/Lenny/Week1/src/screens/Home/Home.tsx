import React from 'react';
import TodoList from './TodoList';

import * as Style from '../../styles/Home/Home.style';
import {useStore} from '../../store/store';
import {FlatList, StyleSheet, Text} from 'react-native';
import {TodoProps} from '../../types/Home/Home';

export default function Home() {
  const {todos} = useStore();

  return (
    <Style.Container>
      {todos.length === 0 ? (
        <Text>할일이 없습니다.</Text>
      ) : (
        <FlatList<TodoProps>
          style={styles.flatList}
          data={todos}
          renderItem={({item}: {item: TodoProps}) => (
            <TodoList todo={item.todo} isDone={item.isDone} />
          )}
          keyExtractor={item => item.todo}
        />
      )}
    </Style.Container>
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    paddingHorizontal: 32,
  },
});
