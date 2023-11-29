import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useRecoilValue, useSetRecoilState} from 'recoil';
import IconFactory from '../components/IconFactory';
import useNavigator from '../hooks/useNavigation';
import colorState from '../store/color';
import todoState from '../store/todo';
import palette from '../styles/palette';

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
    setTodo(prev => [...prev, {content: text, done: false}]);
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
    <SafeAreaView style={{marginTop: 60}}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => stackNavigation.navigate('Home')}>
          <IconFactory icon="ArrowBack" fill={palette[color]} />
        </TouchableOpacity>
        <View>
          <Text style={{color: palette[color]}}>할 일을 추가해주세요!</Text>
        </View>
        <TouchableOpacity onPress={handleComplete}>
          <Text style={{color: palette[color]}}>완료!</Text>
        </TouchableOpacity>
      </View>
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
