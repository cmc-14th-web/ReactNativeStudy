import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import palette from '../../styles/palette';
import {RootStackParamList, RootTabParamList} from '../../types/type';
import IconFactory from '../IconFactory';

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabsNavigationProps = BottomTabNavigationProp<RootStackParamList>;

const BottomTabNavigation = ({
  navigation,
}: {
  navigation: TabsNavigationProps;
}) => {
  const handleClick = () => navigation.navigate('AddTodo');
  const screenOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTintColor: '#000',
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="AddTodoBtn"
        component={View}
        options={{tabBarButton: () => <AddTodoBtn handleClick={handleClick} />}}
      />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const AddTodoBtn = ({handleClick}: {handleClick: () => void}) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        top: 5,
      }}>
      <IconFactory icon="Add" width={50} height={50} fill={palette.Black} />
    </TouchableOpacity>
  );
};

export default BottomTabNavigation;
