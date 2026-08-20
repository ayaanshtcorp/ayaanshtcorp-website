import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";

import "../styles/web-development.css";

const capabilities = [
  {
    icon: Globe2,
    title: "Corporate Websites",
    text: "Professional websites designed to establish credibility, communicate capabilities and generate business enquiries.",
  },
  {
    icon: Monitor,
    title: "Business Websites",
    text: "Responsive websites built around your services, customers, content and business objectives.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    text: "Browser-based applications and portals designed around specific operational requirements.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experiences",
    text: "Interfaces designed to work consistently across desktop, tablet and mobile devices.",
  },
  {
    icon: Layers3,
    title: "Website Modernization",
    text: "Improve an existing website's structure, usability, performance and visual presentation.",
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    text: "Practical improvements focused on speed, usability, maintainability and conversion.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your business, audience, objectives and current digital environment.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We define the structure, user experience, technology and delivery scope.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop the website or application with responsive, maintainable implementation.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test the experience, resolve issues and prepare the final solution for launch.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Cloud Platforms",
];

export default function WebDevelopment() {
  return (
    <main className="web-development-page">

      {/* HERO */}
      <section className="web-development-hero">
        <div className="container web-development-hero-inner">
          <div className="web-development-hero-copy">
            <div className="web-development-kicker">
              TECHNOLOGY SOLUTIONS / WEB DEVELOPMENT
            </div>

            <h1>
              Websites built for
              <span>business outcomes.</span>
            </h1>

            <p>
              We design and develop professional digital
              experiences that help businesses communicate
              clearly, establish credibility and create
              opportunities.
            </p>

            <div className="web-development-actions">
              <a
                href="#/contact"
                className="web-development-button web-development-button-primary"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>

              <a
                href="#capabilities"
                className="web-development-button web-development-button-secondary"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="web-development-hero-visual">
            <div className="web-development-browser">
              <div className="web-development-browser-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="web-development-browser-content">
                <div className="web-development-browser-line large" />
                <div className="web-development-browser-line" />
                <div className="web-development-browser-line short" />

                <div className="web-development-browser-grid">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="web-development-section"
        id="capabilities"
      >
        <div className="container">
          <div className="web-development-heading">
            <div>
              <div className="web-development-kicker">
                WHAT WE BUILD
              </div>

              <h2>
                Web solutions for
                <span>different business needs.</span>
              </h2>
            </div>

            <p>
              From a straightforward corporate website to
              a custom business application, we focus on
              selecting the right level of technology for
              the requirement.
            </p>
          </div>

          <div className="web-development-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="web-development-capability-card"
                  key={capability.title}
                >
                  <div className="web-development-icon">
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

      {/* APPROACH */}
      <section className="web-development-approach">
        <div className="container">
          <div className="web-development-heading web-development-heading-dark">
            <div>
              <div className="web-development-kicker web-development-kicker-light">
                OUR APPROACH
              </div>

              <h2>
                Technology should
                <span>serve the requirement.</span>
              </h2>
            </div>

            <p>
              We don't start by forcing a technology
              stack onto a business problem. We start with
              the requirement and determine the appropriate
              solution.
            </p>
          </div>

          <div className="web-development-process-grid">
            {process.map((step) => (
              <article
                className="web-development-process-card"
                key={step.number}
              >
                <div className="web-development-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="web-development-section">
        <div className="container web-development-two-column">
          <div>
            <div className="web-development-kicker">
              WHY AYAANSH T CORP
            </div>

            <h2>
              Practical development
              <span>without unnecessary complexity.</span>
            </h2>
          </div>

          <div className="web-development-check-list">
            <div>
              <CheckCircle2 size={19} />
              <span>Business-first requirements</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Responsive implementation</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Clear communication during delivery</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Maintainable technology choices</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Focused scope and practical execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="web-development-technology">
        <div className="container">
          <div className="web-development-technology-inner">
            <div>
              <div className="web-development-kicker">
                TECHNOLOGY
              </div>

              <h2>
                Modern tools.
                <span>Practical implementation.</span>
              </h2>

              <p>
                Technology choices depend on the
                requirements of the project. Our focus is
                on selecting tools that support reliable
                delivery and future maintainability.
              </p>
            </div>

            <div className="web-development-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="web-development-cta">
        <div className="container web-development-cta-inner">
          <div>
            <div className="web-development-kicker">
              HAVE A WEBSITE REQUIREMENT?
            </div>

            <h2>
              Let's build something
              <span>useful for your business.</span>
            </h2>

            <p>
              Tell us what you need to achieve and we'll
              discuss the most practical way to move
              forward.
            </p>
          </div>

          <a
            href="#/contact"
            className="web-development-button web-development-button-primary"
          >
            Start a Conversation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}