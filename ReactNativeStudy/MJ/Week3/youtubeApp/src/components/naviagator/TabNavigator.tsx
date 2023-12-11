import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from '../../assets/Home.svg';
import ThemeIcon from '../../assets/Theme.svg';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <HomeIcon width={28} height={28} color={'#231314'} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <ThemeIcon width={28} height={28} color={'#231314'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
