import {Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';

import {HomeScreen, SettingScreen} from '../screens';

import Icon from '../assets/Icon';
import {palette} from '../styles/ColorPalette';
import {TabParamList} from '../types/navigator';
import {TabType} from '../types/image';
import useNavigator from '../hooks/useNavigator';

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const type: TabType = {
    Home: {
      icon: 'Home',
      iconColor: focused ? palette.red : palette.gray[600],
    },
    Setting: {
      icon: 'Theme',
      iconColor: focused ? palette.red : palette.gray[600],
    },
  };
  return (
    <>
      <Icon fill={type[routeName].iconColor} icon={type[routeName].icon} />
    </>
  );
};

function TabNavigator() {
  const {stackNavigation} = useNavigator();
  // 검색 페이지로 이동
  const handleMoveSearch = () => {
    stackNavigation.navigate('Search');
  };

  return (
    <Tab.Navigator
      screenOptions={({route}: {route: RouteProp<ParamListBase, string>}) => ({
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}: {focused: boolean}) =>
          getTabBarIcon(route.name, focused),
        tabBarIconStyle: styles.tabBarIcon,
        tabBarInactiveTintColor: palette.gray[600],
        tabBarActiveTintColor: palette.red,
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: {
          backgroundColor: palette.gray[900],
        },
        headerTitleStyle: {
          color: palette.white,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          headerTitle: 'YouTube',
          headerRight: () => (
            <Pressable style={{marginRight: 10}} onPress={handleMoveSearch}>
              <Icon icon="Search" fill={palette.white} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '설정',
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    elevation: 5,
    paddingHorizontal: 11,
    backgroundColor: palette.gray[900],
  },
  tabBarIcon: {
    justifyContent: 'space-between',
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: -12,
    marginBottom: 10,
  },
});
