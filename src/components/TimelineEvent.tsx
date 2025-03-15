
import React, { useRef, useEffect } from "react";
import { CalendarClock, MapPin, Users } from "lucide-react";

interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
  location: string;
  type: string;
  speaker?: string;
  isLeft?: boolean;
}

export const TimelineEvent = ({
  time,
  title,
  description,
  location,
  type,
  speaker,
  isLeft = false,
}: TimelineEventProps) => {
  const eventRef = useRef<HTMLDivElement>(null);

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

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, []);

  // Determine color based on event type
  const getBadgeColor = () => {
    switch (type.toLowerCase()) {
      case "keynote":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "workshop":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "panel":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "networking":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300";
    }
  };

  return (
    <div
      ref={eventRef}
      className={`flex items-start gap-8 mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-6 h-6 rounded-full bg-primary mt-2 relative">
        <span className="absolute top-7 bottom-0 left-1/2 -translate-x-1/2 w-px h-[calc(100%+3rem)] bg-border"></span>
      </div>

      <div className="flex-1 max-w-xl">
        <div className="glass-card rounded-lg p-6 transition-transform duration-300 hover:translate-y-[-5px]">
          <div className="flex items-center gap-2 mb-4">
            <CalendarClock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/70">{time}</span>
          </div>

          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="mb-4 text-foreground/70">{description}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor()}`}>
              {type}
            </span>
            {speaker && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                <Users className="mr-1 h-3 w-3" />
                {speaker}
              </span>
            )}
          </div>

          <div className="flex items-center text-sm text-foreground/60">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};
