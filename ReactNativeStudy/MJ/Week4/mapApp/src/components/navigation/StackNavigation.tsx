import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabsNavigation from './BottomTabsNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottonTabsNavigation"
        component={BottomTabsNavigation}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
