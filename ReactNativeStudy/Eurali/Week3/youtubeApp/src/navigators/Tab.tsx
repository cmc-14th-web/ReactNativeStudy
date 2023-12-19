import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcons from '../assets/icons/SvgIcons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../constants/color';
import Home from '../screens/Home';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, TabParamList} from '../types/navigators';
import Container from '../layout/Container';

const Tab = createBottomTabNavigator<TabParamList>();

type TabNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'TabNavigator'
>;

const SearchIcon = ({onPress}: {onPress: () => void}) => (
  <TouchableOpacity onPress={onPress} style={styles.icon}>
    <SvgIcons.SearchIcon />
  </TouchableOpacity>
);

const TabNavigation = ({navigation}: TabNavigationProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.grey600,
        tabBarStyle: {
          backgroundColor: colors.grey900,
          borderTopColor: colors.grey900,
        },
        headerStyle: {
          backgroundColor: colors.grey900,
        },
        headerTintColor: colors.white,
        headerShadowVisible: false,
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerTitle: 'Youtube',
          tabBarIcon: ({focused}) => <SvgIcons.HomeIcon focused={focused} />,
          headerRight: () => (
            <SearchIcon onPress={() => navigation.navigate('Search')} />
          ),
        }}
      />
      <Tab.Screen
        name="설정"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <SvgIcons.SettingIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Setting = () => {
  return (
    <Container>
      <View />
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: 10,
  },
});

export default TabNavigation;
