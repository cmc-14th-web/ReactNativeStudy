import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';

export default function SettingScreen() {
  return (
    <Container>
      <View style={styles.wrapStyle}>
        <Text style={styles.fontStyle}>준비 중 입니다.</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    color: 'white',
    fontSize: 24,
  },
});
