import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Products from "./pages/Products";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import "./styles.css";

function getPage() {
  const path = window.location.hash.replace("#", "") || "/";

  if (path === "/what-we-do") return "what-we-do";
  if (path === "/who-we-are") return "who-we-are";
  if (path === "/industries") return "industries";
  if (path === "/case-studies") return "case-studies";
  if (path === "/products") return "products";
  if (path === "/insights") return "insights";
  if (path === "/contact") return "contact";

  return "home";
}

function Page() {
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  switch (page) {
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

    default:
      return <Home />;
  }
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);