import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../styles/colors';

type ContainerProps = {
  children?: ReactNode;
};

export default function Container({children}: ContainerProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Black,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
