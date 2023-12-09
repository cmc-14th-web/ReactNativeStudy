import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useRecoilValue} from 'recoil';
import Gallery from '../../screens/Gallery';
import colorState from '../../store/color';
import palette from '../../styles/palette';
import {RootStackParamList} from '../../types/type';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const color = useRecoilValue(colorState);

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTintColor: palette[color],
        headerTransparent: true,
        headerShown: false,
      })}>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
