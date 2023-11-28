import React, { ReactNode, useState } from "react";
import { ColorCodes } from "./colors";
import { ThemeContext, baseTheme } from "./@hooks/useTheme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(baseTheme);

  const toggleTheme = (color: ColorCodes) => setTheme((prevTheme) => ({ ...prevTheme, color }));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
}
