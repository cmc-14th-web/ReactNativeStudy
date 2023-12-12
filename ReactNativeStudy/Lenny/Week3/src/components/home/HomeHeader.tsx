import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import SvgIcons from '../SvgIcons';
import useNavigator from '../../hooks/useNavigator';

export default function HomeHeader() {
  const stackNavigation = useNavigator();
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Youtube</Text>
      <Pressable onPress={() => stackNavigation.navigate('Search')}>
        <SvgIcons.SearchIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});
