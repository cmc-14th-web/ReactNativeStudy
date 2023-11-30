/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { RecoilRoot } from 'recoil';
import Routing from './src/utility/Routing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './src/navigation/StackNavigation';

function App(): JSX.Element {

  return (
    <RecoilRoot>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
