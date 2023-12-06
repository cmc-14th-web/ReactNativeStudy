import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '홈',
          tabBarIcon: ({focused}) => (
            <Icon fill={focused ? 'red' : 'gray'} icon="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Picture"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              fill={focused ? 'red' : 'gray'}
              width={50}
              height={50}
              icon="Add"
            />
          ),
          tabBarLabel: () => null,
          tabBarIconStyle: {marginBottom: 55},
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({focused}) => (
            <Icon fill={focused ? 'red' : 'gray'} icon="Theme" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    elevation: 5,
    paddingHorizontal: 11,
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
