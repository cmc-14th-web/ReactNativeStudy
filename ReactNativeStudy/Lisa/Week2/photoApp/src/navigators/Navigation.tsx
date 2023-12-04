import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {theme} from 'styles';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.palette.gray_900,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
