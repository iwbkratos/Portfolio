'use client'
import { useThemeContext } from "@/app/ThemeContext";
import { Button } from "@mui/material";
import Image from "next/image";

export default function CustomButton({link,index}:{link:any,index:number})
{
    const {theme:currentTheme,themes} = useThemeContext();
    return(
        
        <Button
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
            <Image src={link?.icon} alt={link?.name}></Image>
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
          </Button>
        
    )
}