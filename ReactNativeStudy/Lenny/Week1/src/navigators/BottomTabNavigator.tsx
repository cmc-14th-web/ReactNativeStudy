import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabMenu} from '../constants/app/menu';

import colors from '../styles/color';

import Home from '../screens/Home';
import Setting from '../screens/Setting';

import HomeSvg from '../assets/icons/home.svg';
import SettingSvg from '../assets/icons/setting.svg';
import {useStore} from '../store/store';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}: any) => {
  // todo : BottomTab에서 +버튼 클릭 시 Stack navigation 활성화
  const {color} = useStore();

  return (
    <Tab.Navigator
      initialRouteName={BottomTabMenu.Home}
      screenOptions={{
        headerTintColor: color,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: colors.gray},
      }}>
      <Tab.Screen
        name={BottomTabMenu.Home}
        component={Home}
        options={{
          tabBarIcon: HomeSvg,
          tabBarActiveTintColor: color,
          tabBarInactiveTintColor: colors.darkGray,
        }}
      />
      <Tab.Screen
        name={BottomTabMenu.Setting}
        component={Setting}
        options={{
          tabBarIcon: SettingSvg,
          tabBarActiveTintColor: color,
          tabBarInactiveTintColor: colors.darkGray,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
