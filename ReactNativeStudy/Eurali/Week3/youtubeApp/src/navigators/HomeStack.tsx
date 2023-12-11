import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../constants/color';
import Search from '../screens/Search';
import TabNavigation from './Tab';

const Stack = createNativeStackNavigator();

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
