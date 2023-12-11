import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Setting from "../screen/Setting";
import { Icon } from "../component/Icon";
import { COLOR } from "../constant/color";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon id="Home" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon id="Theme" width={28} height={28} fill={focused ? COLOR.Red : COLOR.DarkGray} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;