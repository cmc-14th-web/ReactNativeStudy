import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './navigator/Navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
