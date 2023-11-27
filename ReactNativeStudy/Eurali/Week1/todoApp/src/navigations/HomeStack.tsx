import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Today',
          headerStyle: {
            backgroundColor: 'var(--Gray, #F5F5F5)',
          },
          headerTintColor: '#FF8F50',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
