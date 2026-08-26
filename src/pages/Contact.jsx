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
  budget: "",
  message: "",
  consent: false,
};

const fieldLimits = {
  name: 100,
  company: 150,
  email: 254,
  phone: 40,
  service: 100,
  timeline: 50,
  budget: 80,
  message: 5000,
};

function validateForm(form) {
  const errors = {};
  const values = { ...form };

  Object.keys(fieldLimits).forEach((field) => {
    values[field] = typeof values[field] === "string" ? values[field].trim() : values[field];
    if (values[field].length > fieldLimits[field]) errors[field] = "This field is too long.";
  });
  if (!values.name) errors.name = "Please enter your name.";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) errors.email = "Please enter a valid business email.";
  if (!values.service) errors.service = "Please select a service.";
  if (!values.message || values.message.length < 20) errors.message = "Please describe the requirement in at least 20 characters.";
  if (!values.consent) errors.consent = "Consent is required to submit this enquiry.";

  return { errors, values };
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
    setFieldErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { errors, values } = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError("Please review the form and complete the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        const submitError = new Error(data.message || "Unable to submit your enquiry.");
        submitError.kind = response.status === 429 ? "rate-limit" : "server";
        throw submitError;
      }

      setSubmitted(true);
    } catch (submitError) {
      console.error("Contact form submission failed", submitError.kind || "network");
      setError(submitError.kind === "rate-limit"
        ? "Too many attempts. Please wait a little before trying again."
        : submitError.kind === "server"
          ? "We couldn't process your enquiry right now. Please try again or email us directly at ayaanshtcorp@gmail.com."
          : "We couldn't reach the enquiry service. Check your connection and try again, or email us directly at ayaanshtcorp@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
    setFieldErrors({});
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
                  the appropriate next step. A confirmation email will
                  be sent to the address you provided when available.
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
                    maxLength={fieldLimits.name}
                    aria-invalid={Boolean(fieldErrors.name)}
                  />
                  {fieldErrors.name && <small className="field-error">{fieldErrors.name}</small>}
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
                    maxLength={fieldLimits.company}
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
                    maxLength={fieldLimits.email}
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                  {fieldErrors.email && <small className="field-error">{fieldErrors.email}</small>}
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
                    maxLength={fieldLimits.phone}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">
                    Service / Requirement <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(fieldErrors.service)}
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Mobile Applications">
                      Mobile Applications
                    </option>
                    <option value="SaaS">
                      SaaS
                    </option>
                    <option value="Custom Software">
                      Custom Software
                    </option>
                    <option value="Automation">
                      Automation
                    </option>
                    <option value="SEO & Digital Growth">
                      SEO &amp; Digital Growth
                    </option>
                    <option value="RFQ Research">
                      RFQ Research
                    </option>
                    <option value="Supplier Sourcing">
                      Supplier Sourcing
                    </option>
                    <option value="Quote Support">
                      Quote Support
                    </option>
                    <option value="Products & Ventures">
                      Products &amp; Ventures
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                  {fieldErrors.service && <small className="field-error">{fieldErrors.service}</small>}
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="To be discussed">To be discussed</option>
                    <option value="Under 5,000">Under 5,000</option>
                    <option value="5,000-25,000">5,000-25,000</option>
                    <option value="25,000+">25,000+</option>
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
                  maxLength={fieldLimits.message}
                  aria-invalid={Boolean(fieldErrors.message)}
                />
                {fieldErrors.message && <small className="field-error">{fieldErrors.message}</small>}
              </div>

              <label className="form-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(fieldErrors.consent)}
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
              {fieldErrors.consent && <small className="field-error consent-error">{fieldErrors.consent}</small>}

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