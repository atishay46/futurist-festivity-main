
import React, { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import { HeroSection } from "../components/HeroSection";
import { TimelineEvent } from "../components/TimelineEvent";
import { SpeakerCard } from "../components/SpeakerCard";

const Index = () => {
  const scheduleRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);

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

    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }

    if (speakersRef.current) {
      observer.observe(speakersRef.current);
    }

    return () => {
      if (scheduleRef.current) {
        observer.unobserve(scheduleRef.current);
      }
      if (speakersRef.current) {
        observer.unobserve(speakersRef.current);
      }
    };
  }, []);

  // Sample data for timeline
  const timelineEvents = [
    {
      time: "Day 1 - 9:00 AM",
      title: "Opening Keynote: The Future of AI",
      description:
        "A visionary talk on how artificial intelligence will shape our future across industries and society.",
      location: "Main Stage",
      type: "Keynote",
      speaker: "Dr. Eleanor Chen",
    },
    {
      time: "Day 1 - 11:30 AM",
      title: "Workshop: Hands-on with Quantum Computing",
      description:
        "An interactive session exploring quantum computing principles and their practical applications.",
      location: "Workshop Room A",
      type: "Workshop",
      speaker: "Prof. James Weber",
    },
    {
      time: "Day 1 - 2:00 PM",
      title: "Panel Discussion: Ethics in Technology",
      description:
        "Industry leaders discuss the ethical considerations in developing and deploying new technologies.",
      location: "Discussion Hall",
      type: "Panel",
      speaker: "Multiple Speakers",
    },
    {
      time: "Day 2 - 10:00 AM",
      title: "The Metaverse Revolution",
      description:
        "Exploring how virtual worlds are changing entertainment, work, and social interaction.",
      location: "Main Stage",
      type: "Keynote",
      speaker: "Maya Rodriguez",
    },
    {
      time: "Day 2 - 1:30 PM",
      title: "Future of Work: AI Collaboration",
      description:
        "How AI tools are transforming professional work environments and creative processes.",
      location: "Innovation Lab",
      type: "Workshop",
      speaker: "Dr. Aiden Park",
    },
    {
      time: "Day 3 - 9:30 AM",
      title: "Sustainable Tech: Building for Tomorrow",
      description:
        "How technology can address climate challenges and create a more sustainable future.",
      location: "Main Stage",
      type: "Keynote",
      speaker: "Sophia Martinez",
    },
  ];

  // Sample data for speakers
  const speakers = [
    {
      name: "Dr. Eleanor Chen",
      role: "Chief AI Scientist",
      company: "Quantum AI",
      bio: "Leading researcher in generative artificial intelligence with over 15 years of experience pioneering breakthroughs in machine learning.",
      imageUrl: "/placeholder.svg",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Maya Rodriguez",
      role: "Director of XR Research",
      company: "Future Labs",
      bio: "Pioneer in extended reality technologies and their applications in medicine, education, and creative industries.",
      imageUrl: "/placeholder.svg",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Prof. James Weber",
      role: "Quantum Computing Lead",
      company: "Tech University",
      bio: "Academic researcher focusing on quantum algorithms and their potential to solve previously intractable computational problems.",
      imageUrl: "/placeholder.svg",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    {
      name: "Sophia Martinez",
      role: "Founder & CEO",
      company: "GreenTech Solutions",
      bio: "Entrepreneur and environmental advocate developing technology solutions for sustainable development and climate resilience.",
      imageUrl: "/placeholder.svg",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dr. Aiden Park",
      role: "Head of Innovation",
      company: "Collaborative AI",
      bio: "Researcher and product leader specializing in human-AI collaboration systems that enhance human creativity and productivity.",
      imageUrl: "/placeholder.svg",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    {
      name: "Emma Wilson",
      role: "Robotics Engineer",
      company: "Automation Systems",
      bio: "Expert in advanced robotics and autonomous systems design with applications in healthcare, manufacturing, and exploration.",
      imageUrl: "/placeholder.svg",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-6">
        <div className="container mx-auto">
          <div
            ref={scheduleRef}
            className="max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Event Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Three Days of Innovation
            </h2>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto">
              Explore our carefully curated program of keynotes, workshops, and
              networking events across three transformative days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                location={event.location}
                type={event.type}
                speaker={event.speaker}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div
            ref={speakersRef}
            className="max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Featured Speakers
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Learn from Industry Leaders
            </h2>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto">
              Our speakers represent the cutting edge of technology innovation,
              research, and application across diverse fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                company={speaker.company}
                bio={speaker.bio}
                imageUrl={speaker.imageUrl}
                twitter={speaker.twitter}
                linkedin={speaker.linkedin}
                website={speaker.website}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to Join the Future?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto">
                Secure your spot at FutureFest and be part of the conversation
                shaping tomorrow's technology landscape.
              </p>
              <a
                href="/register"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-all"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
