import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackMenu} from 'constants/navigator/menu';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.TabNavigator}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
