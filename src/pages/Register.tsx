
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { toast } from "sonner";
import { Check } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    ticketType: "standard",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Registration successful! Check your email for confirmation.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        ticketType: "standard",
      });
    }, 1500);
  };

  const ticketOptions = [
    {
      type: "early",
      name: "Early Bird",
      price: "$499",
      features: [
        "Access to all keynotes",
        "Workshop participation",
        "Networking events",
        "Digital event materials",
      ],
      available: false,
    },
    {
      type: "standard",
      name: "Standard",
      price: "$699",
      features: [
        "Access to all keynotes",
        "Workshop participation",
        "Networking events",
        "Digital event materials",
        "Video recordings",
      ],
      available: true,
      recommended: true,
    },
    {
      type: "premium",
      name: "Premium",
      price: "$999",
      features: [
        "Access to all keynotes",
        "Workshop participation",
        "Networking events",
        "Digital event materials",
        "Video recordings",
        "VIP networking dinner",
        "1-on-1 sessions with speakers",
      ],
      available: true,
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Registration
            </span>
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Secure Your Spot
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto">
              Join us at FutureFest 2024 for three days of innovation,
              inspiration, and connection with industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {ticketOptions.map((ticket) => (
              <div
                key={ticket.type}
                className={`rounded-lg ${
                  ticket.recommended
                    ? "border-2 border-primary relative"
                    : "border border-border"
                } overflow-hidden`}
              >
                {ticket.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{ticket.name}</h3>
                  <p className="text-3xl font-bold mb-4">{ticket.price}</p>
                  <ul className="space-y-3 mb-6">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <label
                      className={`flex items-center justify-center w-full py-2 rounded-md cursor-pointer ${
                        formData.ticketType === ticket.type
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground/60 hover:bg-muted/80"
                      } transition-colors ${
                        !ticket.available ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="ticketType"
                        value={ticket.type}
                        checked={formData.ticketType === ticket.type}
                        onChange={handleChange}
                        className="sr-only"
                        disabled={!ticket.available}
                      />
                      {ticket.available ? "Select" : "Sold Out"}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto glass-card rounded-lg p-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-medium mb-6 text-center">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium mb-2">
                    Job Title
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Complete Registration"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
