import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import colors from '../constants/color';
import SvgIcons from '../assets/icons/SvgIcons';
import {TouchableOpacity} from 'react-native';
import Search from '../screens/Search';
import {useNavigation} from '@react-navigation/core';
import TabNavigation from './Tab';

const Stack = createNativeStackNavigator();

const SearchIcon = ({onPress}: {onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <SvgIcons.SearchIcon />
  </TouchableOpacity>
);

const HomeStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.grey900,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigation} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeStack;
