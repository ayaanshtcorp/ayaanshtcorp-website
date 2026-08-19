import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Search,
  Workflow,
  Package,
  Mail,
  Menu,
  X,
  ChevronRight,
  Zap,
  ShieldCheck,
  Layers3
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Web Development",
    text: "Professional websites and landing pages built for clear positioning, credibility and lead generation.",
    points: [
      "Business websites",
      "Landing pages",
      "Redesign & enhancement",
      "Responsive optimization"
    ]
  },
  {
    icon: Search,
    number: "02",
    title: "Government Procurement Support",
    text: "Practical RFQ research and sourcing support for businesses pursuing government opportunities.",
    points: [
      "RFQ research",
      "Supplier sourcing",
      "Quote collection",
      "Procurement support"
    ]
  },
  {
    icon: Workflow,
    number: "03",
    title: "Digital Business Services",
    text: "Focused digital solutions that help businesses establish, improve and operate their online presence.",
    points: [
      "Digital presence",
      "Website optimization",
      "Process support",
      "Practical automation"
    ]
  },
  {
    icon: Package,
    number: "04",
    title: "Products & Brands",
    text: "A dedicated space for products and brands developed or operated through Ayaansh T Corp.",
    points: [
      "Product presentation",
      "Brand websites",
      "Digital product presence",
      "Future ventures"
    ]
  }
];

