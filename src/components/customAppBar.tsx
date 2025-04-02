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
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useThemeContext } from "../app/ThemeContext";

const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contacts"];

const CustomAppBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { theme: currentTheme, themes, setTheme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleNavigation = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {/* Theme Selector Button */}
          <Tooltip title="Change Theme">
            <IconButton onClick={handleClick} sx={{ color: themes[currentTheme].palette.text.primary }}>
              <ColorLensIcon />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {Object.keys(themes).map((themeKey) => (
              <MenuItem
                key={themeKey}
                onClick={() => {
                  setTheme(themeKey as keyof typeof themes);
                  handleClose();
                }}
              >
                {themeKey}
              </MenuItem>
            ))}
          </Menu>
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
                  onClick={() => handleNavigation(item)}
                />
              ))}
            </SpeedDial>
          ) : (
            <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  sx={{ color: themes[currentTheme].palette.text.primary,  '&:hover': {
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
