import React, { useState } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const quickQuestions = [
  "What services do you offer?",
  "Tell me about web development",
  "What procurement services do you provide?",
  "Tell me about Leaf Alchemy",
];

function getResponse(message) {
  const text = message.toLowerCase();

  if (
    text.includes("web") ||
    text.includes("website") ||
    text.includes("development")
  ) {
    return {
      text:
        "Ayaansh T Corp provides custom web development and digital experiences designed around business requirements, customers and growth goals.",
      link: "#/technology/web-development",
      linkText: "Explore Web Development",
    };
  }

  if (
    text.includes("mobile") ||
    text.includes("app")
  ) {
    return {
      text:
        "We develop mobile applications that connect customers, teams and business processes.",
      link: "#/technology/mobile-applications",
      linkText: "Explore Mobile Applications",
    };
  }

  if (text.includes("saas")) {
    return {
      text:
        "We build scalable SaaS solutions designed for recurring use, operational efficiency and long-term growth.",
      link: "#/technology/saas",
      linkText: "Explore SaaS Solutions",
    };
  }

  if (
    text.includes("custom software") ||
    text.includes("software")
  ) {
    return {
      text:
        "We build business applications, dashboards, portals, workflows and integrations around specific requirements.",
      link: "#/technology/custom-software",
      linkText: "Explore Custom Software",
    };
  }

  if (
    text.includes("automation") ||
    text.includes("automate")
  ) {
    return {
      text:
        "Our automation solutions connect systems, workflows and business processes to reduce repetitive work.",
      link: "#/technology/automation",
      linkText: "Explore Automation",
    };
  }

  if (
    text.includes("seo") ||
    text.includes("digital growth") ||
    text.includes("marketing")
  ) {
    return {
      text:
        "Our SEO and Digital Growth capability focuses on visibility, user behaviour and turning digital traffic into meaningful opportunities.",
      link: "#/technology/seo-digital-growth",
      linkText: "Explore Digital Growth",
    };
  }

  if (
    text.includes("procurement") ||
    text.includes("rfq") ||
    text.includes("government")
  ) {
    return {
      text:
        "Ayaansh T Corp provides specialized procurement research and sourcing support, including RFQ research, supplier sourcing and quote support.",
      link: "#/procurement/rfq-research",
      linkText: "Explore Procurement",
    };
  }

  if (
    text.includes("supplier") ||
    text.includes("sourcing")
  ) {
    return {
      text:
        "Our Supplier Sourcing service helps identify and research relevant suppliers for applicable procurement requirements.",
      link: "#/procurement/supplier-sourcing",
      linkText: "Explore Supplier Sourcing",
    };
  }

  if (
    text.includes("quote") ||
    text.includes("quotation")
  ) {
    return {
      text:
        "Our Quote Support capability helps businesses with supplier quote research and procurement-related quote requirements.",
      link: "#/procurement/quote-support",
      linkText: "Explore Quote Support",
    };
  }

  if (
    text.includes("leaf") ||
    text.includes("tea")
  ) {
    return {
      text:
        "Leaf Alchemy is a tea brand developed and operated by Ayaansh T Corp as part of its products and ventures portfolio.",
      link: "#/products",
      linkText: "Explore Products & Ventures",
    };
  }

  if (
    text.includes("contact") ||
    text.includes("project") ||
    text.includes("start")
  ) {
    return {
      text:
        "If you have a business requirement, you can contact Ayaansh T Corp and discuss the project with us.",
      link: "#/contact",
      linkText: "Contact Ayaansh T Corp",
    };
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return {
      text:
        "Hello. I'm the Ayaansh T Corp AI Assistant. I can help you explore our technology solutions, procurement services and products.",
    };
  }

  return {
    text:
      "I can help you explore Ayaansh T Corp's technology solutions, procurement services and products. Try asking about web development, mobile applications, SaaS, automation, procurement or Leaf Alchemy.",
  };
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text:
        "Hello. I'm the Ayaansh T Corp AI Assistant. How can I help you explore our services?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (message = input) => {
    const trimmed = message.trim();

    if (!trimmed) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    const response = getResponse(trimmed);

    const assistantMessage = {
      id: Date.now() + 1,
      sender: "assistant",
      text: response.text,
      link: response.link,
      linkText: response.linkText,
    };

    setMessages((current) => [
      ...current,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* FLOATING ASSISTANT BUTTON */}
      {!isOpen && (
        <button
          type="button"
          className="ai-assistant-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Ayaansh T Corp AI Assistant"
        >
          <Sparkles size={18} />

          <span>AI Assistant</span>
        </button>
      )}

      {/* ASSISTANT WINDOW */}
      {isOpen && (
        <section
          className="ai-assistant-panel"
          aria-label="Ayaansh T Corp AI Assistant"
        >
          {/* HEADER */}
          <header className="ai-assistant-header">
            <div className="ai-assistant-title">
              <div className="ai-assistant-icon">
                <Bot size={20} />
              </div>

              <div>
                <strong>AI Assistant</strong>
                <span>
                  Ayaansh T Corp
                </span>
              </div>
            </div>

            <button
              type="button"
              className="ai-assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
            >
              <X size={19} />
            </button>
          </header>

          {/* MESSAGES */}
          <div className="ai-assistant-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === "user"
                    ? "ai-message ai-message-user"
                    : "ai-message ai-message-assistant"
                }
              >
                <p>{message.text}</p>

                {message.link && (
                  <a
                    href={message.link}
                    onClick={() => setIsOpen(false)}
                    className="ai-message-link"
                  >
                    {message.linkText}
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}

            {/* QUICK QUESTIONS */}
            {messages.length === 1 && (
              <div className="ai-quick-questions">
                <span>Try asking:</span>

                {quickQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() =>
                      sendMessage(question)
                    }
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INPUT */}
          <form
            className="ai-assistant-input"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about our services..."
              aria-label="Ask the AI Assistant"
            />

            <button
              type="submit"
              aria-label="Send message"
            >
              <Send size={17} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}