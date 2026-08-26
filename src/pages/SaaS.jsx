import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Layers3,
  ShieldCheck,
  Workflow,
  BarChart3,
  RefreshCw,
} from "lucide-react";

import "../styles/saas.css";

const capabilities = [
  {
    icon: Cloud,
    title: "SaaS Product Development",
    text: "Build practical cloud-based software products around a defined customer problem, workflow or business opportunity.",
  },
  {
    icon: Layers3,
    title: "Product Architecture",
    text: "Structure applications for maintainability, scalability and the evolving requirements of a growing software product.",
  },
  {
    icon: Workflow,
    title: "Workflow & Automation",
    text: "Turn repetitive business processes into connected digital workflows that reduce manual effort.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Access",
    text: "Plan authentication, authorization and application access around the requirements of the product and its users.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    text: "Create useful operational views that help users understand activity, performance and business information.",
  },
  {
    icon: RefreshCw,
    title: "Product Improvement",
    text: "Modernize, refine and extend existing SaaS products as requirements, users and business priorities evolve.",
  },
];

const process = [
  {
    number: "01",
    title: "Define",
    text: "Clarify the product objective, users, core workflow and minimum functionality required to create value.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Translate the requirements into a practical application structure, user experience and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the product features, business logic, interfaces and integrations required for the solution.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Use feedback and real usage to refine the product and prioritize the next meaningful improvements.",
  },
];

const useCases = [
  "Customer portals",
  "Internal business platforms",
  "Operations management",
  "Subscription products",
  "Reporting platforms",
  "Workflow applications",
  "B2B software",
  "Data-driven dashboards",
];

export default function SaaS() {
  return (
    <main className="saas-page">

      {/* HERO */}
      <section className="saas-hero">
        <div className="container saas-hero-inner">
          <div className="saas-hero-copy">
            <div className="saas-kicker">
              TECHNOLOGY SOLUTIONS / SAAS
            </div>

            <h1>
              Software products
              <span>built for real use.</span>
            </h1>

            <p>
              We help turn software ideas and business workflows
              into practical SaaS products that customers,
              employees and organizations can actually use.
            </p>

            <div className="saas-actions">
              <a
                href="#capabilities"
                className="saas-button saas-button-secondary"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="saas-hero-panel">
            <div className="saas-dashboard">
              <div className="saas-dashboard-top">
                <div className="saas-dashboard-brand">
                  SaaS Platform
                </div>

                <div className="saas-dashboard-status">
                  Live
                </div>
              </div>

              <div className="saas-dashboard-main">
                <div className="saas-dashboard-heading">
                  <span>Overview</span>
                  <strong>Business performance</strong>
                </div>

                <div className="saas-dashboard-metrics">
                  <div>
                    <small>Active Users</small>
                    <strong>12,480</strong>
                  </div>

                  <div>
                    <small>Workflows</small>
                    <strong>842</strong>
                  </div>

                  <div>
                    <small>Success Rate</small>
                    <strong>99.4%</strong>
                  </div>
                </div>

                <div className="saas-dashboard-chart">
                  <div className="saas-chart-bar one" />
                  <div className="saas-chart-bar two" />
                  <div className="saas-chart-bar three" />
                  <div className="saas-chart-bar four" />
                  <div className="saas-chart-bar five" />
                  <div className="saas-chart-bar six" />
                  <div className="saas-chart-bar seven" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="saas-section"
        id="capabilities"
      >
        <div className="container">
          <div className="saas-heading">
            <div>
              <div className="saas-kicker">
                WHAT WE BUILD
              </div>

              <h2>
                SaaS solutions around
                <span>business requirements.</span>
              </h2>
            </div>

            <p>
              We focus on the product behind the technology:
              what the software needs to accomplish, who will
              use it and how it fits into the wider business.
            </p>
          </div>

          <div className="saas-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="saas-capability-card"
                  key={capability.title}
                >
                  <div className="saas-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{capability.title}</h3>

                  <p>{capability.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT APPROACH */}
      <section className="saas-approach">
        <div className="container">
          <div className="saas-heading saas-heading-dark">
            <div>
              <div className="saas-kicker saas-kicker-light">
                PRODUCT APPROACH
              </div>

              <h2>
                Build the right product.
                <span>Then make it better.</span>
              </h2>
            </div>

            <p>
              SaaS products evolve continuously. We use a
              practical delivery approach that allows the product
              to start focused and improve as real requirements
              become clearer.
            </p>
          </div>

          <div className="saas-process-grid">
            {process.map((step) => (
              <article
                className="saas-process-card"
                key={step.number}
              >
                <div className="saas-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="saas-section">
        <div className="container saas-two-column">
          <div>
            <div className="saas-kicker">
              WHERE SAAS FITS
            </div>

            <h2>
              Software for
              <span>different business models.</span>
            </h2>

            <p className="saas-two-column-copy">
              SaaS can support customer-facing products,
              internal operations and specialized business
              workflows. The right architecture starts with
              understanding the use case.
            </p>
          </div>

          <div className="saas-use-case-list">
            {useCases.map((useCase) => (
              <div key={useCase}>
                <CheckCircle2 size={18} />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="saas-technology">
        <div className="container saas-technology-inner">
          <div>
            <div className="saas-kicker">
              ENGINEERING MINDSET
            </div>

            <h2>
              Practical architecture.
              <span>Long-term thinking.</span>
            </h2>

            <p>
              A SaaS product needs to work today while leaving
              room for tomorrow. We consider usability,
              maintainability, integration and scalability when
              shaping the solution.
            </p>
          </div>

          <div className="saas-principles">
            <div>
              <strong>01</strong>
              <span>Simple where possible</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Scalable where necessary</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Integrated with the business</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Designed for continuous improvement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="saas-cta">
        <div className="container saas-cta-inner">
          <div>
            <div className="saas-kicker">HAVE A SOFTWARE IDEA?</div>
            <h2>Let's turn the idea<span>into a practical product.</span></h2>
            <p>Tell us what you want the software to accomplish and we'll determine the most practical path forward.</p>
          </div>
          <a href="#/contact" className="saas-button saas-button-primary">
            Discuss Your SaaS
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}