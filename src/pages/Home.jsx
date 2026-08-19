import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Cloud,
  Code2,
  Database,
  Globe2,
  Menu,
  MessageCircle,
  Smartphone,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./home-sprint.css";

const solutions = [
  {
    icon: Globe2,
    title: "Web Development",
    text: "Custom websites and digital experiences designed around your business, customers and conversion goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Mobile applications that connect customers, teams and business processes.",
  },
  {
    icon: Cloud,
    title: "SaaS",
    text: "Scalable software products designed for recurring use, operational efficiency and long-term growth.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Business applications, dashboards, portals, workflows and integrations built around specific requirements.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Reduce repetitive work by connecting systems, workflows and business processes.",
  },
  {
    icon: BarChart3,
    title: "SEO & Digital Growth",
    text: "Build visibility, understand user behaviour and turn digital traffic into meaningful opportunities.",
  },
];

const steps = [
  ["01", "Discover", "Understand the business and objectives."],
  ["02", "Define", "Clarify requirements and priorities."],
  ["03", "Design", "Plan the experience and architecture."],
  ["04", "Build", "Develop the solution."],
  ["05", "Deploy", "Launch and integrate."],
  ["06", "Improve", "Measure, support and refine."],
];

const technologies = [
  ["Frontend", "React · JavaScript · Responsive UI", Code2],
  ["Applications", "Web Apps · Mobile · APIs", Smartphone],
  ["Cloud", "Infrastructure · Serverless · Deployment", Cloud],
  ["Automation", "Workflows · Integrations", Workflow],
  ["Data & Analytics", "Analytics · Reporting · Conversion", Database],
];

