import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './components/naviagator/Navigator';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
