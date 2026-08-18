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
