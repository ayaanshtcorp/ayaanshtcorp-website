import React from "react";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Search,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";

import "../styles/seo-digital-growth.css";

const capabilities = [
  {
    icon: Search,
    title: "Technical SEO",
    text: "Improve the technical foundation of your website so search engines can efficiently crawl, understand and index your content.",
  },
  {
    icon: Target,
    title: "Search Strategy",
    text: "Build practical search strategies around the audiences, services and topics that matter to the business.",
  },
  {
    icon: Globe2,
    title: "Website Optimization",
    text: "Improve page structure, content presentation and user experience to create stronger digital journeys.",
  },
  {
    icon: TrendingUp,
    title: "Organic Growth",
    text: "Develop sustainable search visibility through structured content, optimization and continuous improvement.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    text: "Use meaningful performance signals to understand what is working and where digital improvements are needed.",
  },
  {
    icon: Users,
    title: "Conversion Optimization",
    text: "Align traffic, content and calls to action so digital activity supports real business objectives.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Understand the business, audience, existing digital presence and commercial objectives.",
  },
  {
    number: "02",
    title: "Audit",
    text: "Review technical foundations, content, search visibility and user experience to identify opportunities.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "Prioritize the highest-impact improvements across the website and digital experience.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Track meaningful signals and use the results to continuously improve the digital presence.",
  },
];

const growthAreas = [
  "Technical website health",
  "Search visibility",
  "Keyword and topic strategy",
  "On-page optimization",
  "Content structure",
  "Landing page optimization",
  "Conversion paths",
  "Digital performance reporting",
];

function SEODigitalGrowth() {
  return (
    <main className="seo-growth-page">

      {/* HERO */}
      <section className="seo-growth-hero">
        <div className="container seo-growth-hero-inner">

          <div className="seo-growth-hero-copy">
            <div className="seo-growth-kicker">
              TECHNOLOGY SOLUTIONS / SEO & DIGITAL GROWTH
            </div>

            <h1>
              Build visibility
              <span>that drives growth.</span>
            </h1>

            <p>
              We improve the technical foundation, search visibility
              and digital experience of your website so your online
              presence can support real business objectives.
            </p>

            <div className="seo-growth-actions">
              <a
                href="#capabilities"
                className="seo-growth-button seo-growth-button-secondary"
              >
                Explore Capabilities
              </a>

            </div>
          </div>

          <div className="seo-growth-visual">
            <div className="seo-growth-dashboard">

              <div className="seo-growth-dashboard-header">
                <span>Digital Performance</span>
                <strong>GROWTH</strong>
              </div>

              <div className="seo-growth-chart">

                <div className="seo-growth-chart-label">
                  <span>Organic visibility</span>
                  <strong>+38%</strong>
                </div>

                <div className="seo-growth-chart-area">

                  <div className="seo-growth-grid-line" />
                  <div className="seo-growth-grid-line" />
                  <div className="seo-growth-grid-line" />

                  <svg
                    viewBox="0 0 500 180"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polyline
                      points="0,150 65,137 125,142 190,110 250,118 315,78 375,83 435,45 500,22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>
              </div>

              <div className="seo-growth-metrics">

                <div>
                  <span>Visibility</span>
                  <strong>Improving</strong>
                </div>

                <div>
                  <span>Experience</span>
                  <strong>Optimized</strong>
                </div>

                <div>
                  <span>Growth</span>
                  <strong>Measured</strong>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="seo-growth-section"
        id="capabilities"
      >
        <div className="container">

          <div className="seo-growth-heading">

            <div>
              <div className="seo-growth-kicker">
                DIGITAL GROWTH CAPABILITIES
              </div>

              <h2>
                More than rankings.
                <span>Better digital performance.</span>
              </h2>
            </div>

            <p>
              Search visibility is only one part of digital growth.
              We look at the technical foundation, content, experience
              and conversion path together.
            </p>

          </div>

          <div className="seo-growth-capability-grid">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="seo-growth-capability-card"
                  key={capability.title}
                >

                  <div className="seo-growth-icon">
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

      {/* DARK SECTION */}
      <section className="seo-growth-dark">
        <div className="container seo-growth-two-column">

          <div>

            <div className="seo-growth-kicker seo-growth-kicker-light">
              A PRACTICAL APPROACH
            </div>

            <h2>
              Digital growth should
              <span>connect to the business.</span>
            </h2>

            <p>
              We focus on improvements that strengthen the connection
              between your website, your audience and your business
              objectives rather than chasing isolated metrics.
            </p>

          </div>

          <div className="seo-growth-benefits">

            <div>
              <strong>01</strong>
              <span>Improve discoverability</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Strengthen website experience</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Reach more relevant audiences</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Create clearer conversion paths</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Measure meaningful digital progress</span>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="seo-growth-section">
        <div className="container">

          <div className="seo-growth-heading">

            <div>
              <div className="seo-growth-kicker">
                OUR APPROACH
              </div>

              <h2>
                Understand first.
                <span>Optimize with purpose.</span>
              </h2>
            </div>

            <p>
              Digital growth works best when strategy, technology
              and execution are connected.
            </p>

          </div>

          <div className="seo-growth-process-grid">

            {process.map((step) => (
              <article
                className="seo-growth-process-card"
                key={step.number}
              >

                <div className="seo-growth-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* GROWTH AREAS */}
      <section className="seo-growth-solutions">
        <div className="container seo-growth-solutions-inner">

          <div>

            <div className="seo-growth-kicker">
              AREAS OF FOCUS
            </div>

            <h2>
              Improve the parts
              <span>that influence growth.</span>
            </h2>

            <p>
              Every business has different priorities. We can focus
              on the areas where the strongest opportunity exists,
              from technical improvements to conversion paths.
            </p>

          </div>

          <div className="seo-growth-area-list">

            {growthAreas.map((area) => (
              <div key={area}>
                <CheckCircle2 size={17} />
                <span>{area}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="seo-growth-cta">
        <div className="container seo-growth-cta-inner">
          <div>
            <div className="seo-growth-kicker">READY TO IMPROVE YOUR DIGITAL PRESENCE?</div>
            <h2>Turn your website<span>into a growth asset.</span></h2>
            <p>Tell us where your digital presence is today and what you want it to achieve. We'll help identify the most practical next steps.</p>
          </div>
          <a href="#/contact" className="seo-growth-button seo-growth-button-primary">
            Discuss Your Growth
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default SEODigitalGrowth;