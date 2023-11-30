import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {useRecoilState} from 'recoil';

import ArrowIcon from '../../../assets/icon/arrow';
import {palette} from '../../../lib/styles/color-palette';
import {colorState} from '../../../recoil/atom/colorState';
import {todoState} from '../../../recoil/atom/todoState';
import {IToDo} from '../../../../types/todo';

function WriteScreen({navigation}) {
  const [input, setInput] = useState<string>('');
  const [color] = useRecoilState(colorState);

  const [todo, setToDo] = useRecoilState<IToDo[]>(todoState);

  // 완료 버튼 눌렀을 때
  const makeToDo = () => {
    // 일정 생성하기
    const newToDo = [...todo, {isChecked: false, text: input, id: todo.length}];
    setToDo(newToDo);

    Alert.alert(
      '확인',
      '할일이 추가되었습니다.',
      [
        {
          text: '확인',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
    setInput('');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowIcon color={color} />
        </TouchableOpacity>
        <Text style={[styles.text, {color: palette[color]}]}>
          할일을 추가해주세요!
        </Text>
        <TouchableOpacity onPress={makeToDo}>
          <Text style={{color: palette[color], marginTop: 5}}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="할일을 작성해주세요"
          style={styles.input}
          value={input}
          onChangeText={text => setInput(text)}
        />
      </View>
    </View>
  );
}
export default WriteScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    alignContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: palette.white,
    marginTop: 19,
    borderRadius: 20,
    paddingLeft: 29,
  },
  inputWrapper: {
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});
