# Ayaansh T Corp Website

React + Vite website configured for Cloudflare Workers Static Assets.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare deployment

```bash
npm run deploy
```

Cloudflare Workers Builds can use `npm run build` for the build step and
`npx wrangler deploy` (or `npm run deploy`) for deployment.

The project uses the official Cloudflare Vite plugin and Wrangler configuration.

## Worker configuration

Set these as Cloudflare Worker secrets or environment variables before deployment:

- `RESEND_API_KEY`: Resend API key, stored as a Worker secret.
- `EMAIL_FROM`: verified sender in the form `Ayaansh T Corp <hello@your-verified-domain>`.
- `CONTACT_RECEIVING_EMAIL`: Ayaansh T Corp address that receives enquiries.
- `ALLOWED_ORIGINS`: comma-separated production and development origins, such as `https://your-production-domain.example,http://localhost:5173`.

The contact endpoint sends the internal notification first and then a customer confirmation. If the confirmation provider call fails, the enquiry remains accepted and the response does not claim that the confirmation was sent. Verify the sender domain in Resend; `onboarding@resend.dev` is intentionally not used.

The AI Assistant currently uses a deterministic, approved-information fallback in the client. It does not call an external LLM or require an AI secret. Rate limiting is implemented per Worker isolate; for a multi-isolate production deployment, add a Cloudflare-native durable rate limiter if stronger global enforcement is required.
