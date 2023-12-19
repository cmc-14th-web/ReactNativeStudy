import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import commonHeaderScreenOptions from '../styles/commonHeaderScreenOptions';
import SearchBar from '../features/search/components/SearchBar';
import SearchScreen from '../screens/SearchScreen';
import VideoDetailScreen from '../screens/VideoDetailScreen';
import {RootStackParamList} from './types';

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
      <Stack.Screen name="VideoDetailScreen" component={VideoDetailScreen} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
