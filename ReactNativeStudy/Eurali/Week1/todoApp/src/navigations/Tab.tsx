import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStack';
import AddStackNavigation from './AddStack';
import SetStackNavigation from './SetStack';
import Home from '../assets/home.svg';
import Add from '../assets/add.svg';
import Set from '../assets/set.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import color from '../constants/color';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const mainColor = useSelector((state: RootState) => {
    return state.color.mainColor;
  });
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: color.inactiveGrey,
      }}>
      <Tab.Screen
        name="홈"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color: tabColor}) => <Home color={tabColor} />,
        }}
      />
      <Tab.Screen
        name="추가"
        component={AddStackNavigation}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: () => <Add color={mainColor} />,
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
          tabBarIcon: ({color: tabColor}) => <Set color={tabColor} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
