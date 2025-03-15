
import React, { useEffect, useRef } from "react";

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import Three.js to avoid SSR issues
    const loadThree = async () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      try {
        // For a simple first version, we'll use a placeholder with simulated loading
        // and a nice animation instead of an actual Three.js scene
        const container = containerRef.current;
        
        // Create the placeholder
        container.innerHTML = "";
        const placeholder = document.createElement("div");
        placeholder.className = "relative w-full h-full flex items-center justify-center";
        
        // Create the orb effect
        const orb = document.createElement("div");
        orb.className = "w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/80 animate-pulse relative";
        
        // Add inner orb
        const innerOrb = document.createElement("div");
        innerOrb.className = "absolute inset-4 rounded-full bg-background/30 backdrop-blur-sm";
        orb.appendChild(innerOrb);
        
        // Add ring
        const ring = document.createElement("div");
        ring.className = "absolute -inset-8 border border-primary/20 rounded-full animate-spin";
        ring.style.animationDuration = "15s";
        
        // Add second ring
        const ring2 = document.createElement("div");
        ring2.className = "absolute -inset-16 border border-primary/10 rounded-full animate-spin";
        ring2.style.animationDuration = "25s";
        ring2.style.animationDirection = "reverse";
        
        // Add particles
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div");
          particle.className = "absolute w-1 h-1 bg-primary/60 rounded-full animate-float";
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          placeholder.appendChild(particle);
        }
        
        // Assemble the scene
        placeholder.appendChild(ring);
        placeholder.appendChild(ring2);
        placeholder.appendChild(orb);
        container.appendChild(placeholder);
        
        // Add text for future implementation
        const text = document.createElement("div");
        text.className = "absolute bottom-4 left-0 right-0 text-center text-xs text-foreground/40";
        text.textContent = "Interactive 3D visualization";
        placeholder.appendChild(text);
        
      } catch (error) {
        console.error("Failed to load Three.js:", error);
      }
    };

    loadThree();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Loading placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};
