import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import ConsentBanner from "./components/ConsentBanner";

import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";

// Technology Solutions
import WebDevelopment from "./pages/WebDevelopment";
import MobileApplications from "./pages/MobileApplications";
import SaaS from "./pages/SaaS";
import CustomSoftware from "./pages/CustomSoftware";
import Automation from "./pages/Automation";
import SEODigitalGrowth from "./pages/SEODigitalGrowth";

// Company / General
import WhoWeAre from "./pages/WhoWeAre";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Products from "./pages/Products";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

// Procurement
import Procurement from "./pages/Procurement";
import RFQResearch from "./pages/RFQResearch";
import SupplierSourcing from "./pages/SupplierSourcing";
import QuoteSupport from "./pages/QuoteSupport";

// Legal / Privacy
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DataProtection from "./pages/DataProtection";
import ConsentPreferences from "./pages/ConsentPreferences";

// Global styles
import "./styles.css";
import "./styles/ai-assistant.css";
import "./styles/footer.css";
import "./styles/consent-banner.css";


/* =========================================================
   ROUTING
========================================================= */

function getPage() {
  const hash = window.location.hash || "#/";

  const path = hash.startsWith("#")
    ? hash.substring(1)
    : hash;

  const normalizedPath = path || "/";

  switch (normalizedPath) {

    /* =====================================================
       CORE
    ===================================================== */

    case "/":
      return "home";

    case "/what-we-do":
      return "what-we-do";

    case "/who-we-are":
      return "who-we-are";

    case "/industries":
      return "industries";

    case "/case-studies":
      return "case-studies";

    case "/products":
      return "products";

    case "/insights":
      return "insights";

    case "/contact":
      return "contact";


    /* =====================================================
       TECHNOLOGY SOLUTIONS
    ===================================================== */

    case "/technology/web-development":
      return "web-development";

    case "/technology/mobile-applications":
      return "mobile-applications";

    case "/technology/saas":
      return "saas";

    case "/technology/custom-software":
      return "custom-software";

    case "/technology/automation":
      return "automation";

    case "/technology/seo-digital-growth":
      return "seo-digital-growth";


    /* =====================================================
       PROCUREMENT
    ===================================================== */

    case "/procurement":
      return "procurement";

    case "/procurement/rfq-research":
      return "rfq-research";

    case "/procurement/supplier-sourcing":
      return "supplier-sourcing";

    case "/procurement/quote-support":
      return "quote-support";


    /* =====================================================
       LEGAL / PRIVACY
    ===================================================== */

    case "/privacy-policy":
      return "privacy-policy";

    case "/cookie-policy":
      return "cookie-policy";

    case "/data-protection":
      return "data-protection";

    case "/consent-preferences":
      return "consent-preferences";


    /* =====================================================
       FALLBACK
    ===================================================== */

    default:
      return "home";
  }
}


/* =========================================================
   PAGE ROUTER
========================================================= */

function Page() {
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {

    const handleHashChange = () => {

      setPage(getPage());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };

  }, []);


  switch (page) {

    /* =====================================================
       CORE
    ===================================================== */

    case "home":
      return <Home />;

    case "what-we-do":
      return <WhatWeDo />;

    case "who-we-are":
      return <WhoWeAre />;

    case "industries":
      return <Industries />;

    case "case-studies":
      return <CaseStudies />;

    case "products":
      return <Products />;

    case "insights":
      return <Insights />;

    case "contact":
      return <Contact />;


    /* =====================================================
       TECHNOLOGY SOLUTIONS
    ===================================================== */

    case "web-development":
      return <WebDevelopment />;

    case "mobile-applications":
      return <MobileApplications />;

    case "saas":
      return <SaaS />;

    case "custom-software":
      return <CustomSoftware />;

    case "automation":
      return <Automation />;

    case "seo-digital-growth":
      return <SEODigitalGrowth />;


    /* =====================================================
       PROCUREMENT
    ===================================================== */

    case "procurement":
      return <Procurement />;

    case "rfq-research":
      return <RFQResearch />;

    case "supplier-sourcing":
      return <SupplierSourcing />;

    case "quote-support":
      return <QuoteSupport />;


    /* =====================================================
       LEGAL / PRIVACY
    ===================================================== */

    case "privacy-policy":
      return <PrivacyPolicy />;

    case "cookie-policy":
      return <CookiePolicy />;

    case "data-protection":
      return <DataProtection />;

    case "consent-preferences":
      return <ConsentPreferences />;


    /* =====================================================
       FALLBACK
    ===================================================== */

    default:
      return <Home />;
  }
}


/* =========================================================
   APPLICATION
========================================================= */

function App() {
  return (
    <div className="site-shell">

      {/* GLOBAL HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <Page />

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* GLOBAL CONSENT BANNER */}
      <ConsentBanner />

      {/* GLOBAL AI ASSISTANT */}
      <AIAssistant />

    </div>
  );
}


/* =========================================================
   APPLICATION ROOT
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);