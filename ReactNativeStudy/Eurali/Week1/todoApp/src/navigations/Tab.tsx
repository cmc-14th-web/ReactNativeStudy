import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStack';
import AddStackNavigation from './AddStack';
import SetStackNavigation from './SetStack';
import Home from '../assets/home.svg';
import Add from '../assets/add.svg';
import Set from '../assets/set.svg';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: '#FF8F50',
        tabBarInactiveTintColor: '#888888',
      }}>
      <Tab.Screen
        name="홈"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Home color={color} />,
        }}
      />
      <Tab.Screen
        name="추가"
        component={AddStackNavigation}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({color, size}) => <Add color={color} />,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tab.Screen
        name="설정"
        component={SetStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Set color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