const capabilities = [
  {
    icon: Zap,
    title: "Fast execution",
    text: "Clear scope, focused delivery and fewer unnecessary steps."
  },
  {
    icon: ShieldCheck,
    title: "Practical solutions",
    text: "We focus on what can actually be implemented and used."
  },
  {
    icon: Layers3,
    title: "Flexible delivery",
    text: "Use us for a focused project or ongoing business support."
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site-shell">

      {/* HEADER */}
      <header className="header">
        <div className="container nav">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label="Ayaansh T Corp home"
          >
            <span className="brand-logo">
              <img
                src="/ayaansh-t-corp-logo.png"
                alt="Ayaansh T Corp"
              />
            </span>

            <span className="brand-name">
              Ayaansh T Corp
            </span>
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#products" onClick={closeMenu}>
              Products
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a
              href="#contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Start a Project
            </a>
          </nav>

        </div>
      </header>

      <main id="home">

        {/* HERO */}
        <section className="hero">

          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                DIGITAL SOLUTIONS • PROCUREMENT SUPPORT
              </div>

              <h1>
                Digital solutions.
                <span>Practical execution.</span>
              </h1>

              <p className="hero-text">
                Ayaansh T Corp helps businesses build, improve and operate
                through web development, digital business services and
                government procurement support.
              </p>

              <div className="hero-actions">

                <a
                  href="#contact"
                  className="button primary"
                >
                  Start a Project
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#services"
                  className="button secondary"
                >
                  Explore Services
                </a>

              </div>

              <div className="trust-row">

                <span>
                  <CheckCircle2 size={17} />
                  Fast execution
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Clear deliverables
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Flexible support
                </span>

              </div>

            </div>

            <div className="hero-panel">

              <div className="panel-top">
                <span className="status-dot" />
                What we help with
              </div>

              <div className="panel-title">
                From requirement to delivery.
              </div>

              <div className="panel-list">

                <div>
                  <b>01</b>
                  <span>Build your digital presence</span>
                  <ChevronRight size={16} />
                </div>

                <div>
                  <b>02</b>
                  <span>Improve an existing website</span>
                  <ChevronRight size={16} />
                </div>

                <div>
                  <b>03</b>
                  <span>Research and source RFQs</span>
                  <ChevronRight size={16} />
                </div>

                <div>
                  <b>04</b>
                  <span>Support practical business needs</span>
                  <ChevronRight size={16} />
                </div>

              </div>

              <a
                href="#contact"
                className="panel-link"
              >
                Tell us what you need
                <ArrowRight size={16} />
              </a>

            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="section services-section"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <div className="eyebrow">
                  OUR SERVICES
                </div>

                <h2>
                  Built around real business needs.
                </h2>

              </div>

              <p>
                Focused services, clear deliverables and a delivery model
                that can scale with your requirements.
              </p>

            </div>

            <div className="service-grid">

              {services.map(
                ({
                  icon: Icon,
                  number,
                  title,
                  text,
                  points
                }) => (

                  <article
                    className="service-card"
                    key={title}
                  >

                    <div className="service-top">

                      <div className="icon-box">
                        <Icon size={22} />
                      </div>

                      <span className="service-number">
                        {number}
                      </span>

                    </div>

                    <h3>{title}</h3>

                    <p>{text}</p>

                    <ul>

                      {points.map((point) => (

                        <li key={point}>

                          <CheckCircle2 size={15} />

                          <span>
                            {point}
                          </span>

                        </li>

                      ))}

                    </ul>

                    <a
                      href="#contact"
                      className="text-link"
                    >
                      Discuss this service
                      <ArrowRight size={15} />
                    </a>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

        {/* WHY US */}
        <section className="value-section">

          <div className="container">

            <div className="value-intro">

              <div className="eyebrow">
                WHY AYAANSH T CORP
              </div>

              <h2>
                Simple process. Serious execution.
              </h2>

            </div>

            <div className="capability-grid">

              {capabilities.map(
                ({ icon: Icon, title, text }) => (

                  <article
                    className="capability"
                    key={title}
                  >

                    <div className="capability-icon">
                      <Icon size={20} />
                    </div>

                    <div>

                      <h3>{title}</h3>

                      <p>{text}</p>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

        {/* WORK */}
        <section
          id="work"
          className="section work-section"
        >

          <div className="container">

            <div className="section-heading light">

              <div>

                <div className="eyebrow">
                  SELECTED WORK
                </div>

                <h2>
                  Show capability. Build trust.
                </h2>

              </div>

              <p>
                We present project capabilities without exposing
                confidential client information.
              </p>

            </div>

            <div className="work-grid">

              <article className="work-card featured-work">

                <div className="work-label">
                  WEBSITE ENHANCEMENT
                </div>

                <h3>
                  U.S. Business Website Enhancement
                </h3>

                <p>
                  A website improvement project focused on structure,
                  visual hierarchy, responsive presentation, user
                  experience and conversion-focused CTAs.
                </p>

                <div className="work-tags">
                  <span>UX / UI</span>
                  <span>Responsive</span>
                  <span>Conversion</span>
                </div>

              </article>

              <article className="work-card">

                <div className="work-label">
                  INTERNAL PROJECT
                </div>

                <h3>
                  Ayaansh T Corp Digital Platform
                </h3>

                <p>
                  Our own commercial platform is being developed as
                  the foundation for service presentation, lead
                  generation and future digital offerings.
                </p>

                <div className="work-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Cloudflare</span>
                </div>

              </article>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="section products-section"
        >

          <div className="container product-grid">

            <div>

              <div className="eyebrow">
                PRODUCTS & BRANDS
              </div>

              <h2>
                Building beyond services.
              </h2>

              <p>
                Ayaansh T Corp also develops and operates product-led
                ventures. Our products and brands have their own
                identities while benefiting from the same digital and
                business execution capabilities.
              </p>

              <a
                href="#contact"
                className="text-link"
              >
                Discuss a product or partnership
                <ArrowRight size={15} />
              </a>

            </div>

            <article className="brand-card">

              <div className="brand-card-mark">
                LA
              </div>

              <div>

                <div className="product-kicker">
                  BRAND
                </div>

                <h3>
                  Leaf Alchemy
                </h3>

                <p>
                  Premium tea brand and product venture.
                </p>

              </div>

              <span className="brand-card-arrow">
                <ArrowRight size={18} />
              </span>

            </article>

          </div>

        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section about-section"
        >

          <div className="container about-grid">

            <div>

              <div className="eyebrow">
                ABOUT AYAANSH T CORP
              </div>

              <h2>
                A practical business partner for digital and
                procurement work.
              </h2>

            </div>

            <div>

              <p>
                Ayaansh T Corp combines digital execution with
                sourcing and procurement support. We focus on
                straightforward delivery, responsive communication
                and solutions that can be implemented without
                unnecessary complexity.
              </p>

              <div className="process">

                <div>
                  <span>01</span>
                  <strong>Understand</strong>
                  <p>We clarify the requirement.</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Plan</strong>
                  <p>We define the practical path.</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Execute</strong>
                  <p>We move the work forward.</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Deliver</strong>
                  <p>We provide the agreed outcome.</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section"
        >

          <div className="container contact-card">

            <div>

              <div className="eyebrow">
                LET'S WORK TOGETHER
              </div>

              <h2>
                Have a requirement?
              </h2>

              <p>
                Tell us what you need. We'll determine the right
                way to help.
              </p>

            </div>

            <div className="contact-actions">

              <a
                className="button primary"
                href="mailto:ayaanshtcorp@gmail.com"
              >
                <Mail size={18} />
                Email Us
              </a>

              <a
                className="button secondary"
                href="#services"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-inner">

          <div>

            <a
              href="#home"
              className="brand footer-brand"
            >

              <span className="brand-logo">
                <img
                  src="/ayaansh-t-corp-logo.png"
                  alt="Ayaansh T Corp"
                />
              </span>

              <span className="brand-name">
                Ayaansh T Corp
              </span>

            </a>

            <p>
              Digital solutions, procurement support and business services.
            </p>

          </div>

          <div className="footer-links">

            <a href="#services">
              Services
            </a>

            <a href="#work">
              Work
            </a>

            <a href="#products">
              Products
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

        <div className="container copyright">

          <span>
            © 2026 Ayaansh T Corp. All rights reserved.
          </span>

          <span>
            Built for practical business execution.
          </span>

        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);