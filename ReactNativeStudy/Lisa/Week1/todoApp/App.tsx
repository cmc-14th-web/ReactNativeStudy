import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {KeyOfPalette, theme} from 'styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from 'screens/Home';
import Settings from 'screens/Settings';
import HomeIcon from 'assets/icons/HomeIcon';
import ThemeIcon from 'assets/icons/ThemeIcon';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused}) => {
                const iconColor = focused
                  ? ('orange' as KeyOfPalette)
                  : ('dark_gray' as KeyOfPalette);

                return route.name === 'Today' ? (
                  <HomeIcon fill={iconColor} />
                ) : (
                  route.name === '설정' && <ThemeIcon fill={iconColor} />
                );
              },
              tabBarActiveTintColor: theme.palette.orange,
              tabBarInactiveTintColor: theme.palette.dark_gray,
              tabBarStyle: {
                height: 49,
              },
              tabBarIconStyle: {
                marginTop: 6,
              },
              tabBarLabelStyle: {...theme.typo.body_2, marginBottom: 6},
            })}>
            <Tab.Screen
              name="Today"
              component={Home}
              options={{
                tabBarLabel: '홈',
              }}
            />
            <Tab.Screen
              name="설정"
              component={Settings}
              options={{tabBarLabel: '설정'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
