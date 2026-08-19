import React from "react";
import { ArrowRight } from "lucide-react";

const menus = {
  "What We Do": {
    intro: "Capabilities built around real business requirements.",
    columns: [
      {
        title: "Digital Solutions",
        items: [
          ["Web Development", "#/what-we-do"],
          ["Digital Experience", "#/what-we-do"],
          ["Website Modernization", "#/what-we-do"],
        ],
      },
      {
        title: "Technology Services",
        items: [
          ["Cloud Solutions", "#/what-we-do"],
          ["Automation", "#/what-we-do"],
          ["Technical Services", "#/what-we-do"],
        ],
      },
      {
        title: "Procurement Support",
        items: [
          ["RFQ Research", "#/what-we-do"],
          ["Supplier Sourcing", "#/what-we-do"],
          ["Quote Management", "#/what-we-do"],
        ],
      },
      {
        title: "Business Services",
        items: [
          ["Business Research", "#/what-we-do"],
          ["Digital Operations", "#/what-we-do"],
          ["Sourcing Support", "#/what-we-do"],
        ],
      },
    ],
  },

  "Who We Are": {
    intro: "A practical company built around execution.",
    columns: [
      {
        title: "Our Company",
        items: [
          ["About Us", "#/who-we-are"],
          ["Our Purpose", "#/who-we-are"],
        ],
      },
      {
        title: "How We Work",
        items: [
          ["Our Approach", "#/who-we-are"],
          ["What Makes Us Reliable", "#/who-we-are"],
        ],
      },
    ],
  },

  Industries: {
    intro: "Capabilities that adapt to the organization.",
    columns: [
      {
        title: "Public Sector",
        items: [
          ["Government & Public Sector", "#/industries"],
        ],
      },
      {
        title: "Business",
        items: [
          ["Small & Mid-Sized Business", "#/industries"],
          ["Technology", "#/industries"],
        ],
      },
      {
        title: "Products",
        items: [
          ["Consumer Products", "#/industries"],
        ],
      },
    ],
  },

  Products: {
    intro: "Products and ventures we're building.",
    columns: [
      {
        title: "Launched",
        items: [
          ["Leaf Alchemy", "#/products"],
        ],
      },
      {
        title: "Coming Soon",
        items: [
          ["Classic Leaf", "#/products"],
        ],
      },
    ],
  },
};

export default function MegaMenu({ name, onNavigate }) {
  const menu = menus[name];

  if (!menu) return null;

  return (
    <div
      className="mega-menu"
      onMouseDown={(event) => event.stopPropagation()}
    >
      <div className="mega-menu-inner">
        <div className="mega-intro">
          <span>{name}</span>
          <p>{menu.intro}</p>
        </div>

        <div className="mega-columns">
          {menu.columns.map((column) => (
            <div className="mega-column" key={column.title}>
              <h4>{column.title}</h4>

              {column.items.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={onNavigate}
                >
                  <span>{label}</span>
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}