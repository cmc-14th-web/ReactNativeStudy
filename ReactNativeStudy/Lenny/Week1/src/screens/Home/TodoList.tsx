import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import IncompleteTodo from '../../assets/icons/incomplete-todo.svg';
import CompleteTodo from '../../assets/icons/complete-todo.svg';
import Delete from '../../assets/icons/delete.svg';
import {useStore} from '../../store/store';
import colors from '../../styles/color';
import {TodoProps} from '../../types/Home/Home';

import * as Style from '../../styles/Home/TodoList.style';

export default function TodoList(props: TodoProps) {
  const [isDone, setIsDone] = useState<boolean>(props.isDone);
  const {color} = useStore();
  return (
    <Style.Container isDone={isDone} color={color}>
      <Style.Wrap>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsDone(!isDone)}>
          {isDone ? (
            <CompleteTodo width={24} height={24} color={colors.white} />
          ) : (
            <IncompleteTodo width={24} height={24} color={color} />
          )}
        </TouchableOpacity>
        <Style.Text isDone={isDone}>{props.todo}</Style.Text>
      </Style.Wrap>
      <TouchableOpacity activeOpacity={0.5}>
        <Delete width={24} height={24} color={isDone ? colors.white : color} />
      </TouchableOpacity>
    </Style.Container>
  );
}
