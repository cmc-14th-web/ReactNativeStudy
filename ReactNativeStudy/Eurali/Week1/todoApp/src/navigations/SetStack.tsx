import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Set from '../screens/Set';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Stack = createStackNavigator();

const SetStackNavigation = () => {
  const mainColor = useSelector((state: RootState) => {
    return state.color.mainColor;
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Set}
        options={{
          title: '설정',
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

export default SetStackNavigation;
