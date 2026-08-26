import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Apple,
  Code2,
  Layers3,
  RefreshCw,
  Zap,
} from "lucide-react";

import "../styles/mobile-applications.css";

const capabilities = [
  {
    icon: Smartphone,
    title: "Business Mobile Apps",
    text: "Mobile applications designed around business workflows, customer experiences and operational requirements.",
  },
  {
    icon: Apple,
    title: "iOS & Android Experiences",
    text: "Mobile experiences planned for the platforms and audiences that matter to your business.",
  },
  {
    icon: Code2,
    title: "Custom Applications",
    text: "Purpose-built applications for specific products, services, internal operations or customer use cases.",
  },
  {
    icon: Layers3,
    title: "App & API Integration",
    text: "Connect mobile experiences with existing websites, APIs, business systems and cloud services.",
  },
  {
    icon: RefreshCw,
    title: "Application Modernization",
    text: "Improve an existing mobile application through better usability, structure, performance and maintainability.",
  },
  {
    icon: Zap,
    title: "Performance & Reliability",
    text: "Practical optimization focused on responsive experiences, stability and dependable application behavior.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We identify the users, business objectives, workflows and technical requirements behind the application.",
  },
  {
    number: "02",
    title: "Design",
    text: "We define the application structure, user experience, screens and interaction model.",
  },
  {
    number: "03",
    title: "Develop",
    text: "We build the application and integrate the required services, APIs and business logic.",
  },
  {
    number: "04",
    title: "Test & Launch",
    text: "We validate the experience, resolve issues and prepare the application for deployment.",
  },
];

const technologies = [
  "React Native",
  "JavaScript",
  "REST APIs",
  "Cloud Services",
  "Mobile UI",
  "Application Integration",
];

export default function MobileApplications() {
  return (
    <main className="mobile-applications-page">

      {/* HERO */}
      <section className="mobile-applications-hero">
        <div className="container mobile-applications-hero-inner">
          <div className="mobile-applications-hero-copy">
            <div className="mobile-applications-kicker">
              TECHNOLOGY SOLUTIONS / MOBILE APPLICATIONS
            </div>

            <h1>
              Mobile experiences
              <span>built around the user.</span>
            </h1>

            <p>
              We design and develop mobile applications that
              connect businesses with customers, employees and
              operational workflows through practical digital
              experiences.
            </p>

            <div className="mobile-applications-actions">
              <a
                href="#capabilities"
                className="mobile-applications-button mobile-applications-button-secondary"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="mobile-applications-hero-visual">
            <div className="mobile-applications-device mobile-applications-device-back">
              <div className="mobile-applications-device-screen">
                <div className="mobile-applications-screen-header" />
                <div className="mobile-applications-screen-title" />
                <div className="mobile-applications-screen-line" />
                <div className="mobile-applications-screen-line short" />

                <div className="mobile-applications-screen-cards">
                  <div />
                  <div />
                </div>
              </div>
            </div>

            <div className="mobile-applications-device mobile-applications-device-front">
              <div className="mobile-applications-device-notch" />

              <div className="mobile-applications-device-screen">
                <div className="mobile-applications-screen-header" />
                <div className="mobile-applications-screen-title" />
                <div className="mobile-applications-screen-line" />
                <div className="mobile-applications-screen-line short" />

                <div className="mobile-applications-screen-feature">
                  <Smartphone size={26} />
                </div>

                <div className="mobile-applications-screen-button">
                  Explore
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="mobile-applications-section"
        id="capabilities"
      >
        <div className="container">
          <div className="mobile-applications-heading">
            <div>
              <div className="mobile-applications-kicker">
                WHAT WE BUILD
              </div>

              <h2>
                Mobile solutions for
                <span>real business requirements.</span>
              </h2>
            </div>

            <p>
              The right mobile solution depends on the users,
              workflow and business objective. We focus on
              creating experiences that are useful rather than
              adding technology for its own sake.
            </p>
          </div>

          <div className="mobile-applications-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="mobile-applications-capability-card"
                  key={capability.title}
                >
                  <div className="mobile-applications-icon">
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

      {/* APPROACH */}
      <section className="mobile-applications-approach">
        <div className="container">
          <div className="mobile-applications-heading mobile-applications-heading-dark">
            <div>
              <div className="mobile-applications-kicker mobile-applications-kicker-light">
                OUR APPROACH
              </div>

              <h2>
                Start with the
                <span>mobile experience.</span>
              </h2>
            </div>

            <p>
              A successful application needs more than functional
              code. We consider the user's journey, business
              workflow, integration requirements and long-term
              maintainability.
            </p>
          </div>

          <div className="mobile-applications-process-grid">
            {process.map((step) => (
              <article
                className="mobile-applications-process-card"
                key={step.number}
              >
                <div className="mobile-applications-process-number">
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
      <section className="mobile-applications-section">
        <div className="container mobile-applications-two-column">
          <div>
            <div className="mobile-applications-kicker">
              WHY AYAANSH T CORP
            </div>

            <h2>
              Mobile development
              <span>focused on practical outcomes.</span>
            </h2>
          </div>

          <div className="mobile-applications-check-list">
            <div>
              <CheckCircle2 size={19} />
              <span>User-focused application planning</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Responsive and practical mobile experiences</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Integration with existing systems</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Maintainable technical architecture</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Clear communication throughout delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mobile-applications-technology">
        <div className="container">
          <div className="mobile-applications-technology-inner">
            <div>
              <div className="mobile-applications-kicker">
                TECHNOLOGY
              </div>

              <h2>
                Modern mobile tools.
                <span>Purposeful implementation.</span>
              </h2>

              <p>
                Technology selection depends on the application's
                requirements, target platforms and integration
                needs. We choose an approach that supports the
                product rather than constraining it.
              </p>
            </div>

            <div className="mobile-applications-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-applications-cta">
        <div className="container mobile-applications-cta-inner">
          <div>
            <div className="mobile-applications-kicker">HAVE A MOBILE REQUIREMENT?</div>
            <h2>Turn your idea into<span>a useful mobile experience.</span></h2>
            <p>Tell us what you want the application to achieve and we'll discuss the most practical way to build it.</p>
          </div>
          <a href="#/contact" className="mobile-applications-button mobile-applications-button-primary">
            Discuss Your App
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}