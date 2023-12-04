import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {colors} from '../styles/colors';

export default function SettingScreen() {
  return (
    <SafeAreaView style={{backgroundColor: colors.darkGray, flex: 1}}>
      <Text>Setting Screen</Text>
    </SafeAreaView>
  );
}
