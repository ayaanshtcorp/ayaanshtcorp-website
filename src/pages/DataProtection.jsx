import React from "react";
import "../styles/data-protection.css";

export default function DataProtection() {

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
            DATA PROTECTION
          </div>

          <h1>
            Data Protection <span>& DPDP</span>
          </h1>

          <p>
            Our approach to personal data protection and privacy in
            connection with the website and our services.
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
              href="#data-approach"
              onClick={(event) =>
                scrollToSection(event, "data-approach")
              }
            >
              Our Approach
            </a>

            <a
              href="#personal-data"
              onClick={(event) =>
                scrollToSection(event, "personal-data")
              }
            >
              Personal Data
            </a>

            <a
              href="#notice-purpose"
              onClick={(event) =>
                scrollToSection(event, "notice-purpose")
              }
            >
              Notice and Purpose
            </a>

            <a
              href="#data-consent"
              onClick={(event) =>
                scrollToSection(event, "data-consent")
              }
            >
              Consent
            </a>

            <a
              href="#individual-rights"
              onClick={(event) =>
                scrollToSection(event, "individual-rights")
              }
            >
              Individual Rights
            </a>

            <a
              href="#data-security"
              onClick={(event) =>
                scrollToSection(event, "data-security")
              }
            >
              Data Security
            </a>

            <a
              href="#data-retention"
              onClick={(event) =>
                scrollToSection(event, "data-retention")
              }
            >
              Data Retention
            </a>

            <a
              href="#grievance-requests"
              onClick={(event) =>
                scrollToSection(event, "grievance-requests")
              }
            >
              Grievance and Requests
            </a>

          </aside>


          {/* =================================================
              ARTICLE
          ================================================= */}

          <article className="legal-article">

            {/* =================================================
                1. OUR APPROACH
            ================================================= */}

            <section id="data-approach">

              <h2>
                1. Our Approach
              </h2>

              <p>
                Ayaansh T Corp aims to handle personal data responsibly,
                transparently and only for legitimate purposes connected
                with our business and services.
              </p>

            </section>


            {/* =================================================
                2. PERSONAL DATA
            ================================================= */}

            <section id="personal-data">

              <h2>
                2. Personal Data
              </h2>

              <p>
                Personal data may include information that identifies or
                can reasonably be associated with an individual, such as
                contact information and information submitted through our
                website forms.
              </p>

            </section>


            {/* =================================================
                3. NOTICE AND PURPOSE
            ================================================= */}

            <section id="notice-purpose">

              <h2>
                3. Notice and Purpose
              </h2>

              <p>
                Where personal data is collected, we aim to provide
                appropriate information about what is being collected and
                why it is required.
              </p>

            </section>


            {/* =================================================
                4. CONSENT
            ================================================= */}

            <section id="data-consent">

              <h2>
                4. Consent
              </h2>

              <p>
                Where processing relies on consent, we provide mechanisms
                intended to allow individuals to make informed choices and,
                where applicable, withdraw consent.
              </p>

            </section>


            {/* =================================================
                5. INDIVIDUAL RIGHTS
            ================================================= */}

            <section id="individual-rights">

              <h2>
                5. Individual Rights
              </h2>

              <p>
                Subject to applicable law and circumstances, individuals
                may have rights relating to their personal data, including
                access to information, correction, updating, withdrawal of
                consent and grievance redressal.
              </p>

            </section>


            {/* =================================================
                6. DATA SECURITY
            ================================================= */}

            <section id="data-security">

              <h2>
                6. Data Security
              </h2>

              <p>
                We use reasonable safeguards intended to protect personal
                data against unauthorized access, misuse, alteration,
                disclosure or destruction.
              </p>

            </section>


            {/* =================================================
                7. DATA RETENTION
            ================================================= */}

            <section id="data-retention">

              <h2>
                7. Data Retention
              </h2>

              <p>
                Personal data is retained only for periods reasonably
                necessary for the relevant purpose, business requirements,
                security and applicable legal obligations.
              </p>

            </section>


            {/* =================================================
                8. GRIEVANCE AND REQUESTS
            ================================================= */}

            <section id="grievance-requests">

              <h2>
                8. Grievance and Requests
              </h2>

              <p>
                Privacy requests, concerns and grievances can be submitted
                to Ayaansh T Corp using the contact information below.
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