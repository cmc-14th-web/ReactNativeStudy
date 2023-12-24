import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AppRegister from './src/AppRegister';

export default function App(): React.JSX.Element {
  return (
    <AppRegister>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppRegister>
  );
}
