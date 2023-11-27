import React from 'react';
import Navigator from './src/navigators/Navigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
