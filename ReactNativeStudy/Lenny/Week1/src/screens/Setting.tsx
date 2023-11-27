import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Setting() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Setting Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
