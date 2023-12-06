import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import PhotoDetail from 'screens/PhotoDetail';
import {StackMenu} from 'constants/navigator/menu';
import {RootStackParamList} from 'types/navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackMenu.TabNavigator}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={StackMenu.PhotoDetail} component={PhotoDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
