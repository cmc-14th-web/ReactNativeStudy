import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabMenu} from '../constants/app/menu';

import colors from '../styles/color';

import Home from '../screens/Home/Home';
import Setting from '../screens/Setting/Setting';

import HomeSvg from '../assets/icons/home.svg';
import SettingSvg from '../assets/icons/setting.svg';
import {useStore} from '../store/store';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Add from '../assets/icons/add.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}: any) => {
  const {color} = useStore();

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
      <TouchableOpacity
        style={styles.addTodoButton}
        onPress={() => navigation.push('AddTodo')}>
        <Add width={50} height={50} color={color} />
      </TouchableOpacity>
    </>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  addTodoButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
});
