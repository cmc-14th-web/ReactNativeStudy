import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  const mainColor = useSelector((state: RootState) => {
    return state.color.mainColor;
  });
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
          headerTintColor: mainColor,
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
