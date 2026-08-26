const rateLimit = new Map();
const MAX_BODY_BYTES = 12000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
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
const allowedServices = new Set([
  "Web Development",
  "Mobile Applications",
  "SaaS",
  "Custom Software",
  "Automation",
  "SEO & Digital Growth",
  "RFQ Research",
  "Supplier Sourcing",
  "Quote Support",
  "Products & Ventures",
  "General Enquiry",
]);

function json(data, status = 200, headers = {}) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function escapeHtml(value) {
  return String(value ?? "Not provided").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function safeHeader(value) {
  return String(value ?? "").replace(/[\r\n]/g, " ").trim().slice(0, 150);
}

function plain(value) {
  return String(value ?? "Not provided").trim();
}

function getCorsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (origin && allowed.includes(origin)) {
    return { "Access-Control-Allow-Origin": origin, Vary: "Origin" };
  }

  return {};
}

function checkRateLimit(request, pathname) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const key = `${pathname}:${ip}`;
  const now = Date.now();
  const entry = rateLimit.get(key);

  if (!entry || now - entry.startedAt >= WINDOW_MS) {
    rateLimit.set(key, { startedAt: now, count: 1 });
    return true;
  }

  entry.count += 1;
  return entry.count <= MAX_REQUESTS;
}

function validatePayload(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return "Invalid request body.";
  }

  for (const [field, limit] of Object.entries(fieldLimits)) {
    if (data[field] !== undefined && typeof data[field] !== "string") {
      return "Please provide valid form values.";
    }
    if (typeof data[field] === "string" && data[field].trim().length > limit) {
      return "One or more fields exceed the allowed length.";
    }
  }

  const required = ["name", "email", "service", "message"];
  if (required.some((field) => !plain(data[field]))) {
    return "Please complete all required fields.";
  }
  if (data.consent !== true) {
    return "Please provide consent before submitting.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(plain(data.email))) {
    return "Please provide a valid business email address.";
  }
  if (!allowedServices.has(plain(data.service))) {
    return "Please select a valid service.";
  }
  if (plain(data.message).length < 20) {
    return "Please provide at least 20 characters describing the requirement.";
  }

  return null;
}

async function sendEmail(env, payload) {
  if (!env.RESEND_API_KEY || !env.EMAIL_FROM || !env.CONTACT_RECEIVING_EMAIL) {
    throw new Error("Email configuration is incomplete");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Email provider rejected a message", response.status);
    throw new Error("Email provider request failed");
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(request, env);
    const origin = request.headers.get("Origin");
    const allowedOrigins = (env.ALLOWED_ORIGINS || url.origin)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (url.pathname !== "/api/contact") {
      return new Response("Not Found", { status: 404 });
    }
    if (origin && !allowedOrigins.includes(origin)) {
      return json({ success: false, message: "Origin is not allowed." }, 403);
    }
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...corsHeaders,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
    if (request.method !== "POST") {
      return json({ success: false, message: "Method Not Allowed" }, 405, {
        Allow: "POST, OPTIONS",
        ...corsHeaders,
      });
    }
    if (!checkRateLimit(request, url.pathname)) {
      return json({ success: false, message: "Too many requests. Please try again later." }, 429, corsHeaders);
    }
    if (!request.headers.get("Content-Type")?.toLowerCase().includes("application/json")) {
      return json({ success: false, message: "Invalid request format." }, 415, corsHeaders);
    }

    try {
      const contentLength = Number(request.headers.get("Content-Length") || 0);
      if (contentLength > MAX_BODY_BYTES) {
        return json({ success: false, message: "Request is too large." }, 413, corsHeaders);
      }
      const rawBody = await request.text();
      if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
        return json({ success: false, message: "Request is too large." }, 413, corsHeaders);
      }
      let data;
      try {
        data = JSON.parse(rawBody);
      } catch {
        return json({ success: false, message: "Invalid request body." }, 400, corsHeaders);
      }

      const validationError = validatePayload(data);
      if (validationError) {
        return json({ success: false, message: validationError }, 400, corsHeaders);
      }

      const values = Object.fromEntries(
        Object.keys(fieldLimits).map((field) => [field, plain(data[field])])
      );
      const timestamp = new Date().toISOString();
      const internalHtml = `
        <h2>New Ayaansh T Corp Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(values.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(values.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(values.service)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(values.timeline)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(values.budget)}</p>
        <p><strong>Consent:</strong> Granted for responding to this enquiry</p>
        <p><strong>Submitted:</strong> ${escapeHtml(timestamp)}</p>
        <h3>Project / Requirement</h3><p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>
      `;

      await sendEmail(env, {
        from: env.EMAIL_FROM,
        to: [env.CONTACT_RECEIVING_EMAIL],
        reply_to: values.email,
        subject: `New Website Enquiry - ${safeHeader(values.service)} - ${safeHeader(values.name)}`,
        html: internalHtml,
      });

      let confirmationSent = true;
      try {
        await sendEmail(env, {
          from: env.EMAIL_FROM,
          to: [values.email],
          subject: "We received your enquiry - Ayaansh T Corp",
          html: `<h2>Thank you for contacting Ayaansh T Corp</h2><p>We received your enquiry about <strong>${escapeHtml(values.service)}</strong> and will review it carefully.</p><p>Our team will follow up using the contact details you provided. This message confirms receipt and does not promise a specific response time.</p><p>Ayaansh T Corp<br>ayaanshtcorp@gmail.com</p>`,
        });
      } catch (error) {
        confirmationSent = false;
        console.error("Customer confirmation could not be sent");
      }

      return json({
        success: true,
        message: confirmationSent
          ? "Your enquiry has been received. A confirmation email is on its way."
          : "Your enquiry has been received. We will follow up using the details provided.",
      }, 200, corsHeaders);
    } catch (error) {
      console.error("Contact request failed", error.message);
      return json({ success: false, message: "Unable to process your enquiry right now." }, 502, corsHeaders);
    }
  },
};