import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyTodoList = () => {
  return (
    <View style={styles.TodoList}>
      <Text>Todo가 없어요 ㅠ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TodoList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default EmptyTodoList;
