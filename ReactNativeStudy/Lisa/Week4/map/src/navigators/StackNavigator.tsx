import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stackMenu} from '../constants/navigatorMenu';
import {StackParamList} from '../types/navigator';
import TabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={stackMenu.BottomTabNavigator}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
