import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/color';

export default function Setting(props: any) {
  const themeColors: string[] = [
    colors.orange,
    colors.green,
    colors.blue,
    colors.purple,
    colors.pink,
  ];
  const setCurrentColor = props.setCurrentColor;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{paddingHorizontal: 32, paddingVertical: 16, fontSize: 18}}>
        색상을 선택해주세요.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 65.5,
          paddingVertical: 16,
          justifyContent: 'space-between',
        }}>
        {themeColors.map((themeColor: string) => (
          <TouchableOpacity
            onPress={() => setCurrentColor(themeColor)}
            activeOpacity={0.5}
            key={`color-${themeColor}`}
            style={{
              backgroundColor: themeColor,
              width: 30,
              height: 30,
              borderRadius: 99,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});
