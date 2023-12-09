import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type/navigator';
import BottomTab from './BottomTab';
import DetailScreen from '../screen/DetailScreen';

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
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
