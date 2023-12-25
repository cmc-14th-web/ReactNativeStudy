import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';

import {tabBarLabel, tabMenu} from '../constants/navigatorMenu';
import {BottomTabParamList} from '../types/navigator';
import {typoStyles} from '../styles/typo';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import SvgIcons from '../components/SvgIcons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? 'blue_600' : 'gray_600';

  return (
    <>
      {routeName === 'Home' && (
        <SvgIcons iconVariant={'Home'} fill={iconColor} />
      )}
      {routeName === 'Favorite' && (
        <SvgIcons iconVariant={'Star'} fill={iconColor} />
      )}
    </>
  );
};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  headerShown: false,
  headerShadowVisible: false,
  tabBarStyle: {
    height: 61,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  tabBarIconStyle: {
    marginLeft: 1,
  },
  tabBarLabelStyle: {
    fontSize: typoStyles.typo.body_1.fontSize,
    fontWeight: typoStyles.typo.body_1.fontWeight,
    lineHeight: typoStyles.typo.body_1.lineHeight,
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={tabMenu.Home}
        component={Home}
        options={{tabBarLabel: tabBarLabel.Home}}
      />
      <Tab.Screen
        name={tabMenu.Favorite}
        component={Favorite}
        options={{tabBarLabel: tabBarLabel.Favorite}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
