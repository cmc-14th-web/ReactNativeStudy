import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import palette, {KeyofPalette} from '../styles/palette';
import IconFactory from './IconFactory';

interface TodoItemProps {
  id: number;
  done: boolean;
  content: string;
  color: KeyofPalette;
  handlePressDone: (id: number) => void;
  handlePressDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  done,
  content,
  color,
  handlePressDone,
  handlePressDelete,
}: TodoItemProps) => {
  return (
    <View
      style={{
        ...styles.TodoItem,
        backgroundColor: done ? palette[color] : palette.White,
      }}>
      <TouchableOpacity onPress={() => handlePressDone(id)}>
        <IconFactory
          icon={done ? 'Check' : 'Circle'}
          fill={done ? palette.White : palette[color]}
        />
      </TouchableOpacity>
      <Text
        style={{
          ...styles.TodoContent,
          color: done ? palette.White : palette.Black,
        }}>
        {content}
      </Text>
      <TouchableOpacity onPress={() => handlePressDelete(id)}>
        <IconFactory
          icon="Trash"
          fill={done ? palette.White : palette[color]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TodoItem;
