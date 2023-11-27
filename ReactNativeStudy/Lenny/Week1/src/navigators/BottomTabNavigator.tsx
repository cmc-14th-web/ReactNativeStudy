import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {BottomTabMenu} from '../constants/app/menu';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={BottomTabMenu.Home}>
      <Tab.Screen name={BottomTabMenu.Home} component={Home} />
      <Tab.Screen name={BottomTabMenu.Setting} component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
