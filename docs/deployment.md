# Cloudflare Pages Deployment Guide

This project is configured to be deployed on **Cloudflare Pages** using the `@cloudflare/next-on-pages` adapter.

## Prerequisites
- A Cloudflare account.
- A GitHub repository connected to Cloudflare Pages.

## Configuration Settings

When creating your project in the Cloudflare Dashboard, use the following settings:

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | `Next.js` (Select this, but we will override the command) |
| **Build Command** | `npm run pages:build` |
| **Build Output Directory** | `.vercel/output/static` |

### Environment Variables (Required)

You **MUST** set the Node.js version to ensure compatibility with Next.js 15+.

| Variable Name | Value | Reason |
| :--- | :--- | :--- |
| `NODE_VERSION` | `20.18.0` | Required for Next.js 15+ / 16 |

### Compatibility Flags

1. Go to **Settings** > **Functions** > **Compatibility Flags**.
2. Add the following production compatibility flag:
   - `nodejs_compat`

> [!IMPORTANT]
> If you encounter build errors, double-check that `NODE_VERSION` is set in the environment variables. The default Node version on Cloudflare Pages is often too old for modern Next.js.

## Local Testing

You can build and preview the Cloudflare Worker output locally:

```bash
# Build the application for Cloudflare
npm run pages:build

# (Optional) Preview locally if you have Wrangler installed
npm run preview
```
