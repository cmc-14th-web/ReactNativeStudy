import React from "react";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import CreateTodoButton from "../components/CreateTodoButton";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import SvgIcon, { SvgLabelType } from "../components/SvgIcon";
import { useTheme } from "../styles/@hooks/useTheme";
import Colors from "../styles/colors";

type TabNavigatorParamList = {
  HomeScreen: undefined;
  CreateButton: undefined;
  SettingScreen: undefined;
};

type TabsNavigationProps = BottomTabNavigationProp<TabNavigatorParamList>;

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export default function Tabs({ navigation }: { navigation: TabsNavigationProps }) {
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
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          headerTitle: "Today",
          tabBarLabel: "홈",
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
        name={"SettingScreen"}
        component={SettingScreen}
        options={{
          tabBarLabel: "설정",
          tabBarIcon: ({ focused }) => (
            <SvgIcon label={SvgLabelType.Theme} fill={focused ? primaryColor : Colors.darkGray} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CannotEnterThisPage = () => <View />;
