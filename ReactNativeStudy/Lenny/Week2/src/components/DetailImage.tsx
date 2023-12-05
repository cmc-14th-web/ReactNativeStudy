import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {deviceWidth} from '../constants/device';

export default function DetailImage({route}: any) {
  const {path} = route.params;
  return (
    <SafeAreaView style={styles.detailImageContainer}>
      <Image source={{uri: path}} width={deviceWidth} height={deviceWidth} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailImageContainer: {
    flex: 1,
    backgroundColor: colors.darkGray,
    justifyContent: 'center',
  },
});
