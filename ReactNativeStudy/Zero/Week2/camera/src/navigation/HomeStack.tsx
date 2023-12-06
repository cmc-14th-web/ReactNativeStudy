import { createStackNavigator } from "@react-navigation/stack";

import { Image } from "../type/image";

import ImageDetail from "../screens/ImageDetail";
import Home from "../screens/Home";

export type HomeStackParamList = {
    Home: undefined;
    ImageDetail: { image: Image };
};

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ImageDetail" component={ImageDetail}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}