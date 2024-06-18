"use client";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Max's Personal Website!",
      description: "Enjoy your stay and explore the content.",
    });
  }, [toast]);

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <CustomCursor />
            {children}
            <Footer />
            <Toaster />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
