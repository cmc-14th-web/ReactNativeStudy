import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home';
import Star from '../../screen/Star';
import IconFactory from '../IconFactory';
import palette from '../../utils/palette';
import useColorStore from '../../store/useColor';

const Tabs = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  const color = useColorStore(state => state.color);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarActiveTintColor: palette[color],
          tabBarIcon: ({focused}) => (
            <IconFactory
              icon="Home"
              fill={focused ? palette[color] : palette.Gray600}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Star"
        component={Star}
        options={{
          tabBarLabel: '즐겨찾기',
          tabBarActiveTintColor: palette[color],
          tabBarIcon: ({focused}) => (
            <IconFactory
              icon="Star"
              fill={focused ? palette[color] : palette.Gray600}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabsNavigation;
