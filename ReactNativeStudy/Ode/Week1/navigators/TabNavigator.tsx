import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import CreateTodoButton from "../components/CreateTodoButton";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import SvgIcon, { SvgLabelType } from "../components/SvgIcon";
import RoutePath from "./routePath";
import { useTheme } from "../styles/@hooks/useTheme";
import Colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
  const { primaryColor } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.backgroundColor,
        },
        headerTintColor: primaryColor,
        tabBarActiveTintColor: primaryColor,
      }}
    >
      <Tab.Screen
        name={RoutePath.HomeScreen}
        component={HomeScreen}
        options={{
          headerTitle: "Today",
          tabBarIcon: ({ focused }) => (
            <SvgIcon label={SvgLabelType.Home} fill={focused ? primaryColor : Colors.darkGray} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateButton"
        component={CannotEnterThisPage}
        options={{ tabBarButton: () => <CreateTodoButton navigation={navigation} /> }}
      />
      <Tab.Screen
        name={RoutePath.SettingScreen}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgIcon label={SvgLabelType.Theme} fill={focused ? primaryColor : Colors.darkGray} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CannotEnterThisPage = () => <View />;
