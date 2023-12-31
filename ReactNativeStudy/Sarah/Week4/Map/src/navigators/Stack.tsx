import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './Tab';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={TabNavigation} name="Tab" />
    </Stack.Navigator>
  );
};

export default StackNavigation;
