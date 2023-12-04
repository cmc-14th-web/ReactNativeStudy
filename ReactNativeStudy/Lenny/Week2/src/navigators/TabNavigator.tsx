import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import {colors} from '../styles/colors';
import {HomeTabIcon, SettingTabIcon} from '../components/TabBarIcon';
import {StyleSheet} from 'react-native';
import AddPhotoButton from '../components/AddPhotoButton';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        initialRouteName="홈"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerShadowVisible: false,
          headerTitleAlign: 'left',
        }}>
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            tabBarIcon: HomeTabIcon,
            headerTitle: 'LANY님의 사진첩',
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="설정"
          component={SettingScreen}
          options={{
            tabBarIcon: SettingTabIcon,
            ...screenOptions,
          }}
        />
      </Tab.Navigator>
      <AddPhotoButton />
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.darkGray,
  },
  headerStyle: {
    backgroundColor: colors.darkGray,
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  screenTabBarLabelStyle: {
    fontSize: 12,
  },
  screenTabBarItemStyle: {
    paddingVertical: 5,
  },
});

const screenOptions = {
  tabBarLabelStyle: styles.screenTabBarLabelStyle,
  tabBarItemStyle: styles.screenTabBarItemStyle,
  tabBarActiveTintColor: colors.gradient,
  headerTintColor: colors.gradient,
};
