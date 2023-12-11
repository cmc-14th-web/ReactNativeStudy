import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SvgIcons from '../assets/icons/SvgIcons';
import {View} from 'react-native';
import colors from '../constants/color';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.grey600,
      }}>
      <Tab.Screen
        name="홈"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => <SvgIcons.HomeIcon focused={focused}/>,
        }}
      />
      <Tab.Screen
        name="설정"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => <SvgIcons.SettingIcon focused={focused}/>,
        }}
      />
    </Tab.Navigator>
  );
};

const Setting = () => {
  return <View />;
};

export default TabNavigation;
