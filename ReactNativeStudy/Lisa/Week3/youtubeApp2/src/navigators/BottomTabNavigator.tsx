import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabBarLabel, BottomTabMenu} from 'constants/menu';
import {BottomTabParamList, RoutePropsType} from 'types/navigator';
import {theme} from 'styles/theme';
import Home from 'screens/Home';
import Setting from 'screens/Setting';
import SvgIcons from 'assets/icons/SvgIcons';
import {typoStyles} from 'styles/typo';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? 'red' : 'gray_600';

  return (
    <>
      {routeName === 'Home' && <SvgIcons.HomeIcon fill={iconColor} />}
      {routeName === 'Setting' && <SvgIcons.ThemeIcon fill={iconColor} />}
    </>
  );
};

const screenOptions = ({route}: RoutePropsType) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarActiveTintColor: theme.palette.red,
  tabBarInactiveTintColor: theme.palette.gray_600,
  tabBarStyle: {
    height: 61,
    backgroundColor: theme.palette.gray_900,
    borderTopWidth: 0,
    paddingTop: 6,
    paddingBottom: 6,
  },
  tabBarLabelStyle: {
    fontSize: typoStyles.typo.body_1.fontSize,
    fontWeight: typoStyles.typo.body_1.fontWeight,
    lineHeight: typoStyles.typo.body_1.lineHeight,
  },
  headerStyle: {
    backgroundColor: theme.palette.gray_900,
    height: 74,
  },
  headerTitleStyle: {
    color: theme.palette.white,
    fontSize: typoStyles.typo.heading_1.fontSize,
    fontWeight: typoStyles.typo.heading_1.fontWeight,
    lineHeight: typoStyles.typo.heading_1.lineHeight,
  },
  headerTitleContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginLeft: 0,
  },
  headerRightContainerStyle: {
    paddingHorizontal: 18,
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={BottomTabMenu.Home}
        component={Home}
        options={{
          tabBarLabel: BottomTabBarLabel.Home,
          headerRight: () => <SvgIcons.SearchIcon />,
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name={BottomTabMenu.Setting}
        component={Setting}
        options={{
          tabBarLabel: BottomTabBarLabel.Setting,
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
