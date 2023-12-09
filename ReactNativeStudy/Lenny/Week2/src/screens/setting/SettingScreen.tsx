import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors, gradientColors} from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useStore} from '../../store/store';
import {ThemeColorType} from '../../types/ThemeColorType';

export default function SettingScreen() {
  const themeColors = [
    {
      color: gradientColors.purple,
      start: gradientColors.purpleStart,
      end: gradientColors.purpleEnd,
    },
    {
      color: gradientColors.green,
      start: gradientColors.greenStart,
      end: gradientColors.greenEnd,
    },
    {
      color: gradientColors.red,
      start: gradientColors.redStart,
      end: gradientColors.redEnd,
    },
  ];
  const {setCurrentColor} = useStore();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.alertText}>색상을 선택해주세요.</Text>
      <View style={styles.selectColorButtonWrap}>
        {themeColors.map((themeColor: ThemeColorType) => (
          <Pressable
            key={`${themeColor.color} wrap`}
            onPress={() =>
              setCurrentColor({
                color: themeColor.color,
                start: themeColor.start,
                end: themeColor.end,
              })
            }>
            <LinearGradient
              colors={[themeColor.start, themeColor.end]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              key={themeColor.color}
              style={styles.selectColorButtonStyle}
            />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    flex: 1,
    paddingHorizontal: 32,
  },
  alertText: {
    paddingVertical: 16,
    fontSize: 18,
    color: colors.lightGray,
  },
  selectColorButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectColorButtonStyle: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});
