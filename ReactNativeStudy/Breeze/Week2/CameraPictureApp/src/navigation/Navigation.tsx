import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import DetailScreen from '../screen/DetailScreen';
import {RootStackParamList} from '../type/rootStack';
import {palette} from '../styles/ColorPalette';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: palette.gray[900],
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName={'BottomTab'}>
        {/*하단 바 컴포넌트*/}
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        {/*사진 디테일 페이지*/}
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
