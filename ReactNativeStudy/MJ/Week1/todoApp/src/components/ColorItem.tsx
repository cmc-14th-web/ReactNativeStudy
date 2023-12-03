import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {themeType} from '../screens/Setting';
import palette from '../styles/palette';

interface ColorItemProps {
  color: themeType;
  handlePressColor: (color: themeType) => void;
}

const ColorItem = ({color, handlePressColor}: ColorItemProps) => {
  return (
    <TouchableOpacity
      key={color}
      onPress={() => handlePressColor(color)}
      style={{
        ...styles.PaletteItem,
        backgroundColor: palette[color],
      }}
    />
  );
};
const styles = StyleSheet.create({
  PaletteItem: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

export default ColorItem;
