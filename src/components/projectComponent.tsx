'use client'
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinkIcon from "@mui/icons-material/Link";
import { useThemeContext } from "../app/ThemeContext";

const ProjectCard = ({ title, description, image, link }: any) => {
  const { theme: currentTheme, themes } = useThemeContext();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: themes[currentTheme].palette.background.paper,
        color: themes[currentTheme].palette.text.primary,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
        },
        p: 2,
        borderRadius:10
      }}
    >
      <Box
        sx={{
          border: `1px solid ${themes[currentTheme].palette.secondary}`,
          borderRadius:10
        }}
      >
        <CardMedia component="img" height="200" image={image} alt={title} sx={{  borderRadius:10}} />
      </Box>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{borderBottom:`1px solid ${themes[currentTheme].palette.text.primary}`}}>
          {title}
        </Typography>
        <Typography variant="body2" color={themes[currentTheme].palette.text.secondary}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: themes[currentTheme].palette.primary.main }}>
        <Typography variant="body2" color={themes[currentTheme].palette.tertiary}>
          GitHub <LinkIcon sx={{ fontSize: 30 }} />
        </Typography> 
        </a>
      </Box>
    </Card>
  );
};

const ProjectList = () => {
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive online shopping application built with Next.js and ASP.NET Core, featuring product catalogs, search filters, and order management.",
      image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743674851/Screenshot_2025-04-03_153045_tg8tsq.png",
      link: "https://github.com/iwbkratos/Skaters_API",
    },
    {
      title: "Random Blog",
      description: "An accounting dashboard with user invoice management, bill payments, and transaction history, optimized for fast API responses.",
      image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743674871/Screenshot_2025-04-03_153608_c4kbq8.png",
      link: "https://github.com/iwbkratos/Blog-nextJS",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing skills, experience, and projects with a dynamic dark mode and smooth navigation.",
      image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743674864/Screenshot_2025-04-03_153109_nzxcnm.png",
      link: "https://github.com/iwbkratos/Portfolio",
    },
  ];
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 3,
        justifyContent: "center",
        p: 3,
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectList;
