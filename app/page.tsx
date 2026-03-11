import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
  description:
    'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, WhatsApp and SMS reminders, and front desk work in one simple system.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
    description: 'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, WhatsApp and SMS reminders, and front desk work in one simple system.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
    description: 'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, WhatsApp and SMS reminders, and front desk work in one simple system.',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Double bookings',
    desc: 'Two patients booked at the same time. Confusion at the front desk. Angry patients.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Repeated phone calls',
    desc: '"Is the doctor in?" "How long is the wait?" The same questions, over and over, all day.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'No-shows and missed visits',
    desc: 'Patients forget their appointments. No reminders, no follow-up, lost revenue.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: 'Walk-in chaos',
    desc: 'Walk-ins clash with scheduled patients. No queue visibility. Nobody knows who is next.',
  },
];

const features = [
  {
    title: 'Appointment Scheduling',
    desc: 'Let patients book slots. Prevent clashes. See your day at a glance.',
    icon: '📅',
  },
  {
    title: 'Walk-in Queue',
    desc: 'Add walk-ins to a live queue. Track who is waiting and who is next.',
    icon: '🚶',
  },
  {
    title: 'Doctor Schedules',
    desc: 'Set doctor availability. Patients and staff always know who is in.',
    icon: '👨‍⚕️',
  },
  {
    title: 'Smart Reminders',
    desc: 'WhatsApp and SMS reminders reduce no-shows automatically.',
    icon: '🔔',
  },
  {
    title: 'Patient Records',
    desc: 'Store basic patient info and visit notes. Clean and searchable.',
    icon: '📋',
  },
  {
    title: 'Daily Reports',
    desc: 'See how many patients you served, revenue summaries, and trends.',
    icon: '📊',
  },
];

const steps = [
  {
    step: '01',
    title: 'Set Up Your Clinic',
    desc: 'Add your doctors, working hours, and services in minutes.',
  },
  {
    step: '02',
    title: 'Manage Appointments & Walk-ins',
    desc: 'Book appointments and add walk-ins to a live queue from one dashboard.',
  },
  {
    step: '03',
    title: 'Send Automatic Reminders',
    desc: 'Patients get WhatsApp or SMS reminders before their appointment.',
  },
  {
    step: '04',
    title: 'Track & Improve',
    desc: 'Daily reports show patient flow, no-show rates, and peak hours.',
  },
];

const clinicTypes = [
  {
    title: 'Small Private Clinics',
    desc: 'Replace your appointment book with a simple digital system. No training needed.',
    href: '/for-clinics#private-clinics',
  },
  {
    title: 'Dental Clinics',
    desc: 'Manage treatment sessions, follow-up appointments, and patient recall lists.',
    href: '/for-clinics#dental-clinics',
  },
  {
    title: 'Channeling Centers',
    desc: 'Handle multi-doctor scheduling, channeling slots, and live queue displays.',
    href: '/for-clinics#channeling-centers',
  },
  {
    title: 'Physiotherapy Clinics',
    desc: 'Track recurring sessions, treatment plans, and patient progress notes.',
    href: '/for-clinics#physio-clinics',
  },
];

const faqItems = [
  {
    question: 'Is ClinicFlow LK difficult to set up?',
    answer:
      'Not at all. Most clinics are up and running within 30 minutes. We provide guided onboarding, and our support team is available via WhatsApp to help you get started.',
  },
  {
    question: 'Do I need special hardware or software?',
    answer:
      'No. ClinicFlow LK runs in your web browser on any computer, tablet, or phone. There is nothing to install.',
  },
  {
    question: 'Can I use it for walk-ins and appointments together?',
    answer:
      'Yes. That is exactly what ClinicFlow is built for. You can manage scheduled appointments and walk-in patients from the same queue, without conflicts.',
  },
  {
    question: 'How do patient reminders work?',
    answer:
      'ClinicFlow sends automatic WhatsApp or SMS reminders before each appointment. This significantly reduces no-shows and saves your staff from making manual reminder calls.',
  },
  {
    question: 'Is my patient data secure?',
    answer:
      'Yes. All data is encrypted and stored securely. We follow industry best practices for healthcare data security, and your data is never shared with third parties.',
  },
  {
    question: 'Can I try ClinicFlow before committing?',
    answer:
      'Absolutely. Book a free demo, and we will walk you through the system using real clinic scenarios. No pressure, no commitment.',
  },
];

// ─── Page Component ──────────────────────────────────────────────────────

