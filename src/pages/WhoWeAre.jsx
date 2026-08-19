import React from "react";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Compass,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    icon: Target,
    number: "01",
    title: "Purpose driven",
    text: "We begin with the outcome the organization is trying to achieve and work backward from there.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Practical by design",
    text: "We favor solutions that are understandable, implementable and useful in the real world.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Reliable execution",
    text: "Clear communication, defined deliverables and consistent follow-through are central to how we work.",
  },
  {
    icon: Users,
    number: "04",
    title: "Built for partnership",
    text: "We aim to become a dependable extension of the organizations and teams we support.",
  },
];

const workingStyle = [
  "Understand the business requirement",
  "Clarify the expected outcome",
  "Define a practical scope",
  "Execute with clear communication",
  "Deliver usable results",
  "Continue improving where required",
];

export default function WhoWeAre() {
  return (
    <main className="inner-page who-we-are-page">

      {/* HERO */}
      <section className="inner-hero who-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              WHO WE ARE
            </div>

            <h1>
              A company built around
              <span>practical execution.</span>
            </h1>

            <p>
              Ayaansh T Corp brings together technology, digital
              services, procurement support and product ventures
              under a common operating philosophy: understand the
              requirement, execute with clarity and create useful
              outcomes.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR BELIEF</span>

            <strong>
              Good ideas
              <br />
              become valuable
              <br />
              through execution.
            </strong>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section company-story-section">
        <div className="container company-story-grid">
          <div>
            <div className="section-kicker">
              OUR COMPANY
            </div>

            <h2>
              Built to solve
              <span>real requirements.</span>
            </h2>
          </div>

          <div className="company-story-copy">
            <p>
              Ayaansh T Corp is a diversified business focused on
              practical technology solutions, digital services,
              procurement support and product development.
            </p>

            <p>
              Rather than building around a single narrow capability,
              we operate across complementary areas where businesses
              frequently need execution support.
            </p>

            <p>
              This gives us the flexibility to work on a focused
              requirement while also developing longer-term products
              and ventures.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mission-section">
        <div className="container mission-grid">

          <article className="mission-card">
            <div className="mission-icon">
              <Target size={23} />
            </div>

            <div className="section-kicker">
              OUR MISSION
            </div>

            <h2>
              Turn business requirements
              <span>into practical outcomes.</span>
            </h2>

            <p>
              Our mission is to help businesses and organizations
              move from ideas, requirements and opportunities to
              clear, executable solutions.
            </p>
          </article>

          <article className="mission-card mission-card-light">
            <div className="mission-icon">
              <Eye size={23} />
            </div>

            <div className="section-kicker">
              OUR VISION
            </div>

            <h2>
              Build a diversified company
              <span>with lasting value.</span>
            </h2>

            <p>
              We are building Ayaansh T Corp as a long-term platform
              for technology services, business support and products
              that can grow beyond individual projects.
            </p>
          </article>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section principles-section">
        <div className="container">

          <div className="section-heading-large">
            <div>
              <div className="section-kicker">
                WHAT MAKES US RELIABLE
              </div>

              <h2>
                Principles that guide
                <span>how we work.</span>
              </h2>
            </div>

            <p>
              Reliability is not just about delivering a project.
              It is about how clearly we communicate, how realistically
              we scope the work and how consistently we follow through.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="principle-card"
                  key={principle.number}
                >
                  <div className="principle-top">
                    <span>{principle.number}</span>

                    <Icon size={22} />
                  </div>

                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how-we-work-section">
        <div className="container how-we-work-grid">

          <div>
            <div className="section-kicker light-kicker">
              HOW WE WORK
            </div>

            <h2>
              Clear thinking.
              <span>Focused execution.</span>
            </h2>

            <p>
              We keep our working model straightforward. Every
              engagement should have a clear purpose, a defined
              direction and an outcome that can be understood.
            </p>
          </div>

          <div className="working-style-list">
            {workingStyle.map((item, index) => (
              <div
                className="working-style-item"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <CheckCircle2 size={17} />

                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LONG TERM */}
      <section className="section long-term-section">
        <div className="container long-term-grid">

          <div>
            <div className="section-kicker">
              LOOKING AHEAD
            </div>

            <h2>
              From services
              <span>to ventures.</span>
            </h2>
          </div>

          <div>
            <p>
              Services are one part of the Ayaansh T Corp model.
              We are also developing products and brands that can
              operate independently and create long-term value.
            </p>

            <p>
              This includes launched ventures such as Leaf Alchemy
              and upcoming opportunities such as Classic Leaf.
            </p>

            <a
              href="#/products"
              className="text-link"
            >
              Explore our products
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">

          <div>
            <div className="section-kicker">
              WORK WITH US
            </div>

            <h2>
              Have a business requirement?
              <span>Let's talk.</span>
            </h2>

            <p>
              Whether you need a digital solution, procurement
              support or help evaluating an opportunity, start with
              the requirement.
            </p>
          </div>

          <a
            href="#/contact"
            className="corporate-button primary large"
          >
            Contact Ayaansh T Corp
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}