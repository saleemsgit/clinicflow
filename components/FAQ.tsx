'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3" role="list" aria-label="Frequently asked questions">
      {items.map((item, index) => (
        <article
          key={index}
          className="border border-border rounded-xl overflow-hidden transition-all"
          role="listitem"
        >
          <h3>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-alt transition-colors cursor-pointer"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-item-${index}`}
            >
              <span className="font-medium text-text-primary pr-4">{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </h3>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            role="region"
            aria-labelledby={`faq-item-${index}`}
          >
            <p className="px-6 pb-4 text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
