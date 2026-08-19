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
  Leaf,
  FileSearch,
  Users,
  Quote,
} from "lucide-react";

const technologyItems = [
  {
    label: "Web Development",
    icon: Globe2,
    href: "#/what-we-do",
  },
  {
    label: "Mobile Applications",
    icon: Smartphone,
    href: "#/what-we-do",
  },
  {
    label: "SaaS",
    icon: Cloud,
    href: "#/what-we-do",
  },
  {
    label: "Custom Software",
    icon: Code2,
    href: "#/what-we-do",
  },
  {
    label: "Automation",
    icon: Workflow,
    href: "#/what-we-do",
  },
  {
    label: "SEO & Digital Growth",
    icon: Search,
    href: "#/what-we-do",
  },
];

const productItems = [
  {
    label: "Leaf Alchemy",
    icon: Leaf,
    href: "#/products",
  },
  {
    label: "Products & Ventures",
    icon: Cloud,
    href: "#/products",
  },
];

const procurementItems = [
  {
    label: "RFQ Research",
    icon: FileSearch,
    href: "#/what-we-do",
  },
  {
    label: "Supplier Sourcing",
    icon: Users,
    href: "#/what-we-do",
  },
  {
    label: "Quote Support",
    icon: Quote,
    href: "#/what-we-do",
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

          {/* TECHNOLOGY SOLUTIONS */}
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

          {/* HOW WE WORK */}
          <a
            href="#/who-we-are"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            How We Work
          </a>

          {/* WORK */}
          <a
            href="#/case-studies"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Work
          </a>

          {/* PRODUCTS & VENTURES */}
          <div
            className="at-global-nav-item"
            onMouseEnter={() => {
              if (!mobileOpen) {
                setActiveMenu("products");
              }
            }}
          >
            <button
              type="button"
              className="at-global-nav-trigger"
              onClick={() => toggleMenu("products")}
              aria-expanded={
                activeMenu === "products"
              }
            >
              Products & Ventures

              <ChevronDown
                size={14}
                className={
                  activeMenu === "products"
                    ? "at-nav-chevron at-nav-chevron-open"
                    : "at-nav-chevron"
                }
              />
            </button>

            {activeMenu === "products" && (
              <Dropdown
                items={productItems}
                onNavigate={closeMenus}
              />
            )}
          </div>

          {/* PROCUREMENT */}
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
              onClick={() =>
                toggleMenu("procurement")
              }
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

          {/* INSIGHTS */}
          <a
            href="#/insights"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Insights
          </a>

          {/* CONTACT */}
          <a
            href="#/contact"
            className="at-global-nav-link"
            onClick={closeMenus}
          >
            Contact
          </a>

          {/* PRIMARY CTA */}
          <a
            href="#/contact"
            className="at-global-nav-cta"
            onClick={closeMenus}
          >
            Start a Project
            <ArrowRight size={15} />
          </a>

        </nav>
      </div>
    </header>
  );
}