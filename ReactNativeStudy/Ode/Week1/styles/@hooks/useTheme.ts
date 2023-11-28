import { createContext, useContext } from "react";
import Colors, { ColorCodes } from "../colors";

export const baseTheme = {
  backgroundColor: Colors.backgroundColor,
  color: Colors.orange,
};

type ThemeContextType = {
  theme: {
    backgroundColor: string;
    color: string;
  };
  toggleTheme: (color: ColorCodes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: baseTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
