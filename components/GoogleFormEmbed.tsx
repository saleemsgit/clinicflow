'use client';

export default function GoogleFormEmbed() {
  // =====================================================
  // REPLACE THE URL BELOW WITH YOUR ACTUAL GOOGLE FORM EMBED URL
  // How to get your embed URL:
  // 1. Open your Google Form
  // 2. Click "Send" (paper airplane icon)
  // 3. Click the embed icon (<>)
  // 4. Copy the URL from the iframe src attribute
  // =====================================================
  const formUrl =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-white shadow-sm">
      <iframe
        src={formUrl}
        width="100%"
        height="900"
        className="w-full border-0"
        title="Book a Demo — ClinicFlow LK"
        loading="lazy"
      >
        Loading form…
      </iframe>
    </div>
  );
}
