import {StackNavigationOptions} from '@react-navigation/stack';
import Colors from './colors';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

const commonHeaderScreenOptions: StackNavigationOptions &
  BottomTabNavigationOptions = {
  headerTitleAlign: 'left',
  headerStyle: {
    backgroundColor: Colors.Black,
    borderBottomColor: Colors.Black,
  },
  headerTitleStyle: {
    fontSize: 24,
    color: Colors.White,
  },
  headerRightContainerStyle: {
    paddingHorizontal: 18,
  },
  headerShadowVisible: false,
  headerBackgroundContainerStyle: {
    borderColor: Colors.Black,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.White,
};

export default commonHeaderScreenOptions;
