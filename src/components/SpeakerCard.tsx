
import React, { useRef, useEffect } from "react";
import { Twitter, Linkedin, ExternalLink } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  delay?: number;
}

export const SpeakerCard = ({
  name,
  role,
  company,
  bio,
  imageUrl,
  twitter,
  linkedin,
  website,
  delay = 0,
}: SpeakerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass-card rounded-lg overflow-hidden h-full transition-transform duration-300 hover:translate-y-[-5px]">
        <div className="relative aspect-[3/2] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl || "/placeholder.svg"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-1">{name}</h3>
            <p className="text-sm text-foreground/70">
              {role}, {company}
            </p>
          </div>
          
          <p className="text-sm mb-4 text-foreground/80 line-clamp-3">{bio}</p>
          
          <div className="flex space-x-3 mt-auto">
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={`${name}'s Website`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
