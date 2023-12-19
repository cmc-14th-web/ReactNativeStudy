import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import Navigator from './components/naviagator/Navigator';

const queryClinet = new QueryClient();

const App = () => {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClinet}>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
