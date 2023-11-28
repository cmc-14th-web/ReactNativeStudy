import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function AddTodo() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddTodo Screen</Text>
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
