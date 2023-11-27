import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/Home';
import Settings from 'screens/Settings';
import HomeIcon from 'assets/icons/HomeIcon';
import ThemeIcon from 'assets/icons/ThemeIcon';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Today"
              component={Home}
              options={{
                tabBarLabel: '홈',
                tabBarIcon: () => <HomeIcon />,
              }}
            />
            <Tab.Screen
              name="설정"
              component={Settings}
              options={{tabBarLabel: '설정', tabBarIcon: () => <ThemeIcon />}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
