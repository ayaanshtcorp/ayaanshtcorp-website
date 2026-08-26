import React from "react";
import {
  ArrowRight,
  Globe2,
  Code2,
  Smartphone,
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

import "../styles/solutions.css";

const digitalServices = [
  {
    icon: Globe2,
    title: "Web Development",
    text: "Corporate websites and responsive digital experiences built around your business objectives.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Mobile experiences designed to connect customers, teams and business workflows.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Business applications, portals and software designed around specific operational requirements.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Practical workflow automation that reduces repetitive work and connects business processes.",
  },
  {
    icon: Building2,
    title: "SaaS Solutions",
    text: "Scalable software products designed for recurring use, operational efficiency and growth.",
  },
  {
    icon: Search,
    title: "SEO & Digital Growth",
    text: "Digital visibility and optimization focused on attracting the right audience and opportunities.",
  },
];

const procurementServices = [
  {
    icon: Search,
    title: "RFQ Research",
    text: "Research procurement opportunities and identify requirements aligned with business capabilities.",
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
    text: "Focused assistance for businesses establishing, improving or managing their digital presence.",
  },
  {
    title: "Business Research",
    text: "Structured research covering suppliers, markets, opportunities and practical next steps.",
  },
  {
    title: "Process Support",
    text: "Organize recurring workflows and operational requirements into clearer, repeatable processes.",
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

function ServiceCard({ service, dark = false }) {
  const Icon = service.icon;

  return (
    <article
      className={`solutions-service-card ${
        dark ? "solutions-service-card-dark" : ""
      }`}
    >
      <div className="solutions-service-icon">
        <Icon size={22} />
      </div>

      <div className="solutions-service-content">
        <h3>{service.title}</h3>

        <p>{service.text}</p>
      </div>

    </article>
  );
}

export default function WhatWeDo() {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="container solutions-hero-inner">
          <div className="solutions-hero-copy">
            <div className="solutions-kicker">
              WHAT WE DO
            </div>

            <h1>
              Technology and services
              <span>built around execution.</span>
            </h1>

            <p>
              We combine digital development, automation,
              procurement research and practical business
              support to help organizations move from
              requirement to delivery.
            </p>

            <div className="solutions-hero-actions">
              <a
                href="#digital-solutions"
                className="solutions-button solutions-button-secondary"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="solutions-hero-panel">
            <span>OUR APPROACH</span>

            <div className="solutions-hero-panel-line">
              <strong>01</strong>
              <div>
                <b>Understand</b>
                <small>Business requirement</small>
              </div>
            </div>

            <div className="solutions-hero-panel-line">
              <strong>02</strong>
              <div>
                <b>Build</b>
                <small>Practical solution</small>
              </div>
            </div>

            <div className="solutions-hero-panel-line">
              <strong>03</strong>
              <div>
                <b>Execute</b>
                <small>Clear delivery</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="solutions-section"
        id="digital-solutions"
      >
        <div className="container">
          <div className="solutions-section-heading">
            <div>
              <div className="solutions-kicker">
                01 / DIGITAL SOLUTIONS
              </div>

              <h2>
                Digital capabilities
                <span>for modern business.</span>
              </h2>
            </div>

            <p>
              From a new digital presence to custom
              applications and automation, we focus on
              solutions that serve a real business purpose.
            </p>
          </div>

          <div className="solutions-service-grid">
            {digitalServices.map((service) => (
              <ServiceCard
                service={service}
                key={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="solutions-section solutions-procurement"
        id="procurement"
      >
        <div className="container">
          <div className="solutions-section-heading">
            <div>
              <div className="solutions-kicker">
                02 / PROCUREMENT
              </div>

              <h2>
                Research faster.
                <span>Source smarter.</span>
              </h2>
            </div>

            <p>
              Practical procurement research and supplier
              sourcing support for businesses evaluating
              applicable public-sector and government
              opportunities.
            </p>
          </div>

          <div className="solutions-service-grid">
            {procurementServices.map((service) => (
              <ServiceCard
                service={service}
                dark
                key={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="solutions-section solutions-business"
        id="business-services"
      >
        <div className="container">
          <div className="solutions-section-heading">
            <div>
              <div className="solutions-kicker">
                03 / BUSINESS SERVICES
              </div>

              <h2>
                Practical support for
                <span>business operations.</span>
              </h2>
            </div>

            <p>
              Not every requirement needs a large system.
              Sometimes businesses need focused support
              that simply gets the work done.
            </p>
          </div>

          <div className="solutions-business-list">
            {businessServices.map((service, index) => (
              <div
                className="solutions-business-row"
                key={service.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <ArrowRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-delivery">
        <div className="container">
          <div className="solutions-delivery-heading">
            <div>
              <div className="solutions-kicker solutions-kicker-light">
                HOW WE DELIVER
              </div>

              <h2>
                A straightforward
                <span>way of working.</span>
              </h2>
            </div>

            <p>
              We keep the process focused so that the
              work can move forward without unnecessary
              complexity.
            </p>
          </div>

          <div className="solutions-delivery-grid">
            {deliverySteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="solutions-delivery-card"
                  key={step.number}
                >
                  <div className="solutions-delivery-number">
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

      <section className="solutions-cta">
        <div className="container solutions-cta-inner">
          <div>
            <div className="solutions-kicker">HAVE A REQUIREMENT?</div>
            <h2>Let's determine the<span>right way forward.</span></h2>
            <p>Tell us what you're trying to accomplish and we'll discuss the most practical approach.</p>
          </div>
          <a href="#/contact" className="solutions-button solutions-button-primary">
            Discuss Your Project
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}