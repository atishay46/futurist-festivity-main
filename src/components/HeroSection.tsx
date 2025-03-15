
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThreeScene } from "./ThreeScene";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".animate-item");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pt-8 md:pt-0 order-2 md:order-1">
          <div className="max-w-xl mx-auto md:mx-0">
            <span 
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-item opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: "200ms" }}
            >
              October 15-17, 2024 • Virtual & San Francisco
            </span>
            <h1 
              className="mb-6 animate-item opacity-0 translate-y-10 transition-all duration-700 text-balance leading-tight"
              style={{ transitionDelay: "300ms" }}
            >
              Where <span className="text-gradient font-bold">Technology</span> Meets the <span className="text-gradient font-bold">Future</span>
            </h1>
            <p 
              className="text-lg mb-8 animate-item opacity-0 translate-y-10 transition-all duration-700 max-w-lg"
              style={{ transitionDelay: "400ms" }}
            >
              Join the world's leading tech innovators, AI researchers, and visionary thinkers for three days of groundbreaking insights, hands-on workshops, and networking opportunities.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-item opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: "500ms" }}
            >
              <Link 
                to="/register" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-all text-center"
              >
                Register Now
              </Link>
              <a
                href="#schedule"
                className="border border-border bg-background/50 hover:bg-background/80 px-8 py-3 rounded-md transition-all text-center"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
          <div 
            className="h-[300px] md:h-[500px] w-full animate-item opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "600ms" }}
          >
            <ThreeScene />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#schedule" aria-label="Scroll down">
          <ArrowDown size={24} className="text-foreground/60" />
        </a>
      </div>
    </section>
  );
};
