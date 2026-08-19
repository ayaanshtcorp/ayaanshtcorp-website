import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Workflow,
  Package,
  Search,
  ShieldCheck,
  Zap,
  Building2,
  BriefcaseBusiness,
  Factory,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Digital Solutions",
    text: "Websites, digital experiences and practical technology solutions designed around business objectives.",
  },
  {
    number: "02",
    icon: Search,
    title: "Procurement Support",
    text: "RFQ research, supplier sourcing and quotation support for businesses pursuing public-sector opportunities.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Services",
    text: "Focused digital and operational support that helps organizations establish, improve and operate efficiently.",
  },
  {
    number: "04",
    icon: Package,
    title: "Products & Ventures",
    text: "Products and brands developed through Ayaansh T Corp, from launched ventures to upcoming opportunities.",
  },
];

const reliability = [
  {
    icon: Zap,
    title: "Execution focused",
    text: "We prioritize practical delivery, clear scope and measurable outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Practical solutions",
    text: "We focus on solutions that can actually be implemented, maintained and used.",
  },
  {
    icon: Workflow,
    title: "Flexible engagement",
    text: "Work with us on a focused project or as an ongoing business support partner.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Public Sector",
    text: "Supporting organizations pursuing government and public-sector opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    text: "Digital and operational support for small and mid-sized businesses.",
  },
  {
    icon: Factory,
    title: "Technology",
    text: "Web, digital and technology-focused solutions built around practical requirements.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="corporate-hero">
        <div className="hero-grid-pattern" />

        <div className="container corporate-hero-inner">
          <div className="hero-content">
            <div className="corporate-eyebrow">
              TECHNOLOGY • DIGITAL • PROCUREMENT
            </div>

            <h1>
              Building practical solutions
              <span>for businesses that want to move forward.</span>
            </h1>

            <p>
              Ayaansh T Corp brings together digital solutions, procurement
              support, business services and product ventures under one
              practical operating model.
            </p>

            <div className="hero-actions">
              <a href="#/contact" className="corporate-button primary">
                Start a Conversation
                <ArrowRight size={17} />
              </a>

              <a href="#/what-we-do" className="corporate-button secondary">
                Explore What We Do
              </a>
            </div>

            <div className="hero-proof">
              <span>
                <CheckCircle2 size={16} />
                Clear deliverables
              </span>

              <span>
                <CheckCircle2 size={16} />
                Practical execution
              </span>

              <span>
                <CheckCircle2 size={16} />
                Flexible support
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-label">
              <span className="status-indicator" />
              Our operating model
            </div>

            <div className="hero-visual-title">
              From requirement
              <br />
              to execution.
            </div>

            <div className="hero-process">
              <div>
                <span>01</span>
                <p>Understand the requirement</p>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>02</span>
                <p>Design the right approach</p>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>03</span>
                <p>Execute with clarity</p>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>04</span>
                <p>Deliver practical outcomes</p>
                <ChevronRight size={17} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="corporate-intro section">
        <div className="container intro-grid">
          <div>
            <div className="section-kicker">WHO WE ARE</div>

            <h2>
              A practical company built around
              <span>execution.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Ayaansh T Corp is built to work across digital services,
              procurement support, business operations and product
              development.
            </p>

            <p>
              Our approach is straightforward: understand the requirement,
              identify what needs to happen, and execute without unnecessary
              complexity.
            </p>

            <a href="#/who-we-are" className="text-link">
              Discover who we are
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section capabilities-section">
        <div className="container">
          <div className="section-heading-large">
            <div>
              <div className="section-kicker">WHAT WE DO</div>

              <h2>
                Capabilities designed
                <span>around the work.</span>
              </h2>
            </div>

            <p>
              We combine digital, operational and sourcing capabilities to
              support businesses from requirement through delivery.
            </p>
          </div>

          <div className="capability-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="capability-card" key={service.number}>
                  <div className="capability-top">
                    <span>{service.number}</span>

                    <div className="capability-icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#/what-we-do">
                    Explore capability
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELIABILITY */}
      <section className="reliability-section">
        <div className="container">
          <div className="reliability-layout">
            <div>
              <div className="section-kicker light-kicker">
                WHAT MAKES US RELIABLE
              </div>

              <h2>
                Less complexity.
                <span>More execution.</span>
              </h2>

              <p className="reliability-lead">
                We aim to be the kind of partner that understands the
                requirement, communicates clearly and follows through.
              </p>

              <a href="#/who-we-are" className="light-link">
                How we work
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="reliability-list">
              {reliability.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="reliability-item" key={item.title}>
                    <div className="reliability-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-heading-large">
            <div>
              <div className="section-kicker">INDUSTRIES</div>

              <h2>
                Built to adapt
                <span>across business needs.</span>
              </h2>
            </div>

            <p>
              Our capabilities can be applied across organizations with
              different operating models, requirements and objectives.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article className="industry-card" key={industry.title}>
                  <Icon size={25} />

                  <h3>{industry.title}</h3>

                  <p>{industry.text}</p>

                  <a href="#/industries">
                    View industry
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section case-study-preview">
        <div className="container">
          <div className="case-study-header">
            <div>
              <div className="section-kicker">CASE STUDIES</div>

              <h2>
                Work that demonstrates
                <span>how we execute.</span>
              </h2>
            </div>

            <a href="#/case-studies" className="text-link">
              View all case studies
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="case-study-grid">
            <article className="case-study-featured">
              <div className="case-study-meta">DIGITAL EXPERIENCE</div>

              <h3>
                Building a stronger
                <br />
                digital presence.
              </h3>

              <p>
                Designing a modern corporate experience that communicates
                capabilities clearly and creates a stronger foundation for
                business growth.
              </p>

              <a href="#/case-studies">
                Explore case study
                <ArrowRight size={15} />
              </a>
            </article>

            <article className="case-study-secondary">
              <div className="case-study-meta">PROCUREMENT SUPPORT</div>

              <h3>
                Research.
                <br />
                Source.
                <br />
                Execute.
              </h3>

              <p>
                A structured approach to RFQ research and supplier sourcing
                designed around speed and practical decision-making.
              </p>

              <a href="#/case-studies">
                Explore case study
                <ArrowRight size={15} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section">
        <div className="container">
          <div className="section-heading-large">
            <div>
              <div className="section-kicker">PRODUCTS & VENTURES</div>

              <h2>
                Building beyond
                <span>services.</span>
              </h2>
            </div>

            <p>
              Ayaansh T Corp also develops and operates product and brand
              opportunities with a long-term view.
            </p>
          </div>

          <div className="product-showcase">
            <article className="product-card launched">
              <div className="product-status">LAUNCHED</div>

              <div className="product-content">
                <div>
                  <h3>Leaf Alchemy</h3>

                  <p>
                    A premium tea brand developed as part of the Ayaansh T
                    Corp product portfolio.
                  </p>
                </div>

                <a href="#/products">
                  Explore product
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>

            <article className="product-card coming-soon">
              <div className="product-status">COMING SOON</div>

              <div className="product-content">
                <div>
                  <h3>Classic Leaf</h3>

                  <p>
                    An upcoming product venture currently under development.
                  </p>
                </div>

                <a href="#/products">
                  Discover more
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="section-kicker">START A CONVERSATION</div>

            <h2>
              Have a requirement?
              <span>Let's work through it.</span>
            </h2>

            <p>
              Tell us what you're trying to accomplish and we'll determine
              the most practical way forward.
            </p>
          </div>

          <a href="#/contact" className="corporate-button primary large">
            Contact Ayaansh T Corp
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}