import React, { ReactNode, useMemo } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RecolSetting from "./recoil";
import { useTheme } from "../styles/@hooks/useTheme";
import ThemeProvider from "../styles/ThemeProvider";

type AppRegisterProps = { children: ReactNode };

export default function AppRegister({ children }: AppRegisterProps) {
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
    <RecolSetting>
      <ThemeProvider>
        <NavigationContainer theme={NavigationTheme}>{children}</NavigationContainer>
      </ThemeProvider>
    </RecolSetting>
  );
}
