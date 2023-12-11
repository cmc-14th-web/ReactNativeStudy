import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcons from '../assets/icons/SvgIcons';
import {TouchableOpacity, View} from 'react-native';
import colors from '../constants/color';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const SearchIcon = ({onPress}: {onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <SvgIcons.SearchIcon />
  </TouchableOpacity>
);

const TabNavigation = ({navigation}: {navigation: any}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.grey600,
        tabBarStyle: {
          backgroundColor: colors.grey900,
          borderTopColor: colors.grey900,
        },
        headerStyle: {
          backgroundColor: colors.grey900,
        },
        headerTintColor: colors.white,
        headerShadowVisible: false,
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          title: 'Youtube',
          tabBarIcon: ({focused}) => <SvgIcons.HomeIcon focused={focused}/>,
          headerRight: () => (
            <SearchIcon onPress={() => navigation.navigate('Search')} />
          ),
        }}
      />
      <Tab.Screen
        name="설정"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <SvgIcons.SettingIcon focused={focused}/>,
        }}
      />
    </Tab.Navigator>
  );
};

const Setting = () => {
  return <View />;
};

export default TabNavigation;
