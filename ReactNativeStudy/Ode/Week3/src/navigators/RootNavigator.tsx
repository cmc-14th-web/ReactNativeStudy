import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import TabNavigator from './TabNavigator';
import Colors from '../styles/colors';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: Colors.Black,
          borderBottomColor: Colors.Black,
        },
        headerTitleStyle: {
          fontSize: 24,
          color: Colors.White,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 18,
        },
        headerShadowVisible: false,
        headerBackgroundContainerStyle: {
          borderColor: Colors.Black,
        },
        headerBackTitleVisible: false,
        headerTintColor: Colors.White,
      }}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={View}
        options={{headerTitle: ''}}
      />
      <Stack.Screen name="DetailVideoScreen" component={View} />
    </Stack.Navigator>
  );
}
