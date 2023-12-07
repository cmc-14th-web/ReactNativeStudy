import {Pressable, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PictureScreen from './PictureScreen';
import DetailScreen from './DetailScreen';
import Icon from '../components/Icon';
import {palette} from '../styles/ColorPalette';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Picture">
      <Stack.Screen
        name="Picture"
        component={PictureScreen}
        options={{
          title: 'CMC의 사진첩',
          headerTitleStyle: {
            color: palette.purple,
          },
          headerStyle: {
            backgroundColor: palette.gray[900],
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: '2023.10.12',
          headerTitleAlign: 'center',
          headerTitleStyle: {},
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeScreen;