function AyaanshLogo({ footer = false }) {
  return (
    <a className="at-logo" href="#home" aria-label="Ayaansh T Corp home">
      <img src="/ayaansh-t-corp-logo.png" alt="Ayaansh T Corp" />
      {!footer && <span className="at-logo-name">AYAANSH T CORP</span>}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="at-header">
      <div className="at-container at-header-inner">
        <AyaanshLogo />

        <button
          className="at-mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={open ? "at-nav at-nav-open" : "at-nav"}>
          <a href="#solutions" onClick={close}>Technology Solutions</a>
          <a href="#methodology" onClick={close}>How We Work</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#ventures" onClick={close}>Products & Ventures</a>
          <a href="#procurement" onClick={close}>Procurement</a>
          <a href="#insights" onClick={close}>Insights</a>
          <a className="at-nav-cta" href="#contact" onClick={close}>Start a Project</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="at-footer">
      <div className="at-container">
        <div className="at-footer-grid">
          <div className="at-footer-brand">
            <AyaanshLogo footer />
            <p>
              Technology solutions, products and specialized business services
              built around practical execution.
            </p>
            <div className="at-socials" aria-label="Social media">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">x</a>
            </div>
          </div>

          <div className="at-footer-column">
            <h4>Technology</h4>
            <a href="#solutions">Web Development</a>
            <a href="#solutions">Mobile Applications</a>
            <a href="#solutions">SaaS</a>
            <a href="#solutions">Custom Software</a>
            <a href="#solutions">Automation</a>
            <a href="#solutions">SEO & Digital Growth</a>
          </div>

          <div className="at-footer-column">
            <h4>Company</h4>
            <a href="#methodology">How We Work</a>
            <a href="#work">Work</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="at-footer-column">
            <h4>Business</h4>
            <a href="#procurement">Procurement Services</a>
            <a href="#ventures">Products & Ventures</a>
            <a href="https://leafalchemy.shop">Leaf Alchemy</a>
          </div>
        </div>

        <div className="at-footer-bottom">
          <span>© 2026 Ayaansh T Corp. All rights reserved.</span>
          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AiAssistantButton() {
  return (
    <button
      className="at-ai-button"
      type="button"
      aria-label="Open Ayaansh AI Assistant"
      title="Ayaansh AI Assistant"
    >
      <span className="at-ai-dot" />
      <Bot size={18} />
      <span>AI Assistant</span>
    </button>
  );
}

export default function Home() {
  return (
    <div className="at-site" id="home">
      <Header />

      <main>
        <section className="at-hero">
          <div className="at-container at-hero-grid">
            <div className="at-hero-copy">
              <div className="at-eyebrow">DIGITAL SOLUTIONS FOR BUSINESS</div>
              <h1>We build digital solutions around your business.</h1>
              <p>
                From websites and mobile applications to SaaS platforms and
                custom business software, we turn business requirements into
                practical digital solutions designed to grow with you.
              </p>
              <div className="at-actions">
                <a className="at-btn at-btn-primary" href="#contact">
                  Start a Project <ArrowRight size={16} />
                </a>
                <a className="at-btn at-btn-outline" href="#solutions">
                  Explore Solutions
                </a>
              </div>
            </div>

            <div className="at-hero-visual" aria-label="Digital solution ecosystem">
              <div className="at-orbit at-orbit-one" />
              <div className="at-orbit at-orbit-two" />
              <div className="at-hero-node at-node-one">Business Need</div>
              <div className="at-hero-node at-node-two">SaaS</div>
              <div className="at-hero-node at-node-three">Mobile</div>
              <div className="at-hero-node at-node-four">Web</div>
              <div className="at-hero-core">
                <span>AT</span>
                <strong>AYAANSH T CORP</strong>
                <small>INNOVATE · SOLVE · GROW</small>
              </div>
            </div>
          </div>
        </section>

        <section className="at-section" id="solutions">
          <div className="at-container">
            <div className="at-section-head at-center">
              <div className="at-eyebrow">OUR DIGITAL SOLUTIONS</div>
              <h2>One requirement. Multiple ways to solve it.</h2>
              <p>
                Not every business needs the same technology. We understand the
                objective first, then determine the right digital solution.
              </p>
            </div>

            <div className="at-solution-grid">
              {solutions.map(([Icon, title, text]) => (
                <article className="at-card at-solution-card" key={title}>
                  <div className="at-card-icon"><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">Discuss this capability <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="at-methodology" id="methodology">
          <div className="at-container at-method-grid">
            <div>
              <div className="at-eyebrow">HOW WE WORK</div>
              <h2>We don't start with technology. We start with the requirement.</h2>
              <p>
                Before we recommend a platform, framework or architecture, we
                understand what the business is trying to accomplish. The right
                solution may be a website, mobile application, SaaS platform,
                custom software or something simpler.
              </p>
            </div>

            <div className="at-step-grid">
              {steps.map(([number, title, text]) => (
                <article className="at-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="at-section at-tech-section" id="technology">
          <div className="at-container">
            <div className="at-section-head at-center">
              <div className="at-eyebrow">TECHNOLOGY</div>
              <h2>Built with modern technology. Designed for real-world use.</h2>
              <p>
                We combine development, cloud, automation and analytics
                technologies to create reliable digital solutions.
              </p>
            </div>

            <div className="at-tech-grid">
              {technologies.map(([title, text, Icon]) => (
                <div className="at-tech-card" key={title}>
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="at-section" id="work">
          <div className="at-container">
            <div className="at-section-head at-center">
              <div className="at-eyebrow">SELECTED WORK</div>
              <h2>Ideas become products when they are built well.</h2>
              <p>
                Explore selected projects, demonstrations and products that
                show how we approach digital experiences and software solutions.
              </p>
            </div>

            <div className="at-work-grid">
              <article className="at-work-card at-work-featured">
                <span>INTERNAL PROJECT</span>
                <h3>Ayaansh T Corp</h3>
                <p>
                  Our own corporate digital platform, designed to demonstrate
                  our approach to modern business websites and digital
                  experiences.
                </p>
                <div className="at-mini-dashboard">
                  <div />
                  <div className="short" />
                  <i /><i /><i />
                </div>
              </article>

              <article className="at-work-card">
                <span>DEMONSTRATION</span>
                <h3>Business Software</h3>
                <p>
                  A demonstration concept showing how dashboards, workflows
                  and business systems can work together.
                </p>
                <a href="#contact">Discuss a similar requirement <ArrowRight size={15} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="at-section at-ventures" id="ventures">
          <div className="at-container">
            <div className="at-section-head at-center">
              <div className="at-eyebrow">PRODUCTS & VENTURES</div>
              <h2>We build products of our own, too.</h2>
              <p>
                Technology is only one part of what we build. Ayaansh T Corp
                also develops and operates products of its own.
              </p>
            </div>

            <article className="at-venture-card">
              <div>
                <div className="at-eyebrow">ACTIVE PRODUCT</div>
                <h3>Leaf Alchemy</h3>
                <p>
                  A tea brand developed and operated by Ayaansh T Corp,
                  serving B2B hospitality customers and consumers.
                </p>
                <a className="at-btn at-btn-primary" href="https://leafalchemy.shop">
                  Visit Leaf Alchemy <ArrowRight size={16} />
                </a>
              </div>
              <div className="at-leaf-visual">
                <span>LEAF</span>
                <strong>ALCHEMY</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="at-section at-procurement" id="procurement">
          <div className="at-container at-proc-grid">
            <div>
              <div className="at-eyebrow">SPECIALIZED BUSINESS SERVICES</div>
              <h2>Procurement research when the opportunity requires it.</h2>
              <p>
                We provide specialized procurement research and sourcing
                support for businesses pursuing applicable U.S. federal
                opportunities.
              </p>

              <div className="at-proc-capabilities">
                <div><Check size={16} /><span>RFQ Research</span></div>
                <div><Check size={16} /><span>Supplier Sourcing</span></div>
                <div><Check size={16} /><span>Quote Support</span></div>
              </div>

              <a className="at-text-link" href="#contact">
                Explore Procurement Services <ArrowRight size={15} />
              </a>
            </div>

            <div className="at-flow">
              {["Opportunity", "Requirement", "Supplier", "Quote", "Bid Support"].map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="at-final" id="contact">
          <div className="at-container">
            <div className="at-final-box">
              <div>
                <div className="at-eyebrow">START A CONVERSATION</div>
                <h2>Have a business requirement?</h2>
                <p>
                  Tell us what you're trying to accomplish. We'll help
                  determine the right digital solution and the appropriate way
                  to execute it.
                </p>
              </div>
              <a className="at-btn at-btn-primary" href="#contact-form">
                Start a Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="at-contact-placeholder" id="contact-form">
          <div className="at-container">
            <div className="at-contact-card">
              <div>
                <div className="at-eyebrow">PROJECT ENQUIRY</div>
                <h2>Let's understand the requirement.</h2>
                <p>
                  The full qualified contact form remains part of the contact
                  page. This homepage CTA routes visitors there.
                </p>
              </div>
              <a className="at-btn at-btn-primary" href="mailto:ayaanshtcorp@gmail.com?subject=Business%20Enquiry%20-%20Ayaansh%20T%20Corp">
                Email Ayaansh T Corp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AiAssistantButton />
    </div>
  );
}
