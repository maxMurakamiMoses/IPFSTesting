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
import { useEffect, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ToastActionLinkProps {
  href: string;
  children: ReactNode;
}

const ToastActionLink = ({ href, children }: ToastActionLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
    {children}
  </a>
);

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Have a IPFS compatible browser?",
      description: "Check this website out at maxMurakami.eth.limo!",
      action: <ToastActionLink href="https://maxmurakami.eth.limo/">Go to Site</ToastActionLink>,
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
