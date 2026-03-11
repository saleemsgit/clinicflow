import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'ClinicFlow LK Features | Appointments, Queue Management and Reminders',
  description:
    'Explore ClinicFlow LK features including appointment scheduling, walk-in queue management, doctor availability, WhatsApp and SMS reminders, and basic patient records for clinics in Sri Lanka.',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'ClinicFlow LK Features | Appointments, Queue Management and Reminders',
    description: 'Explore ClinicFlow LK features including appointment scheduling, walk-in queue management, doctor availability, WhatsApp and SMS reminders, and basic patient records for clinics in Sri Lanka.',
    url: '/features',
    type: 'website',
  },
  twitter: {
    title: 'ClinicFlow LK Features | Appointments, Queue Management and Reminders',
    description: 'Explore ClinicFlow LK features including appointment scheduling, walk-in queue management, doctor availability, WhatsApp and SMS reminders, and basic patient records for clinics in Sri Lanka.',
  },
};

const features = [
  {
    id: 'appointments',
    icon: '📅',
    title: 'Appointment Scheduling',
    desc: 'Give your front desk a clear calendar to manage bookings. Patients can be booked into specific time slots, and your team can see the full day at a glance — no phone tag, no guesswork.',
    benefits: [
      'Prevent double bookings with automatic slot management',
      'See full daily, weekly, and monthly appointment views',
      'Book appointments for specific doctors and services',
      'Reschedule or cancel without confusion',
      'Patients receive confirmation messages automatically',
    ],
  },
  {
    id: 'queue',
    icon: '🚶',
    title: 'Walk-in Queue Management',
    desc: 'Walk-ins are a reality in Sri Lankan clinics. ClinicFlow lets your receptionist add walk-ins to a live queue alongside scheduled patients, so everyone knows who is next — and nobody gets skipped.',
    benefits: [
      'Add walk-in patients to the queue in seconds',
      'Real-time status updates: waiting, in progress, done',
      'Merge walk-ins and appointments into one unified queue',
      'Display estimated wait times for patients',
      'Reduce front-desk confusion during busy periods',
    ],
  },
  {
    id: 'doctors',
    icon: '👨‍⚕️',
    title: 'Doctor Schedule Visibility',
    desc: 'Staff and patients always know which doctor is available and when. Set working hours, mark leave days, and update availability instantly — no more guessing or calling ahead.',
    benefits: [
      'Set weekly working hours for each doctor',
      'Mark holidays, leave, and special sessions',
      'Patients see available slots before booking',
      'Staff know which doctor is in today at a glance',
      'Prevent appointments being booked when a doctor is off',
    ],
  },
  {
    id: 'reminders',
    icon: '🔔',
    title: 'WhatsApp & SMS Reminders',
    desc: 'No-shows cost your clinic time and money. ClinicFlow sends automatic reminders via WhatsApp or SMS before each appointment, so patients actually show up — without your staff making manual calls.',
    benefits: [
      'Automatic reminders 24 hours and 1 hour before appointments',
      'Send via WhatsApp (preferred in Sri Lanka) or SMS',
      'Customise reminder messages for your clinic',
      'Track reminder delivery and read rates',
      'Reduce no-shows by up to 40 percent',
    ],
  },
  {
    id: 'records',
    icon: '📋',
    title: 'Basic Patient Records & Notes',
    desc: 'Keep a clean, searchable record of each patient — name, contact, visit history, and simple notes. No more flipping through paper files or losing patient information.',
    benefits: [
      'Store patient name, phone, NIC, and contact details',
      'Add visit notes and observations after each appointment',
      'Search patients by name, phone number, or NIC',
      'View complete visit history for any patient',
      'Fast enough for receptionists to use between patients',
    ],
  },
  {
    id: 'reports',
    icon: '📊',
    title: 'Daily Reports & Dashboard',
    desc: 'At the end of each day, see exactly how your clinic performed — how many patients you served, no-show rates, peak hours, and doctor utilisation. Data that helps you make better decisions.',
    benefits: [
      'Daily patient count and appointment summaries',
      'Track no-show and cancellation rates',
      'See peak hours and busiest days',
      'Doctor-wise patient load and utilisation',
      'Export reports for record-keeping and analysis',
    ],
  },
];

