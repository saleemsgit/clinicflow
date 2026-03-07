// GA4 Analytics Helper
// Provides type-safe event tracking for ClinicFlow LK

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

// Standard GA4 event names used across the site
export const AnalyticsEvents = {
  BOOK_DEMO_CLICK: 'book_demo_click',
  PRICING_CTA_CLICK: 'pricing_cta_click',
  FEATURES_CTA_CLICK: 'features_cta_click',
  WHATSAPP_CONTACT_CLICK: 'whatsapp_contact_click',
  FORM_INTERACTION: 'form_interaction',
  SECTION_CTA_CLICK: 'section_cta_click',
} as const;

type EventName = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents] | string;

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

// Send a custom event to GA4
export function trackEvent(eventName: EventName, params?: EventParams): void {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('event', eventName, params);
  }
}

// Track a page view (useful for SPA-style navigations)
export function trackPageView(url: string): void {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}
