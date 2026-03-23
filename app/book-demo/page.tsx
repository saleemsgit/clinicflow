import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GoogleFormEmbed from '@/components/GoogleFormEmbed';
import JsonLd from '@/components/JsonLd';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Book a Demo | ClinicFlow LK',
  description:
    'Book a demo of ClinicFlow LK and see how a simple clinic appointment and queue system can help your Sri Lankan clinic reduce booking confusion and improve front desk flow.',
  alternates: {
    canonical: '/book-demo',
  },
  openGraph: {
    title: 'Book a Demo | ClinicFlow LK',
    description: 'Book a demo of ClinicFlow LK and see how a simple clinic appointment and queue system can help your Sri Lankan clinic reduce booking confusion and improve front desk flow.',
    url: '/book-demo',
    type: 'website',
  },
  twitter: {
    title: 'Book a Demo | ClinicFlow LK',
    description: 'Book a demo of ClinicFlow LK and see how a simple clinic appointment and queue system can help your Sri Lankan clinic reduce booking confusion and improve front desk flow.',
  },
};

export default function BookDemoPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book a Demo - ClinicFlow LK',
    description: 'Request a free demo of ClinicFlow LK clinic appointment and queue system for your Sri Lankan clinic.',
    url: 'https://clinicflowlk.vercel.app/book-demo',
    mainEntity: {
      '@type': 'Organization',
      name: 'ClinicFlow LK',
      url: 'https://clinicflowlk.vercel.app',
    },
  };

  const handleWhatsAppClick = () => {
    trackEvent(AnalyticsEvents.WHATSAPP_CONTACT_CLICK, {
      location: 'book_demo_page',
    });
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-surface-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
            Book a demo of ClinicFlow LK
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            See how a simple clinic appointment and queue system can help your Sri Lankan clinic. Book a free demo and we will walk you through appointment scheduling, queue management, and WhatsApp reminders. No commitment, no credit card.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left: Info + Trust */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll See */}
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">What you&apos;ll see in the demo</h2>
              <ul className="space-y-3">
                {[
                  'How to set up your clinic and doctors in minutes',
                  'The appointment calendar and how to prevent double bookings',
                  'How the walk-in queue works alongside scheduled appointments',
                  'WhatsApp and SMS reminder flows',
                  'Patient records and visit notes',
                  'The daily reporting dashboard',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Book */}
            <div className="p-5 rounded-xl bg-surface-alt border border-border-light">
              <h3 className="font-semibold text-navy-900 mb-2">Why book a demo?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A 15-minute demo is the fastest way to see if ClinicFlow LK is right for your Sri Lankan clinic. We will tailor the session to your clinic type and answer all your questions. No sales pressure — just a clear look at the system. You can also <a href="/features" className="text-primary-600 hover:text-primary-700 underline">explore our features</a> or <a href="/pricing" className="text-primary-600 hover:text-primary-700 underline">check our pricing</a> first.
              </p>
            </div>

            {/* What Happens Next */}
            <div className="p-5 rounded-xl bg-primary-50 border border-primary-100">
              <h3 className="font-semibold text-navy-900 mb-2">What happens after you submit?</h3>
              <ol className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  We receive your details and review your clinic type
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  We contact you within 24 hours via your preferred method
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  We schedule a 15-minute online demo at a time that works for you
                </li>
              </ol>
            </div>

            {/* WhatsApp Contact */}
            <div className="p-5 rounded-xl border border-border">
              <h3 className="font-semibold text-navy-900 mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm text-text-secondary mb-3">
                You can also reach us directly on WhatsApp for a quick chat about ClinicFlow.
              </p>
              {/* Replace the number below with your actual WhatsApp number */}
              <a
                href="https://wa.me/94XXXXXXXXX?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20ClinicFlow%20LK."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
                id="demo-whatsapp-contact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.386 0-4.594-.822-6.336-2.197l-.443-.36-3.096 1.038 1.038-3.096-.36-.443A9.954 9.954 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Privacy Note */}
            <div className="flex items-start gap-2 text-xs text-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <span>
                Your information is kept confidential and is only used to schedule your demo.
                We never share your data with third parties.
              </span>
            </div>
          </div>

          {/* Right: Google Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-navy-900 mb-4">Fill in your details</h2>
            <p className="text-sm text-text-secondary mb-6">
              Complete the form below and we will get back to you within 24 hours.
            </p>
            {/* 
              ============================================================
              GOOGLE FORM EMBED
              Replace the form URL in your .env.local file:
              NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSfdEkZse3bUFuamJ7F7obCHUENohtBTcFuDbfNUj9DpcQr5SA/viewform?usp=sharing&ouid=111291037966725086575
              Your Google Form should include these fields:
              - Clinic Name
              - Contact Person
              - Phone Number
              - Email Address
              - Clinic Type (dropdown: Private Clinic, Dental Clinic, Channeling Center, Physio Clinic, Other)
              - Number of Doctors
              - Preferred Contact Method (WhatsApp, Phone Call, Email)
              - Short Message / Current Issue (optional)
              ============================================================
            */}
            <GoogleFormEmbed />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
