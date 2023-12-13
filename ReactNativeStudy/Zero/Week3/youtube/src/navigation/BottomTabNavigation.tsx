import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLOR } from "../constant/color";

import { Icon } from "../component/Icon";
import Setting from "../screen/Setting";
import HomeStackNavigation from "./HomeStackNavigation";

export type BottomTabParamList = {
    Home: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLOR.Gray900,
                },
                tabBarActiveTintColor: COLOR.Red,
                tabBarInactiveTintColor: COLOR.DarkGray,
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon type="Home" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon type="Theme" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
