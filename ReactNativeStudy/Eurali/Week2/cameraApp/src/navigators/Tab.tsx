import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStack';
import colors from '../styles/colors';
import HomeIcon from '../assets/icons/home.svg';
import SetIcon from '../assets/icons/set.svg';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.DeepDarkGrey,
          borderTopColor: colors.lightGrey,
          zIndex: -1,
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.lightGrey,
      }}>
      <Tab.Screen
        name="홈"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="설정"
        component={Set}
        options={{
          headerShown: false,
          tabBarIcon: () => <SetIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const Set = () => {
  return <View></View>;
};

export default TabNavigation;
