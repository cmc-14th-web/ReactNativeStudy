/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/pages/Home';
import Setting from './src/pages/Setting';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="설정" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
