import React, { ReactNode, useState } from "react";
import Colors, { MainColorCodeKeys } from "./colors";
import { ThemeContext } from "./@hooks/useTheme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<MainColorCodeKeys>("orange");

  const updatePrimaryColor = (color: MainColorCodeKeys) => setPrimaryColor(color);

  return (
    <ThemeContext.Provider value={{ primaryColor: Colors.main[primaryColor], updatePrimaryColor }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
}
