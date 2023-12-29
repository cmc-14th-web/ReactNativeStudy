import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Bookmark from "../page/Bookmark";
import MapWebView from "../page/MapWebView";
import { COLOR } from "../constant/color";
import { Icon } from "../component/Icon";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLOR.Blue600,
                tabBarInactiveTintColor: COLOR.Gray600,
            }}
        >
            <Tab.Screen name="Map" component={MapWebView}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color }) => (
                        <Icon type="Home" fill={color} width={28} height={28} />
                    ),
                }}
            />
            <Tab.Screen name="Bookmark" component={Bookmark}
                options={{
                    tabBarLabel: '즐겨찾기',
                    tabBarIcon: ({ color }) => (
                        <Icon type="Star" fill={color} width={28} height={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation;
