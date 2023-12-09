import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {palette} from '../styles/ColorPalette';
import StackNavigator from './StackNavigator';

function Navigation() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: palette.gray[900],
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default Navigation;
