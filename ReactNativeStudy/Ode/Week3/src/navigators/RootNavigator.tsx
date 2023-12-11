import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import TabNavigator from './TabNavigator';
import commonHeaderScreenOptions from '../styles/commonHeaderScreenOptions';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={commonHeaderScreenOptions}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={View}
        options={{headerTitle: ''}}
      />
      <Stack.Screen name="DetailVideoScreen" component={View} />
    </Stack.Navigator>
  );
}
