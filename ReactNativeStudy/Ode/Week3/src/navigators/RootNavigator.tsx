import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import TabNavigator from './TabNavigator';
import commonHeaderScreenOptions from '../styles/commonHeaderScreenOptions';
import SearchBar from '../components/SearchBar';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...commonHeaderScreenOptions,
        headerTitleContainerStyle: {
          width: '100%',
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
      }}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: SearchBar,
        }}
      />
      <Stack.Screen name="DetailVideoScreen" component={View} />
    </Stack.Navigator>
  );
}
