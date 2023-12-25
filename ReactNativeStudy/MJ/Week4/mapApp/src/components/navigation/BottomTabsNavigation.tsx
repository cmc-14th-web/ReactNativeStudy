import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../screen/Home';
import Setting from '../../screen/Setting';

const Tabs = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Setting" component={Setting} />
    </Tabs.Navigator>
  );
};

export default BottomTabsNavigation;
