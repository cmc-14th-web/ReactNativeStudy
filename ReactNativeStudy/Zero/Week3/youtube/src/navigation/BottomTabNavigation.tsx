import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Setting from "../screen/Setting";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
