import React from "react";
import {
  Users,
  Search,
  PackageSearch,
  ShieldCheck,
  FileCheck2,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../styles/supplier-sourcing.css";

const sourcingAreas = [
  {
    icon: Search,
    title: "Supplier Discovery",
    text: "Identify suppliers capable of supporting the required product, specification, quantity and delivery requirements.",
  },
  {
    icon: PackageSearch,
    title: "Product Matching",
    text: "Compare supplier capabilities against the actual requirements instead of relying only on broad product categories.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Qualification",
    text: "Review supplier suitability, availability, responsiveness and relevant commercial considerations.",
  },
  {
    icon: Truck,
    title: "Delivery Alignment",
    text: "Consider lead times, shipping requirements and delivery locations when evaluating sourcing options.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "Review the solicitation and establish the exact sourcing requirement.",
  },
  {
    number: "02",
    title: "Identify",
    text: "Research potential suppliers and relevant product sources.",
  },
  {
    number: "03",
    title: "Contact",
    text: "Engage suppliers and request pricing, availability and lead-time information.",
  },
  {
    number: "04",
    title: "Compare",
    text: "Evaluate responses against specification, quantity, delivery and commercial requirements.",
  },
  {
    number: "05",
    title: "Organize",
    text: "Provide structured supplier information for the next bid or purchasing decision.",
  },
];

const outputs = [
  "Potential supplier identification",
  "Product and specification matching",
  "Supplier contact research",
  "Availability and lead-time research",
  "Pricing and quotation requests",
  "Supplier response tracking",
  "Freight and delivery considerations",
  "Sourcing comparison summaries",
];

export default function SupplierSourcing() {
  return (
    <main className="supplier-page">
      {/* HERO */}
      <section className="supplier-hero">
        <div className="supplier-container supplier-hero-inner">
          <div className="supplier-hero-copy">
            <div className="supplier-kicker">
              <span className="supplier-kicker-line" />
              SUPPLIER SOURCING
            </div>

            <h1>
              Find the right
              <span> supplier for the requirement.</span>
            </h1>

            <p>
              We research and engage potential suppliers to help match
              procurement requirements with commercially viable sourcing
              options.
            </p>

            <div className="supplier-hero-meta">
              <div>
                <strong>01</strong>
                <span>Research</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Identify</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Engage</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Compare</span>
              </div>
            </div>
          </div>

          <div className="supplier-hero-panel">
            <div className="supplier-panel-icon">
              <Users size={28} />
            </div>

            <span className="supplier-panel-label">
              SOURCING INTELLIGENCE
            </span>

            <h2>
              Requirement
              <br />
              to supplier.
            </h2>

            <div className="supplier-panel-divider" />

            <div className="supplier-panel-row">
              <span>Requirement</span>
              <strong>Matched</strong>
            </div>

            <div className="supplier-panel-row">
              <span>Supplier</span>
              <strong>Identified</strong>
            </div>

            <div className="supplier-panel-row">
              <span>Quote</span>
              <strong>Requested</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCING AREAS */}
      <section className="supplier-section">
        <div className="supplier-container">
          <div className="supplier-section-heading">
            <div className="supplier-kicker">
              <span className="supplier-kicker-line" />
              WHAT WE SOURCE
            </div>

            <h2>
              Sourcing focused on the
              <span> actual requirement.</span>
            </h2>

            <p>
              Supplier research is most effective when it starts with a
              precise understanding of the requirement. We evaluate sourcing
              options around the specification, quantity, delivery and
              commercial conditions.
            </p>
          </div>

          <div className="supplier-card-grid">
            {sourcingAreas.map(
              ({ icon: Icon, title, text }) => (
                <article className="supplier-card" key={title}>
                  <div className="supplier-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <div className="supplier-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* SOURCING PRINCIPLE */}
      <section className="supplier-section supplier-section-soft">
        <div className="supplier-container supplier-two-column">
          <div>
            <div className="supplier-kicker">
              <span className="supplier-kicker-line" />
              SOURCING PRINCIPLE
            </div>

            <h2>
              The requirement comes
              <span> first.</span>
            </h2>
          </div>

          <div className="supplier-principle-content">
            <p>
              We do not treat supplier sourcing as a simple vendor directory
              exercise. The objective is to identify sources that can
              realistically support the specific requirement.
            </p>

            <div className="supplier-principle-list">
              <div>
                <CheckCircle2 size={17} />
                <span>Specification alignment</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Quantity availability</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Lead-time considerations</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Commercial viability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUTS */}
      <section className="supplier-section">
        <div className="supplier-container">
          <div className="supplier-section-heading supplier-heading-centered">
            <div className="supplier-kicker">
              <span className="supplier-kicker-line" />
              SOURCING OUTPUT
            </div>

            <h2>
              Supplier information organized for
              <span> faster action.</span>
            </h2>

            <p>
              We organize sourcing information so procurement teams can
              quickly understand available options and determine the next
              step.
            </p>
          </div>

          <div className="supplier-output-grid">
            {outputs.map((item) => (
              <div className="supplier-output" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="supplier-workflow">
        <div className="supplier-container">
          <div className="supplier-section-heading supplier-heading-light">
            <div className="supplier-kicker supplier-kicker-light">
              <span className="supplier-kicker-line" />
              HOW WE WORK
            </div>

            <h2>
              A practical supplier sourcing
              <span> process.</span>
            </h2>

            <p>
              We move from requirement analysis to supplier comparison through
              a repeatable sourcing workflow.
            </p>
          </div>

          <div className="supplier-workflow-grid">
            {workflow.map((item) => (
              <div className="supplier-workflow-item" key={item.number}>
                <span className="supplier-workflow-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLIER EVALUATION */}
      <section className="supplier-section">
        <div className="supplier-container supplier-evaluation">
          <div className="supplier-evaluation-icon">
            <FileCheck2 size={25} />
          </div>

          <div>
            <div className="supplier-kicker">
              <span className="supplier-kicker-line" />
              SUPPLIER EVALUATION
            </div>

            <h2>
              A supplier is useful only if it can
              <span> support the requirement.</span>
            </h2>

            <p>
              Supplier responses are considered in the context of the
              requirement, including specifications, quantity, availability,
              lead time and commercial considerations.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="supplier-final">
        <div className="supplier-container">
          <div className="supplier-final-inner">
            <div>
              <span className="supplier-final-label">
                SUPPLIER SOURCING
              </span>

              <h2>
                Turn procurement requirements into
                <span> sourcing options.</span>
              </h2>
            </div>

            <a
              href="#/contact"
              className="supplier-final-link"
            >
              Discuss Supplier Sourcing
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}