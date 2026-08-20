import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayaansh-t-corp-undefined-84b57b42b/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593183794086",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ayaanshtcorp/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCFuggLvszOrqBerIQMWzfXA",
  },
  {
    name: "X",
    href: "https://x.com/Ayaanshtcorp",
  },
];

function SocialIcon({ name }) {
  switch (name) {
    case "LinkedIn":
      return <Linkedin size={17} />;

    case "Facebook":
      return <Facebook size={17} />;

    case "Instagram":
      return <Instagram size={17} />;

    case "YouTube":
      return <Youtube size={17} />;

    case "X":
      return <span className="footer-social-x">X</span>;

    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">

        {/* COMPANY */}
        <div className="footer-company">
          <a
            href="#/"
            className="footer-logo-link"
            aria-label="Ayaansh T Corp home"
          >
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

          {/* SOCIAL NETWORKS */}
          <div className="footer-social">
            <span className="footer-social-label">
              Follow Ayaansh T Corp
            </span>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ayaansh T Corp on ${social.name}`}
                  title={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>Company</h4>

          <a href="#/who-we-are">
            Who We Are
          </a>

          <a href="#/industries">
            Industries
          </a>

          <a href="#/case-studies">
            Case Studies
          </a>

          <a href="#/insights">
            Insights
          </a>
        </div>

        {/* CAPABILITIES */}
        <div className="footer-column">
          <h4>Capabilities</h4>

          <a href="#/what-we-do">
            What We Do
          </a>

          <a href="#/what-we-do">
            Digital Solutions
          </a>

          <a href="#/what-we-do">
            Procurement Support
          </a>

          <a href="#/what-we-do">
            Business Services
          </a>
        </div>

        {/* PRODUCTS */}
        <div className="footer-column">
          <h4>Products</h4>

          <a href="#/products">
            Leaf Alchemy
          </a>

          <a href="#/products">
            Products & Ventures
          </a>
        </div>

        {/* CONNECT */}
        <div className="footer-column">
          <h4>Connect</h4>

          <a href="#/contact">
            Contact Us
          </a>

          <a href="mailto:ayaanshtcorp@gmail.com">
            Email Us
          </a>
        </div>

        {/* LEGAL & PRIVACY */}
        <div className="footer-column">
          <h4>Legal & Privacy</h4>

          <a href="#/privacy-policy">
            Privacy Policy
          </a>

          <a href="#/cookie-policy">
            Cookie Policy
          </a>

          <a href="#/data-protection">
            Data Protection
          </a>

          <a href="#/consent-preferences">
            Consent Preferences
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
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