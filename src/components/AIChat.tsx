
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChat = ({ isOpen, onClose }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your FutureFest AI assistant. How can I help you with information about the event?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample responses for demo purposes
  const AI_RESPONSES = {
    default: "I'm sorry, I don't have specific information about that. Can I help you with something else about the event?",
    greeting: "Hello! I'm happy to help with any questions about FutureFest. Ask me about schedules, speakers, registration, or venue details!",
    schedule: "FutureFest runs from October 15-17, 2024. Day 1 focuses on AI innovations, Day 2 on sustainable tech, and Day 3 on future interfaces. Check the schedule section for detailed timings.",
    registration: "You can register for the event by clicking the 'Register Now' button on the website. Early bird tickets are available until August 1, 2024. Would you like me to provide more details about ticket options?",
    speakers: "We have a fantastic lineup of speakers including AI researchers, tech innovators, and industry leaders. Check the speakers section for the full list. Is there a specific speaker you'd like to know more about?",
    location: "FutureFest will be held in San Francisco at the Innovation Center, with virtual attendance options also available. The address is 123 Tech Avenue, San Francisco, CA 94105. Would you like directions or accommodation recommendations?",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      let responseText = AI_RESPONSES.default;

      // Very basic pattern matching for demo purposes
      const input = inputValue.toLowerCase();
      if (input.includes("hello") || input.includes("hi")) {
        responseText = AI_RESPONSES.greeting;
      } else if (input.includes("schedule") || input.includes("time") || input.includes("when")) {
        responseText = AI_RESPONSES.schedule;
      } else if (input.includes("register") || input.includes("ticket") || input.includes("sign up")) {
        responseText = AI_RESPONSES.registration;
      } else if (input.includes("speaker") || input.includes("talk") || input.includes("present")) {
        responseText = AI_RESPONSES.speakers;
      } else if (input.includes("where") || input.includes("location") || input.includes("place")) {
        responseText = AI_RESPONSES.location;
      }

      const aiMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg h-[600px] max-h-[90vh] bg-card rounded-lg shadow-xl flex flex-col animate-scale-in">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-medium">FutureFest AI Assistant</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "glass"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <div
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-primary-foreground/70" : "text-foreground/50"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-lg px-4 py-2 glass">
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about schedules, speakers, registration..."
              className="flex-1 bg-background border border-input rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-primary text-primary-foreground p-2 rounded-r-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
