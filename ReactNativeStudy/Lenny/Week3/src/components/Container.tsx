import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import palette from '../styles/palette';

export default function Container({children}: {children: React.ReactNode}) {
  return <SafeAreaView style={style.container}>{children}</SafeAreaView>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.Gray900,
  },
});
