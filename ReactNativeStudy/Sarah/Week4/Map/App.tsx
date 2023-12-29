import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigators/Stack';
import usePermission from './src/hooks/usePermission';

const App = () => {
  usePermission();

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
