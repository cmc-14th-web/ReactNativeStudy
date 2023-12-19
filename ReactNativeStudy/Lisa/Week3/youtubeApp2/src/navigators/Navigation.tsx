import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {theme} from 'styles/theme';
import StackNavigator from './StackNavigator';

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
