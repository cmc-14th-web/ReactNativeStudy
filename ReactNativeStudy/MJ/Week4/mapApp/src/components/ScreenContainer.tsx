import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface ScreenContainer {
  children: ReactNode;
}

const ScreenContainer = ({children}: ScreenContainer) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
