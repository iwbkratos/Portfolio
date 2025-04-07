"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: string;
    link:string;
    shadow: string;
    shadowHover: string;
    fontFamily:string;
  }

  interface PaletteOptions {
    tertiary?: string;
    link?:string;
    shadow?: string;
    shadowHover?: string;
    fontFamily:string;
  }
}

const themes = {


  dark: createTheme({
    palette: {
      mode: "dark",
      background: { default: "#121212" },
      text: { primary: "#FFFFFF", secondary: "#888888" },
      fontFamily:"Poppins, sans-serif",
      tertiary: "rgb(34, 17, 84)",
      link:"rgb(118, 32, 134)",
      shadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
      shadowHover: "0px 6px 18px rgba(255, 255, 255, 0.2)",
    },
  }),
  
  light: createTheme({
    palette: {
      mode: "light",
      background: { default: "#FFFFFF" },
      text: { primary: "#000000", secondary: "#555555" },
      fontFamily:"Poppins, sans-serif",
      tertiary: "rgb(118, 32, 134)",
      link:"rgb(116, 13, 134)",
      shadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
      shadowHover: "0px 4px 12px rgba(0, 0, 0, 0.2)",
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
  theme: "dark",
  themes,
  setTheme: () => {}, 
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeKey>("dark"); 

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
