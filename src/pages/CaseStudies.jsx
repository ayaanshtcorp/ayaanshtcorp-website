import React from "react";
import {
  ArrowRight,
  Globe2,
  Search,
  Package,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const caseStudies = [
  {
    number: "01",
    category: "DIGITAL EXPERIENCE",
    icon: Globe2,
    title: "Corporate Digital Transformation",
    description:
      "A structured approach to strengthening a company's digital presence through improved information architecture, visual presentation, responsive design and clearer calls to action.",
    challenge:
      "An existing digital presence needed stronger corporate positioning and a more modern user experience.",
    approach: [
      "Reviewed existing information architecture",
      "Improved page hierarchy and content presentation",
      "Introduced a stronger corporate visual system",
      "Optimized responsive behavior across devices",
    ],
    outcome:
      "A more professional digital foundation designed to communicate capabilities clearly and support future growth.",
  },
  {
    number: "02",
    category: "WEBSITE MODERNIZATION",
    icon: BarChart3,
    title: "Website Enhancement & Modernization",
    description:
      "A modernization framework for improving an established website without losing its existing business identity, approved content or core functionality.",
    challenge:
      "The website required a stronger visual hierarchy, improved navigation and a more consistent presentation across sections.",
    approach: [
      "Evaluated existing page structure",
      "Improved typography and spacing",
      "Strengthened section hierarchy",
      "Enhanced mobile and responsive presentation",
    ],
    outcome:
      "A cleaner, more contemporary experience while maintaining the underlying business structure.",
  },
  {
    number: "03",
    category: "PROCUREMENT SUPPORT",
    icon: Search,
    title: "RFQ Research & Supplier Sourcing",
    description:
      "A structured sourcing workflow designed to help businesses evaluate procurement opportunities, identify relevant suppliers and collect competitive quotation information.",
    challenge:
      "Multiple opportunities required rapid research, supplier identification and pricing evaluation within constrained timelines.",
    approach: [
      "Reviewed opportunity requirements",
      "Identified relevant supplier categories",
      "Conducted supplier outreach",
      "Collected and compared quotation information",
    ],
    outcome:
      "A repeatable research and sourcing workflow designed to support faster bid decisions.",
  },
  {
    number: "04",
    category: "PRODUCT DEVELOPMENT",
    icon: Package,
    title: "Product & Brand Development",
    description:
      "Developing product ventures with a focus on brand positioning, digital presence and a foundation for future commercial growth.",
    challenge:
      "A new product concept required a clear identity and digital foundation before broader market expansion.",
    approach: [
      "Defined digital brand positioning",
      "Developed product presentation",
      "Established a digital presence",
      "Created a foundation for future product expansion",
    ],
    outcome:
      "A structured platform for developing and presenting a product venture digitally.",
  },
];

const methodology = [
  "Understand the starting point",
  "Identify the highest-impact improvements",
  "Design a practical execution plan",
  "Implement and validate",
  "Create a foundation for the next stage",
];

export default function CaseStudies() {
  return (
    <main className="inner-page case-studies-page">

      {/* HERO */}
      <section className="inner-hero case-studies-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              CASE STUDIES
            </div>

            <h1>
              Turning requirements
              <span>into practical outcomes.</span>
            </h1>

            <p>
              Our work spans digital experiences, website
              modernization, procurement support and product
              development. These examples demonstrate the way we
              approach problems and execute solutions.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR FOCUS</span>

            <strong>
              Requirement.
              <br />
              Execution.
              <br />
              Outcome.
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section case-study-intro">
        <div className="container case-study-intro-grid">

          <div>
            <div className="section-kicker">
              SELECTED WORK
            </div>

            <h2>
              Practical examples of
              <span>how we work.</span>
            </h2>
          </div>

          <div>
            <p>
              Case studies are presented around the problem,
              approach and outcome rather than simply listing
              deliverables.
            </p>

            <p>
              This allows prospective partners to understand how
              Ayaansh T Corp approaches real business requirements.
            </p>
          </div>

        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-study-directory">
        <div className="container">

          {caseStudies.map((study, index) => {
            const Icon = study.icon;

            return (
              <article
                className={`full-case-study ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
                key={study.number}
              >

                <div className="case-study-visual">
                  <div className="case-study-visual-number">
                    {study.number}
                  </div>

                  <Icon size={55} />

                  <span>{study.category}</span>
                </div>

                <div className="full-case-study-content">

                  <div className="section-kicker">
                    {study.category}
                  </div>

                  <h2>{study.title}</h2>

                  <p className="case-study-description">
                    {study.description}
                  </p>

                  <div className="case-study-detail">
                    <h4>THE REQUIREMENT</h4>

                    <p>{study.challenge}</p>
                  </div>

                  <div className="case-study-detail">
                    <h4>THE APPROACH</h4>

                    <div className="case-study-checklist">
                      {study.approach.map((item) => (
                        <div key={item}>
                          <CheckCircle2 size={15} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="case-study-detail outcome">
                    <h4>THE OUTCOME</h4>

                    <p>{study.outcome}</p>
                  </div>


                </div>

              </article>
            );
          })}

        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="case-methodology-section">
        <div className="container">

          <div className="methodology-heading">
            <div>
              <div className="section-kicker light-kicker">
                OUR METHODOLOGY
              </div>

              <h2>
                The work may change.
                <span>The discipline doesn't.</span>
              </h2>
            </div>

            <p>
              Across different engagements, we maintain a consistent
              focus on understanding the requirement, prioritizing
              the right work and delivering something useful.
            </p>
          </div>

          <div className="methodology-list">
            {methodology.map((step, index) => (
              <div
                className="methodology-item"
                key={step}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{step}</strong>

                <ArrowRight size={17} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">

          <div>
            <div className="section-kicker">
              YOUR REQUIREMENT
            </div>

            <h2>
              Have a challenge?
              <span>Let's work through it.</span>
            </h2>

            <p>
              Tell us what you're trying to achieve and we can
              determine whether our capabilities are a good fit.
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