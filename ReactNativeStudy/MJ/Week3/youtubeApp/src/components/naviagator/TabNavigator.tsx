import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';
import HomeIcon from '../../assets/Home.svg';
import SearchIcon from '../../assets/Search.svg';
import ThemeIcon from '../../assets/Theme.svg';
import {useNavigator} from '../../hooks/useNavigator';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import colorState from '../../store/color';
import palette from '../../styles/palette';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const color = useRecoilValue(colorState);
  const navigator = useNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: palette.Black,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigator.stackNavigation.navigate('VideoSearch')}>
            <SearchIcon />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: palette.Red,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: palette.Black,
        },
      }}>
      <Tab.Screen
        name="Youtube"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: () => (
            <HomeIcon width={28} height={28} color={palette[color]} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: () => (
            <ThemeIcon width={28} height={28} color={palette[color]} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
