import React from 'react';
import {SafeAreaView} from 'react-native';
import {useStore} from '../../store/store';
import * as Style from '../../styles/AddTodo/AddTodo.style';

export default function AddTodo() {
  const {todoText, setTodoText} = useStore();
  return (
    <SafeAreaView>
      <Style.Wrap>
        <Style.TextInput
          placeholder="할일을 입력하세요."
          value={todoText}
          onChangeText={e => setTodoText(e)}
        />
      </Style.Wrap>
    </SafeAreaView>
  );
}
