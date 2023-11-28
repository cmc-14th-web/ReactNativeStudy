import {theme} from 'styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRecoilValue} from 'recoil';

import HomeIcon from 'assets/icons/HomeIcon';
import ThemeIcon from 'assets/icons/ThemeIcon';
import Home from 'screens/Home';
import Settings from 'screens/Settings';
import {colorState} from 'libs/store/color';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorData = useRecoilValue(colorState);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const iconColor = focused ? colorData.color : 'dark_gray';

          return route.name === 'Home' ? (
            <HomeIcon fill={iconColor} />
          ) : (
            route.name === 'Settings' && <ThemeIcon fill={iconColor} />
          );
        },
        tabBarActiveTintColor: theme.palette[colorData.color],
        tabBarInactiveTintColor: theme.palette.dark_gray,
        tabBarStyle: {
          height: 61,
          paddingTop: 10.5,
          paddingBottom: 10.5,
        },
        headerStyle: {
          backgroundColor: theme.palette.gray,
          height: 48,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.palette[colorData.color],
        headerTitleStyle: {
          fontFamily: 'Pretendard',
          fontSize: 18,
          lineHeight: 25.2,
          color: theme.palette[colorData.color],
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Today',
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: '설정', tabBarLabel: '설정'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
