import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackMenu} from 'constants/menu';
import {RootStackParamList} from 'types/navigator';
import BottomTabNavigator from './BottomTabNavigator';
import SearchVideo from 'screens/SearchVideo';
import SearchVideoHeader from 'components/SearchVideo/SearchVideoHeader';

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
      <Stack.Group
        screenOptions={{
          header: () => <SearchVideoHeader />,
        }}>
        <Stack.Screen name={StackMenu.SearchVideo} component={SearchVideo} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
