import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import SvgIcon from '../components/SvgIcon';
import Colors from '../styles/colors';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  BookmarksScreen: undefined;
};

export default function RootNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Blue.a600,
        tabBarStyle: {paddingBottom: 6},
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeSvgIcon,
        }}
      />
      <BottomTab.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          tabBarLabel: '즐겨찾기',
          tabBarIcon: BookmarksSvgIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}

function HomeSvgIcon({size, color}: EachSvgIconProps) {
  return <SvgIcon icon="Home" configs={{fill: color, size}} />;
}

function BookmarksSvgIcon({size, color}: EachSvgIconProps) {
  return <SvgIcon icon="Star" configs={{fill: color, size}} />;
}

type EachSvgIconProps = {
  // focused: boolean;
  color: string;
  size: number;
};
