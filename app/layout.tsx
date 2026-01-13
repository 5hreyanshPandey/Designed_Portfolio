import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import ParticleBackground from "./components/ParticleBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shreyansh Pandey | Creative Developer",
  description: "Portfolio of Shreyansh Pandey, a Creative Developer and Computer Science Undergraduate specializing in MERN stack and secure web systems.",
  keywords: ["Creative Developer", "Full Stack", "MERN", "Next.js", "Portfolio", "Shreyansh Pandey"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-[#121212] text-white overflow-x-hidden selection:bg-white/20`}>
        <ParticleBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
