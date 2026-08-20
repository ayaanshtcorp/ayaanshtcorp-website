import React from "react";
import {
  FileText,
  Search,
  CheckCircle2,
  MessageSquare,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

import "../styles/quote-support.css";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Review the requirement, specifications, quantities, delivery requirements and submission conditions.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Validate",
    text: "Identify critical requirements, missing information, compliance considerations and quote dependencies.",
    icon: Search,
  },
  {
    number: "03",
    title: "Coordinate",
    text: "Coordinate with suppliers and gather the information required to build a responsive quotation.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Review",
    text: "Compare supplier responses, pricing, lead times and requirements before finalizing the quote.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Support",
    text: "Provide organized quote information that can support the final bid or purchasing decision.",
    icon: CheckCircle2,
  },
];

const capabilities = [
  "Requirement review",
  "Specification validation",
  "Supplier quote coordination",
  "Pricing comparison",
  "Lead-time review",
  "Quote documentation",
];

export default function QuoteSupport() {
  return (
    <main className="quote-support-page">
      {/* HERO */}
      <section className="quote-support-hero">
        <div className="quote-support-container">
          <div className="quote-support-eyebrow">
            PROCUREMENT SUPPORT
          </div>

          <h1>Quote Support</h1>

          <p className="quote-support-lead">
            Organized quote support that helps turn procurement
            requirements into clear, comparable and bid-ready
            information.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="quote-support-intro">
        <div className="quote-support-container quote-support-intro-grid">
          <div>
            <span className="quote-support-section-label">
              QUOTE MANAGEMENT
            </span>

            <h2>
              Better quote information leads to better decisions.
            </h2>
          </div>

          <div>
            <p>
              Procurement requirements can involve multiple
              specifications, suppliers, quantities, delivery
              requirements and pricing variables.
            </p>

            <p>
              We help organize and coordinate the quote process so
              relevant information is easier to evaluate and use in
              the final procurement or bidding workflow.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="quote-support-capabilities">
        <div className="quote-support-container">
          <div className="quote-support-section-heading">
            <span className="quote-support-section-label">
              WHAT WE SUPPORT
            </span>

            <h2>
              Practical support across the quote process.
            </h2>

            <p>
              We focus on the information required to move from
              procurement requirement to usable supplier quotation.
            </p>
          </div>

          <div className="quote-support-capability-grid">
            {capabilities.map((capability, index) => (
              <div
                className="quote-support-capability-card"
                key={capability}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="quote-support-process">
        <div className="quote-support-container">
          <div className="quote-support-section-heading">
            <span className="quote-support-section-label">
              OUR PROCESS
            </span>

            <h2>
              From requirement to organized quote information.
            </h2>
          </div>

          <div className="quote-support-process-list">
            {processSteps.map(
              ({ number, title, text, icon: Icon }) => (
                <div
                  className="quote-support-process-item"
                  key={number}
                >
                  <div className="quote-support-process-number">
                    {number}
                  </div>

                  <div className="quote-support-process-icon">
                    <Icon size={22} />
                  </div>

                  <div className="quote-support-process-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="quote-support-value">
        <div className="quote-support-container quote-support-value-grid">
          <div>
            <span className="quote-support-section-label">
              WHY QUOTE SUPPORT
            </span>

            <h2>
              Keep procurement information clear, structured and
              actionable.
            </h2>
          </div>

          <div className="quote-support-value-points">
            <div>
              <CheckCircle2 size={20} />
              <span>Reduce quote-related information gaps.</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Make supplier responses easier to compare.</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Identify issues before bid submission.</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Keep the procurement workflow organized.</span>
            </div>
          </div>
        </div>
      </section>

      {/* END */}
      <section className="quote-support-end">
        <div className="quote-support-container">
          <span className="quote-support-section-label">
            PROCUREMENT SUPPORT
          </span>

          <h2>
            Need help organizing a procurement requirement?
          </h2>

          <p>
            We can help review the requirement and determine the
            appropriate procurement support approach.
          </p>

          <a href="#/contact" className="quote-support-link">
            Discuss Procurement Support
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}