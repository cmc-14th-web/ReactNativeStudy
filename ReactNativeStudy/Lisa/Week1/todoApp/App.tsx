import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
        <div />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
