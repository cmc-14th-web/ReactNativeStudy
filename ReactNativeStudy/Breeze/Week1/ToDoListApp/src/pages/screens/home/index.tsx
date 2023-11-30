import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {useRecoilValue} from 'recoil';

import ToDo from '../../../components/todo';
import TopBar from '../../../components/topbar';
import {IToDo} from '../../../../types/todo';
import {todoState} from '../../../recoil/atom/todoState';

// 일화 목록 페이지
function HomeScreen() {
  const todo = useRecoilValue<IToDo[]>(todoState);
  return (
    <View>
      <TopBar text="일화목록 페이지" />
      <ScrollView>
        <View style={styles.listWrapper}>
          {todo.length === 0 && <Text>아직 할일이 없습니다.</Text>}
          {todo.length > 0 &&
            todo.map((t: IToDo) => (
              <ToDo
                isChecked={t.isChecked}
                key={t.id}
                text={t.text}
                id={t.id}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  listWrapper: {
    paddingHorizontal: 31,
  },
});
