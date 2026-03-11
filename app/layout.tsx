import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://clinicflowlk.vercel.app'),
  title: {
    default: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
    template: '%s | ClinicFlow LK',
  },
  description:
    'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, reminders, and front desk work in one simple system.',
  keywords: [
    'clinic appointment system Sri Lanka',
    'clinic queue system Sri Lanka',
    'clinic software Sri Lanka',
    'simple clinic appointment system',
    'appointment and walk-in queue system',
    'Sri Lankan clinics',
    'WhatsApp reminders for clinics',
    'doctor schedule visibility',
    'clinic front desk software',
    'private clinic software Sri Lanka',
    'dental clinic appointment system',
    'channeling clinic queue management',
  ],
  authors: [{ name: 'ClinicFlow LK' }],
  creator: 'ClinicFlow LK',
  publisher: 'ClinicFlow LK',
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    siteName: 'ClinicFlow LK',
    title: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
    description: 'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, reminders, and front desk work in one simple system.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClinicFlow LK - Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clinicflowlk',
    title: 'ClinicFlow LK | Simple Clinic Appointment and Queue System for Sri Lankan Clinics',
    description: 'ClinicFlow LK helps Sri Lankan clinics manage appointments, walk-in queues, doctor schedules, reminders, and front desk work in one simple system.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'igSTlpGHiJ9WHWFvK9GDH9GhAgZ4CYIPC29ar1nu7JA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
