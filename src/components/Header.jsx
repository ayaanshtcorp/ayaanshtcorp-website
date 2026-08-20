import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Globe2,
  Smartphone,
  Cloud,
  Code2,
  Workflow,
  Search,
  FileSearch,
  Users,
  Quote,
} from "lucide-react";

const technologyItems = [
  {
    label: "Web Development",
    icon: Globe2,
    href: "#/technology/web-development",
  },
  {
    label: "Mobile Applications",
    icon: Smartphone,
    href: "#/technology/mobile-applications",
  },
  {
    label: "SaaS Solutions",
    icon: Cloud,
    href: "#/technology/saas",
  },
  {
    label: "Custom Software",
    icon: Code2,
    href: "#/technology/custom-software",
  },
  {
    label: "Automation",
    icon: Workflow,
    href: "#/technology/automation",
  },
  {
    label: "SEO & Digital Growth",
    icon: Search,
    href: "#/technology/seo-digital-growth",
  },
];

const procurementItems = [
  {
    label: "RFQ Research",
    icon: FileSearch,
    href: "#/procurement/rfq-research",
  },
  {
    label: "Supplier Sourcing",
    icon: Users,
    href: "#/procurement/supplier-sourcing",
  },
  {
    label: "Quote Support",
    icon: Quote,
    href: "#/procurement/quote-support",
  },
];

function Dropdown({ items, onNavigate }) {
  return (
    <div className="at-nav-dropdown">
      {items.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          onClick={onNavigate}
        >
          <span className="at-nav-dropdown-icon">
            <Icon size={16} />
          </span>

          <span className="at-nav-dropdown-label">
            {label}
          </span>

          <ArrowRight
            size={14}
            className="at-nav-arrow"
          />
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const toggleMenu = (menu) => {
    setActiveMenu((current) =>
      current === menu ? null : menu
    );
  };

  return (
    <header
      className="at-global-header"
      onMouseLeave={() => {
        if (!mobileOpen) {
          setActiveMenu(null);
        }
      }}
    >
      <div className="at-container at-global-header-inner">

        {/* LOGO */}
        <a
          href="#/"
          className="at-global-logo"
          onClick={closeMenus}
          aria-label="Ayaansh T Corp home"
        >
          <img
            src="/ayaansh-t-corp-logo.png"
            alt="Ayaansh T Corp"
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="at-global-mobile-toggle"
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveMenu(null);
          }}
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

        {/* NAVIGATION */}
        <nav
          className={
            mobileOpen
              ? "at-global-nav at-global-nav-open"
              : "at-global-nav"
          }
        >

          {/* 1. HOME */}
          <a
            href="#/"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Home
          </a>

          {/* 2. WHO WE ARE */}
          <a
            href="#/who-we-are"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Who We Are
          </a>

          {/* 3. TECHNOLOGY SOLUTIONS */}
          <div
            className="at-global-nav-item"
            onMouseEnter={() => {
              if (!mobileOpen) {
                setActiveMenu("technology");
              }
            }}
          >
            <button
              type="button"
              className="at-global-nav-trigger"
              onClick={() => toggleMenu("technology")}
              aria-expanded={
                activeMenu === "technology"
              }
            >
              Technology Solutions

              <ChevronDown
                size={14}
                className={
                  activeMenu === "technology"
                    ? "at-nav-chevron at-nav-chevron-open"
                    : "at-nav-chevron"
                }
              />
            </button>

            {activeMenu === "technology" && (
              <Dropdown
                items={technologyItems}
                onNavigate={closeMenus}
              />
            )}
          </div>

          {/* 4. PROCUREMENT */}
          <div
            className="at-global-nav-item"
            onMouseEnter={() => {
              if (!mobileOpen) {
                setActiveMenu("procurement");
              }
            }}
          >
            <button
              type="button"
              className="at-global-nav-trigger"
              onClick={() => toggleMenu("procurement")}
              aria-expanded={
                activeMenu === "procurement"
              }
            >
              Procurement

              <ChevronDown
                size={14}
                className={
                  activeMenu === "procurement"
                    ? "at-nav-chevron at-nav-chevron-open"
                    : "at-nav-chevron"
                }
              />
            </button>

            {activeMenu === "procurement" && (
              <Dropdown
                items={procurementItems}
                onNavigate={closeMenus}
              />
            )}
          </div>

          {/* 5. PRODUCTS & VENTURES */}
          <a
            href="#/products"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Products & Ventures
          </a>

          {/* 6. INSIGHTS */}
          <a
            href="#/insights"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Insights
          </a>

          {/* 7. CONTACT */}
          <a
            href="#/contact"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Contact
          </a>

        </nav>
      </div>
    </header>
  );
}