const comparison = {
  rows: [
    { label: 'Appointment management', without: 'Notebook or WhatsApp group', withCF: 'Digital calendar with clash prevention' },
    { label: 'Walk-in handling', without: 'First come, first served chaos', withCF: 'Live queue with real-time status' },
    { label: 'Doctor availability', without: 'Phone call to check', withCF: 'Visible schedule for staff and patients' },
    { label: 'Patient reminders', without: 'Manual calls or nothing', withCF: 'Automatic WhatsApp/SMS reminders' },
    { label: 'Patient records', without: 'Paper files or spreadsheets', withCF: 'Searchable digital records' },
    { label: 'Daily reporting', without: 'Count manually at end of day', withCF: 'Automated dashboard with insights' },
    { label: 'Double bookings', without: 'Common', withCF: 'Impossible' },
    { label: 'No-shows', without: 'No way to reduce them', withCF: 'Reduced by up to 40%' },
  ],
};

export default function FeaturesPage() {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ClinicFlow LK',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    url: 'https://clinicflowlk.vercel.app/features',
    description:
      'A clinic appointment and queue management system for Sri Lankan clinics. Features include appointment scheduling, walk-in queue management, doctor availability, WhatsApp and SMS reminders, and patient records.',
    featureList: 'Appointment Scheduling, Walk-in Queue Management, Doctor Schedule Visibility, WhatsApp and SMS Reminders, Patient Records, Daily Reports',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'LKR',
      lowPrice: '4900',
      highPrice: '19900',
      offerCount: '3',
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-surface-alt py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
            Clinic appointment and queue management features{' '}
            <span className="text-primary-600">for Sri Lankan clinics</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            ClinicFlow LK offers appointment scheduling, walk-in queue management, doctor availability visibility, WhatsApp and SMS reminders, patient records, and daily reporting. Everything your Sri Lankan clinic needs in one simple system.
          </p>
        </div>
      </section>

      {/* ── Feature Sections ─────────────────────────────────────── */}
      {features.map((feature, i) => (
        <SectionWrapper
          key={feature.id}
          background={i % 2 === 0 ? 'white' : 'alt'}
          id={feature.id}
        >
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
                {feature.title}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {feature.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {feature.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Feature Illustration Placeholder */}
            <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200/50 p-8 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="text-7xl mb-4">{feature.icon}</div>
                  <p className="text-sm text-primary-700 font-medium">{feature.title}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* ── Comparison Table ──────────────────────────────────────── */}
      <SectionWrapper background="muted" id="comparison">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Without ClinicFlow vs With ClinicFlow
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            The difference is clear, measurable, and immediate.
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-border">
            <thead>
              <tr>
                <th className="text-left p-4 bg-surface-alt font-semibold text-navy-900 border-b border-border">
                  Area
                </th>
                <th className="text-left p-4 bg-red-50 font-semibold text-red-800 border-b border-border">
                  Without ClinicFlow
                </th>
                <th className="text-left p-4 bg-primary-50 font-semibold text-primary-800 border-b border-border">
                  With ClinicFlow
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={i} className="border-b border-border-light last:border-0">
                  <td className="p-4 font-medium text-navy-900 text-sm">{row.label}</td>
                  <td className="p-4 text-sm text-red-700 bg-red-50/30">{row.without}</td>
                  <td className="p-4 text-sm text-primary-700 bg-primary-50/30">{row.withCF}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            See these clinic software features in action
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-2xl mx-auto">
            Book a free demo and we will walk you through each feature using real clinic scenarios. Or check our pricing plans for Sri Lankan clinics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo" variant="secondary" size="lg" id="features-cta-book-demo">
              Book a Free Demo
            </Button>
            <Button href="/pricing" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" id="features-cta-pricing">
              View Pricing Plans →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
