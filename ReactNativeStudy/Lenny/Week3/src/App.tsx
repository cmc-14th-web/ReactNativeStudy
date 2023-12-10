import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Navigator from './navigators/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
