import React from "react";
import "../styles/consent-preferences.css";

const STORAGE_KEY = "ayaansh_consent_preferences";

export default function ConsentPreferences() {
  const [analytics, setAnalytics] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  /* =====================================================
     LOAD SAVED PREFERENCES
  ===================================================== */

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        return;
      }

      const preferences = JSON.parse(stored);

      setAnalytics(preferences.analytics === true);
      setMarketing(preferences.marketing === true);
    } catch (error) {
      console.warn(
        "Unable to load consent preferences.",
        error
      );
    }
  }, []);

  /* =====================================================
     SAVE PREFERENCES
  ===================================================== */

  const savePreferences = () => {
    const preferences = {
      essential: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(preferences)
    );

    setSaved(true);
  };

  /* =====================================================
     ACCEPT ALL
  ===================================================== */

  const acceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };

    setAnalytics(true);
    setMarketing(true);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(preferences)
    );

    setSaved(true);
  };

  /* =====================================================
     REJECT OPTIONAL
  ===================================================== */

  const rejectOptional = () => {
    const preferences = {
      essential: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };

    setAnalytics(false);
    setMarketing(false);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(preferences)
    );

    setSaved(true);
  };

  /* =====================================================
     CLEAR SUCCESS MESSAGE WHEN CHANGING A PREFERENCE
  ===================================================== */

  const handleAnalyticsChange = (event) => {
    setAnalytics(event.target.checked);
    setSaved(false);
  };

  const handleMarketingChange = (event) => {
    setMarketing(event.target.checked);
    setSaved(false);
  };

  return (
    <main className="legal-page consent-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="legal-hero">
        <div className="container">

          <div className="section-kicker">
            PRIVACY
          </div>

          <h1>
            Consent <span>Preferences</span>
          </h1>

          <p>
            Choose how optional technologies may be used on this
            website.
          </p>

          <div className="legal-meta">
            Manage your preferences at any time.
          </div>

        </div>
      </section>


      {/* =================================================
          CONTENT
      ================================================= */}

      <section className="section consent-content">
        <div className="container">

          <div className="consent-panel">

            {/* =================================================
                INTRO
            ================================================= */}

            <div className="consent-intro">

              <div className="section-kicker">
                PRIVACY CONTROLS
              </div>

              <h2>
                Your privacy choices
              </h2>

              <p>
                Essential technologies are required for core website
                functionality. Optional categories can be enabled or
                disabled below.
              </p>

            </div>


            {/* =================================================
                ESSENTIAL
            ================================================= */}

            <div className="consent-option">

              <div className="consent-option-content">

                <h3>
                  Essential
                </h3>

                <p>
                  Required for basic website functionality.
                </p>

              </div>

              <span className="consent-always">
                Always Active
              </span>

            </div>


            {/* =================================================
                ANALYTICS
            ================================================= */}

            <div className="consent-option">

              <div className="consent-option-content">

                <h3>
                  Analytics
                </h3>

                <p>
                  Optional technologies used to understand website
                  usage and improve the experience.
                </p>

              </div>

              <label
                className="consent-switch"
                aria-label="Enable analytics"
              >

                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={handleAnalyticsChange}
                />

                <span />

              </label>

            </div>


            {/* =================================================
                MARKETING
            ================================================= */}

            <div className="consent-option">

              <div className="consent-option-content">

                <h3>
                  Marketing
                </h3>

                <p>
                  Optional technologies that may support marketing
                  or advertising functionality if introduced.
                </p>

              </div>

              <label
                className="consent-switch"
                aria-label="Enable marketing"
              >

                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={handleMarketingChange}
                />

                <span />

              </label>

            </div>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="consent-actions">

              <button
                type="button"
                className="corporate-button primary"
                onClick={acceptAll}
              >
                Accept All
              </button>

              <button
                type="button"
                className="corporate-button secondary"
                onClick={rejectOptional}
              >
                Reject Optional
              </button>

              <button
                type="button"
                className="corporate-button secondary"
                onClick={savePreferences}
              >
                Save Preferences
              </button>

            </div>


            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {saved && (
              <div
                className="consent-success"
                role="status"
                aria-live="polite"
              >
                Your consent preferences have been saved on this
                device.
              </div>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}