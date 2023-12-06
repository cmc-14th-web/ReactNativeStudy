import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import {colors} from '../styles/colors';
import {HomeTabIcon, SettingTabIcon} from '../components/TabBarIcon';
import {StyleSheet} from 'react-native';
import AddImageButton from '../components/AddImageButton';
import GradientText from '../components/GradientText';

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
            headerTitle: Title,
            tabBarLabel: TabBar,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="설정"
          component={SettingScreen}
          options={{
            tabBarIcon: SettingTabIcon,
            headerTitle: Title,
            tabBarLabel: TabBar,
            ...screenOptions,
          }}
        />
      </Tab.Navigator>
      <AddImageButton />
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

const Title = ({children}: {children: string}) => (
  <GradientText
    gradientColors={[colors.gradientStart, colors.gradientEnd]}
    mode={0}
    isHome={null}>
    {children === '홈' ? 'LANY님의 사진첩' : '설정'}
  </GradientText>
);

const TabBar = ({children, focused}: {children: string; focused: boolean}) => (
  <GradientText
    gradientColors={[colors.gradientStart, colors.gradientEnd]}
    mode={1}
    isHome={focused}>
    {children}
  </GradientText>
);
