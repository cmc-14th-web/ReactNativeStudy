import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {tabBarLabel, tabMenu} from '../constants/navigatorMenu';
import {BottomTabParamList, BottomTabScreenName} from '../models/navigator';
import {typoStyles} from '../styles';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import SvgIcons from '../components/SvgIcons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconVariant = routeName === 'Home' ? 'Home' : 'Star';
  const iconColor = focused ? 'blue_600' : 'gray_600';

  return <SvgIcons iconVariant={iconVariant} fill={iconColor} />;
};

const tabStyles = {
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
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<BottomTabParamList, BottomTabScreenName>;
}) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  headerShown: false,
  headerShadowVisible: false,
  ...tabStyles,
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
