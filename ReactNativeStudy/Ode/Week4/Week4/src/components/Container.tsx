import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type ContainerProps = {
  children?: ReactNode;
};

export default function Container({children}: ContainerProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
