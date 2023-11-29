import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import AddTodo from '../screens/AddTodo/AddTodo';
import {StackMenu} from '../constants/app/menu';
import {useStore} from '../store/store';
import BackButton from '../screens/AddTodo/BackButton';
import CompleteButton from '../screens/AddTodo/CompleteButton';
import colors from '../styles/color';
import {RootStackList} from '../types/BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackList>();

const StackNavigator = () => {
  const {color} = useStore();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackMenu.AddTodo}
        component={AddTodo}
        options={{
          headerTitle: '할일을 추가해주세요!',
          headerTitleStyle: {color: color, fontSize: 18},
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: colors.gray},
          headerShadowVisible: false,
          headerLeft: BackButton,
          headerRight: CompleteButton,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
