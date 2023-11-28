import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import AddTodo from '../screens/AddTodo';
import {StackMenu} from '../constants/app/menu';
import colors from '../styles/color';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [currentColor, setCurrentColor] = useState<string>(colors.orange);

  const PassParam = () => (
    <BottomTabNavigator
      currentColor={currentColor}
      setCurrentColor={setCurrentColor}
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.BottomTabNavigator}
        component={PassParam}
        options={{headerShown: false}}
      />
      <Stack.Screen name={StackMenu.AddTodo} component={AddTodo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
