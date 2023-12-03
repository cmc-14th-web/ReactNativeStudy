import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon_home from '../assets/Icon_home.svg';
import Icon_add from '../assets/icon_add.svg';
import Icon_setting from '../assets/icon_setting.svg';
import {useTheme} from 'styled-components/native';

import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import Setting from '../screens/Setting';

export type AppStackParam = {
  Home: undefined;
  AddTask: undefined;
  Setting: undefined;
};

const Tabs = createBottomTabNavigator<AppStackParam>();

const TabNavigation = () => {
  const theme = useTheme();
  const selectedTheme = theme.selectedTheme;

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: selectedTheme,
        tabBarInactiveTintColor: theme.colors.darkGray,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => <Icon_home fill={selectedTheme} width="16" />,
          tabBarLabel: '홈',
        }}
      />
      <Tabs.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: ({}) => <Icon_add fill={selectedTheme} width="36" />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({}) => <Icon_setting fill={selectedTheme} width="16" />,
          tabBarLabel: '설정',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
