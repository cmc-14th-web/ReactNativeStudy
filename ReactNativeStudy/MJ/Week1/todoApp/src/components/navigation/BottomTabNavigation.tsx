import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useRecoilValue} from 'recoil';
import useNavigator from '../../hooks/useNavigation';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import colorState from '../../store/color';
import palette from '../../styles/palette';
import {RootTabParamList} from '../../types/type';
import IconFactory from '../IconFactory';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigation = () => {
  const stackNavigation = useNavigator();
  const color = useRecoilValue(colorState);
  const handleClick = () => stackNavigation.navigate('AddTodo');
  const screenOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTintColor: palette[color],
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Today',
          tabBarLabel: '홈',
          tabBarActiveTintColor: palette[color],
          tabBarIcon: ({focused}) => (
            <IconFactory
              icon="Home"
              fill={focused ? palette[color] : palette.DarkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTodoBtn"
        component={View}
        options={{tabBarButton: () => <AddTodoBtn handleClick={handleClick} />}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '설정',
          tabBarLabel: '설정',
          tabBarActiveTintColor: palette[color],
          tabBarIcon: ({focused}) => (
            <IconFactory
              icon="Theme"
              fill={focused ? palette[color] : palette.DarkGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AddTodoBtn = ({handleClick}: {handleClick: () => void}) => {
  const color = useRecoilValue(colorState);
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        top: 5,
      }}>
      <IconFactory icon="Add" width={50} height={50} fill={palette[color]} />
    </TouchableOpacity>
  );
};

export default BottomTabNavigation;
