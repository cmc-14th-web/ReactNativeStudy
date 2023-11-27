import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from 'navigator/StackNavigator';
import BottomTabFloatingButton from 'components/atoms/BottomTabFloatingButton';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <StackNavigator />
          <BottomTabFloatingButton />
        </NavigationContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
