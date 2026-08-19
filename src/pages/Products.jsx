import React from "react";
import {
  ArrowRight,
  Leaf,
  Clock3,
  Package,
  Sparkles,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

const productPrinciples = [
  {
    icon: Sparkles,
    title: "Build with purpose",
    text: "Each venture begins with a clear product opportunity and a reason for existing.",
  },
  {
    icon: TrendingUp,
    title: "Develop for growth",
    text: "We build digital foundations that can evolve as products, customers and markets develop.",
  },
  {
    icon: Package,
    title: "Create real products",
    text: "Our objective is to move beyond concepts and build products that can operate in the real market.",
  },
];

export default function Products() {
  return (
    <main className="inner-page products-page">

      {/* HERO */}
      <section className="inner-hero products-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              PRODUCTS & VENTURES
            </div>

            <h1>
              Building beyond
              <span>services.</span>
            </h1>

            <p>
              Ayaansh T Corp develops products and brands alongside
              its technology and business services. Some are already
              in market. Others are being developed for future launch.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR PORTFOLIO</span>

            <strong>
              Launched.
              <br />
              Developing.
              <br />
              Coming soon.
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section product-intro">
        <div className="container product-intro-grid">

          <div>
            <div className="section-kicker">
              OUR VENTURE MODEL
            </div>

            <h2>
              From ideas
              <span>to operating brands.</span>
            </h2>
          </div>

          <div>
            <p>
              Products and brands are an important part of the
              long-term Ayaansh T Corp strategy.
            </p>

            <p>
              We use our digital, operational and business capabilities
              to develop ventures with their own positioning, identity
              and commercial potential.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED LAUNCHED PRODUCT */}
      <section className="featured-product-section">
        <div className="container">

          <div className="featured-product">

            <div className="featured-product-visual">
              <div className="featured-product-pattern" />

              <div className="featured-product-mark">
                <Leaf size={44} />
              </div>

              <span>LAUNCHED PRODUCT</span>

              <strong>Leaf Alchemy</strong>
            </div>

            <div className="featured-product-content">

              <div className="product-status-pill launched-pill">
                <span />
                LAUNCHED
              </div>

              <div className="section-kicker">
                PREMIUM TEA BRAND
              </div>

              <h2>
                Leaf Alchemy
              </h2>

              <p className="featured-product-lead">
                A premium tea brand developed as part of the
                Ayaansh T Corp product portfolio.
              </p>

              <p>
                Leaf Alchemy represents the company's approach to
                developing consumer products with a distinct brand
                identity, product positioning and digital presence.
              </p>

              <div className="product-highlights">

                <div>
                  <strong>01</strong>
                  <span>Product brand</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Consumer product</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Digital presence</span>
                </div>

              </div>

              <a
                href="#/contact"
                className="corporate-button primary"
              >
                Enquire About the Brand
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* COMING SOON */}
      <section className="section coming-soon-section">
        <div className="container">

          <div className="section-heading-large">
            <div>
              <div className="section-kicker">
                COMING SOON
              </div>

              <h2>
                The next ventures
                <span>are already taking shape.</span>
              </h2>
            </div>

            <p>
              Some product concepts require additional development
              before launch. We prefer to introduce them when the
              product, positioning and operating foundation are ready.
            </p>
          </div>

          <article className="coming-soon-product">

            <div className="coming-soon-number">
              01
            </div>

            <div className="coming-soon-icon">
              <Clock3 size={28} />
            </div>

            <div className="coming-soon-content">

              <div className="product-status-pill coming-pill">
                <span />
                COMING SOON
              </div>

              <h3>
                Classic Leaf
              </h3>

              <p>
                An upcoming product venture currently under
                development as part of the Ayaansh T Corp portfolio.
              </p>

              <p>
                Further product information, positioning and launch
                details will be introduced when the venture is ready.
              </p>

            </div>

            <div className="coming-soon-arrow">
              <ArrowRight size={22} />
            </div>

          </article>

        </div>
      </section>

      {/* PRODUCT PRINCIPLES */}
      <section className="product-principles-section">
        <div className="container">

          <div className="product-principles-heading">

            <div>
              <div className="section-kicker light-kicker">
                HOW WE BUILD
              </div>

              <h2>
                Products need more
                <span>than a good idea.</span>
              </h2>
            </div>

            <p>
              We approach product ventures with the same execution
              discipline we apply to our services.
            </p>

          </div>

          <div className="product-principles-grid">

            {productPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="product-principle"
                  key={principle.title}
                >
                  <Icon size={23} />

                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* PORTFOLIO NOTE */}
      <section className="section portfolio-note-section">
        <div className="container portfolio-note">

          <div>
            <div className="section-kicker">
              OUR PORTFOLIO
            </div>

            <h2>
              More ventures can be
              <span>added over time.</span>
            </h2>
          </div>

          <div>
            <p>
              The Ayaansh T Corp portfolio is designed to evolve.
              As new products and brands are developed, this section
              will become the central place to discover them.
            </p>

            <a
              href="#/contact"
              className="text-link"
            >
              Discuss a product opportunity
              <ExternalLink size={15} />
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">

          <div>
            <div className="section-kicker">
              PRODUCTS & PARTNERSHIPS
            </div>

            <h2>
              Interested in a product?
              <span>Let's start a conversation.</span>
            </h2>

            <p>
              Contact us for product, partnership or venture-related
              enquiries.
            </p>
          </div>

          <a
            href="#/contact"
            className="corporate-button primary large"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}