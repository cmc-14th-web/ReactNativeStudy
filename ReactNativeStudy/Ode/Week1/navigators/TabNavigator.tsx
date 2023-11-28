import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import CreateTodoButton from "../components/CreateTodoButton";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import SvgIcon, { SvgLabelType } from "../components/SvgIcon";
import RoutePath from "./routePath";

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
  navigation;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RoutePath.HomeScreen}
        component={HomeScreen}
        options={{
          headerTitle: "Today",
          tabBarIcon: (props) => <SvgIcon label={SvgLabelType.Home} {...props} />,
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
          headerTitle: "설정",
          tabBarIcon: (props) => <SvgIcon label={SvgLabelType.Theme} {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const CannotEnterThisPage = () => (
  <View>
    <Text>temp</Text>
  </View>
);
