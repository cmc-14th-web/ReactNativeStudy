import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackMenu} from 'constants/menu';
import BottomTabNavigator from './BottomTabNavigator';
import {RootStackParamList} from 'types/navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
