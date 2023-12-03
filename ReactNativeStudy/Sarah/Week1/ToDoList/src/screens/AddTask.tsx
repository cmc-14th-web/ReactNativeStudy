import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {todoListState} from '../state/todoAtom';
import Header from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParam} from '../navigation/Stack';

type AddTaskProps = NativeStackScreenProps<AppStackParam, 'AddTask'>;

const AddTask = ({navigation}: AddTaskProps) => {
  const [todo, setTodo] = React.useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setTodo(value);
  };

  const saveTodo = () => {
    setTodoList(prevTodoList => [...prevTodoList, todo]);
    setTodo('');
    navigation.navigate('Home');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Header
        title="할일을 추가해주세요!"
        hasButton={true}
        onBackPress={goBack}
        onCompletePress={saveTodo}
      />
      <TextInput
        onChange={handleInput}
        value={todo}
        placeholder="할일을 입력해주세요"
      />
    </View>
  );
};

export default AddTask;
