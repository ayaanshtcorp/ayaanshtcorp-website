import React from "react";
import {
  FileSearch,
  Users,
  Quote,
  Search,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

import "../styles/procurement-page.css";

const services = [
  {
    number: "01",
    title: "RFQ Research",
    description:
      "Research and evaluate applicable procurement opportunities, requirements and solicitation details to identify opportunities worth pursuing.",
    icon: FileSearch,
    href: "#/procurement/rfq-research",
  },
  {
    number: "02",
    title: "Supplier Sourcing",
    description:
      "Identify and coordinate with relevant suppliers to support product availability, pricing and delivery requirements.",
    icon: Users,
    href: "#/procurement/supplier-sourcing",
  },
  {
    number: "03",
    title: "Quote Support",
    description:
      "Organize supplier quotations, compare key commercial information and support a clear procurement decision.",
    icon: Quote,
    href: "#/procurement/quote-support",
  },
];

const workflow = [
  {
    number: "01",
    title: "Opportunity",
    text: "Identify a relevant procurement opportunity or requirement.",
  },
  {
    number: "02",
    title: "Requirement",
    text: "Review specifications, quantities, delivery and submission requirements.",
  },
  {
    number: "03",
    title: "Supplier",
    text: "Research and identify suitable supplier sources.",
  },
  {
    number: "04",
    title: "Quote",
    text: "Coordinate pricing, availability and delivery information.",
  },
  {
    number: "05",
    title: "Bid Support",
    text: "Organize the information required to support the final bid decision.",
  },
];

export default function Procurement() {
  return (
    <main className="procurement-page">

      {/* HERO */}
      <section className="procurement-hero">
        <div className="procurement-container">
          <span className="procurement-eyebrow">
            PROCUREMENT SUPPORT
          </span>

          <h1>
            Procurement research and sourcing support built around
            the requirement.
          </h1>

          <p className="procurement-hero-lead">
            We help businesses research applicable procurement
            opportunities, identify supplier sources and organize
            quote information needed to make informed bid and
            purchasing decisions.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="procurement-intro">
        <div className="procurement-container procurement-intro-grid">
          <div>
            <span className="procurement-section-label">
              PROCUREMENT
            </span>

            <h2>
              Procurement work requires more than finding an
              opportunity.
            </h2>
          </div>

          <div>
            <p>
              A useful procurement workflow starts with understanding
              the requirement, validating the opportunity and
              identifying realistic supplier options.
            </p>

            <p>
              Ayaansh T Corp provides focused research and sourcing
              support across these stages so procurement information
              is structured, practical and easier to act on.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="procurement-services">
        <div className="procurement-container">
          <div className="procurement-heading">
            <span className="procurement-section-label">
              OUR SERVICES
            </span>

            <h2>
              Three focused capabilities.
            </h2>

            <p>
              Each capability addresses a specific part of the
              procurement workflow.
            </p>
          </div>

          <div className="procurement-service-grid">
            {services.map(
              ({
                number,
                title,
                description,
                icon: Icon,
                href,
              }) => (
                <article
                  className="procurement-service-card"
                  key={title}
                >
                  <div className="procurement-service-top">
                    <span>{number}</span>

                    <div className="procurement-service-icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <a href={href}>
                    Explore capability
                    <ArrowRight size={15} />
                  </a>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="procurement-workflow">
        <div className="procurement-container">
          <div className="procurement-heading">
            <span className="procurement-section-label">
              HOW IT WORKS
            </span>

            <h2>
              A structured path from opportunity to bid support.
            </h2>
          </div>

          <div className="procurement-workflow-list">
            {workflow.map(({ number, title, text }) => (
              <div
                className="procurement-workflow-item"
                key={number}
              >
                <span className="procurement-workflow-number">
                  {number}
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT MODEL */}
      <section className="procurement-support">
        <div className="procurement-container procurement-support-grid">
          <div>
            <span className="procurement-section-label">
              EXECUTION FOCUS
            </span>

            <h2>
              Research first. Source faster. Make the bid decision
              with better information.
            </h2>
          </div>

          <div className="procurement-support-points">
            <div>
              <Search size={20} />
              <span>
                Focused opportunity and requirement research.
              </span>
            </div>

            <div>
              <Users size={20} />
              <span>
                Supplier identification and sourcing support.
              </span>
            </div>

            <div>
              <ClipboardCheck size={20} />
              <span>
                Structured review of quote and requirement
                information.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="procurement-end">
        <div className="procurement-container">
          <span className="procurement-section-label">
            PROCUREMENT SUPPORT
          </span>

          <h2>
            A practical procurement support model for businesses
            pursuing applicable opportunities.
          </h2>

          <p>
            Explore the individual capabilities to understand how
            each part of the procurement workflow can be supported.
          </p>
        </div>
      </section>

    </main>
  );
}