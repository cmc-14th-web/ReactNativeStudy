import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Routing from '../utility/Routing';
import NewTask from '../pages/NewTask';

const Stack = createStackNavigator();
const stackNavigationOptions = {
    headerShown: false,
};

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Routing" component={Routing} options={stackNavigationOptions} />
            <Stack.Screen name="할 일을 추가해주세요3" component={NewTask} options={stackNavigationOptions} />
        </Stack.Navigator>
    );
}

export default StackNavigation;
