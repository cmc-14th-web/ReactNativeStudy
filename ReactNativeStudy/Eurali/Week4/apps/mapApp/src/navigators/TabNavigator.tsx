import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabParamList} from '../types/navigators';
import Home from '../screens/Home';
import SvgIcons from '../assets/icons/SvgIcons';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: SvgIcons.HomeIcon,
        }}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={Favorites}
        options={{
          tabBarIcon: SvgIcons.StarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
