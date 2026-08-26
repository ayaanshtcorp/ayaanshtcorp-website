import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Globe2,
  MessageSquare,
  CheckCircle2,
  Send,
  LoaderCircle,
} from "lucide-react";

const contactOptions = [
  {
    icon: Globe2,
    title: "Web & Digital",
    text: "Discuss a website, mobile application, redesign, digital experience or business technology requirement.",
  },
  {
    icon: MessageSquare,
    title: "Business Services",
    text: "Tell us about a research, sourcing, automation, procurement or business support requirement.",
  },
  {
    icon: Mail,
    title: "General Enquiry",
    text: "For partnerships, products, ventures, collaborations or other business enquiries.",
  },
];

const process = [
  "Tell us what you need",
  "We review the requirement",
  "We discuss the appropriate approach",
  "We define the next step",
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  timeline: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.consent) {
      setError("Please accept the privacy consent before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to submit your enquiry."
        );
      }

      setSubmitted(true);
    } catch (submitError) {
      console.error("Contact form submission failed:", submitError);

      setError(
        "We couldn't submit your enquiry right now. Please try again or email us directly at ayaanshtcorp@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
  };

  return (
    <main className="inner-page contact-page">

      {/* HERO */}
      <section className="inner-hero contact-hero">
        <div className="container inner-hero-inner">

          <div>
            <div className="section-kicker">
              CONTACT
            </div>

            <h1>
              Let's talk about
              <span>what you're building.</span>
            </h1>

            <p>
              Have a project, business requirement, procurement
              opportunity or product enquiry? Start the conversation
              and tell us what you are trying to accomplish.
            </p>
          </div>

          <div className="inner-hero-side">
            <span>GET STARTED</span>

            <strong>
              Requirement.
              <br />
              Discussion.
              <br />
              Next step.
            </strong>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section contact-form-section">
        <div className="container">

          <div className="section-heading-large">

            <div>
              <div className="section-kicker">
                START A CONVERSATION
              </div>

              <h2>
                Tell us what
                <span>you need.</span>
              </h2>
            </div>

            <p>
              Share the requirement and a few details about your
              project. This helps us understand the objective and
              determine the appropriate next step.
            </p>

          </div>

          {submitted ? (
            <div className="contact-success">

              <div className="contact-success-icon">
                <CheckCircle2 size={30} />
              </div>

              <div>
                <div className="section-kicker">
                  REQUEST RECEIVED
                </div>

                <h3>
                  Thank you. Your enquiry has been received.
                </h3>

                <p>
                  We have captured your requirement. Our team will
                  review the information and get back to you with
                  the appropriate next step.
                </p>
              </div>

              <button
                type="button"
                className="corporate-button secondary"
                onClick={resetForm}
              >
                Submit another enquiry
              </button>

            </div>
          ) : (
            <form
              className="corporate-contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-grid">

                <div className="form-field">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company">
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company or organization"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Business Email <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 / +91"
                    autoComplete="tel"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">
                    Area of Interest <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Digital Solutions">
                      Digital Solutions
                    </option>
                    <option value="Cloud & Technical Services">
                      Cloud & Technical Services
                    </option>
                    <option value="Automation">
                      Automation
                    </option>
                    <option value="Government Procurement Support">
                      Government Procurement Support
                    </option>
                    <option value="Business Services">
                      Business Services
                    </option>
                    <option value="Products & Ventures">
                      Products & Ventures
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="timeline">
                    Expected Timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select timeline
                    </option>
                    <option value="Immediate">
                      Immediate
                    </option>
                    <option value="1–4 weeks">
                      1–4 weeks
                    </option>
                    <option value="1–3 months">
                      1–3 months
                    </option>
                    <option value="3+ months">
                      3+ months
                    </option>
                    <option value="Exploring">
                      Still exploring
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-field form-field-full">
                <label htmlFor="message">
                  Project / Requirement <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are trying to accomplish, what you need, and any important requirements or constraints."
                  rows="7"
                  required
                />
              </div>

              <label className="form-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                />

                <span>
                  I agree to Ayaansh T Corp processing the information
                  submitted through this form for the purpose of
                  responding to my enquiry. Please see our{" "}
                  <a href="#/privacy-policy">
                    Privacy Policy
                  </a>.
                </span>

              </label>

              {error && (
                <div
                  className="contact-form-error"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <div className="form-submit-row">

                <button
                  type="submit"
                  className="corporate-button primary large"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      Sending
                      <LoaderCircle
                        size={17}
                        className="form-spinner"
                      />
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send size={17} />
                    </>
                  )}
                </button>

                <span>
                  We will use the information provided to respond
                  to your enquiry.
                </span>

              </div>

            </form>
          )}

        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="section contact-main-section">
        <div className="container contact-main-grid">

          <div className="contact-primary">

            <div className="section-kicker">
              DIRECT CONTACT
            </div>

            <h2>
              Prefer to
              <span>email directly?</span>
            </h2>

            <p>
              You can also contact Ayaansh T Corp directly if you
              already have a detailed requirement or would prefer
              to start the conversation by email.
            </p>

            <a
              href="mailto:ayaanshtcorp@gmail.com?subject=Business%20Enquiry%20-%20Ayaansh%20T%20Corp"
              className="contact-email-button"
            >
              <Mail size={20} />

              <span>
                <small>Email us</small>
                ayaanshtcorp@gmail.com
              </span>

              <ArrowRight size={18} />
            </a>

            <div className="contact-assurance">

              <div>
                <CheckCircle2 size={17} />
                Clear communication
              </div>

              <div>
                <CheckCircle2 size={17} />
                Practical discussion
              </div>

              <div>
                <CheckCircle2 size={17} />
                No unnecessary complexity
              </div>

            </div>

          </div>

          <div className="contact-side-card">

            <div className="contact-side-label">
              WHAT TO INCLUDE
            </div>

            <h3>
              A few details help us
              understand the requirement.
            </h3>

            <div className="contact-details-list">

              <div>
                <span>01</span>
                <p>What are you trying to accomplish?</p>
              </div>

              <div>
                <span>02</span>
                <p>What service or capability do you need?</p>
              </div>

              <div>
                <span>03</span>
                <p>What is your expected timeline?</p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Are there any important requirements or
                  constraints?
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="section contact-options-section">
        <div className="container">

          <div className="section-heading-large">

            <div>
              <div className="section-kicker">
                HOW WE CAN HELP
              </div>

              <h2>
                Start with the
                <span>right conversation.</span>
              </h2>
            </div>

            <p>
              You don't need to know exactly which service you need.
              Describe the requirement and we'll help determine where
              we can contribute.
            </p>

          </div>

          <div className="contact-options-grid">

            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  className="contact-option-card"
                  key={option.title}
                >
                  <div className="contact-option-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{option.title}</h3>

                  <p>{option.text}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="contact-process-section">
        <div className="container contact-process-grid">

          <div>
            <div className="section-kicker light-kicker">
              WHAT HAPPENS NEXT
            </div>

            <h2>
              A simple process.
              <span>No unnecessary steps.</span>
            </h2>

            <p>
              Once we receive your enquiry, the objective is to
              understand the requirement first and determine whether
              there is a practical way for us to help.
            </p>
          </div>

          <div className="contact-process-list">

            {process.map((step, index) => (
              <div
                className="contact-process-item"
                key={step}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{step}</strong>

                <ArrowRight size={16} />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final-section">
        <div className="container">

          <div className="contact-final-card">

            <div>
              <div className="section-kicker">
                AYAANSH T CORP
              </div>

              <h2>
                Have something
                <span>worth discussing?</span>
              </h2>

              <p>
                Send us the requirement. We'll take it from there.
              </p>
            </div>


          </div>

        </div>
      </section>

    </main>
  );
}