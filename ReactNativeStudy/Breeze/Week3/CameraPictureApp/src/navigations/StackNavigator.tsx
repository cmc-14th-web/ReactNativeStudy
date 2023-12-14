import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailScreen, SearchHomeScreen, SearchScreen} from '../screens';

import {RootStackParamList} from '../types/navigator';
import {palette} from '../styles/ColorPalette';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={'TabNavigator'}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: palette.white,
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchHome"
        component={SearchHomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default StackNavigator;
