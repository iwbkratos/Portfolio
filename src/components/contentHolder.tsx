'use client'
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "../app/ThemeContext";
import Image from "next/image";

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Solverines Technology Solutions",
    duration: "March 2024 - Present",
    description: [
      "Developed a functionality to retrieve transaction details, including invoice payments, bill payments, and deposits, using ASP.NET Core & Entity Framework.",
      "Implemented a streamlined payment and deposit process, reducing processing time and enhanced user experience.",
      "Integrated Sure App into a Next.js project via Iframe, streamlining renter insurance processes and boosted operational efficiency.",
      "Utilized Redux Toolkit and TypeScript for state management in a Next.js app, reducing API calls by 25% and boosting app responsiveness.",
      "Conceptualized and implemented a split invoice feature to efficiently generate multiple invoices for different users. Automated the process, significantly reducing processing time of manual effort."
    ],
  }
];

export default function ExperienceBox() {
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
          src="/developer.png" // Replace with actual image path
          alt="Experience"
          width={300} 
          height={400} 
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
           Experience
        </Typography>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                background: themes[currentTheme].palette.background.default,
                color: themes[currentTheme].palette.text.primary,
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: themes[currentTheme].palette.text.primary }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: themes[currentTheme].palette.text.secondary }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ color: themes[currentTheme].palette.tertiary }}>
                  {exp.duration}
                </Typography>

                {/* Render bullet points */}
                <List sx={{ marginTop: 1 }}>
                  {exp.description.map((point, i) => (
                    <ListItem key={i} sx={{ paddingLeft: 0 }}>
                      <ListItemText 
                        primary={`• ${point}`} 
                        primaryTypographyProps={{ color: themes[currentTheme].palette.text.secondary, fontSize:"1.2rem" }} 
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
