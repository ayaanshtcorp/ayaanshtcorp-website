import React from "react";
import {
  ArrowRight,
  Building2,
  Landmark,
  BriefcaseBusiness,
  Factory,
  Laptop2,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    number: "01",
    icon: Landmark,
    title: "Public Sector",
    text: "Supporting businesses and organizations that participate in government and public-sector procurement.",
    capabilities: [
      "RFQ research",
      "Opportunity evaluation",
      "Supplier sourcing",
      "Quotation support",
    ],
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Small & Mid-Sized Business",
    text: "Helping growing businesses establish stronger digital foundations and access practical operational support.",
    capabilities: [
      "Corporate websites",
      "Digital presence",
      "Business research",
      "Process support",
    ],
  },
  {
    number: "03",
    icon: Laptop2,
    title: "Technology",
    text: "Digital and technology solutions designed around clear requirements rather than unnecessary complexity.",
    capabilities: [
      "Web development",
      "Website modernization",
      "Digital experiences",
      "Automation",
    ],
  },
  {
    number: "04",
    icon: Factory,
    title: "Manufacturing & Supply",
    text: "Supporting sourcing, supplier discovery and digital requirements across product and supply-oriented businesses.",
    capabilities: [
      "Supplier discovery",
      "Product research",
      "RFQ support",
      "Digital presence",
    ],
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "Consumer Products",
    text: "Developing and supporting brands and product ventures with a focus on positioning and digital presence.",
    capabilities: [
      "Brand websites",
      "Product presentation",
      "Digital marketing foundation",
      "Product ventures",
    ],
  },
  {
    number: "06",
    icon: Building2,
    title: "Professional Services",
    text: "Providing focused digital and business support to professional firms and service organizations.",
    capabilities: [
      "Corporate websites",
      "Lead-generation pages",
      "Business support",
      "Digital optimization",
    ],
  },
];

export default function Industries() {
  return (
    <main className="inner-page industries-page">

      {/* HERO */}
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              INDUSTRIES
            </div>

            <h1>
              Solutions that adapt
              <span>to the organization.</span>
            </h1>

            <p>
              Our capabilities are designed to work across different
              industries, business models and operating environments.
              The requirement determines the solution.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR APPROACH</span>

            <strong>
              Industry context.
              <br />
              Practical capability.
              <br />
              Clear execution.
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section industries-intro">
        <div className="container industries-intro-grid">
          <div>
            <div className="section-kicker">
              WHERE WE WORK
            </div>

            <h2>
              Different industries.
              <span>Common requirements.</span>
            </h2>
          </div>

          <div>
            <p>
              Organizations may operate in very different sectors,
              but many of their challenges are similar: establishing
              credibility, finding opportunities, improving digital
              operations and executing efficiently.
            </p>

            <p>
              Ayaansh T Corp brings a flexible set of capabilities
              that can be adapted to those requirements.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="section industry-directory">
        <div className="container">

          <div className="industry-directory-heading">
            <div>
              <div className="section-kicker">
                INDUSTRY CAPABILITIES
              </div>

              <h2>
                Built around
                <span>business needs.</span>
              </h2>
            </div>

            <p>
              Explore the areas where our digital, procurement and
              business capabilities can create practical value.
            </p>
          </div>

          <div className="industry-directory-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-directory-card"
                  key={industry.number}
                >
                  <div className="industry-directory-top">
                    <span>{industry.number}</span>

                    <Icon size={24} />
                  </div>

                  <h3>{industry.title}</h3>

                  <p>{industry.text}</p>

                  <div className="industry-capabilities">
                    {industry.capabilities.map((capability) => (
                      <div key={capability}>
                        <CheckCircle2 size={14} />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#/contact">
                    Discuss your requirement
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CROSS INDUSTRY */}
      <section className="cross-industry-section">
        <div className="container cross-industry-grid">

          <div>
            <div className="section-kicker light-kicker">
              CROSS-INDUSTRY CAPABILITY
            </div>

            <h2>
              One requirement
              <span>can need several capabilities.</span>
            </h2>

            <p>
              A business may need a website, sourcing assistance,
              supplier research and ongoing digital support at the
              same time. Our model allows these capabilities to work
              together rather than treating every requirement as a
              separate problem.
            </p>
          </div>

          <div className="cross-industry-flow">

            <div>
              <span>01</span>
              <strong>Business requirement</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Capability mapping</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Focused execution</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Practical outcome</strong>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">

          <div>
            <div className="section-kicker">
              YOUR INDUSTRY
            </div>

            <h2>
              Don't see your sector?
              <span>Start with the requirement.</span>
            </h2>

            <p>
              Our capabilities are not restricted to the industries
              listed above. Tell us what you need to accomplish and
              we'll evaluate the best approach.
            </p>
          </div>

          <a
            href="#/contact"
            className="corporate-button primary large"
          >
            Talk to Ayaansh T Corp
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}