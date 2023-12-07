import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailPhotoScreen from '../screens/DetailPhotoScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DetailPhotoScreen" component={DetailPhotoScreen} />
    </Stack.Navigator>
  );
}
