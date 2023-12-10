import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SearchScreen" component={View} />
      <Stack.Screen name="DetailVideoScreen" component={View} />
    </Stack.Navigator>
  );
}
