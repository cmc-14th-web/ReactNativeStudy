import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRecoilValue} from 'recoil';

import HomeScreen from '../../pages/screens/home';
import HomeIcon from '../../assets/icon/home';
import SettingScreen from '../../pages/screens/setting';
import SettingIcon from '../../assets/icon/setting';
import WriteScreen from '../../pages/screens/write';
import PlusIcon from '../../assets/icon/plus';
import {palette} from '../../lib/styles/color-palette';
import {colorState} from '../../recoil/atom/colorState';
import {ColorType} from '../../../types/color';

const Tab = createBottomTabNavigator();

// 아래 하단 nav bar 컴포넌트
function ButtomNavBar() {
  // 컬러 테마 가져오기
  const colorTheme = useRecoilValue<ColorType>(colorState);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarInactiveTintColor: palette.darkGray,
        tabBarActiveTintColor: palette[colorTheme],
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <HomeIcon
              color={color === palette.darkGray ? 'darkGray' : colorTheme}
            />
          ),
        }}
      />
      <Tab.Screen
        name="글쓰기"
        component={WriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <PlusIcon color={colorTheme} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="설정"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <SettingIcon
              color={color === palette.darkGray ? 'darkGray' : colorTheme}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default ButtomNavBar;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
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
