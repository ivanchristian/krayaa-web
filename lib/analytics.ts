'use client';

import posthog from 'posthog-js';

type KrayaaEventName =
  | 'visit_page'
  | 'click_whatsapp_floating'
  | 'submit_waitlist_buyer'
  | 'submit_waitlist_creator'
  | 'submit_waitlist_brand'
  | 'submit_creator_application'
  | 'submit_brand_partnership'
  | 'click_nav_join_waitlist';

export function trackKrayaaEvent(eventName: KrayaaEventName, properties?: Record<string, string | number | boolean | null | undefined>) {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

  posthog.capture(eventName, {
    page: window.location.pathname,
    ...properties,
  });
}
