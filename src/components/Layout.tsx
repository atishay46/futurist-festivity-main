
import React, { useEffect, useState, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AIChat } from "./AIChat";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Time-based theme
  useEffect(() => {
    const checkTime = () => {
      const currentHour = new Date().getHours();
      // Dark mode between 6 PM and 6 AM
      if (currentHour >= 18 || currentHour < 6) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    };

    checkTime();
    const intervalId = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <Navbar theme={theme} setTheme={setTheme} openChat={() => setIsChatOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};