export default function HomePage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClinicFlow LK',
    url: 'https://clinicflowlk.vercel.app',
    logo: 'https://clinicflowlk.vercel.app/logo.png',
    description:
      'A simple clinic appointment and queue management system for Sri Lankan clinics. Manage appointments, walk-in queues, doctor schedules, and reminders.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'LK',
    },
    sameAs: [],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClinicFlow LK',
    url: 'https://clinicflowlk.vercel.app',
    description: 'Simple clinic appointment and queue system for Sri Lankan clinics',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://clinicflowlk.vercel.app/features?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-surface-alt">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                Built for Sri Lankan Clinics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy-900 leading-tight tracking-tight">
                Simple clinic appointment and queue system{' '}
                <span className="text-primary-600">for Sri Lankan clinics</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                ClinicFlow LK helps you manage appointments, walk-in queues, doctor schedules, and patient reminders from one simple system. Stop double booking and reduce no-shows at your clinic.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/book-demo" variant="primary" size="lg" id="hero-book-demo">
                  Book a Free Demo
                </Button>
                <Button href="/features" variant="outline" size="lg" id="hero-view-features">
                  View Features
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-500">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  No installation needed
                </span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-500">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Set up in 30 minutes
                </span>
              </div>
            </div>

            {/* Hero Illustration / Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-primary-900/10 border border-border p-6">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-text-muted font-medium uppercase tracking-wider">Today&apos;s Overview</div>
                    <div className="text-2xl font-bold text-navy-900 mt-1">Wednesday, 12 March</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                {/* Mock Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-700">24</div>
                    <div className="text-xs text-text-muted mt-1">Appointments</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-700">8</div>
                    <div className="text-xs text-text-muted mt-1">Walk-ins</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-700">3</div>
                    <div className="text-xs text-text-muted mt-1">Doctors In</div>
                  </div>
                </div>
                {/* Mock Queue List */}
                <div className="space-y-3">
                  {[
                    { name: 'Kumari P.', time: '10:30 AM', status: 'In Progress', statusColor: 'bg-green-100 text-green-700' },
                    { name: 'Rajith S.', time: '10:45 AM', status: 'Waiting', statusColor: 'bg-yellow-100 text-yellow-700' },
                    { name: 'Nalini D.', time: '11:00 AM', status: 'Checked In', statusColor: 'bg-blue-100 text-blue-700' },
                  ].map((patient, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface-alt">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-xs font-bold text-primary-800">
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-navy-900">{patient.name}</div>
                          <div className="text-xs text-text-muted">{patient.time}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${patient.statusColor}`}>
                        {patient.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary-200/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────────── */}
      <SectionWrapper background="white" className="!py-10 border-b border-border-light">
        <p className="text-center text-sm font-medium text-text-muted tracking-wide uppercase">
          <span>Built for small clinics</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>dental practices</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>channeling centers</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>physiotherapy clinics</span>
        </p>
      </SectionWrapper>

      {/* ── Problem Section ──────────────────────────────────────────── */}
      <SectionWrapper background="white" id="problems">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Running a clinic shouldn&apos;t feel this hard
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Most small clinics still rely on phone calls, WhatsApp groups, notebooks, and spreadsheets. It leads to the same problems every day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:border-primary-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                {point.icon}
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Solution Section ─────────────────────────────────────────── */}
      <SectionWrapper background="alt" id="solution">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              One clinic software system for appointments, walk-ins, and everything in between
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              ClinicFlow LK replaces the notebook, the WhatsApp group, and the sticky notes. Your receptionist sees the full picture on one screen: appointments, walk-in queue, and doctor availability.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'No more double bookings. Every slot is visible and controlled.',
                'Walk-ins join a live queue. No more confusion about who is next.',
                'Patients get WhatsApp reminders, so they actually show up.',
                'Doctors see their day before they arrive. Staff are always prepared.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/features" variant="primary" id="solution-view-features">
                See All Features
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <div className="space-y-6">
              {[
                { label: 'Fewer no-shows', value: '40%', desc: 'reduction with automatic reminders' },
                { label: 'Faster check-in', value: '3×', desc: 'speed improvement at the front desk' },
                { label: 'Zero double bookings', value: '0', desc: 'conflicts per day with smart scheduling' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
                  <div className="text-3xl font-bold text-primary-600 min-w-[4rem]">{stat.value}</div>
                  <div>
                    <div className="font-semibold text-navy-900">{stat.label}</div>
                    <div className="text-sm text-text-muted">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Features Preview ─────────────────────────────────────────── */}
      <SectionWrapper background="white" id="features-preview">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Everything a Sri Lankan clinic needs
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Six core features designed around how clinics in Sri Lanka actually work. Appointment scheduling, walk-in queue management, doctor availability, reminders, and more.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Link
              key={i}
              href="/features"
              className="group p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/features" variant="outline" id="features-preview-cta">
            Explore All Clinic Software Features →
          </Button>
        </div>
      </SectionWrapper>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <SectionWrapper background="alt" id="how-it-works">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Up and running in four steps
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            From sign-up to managing your first patient — it takes less than a day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-xl bg-white border border-border">
              <div className="text-5xl font-bold text-primary-100 mb-4">{s.step}</div>
              <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Benefits / Results ───────────────────────────────────────── */}
      <SectionWrapper background="white" id="benefits">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Better days for your clinic
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              When appointments and queues are under control, everything else improves — patient satisfaction, staff morale, and your bottom line.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Fewer delays', desc: 'Patients are seen on time. Waiting rooms stay calm.' },
              { title: 'Better visibility', desc: 'Clinic owners see patient flow, peak hours, and trends.' },
              { title: 'Happier patients', desc: 'Reminders, less waiting, and a smoother experience.' },
              { title: 'Less staff stress', desc: 'Front desk handles more patients with less effort.' },
            ].map((benefit, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-alt border border-border-light">
                <h3 className="font-semibold text-navy-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Clinic Types ─────────────────────────────────────────────── */}
      <SectionWrapper background="alt" id="clinic-types">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Clinic software built for your type of clinic
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Whether you run a single-doctor private clinic or a busy channeling center in Sri Lanka, ClinicFlow LK adapts to how you work.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicTypes.map((clinic, i) => (
            <Link
              key={i}
              href={clinic.href}
              className="group p-6 rounded-xl bg-white border border-border hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors">
                {clinic.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{clinic.desc}</p>
              <span className="text-sm text-primary-600 font-medium">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <SectionWrapper background="white" id="faq">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Common questions from clinic owners and managers about ClinicFlow LK.
            </p>
          </header>
          <FAQ items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to simplify your clinic operations?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-2xl mx-auto">
            See how ClinicFlow LK works with a free, no-pressure demo. We will walk you through the system using real clinic scenarios.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo" variant="secondary" size="lg" id="final-cta-book-demo">
              Book a Free Demo
            </Button>
            <Button href="/pricing" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" id="final-cta-pricing">
              See Pricing →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
