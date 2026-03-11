import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'ClinicFlow LK Pricing | Clinic Software Pricing in Sri Lanka',
  description:
    'See simple ClinicFlow LK pricing for Sri Lankan clinics. Compare plans for appointment booking, queue management, WhatsApp reminders, and front desk support. Starting from LKR 4,900 per month.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'ClinicFlow LK Pricing | Clinic Software Pricing in Sri Lanka',
    description: 'See simple ClinicFlow LK pricing for Sri Lankan clinics. Compare plans for appointment booking, queue management, WhatsApp reminders, and front desk support. Starting from LKR 4,900 per month.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    title: 'ClinicFlow LK Pricing | Clinic Software Pricing in Sri Lanka',
    description: 'See simple ClinicFlow LK pricing for Sri Lankan clinics. Compare plans for appointment booking, queue management, WhatsApp reminders, and front desk support. Starting from LKR 4,900 per month.',
  },
};

const plans = [
  {
    name: 'Starter',
    desc: 'For single-doctor clinics and small practices just getting started.',
    price: '4,900',
    period: '/month',
    popular: false,
    features: [
      '1 doctor profile',
      'Appointment calendar',
      'Walk-in queue management',
      'WhatsApp/SMS reminders (up to 200/month)',
      'Basic patient records',
      'Daily summary dashboard',
      'Email support',
    ],
  },
  {
    name: 'Standard',
    desc: 'For multi-doctor clinics that need better scheduling and reporting.',
    price: '9,900',
    period: '/month',
    popular: true,
    features: [
      'Up to 5 doctor profiles',
      'Advanced scheduling with service types',
      'Priority queue management',
      'WhatsApp/SMS reminders (up to 500/month)',
      'Full patient records with visit notes',
      'Detailed reports and analytics',
      'Weekly and monthly trend reports',
      'Priority WhatsApp support',
    ],
  },
  {
    name: 'Pro',
    desc: 'For busy clinics and growing operations that need advanced features.',
    price: '19,900',
    period: '/month',
    popular: false,
    features: [
      'Unlimited doctor profiles',
      'Multi-branch support',
      'Advanced analytics and insights',
      'Unlimited WhatsApp/SMS reminders',
      'Complete patient management system',
      'Custom report generation',
      'Staff performance tracking',
      'Dedicated account manager',
      'Priority phone and WhatsApp support',
      'Custom onboarding session',
    ],
  },
];

const faqItems = [
  {
    question: 'Can I try ClinicFlow before paying?',
    answer:
      'Yes. Book a free demo and we will walk you through the system. You can also start with a 14-day free trial on any plan — no credit card required.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No. There are no setup fees, no hidden costs, and no long-term contracts. You pay the monthly fee and that is it.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, online payments via Visa/Mastercard, and mobile payments. We will send you an invoice each month.',
  },
  {
    question: 'What if I have more than 5 doctors?',
    answer:
      'The Pro plan supports unlimited doctors. If you need a custom plan for a large clinic network, contact us and we will create a tailored solution.',
  },
  {
    question: 'Do you offer annual billing discounts?',
    answer:
      'Yes. Annual billing gives you two months free on any plan. Contact us to set up annual billing.',
  },
];

export default function PricingPage() {
  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ClinicFlow LK',
    applicationCategory: 'HealthApplication',
    offers: plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.price.replace(',', ''),
      priceCurrency: 'LKR',
      priceValidUntil: '2027-12-31',
    })),
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
      <JsonLd data={pricingJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-surface-alt py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
            Clinic software pricing in Sri Lanka
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing for Sri Lankan clinics. No hidden fees. No long-term contracts. Choose a plan that fits your clinic size and start managing appointments, queues, and reminders today.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────── */}
      <SectionWrapper background="white" className="!-mt-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? 'border-primary-400 shadow-xl shadow-primary-600/10 ring-1 ring-primary-400'
                  : 'border-border shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{plan.desc}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-text-muted">LKR</span>
                  <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                  <span className="text-text-muted">{plan.period}</span>
                </div>
                <p className="text-xs text-text-muted mt-1">Billed monthly. Annual billing available.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/book-demo"
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
                id={`pricing-${plan.name.toLowerCase()}-cta`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Plan */}
        <div className="max-w-5xl mx-auto mt-8 p-6 rounded-xl bg-surface-alt border border-border-light text-center">
          <p className="text-text-secondary">
            <span className="font-semibold text-navy-900">Need a custom plan?</span>{' '}
            If you run a multi-branch clinic or need specific features, let&apos;s talk.
          </p>
          <Button href="/book-demo" variant="ghost" className="mt-3" id="pricing-custom-cta">
            Contact Us →
          </Button>
        </div>
      </SectionWrapper>

      {/* ── Value Section ─────────────────────────────────────── */}
      <SectionWrapper background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
            The cost of not using clinic software in Sri Lanka
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Every no-show costs your clinic a consultation fee. Every double booking costs you a patient. Every hour your receptionist spends on the phone is an hour they could spend on care. ClinicFlow LK pays for itself within the first month.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-white rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary-600">LKR 2,000</div>
              <p className="text-sm text-text-muted mt-2">Average cost per no-show consultation</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary-600">5–10</div>
              <p className="text-sm text-text-muted mt-2">No-shows per week at a typical clinic</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary-600">LKR 40K+</div>
              <p className="text-sm text-text-muted mt-2">Monthly revenue lost to no-shows alone</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <SectionWrapper background="white" id="pricing-faq">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Clinic software pricing questions
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Common questions about ClinicFlow LK pricing for Sri Lankan clinics.
            </p>
          </header>
          <FAQ items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start your free clinic software demo today
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-2xl mx-auto">
            See the full ClinicFlow LK system in action. No commitment. No credit card needed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo" variant="secondary" size="lg" id="pricing-final-cta">
              Book a Free Demo
            </Button>
            <Button href="/features" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" id="pricing-features-cta">
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
