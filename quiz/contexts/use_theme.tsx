import React from "react";
import lightTheme from "../theme/app_theme";

export interface ThemeContextType {
  mode?: "light" | "dark";
  palette?: {
    primary?: string;
    secondary?: string;
    background?: string;
    surface?: string;
    error?: string;
  };
}

const ThemeContext = React.createContext({
  theme: {} as ThemeContextType,
  setTheme: (theme: ThemeContextType) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<ThemeContextType>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
