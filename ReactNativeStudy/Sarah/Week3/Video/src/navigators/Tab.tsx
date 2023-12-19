import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import {COLOR} from '../constants/color';
import Icon from '../components/common/SvgIcon';
import SearchButton from '../components/Home/SearchButton';
import {TabParamList} from '../types';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR.RED,
        tabBarInactiveTintColor: COLOR.GRAY_600,
        tabBarStyle: {
          backgroundColor: COLOR.GRAY_900,
          height: 61,
        },
        headerStyle: {
          backgroundColor: COLOR.GRAY_900,
          height: 74,
        },
        headerLeftContainerStyle: {
          paddingLeft: 18,
        },
        headerRightContainerStyle: {
          paddingRight: 18,
        },
        headerLeft: () => <Icon name="logo" size={93} />,
        headerRight: () => <SearchButton />,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({focused}) => (
            <Icon name="home" fill={focused ? 'RED' : 'GRAY_600'} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '설정',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="setting"
              fill={focused ? 'RED' : 'GRAY_600'}
              size={14}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
