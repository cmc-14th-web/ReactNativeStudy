import { createContext, useContext } from "react";
import Colors, { ColorCodes } from "../colors";

type ThemeContextType = {
  primaryColor: string;
  togglePrimaryColor: (color: ColorCodes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  primaryColor: Colors.orange,
  togglePrimaryColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);
