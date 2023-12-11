import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../constants/color';

const Container = ({children}: {children: ReactElement | ReactElement[]}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey900,
  },
});

export default Container;
