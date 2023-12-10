import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <BottomTab.Navigator screenOptions={{headerTitleAlign: 'left'}}>
        <BottomTab.Screen
          name="HomeScreen"
          component={View}
          options={{headerTitle: 'Youtube', tabBarLabel: '홈'}}
        />
        <BottomTab.Screen
          name="SettingsScreen"
          component={View}
          options={{headerTitle: '설정', tabBarLabel: '설정'}}
        />
      </BottomTab.Navigator>
    </>
  );
}
