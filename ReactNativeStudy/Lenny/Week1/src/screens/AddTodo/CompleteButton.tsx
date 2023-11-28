import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {useStore} from '../../store/store';
import {useNavigation} from '@react-navigation/native';
import {CompleteText} from '../../styles/AddTodo/CompleteButton.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompleteButton() {
  const {color, todoText, todos, setTodoText, setTodos} = useStore();
  const navigation = useNavigation();

  const Add = async () => {
    if (!todoText) {
      Alert.alert('1글자 이상 입력해주세요.');
      return;
    }
    Alert.alert('할일이 추가되었습니다!');
    setTodos([...todos, {todo: todoText, isDone: false}]);
    setTodoText('');
    await AsyncStorage.setItem(
      'todos',
      JSON.stringify([...todos, {todo: todoText, isDone: false}]),
    );
    navigation.goBack();
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={Add}>
      <CompleteText color={color}>완료</CompleteText>
    </TouchableOpacity>
  );
}
