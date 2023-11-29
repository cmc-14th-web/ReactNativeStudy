import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import Tabs from "./TabNavigator";

export type RootStackParamList = {
  MainTab: { screen: "HomeScreen" | "CreateButton" | "SettingScreen" };
  CreateTodoScreen: undefined;
};

export type RootNavigatorNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={"MainTab"} component={Tabs} />
      <RootStack.Screen name={"CreateTodoScreen"} component={CreateTodoScreen} />
    </RootStack.Navigator>
  );
}
