import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../styles/colors';
import SearchButton from '../features/search/components/SearchButton';
import SvgIcon from '../components/common/SvgIcon';
import commonHeaderScreenOptions from '../styles/commonHeaderScreenOptions';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          ...commonHeaderScreenOptions,
          headerRight: SearchButton,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          tabBarActiveTintColor: Colors.Red,
          tabBarStyle: {
            borderTopColor: Colors.Black,
            backgroundColor: Colors.Black,
          },
        }}>
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Youtube',
            tabBarLabel: '홈',
            tabBarIcon: HomeSvgIcon,
          }}
        />
        <BottomTab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTitle: '설정',
            tabBarLabel: '설정',
            tabBarIcon: SettingSvgIcon,
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

function HomeSvgIcon({size, color}: EachSvgIconProps) {
  return <SvgIcon icon="Home" configs={{fill: color, size}} />;
}

function SettingSvgIcon({size, color}: EachSvgIconProps) {
  return <SvgIcon icon="Setting" configs={{fill: color, size}} />;
}

type EachSvgIconProps = {
  // focused: boolean;
  color: string;
  size: number;
};
