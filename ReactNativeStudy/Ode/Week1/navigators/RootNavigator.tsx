import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import Tabs from "./TabNavigator";
import RoutePath from "./routePath";

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={RoutePath.MainTab}
        component={Tabs}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={RoutePath.CreateTodoScreen}
        component={CreateTodoScreen}
        options={{ headerTitle: "할일을 추가해주세요!", headerBackTitleVisible: false }}
      />
    </RootStack.Navigator>
  );
}
