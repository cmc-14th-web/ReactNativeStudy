import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import colors from '../constants/color';
import SvgIcons from '../assets/icons/SvgIcons';
import {TouchableOpacity} from 'react-native';
import Search from '../screens/Search';
import {useNavigation} from '@react-navigation/core';

const Stack = createNativeStackNavigator();

const SearchIcon = ({onPress}: {onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <SvgIcons.SearchIcon />
  </TouchableOpacity>
);

const HomeStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.grey900,
        },
      }}>
      <Stack.Screen
        name="Youtube"
        component={Home}
        options={{
          headerRight: () => (
            <SearchIcon onPress={() => navigation.navigate('Search')} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
