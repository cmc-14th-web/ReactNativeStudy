import { createContext, useContext } from "react";
import Colors, { MainColorCodeKeys } from "../colors";

type ThemeContextType = {
  primaryColor: string;
  updatePrimaryColor: (color: MainColorCodeKeys) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  primaryColor: Colors.main.orange,
  updatePrimaryColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);
