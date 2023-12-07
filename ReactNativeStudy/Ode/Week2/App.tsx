import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {requestPermissions} from './src/utils/requestPermissions';
import RecoilSetting from './src/libraries/recoil';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';

export default function App(): JSX.Element {
  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <RecoilSetting>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </RecoilSetting>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export const Detail = () => (
  <SafeAreaView>
    <View>
      <Text>hi</Text>
    </View>
  </SafeAreaView>
);
