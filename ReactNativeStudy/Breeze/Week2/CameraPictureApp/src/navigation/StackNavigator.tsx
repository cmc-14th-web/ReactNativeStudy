import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type/navigator';
import BottomTab from './BottomTab';
import DetailScreen from '../screen/DetailScreen';
import {palette} from '../styles/ColorPalette';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={'TabNavigator'}>
      <Stack.Screen
        name="TabNavigator"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          title: 'Default Title',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: palette.purple,
          },
          headerStyle: {
            backgroundColor: palette.gray[900],
          },
          headerTintColor: palette.purple,
        })}
      />
    </Stack.Navigator>
  );
}
export default StackNavigator;
