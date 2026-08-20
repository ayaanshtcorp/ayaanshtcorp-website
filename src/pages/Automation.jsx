import React from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  GitBranch,
  Layers3,
  RefreshCw,
  Workflow,
} from "lucide-react";

import "../styles/automation.css";

const capabilities = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    text: "Convert repetitive manual processes into structured digital workflows that move work forward with less intervention.",
  },
  {
    icon: Bot,
    title: "Intelligent Task Automation",
    text: "Automate routine actions, notifications and decisions where software can reliably reduce human effort.",
  },
  {
    icon: GitBranch,
    title: "System Integrations",
    text: "Connect applications and services so information can move between systems without unnecessary manual data entry.",
  },
  {
    icon: Clock3,
    title: "Operational Efficiency",
    text: "Identify time-consuming activities and redesign them around faster, more consistent execution.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Workflows",
    text: "Automate recurring tasks, scheduled activities and follow-up processes so important work does not depend on memory.",
  },
  {
    icon: Layers3,
    title: "Automation Architecture",
    text: "Structure automation workflows so they remain understandable, maintainable and adaptable as requirements change.",
  },
];

const process = [
  {
    number: "01",
    title: "Map",
    text: "Understand the current process, inputs, decisions, people and systems involved.",
  },
  {
    number: "02",
    title: "Identify",
    text: "Find the repetitive, predictable or error-prone activities where automation can create meaningful value.",
  },
  {
    number: "03",
    title: "Automate",
    text: "Build the workflow, integrations and rules required to execute the selected process.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Measure the result, remove unnecessary steps and continuously improve the workflow.",
  },
];

const automationAreas = [
  "Lead and enquiry workflows",
  "Customer notifications",
  "Data synchronization",
  "Document processing",
  "Approval workflows",
  "Reporting automation",
  "Internal task management",
  "Scheduled operations",
];

export default function Automation() {
  return (
    <main className="automation-page">

      {/* HERO */}
      <section className="automation-hero">
        <div className="container automation-hero-inner">
          <div className="automation-hero-copy">
            <div className="automation-kicker">
              TECHNOLOGY SOLUTIONS / AUTOMATION
            </div>

            <h1>
              Make work move
              <span>without the busywork.</span>
            </h1>

            <p>
              We design practical automation workflows that
              connect systems, reduce repetitive effort and help
              businesses execute routine processes more consistently.
            </p>

            <div className="automation-actions">
              <a
                href="#/contact"
                className="automation-button automation-button-primary"
              >
                Automate a Process
                <ArrowRight size={16} />
              </a>

              <a
                href="#capabilities"
                className="automation-button automation-button-secondary"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="automation-visual">
            <div className="automation-flow-panel">
              <div className="automation-flow-header">
                <span>Automated Workflow</span>
                <strong>ACTIVE</strong>
              </div>

              <div className="automation-flow">
                <div className="automation-flow-node">
                  <span className="automation-node-number">01</span>
                  <div>
                    <strong>Trigger</strong>
                    <small>New request received</small>
                  </div>
                </div>

                <div className="automation-flow-connector" />

                <div className="automation-flow-node">
                  <span className="automation-node-number">02</span>
                  <div>
                    <strong>Process</strong>
                    <small>Validate & route</small>
                  </div>
                </div>

                <div className="automation-flow-connector" />

                <div className="automation-flow-node">
                  <span className="automation-node-number">03</span>
                  <div>
                    <strong>Action</strong>
                    <small>Update system</small>
                  </div>
                </div>

                <div className="automation-flow-connector" />

                <div className="automation-flow-node automation-flow-node-final">
                  <span className="automation-node-number">04</span>
                  <div>
                    <strong>Complete</strong>
                    <small>Notify stakeholder</small>
                  </div>

                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="automation-section"
        id="capabilities"
      >
        <div className="container">
          <div className="automation-heading">
            <div>
              <div className="automation-kicker">
                WHAT WE AUTOMATE
              </div>

              <h2>
                Automation built around
                <span>how your business operates.</span>
              </h2>
            </div>

            <p>
              The objective is not automation for its own sake.
              We focus on processes where reducing manual effort
              creates measurable operational value.
            </p>
          </div>

          <div className="automation-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="automation-capability-card"
                  key={capability.title}
                >
                  <div className="automation-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{capability.title}</h3>

                  <p>{capability.text}</p>

                  <a href="#/contact">
                    Discuss this capability
                    <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY AUTOMATE */}
      <section className="automation-dark">
        <div className="container automation-two-column">
          <div>
            <div className="automation-kicker automation-kicker-light">
              WHY AUTOMATION
            </div>

            <h2>
              Remove friction
              <span>from everyday work.</span>
            </h2>

            <p>
              Repetitive processes consume time, introduce
              inconsistency and create unnecessary dependencies.
              Well-designed automation allows teams to spend more
              time on work that actually requires human judgment.
            </p>
          </div>

          <div className="automation-benefits">
            <div>
              <strong>01</strong>
              <span>Reduce repetitive manual work</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Improve process consistency</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Reduce unnecessary data entry</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Improve visibility across workflows</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Free teams to focus on higher-value work</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="automation-section">
        <div className="container">
          <div className="automation-heading">
            <div>
              <div className="automation-kicker">
                OUR APPROACH
              </div>

              <h2>
                Automate the right
                <span>process, not everything.</span>
              </h2>
            </div>

            <p>
              Good automation starts with understanding the
              process. We identify where automation makes sense
              before introducing technology.
            </p>
          </div>

          <div className="automation-process-grid">
            {process.map((step) => (
              <article
                className="automation-process-card"
                key={step.number}
              >
                <div className="automation-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION AREAS */}
      <section className="automation-solutions">
        <div className="container automation-solutions-inner">
          <div>
            <div className="automation-kicker">
              COMMON AUTOMATION AREAS
            </div>

            <h2>
              Start with the work
              <span>that repeats.</span>
            </h2>

            <p>
              Many automation opportunities begin with routine
              processes that happen repeatedly across sales,
              operations, administration and customer service.
            </p>
          </div>

          <div className="automation-area-list">
            {automationAreas.map((area) => (
              <div key={area}>
                <CheckCircle2 size={17} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="automation-cta">
        <div className="container automation-cta-inner">
          <div>
            <div className="automation-kicker">
              HAVE A REPETITIVE PROCESS?
            </div>

            <h2>
              Let's find what can
              <span>be automated.</span>
            </h2>

            <p>
              Show us the process, the systems involved and where
              your team spends unnecessary time. We'll identify a
              practical automation path.
            </p>
          </div>

          <a
            href="#/contact"
            className="automation-button automation-button-primary"
          >
            Discuss Automation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}