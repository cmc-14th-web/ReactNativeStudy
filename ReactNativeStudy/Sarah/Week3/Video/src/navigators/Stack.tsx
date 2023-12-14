import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './Tab';
import Search from '../screens/Search';
import Video from '../screens/Video';
import SearchHeader from '../components/Search/SearchHeader';
import {StackParamList} from '../types';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: () => <SearchHeader />,
        }}
      />
      <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
