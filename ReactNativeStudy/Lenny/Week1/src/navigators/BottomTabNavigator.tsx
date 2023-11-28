import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabMenu} from '../constants/app/menu';

import colors from '../styles/color';

import Home from '../screens/Home';
import Setting from '../screens/Setting';

import HomeSvg from '../assets/icons/home.svg';
import SettingSvg from '../assets/icons/setting.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props: any) => {
  // todo : BottomTab에서 +버튼 클릭 시 Stack navigation 활성화
  const currentColor = props.currentColor;

  const PassParam = () => <Setting setCurrentColor={props.setCurrentColor} />;

  return (
    <Tab.Navigator
      initialRouteName={BottomTabMenu.Home}
      screenOptions={{
        headerTintColor: currentColor,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: colors.gray},
      }}>
      <Tab.Screen
        name={BottomTabMenu.Home}
        component={Home}
        options={{
          tabBarIcon: HomeSvg,
          tabBarActiveTintColor: currentColor,
          tabBarInactiveTintColor: colors.darkGray,
        }}
      />
      <Tab.Screen
        name={BottomTabMenu.Setting}
        component={PassParam}
        options={{
          tabBarIcon: SettingSvg,
          tabBarActiveTintColor: currentColor,
          tabBarInactiveTintColor: colors.darkGray,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
