import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stackMenu} from '../constants/navigatorMenu';
import {StackParamList} from '../models/navigator';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={stackMenu.BottomTabNavigator}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
