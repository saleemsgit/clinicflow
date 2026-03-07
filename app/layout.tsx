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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://clinicflow.lk'),
  title: {
    default: 'ClinicFlow LK — Clinic Appointment & Queue Management System',
    template: '%s | ClinicFlow LK',
  },
  description:
    'A simple appointment scheduling and walk-in queue management system for Sri Lankan clinics. Reduce no-shows, prevent double booking, and speed up front-desk operations.',
  keywords: [
    'clinic appointment system Sri Lanka',
    'clinic queue management',
    'appointment booking software',
    'doctor scheduling system',
    'channeling center software',
    'dental clinic booking',
    'clinic management software Sri Lanka',
  ],
  authors: [{ name: 'ClinicFlow LK' }],
  creator: 'ClinicFlow LK',
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    siteName: 'ClinicFlow LK',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClinicFlow LK — Clinic Appointment & Queue Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clinicflowlk',
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
