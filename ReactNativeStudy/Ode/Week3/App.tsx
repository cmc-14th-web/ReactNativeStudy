import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import AppRegister from './src/AppRegister';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <AppRegister>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppRegister>
  );
}

export default App;
