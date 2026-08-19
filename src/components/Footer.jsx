import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-company">
          <a href="#/" className="footer-logo-link">
            <img
              src="/ayaansh-t-corp-logo.png"
              alt="Ayaansh T Corp"
              className="footer-logo"
            />
          </a>

          <p>
            Technology, digital services, procurement support and
            product ventures built around practical execution.
          </p>

          <a
            href="mailto:ayaanshtcorp@gmail.com"
            className="footer-email"
          >
            ayaanshtcorp@gmail.com
          </a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#/who-we-are">Who We Are</a>
          <a href="#/industries">Industries</a>
          <a href="#/case-studies">Case Studies</a>
          <a href="#/insights">Insights</a>
        </div>

        <div className="footer-column">
          <h4>Capabilities</h4>
          <a href="#/what-we-do">What We Do</a>
          <a href="#/what-we-do">Digital Solutions</a>
          <a href="#/what-we-do">Procurement Support</a>
          <a href="#/what-we-do">Business Services</a>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <a href="#/products">Leaf Alchemy</a>
          <a href="#/products">Classic Leaf</a>
          <a href="#/products">Products & Ventures</a>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <a href="#/contact">Contact Us</a>
          <a href="mailto:ayaanshtcorp@gmail.com">
            Email Us
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © 2026 Ayaansh T Corp. All rights reserved.
        </span>

        <span>
          Built around practical execution.
        </span>
      </div>
    </footer>
  );
}