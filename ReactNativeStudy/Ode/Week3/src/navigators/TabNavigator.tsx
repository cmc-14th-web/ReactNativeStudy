import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Colors from '../styles/colors';
import Container from '../components/common/Container';
import SearchButton from '../components/common/SearchButton';
import SvgIcon from '../components/common/SvgIcon';
import commonHeaderScreenOptions from '../styles/commonHeaderScreenOptions';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          ...commonHeaderScreenOptions,
          headerRight: SearchButton,
          tabBarActiveTintColor: Colors.Red,
          tabBarStyle: {
            borderTopColor: Colors.Black,
            backgroundColor: Colors.Black,
          },
        }}>
        <BottomTab.Screen
          name="HomeScreen"
          component={Hi}
          options={{
            headerTitle: 'Youtube',
            tabBarLabel: '홈',
            tabBarIcon: HomeSvgIcon,
          }}
        />
        <BottomTab.Screen
          name="SettingsScreen"
          component={Hi}
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
const Hi = () => {
  return (
    <Container>
      <Text>hi</Text>
    </Container>
  );
};

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
