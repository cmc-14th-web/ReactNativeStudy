import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ThemeProvider from "./styles/ThemeProvider";
import RootNavigator from "./navigators/RootNavigator";



export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
       <RootNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}
