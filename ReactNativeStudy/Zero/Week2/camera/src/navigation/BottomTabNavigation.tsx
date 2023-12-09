import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLOR } from "../constants/color";

import CustomTabBarButton from "../component/molcule/CustomTabBarButton";
import BottomContextMenu from "../component/molcule/BottomContextMenu";
import HomeStack from "./HomeStack";
import Fake from "../screens/Fake";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLOR.Gray900,
                    height: 60,
                    borderTopWidth: 0.2,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomTabBarButton name="Home" focused={focused} title='홈' />
                    ),
                }}
            />
            <Tab.Screen name="Add" component={Fake}
                options={{
                    tabBarButton: () => (<BottomContextMenu />),
                }}
            />
            <Tab.Screen name="Settings" component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomTabBarButton name="Theme" focused={focused} title='설정' />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;
