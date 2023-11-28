import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {Text} from 'react-native';
import BackArrow from '../assets/arrow-back.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Stack = createStackNavigator();

const AddStackNavigation = () => {
  const mainColor = useSelector((state: RootState) => {
    return state.color.mainColor;
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Add"
        component={Home}
        options={{
          title: '할일을 추가해주세요!',
          headerStyle: {
            backgroundColor: 'var(--Gray, #F5F5F5)',
          },
          headerTintColor: mainColor,
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 16,
          },
          headerShadowVisible: false,
          headerLeft: () => <BackArrow color={mainColor} style={{marginLeft: 20}}/>,
          headerRight: () => (
            <Text style={{marginRight: 20, color: mainColor}}> 완료 </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AddStackNavigation;
