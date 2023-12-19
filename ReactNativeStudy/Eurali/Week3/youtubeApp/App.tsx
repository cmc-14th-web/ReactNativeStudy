/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import HomeStack from './src/navigators/HomeStack';
import colors from './src/constants/color';

const customTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: colors.grey900,
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={customTheme}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
