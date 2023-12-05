import React from 'react';
import {SafeAreaView, Image, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export default function DetailImage({route}: any) {
  const {path} = route.params;
  const deviceWidth = Dimensions.get('screen').width;
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
