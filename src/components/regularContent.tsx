'use client'
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "../app/ThemeContext";
import Image from "next/image";
import { about } from "@/util/data";


export default function ContentBox() {
    const content : any = about;
  const { theme: currentTheme, themes } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Mobile: column, Desktop: row
        alignItems: "center",
        justifyContent: "center",
        minHeight:"100vh",
        width: "100%",
        gap: 3,
        padding: { xs: "2rem", md: "4rem" },
        background: themes[currentTheme].palette.background.default,
        borderRadius: "12px",
        boxShadow: `0px 4px 12px ${themes[currentTheme].palette.shadow}`, 
      }}
      
    >
      {/* Right Section (Image first on mobile, second on desktop) */}
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "40%" },
          order: { xs: -1, md: 1 }, // Image first on mobile, second on desktop
        }}
      >
        <Image
          src="/workexp.png" // Replace with actual image path
          alt={"work"}
          width={500} 
          height={600} 
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Left Section - Work Experience */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: themes[currentTheme].palette.text.primary,
            fontWeight: "bold",
            textAlign: "left",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
        </Typography>
        {content.map((exp : any, index : any) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                background: themes[currentTheme].palette.background.paper,
                color: themes[currentTheme].palette.text.primary,
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="h4"
                      sx={{
                      color: themes[currentTheme].palette.text.primary,
                      fontWeight: "bold",
                      textAlign: "left",
                      textTransform: "uppercase",
                       letterSpacing: 1,
                      }} >
                        {exp.title}
                </Typography>

                {/* Render bullet points */}
                <List sx={{ marginTop: 1 }}>
                  {exp.description.map((point : any, i : any) => (
                    <ListItem key={i} sx={{ paddingLeft: 0 }}>
                      <ListItemText 
                        primary={`${point}`} 
                        primaryTypographyProps={{ color: themes[currentTheme].palette.text.secondary }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
