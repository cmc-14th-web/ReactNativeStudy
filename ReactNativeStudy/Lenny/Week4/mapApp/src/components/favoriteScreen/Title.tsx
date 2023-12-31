import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FavoritesSvg from '../../assets/favorites.svg';
import palette from '../../styles/palette';

export default function Title() {
  return (
    <View style={styles.container}>
      <FavoritesSvg width={30} height={30} />
      <Text style={styles.title}>즐겨찾기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
  },
  title: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 2,
    backgroundColor: palette.White,
  },
});
