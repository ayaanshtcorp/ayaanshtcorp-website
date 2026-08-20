import React from "react";
import {
  ArrowRight,
  Leaf,
  Clock3,
  Package,
  Sparkles,
} from "lucide-react";

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
              Products we
              <span>build and operate.</span>
            </h1>

            <p>
              Ayaansh T Corp develops and operates products and
              ventures alongside its technology and digital services.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR PORTFOLIO</span>

            <strong>
              Active.
              <br />
              Developing.
              <br />
              Future.
            </strong>
          </div>

        </div>
      </section>

      {/* PORTFOLIO INTRO */}
      <section className="section product-intro">
        <div className="container product-intro-grid">

          <div>
            <div className="section-kicker">
              OUR PRODUCTS
            </div>

            <h2>
              Building products
              <span>with a long-term view.</span>
            </h2>
          </div>

          <div>
            <p>
              Our product portfolio is focused on building
              practical brands and ventures with their own
              identity, positioning and commercial potential.
            </p>

            <p>
              Each product is developed independently while
              benefiting from the operational and digital
              capabilities of Ayaansh T Corp.
            </p>
          </div>

        </div>
      </section>

      {/* ACTIVE PRODUCT */}
      <section className="featured-product-section">
        <div className="container">

          <div className="featured-product">

            <div className="featured-product-visual">
              <div className="featured-product-pattern" />

              <div className="featured-product-mark">
                <Leaf size={44} />
              </div>

              <span>ACTIVE PRODUCT</span>

              <strong>Leaf Alchemy</strong>
            </div>

            <div className="featured-product-content">

              <div className="product-status-pill launched-pill">
                <span />
                ACTIVE
              </div>

              <div className="section-kicker">
                CONSUMER PRODUCT
              </div>

              <h2>
                Leaf Alchemy
              </h2>

              <p className="featured-product-lead">
                A tea brand developed and operated by
                Ayaansh T Corp.
              </p>

              <p>
                Leaf Alchemy is a product venture focused on
                building a distinct tea brand, product identity
                and commercial presence.
              </p>

              <div className="product-highlights">

                <div>
                  <strong>01</strong>
                  <span>Product brand</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Tea products</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Growing venture</span>
                </div>

              </div>

              <a
                href="https://leafalchemy.shop/"
                className="corporate-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Leaf Alchemy
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* UPCOMING VENTURE */}
      <section className="section coming-soon-section">
        <div className="container">

          <div className="section-heading-large">

            <div>
              <div className="section-kicker">
                DEVELOPING
              </div>

              <h2>
                More products
                <span>are taking shape.</span>
              </h2>
            </div>

            <p>
              We are developing additional product concepts
              that will be introduced when their product,
              positioning and operating foundation are ready.
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
                DEVELOPING
              </div>

              <h3>
                Classic Leaf
              </h3>

              <p>
                An upcoming product venture being developed
                as part of the Ayaansh T Corp portfolio.
              </p>

              <p>
                Further product information will be introduced
                as the venture moves toward launch.
              </p>

            </div>

            <div className="coming-soon-arrow">
              <ArrowRight size={22} />
            </div>

          </article>

        </div>
      </section>

      {/* PRODUCT APPROACH */}
      <section className="product-principles-section">
        <div className="container">

          <div className="product-principles-heading">

            <div>
              <div className="section-kicker light-kicker">
                OUR APPROACH
              </div>

              <h2>
                Products built
                <span>for the real market.</span>
              </h2>
            </div>

            <p>
              We focus on building products with a clear purpose,
              strong positioning and the ability to operate beyond
              the initial concept.
            </p>

          </div>

          <div className="product-principles-grid">

            <article className="product-principle">
              <Sparkles size={23} />

              <h3>
                Purpose
              </h3>

              <p>
                Every product starts with a clear opportunity
                and a reason for existing.
              </p>
            </article>

            <article className="product-principle">
              <Package size={23} />

              <h3>
                Product
              </h3>

              <p>
                We focus on creating real products rather than
                stopping at concepts.
              </p>
            </article>

            <article className="product-principle">
              <Leaf size={23} />

              <h3>
                Brand
              </h3>

              <p>
                Each venture is developed with its own identity,
                positioning and market presence.
              </p>
            </article>

          </div>

        </div>
      </section>

    </main>
  );
}