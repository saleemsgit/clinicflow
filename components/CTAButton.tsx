'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
  id?: string;
}

const variantClasses = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-sm',
  outline:
    'border-2 border-primary-600 text-primary-700 hover:bg-primary-50',
};

const sizeClasses = {
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function CTAButton({
  children,
  href,
  eventName,
  eventParams = {},
  variant = 'primary',
  size = 'md',
  className = '',
  id,
}: CTAButtonProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      link_url: href,
      ...eventParams,
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      id={id}
    >
      {children}
    </Link>
  );
}
