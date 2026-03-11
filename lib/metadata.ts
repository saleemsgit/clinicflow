import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clinicflowlk.vercel.app';
const SITE_NAME = 'ClinicFlow LK';

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = '/og-image.png',
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_LK',
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}

export { SITE_URL, SITE_NAME };
