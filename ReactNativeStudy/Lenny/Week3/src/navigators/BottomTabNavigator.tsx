import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="홈">
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
}
