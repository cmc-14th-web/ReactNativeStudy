import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Routing from '../utility/Routing';
import NewTask from '../pages/NewTask';

const Stack = createStackNavigator();
function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Routing" component={Routing} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="할 일을 추가해주세요3" component={NewTask} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default StackNavigation;
