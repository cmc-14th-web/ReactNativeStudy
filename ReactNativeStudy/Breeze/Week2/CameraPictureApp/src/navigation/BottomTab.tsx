import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../screen/SettingScreen';
import Icon from '../components/Icon';
import AddPictureScreen from '../screen/AddPictureScreen';
import {palette} from '../styles/ColorPalette';
import HomeScreen from '../screen/HomeScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarInactiveTintColor: palette.gray[400],
        tabBarActiveTintColor: palette.purple,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          headerTitle: 'CMC 사진첩',
          headerTitleStyle: {
            color: palette.purple,
          },
          headerStyle: {
            backgroundColor: palette.gray[900],
          },
          tabBarIcon: ({focused}) => (
            <Icon
              fill={focused ? palette.purple : palette.gray[400]}
              icon="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Picture"
        component={AddPictureScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              fill={focused ? palette.purple : palette.gray[400]}
              width={60}
              height={60}
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
          title: '설정',
          tabBarIcon: ({focused}) => (
            <Icon
              fill={focused ? palette.purple : palette.gray[400]}
              icon="Theme"
            />
          ),
          headerStyle: {
            backgroundColor: palette.gray[900],
          },
          headerTitleStyle: {
            color: palette.purple,
          },
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
