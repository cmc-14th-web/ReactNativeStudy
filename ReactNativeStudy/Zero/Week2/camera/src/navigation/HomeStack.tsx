import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ImageDetail from "../screens/ImageDetail";
import { Image } from "../type/image";

const Stack = createStackNavigator();

// export type HomeStackParamList = {
//     Home: undefined;
//     ImageDetail: { image: Image };
// };

// type ImageDetailScreenProps = StackScreenProps<HomeStackParamList, 'ImageDetail'>;

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