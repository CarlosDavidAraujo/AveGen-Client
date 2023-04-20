import React from "react";
import { azulmelo } from "../theme/azumelo";

export const ThemeContext = React.createContext(azulmelo);

export function ThemeProvider({ children, theme }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
