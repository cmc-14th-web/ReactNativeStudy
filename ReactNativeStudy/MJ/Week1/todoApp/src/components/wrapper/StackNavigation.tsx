import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import {RootStackParamList} from '../../types/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
