import React from "react";
import {
  ArrowRight,
  Lightbulb,
  Search,
  Globe2,
  TrendingUp,
  Clock3,
  BookOpen,
} from "lucide-react";

const insightCategories = [
  {
    icon: Globe2,
    category: "DIGITAL",
    title: "Building a stronger digital presence",
    text: "Practical considerations for businesses evaluating their website, digital presence and online customer experience.",
  },
  {
    icon: Search,
    category: "PROCUREMENT",
    title: "A practical approach to RFQ research",
    text: "How structured research and supplier sourcing can help businesses evaluate procurement opportunities more efficiently.",
  },
  {
    icon: TrendingUp,
    category: "BUSINESS",
    title: "From requirement to execution",
    text: "Why defining the right scope and prioritizing execution can make business projects more effective.",
  },
];

const futureTopics = [
  "Website strategy & digital transformation",
  "Government procurement & sourcing",
  "Supplier research & business operations",
  "Product development & brand building",
  "Technology and practical automation",
  "Entrepreneurship and business execution",
];

export default function Insights() {
  return (
    <main className="inner-page insights-page">

      {/* HERO */}
      <section className="inner-hero insights-hero">
        <div className="container inner-hero-inner">
          <div>
            <div className="section-kicker">
              INSIGHTS & RESOURCES
            </div>

            <h1>
              Ideas that help turn
              <span>thinking into action.</span>
            </h1>

            <p>
              A growing collection of practical perspectives,
              resources and observations across technology,
              procurement, business operations and product
              development.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>OUR FOCUS</span>

            <strong>
              Practical.
              <br />
              Relevant.
              <br />
              Actionable.
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section insights-intro">
        <div className="container insights-intro-grid">

          <div>
            <div className="section-kicker">
              WHY INSIGHTS
            </div>

            <h2>
              Information should
              <span>lead somewhere.</span>
            </h2>
          </div>

          <div>
            <p>
              The purpose of this section is not simply to publish
              content. It is to share practical thinking that can
              help businesses make better decisions.
            </p>

            <p>
              As the Ayaansh T Corp portfolio grows, this area will
              develop into a broader library of guides, perspectives,
              resources and business observations.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-insight-section">
        <div className="container">

          <article className="featured-insight">

            <div className="featured-insight-visual">
              <div className="featured-insight-number">
                01
              </div>

              <Lightbulb size={48} />

              <span>FEATURED PERSPECTIVE</span>
            </div>

            <div className="featured-insight-content">

              <div className="insight-meta">
                <span>BUSINESS EXECUTION</span>
                <span>•</span>
                <span>AYAANSH T CORP</span>
              </div>

              <h2>
                Start with the requirement,
                not the solution.
              </h2>

              <p>
                Strong business execution begins by understanding
                what actually needs to be achieved. The right
                technology, process or service should follow the
                requirement rather than define it.
              </p>

              <div className="featured-insight-points">

                <div>
                  <strong>01</strong>
                  <span>Understand the objective</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Identify the real constraint</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Choose the practical path</span>
                </div>

              </div>

              <span className="insight-coming-label">
                ARTICLE SERIES DEVELOPING
              </span>

            </div>

          </article>

        </div>
      </section>

      {/* INSIGHT CATEGORIES */}
      <section className="section insight-directory">
        <div className="container">

          <div className="section-heading-large">

            <div>
              <div className="section-kicker">
                AREAS OF FOCUS
              </div>

              <h2>
                What we'll be
                <span>writing about.</span>
              </h2>
            </div>

            <p>
              Our future content will focus on areas where practical
              experience and structured thinking can provide useful
              perspective.
            </p>

          </div>

          <div className="insight-grid">

            {insightCategories.map((insight) => {
              const Icon = insight.icon;

              return (
                <article
                  className="insight-card"
                  key={insight.title}
                >
                  <div className="insight-card-top">

                    <div className="insight-icon">
                      <Icon size={21} />
                    </div>

                    <span>{insight.category}</span>

                  </div>

                  <h3>{insight.title}</h3>

                  <p>{insight.text}</p>

                  <span className="insight-status">
                    <Clock3 size={14} />
                    Content coming soon
                  </span>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* TOPICS */}
      <section className="topics-section">
        <div className="container topics-grid">

          <div>
            <div className="section-kicker light-kicker">
              FUTURE TOPICS
            </div>

            <h2>
              A growing knowledge
              <span>platform.</span>
            </h2>

            <p>
              As we build our publishing library, these are some of
              the areas we intend to explore.
            </p>
          </div>

          <div className="topics-list">

            {futureTopics.map((topic, index) => (
              <div
                className="topic-item"
                key={topic}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <BookOpen size={16} />

                <strong>{topic}</strong>

                <ArrowRight size={15} />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESOURCE CTA */}
      <section className="section resource-section">
        <div className="container resource-card">

          <div className="resource-card-icon">
            <Lightbulb size={25} />
          </div>

          <div>
            <div className="section-kicker">
              LOOKING FOR SOMETHING SPECIFIC?
            </div>

            <h2>
              Ask us about a
              <span>business requirement.</span>
            </h2>

            <p>
              If you are researching a digital, procurement or
              business requirement, contact us directly.
            </p>
          </div>

          <a
            href="#/contact"
            className="corporate-button primary"
          >
            Talk to Us
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container page-cta-inner">

          <div>
            <div className="section-kicker">
              STAY CONNECTED
            </div>

            <h2>
              More insights are
              <span>on the way.</span>
            </h2>

            <p>
              We are building this section progressively with useful
              resources rather than publishing content simply for
              volume.
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