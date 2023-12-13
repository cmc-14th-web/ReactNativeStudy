import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import Navigator from './components/naviagator/Navigator';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
