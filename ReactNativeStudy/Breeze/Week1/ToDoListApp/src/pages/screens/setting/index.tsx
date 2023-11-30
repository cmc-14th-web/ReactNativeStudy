import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSetRecoilState} from 'recoil';

import TopBar from '../../../components/topbar';
import {palette} from '../../../lib/styles/color-palette';
import {colorState} from '../../../recoil/atom/colorState';
import {ColorType} from '../../../../types/color';

function SettingScreen() {
  const array = ['orange', 'green', 'blue', 'purple', 'pink'];
  const setColor = useSetRecoilState(colorState);

  // 컬러 클릭 시
  const handleColorChange = async (select: ColorType) => {
    setColor(select);
    try {
      // recoil에 저장하면서 asyncstorage에도 저장
      await AsyncStorage.setItem('color', select);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TopBar text="설정" />
      <Text style={styles.text}>색상을 선택해주세요</Text>
      <View style={styles.colorWrapper}>
        {array.map(x => (
          <TouchableOpacity
            key={x}
            style={{
              backgroundColor: palette[x],
              width: 30,
              height: 30,
              borderRadius: 100,
            }}
            onPress={() => handleColorChange(x)}
          />
        ))}
      </View>
    </View>
  );
}
export default SettingScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: palette.black,
    marginLeft: 32,
  },
  colorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 20,
    paddingVertical: 16,
    marginTop: 16,
  },
});
