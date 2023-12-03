import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabMenu} from '../constants/app/menu';

import colors from '../styles/color';

import Home from '../screens/Home/Home';
import Setting from '../screens/Setting/Setting';

import HomeSvg from '../assets/icons/home.svg';
import SettingSvg from '../assets/icons/setting.svg';
import {useStore} from '../store/store';
import Add from '../assets/icons/add.svg';
import {BottomTabNavigatorProps} from '../types/BottomTabNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Style from '../styles/AddTodo/AddTodo.style';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
  navigation,
}) => {
  const {color} = useStore();
  const {bottom} = useSafeAreaInsets();

  return (
    <>
      <Tab.Navigator
        initialRouteName={BottomTabMenu.Home}
        screenOptions={{
          headerTintColor: color,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: colors.gray},
        }}>
        <Tab.Screen
          name={BottomTabMenu.Home}
          component={Home}
          options={{
            tabBarIcon: HomeSvg,
            tabBarActiveTintColor: color,
            tabBarInactiveTintColor: colors.darkGray,
            tabBarLabelStyle: {fontSize: 12},
            headerTitle: 'Today',
          }}
        />
        <Tab.Screen
          name={BottomTabMenu.Setting}
          component={Setting}
          options={{
            tabBarIcon: SettingSvg,
            tabBarActiveTintColor: color,
            tabBarInactiveTintColor: colors.darkGray,
            tabBarLabelStyle: {fontSize: 12},
          }}
        />
      </Tab.Navigator>
      {/* AddTodo로 이동하는 버튼 */}
      <Style.AddTodoButton
        bottom={bottom}
        onPress={() => navigation.push('AddTodo')}>
        <Add width={50} height={50} color={color} />
      </Style.AddTodoButton>
    </>
  );
};

export default BottomTabNavigator;
