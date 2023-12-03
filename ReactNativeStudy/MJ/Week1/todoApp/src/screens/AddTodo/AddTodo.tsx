import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, TextInput} from 'react-native';

import {useRecoilValue, useSetRecoilState} from 'recoil';
import useNavigator from '../../hooks/useNavigation';
import colorState from '../../store/color';
import todoState from '../../store/todo';
import palette from '../../styles/palette';
import {AddTodoHeader} from './Header';

const AddTodo = () => {
  const color = useRecoilValue(colorState);
  const stackNavigation = useNavigator();

  const [text, setText] = useState('');
  const handleChangeText = (newText: string) => {
    setText(newText);
  };

  const setTodo = useSetRecoilState(todoState);
  const handleComplete = () => {
    if (text === '') {
      Alert.alert('할 일을 먼저 입력해주세요.');
      return;
    }
    setTodo(prev => [...prev, {id: prev.length, content: text, done: false}]);
    Alert.alert('할 일이 추가되었습니다.', undefined, [
      {
        text: '확인',
        onPress: () => {
          stackNavigation.navigate('Home');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <AddTodoHeader
        color={color}
        stackNavigation={stackNavigation}
        handleComplete={handleComplete}
      />
      <TextInput
        value={text}
        onChangeText={newText => handleChangeText(newText)}
        placeholder="할 일을 입력해주세요!"
        style={styles.TextInput}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 60,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  TextInput: {
    height: 50,
    paddingLeft: 20,
    backgroundColor: palette.White,
    margin: 20,
    borderRadius: 5,
  },
});

export default AddTodo;
