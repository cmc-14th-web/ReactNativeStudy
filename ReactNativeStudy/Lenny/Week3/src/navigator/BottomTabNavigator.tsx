import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import SvgIcons from '../components/SvgIcons';
import TabBarText from '../components/TabBarTexts';
import palette from '../styles/palette';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: palette.Gray900},
      }}>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: SvgIcons.HomeIcon,
          tabBarLabel: TabBarText.HomeText,
          ...tabBarOption,
        }}
      />
      <Tab.Screen
        name="설정"
        component={SettingScreen}
        options={{
          tabBarIcon: SvgIcons.SettingIcon,
          tabBarLabel: TabBarText.SettingText,
          ...tabBarOption,
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarOption = {
  tabBarItemStyle: {paddingVertical: 5},
};
