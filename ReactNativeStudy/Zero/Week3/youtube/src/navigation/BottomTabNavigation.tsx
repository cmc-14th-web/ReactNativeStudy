import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Setting from "../screen/Setting";
import { Icon } from "../component/Icon";
import { COLOR } from "../constant/color";
import HomeStackNavigation from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

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
                        <Icon id="Home" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon id="Theme" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
