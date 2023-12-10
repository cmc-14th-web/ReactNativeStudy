import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import {theme} from 'styles/theme';

const globalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.palette.gray_900,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={globalTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
