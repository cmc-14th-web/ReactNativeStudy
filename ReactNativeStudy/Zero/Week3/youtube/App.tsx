/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
} from 'react-native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

function App(): React.JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
