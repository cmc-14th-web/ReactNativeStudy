import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {palette} from '../styles/ColorPalette';
import StackNavigator from './StackNavigator';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.gray[900],
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default Navigation;
