import React from "react";

const STORAGE_KEY = "ayaansh_consent_preferences";

export default function ConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      // Show the banner only when no consent decision exists.
      if (!stored) {
        setVisible(true);
      }
    } catch (error) {
      console.warn(
        "Unable to read consent preferences.",
        error
      );

      // If localStorage is unavailable, still show the banner.
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const savePreferences = (analytics, marketing) => {
    const preferences = {
      essential: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(preferences)
      );
    } catch (error) {
      console.warn(
        "Unable to save consent preferences.",
        error
      );
    }

    setVisible(false);
  };

  const acceptAll = () => {
    savePreferences(true, true);
  };

  const rejectOptional = () => {
    savePreferences(false, false);
  };

  const managePreferences = () => {
    setVisible(false);

    window.location.hash = "#/consent-preferences";
  };

  return (
    <aside
      className="consent-banner"
      role="dialog"
      aria-label="Privacy and cookie preferences"
    >
      <div className="consent-banner-inner">

        <div className="consent-banner-content">

          <h2>
            We value your privacy
          </h2>

          <p>
            We use essential technologies to operate this website
            and optional technologies to improve your experience.
            You can accept all, reject optional technologies, or
            manage your preferences.
          </p>

          <a
            href="#/privacy-policy"
            className="consent-banner-policy"
          >
            Privacy Policy
          </a>

        </div>

        <div className="consent-banner-actions">

          <button
            type="button"
            className="consent-banner-button primary"
            onClick={acceptAll}
          >
            Accept All
          </button>

          <button
            type="button"
            className="consent-banner-button secondary"
            onClick={rejectOptional}
          >
            Reject Optional
          </button>

          <button
            type="button"
            className="consent-banner-button secondary"
            onClick={managePreferences}
          >
            Manage Preferences
          </button>

        </div>

      </div>
    </aside>
  );
}