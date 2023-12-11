import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigators/RootNavigator';
import RecoilSetting from './src/libraries/recoil';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <RecoilSetting>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </RecoilSetting>
    </SafeAreaProvider>
  );
}

export default App;
