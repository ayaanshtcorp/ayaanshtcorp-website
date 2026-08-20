import React from "react";
import {
  Search,
  FileSearch,
  ShieldCheck,
  Database,
  Filter,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../styles/rfq-research.css";

const researchAreas = [
  {
    icon: Database,
    title: "Opportunity Discovery",
    text: "Identify relevant federal RFQs and procurement opportunities across applicable government sources.",
  },
  {
    icon: Search,
    title: "Requirement Research",
    text: "Review solicitation details, specifications, quantities, delivery requirements and submission conditions.",
  },
  {
    icon: Filter,
    title: "Opportunity Screening",
    text: "Filter opportunities based on fit, eligibility, scope, timeline, requirements and commercial viability.",
  },
  {
    icon: FileSearch,
    title: "Solicitation Analysis",
    text: "Extract the information required to understand what the government is actually requesting.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Discover",
    text: "Locate potentially relevant RFQs and procurement opportunities.",
  },
  {
    number: "02",
    title: "Screen",
    text: "Evaluate eligibility, scope, timeline and opportunity fit.",
  },
  {
    number: "03",
    title: "Research",
    text: "Analyze specifications, quantities, delivery and submission requirements.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Identify missing information, compliance considerations and sourcing requirements.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "Provide structured opportunity intelligence ready for sourcing and bid decisions.",
  },
];

const deliverables = [
  "Solicitation and RFQ identification",
  "Part, NSN and specification research",
  "Quantity and delivery requirement extraction",
  "Set-aside and eligibility review",
  "NAICS and procurement classification review",
  "Submission requirement identification",
  "Opportunity screening and qualification",
  "Structured RFQ research summaries",
];

export default function RFQResearch() {
  return (
    <main className="rfq-page">
      {/* HERO */}
      <section className="rfq-hero">
        <div className="rfq-container rfq-hero-inner">
          <div className="rfq-hero-copy">
            <div className="rfq-kicker">
              <span className="rfq-kicker-line" />
              PROCUREMENT RESEARCH
            </div>

            <h1>
              RFQ Research for
              <span> Smarter Bid Decisions.</span>
            </h1>

            <p>
              We research federal procurement opportunities, analyze
              solicitation requirements and organize the information needed
              to determine whether an opportunity is worth pursuing.
            </p>

            <div className="rfq-hero-meta">
              <div>
                <strong>01</strong>
                <span>Discover</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Research</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Screen</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Deliver</span>
              </div>
            </div>
          </div>

          <div className="rfq-hero-panel">
            <div className="rfq-panel-icon">
              <FileSearch size={28} />
            </div>

            <span className="rfq-panel-label">
              RFQ INTELLIGENCE
            </span>

            <h2>
              From solicitation
              <br />
              to actionable research.
            </h2>

            <div className="rfq-panel-divider" />

            <div className="rfq-panel-row">
              <span>Opportunity</span>
              <strong>Identified</strong>
            </div>

            <div className="rfq-panel-row">
              <span>Requirements</span>
              <strong>Analyzed</strong>
            </div>

            <div className="rfq-panel-row">
              <span>Bid Fit</span>
              <strong>Screened</strong>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="rfq-section">
        <div className="rfq-container">
          <div className="rfq-section-heading">
            <div className="rfq-kicker">
              <span className="rfq-kicker-line" />
              WHAT WE RESEARCH
            </div>

            <h2>
              Better procurement research
              <span> starts with better information.</span>
            </h2>

            <p>
              Federal procurement opportunities can contain significant
              amounts of technical, commercial and compliance information.
              Our research process turns that information into a structured
              view of the opportunity.
            </p>
          </div>

          <div className="rfq-research-grid">
            {researchAreas.map(
              ({ icon: Icon, title, text }) => (
                <article className="rfq-research-card" key={title}>
                  <div className="rfq-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <div className="rfq-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="rfq-section rfq-section-soft">
        <div className="rfq-container rfq-two-column">
          <div>
            <div className="rfq-kicker">
              <span className="rfq-kicker-line" />
              PROCUREMENT SOURCES
            </div>

            <h2>
              Research across the
              <span> opportunity lifecycle.</span>
            </h2>
          </div>

          <div className="rfq-source-content">
            <p>
              Our research can support opportunities originating from
              federal procurement channels and applicable government
              purchasing environments.
            </p>

            <div className="rfq-source-list">
              <div>
                <CheckCircle2 size={17} />
                <span>Federal solicitation research</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>RFQ and request analysis</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Requirement and specification review</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Opportunity qualification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="rfq-section">
        <div className="rfq-container">
          <div className="rfq-section-heading rfq-heading-centered">
            <div className="rfq-kicker">
              <span className="rfq-kicker-line" />
              RESEARCH OUTPUT
            </div>

            <h2>
              Information organized for
              <span> faster decisions.</span>
            </h2>

            <p>
              Research is structured around the information required to
              evaluate an opportunity and move it into the next stage.
            </p>
          </div>

          <div className="rfq-deliverables">
            {deliverables.map((item) => (
              <div className="rfq-deliverable" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="rfq-workflow">
        <div className="rfq-container">
          <div className="rfq-section-heading rfq-heading-light">
            <div className="rfq-kicker rfq-kicker-light">
              <span className="rfq-kicker-line" />
              HOW WE WORK
            </div>

            <h2>
              A structured approach to
              <span> RFQ research.</span>
            </h2>

            <p>
              We move from discovery to decision-ready research through a
              repeatable process.
            </p>
          </div>

          <div className="rfq-workflow-grid">
            {workflow.map((item) => (
              <div className="rfq-workflow-item" key={item.number}>
                <span className="rfq-workflow-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="rfq-section">
        <div className="rfq-container rfq-qualification">
          <div className="rfq-qualification-icon">
            <ShieldCheck size={25} />
          </div>

          <div>
            <div className="rfq-kicker">
              <span className="rfq-kicker-line" />
              OPPORTUNITY SCREENING
            </div>

            <h2>
              Research should answer one important question:
              <span> should we pursue it?</span>
            </h2>

            <p>
              We help organize the facts required to make an informed
              bid-or-no-bid decision before significant sourcing and proposal
              effort is committed.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="rfq-final">
        <div className="rfq-container">
          <div className="rfq-final-inner">
            <div>
              <span className="rfq-final-label">
                PROCUREMENT RESEARCH
              </span>

              <h2>
                Turn procurement data into
                <span> actionable opportunity intelligence.</span>
              </h2>
            </div>

            <a
              href="#/contact"
              className="rfq-final-link"
            >
              Discuss Procurement Research
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}