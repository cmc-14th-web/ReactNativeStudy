import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../constants';
import { useColor } from '../store/colorState';
import Icon from '../components/Icon';
import Home from '../pages/Home';
import NewTask from '../pages/NewTask';
import Setting from '../pages/Setting';

const Tab = createBottomTabNavigator();
function Routing() {
    const selectedColor = useColor().getColorCode();
    return (
        <Tab.Navigator backBehavior="order">
            <Tab.Screen name="홈" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Icon width="28" height="28" type="home" fill={focused ? selectedColor : theme.color.DarkGray} />
                        </View>
                    ),
                    tabBarActiveTintColor: selectedColor,
                    tabBarInactiveTintColor: theme.color.DarkGray,
                }}
            />
            < Tab.Screen name="할 일을 추가해주세요" component={NewTask} options={{
                tabBarStyle: { display: 'flex' },
                headerShown: false,
                tabBarIcon: () => <Icon width="50" height="50" type="add" fill={selectedColor} />,
                tabBarLabel: () => null,
            }} />
            < Tab.Screen name="설정" component={Setting} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Icon width="28" height="28" type="theme" fill={focused ? selectedColor : theme.color.DarkGray} />
                ),
                tabBarActiveTintColor: selectedColor,
                tabBarInactiveTintColor: theme.color.DarkGray,
            }} />
        </Tab.Navigator >
    );
}

export default Routing;
