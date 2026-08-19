import React from "react";
import {
  ArrowRight,
  Globe2,
  Code2,
  MonitorSmartphone,
  Workflow,
  Search,
  PackageSearch,
  FileCheck2,
  Building2,
  Settings2,
  Lightbulb,
  Target,
  CheckCircle2,
} from "lucide-react";

const digitalServices = [
  {
    icon: Globe2,
    title: "Corporate Websites",
    text: "Professional websites designed to communicate your company, capabilities and value proposition clearly.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern responsive web experiences built around practical business requirements and long-term maintainability.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Modernization",
    text: "Improve an existing website's structure, presentation, responsiveness and overall digital experience.",
  },
  {
    icon: Workflow,
    title: "Digital Automation",
    text: "Identify repetitive digital processes and create practical workflows that reduce unnecessary manual effort.",
  },
];

const procurementServices = [
  {
    icon: Search,
    title: "RFQ Research",
    text: "Research opportunities and identify requirements that align with a business's capabilities and target markets.",
  },
  {
    icon: PackageSearch,
    title: "Supplier Sourcing",
    text: "Identify relevant suppliers and manufacturers based on specifications, availability and delivery requirements.",
  },
  {
    icon: FileCheck2,
    title: "Quote Collection",
    text: "Coordinate supplier outreach and collect pricing information to support informed bid decisions.",
  },
  {
    icon: Building2,
    title: "Procurement Support",
    text: "Provide practical research and sourcing assistance throughout the opportunity evaluation process.",
  },
];

const businessServices = [
  {
    title: "Digital Business Support",
    text: "Practical assistance for businesses establishing, improving or managing their digital presence.",
  },
  {
    title: "Business Research",
    text: "Structured research that helps identify suppliers, markets, opportunities and practical next steps.",
  },
  {
    title: "Process Support",
    text: "Help organize repeatable workflows and operational requirements into clearer processes.",
  },
];

const deliverySteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understand",
    text: "We start by understanding the requirement, objective and constraints.",
  },
  {
    number: "02",
    icon: Target,
    title: "Define",
    text: "We translate the requirement into a practical scope and execution plan.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Execute",
    text: "We focus on delivery, communication and the work required to move forward.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Deliver",
    text: "We aim for clear outcomes, usable deliverables and a straightforward handoff.",
  },
];

export default function WhatWeDo() {
  return (
    <main className="inner-page what-we-do-page">

      {/* PAGE HERO */}
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              WHAT WE DO
            </div>

            <h1>
              Capabilities built
              <span>around execution.</span>
            </h1>

            <p>
              Ayaansh T Corp combines digital solutions, procurement
              support and practical business services to help
              organizations move from requirement to delivery.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR APPROACH</span>

            <strong>
              Understand.
              <br />
              Build.
              <br />
              Execute.
            </strong>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS */}
      <section className="section capability-detail-section">
        <div className="container">

          <div className="detail-heading">
            <div>
              <div className="section-kicker">
                01 / DIGITAL SOLUTIONS
              </div>

              <h2>
                Build a stronger
                <span>digital presence.</span>
              </h2>
            </div>

            <p>
              From a new corporate website to modernization of an
              existing digital experience, we focus on clarity,
              performance and business purpose.
            </p>
          </div>

          <div className="detail-grid">
            {digitalServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="detail-card"
                  key={service.title}
                >
                  <div className="detail-card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#/contact">
                    Discuss a requirement
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCUREMENT */}
      <section className="section capability-detail-section procurement-detail">
        <div className="container">

          <div className="detail-heading">
            <div>
              <div className="section-kicker">
                02 / PROCUREMENT SUPPORT
              </div>

              <h2>
                Research faster.
                <span>Source smarter.</span>
              </h2>
            </div>

            <p>
              We provide practical RFQ research and sourcing support
              for businesses evaluating public-sector and government
              procurement opportunities.
            </p>
          </div>

          <div className="detail-grid">
            {procurementServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="detail-card dark-detail-card"
                  key={service.title}
                >
                  <div className="detail-card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#/contact">
                    Discuss a requirement
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS SERVICES */}
      <section className="section business-services-section">
        <div className="container">

          <div className="detail-heading">
            <div>
              <div className="section-kicker">
                03 / BUSINESS SERVICES
              </div>

              <h2>
                Practical support for
                <span>business operations.</span>
              </h2>
            </div>

            <p>
              Not every requirement needs a large system or complex
              engagement. Sometimes businesses need focused support
              that simply gets the work done.
            </p>
          </div>

          <div className="business-service-list">
            {businessServices.map((service, index) => (
              <article
                className="business-service-row"
                key={service.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <ArrowRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="delivery-section">
        <div className="container">

          <div className="delivery-heading">
            <div className="section-kicker light-kicker">
              HOW WE DELIVER
            </div>

            <h2>
              A straightforward
              <span>way of working.</span>
            </h2>

            <p>
              We keep the process focused so that the work can move
              forward without unnecessary complexity.
            </p>
          </div>

          <div className="delivery-grid">
            {deliverySteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="delivery-card"
                  key={step.number}
                >
                  <div className="delivery-number">
                    {step.number}
                  </div>

                  <Icon size={22} />

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="section-kicker">
              HAVE A REQUIREMENT?
            </div>

            <h2>
              Let's determine the
              <span>right way forward.</span>
            </h2>

            <p>
              Tell us what you're trying to accomplish and we'll
              discuss the most practical approach.
            </p>
          </div>

          <a
            href="#/contact"
            className="corporate-button primary large"
          >
            Start a Conversation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}