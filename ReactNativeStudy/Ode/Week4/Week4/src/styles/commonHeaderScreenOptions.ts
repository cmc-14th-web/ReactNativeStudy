import {StackNavigationOptions} from '@react-navigation/stack';
import Colors from './colors';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

const commonHeaderScreenOptions: StackNavigationOptions &
  BottomTabNavigationOptions = {
  headerTitleAlign: 'left',
  headerStyle: {
    backgroundColor: Colors.Red,
  },
  headerTitleStyle: {
    fontSize: 24,
    color: Colors.White,
  },

  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTintColor: Colors.White,
};

export default commonHeaderScreenOptions;
