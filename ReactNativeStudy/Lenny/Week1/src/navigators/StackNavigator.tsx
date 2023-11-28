import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import AddTodo from '../screens/AddTodo/AddTodo';
import {StackMenu} from '../constants/app/menu';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={StackMenu.AddTodo} component={AddTodo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
