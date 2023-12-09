import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraButton from '../components/CameraButton';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <>
      <BottomTab.Navigator screenOptions={{headerTitleAlign: 'left'}}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: '오드님의 사진첩', tabBarLabel: '홈'}}
        />
        <BottomTab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{tabBarLabel: '설정'}}
        />
      </BottomTab.Navigator>
      <CameraButton />
    </>
  );
}
