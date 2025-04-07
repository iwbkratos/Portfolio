'use client'
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Switch,
  styled
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
      backgroundColor: '#fff',
      transform: 'translateX(18px)',
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const CustomAppBar: React.FC = () => {
  const { theme: currentTheme, themes, setTheme } = useThemeContext();
  const isDarkMode = currentTheme === "dark";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (item: string) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(item);
    setDrawerOpen(false);
  };

  // Observe which section is currently visible
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(item => {
      const section = document.getElementById(item.toLowerCase());
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // 50% of section must be visible
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          borderBottom: `1px solid ${themes[currentTheme].palette.text.primary}`,
          backgroundColor: themes[currentTheme].palette.background.default,
          boxShadow: 1,
          minHeight: "10vh",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h4" sx={{ color: themes[currentTheme].palette.text.primary, fontSize:"18px", fontFamily:themes[currentTheme].palette.fontFamily }}>
              GUNASEKRAN RAGUNATHAN{" "}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            {/* Mobile menu button */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: themes[currentTheme].palette.text.primary, fontFamily:themes[currentTheme].palette.fontFamily }}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop nav buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: "auto" }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    color: activeSection === item
                      ? themes[currentTheme].palette.text.secondary
                      : themes[currentTheme].palette.text.primary,
                    fontWeight: activeSection === item ? "bold" : "normal",
                    fontFamily:themes[currentTheme].palette.fontFamily,
                    borderBottom: activeSection === item ? `2px solid ${themes[currentTheme].palette.text.secondary}` : "none",
                    borderRadius: 0,
                    '&:hover': {
                      borderBottom: `2px solid ${themes[currentTheme].palette.text.secondary}`,
                      backgroundColor: 'transparent',
                    },
                    
                  }}
                >
                  <Typography variant="button" sx={{ textTransform: "none", fontFamily:themes[currentTheme].palette.fontFamily }}>
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>

            {/* Theme toggle */}
            <Box sx={{ ml: 0, mr: -3 }}>
              <MaterialUISwitch
                checked={isDarkMode}
                onChange={() => setTheme(isDarkMode ? "light" : "dark")}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '60vw',
            backgroundColor: themes[currentTheme].palette.background.default,
            color: themes[currentTheme].palette.text.primary,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item)}
                selected={activeSection === item}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: themes[currentTheme].palette.action.selected,
                    fontWeight: "bold",
                  },
                  '&:hover': {
                    borderBottom: `2px solid ${themes[currentTheme].palette.text.secondary}`,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default CustomAppBar;
