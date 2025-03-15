
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, MessageSquare, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  openChat: () => void;
}

export const Navbar = ({ theme, setTheme, openChat }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass border-b border-white/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-medium text-xl md:text-2xl tracking-tight transition-all duration-200 hover:opacity-80"
        >
          FUTURE<span className="text-primary">FEST</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#schedule" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Schedule
          </a>
          <a href="#speakers" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Speakers
          </a>
          <Link to="/register" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Register
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            onClick={openChat}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Open chat"
          >
            <MessageSquare size={18} />
          </button>
          <Link 
            to="/register" 
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-all"
          >
            Register Now
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[62px] bg-background z-40 flex flex-col animate-fade-in">
          <div className="flex flex-col p-6 space-y-6">
            <Link 
              to="/" 
              className="text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#schedule" 
              className="text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </a>
            <a 
              href="#speakers" 
              className="text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </a>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <div className="flex items-center gap-2">
                    <Moon size={18} />
                    <span>Dark Mode</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sun size={18} />
                    <span>Light Mode</span>
                  </div>
                )}
              </button>
              <button 
                onClick={() => {
                  openChat();
                  setMobileMenuOpen(false);
                }}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Open chat"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} />
                  <span>Chat</span>
                </div>
              </button>
            </div>
            <Link 
              to="/register" 
              className="bg-primary text-primary-foreground py-3 rounded-md text-center hover:bg-primary/90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
