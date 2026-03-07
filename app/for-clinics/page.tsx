import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Clinics — Solutions for Every Clinic Type in Sri Lanka',
  description:
    'ClinicFlow LK serves small private clinics, dental clinics, channeling centers, and physiotherapy clinics across Sri Lanka. See how it fits your clinic workflow.',
  alternates: {
    canonical: '/for-clinics',
  },
};

const clinicTypes = [
  {
    id: 'private-clinics',
    title: 'Small Private Clinics',
    subtitle: 'Single-doctor and small general practices',
    pain: [
      'Appointments managed in a notebook — easy to miss or double-book',
      'Walk-ins arrive without warning and disrupt the schedule',
      'Patients call repeatedly asking when the doctor is available',
      "No reminders means patients forget and don't show up",
      'End-of-day records are vague or missing entirely',
    ],
    solution:
      'ClinicFlow gives your receptionist a single screen showing today\'s appointments and the walk-in queue, side by side. New bookings are blocked from conflicting with existing ones. Patients get automatic WhatsApp reminders, and at the end of the day, you have a clear report of who visited.',
    features: ['Appointment calendar', 'Walk-in queue', 'WhatsApp reminders', 'Basic patient records', 'Daily summary report'],
    color: 'primary',
  },
  {
    id: 'dental-clinics',
    title: 'Dental Clinics',
    subtitle: 'Dental practices with treatment sessions and follow-ups',
    pain: [
      'Treatment plans span multiple visits — hard to track on paper',
      'Follow-up appointments are easy to lose in a busy schedule',
      'Patients forget recall visits for cleanings and check-ups',
      'No clear view of how many procedures were completed each day',
      'Double-booking during peak hours frustrates both dentist and patient',
    ],
    solution:
      'ClinicFlow helps dental clinics manage multi-session treatment schedules. Your receptionist can book follow-ups immediately, schedule recall visits, and send reminders before each session. Visit notes capture what was done, making the next appointment faster to prepare for.',
    features: ['Multi-session scheduling', 'Follow-up tracking', 'Patient recall reminders', 'Visit notes per session', 'Doctor schedule management'],
    color: 'blue',
  },
  {
    id: 'channeling-centers',
    title: 'Channeling Centers',
    subtitle: 'Multi-doctor channeling and specialist appointment centers',
    pain: [
      'Multiple doctors with overlapping schedules — complex to manage',
      'Patients need to know which doctor is in on which day',
      'Channeling slots fill up fast, and availability changes without notice',
      'Long walk-in queues with no visibility on wait times',
      'Each doctor needs a separate schedule view, but everything is in one system',
    ],
    solution:
      'ClinicFlow handles multi-doctor scheduling natively. Each doctor has their own calendar and availability settings. Patients see available slots per doctor, and the walk-in queue adjusts based on who is consulting. Your front desk manages everything from one dashboard.',
    features: ['Multi-doctor scheduling', 'Per-doctor availability view', 'Channeling slot management', 'Live queue display', 'Doctor-wise daily reports'],
    color: 'indigo',
  },
  {
    id: 'physio-clinics',
    title: 'Physiotherapy Clinics',
    subtitle: 'Physio practices with recurring sessions and treatment tracking',
    pain: [
      'Patients need recurring weekly or biweekly sessions — tricky to schedule consistently',
      'Treatment progress is tracked on paper or not tracked at all',
      'No-shows are costly because physio sessions run on tight schedules',
      'Patients forget to continue their treatment courses',
      'Staff spend time calling patients to remind or reschedule',
    ],
    solution:
      'ClinicFlow supports recurring appointment patterns so patients can book their full treatment course at once. Reminders keep them on track, visit notes capture progress, and your daily view shows exactly who is coming for which session. Your staff spends less time on the phone and more time helping patients.',
    features: ['Recurring session scheduling', 'Treatment course tracking', 'Session-by-session notes', 'Automated reminders', 'Patient progress history'],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; border: string }> = {
  primary: { bg: 'bg-primary-50', iconBg: 'bg-primary-100 text-primary-700', border: 'border-primary-200' },
  blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
  indigo: { bg: 'bg-indigo-50', iconBg: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200' },
  emerald: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
};

export default function ForClinicsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-surface-alt py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
            One system, adapted to{' '}
            <span className="text-primary-600">your clinic workflow</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every clinic runs differently. ClinicFlow is simple enough for a solo practice and flexible enough for a multi-doctor channeling center. Here is how it helps your type of clinic.
          </p>
          {/* Quick Jump Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {clinicTypes.map((clinic) => (
              <Link
                key={clinic.id}
                href={`#${clinic.id}`}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-white text-text-secondary hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                {clinic.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinic Sections ───────────────────────────────────── */}
      {clinicTypes.map((clinic, i) => {
        const colors = colorMap[clinic.color] || colorMap.primary;
        return (
          <SectionWrapper
            key={clinic.id}
            background={i % 2 === 0 ? 'white' : 'alt'}
            id={clinic.id}
          >
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
                  {clinic.title}
                </h2>
                <p className="text-text-muted mt-1">{clinic.subtitle}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pain Points */}
                <div>
                  <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-4">
                    Common Challenges
                  </h3>
                  <ul className="space-y-3">
                    {clinic.pain.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-400 mt-1 flex-shrink-0">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-4">
                    How ClinicFlow Helps
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {clinic.solution}
                  </p>
                  <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                    <h4 className="text-sm font-semibold text-navy-900 mb-3">Key features for {clinic.title.toLowerCase()}</h4>
                    <ul className="space-y-2">
                      {clinic.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-600 flex-shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button href="/book-demo" variant="primary" size="md" id={`${clinic.id}-cta`}>
                      Book a Demo for Your Clinic
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Not sure which plan fits your clinic?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-2xl mx-auto">
            Book a free demo and we will show you exactly how ClinicFlow works for your type of clinic. No commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo" variant="secondary" size="lg" id="for-clinics-cta-demo">
              Book a Free Demo
            </Button>
            <Button href="/pricing" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" id="for-clinics-cta-pricing">
              View Pricing →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
