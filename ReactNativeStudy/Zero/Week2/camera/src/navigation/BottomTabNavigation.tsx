import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Fake from "../screens/Fake";
import Setting from "../screens/Setting";
import { Icon } from "../component/atom/Icon";
import { COLOR, GRADIENT } from "../constants/color";
import CustomTabBarButton from "../component/molcule/CustomTabBarButton";
import { View } from "react-native";

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
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomTabBarButton name="Home" focused={focused} title='홈' />
                    ),
                }}
            />
            <Tab.Screen name="Add" component={Fake}
                options={{
                    tabBarIcon: () => (
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 30,
                            }}
                        >
                            <Icon name="Plus" size={60} fill={GRADIENT.Gradient100} />
                        </View>
                    ),
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
