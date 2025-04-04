"use client"
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip, Fade } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useThemeContext } from "../app/ThemeContext";

const songList = [
  "https://res.cloudinary.com/deep38tbr/video/upload/v1743776308/wjzjidfdunpldglzgvzr.mp3",
  "https://res.cloudinary.com/deep38tbr/video/upload/v1743776468/cqdrgg0ip3055bjscxhx.mp3",
  "https://res.cloudinary.com/deep38tbr/video/upload/v1743776437/ktkphqvasvsk3vitttik.mp3",
];

const FloatingAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songList.length)
  );
  const { theme: currentTheme, themes } = useThemeContext();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set song
    audio.src = songList[currentSongIndex];
    audio.muted = true;

    const handleUserInteraction = () => {
      if (audio) {
        audio.play().then(() => {
          audio.muted = false;
          setIsMuted(false);
        });
      }
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, [currentSongIndex]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMuted = !isMuted;
      audio.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songList.length);
  };

  return (
    <>
      <audio ref={audioRef} onEnded={handleSongEnd} autoPlay loop={false} />

      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 24 },
          right: { xs: -40, md: -40 },
          zIndex: 1000,
        }}
      >
        <Fade in={showTooltip}>
          <Box
            sx={{
                mb: 1,
                backgroundColor: themes[currentTheme].palette.text.primary,
                color: themes[currentTheme].palette.background.default,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: "0.85rem",
                boxShadow: themes[currentTheme].palette.shadow,
                whiteSpace: "nowrap",
                transform: "translateX(-100%)", 
            }}
          >
            Music!? 🎵
          </Box>
        </Fade>

        <Tooltip title={isMuted ? "Unmute" : "Mute"}>
          <IconButton
            onClick={toggleMute}
            sx={{
              backgroundColor: themes[currentTheme].palette.tertiary,
              color: "#fff",
              "&:hover": {
                backgroundColor: themes[currentTheme].palette.text.secondary,
              },
              boxShadow: themes[currentTheme].palette.shadow,
              width: 36,
              height: 36,
            }}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default FloatingAudioPlayer;
