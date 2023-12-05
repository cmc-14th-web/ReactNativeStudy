import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Fake from "../screens/Fake";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Add" component={Fake} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;
