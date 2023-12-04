import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackMenu} from 'constants/navigator/menu';
import TabNavigator from './TabNavigator';
import AddPhoto from 'screens/AddPhoto';
import {TabTitle} from 'constants/navigator/title';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.TabNavigator}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackMenu.AddPhoto}
        component={AddPhoto}
        options={{title: TabTitle.AddPhoto}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
