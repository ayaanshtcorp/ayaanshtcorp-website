import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Menu,
  X,
  FileSearch,
  Workflow,
  Package,
  Mail,
  MessageSquare
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Professional business websites, landing pages, redesigns and ongoing website improvements.",
    points: ["Business websites", "Landing pages", "Redesign & enhancement"]
  },
  {
    icon: FileSearch,
    title: "Government Procurement",
    text: "RFQ research, supplier sourcing, quotation collection and procurement support.",
    points: ["RFQ research", "Supplier sourcing", "Quote collection"]
  },
  {
    icon: Workflow,
    title: "Digital Business Services",
    text: "Practical digital solutions that help businesses establish, improve and operate online.",
    points: ["Digital presence", "Website optimization", "Business automation"]
  },
  {
    icon: Package,
    title: "Products",
    text: "A dedicated space for Ayaansh T Corp products and brands, including Leaf Alchemy.",
    points: ["Product showcase", "Brand presentation", "Future products"]
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">A</span>
            <span>Ayaansh T Corp</span>
          </a>

          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a Project</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">DIGITAL SOLUTIONS • PROCUREMENT SUPPORT</div>
              <h1>Build better. <span>Operate smarter.</span></h1>
              <p className="hero-text">
                Ayaansh T Corp helps businesses build their digital presence,
                improve existing websites and access practical procurement support.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="button primary">
                  Start a Project <ArrowRight size={18} />
                </a>
                <a href="#services" className="button secondary">
                  Explore Services
                </a>
              </div>
              <div className="trust-row">
                <span><CheckCircle2 size={17} /> Practical solutions</span>
                <span><CheckCircle2 size={17} /> Fast execution</span>
                <span><CheckCircle2 size={17} /> Flexible delivery</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span className="status-dot"></span>
                <span>What we do</span>
              </div>
              <div className="hero-card-title">From requirement to delivery.</div>
              <div className="hero-lines">
                <div><span>01</span> Digital presence</div>
                <div><span>02</span> Website development</div>
                <div><span>03</span> Procurement support</div>
                <div><span>04</span> Business solutions</div>
              </div>
              <a href="#contact" className="card-link">Tell us what you need <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">OUR SERVICES</div>
                <h2>Services built around real business needs.</h2>
              </div>
              <p>
                Focused services, clear deliverables and a delivery model that can
                scale as your requirements grow.
              </p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, points }) => (
                <article className="service-card" key={title}>
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => <li key={point}><CheckCircle2 size={16} />{point}</li>)}
                  </ul>
                  <a href="#contact">Discuss this service <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section dark-section">
          <div className="container">
            <div className="section-heading light">
              <div>
                <div className="eyebrow">SELECTED WORK</div>
                <h2>Show the work. Build the trust.</h2>
              </div>
              <p>
                This section is designed for case studies and completed client work.
                We can add the Lotus USA project next.
              </p>
            </div>

            <div className="portfolio-grid">
              <article className="portfolio-card featured">
                <div className="portfolio-label">CASE STUDY</div>
                <h3>Lotus USA Website Enhancement</h3>
                <p>
                  Website structure, visual hierarchy, responsive presentation and
                  conversion-focused improvements.
                </p>
                <a href="#contact">View case study <ArrowRight size={15} /></a>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-label">UPCOMING</div>
                <h3>Ayaansh T Corp Digital Platform</h3>
                <p>
                  Our own website and service platform — built to become the
                  foundation for client acquisition.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">ABOUT AYAANSH T CORP</div>
              <h2>A practical business partner for digital and procurement work.</h2>
            </div>
            <div>
              <p>
                Ayaansh T Corp combines digital execution with sourcing and
                procurement support. We focus on straightforward delivery,
                responsive communication and solutions that can be implemented
                without unnecessary complexity.
              </p>
              <div className="about-points">
                <div><CheckCircle2 size={18} /> Fast turnaround</div>
                <div><CheckCircle2 size={18} /> Flexible delivery model</div>
                <div><CheckCircle2 size={18} /> Business-focused execution</div>
                <div><CheckCircle2 size={18} /> Built to scale</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div>
              <div className="eyebrow">LET'S WORK TOGETHER</div>
              <h2>Have a requirement?</h2>
              <p>Tell us what you need. We will determine the right way to help.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:hello@ayaanshtcorp.com">
                <Mail size={18} /> Email Us
              </a>
              <a className="button secondary" href="https://wa.me/" target="_blank" rel="noreferrer">
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">A</span>
              <span>Ayaansh T Corp</span>
            </div>
            <p>Digital solutions, procurement support and business services.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 Ayaansh T Corp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
