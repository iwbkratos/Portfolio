'use client'
import React from "react";
import { Typography, Box } from "@mui/material";
import { useThemeContext } from "../app/ThemeContext";
import LinkIcon from "@mui/icons-material/Link";

const socialLinks = [
  { name: "Instagram", url:process.env.NEXT_PUBLIC_INSTAGRAM_URL , icon: <LinkIcon /> },
  { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN, icon: <LinkIcon /> },
  { name: "Reddit", url: process.env.NEXT_PUBLIC_REDDIT_URL, icon: <LinkIcon /> },
  { name: "Discord", url: process.env.NEXT_PUBLIC_DISCORD_URL, icon: <LinkIcon /> },

];

const Contact = () => {
  const { theme: currentTheme, themes } = useThemeContext();

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="bold" mb={2}>
        Contact Me
      </Typography>
      <Typography 
        variant="body1" 
        color={themes[currentTheme].palette.text.secondary} 
        mb={3} 
        sx={{ maxWidth: "600px" }}
      >
        Feel free to connect with me on the following platforms:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {socialLinks.map((link, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              p: 1.5,
              border: `1px solid ${themes[currentTheme].palette.divider}`,
              borderRadius: 2,
              width: "100%",
            }}
          >
            {link.icon}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: themes[currentTheme].palette.text.primary,
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {link.name}
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
