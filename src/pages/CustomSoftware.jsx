import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import "../styles/custom-software.css";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Application Development",
    text: "Build software around specific business requirements when an off-the-shelf product does not provide the right fit.",
  },
  {
    icon: Layers3,
    title: "Business Platforms",
    text: "Create focused platforms that connect people, processes, information and operational workflows.",
  },
  {
    icon: Database,
    title: "Data & Integrations",
    text: "Connect applications, systems and business data so information can move through the organization more effectively.",
  },
  {
    icon: Settings2,
    title: "Workflow Systems",
    text: "Translate manual or fragmented processes into structured digital workflows designed around how the business operates.",
  },
  {
    icon: ShieldCheck,
    title: "Access & Security",
    text: "Design application access and security controls according to the product's users, data and operating requirements.",
  },
  {
    icon: GitBranch,
    title: "Modernization & Enhancement",
    text: "Improve existing software, replace outdated workflows or extend platforms without rebuilding everything unnecessarily.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Identify the business problem, users, workflow and outcomes the software needs to support.",
  },
  {
    number: "02",
    title: "Design",
    text: "Define the application structure, user experience, data flow and technical direction.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build the core functionality and integrations required to deliver a usable solution.",
  },
  {
    number: "04",
    title: "Evolve",
    text: "Improve the software based on real usage, feedback and changing business requirements.",
  },
];

const solutionTypes = [
  "Internal business applications",
  "Customer portals",
  "Operations platforms",
  "Workflow management systems",
  "Data and reporting applications",
  "Business dashboards",
  "Specialized B2B software",
  "System integrations",
];

export default function CustomSoftware() {
  return (
    <main className="custom-software-page">

      {/* HERO */}
      <section className="custom-software-hero">
        <div className="container custom-software-hero-inner">
          <div className="custom-software-hero-copy">
            <div className="custom-software-kicker">
              TECHNOLOGY SOLUTIONS / CUSTOM SOFTWARE
            </div>

            <h1>
              Software designed
              <span>around your business.</span>
            </h1>

            <p>
              When standard software is not enough, we build
              practical applications around the specific
              workflows, users and requirements of the organization.
            </p>

            <div className="custom-software-actions">
              <a
                href="#capabilities"
                className="custom-software-button custom-software-button-secondary"
              >
                Explore Capabilities
              </a>

            </div>
          </div>

          <div className="custom-software-visual">
            <div className="custom-software-window">
              <div className="custom-software-window-top">
                <div className="custom-software-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>Business Platform</span>
              </div>

              <div className="custom-software-window-body">
                <aside className="custom-software-sidebar">
                  <div className="custom-software-side-active">
                    Overview
                  </div>

                  <div>Operations</div>
                  <div>Workflows</div>
                  <div>Reports</div>
                  <div>Settings</div>
                </aside>

                <div className="custom-software-workspace">
                  <div className="custom-software-workspace-heading">
                    <span>Operations</span>
                    <strong>Business Overview</strong>
                  </div>

                  <div className="custom-software-metric-grid">
                    <div>
                      <small>Active Workflows</small>
                      <strong>248</strong>
                    </div>

                    <div>
                      <small>Open Tasks</small>
                      <strong>36</strong>
                    </div>
                  </div>

                  <div className="custom-software-workflow">
                    <div className="custom-software-flow-line">
                      <span>Request</span>
                      <b>→</b>
                      <span>Review</span>
                      <b>→</b>
                      <span>Approval</span>
                    </div>

                    <div className="custom-software-progress">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="custom-software-section"
        id="capabilities"
      >
        <div className="container">
          <div className="custom-software-heading">
            <div>
              <div className="custom-software-kicker">
                WHAT WE BUILD
              </div>

              <h2>
                Software that fits
                <span>the way you work.</span>
              </h2>
            </div>

            <p>
              Custom software should solve a specific problem,
              not introduce unnecessary complexity. We focus on
              practical applications with a clear business purpose.
            </p>
          </div>

          <div className="custom-software-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="custom-software-capability-card"
                  key={capability.title}
                >
                  <div className="custom-software-icon">
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

      {/* WHEN CUSTOM SOFTWARE MAKES SENSE */}
      <section className="custom-software-dark">
        <div className="container custom-software-two-column">
          <div>
            <div className="custom-software-kicker custom-software-kicker-light">
              WHEN CUSTOM MAKES SENSE
            </div>

            <h2>
              Your process is
              <span>different for a reason.</span>
            </h2>

            <p>
              Custom development makes sense when your workflows,
              data, customer experience or operational requirements
              do not fit comfortably into generic software.
            </p>
          </div>

          <div className="custom-software-check-list">
            <div>
              <CheckCircle2 size={18} />
              <span>Existing software creates unnecessary manual work</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Multiple systems need to work together</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>A specialized customer or employee experience is required</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>The business needs functionality unavailable in standard products</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>An existing application needs modernization or extension</span>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY PROCESS */}
      <section className="custom-software-section">
        <div className="container">
          <div className="custom-software-heading">
            <div>
              <div className="custom-software-kicker">
                DELIVERY APPROACH
              </div>

              <h2>
                From requirement
                <span>to working software.</span>
              </h2>
            </div>

            <p>
              We keep the delivery process structured and
              outcome-focused so the software remains connected
              to the original business objective.
            </p>
          </div>

          <div className="custom-software-process-grid">
            {process.map((step) => (
              <article
                className="custom-software-process-card"
                key={step.number}
              >
                <div className="custom-software-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION TYPES */}
      <section className="custom-software-solutions">
        <div className="container">
          <div className="custom-software-solutions-inner">
            <div>
              <div className="custom-software-kicker">
                SOLUTION TYPES
              </div>

              <h2>
                Built for
                <span>specific use cases.</span>
              </h2>

              <p>
                The technology follows the requirement. The
                objective is to build only what creates meaningful
                value for the organization and its users.
              </p>
            </div>

            <div className="custom-software-solution-list">
              {solutionTypes.map((solution) => (
                <div key={solution}>
                  <CheckCircle2 size={17} />
                  <span>{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="custom-software-cta">
        <div className="container custom-software-cta-inner">
          <div>
            <div className="custom-software-kicker">HAVE A SPECIFIC REQUIREMENT?</div>
            <h2>Let's build software<span>that fits the problem.</span></h2>
            <p>Tell us what your current process looks like, where the friction exists and what the software needs to accomplish.</p>
          </div>
          <a href="#/contact" className="custom-software-button custom-software-button-primary">
            Discuss Your Software
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}