import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import colorState from '../store/color';
import palette, {KeyofPalette} from '../styles/palette';

type themeType = Extract<
  KeyofPalette,
  'Orange' | 'Green' | 'Blue' | 'Purple' | 'Pink'
>;

const Setting = () => {
  const setColor = useSetRecoilState(colorState);
  const handlePressColor = (color: themeType) => {
    setColor(color);
  };

  const theme: themeType[] = ['Orange', 'Green', 'Blue', 'Purple', 'Pink'];

  return (
    <View style={styles.Container}>
      <Text>색상을 선택해주세요</Text>
      <View style={styles.PaletteContainer}>
        {theme.map(color => (
          <TouchableOpacity
            key={color}
            onPress={() => handlePressColor(color)}
            style={{
              ...styles.PaletteItem,
              backgroundColor: palette[color],
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  PaletteContainer: {
    gap: 3,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PaletteItem: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

export default Setting;
