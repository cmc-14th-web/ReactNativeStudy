import { createStackNavigator } from "@react-navigation/stack";

import { COLOR } from "../constant/color";

import Home from "../screen/Home";
import Search from "../screen/Search";
import Detail from "../screen/Detail";

export type HomeStackParamList = {
    HomeStack: undefined;
    SearchStack: undefined;
    DetailStack: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

function HomeStackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLOR.Gray900,
                },
                headerTintColor: COLOR.White,
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeStack" component={Home} />
            <Stack.Screen name="SearchStack" component={Search} />
            <Stack.Screen name="DetailStack" component={Detail}
                options={{
                    headerShown: true,
                    headerTitle: () => null,
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStackNavigation;
