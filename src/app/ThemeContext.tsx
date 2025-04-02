"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: string;
    shadow: string;
    shadowHover: string;
  }

  interface PaletteOptions {
    tertiary?: string;
    shadow?: string;
    shadowHover?: string;
  }
}

const themes = {
  default: createTheme({
    palette: {
      mode: "dark",
      background: { default: "#191414" },
      text: { primary: "#FFFFFF", secondary: "#B3B3B3" },
      tertiary: "#1DB954", 
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      shadowHover: "0px 6px 14px rgba(0, 0, 0, 0.7)",
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
      background: { default: "#FFFFFF" },
      text: { primary: "#000000", secondary: "#555555" },
      tertiary: "#ff4081",
      shadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
      shadowHover: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      background: { default: "#121212" },
      text: { primary: "#FFFFFF", secondary: "#888888" },
      tertiary: "#03DAC6",
      shadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
      shadowHover: "0px 6px 18px rgba(255, 255, 255, 0.2)",
    },
  }),
  cyberpunk: createTheme({
    palette: {
      mode: "dark",
      background: { default: "#0f0c29" },
      text: { primary: "#ff00ff", secondary: "#00ffff" },
      tertiary: "#ffcc00",
      shadow: "0px 4px 16px rgba(255, 0, 255, 0.5)",
      shadowHover: "0px 6px 22px rgba(255, 0, 255, 0.7)",
    },
  }),
  professional: createTheme({
    palette: {
      mode: "dark",
      background: { default: "#1E1E1E" },
      text: { primary: "#D4D4D4", secondary: "#A0A0A0" },
      tertiary: "#007ACC",
      shadow: "0px 4px 14px rgba(0, 0, 0, 0.4)",
      shadowHover: "0px 6px 20px rgba(0, 0, 0, 0.6)",
    },
  }),
  
};

export default themes;

  

type ThemeKey = keyof typeof themes;

const ThemeContext = createContext<{
  theme: ThemeKey;
  themes: typeof themes;
  setTheme: React.Dispatch<React.SetStateAction<ThemeKey>>;
}>({
  theme: "default",
  themes,
  setTheme: () => {}, 
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeKey>("default"); 

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme }}>
      <MuiThemeProvider theme={themes[theme]}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
