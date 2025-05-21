import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Goel Portfolio",
  description: "Crafting Scalable and Interactive Web Solutions from Scratch",
  generator: "Next.js",
  applicationName: "Aayush Goel Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Aayush Goel",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Web Design",
    "Web Development",
    "Responsive Design",
    "User Experience",
    "UI/UX",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "API Development",
    "Agile Development",
    "Software Development",
    "Problem Solving",
    "Team Collaboration",
    "Communication Skills",
    "Continuous Learning",
    "Adaptability",
    "Attention to Detail",
    "Time Management",
    "Project Management",
    "Technical Skills",
    "Creative Thinking",
  ],
  authors: [
    {
      name: "Aayush Goel",
      url: "  https://aayushgoel.dev",
    },
  ],
  creator: "Aayush Goel",
  publisher: "Aayush Goel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
