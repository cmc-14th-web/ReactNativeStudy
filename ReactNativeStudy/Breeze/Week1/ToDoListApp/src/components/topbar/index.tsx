import {View, Text, StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';

import {palette} from '../../lib/styles/color-palette';
import {colorState} from '../../recoil/atom/colorState';
import {ColorType} from '../../../types/color';

interface TopBarProp {
  text: string;
}
function TopBar({text}: TopBarProp) {
  const [color] = useRecoilState<ColorType>(colorState);
  return (
    <View style={styles.title}>
      <Text style={[styles.text, {color: palette[color]}]}>{text}</Text>
    </View>
  );
}
export default TopBar;

const styles = StyleSheet.create({
  title: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 7,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 12,
  },
});
