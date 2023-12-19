import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import VideoSearch from '../../screens/VideoSearch';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabNavigator" component={TabNavigator} />
      <Stack.Screen name="VideoSearch" component={VideoSearch} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
