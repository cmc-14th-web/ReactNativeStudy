import React, {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        let selectedTheme = await AsyncStorage.getItem('selectedTheme');

        if (!selectedTheme) {
          selectedTheme = theme.palette.orange;
          await AsyncStorage.setItem('selectedTheme', selectedTheme);
        }
        theme.selectedTheme = selectedTheme;
      } catch (error) {
        console.error(error);
      }
    };

    fetchTheme();
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
