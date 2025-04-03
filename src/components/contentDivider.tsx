'use client'
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useThemeContext } from "@/app/ThemeContext";

const ResponsiveHeading = ({heading,children}:{heading:string,children: React.ReactNode}) => {
     const { theme: currentTheme, themes, setTheme } = useThemeContext();
  return (
    <Box
      sx={{
        minHeight:"100vh",
        width: "100%",
        p: 3,
        textAlign: "left",
        backgroundColor: themes[currentTheme].palette.background.default,
      }}
    >
      <Typography 
        variant="h4"
        sx={{
          color: themes[currentTheme].palette.text.primary,
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          letterSpacing: 1,
          marginLeft:3,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        {heading}
      </Typography>
      {children}
    </Box>
  );
};

export default ResponsiveHeading;
