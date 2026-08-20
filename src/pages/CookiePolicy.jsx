import React from "react";
import "../styles/cookie-policy.css";

export default function CookiePolicy() {

  /* =====================================================
     CONTENTS NAVIGATION
  ===================================================== */

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="legal-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="legal-hero">
        <div className="container">

          <div className="section-kicker">
            LEGAL
          </div>

          <h1>
            Cookie <span>Policy</span>
          </h1>

          <p>
            Information about cookies and similar technologies used on
            the Ayaansh T Corp website.
          </p>

          <div className="legal-meta">
            Last updated: August 20, 2026
          </div>

        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="section legal-content">
        <div className="container legal-layout">

          {/* =================================================
              SIDEBAR / CONTENTS
          ================================================= */}

          <aside className="legal-sidebar">

            <strong>
              Contents
            </strong>

            <a
              href="#cookies-what"
              onClick={(event) =>
                scrollToSection(event, "cookies-what")
              }
            >
              What Are Cookies?
            </a>

            <a
              href="#cookies-use"
              onClick={(event) =>
                scrollToSection(event, "cookies-use")
              }
            >
              How We May Use Cookies
            </a>

            <a
              href="#cookies-essential"
              onClick={(event) =>
                scrollToSection(event, "cookies-essential")
              }
            >
              Essential Technologies
            </a>

            <a
              href="#cookies-optional"
              onClick={(event) =>
                scrollToSection(event, "cookies-optional")
              }
            >
              Optional Technologies
            </a>

            <a
              href="#cookies-preferences"
              onClick={(event) =>
                scrollToSection(event, "cookies-preferences")
              }
            >
              Managing Preferences
            </a>

            <a
              href="#cookies-browser"
              onClick={(event) =>
                scrollToSection(event, "cookies-browser")
              }
            >
              Browser Controls
            </a>

            <a
              href="#cookies-contact"
              onClick={(event) =>
                scrollToSection(event, "cookies-contact")
              }
            >
              Contact
            </a>

          </aside>


          {/* =================================================
              ARTICLE
          ================================================= */}

          <article className="legal-article">

            {/* =================================================
                1. WHAT ARE COOKIES
            ================================================= */}

            <section id="cookies-what">

              <h2>
                1. What Are Cookies?
              </h2>

              <p>
                Cookies are small files or similar technologies that can
                be stored on your device when you visit a website.
              </p>

            </section>


            {/* =================================================
                2. HOW WE MAY USE COOKIES
            ================================================= */}

            <section id="cookies-use">

              <h2>
                2. How We May Use Cookies
              </h2>

              <p>
                Cookies may be used to support website functionality,
                remember preferences, understand website usage and,
                where enabled, support analytics.
              </p>

            </section>


            {/* =================================================
                3. ESSENTIAL TECHNOLOGIES
            ================================================= */}

            <section id="cookies-essential">

              <h2>
                3. Essential Technologies
              </h2>

              <p>
                Some technologies may be necessary for the website to
                function correctly. These technologies may remain active
                because disabling them could affect core functionality.
              </p>

            </section>


            {/* =================================================
                4. OPTIONAL TECHNOLOGIES
            ================================================= */}

            <section id="cookies-optional">

              <h2>
                4. Optional Technologies
              </h2>

              <p>
                Optional analytics or other non-essential technologies
                should only be enabled where the applicable consent
                mechanism permits them.
              </p>

            </section>


            {/* =================================================
                5. MANAGING PREFERENCES
            ================================================= */}

            <section id="cookies-preferences">

              <h2>
                5. Managing Preferences
              </h2>

              <p>
                You can use the Consent Preferences option available on
                the website to review or change available optional
                preferences.
              </p>

              <a
                href="#/consent-preferences"
                className="corporate-button primary"
              >
                Manage Consent Preferences
              </a>

            </section>


            {/* =================================================
                6. BROWSER CONTROLS
            ================================================= */}

            <section id="cookies-browser">

              <h2>
                6. Browser Controls
              </h2>

              <p>
                Most modern browsers also provide controls for blocking,
                deleting or restricting cookies. Blocking certain
                technologies may affect website functionality.
              </p>

            </section>


            {/* =================================================
                7. CONTACT
            ================================================= */}

            <section id="cookies-contact">

              <h2>
                7. Contact
              </h2>

              <p>
                Questions about this Cookie Policy can be sent to:
              </p>

              <div className="legal-contact-card">

                <strong>
                  Ayaansh T Corp
                </strong>

                <a href="mailto:ayaanshtcorp@gmail.com">
                  ayaanshtcorp@gmail.com
                </a>

              </div>

            </section>

          </article>

        </div>
      </section>

    </main>
  );
}