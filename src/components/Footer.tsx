
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-medium text-xl tracking-tight">
              FUTURE<span className="text-primary">FEST</span>
            </Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-xs">
              Where technology meets the future. Join us for three days of
              innovation, inspiration, and connection.
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#schedule" className="text-foreground/70 hover:text-foreground transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-foreground/70 hover:text-foreground transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <Link to="/register" className="text-foreground/70 hover:text-foreground transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-foreground/60" />
                <a href="mailto:info@futurefest.com" className="text-foreground/70 hover:text-foreground transition-colors">
                  info@futurefest.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-2">Subscribe to updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-background border border-input rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/60 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} FutureFest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
