import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import SvgIcons from 'assets/icons/SvgIcons';
import AddPhotoButton from 'components/atoms/AddPhotoButton';
import {TabMenu} from 'constants/navigator/menu';
import {TabBarLabel, TabTitle} from 'constants/navigator/title';
import EmptyPage from 'screens/EmptyPage';
import Home from 'screens/Home';
import Settings from 'screens/Settings';
import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const getTabBarIcon = (routeName: string, focused: boolean) => {
    const iconColor = focused ? 'pink' : 'gray_400';

    return (
      <>
        {routeName === 'Home' && <SvgIcons.HomeIcon fill={iconColor} />}
        {routeName === 'Settings' && <SvgIcons.SettingIcon fill={iconColor} />}
      </>
    );
  };

  const screenOptions = ({
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  }) => ({
    tabBarIcon: ({focused}: {focused: boolean}) =>
      getTabBarIcon(route.name, focused),
    tabBarActiveTintColor: theme.palette.pink,
    tabBarInactiveTintColor: theme.palette.gray_400,
    tabBarStyle: {
      display:
        route.name === 'AddPhoto' ? ('none' as const) : ('flex' as const),
      height: 49,
      paddingTop: 6,
      paddingBottom: 6,
      backgroundColor: theme.palette.gray_900,
      borderTopWidth: 1,
      borderTopColor: theme.palette.gray_600,
    },
    headerStyle: {
      backgroundColor: theme.palette.gray_900,
      height: 74,
      borderBottomColor: theme.palette.gray_900,
    },
    headerTitleStyle: {
      fontSize: typoStyles.typo.heading.fontSize,
      lineHeight: typoStyles.typo.heading.lineHeight,
      color: theme.palette.pink,
    },
    headerTitleContainerStyle: {
      paddingVertical: 20,
      paddingHorizontal: 18,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={TabMenu.Home}
        component={Home}
        options={{
          title: TabTitle.Home,
          tabBarLabel: TabBarLabel.Home,
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name={TabMenu.AddPhoto}
        component={EmptyPage}
        options={{
          title: TabTitle.AddPhoto,
          headerShadowVisible: false,
          tabBarButton: () => <AddPhotoButton />,
        }}
      />
      <Tab.Screen
        name={TabMenu.Settings}
        component={Settings}
        options={{
          title: TabTitle.Settings,
          tabBarLabel: TabBarLabel.Settings,
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
