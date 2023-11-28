import React, { useMemo } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import ThemeProvider from "./styles/ThemeProvider";
import RootNavigator from "./navigators/RootNavigator";
import { useTheme } from "./styles/@hooks/useTheme";

export default function App() {
  const { primaryColor } = useTheme();

  const NavigationTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: primaryColor,
      },
    };
  }, [primaryColor]);

  return (
    <ThemeProvider>
      <NavigationContainer theme={NavigationTheme}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
