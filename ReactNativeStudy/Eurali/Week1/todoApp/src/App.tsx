import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './navigations/Tab';
import {Provider, useDispatch} from 'react-redux';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colorChange} from './store/colorSlice';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
