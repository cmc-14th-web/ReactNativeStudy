import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SvgIcons from '../components/SvgIcons';
import TabBarTexts from '../components/TabBarTexts';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: SvgIcons.HomeIcon,
          tabBarLabel: TabBarTexts.HomeText,
          ...tabBarOption,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: SvgIcons.StarIcon,
          tabBarLabel: TabBarTexts.StarText,
          ...tabBarOption,
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarOption = {
  tabBarItemStyle: {paddingVertical: 5},
};
