import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import useNavigator from '../../hooks/useNavigator';
import SvgIcons from '../SvgIcons';

export default function PlayVideoHeader() {
  const stackNavigation = useNavigator();
  return (
    <Pressable
      style={styles.buttonStyle}
      onPress={() => {
        stackNavigation.goBack();
      }}>
      <SvgIcons.BackIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 20,
  },
});
