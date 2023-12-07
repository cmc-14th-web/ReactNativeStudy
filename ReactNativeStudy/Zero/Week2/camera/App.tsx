/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';
import EmptyGalleryTemplates from './src/component/templates/EmptyGalleryTemplate';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import usePermissions from './src/hooks/usePermissions';

function App(): JSX.Element {
  useEffect(() => {
    usePermissions();
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default App;
