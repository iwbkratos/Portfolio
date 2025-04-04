import type { Metadata } from "next";
import './globals.css'
import CustomAppBar from "@/components/customAppBar";
import { ThemeProvider } from "./ThemeContext";
import FloatingAudioPlayer from "@/components/floatinAudioPlayer";

export const metadata: Metadata = {
  title: "Guna's Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CustomAppBar/>
          <FloatingAudioPlayer/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
