'use client'
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Switch, styled } from "@mui/material";
import { useThemeContext } from "../app/ThemeContext";

const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contacts"];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 22.5,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(4px)',
    '&.Mui-checked': {
      color: 'black',
      backgroundColor:'#ffff',
      transform: 'translateX(18px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 22,
    height: 22,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
const CustomAppBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { theme: currentTheme, themes, setTheme } = useThemeContext();
  const isDarkMode = currentTheme === "dark";

  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: `1px solid ${themes[currentTheme].palette.text.primary}`,
        backgroundColor: themes[currentTheme].palette.background.default,
        boxShadow: 1,
        minHeight: "15vh",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h4" sx={{ color: themes[currentTheme].palette.text.primary }}>
            Guna's <Typography component="span" variant="h4" sx={{ color: themes[currentTheme].palette.text.secondary }}>Portfolio</Typography>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <SpeedDial
              ariaLabel="Navigation Speed Dial"
              icon={<SpeedDialIcon />}
              direction="up"
              sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
              {navItems.map((item, index) => (
                <SpeedDialAction
                  key={index}
                  icon={<Typography variant="button" sx={{ color: themes[currentTheme].palette.text.primary }}>{item}</Typography>}
                  tooltipTitle={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                />
              ))}
            </SpeedDial>
          ) : (
            <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  sx={{ color: themes[currentTheme].palette.text.primary, '&:hover': {
                    backgroundColor: themes[currentTheme].palette.shadow,
                    color: themes[currentTheme].palette.text.primary,
                  }, }}
                >
                  <Typography variant="button" sx={{ textTransform: "none" }}>
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
          )}
          {/* Theme Toggle Switch */}
          <Box sx={{ ml: 2 }}>
            <MaterialUISwitch
              checked={isDarkMode}
              onChange={() => setTheme(isDarkMode ? "light" : "dark")}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
