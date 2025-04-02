'use client'
import { Box, Typography, Card } from "@mui/material";
import { useThemeContext } from "../app/ThemeContext";

export default function Home() {
  const { theme: currentTheme, themes } = useThemeContext();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes[currentTheme].palette.background.default,
        padding: { xs: "2rem", md: "4rem" },
        margin: 0,
      }}
    >
      {/* Left Content Section (70%) */}
      <Box
        sx={{
          flex: { md: 7, xs: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: themes[currentTheme].palette.text.secondary,
            marginTop: 2,
            fontSize: { xs: "1rem", md: "1.25rem", lg: "1.5rem" },
            paddingLeft:"5px"
          }}
        >
          Hello! I'm
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: themes[currentTheme].palette.text.primary,
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
          }}
        >
          GUNASEKRAN R
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: themes[currentTheme].palette.text.secondary,
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
          }}
        >
          Building for Everyone!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: themes[currentTheme].palette.text.secondary,
            marginTop: 2,
            fontSize: { xs: "1rem", md: "1.25rem", lg: "1.5rem" },
            maxWidth: "800px",
          }}
        >
          Hey, I love building software that’s efficient, scalable, and solves real problems. I enjoy digging into complex challenges, optimizing performance, and always learning new things to improve what I create.
        </Typography>
      </Box>

      {/* Right Image Section (30%) */}
      <Box
        sx={{
          flex: { md: 3, xs: 1 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "2rem", md: 0 },
        }}
      >
        <Card
          sx={{
            width: { xs: "160px", md: "220px", lg: "260px" },
            height: { xs: "160px", md: "220px", lg: "260px" },
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="Juventus Jersey.jpg"
            alt="Profile Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
}
