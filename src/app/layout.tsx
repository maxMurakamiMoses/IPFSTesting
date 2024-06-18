// Import necessary components
"use client";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import CustomCursor from "@/components/CustomCursor";
import { Meteors } from "@/components/ui/meteors"; // Import Meteors component
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
              <Meteors number={90} className="z-0" />
            </div>

            <div className="relative z-10">
              <Header />
              <CustomCursor />
              {children}
              <Footer />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
