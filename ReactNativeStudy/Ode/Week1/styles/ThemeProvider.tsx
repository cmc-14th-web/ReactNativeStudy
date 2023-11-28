import React, { ReactNode, useState } from "react";
import Colors, { ColorCodes } from "./colors";
import { ThemeContext } from "./@hooks/useTheme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<ColorCodes>("orange");

  const toggleTheme = (color: ColorCodes) => setPrimaryColor(color);

  return (
    <ThemeContext.Provider
      value={{ primaryColor: Colors[primaryColor], togglePrimaryColor: toggleTheme }}
    >
      <>{children}</>
    </ThemeContext.Provider>
  );
}
