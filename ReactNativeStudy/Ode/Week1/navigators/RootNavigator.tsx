import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import Tabs from "./TabNavigator";
import Colors from "../styles/colors";
import { useTheme } from "../styles/@hooks/useTheme";

export type RootStackParamList = {
  MainTab: { screen: "HomeScreen" | "CreateButton" | "SettingScreen" };
  CreateTodoScreen: undefined;
};

export type RootNavigatorNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { primaryColor } = useTheme();

  return (
    <RootStack.Navigator>
      <RootStack.Screen name={"MainTab"} component={Tabs} options={{ headerShown: false }} />
      <RootStack.Screen
        name={"CreateTodoScreen"}
        component={CreateTodoScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundColor,
          },
          headerBackTitleVisible: false,
          headerTintColor: primaryColor,
          title: "할일을 추가해주세요!",
        }}
      />
    </RootStack.Navigator>
  );
}
