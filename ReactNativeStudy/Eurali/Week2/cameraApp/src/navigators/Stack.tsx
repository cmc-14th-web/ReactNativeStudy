import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './Tab';
import Camera from '../screens/Camera';
import DetailImage from '../screens/DetailImage';
import BackIcon from '../assets/icons/arrow-back.svg';
import {TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import useStore from '../store';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();

  const curImageInfo = useStore(state => state.curImageInfo);
  const setIsHome = useStore(state => state.setIsHome);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavi"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailImage"
        component={DetailImage}
        options={{
          title: curImageInfo?.modificationDate,
          headerStyle: {
            backgroundColor: colors.DeepDarkGrey,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 18,
          },
          headerTintColor: colors.purple,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                setIsHome(true);
                navigation.goBack();
              }}
              style={{marginLeft: 20}}>
              <BackIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
