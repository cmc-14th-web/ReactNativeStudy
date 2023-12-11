import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import colors from '../constants/color';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.grey900,
        },
      }}>
      <Stack.Screen name="Youtube" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
