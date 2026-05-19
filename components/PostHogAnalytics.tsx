'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

let hasInitializedPostHog = false;

export default function PostHogAnalytics() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    if (!key || hasInitializedPostHog) return;
    hasInitializedPostHog = true;

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      autocapture: true,
      loaded: (client) => {
        client.capture('visit_page', {
          page: window.location.pathname,
          url: window.location.href,
          title: document.title,
        });
      },
    });
  }, []);

  return null;
}
