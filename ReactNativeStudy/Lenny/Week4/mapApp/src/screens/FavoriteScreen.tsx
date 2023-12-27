import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import palette from '../styles/palette';
import Title from '../components/favoriteScreen/Title';
import FavoriteList from '../components/favoriteScreen/FavoriteList';

export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <FavoriteList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.Blue200,
  },
});
