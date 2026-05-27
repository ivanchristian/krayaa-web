PostHog setup (local)

1) Copy `.env.example` to `.env.local` (this file is local-only and must NOT be committed):

   cp .env.example .env.local

2) Open `.env.local` and paste your Project token and host. Example (replace with your token from PostHog project settings):

   NEXT_PUBLIC_POSTHOG_KEY=phc_nDevbKnu3Dzt9j2CbE6SPdcyUVetd6LpthdeMgU8JCfs
   NEXT_PUBLIC_POSTHOG_HOST=https://us.posthog.com

3) Restart the dev server:

   npm run dev

4) Quick verification:
   - In browser DevTools Console: `window.posthog` should be defined.
   - In Network tab: look for requests to your `NEXT_PUBLIC_POSTHOG_HOST` (e.g. `/capture`).
   - In PostHog UI: check Live Events after visiting the site.

One-off (no file) methods:
- Bash (current terminal session only):

  export NEXT_PUBLIC_POSTHOG_KEY="phc_nDev..."
  export NEXT_PUBLIC_POSTHOG_HOST="https://us.posthog.com"
  npm run dev

- PowerShell (current session only):

  $env:NEXT_PUBLIC_POSTHOG_KEY = "phc_nDev..."
  $env:NEXT_PUBLIC_POSTHOG_HOST = "https://us.posthog.com"
  npm run dev

Notes:
- The client key (`phc_...`) is intended for browser SDK use; do not store server-only secrets under `NEXT_PUBLIC_`.
- For server-side ingestion, use a server API key (store without `NEXT_PUBLIC_`).
- If you want, I can create the `.env.local` for you locally (but I won't commit it). Tell me to proceed and provide confirmation.
