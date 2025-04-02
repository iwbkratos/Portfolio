'use client'
import { Box, Typography, Chip, Avatar } from "@mui/material";
import { useThemeContext } from "../app/ThemeContext";

const skills = [
  { name: "HTML", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743622336/ry88s7ojgsamj0u1f2of.png" },
  { name: "CSS", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743622415/xawccppqk1xtw4impu1y.png" },
  { name: "Java", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743622111/h90ewnmed3hkihrw6y11.png" },
  { name: "Next.js", image: "https://brandfetch.com/nextjs.org?view=library&library=default&collection=logos&asset=idqNI71Hra" },
  { name: "C#", image: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/csharp/csharp-original.svg" },
  { name: "SQL Server", image: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: ".NET Core", image: "https://commons.wikimedia.org/wiki/File:.NET_Core_Logo.svg" },
  { name: "TypeScript", image: "https://brandfetch.com/typescriptlang.org?view=library&library=default&collection=logos&asset=idwGgjjT4C" },
  { name: "JavaScript", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743621972/etecjlufut8euy3tip6p.png" },
  { name: "Git", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743622511/o0dpkz40pul9hid1h5rp.png" },
  { name: "GitHub", image: "https://res.cloudinary.com/deep38tbr/image/upload/v1743622583/o0uanjn6cu88ib6nda7t.png" },
];

export default function SkillsGallery() {
  const { theme: currentTheme, themes } = useThemeContext();

  return (
    <Box
      sx={{
        width: "100%",
        // maxWidth: "900px", // Ensures content fits well within screen
        margin: "0 auto", // Centers content
        padding: { xs: "1rem", md: "2rem" },
        background: themes[currentTheme].palette.background.default,
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
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Skills
      </Typography>

      {/* Skill Chips */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, // 2 columns on mobile, 3 on larger screens
          gap: 4,
          justifyItems: "center",
          width: "100%",
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill.name}
            avatar={<Avatar src={skill.image} alt={skill.name} />}
            sx={{
              width: "150px", // Ensures all chips have equal width
              height: "55px", // Consistent chip height
              background: themes[currentTheme].palette.background.paper,
              color: themes[currentTheme].palette.text.primary,
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "28px",
              border: `2px solid ${themes[currentTheme].palette.primary.main}`, // Added border
              boxShadow: `0px 2px 6px ${themes[currentTheme].palette.shadow}`,
              "& .MuiChip-avatar": {
                width: 36,
                height: 36,
              },
              "&:hover": {
                background: themes[currentTheme].palette.action.hover,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
