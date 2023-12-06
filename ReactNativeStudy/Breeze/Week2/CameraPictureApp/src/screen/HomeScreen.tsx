import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PictureScreen from "./PictureScreen";
import DetailScreen from "./DetailScreen";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Picture">
      <Stack.Screen name="Picture" component={PictureScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
export default HomeScreen;