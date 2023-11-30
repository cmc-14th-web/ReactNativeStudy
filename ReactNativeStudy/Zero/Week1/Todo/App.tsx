/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/pages/Home';
import Setting from './src/pages/Setting';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewTask from './src/pages/NewTask';
import { RecoilRoot } from 'recoil';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="홈" component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="할 일을 추가해주세요" component={NewTask} options={{
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }} />
          <Tab.Screen name="설정" component={Setting} options={{
            headerShown: false,
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
