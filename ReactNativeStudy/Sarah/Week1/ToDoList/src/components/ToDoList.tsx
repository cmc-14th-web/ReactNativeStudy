import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSetRecoilState} from 'recoil';
import Icon_unchecked from '../assets/unchecked.svg';
import Icon_checked from '../assets/icon_checked.svg';
import Icon_delete from '../assets/icon_delete.svg';
import {todoListState} from '../state/todoAtom';
import {doneListState} from '../state/doneAtom';

interface TodoListProps {
  todos: string[];
}

const TodoList = ({todos}: TodoListProps) => {
  const setTodoList = useSetRecoilState(todoListState);
  const setDoneList = useSetRecoilState(doneListState);

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(todos.length).fill(false),
  );

  const handleCheck = (index: number) => {
    setCheckedItems(prevdoneItems => {
      const doneItem = [...prevdoneItems];
      doneItem[index] = !doneItem[index];
      return doneItem;
    });

    setDoneList(prevDoneList => [...prevDoneList, todos[index]]);
  };

  const handleDelete = (index: number) => {
    setTodoList(prevTodoList => {
      const todoItem = [...prevTodoList];
      todoItem.splice(index, 1);
      return todoItem;
    });
  };

  return (
    <View>
      {todos.map((todo, index) => (
        <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleCheck(index)}>
            {checkedItems[index] ? (
              <Icon_checked width="18" height="18" />
            ) : (
              <Icon_unchecked width="18" height="18" />
            )}
          </TouchableOpacity>
          <Text>{todo}</Text>
          <TouchableOpacity onPress={() => handleDelete(index)}>
            <Icon_delete width="18" height="18" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
