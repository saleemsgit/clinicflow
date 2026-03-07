'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/for-clinics', label: 'For Clinics' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-text-secondary hover:bg-surface-muted transition-colors cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        id="mobile-nav-toggle"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-50 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-text-secondary hover:text-primary-700 hover:bg-primary-50 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-demo"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-primary-600 text-white rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors"
              id="mobile-nav-book-demo"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
