import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Colors from '../styles/colors';
import Container from '../components/common/Container';
import SearchButton from '../components/common/SearchButton';
import SvgIcon from '../components/common/SvgIcon';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: Colors.Black,
            borderBottomColor: Colors.Black,
          },
          headerTitleStyle: {
            fontSize: 24,
            color: Colors.White,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 18,
          },
          headerShadowVisible: false,
          headerBackgroundContainerStyle: {
            borderColor: Colors.Black,
          },
          headerRight: SearchButton,
          // tabBarIcon: ({focused}: {focused: boolean}) =>
          //   getTabBarIcon(route.name, focused),
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
            tabBarIcon: ({color}) => (
              <SvgIcon icon="Home" configs={{fill: color}} />
            ),
          }}
        />
        <BottomTab.Screen
          name="SettingsScreen"
          component={Hi}
          options={{
            headerTitle: '설정',
            tabBarLabel: '설정',
            tabBarIcon: ({color}) => (
              <SvgIcon icon="Setting" configs={{fill: color}} />
            ),
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
