import React from "react";
import "../styles/privacy-policy.css";

export default function PrivacyPolicy() {
  const scrollToSection = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
            Privacy <span>Policy</span>
          </h1>

          <p>
            How Ayaansh T Corp collects, uses, protects and manages
            information when you use our website and services.
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
              href="#information"
              onClick={(event) =>
                scrollToSection(event, "information")
              }
            >
              Information We Collect
            </a>

            <a
              href="#use"
              onClick={(event) =>
                scrollToSection(event, "use")
              }
            >
              How We Use Information
            </a>

            <a
              href="#sharing"
              onClick={(event) =>
                scrollToSection(event, "sharing")
              }
            >
              Information Sharing
            </a>

            <a
              href="#cookies"
              onClick={(event) =>
                scrollToSection(event, "cookies")
              }
            >
              Cookies
            </a>

            <a
              href="#ai"
              onClick={(event) =>
                scrollToSection(event, "ai")
              }
            >
              AI Assistant
            </a>

            <a
              href="#retention"
              onClick={(event) =>
                scrollToSection(event, "retention")
              }
            >
              Data Retention
            </a>

            <a
              href="#security"
              onClick={(event) =>
                scrollToSection(event, "security")
              }
            >
              Security
            </a>

            <a
              href="#rights"
              onClick={(event) =>
                scrollToSection(event, "rights")
              }
            >
              Your Rights
            </a>

            <a
              href="#contact"
              onClick={(event) =>
                scrollToSection(event, "contact")
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
                1. INFORMATION WE COLLECT
            ================================================= */}

            <section id="information">

              <h2>
                1. Information We Collect
              </h2>

              <p>
                We may collect information that you voluntarily provide
                when you contact us, request information, submit a business
                enquiry, communicate with us or otherwise interact with our
                website.
              </p>

              <p>
                Depending on how you interact with the website, this may
                include your name, email address, company information,
                contact details, project requirements and other information
                you choose to provide.
              </p>

            </section>


            {/* =================================================
                2. HOW WE USE INFORMATION
            ================================================= */}

            <section id="use">

              <h2>
                2. How We Use Information
              </h2>

              <p>
                Information may be used to:
              </p>

              <ul>

                <li>
                  Respond to enquiries and requests.
                </li>

                <li>
                  Understand business and project requirements.
                </li>

                <li>
                  Provide requested services or information.
                </li>

                <li>
                  Communicate with customers, prospects and partners.
                </li>

                <li>
                  Operate, maintain and improve our website.
                </li>

                <li>
                  Maintain website security and prevent misuse.
                </li>

              </ul>

            </section>


            {/* =================================================
                3. INFORMATION SHARING
            ================================================= */}

            <section id="sharing">

              <h2>
                3. Information Sharing
              </h2>

              <p>
                We do not sell personal information as part of our ordinary
                business operations.
              </p>

              <p>
                Information may be shared with service providers,
                technology providers or professional advisers where
                reasonably necessary to operate the website, provide
                requested services, communicate with you or meet applicable
                legal obligations.
              </p>

            </section>


            {/* =================================================
                4. COOKIES
            ================================================= */}

            <section id="cookies">

              <h2>
                4. Cookies and Similar Technologies
              </h2>

              <p>
                Our website may use cookies or similar technologies for
                essential functionality and, where enabled, analytics or
                other optional purposes.
              </p>

              <p>
                You can review our Cookie Policy and manage available
                consent preferences through the website.
              </p>

            </section>


            {/* =================================================
                5. AI ASSISTANT
            ================================================= */}

            <section id="ai">

              <h2>
                5. AI Assistant
              </h2>

              <p>
                Ayaansh T Corp may provide an AI Assistant on the website
                to help visitors understand our services and navigate
                available information.
              </p>

              <p>
                Visitors should not submit passwords, payment information,
                confidential business information, government identifiers
                or other sensitive information through the AI Assistant.
              </p>

              <p>
                Information submitted through the AI Assistant may be
                processed using technology and service providers that
                support the operation of the feature.
              </p>

            </section>


            {/* =================================================
                6. DATA RETENTION
            ================================================= */}

            <section id="retention">

              <h2>
                6. Data Retention
              </h2>

              <p>
                We retain information only for as long as reasonably
                necessary for the purpose for which it was collected,
                legitimate business requirements, dispute resolution,
                security and applicable legal obligations.
              </p>

            </section>


            {/* =================================================
                7. SECURITY
            ================================================= */}

            <section id="security">

              <h2>
                7. Security
              </h2>

              <p>
                We take reasonable technical and organisational measures
                intended to protect information against unauthorized access,
                misuse, alteration, disclosure or destruction.
              </p>

              <p>
                However, no internet transmission or electronic storage
                system can be guaranteed to be completely secure.
              </p>

            </section>


            {/* =================================================
                8. YOUR RIGHTS
            ================================================= */}

            <section id="rights">

              <h2>
                8. Your Rights
              </h2>

              <p>
                Depending on applicable law and the circumstances of the
                processing, individuals may have rights relating to their
                personal data, including rights concerning access,
                correction, updating, withdrawal of consent and grievance
                redressal.
              </p>

              <p>
                Requests can be submitted using the contact details below.
              </p>

            </section>


            {/* =================================================
                9. CONTACT
            ================================================= */}

            <section id="contact">

              <h2>
                9. Contact
              </h2>

              <p>
                For privacy-related questions or requests, contact:
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