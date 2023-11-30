import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';

import CheckIcon from '../../assets/icon/check';
import EmptyIcon from '../../assets/icon/empty';
import TrashIcon from '../../assets/icon/trash';
import {palette} from '../../lib/styles/color-palette';
import {colorState} from '../../recoil/atom/colorState';
import {ColorType} from '../../../types/color';
import {todoState} from '../../recoil/atom/todoState';

interface ToDoProps {
  isChecked: boolean;
  text: string;
  id: number;
}

function ToDo({isChecked, text, id}: ToDoProps) {
  const color = useRecoilValue<ColorType>(colorState);
  const [todo, setToDo] = useRecoilState(todoState);

  // 할일 trash 눌렀을 때(삭제)
  const deleteToDo = () => {
    // 모달 띄우기
    Alert.alert(
      '확인',
      '정말 삭제하시겠습니까',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => {
            const newToDo = todo.filter(t => t.id !== id);
            setToDo(newToDo);
          },
        },
      ],
      {cancelable: false},
    );
  };

  // 완료 버튼을 눌렀을 때(완료 처리)
  const completeToDo = () => {
    const updateToDo = todo.map(t => {
      if (t.id !== id) {
        return {...t};
      } else {
        return {
          isChecked: !isChecked,
          id: t.id,
          text: t.text,
        };
      }
    });
    setToDo(updateToDo);
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isChecked ? palette[color] : 'white'},
      ]}>
      <View style={styles.wrapper}>
        {isChecked ? (
          <TouchableOpacity onPress={completeToDo}>
            <CheckIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={completeToDo}>
            <EmptyIcon color={color} />
          </TouchableOpacity>
        )}
        <Text style={[styles.label, {color: isChecked ? 'white' : 'black'}]}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={deleteToDo}>
        <TrashIcon color={isChecked ? 'white' : color} />
      </TouchableOpacity>
    </View>
  );
}
export default ToDo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 18,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
  },
});
