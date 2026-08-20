import React from "react";
import { ArrowRight } from "lucide-react";

const menus = {
  "Who We Are": {
    intro: "A practical company built around execution.",
    columns: [
      {
        title: "Our Company",
        items: [
          ["Who We Are", "#/who-we-are"],
          ["Our Purpose", "#/who-we-are"],
        ],
      },
      {
        title: "How We Work",
        items: [
          ["Our Approach", "#/who-we-are"],
          ["Our Process", "#/who-we-are"],
        ],
      },
    ],
  },

  "Technology Solutions": {
    intro: "Digital solutions designed around real business requirements.",
    columns: [
      {
        title: "Digital Solutions",
        items: [
          ["Web Development", "#/technology/web-development"],
          ["Mobile Applications", "#/technology/mobile-applications"],
          ["SaaS Solutions", "#/technology/saas"],
        ],
      },
      {
        title: "Software & Automation",
        items: [
          ["Custom Software", "#/technology/custom-software"],
          ["Automation", "#/technology/automation"],
        ],
      },
      {
        title: "Digital Growth",
        items: [
          ["SEO & Digital Growth", "#/technology/seo-digital-growth"],
        ],
      },
    ],
  },

  "Products & Ventures": {
    intro: "Products and ventures built and operated by Ayaansh T Corp.",
    columns: [
      {
        title: "Active Products",
        items: [
          ["Leaf Alchemy", "#/products"],
        ],
      },
      {
        title: "Ventures",
        items: [
          ["Products & Ventures", "#/products"],
        ],
      },
    ],
  },

  Procurement: {
    intro: "Research, sourcing and quote support for applicable procurement opportunities.",
    columns: [
      {
        title: "Procurement Research",
        items: [
          ["RFQ Research", "#/procurement/rfq-research"],
        ],
      },
      {
        title: "Supplier Support",
        items: [
          ["Supplier Sourcing", "#/procurement/supplier-sourcing"],
        ],
      },
      {
        title: "Quote Support",
        items: [
          ["Quote Support", "#/procurement/quote-support"],
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