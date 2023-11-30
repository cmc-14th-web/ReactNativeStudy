import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSetRecoilState} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import WriteScreen from '../screens/write';
import SettingScreen from '../screens/setting';
import BottomNavBar from '../../components/bottom-navbar';
import {colorState} from '../../recoil/atom/colorState';
import {ColorType} from '../../../types/color';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const setColor = useSetRecoilState(colorState);
  useEffect(() => {
    const getColorFromStorage = async () => {
      try {
        //asyncStorage에서 색 꺼내서 미리 recoil update
        const storedColor = await AsyncStorage.getItem('color');
        if (storedColor) {
          setColor(storedColor as ColorType);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getColorFromStorage();
  }, [setColor]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 60,
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
        }}
        initialRouteName={'BottomNavBar'}>
        <Stack.Screen
          name="BottomNavBar"
          component={BottomNavBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Write" component={WriteScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
