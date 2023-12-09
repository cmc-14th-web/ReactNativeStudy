import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DetailImage from '../components/DetailImage';
import {StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import BackButton from '../components/button/BackButton';
import {useStore} from '../store/store';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const {savedDate} = useStore();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailImage"
        component={DetailImage}
        options={{
          headerShown: true,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: savedDate,
          headerLeft: BackButton,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.darkGray,
  },
  headerTitleStyle: {
    fontSize: 24,
    color: colors.gradient,
  },
});
